"use client";

import { useState } from "react";
import { PROJECT_TYPE_OPTIONS } from "@/lib/contact-types";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success"; id: string }
  | { kind: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

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
          onClick={() => setStatus({ kind: "idle" })}
          className="cta-secondary self-start mt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  const submitting = status.kind === "submitting";
  const errorMsg = status.kind === "error" ? status.message : null;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name *" name="fullName" type="text" required autoComplete="name" />
        <Field
          label="Email Address *"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          autoComplete="tel"
        />
        <Field
          label="Company Name"
          name="companyName"
          type="text"
          autoComplete="organization"
        />
      </div>

      <SelectField
        label="What type of project? *"
        name="projectType"
        required
        options={PROJECT_TYPE_OPTIONS.map((o) => ({ value: o.value, label: o.label }))}
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
          className="w-full border border-neutral-300 rounded-sm p-3 p4 text-black-500 bg-white-200 focus:outline-none focus:border-cobolt-500 resize-none"
        />
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

      {errorMsg && (
        <div
          role="alert"
          className="bg-red-50 border border-red-300 text-red-900 p-3 rounded-sm p5"
        >
          {errorMsg}
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
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
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
        className="w-full border border-neutral-300 rounded-sm px-3 py-2.5 p4 text-black-500 bg-white-200 focus:outline-none focus:border-cobolt-500"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  required,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: { value: string; label: string }[];
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
        className="w-full border border-neutral-300 rounded-sm px-3 py-2.5 p4 text-black-500 bg-white-200 focus:outline-none focus:border-cobolt-500"
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
    </div>
  );
}
