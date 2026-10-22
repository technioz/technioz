"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  BUDGET_OPTIONS,
  DECISION_OPTIONS,
  FUNDING_OPTIONS,
  IDEA_STAGE_OPTIONS,
  TECH_OPTIONS,
  TIMELINE_OPTIONS,
  UTM_KEYS,
} from "@/lib/campaign-lead-options";
import { ideaProblem } from "@/lib/idea-text";
import { FORM_TIME_FIELD, HONEYPOT_FIELD } from "@/lib/honeypot";
import { trackPixelEvent } from "@/lib/meta-pixel";
import { BTN_PRIMARY, BTN_SECONDARY, CALENDLY_URL, LANDING_PATH, whatsappUrl } from "./constants";

type Details = { fullName: string; email: string; company: string; whatsapp: string };
type Qualifiers = {
  ideaStage: string;
  funding: string;
  budget: string;
  timeline: string;
  techBackground: string;
  decisionRole: string;
  idea: string;
};
type Errors = Partial<Record<keyof Details | keyof Qualifiers | "form", string>>;
type Result = { qualified: boolean; emailSent: boolean; firstName: string; summary: string; calendlySrc: string; calendlyPageUrl: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass = (invalid: boolean) =>
  `w-full min-h-[50px] rounded-sm border-[1.5px] bg-white-100 px-[14px] p4 text-black-500 outline-none transition-[border-color,box-shadow] focus:border-cobolt-500 focus:shadow-[0_0_0_3px_rgba(57,35,199,0.16)] ${
    invalid ? "border-error" : "border-neutral-300"
  }`;

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function scrollIntoViewSoft(el: Element | null) {
  el?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
}

export function LeadForm() {
  // One screen, one submit. The two-step version lost people between the steps
  // (Gaurav, 19 Oct 2026), so everything is asked at once now.
  const [details, setDetails] = useState<Details>({ fullName: "", email: "", company: "", whatsapp: "" });
  const [qualifiers, setQualifiers] = useState<Qualifiers>({
    ideaStage: "",
    funding: "",
    budget: "",
    timeline: "",
    techBackground: "",
    decisionRole: "",
    idea: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [booked, setBooked] = useState(false);
  const [copied, setCopied] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const resultHeadingRef = useRef<HTMLHeadingElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const trackingRef = useRef<{ utm: Record<string, string>; referrer: string }>({ utm: {}, referrer: "" });
  const mountedAtRef = useRef<number | null>(null);

  // Capture ad attribution (UTM + fbclid) and referrer from the landing URL.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    for (const key of UTM_KEYS) {
      const v = params.get(key);
      if (v) utm[key] = v;
    }
    trackingRef.current = { utm, referrer: document.referrer };
    mountedAtRef.current = Date.now();
  }, []);

  // Detect a completed Calendly booking (inline embed posts a message).
  useEffect(() => {
    if (!result?.qualified) return;
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== "https://calendly.com") return;
      const data = e.data as { event?: string } | null;
      if (data?.event === "calendly.event_scheduled") {
        setBooked(true);
        trackPixelEvent("Schedule");
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [result?.qualified]);

  const setD = (k: keyof Details) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails((s) => ({ ...s, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };
  const setQ = (k: keyof Qualifiers) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setQualifiers((s) => ({ ...s, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    // Everything is validated in one pass, in the order the fields appear, so
    // the first error we focus is the one highest on the screen.
    const er: Errors = {};
    if (!details.fullName.trim()) er.fullName = "Please add your name.";
    if (!EMAIL_RE.test(details.email.trim())) er.email = "Please add a valid email address.";
    if (!details.company.trim()) er.company = "Please add your company or startup name.";
    if (details.whatsapp.replace(/\D/g, "").length < 9) er.whatsapp = "Please add a valid WhatsApp number with country code.";
    if (!qualifiers.ideaStage) er.ideaStage = "Please pick one.";
    if (!qualifiers.funding) er.funding = "Please pick one.";
    if (!qualifiers.budget) er.budget = "Please select a budget range.";
    if (!qualifiers.decisionRole) er.decisionRole = "Please pick one.";
    const ideaIssue = ideaProblem(qualifiers.idea);
    if (ideaIssue) er.idea = ideaIssue;
    setErrors(er);
    if (Object.keys(er).length) {
      document.getElementById(`lead-${Object.keys(er)[0]}`)?.focus();
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...details,
          ...qualifiers,
          landingPath: LANDING_PATH,
          utm: trackingRef.current.utm,
          referrer: trackingRef.current.referrer,
          [HONEYPOT_FIELD]: Boolean(honeypotRef.current?.checked),
          [FORM_TIME_FIELD]: mountedAtRef.current ? Date.now() - mountedAtRef.current : null,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; qualified?: boolean; emailSent?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setErrors({ form: data.error ?? "Something went wrong. Please try again or message us on WhatsApp." });
        return;
      }

      trackPixelEvent("Lead");
      const summary = [
        "New SaaS build enquiry - Technioz",
        `Name: ${details.fullName.trim()}`,
        `Email: ${details.email.trim()}`,
        `Company: ${details.company.trim()}`,
        `WhatsApp: ${details.whatsapp.trim()}`,
        `Idea stage: ${qualifiers.ideaStage}`,
        `Funding: ${qualifiers.funding}`,
        `Budget: ${qualifiers.budget}`,
        `Timeline: ${qualifiers.timeline || "Not specified"}`,
        `Tech background: ${qualifiers.techBackground || "Not specified"}`,
        `Decision maker: ${qualifiers.decisionRole}`,
        `Idea: ${qualifiers.idea.trim() || "Not shared yet"}`,
      ].join("\n");
      setResult({
        qualified: Boolean(data.qualified),
        emailSent: Boolean(data.emailSent),
        firstName: details.fullName.trim().split(/\s+/)[0],
        summary,
        // embed_domain lets Calendly post the "event_scheduled" message back to us.
        // hide_event_type_details puts the date grid first; hide_gdpr_banner stops
        // Calendly's own cookie notice covering it (our consent banner covers the page).
        calendlySrc: `${CALENDLY_URL}?${new URLSearchParams({
          embed_domain: window.location.host,
          embed_type: "Inline",
          hide_event_type_details: "1",
          hide_gdpr_banner: "1",
          name: details.fullName.trim(),
          email: details.email.trim(),
        }).toString()}`,
        calendlyPageUrl: `${CALENDLY_URL}?${new URLSearchParams({ name: details.fullName.trim(), email: details.email.trim() }).toString()}`,
      });
      requestAnimationFrame(() => {
        scrollIntoViewSoft(cardRef.current);
        resultHeadingRef.current?.focus({ preventScroll: true });
      });
    } catch {
      setErrors({ form: "Network error. Please check your connection and try again." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div ref={cardRef} className="scroll-mt-24 rounded-sm bg-white-100 p-[24px] text-black-500 sm:p-[28px]">
      {result ? (
        result.qualified ? (
          <QualifiedResult
            result={result}
            booked={booked}
            copied={copied}
            onCopy={() => {
              navigator.clipboard?.writeText(result.summary).then(() => setCopied(true));
            }}
            headingRef={resultHeadingRef}
            calendlySrc={result.calendlySrc}
            calendlyPageUrl={result.calendlyPageUrl}
          />
        ) : (
          <NotYetResult firstName={result.firstName} emailSent={result.emailSent} headingRef={resultHeadingRef} />
        )
      ) : (
        <form onSubmit={submit} noValidate>
          {/* Spam signal: hidden checkbox. Ticked = flagged, never discarded. See src/lib/honeypot.ts. */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 overflow-hidden">
            <label>
              <input ref={honeypotRef} name={HONEYPOT_FIELD} type="checkbox" value="1" tabIndex={-1} autoComplete="off" />
              Contact me by fax only
            </label>
          </div>

          <h3 className="font-display text-[22px] leading-[1.15] tracking-[-0.8px] text-black-500">Tell us about your build</h3>
          <p className="p5 mt-1 mb-[18px] text-black-300">Takes about 90 seconds. Then pick your call time.</p>

          <p className="mb-[10px] font-mono text-[11px] uppercase tracking-[0.12em] text-cobolt-500">Your details</p>

          <Field id="fullName" label="Full name *" error={errors.fullName}>
            <input id="lead-fullName" autoComplete="name" placeholder="e.g. Ahmed Al Mansoori" value={details.fullName} onChange={setD("fullName")} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? "lead-fullName-error" : undefined} className={inputClass(Boolean(errors.fullName))} />
          </Field>
          <Field id="email" label="Email *" error={errors.email}>
            <input id="lead-email" type="email" inputMode="email" autoComplete="email" placeholder="you@company.com / you@gmail.com" value={details.email} onChange={setD("email")} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "lead-email-error" : undefined} className={inputClass(Boolean(errors.email))} />
          </Field>
          <Field id="company" label="Company or startup name *" error={errors.company}>
            <input id="lead-company" autoComplete="organization" placeholder="e.g. Desert Cart Technologies" value={details.company} onChange={setD("company")} aria-invalid={Boolean(errors.company)} aria-describedby={errors.company ? "lead-company-error" : undefined} className={inputClass(Boolean(errors.company))} />
          </Field>
          <Field id="whatsapp" label="WhatsApp number *" error={errors.whatsapp} hint="We confirm your booking here. No spam, ever.">
            <input id="lead-whatsapp" type="tel" inputMode="tel" autoComplete="tel" placeholder="+971 5x xxx xxxx" value={details.whatsapp} onChange={setD("whatsapp")} aria-invalid={Boolean(errors.whatsapp)} aria-describedby={errors.whatsapp ? "lead-whatsapp-error" : "lead-whatsapp-hint"} className={inputClass(Boolean(errors.whatsapp))} />
          </Field>

          <p className="mt-[24px] mb-[12px] font-mono text-[11px] uppercase tracking-[0.12em] text-cobolt-500">About the build</p>

          <PillGroup id="ideaStage" legend="Where is your idea right now? *" name="ideaStage" options={IDEA_STAGE_OPTIONS} value={qualifiers.ideaStage} onChange={setQ("ideaStage")} error={errors.ideaStage} />
          <PillGroup id="funding" legend="Funding status *" name="funding" options={FUNDING_OPTIONS} value={qualifiers.funding} onChange={setQ("funding")} error={errors.funding} />

          {/* Said before the choice, so nobody wastes a call below the minimum. */}
          <p id="lead-budget-note" className="mb-[10px] rounded-sm border border-cobolt-200 bg-cobolt-100/50 px-[12px] py-[10px] text-[13.5px] leading-[1.5] text-black-500">
            Our builds start at AED 18,000.
          </p>
          <Field id="budget" label="Budget set aside for this build *" error={errors.budget}>
            <select id="lead-budget" value={qualifiers.budget} onChange={setQ("budget")} aria-invalid={Boolean(errors.budget)} aria-describedby={errors.budget ? "lead-budget-error" : "lead-budget-note"} className={inputClass(Boolean(errors.budget))}>
              <option value="">Select budget range</option>
              {BUDGET_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </Field>

          <Field id="timeline" label="When do you want to launch?">
            <select id="lead-timeline" value={qualifiers.timeline} onChange={setQ("timeline")} className={inputClass(false)}>
              <option value="">Select timeline</option>
              {TIMELINE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </Field>

          <PillGroup id="techBackground" legend="Your tech background" name="techBackground" options={TECH_OPTIONS} value={qualifiers.techBackground} onChange={setQ("techBackground")} />
          <PillGroup id="decisionRole" legend="Are you the decision maker for this build? *" name="decisionRole" options={DECISION_OPTIONS} value={qualifiers.decisionRole} onChange={setQ("decisionRole")} error={errors.decisionRole} />

          <Field id="idea" label="Your idea in a few words *" error={errors.idea} hint="One sentence is enough.">
            <input id="lead-idea" placeholder="e.g. Booking app for dentists in Dubai" maxLength={1000} value={qualifiers.idea} onChange={setQ("idea")} aria-invalid={Boolean(errors.idea)} aria-describedby={errors.idea ? "lead-idea-error" : "lead-idea-hint"} className={inputClass(Boolean(errors.idea))} />
          </Field>

          {errors.form && (
            <p role="alert" className="p5 mb-[12px] rounded-sm border border-error/40 bg-error/5 p-3 text-error">{errors.form}</p>
          )}

          <button type="submit" disabled={submitting} className={`${BTN_PRIMARY} mt-[6px] w-full disabled:opacity-60`}>
            {submitting ? "Sending..." : "Book your free strategy call"}
          </button>
          <p className="mt-[10px] text-center text-[12px] text-black-300">
            We use these details only for this enquiry. See our{" "}
            <Link href="/privacy" className="underline hover:text-cobolt-500">Privacy Policy</Link>.
          </p>
        </form>
      )}
    </div>
  );
}

function Field({ id, label, error, hint, children }: { id: string; label: string; error?: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="mb-[14px]">
      <label htmlFor={`lead-${id}`} className="mb-[6px] block text-[13px] font-bold text-black-500">{label}</label>
      {children}
      {hint && !error && <p id={`lead-${id}-hint`} className="mt-[5px] text-[12.5px] text-black-300">{hint}</p>}
      {error && <p id={`lead-${id}-error`} role="alert" className="mt-[5px] text-[12.5px] font-bold text-error">{error}</p>}
    </div>
  );
}

function PillGroup({
  id,
  legend,
  name,
  options,
  value,
  onChange,
  error,
}: {
  id: string;
  legend: string;
  name: string;
  options: readonly { value: string; label: string }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) {
  return (
    <fieldset className="mb-[14px]" aria-describedby={error ? `lead-${id}-error` : undefined}>
      <legend className="mb-[6px] block text-[13px] font-bold text-black-500">{legend}</legend>
      <div className="grid grid-cols-2 gap-[8px]">
        {options.map((o, i) => (
          <label key={o.value} className="relative cursor-pointer">
            <input
              id={i === 0 ? `lead-${id}` : undefined}
              type="radio"
              name={name}
              value={o.value}
              checked={value === o.value}
              onChange={onChange}
              className="peer sr-only"
            />
            <span className="flex min-h-[46px] items-center justify-center rounded-sm border-[1.5px] border-neutral-300 bg-white-100 px-[10px] py-[6px] text-center text-[13.5px] font-bold text-black-500 transition-colors peer-checked:border-cobolt-500 peer-checked:bg-cobolt-500 peer-checked:text-white-100 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-cobolt-500 hover:border-cobolt-300">
              {o.label}
            </span>
          </label>
        ))}
      </div>
      {error && <p id={`lead-${id}-error`} role="alert" className="mt-[5px] text-[12.5px] font-bold text-error">{error}</p>}
    </fieldset>
  );
}

function CheckBadge() {
  return (
    <div className="grid h-[48px] w-[48px] place-items-center rounded-full bg-cobolt-100 text-cobolt-500" aria-hidden="true">
      <svg width="22" height="22" viewBox="0 0 20 20" fill="none"><path d="M4 10.5 8 14 16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </div>
  );
}

function QualifiedResult({
  result,
  booked,
  copied,
  onCopy,
  headingRef,
  calendlySrc,
  calendlyPageUrl,
}: {
  result: Result;
  booked: boolean;
  copied: boolean;
  onCopy: () => void;
  headingRef: React.RefObject<HTMLHeadingElement | null>;
  calendlySrc: string;
  calendlyPageUrl: string;
}) {
  return (
    <div>
      <CheckBadge />
      <h3 ref={headingRef} tabIndex={-1} className="mt-[10px] font-display text-[25px] leading-[1.12] tracking-[-0.8px] text-black-500 outline-none">
        {booked ? `You're booked, ${result.firstName}.` : `Thanks, ${result.firstName}. Now pick your call time.`}
      </h3>
      <p className="p5 mt-[8px] text-black-400" aria-live="polite">
        {booked
          ? "Your call is in the calendar. You get a fixed quote within 48 hours of the call. We will confirm on WhatsApp within 10 minutes in working hours."
          : `Pick a 30 minute slot in the calendar below. You get a fixed quote within 48 hours of the call.${result.emailSent ? " We have also emailed you a copy of your details." : ""}`}
      </p>

      {!booked && (
        <p className="mt-[16px] flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-cobolt-500" aria-hidden="true">
          <span className="h-px w-[24px] bg-current" /> Choose a day, then a time
        </p>
      )}
      <iframe
        title="Pick your 30 minute call time on Calendly"
        src={calendlySrc}
        className="mt-[10px] h-[640px] w-full rounded-sm border border-neutral-300 bg-white-100"
      />
      <p className="mt-[8px] text-center text-[12.5px] text-black-300">
        Calendar not loading?{" "}
        <a href={calendlyPageUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-cobolt-500">
          Open it in a new tab
        </a>
        .
      </p>

      <div className="mt-[16px] grid gap-[10px]">
        <a className={`${BTN_SECONDARY} w-full`} href={whatsappUrl(`Hi Technioz, I just filled your SaaS build form.\n\n${result.summary}\n\nI want to book my quote call.`)} target="_blank" rel="noopener noreferrer">
          Send my details on WhatsApp
        </a>
        <button type="button" className={`${BTN_SECONDARY} w-full`} onClick={onCopy}>
          Copy my details
        </button>
      </div>
      {copied && <p className="mt-[8px] text-center text-[13px] font-bold text-cobolt-500" role="status">Copied. Paste it anywhere you need.</p>}
      <details className="mt-[12px]">
        <summary className="cursor-pointer p5 text-black-400 hover:text-cobolt-500">Your answers</summary>
        <pre className="mt-[8px] whitespace-pre-wrap break-words rounded-sm border border-neutral-200 bg-white-300 p-[14px] font-body text-[13.5px] leading-[1.6] text-black-500">{result.summary}</pre>
      </details>
    </div>
  );
}

function NotYetResult({ firstName, emailSent, headingRef }: { firstName: string; emailSent: boolean; headingRef: React.RefObject<HTMLHeadingElement | null> }) {
  return (
    <div>
      <CheckBadge />
      <h3 ref={headingRef} tabIndex={-1} className="mt-[10px] font-display text-[25px] leading-[1.12] tracking-[-0.8px] text-black-500 outline-none">
        Thanks, {firstName}. A full build isn&apos;t the right first step yet.
      </h3>
      <p className="p4 mt-[10px] text-black-400">
        Our minimum project is AED 18,000. With a budget under AED 18k, a prototype tool is a better start to test if
        people want your idea.
      </p>
      <p className="p4 mt-[10px] text-black-400">
        We&apos;ve saved your details{emailSent ? " and emailed you a copy" : ""}. No hard feelings. Come back when the funding and idea are ready, we will be here.
      </p>
      <a className={`${BTN_SECONDARY} mt-[18px] w-full`} href={whatsappUrl("Hi Technioz, I filled your SaaS build form and have a question.")} target="_blank" rel="noopener noreferrer">
        Questions? Message us on WhatsApp
      </a>
    </div>
  );
}
