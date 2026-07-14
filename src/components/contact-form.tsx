"use client";

import { useState } from "react";
import { PROJECT_TYPE_OPTIONS } from "@/lib/contact-types";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; id: string }
  | { kind: "error"; message: string };

type FieldErrors = Partial<
  Record<"fullName" | "email" | "phone" | "companyName" | "projectType" | "message", string>
>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateLocally(payload: Record<string, string>): FieldErrors {
  const errors: FieldErrors = {};

  if (!payload.fullName.trim()) {
    errors.fullName = "Please enter your name";
  } else if (payload.fullName.length > 200) {
    errors.fullName = "Name is too long";
  }

  if (!payload.email.trim()) {
    errors.email = "Please enter your email";
  } else if (!EMAIL_RE.test(payload.email.trim())) {
    errors.email = "That doesn't look like a valid email";
  } else if (payload.email.length > 254) {
    errors.email = "Email is too long";
  }

  if (payload.phone && payload.phone.length > 5000) {
    errors.phone = "Phone is too long";
  }

  if (payload.companyName && payload.companyName.length > 5000) {
    errors.companyName = "Company name is too long";
  }

  if (!payload.projectType) {
    errors.projectType = "Please pick a project type";
  }

  if (!payload.message.trim()) {
    errors.message = "Please add a short message";
  } else if (payload.message.trim().length < 3) {
    errors.message = "Message is too short (min 3 characters)";
  } else if (payload.message.length > 5000) {
    errors.message = "Message is too long";
  }

  return errors;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status.kind === "submitting") return;

    const form = event.currentTarget;
    const fd = new FormData(form);

    const payload = {
      fullName: String(fd.get("fullName") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      companyName: String(fd.get("companyName") ?? ""),
      projectType: String(fd.get("projectType") ?? ""),
      message: String(fd.get("message") ?? ""),
      // Honeypot — must be empty.
      company_url: String(fd.get("company_url") ?? ""),
    };

    // Client-side validation first — fail fast without a network round-trip
    const errors = validateLocally(payload);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus({
        kind: "error",
        message: "Please fix the highlighted fields and try again.",
      });
      // Focus the first invalid field for accessibility
      const firstKey = Object.keys(errors)[0];
      const firstEl = form.querySelector<HTMLElement>(`[name="${firstKey}"]`);
      firstEl?.focus();
      return;
    }

    setFieldErrors({});
    setStatus({ kind: "submitting" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        id?: string;
        error?: string;
      };
      if (!res.ok || !data.ok) {
        setStatus({
          kind: "error",
          message: data.error ?? `Submission failed (${res.status})`,
        });
        return;
      }
      setStatus({ kind: "success", id: data.id ?? "" });
      form.reset();
    } catch (err) {
      setStatus({
        kind: "error",
        message:
          err instanceof Error
            ? err.message
            : "Network error. Please try again or email info@technioz.com.",
      });
    }
  }

  // Clear a field's error as the user types in it
  function clearFieldError(name: keyof FieldErrors) {
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  if (status.kind === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="bg-cobolt-500/5 border border-cobolt-500/30 rounded-sm p-8 flex flex-col gap-3"
      >
        <h3 className="font-display text-[24px] leading-none tracking-[-1.2px] text-cobolt-500">
          Thanks — message received.
        </h3>
        <p className="p3 text-black-500">
          We&apos;ll respond within 24 hours. For urgent requests, WhatsApp us at
          {" "}
          <a className="underline" href="https://wa.me/971569451930">
            +971 56 945 1930
          </a>
          .
        </p>
        <p className="p5 text-black-300">
          Reference: <code className="font-mono">{status.id}</code>
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus({ kind: "idle" });
            setFieldErrors({});
          }}
          className="cta-secondary self-start mt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  const submitting = status.kind === "submitting";
  // Only show the banner for server-side errors (not local validation)
  const showBanner =
    status.kind === "error" && Object.keys(fieldErrors).length === 0;
  const showFieldErrorBanner =
    status.kind === "error" && Object.keys(fieldErrors).length > 0;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          label="Full Name *"
          name="fullName"
          type="text"
          required
          autoComplete="name"
          error={fieldErrors.fullName}
          onChange={() => clearFieldError("fullName")}
        />
        <Field
          label="Email Address *"
          name="email"
          type="email"
          required
          autoComplete="email"
          error={fieldErrors.email}
          onChange={() => clearFieldError("email")}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          autoComplete="tel"
          error={fieldErrors.phone}
          onChange={() => clearFieldError("phone")}
        />
        <Field
          label="Company Name"
          name="companyName"
          type="text"
          autoComplete="organization"
          error={fieldErrors.companyName}
          onChange={() => clearFieldError("companyName")}
        />
      </div>

      <SelectField
        label="What type of project? *"
        name="projectType"
        required
        options={PROJECT_TYPE_OPTIONS.map((o) => ({ value: o.value, label: o.label }))}
        error={fieldErrors.projectType}
        onChange={() => clearFieldError("projectType")}
      />

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="p4 text-black-500">
          What can we help you with? *
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          minLength={3}
          maxLength={5000}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
          onChange={() => clearFieldError("message")}
          className={`w-full border rounded-sm p-3 p4 text-black-500 bg-white-200 focus:outline-none resize-none ${
            fieldErrors.message ? "border-red-500 focus:border-red-500" : "border-neutral-300 focus:border-cobolt-500"
          }`}
        />
        {fieldErrors.message && (
          <p id="contact-message-error" className="text-red-600 p5" role="alert">
            {fieldErrors.message}
          </p>
        )}
      </div>

      {/* Honeypot — hidden from humans, visible to bots. Must remain empty. */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", height: 0, overflow: "hidden" }}>
        <label htmlFor="company_url">Company website (do not fill)</label>
        <input
          id="company_url"
          name="company_url"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {showFieldErrorBanner && (
        <div
          role="alert"
          className="bg-red-50 border border-red-300 text-red-900 p-3 rounded-sm p5"
        >
          {status.kind === "error" ? status.message : null}
        </div>
      )}

      {showBanner && status.kind === "error" && (
        <div
          role="alert"
          className="bg-red-50 border border-red-300 text-red-900 p-3 rounded-sm p5"
        >
          {status.message}
        </div>
      )}

      <button type="submit" disabled={submitting} className="cta-primary !px-8 disabled:opacity-50">
        {submitting ? "Sending..." : "Send Message"}
      </button>
      <p className="p5 text-black-300">
        We reply within 24 hours. Your information is confidential and an NDA is
        available on request.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
  autoComplete,
  error,
  onChange,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
  onChange?: () => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={`contact-${name}`} className="p4 text-black-500">
        {label}
      </label>
      <input
        id={`contact-${name}`}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        maxLength={5000}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `contact-${name}-error` : undefined}
        onChange={onChange}
        className={`w-full border rounded-sm px-3 py-2.5 p4 text-black-500 bg-white-200 focus:outline-none ${
          error ? "border-red-500 focus:border-red-500" : "border-neutral-300 focus:border-cobolt-500"
        }`}
      />
      {error && (
        <p id={`contact-${name}-error`} className="text-red-600 p5" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  label,
  name,
  required,
  options,
  error,
  onChange,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: { value: string; label: string }[];
  error?: string;
  onChange?: () => void;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={`contact-${name}`} className="p4 text-black-500">
        {label}
      </label>
      <select
        id={`contact-${name}`}
        name={name}
        required={required}
        defaultValue=""
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `contact-${name}-error` : undefined}
        onChange={onChange}
        className={`w-full border rounded-sm px-3 py-2.5 p4 text-black-500 bg-white-200 focus:outline-none ${
          error ? "border-red-500 focus:border-red-500" : "border-neutral-300 focus:border-cobolt-500"
        }`}
      >
        <option value="" disabled>
          Select a project type...
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`contact-${name}-error`} className="text-red-600 p5" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
