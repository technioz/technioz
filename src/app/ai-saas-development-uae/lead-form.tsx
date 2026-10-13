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
import { trackPixelEvent } from "@/lib/meta-pixel";
import { BTN_PRIMARY, BTN_SECONDARY, CALENDLY_URL, LANDING_PATH, whatsappUrl } from "./constants";

type Step1 = { fullName: string; email: string; company: string; whatsapp: string };
type Step2 = {
  ideaStage: string;
  funding: string;
  budget: string;
  timeline: string;
  techBackground: string;
  decisionRole: string;
  idea: string;
};
type Errors = Partial<Record<keyof Step1 | keyof Step2 | "form", string>>;
type Result = { qualified: boolean; firstName: string; summary: string; calendlySrc: string };

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
  const [step, setStep] = useState<1 | 2>(1);
  const [s1, setS1] = useState<Step1>({ fullName: "", email: "", company: "", whatsapp: "" });
  const [s2, setS2] = useState<Step2>({
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
  const step2HeadingRef = useRef<HTMLHeadingElement>(null);
  const resultHeadingRef = useRef<HTMLHeadingElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const trackingRef = useRef<{ utm: Record<string, string>; referrer: string }>({ utm: {}, referrer: "" });

  // Capture ad attribution (UTM + fbclid) and referrer from the landing URL.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    for (const key of UTM_KEYS) {
      const v = params.get(key);
      if (v) utm[key] = v;
    }
    trackingRef.current = { utm, referrer: document.referrer };
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

  const set1 = (k: keyof Step1) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setS1((s) => ({ ...s, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };
  const set2 = (k: keyof Step2) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setS2((s) => ({ ...s, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  function goToStep2() {
    const er: Errors = {};
    if (!s1.fullName.trim()) er.fullName = "Please add your name.";
    if (!EMAIL_RE.test(s1.email.trim())) er.email = "Please add a valid email address.";
    if (!s1.company.trim()) er.company = "Please add your company or startup name.";
    if (s1.whatsapp.replace(/\D/g, "").length < 9) er.whatsapp = "Please add a valid WhatsApp number with country code.";
    setErrors(er);
    if (Object.keys(er).length) {
      document.getElementById(`lead-${Object.keys(er)[0]}`)?.focus();
      return;
    }
    setStep(2);
    requestAnimationFrame(() => {
      scrollIntoViewSoft(cardRef.current);
      step2HeadingRef.current?.focus({ preventScroll: true });
    });
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (step === 1) return goToStep2();

    const er: Errors = {};
    if (!s2.ideaStage) er.ideaStage = "Please pick one.";
    if (!s2.funding) er.funding = "Please pick one.";
    if (!s2.budget) er.budget = "Please select a budget range.";
    if (!s2.decisionRole) er.decisionRole = "Please pick one.";
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
          ...s1,
          ...s2,
          landingPath: LANDING_PATH,
          utm: trackingRef.current.utm,
          referrer: trackingRef.current.referrer,
          company_url: honeypotRef.current?.value ?? "",
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; qualified?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setErrors({ form: data.error ?? "Something went wrong. Please try again or message us on WhatsApp." });
        return;
      }

      trackPixelEvent("Lead");
      const summary = [
        "New SaaS build enquiry - Technioz",
        `Name: ${s1.fullName.trim()}`,
        `Email: ${s1.email.trim()}`,
        `Company: ${s1.company.trim()}`,
        `WhatsApp: ${s1.whatsapp.trim()}`,
        `Idea stage: ${s2.ideaStage}`,
        `Funding: ${s2.funding}`,
        `Budget: ${s2.budget}`,
        `Timeline: ${s2.timeline || "Not specified"}`,
        `Tech background: ${s2.techBackground || "Not specified"}`,
        `Decision maker: ${s2.decisionRole}`,
        `Idea: ${s2.idea.trim() || "Not shared yet"}`,
      ].join("\n");
      setResult({
        qualified: Boolean(data.qualified),
        firstName: s1.fullName.trim().split(/\s+/)[0],
        summary,
        // embed_domain lets Calendly post the "event_scheduled" message back to us.
        calendlySrc: `${CALENDLY_URL}?${new URLSearchParams({
          embed_domain: window.location.host,
          embed_type: "Inline",
          name: s1.fullName.trim(),
          email: s1.email.trim(),
        }).toString()}`,
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

  const progress = result ? 3 : step;

  return (
    <div ref={cardRef} className="scroll-mt-24 rounded-sm bg-white-100 p-[24px] text-black-500 sm:p-[28px]">
      <div className="mb-[20px] flex gap-[6px]" aria-hidden="true">
        {[1, 2, 3].map((n) => (
          <span key={n} className={`h-[4px] flex-1 rounded-full ${n <= progress ? "bg-cobolt-500" : "bg-neutral-200"}`} />
        ))}
      </div>

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
          />
        ) : (
          <NotYetResult firstName={result.firstName} headingRef={resultHeadingRef} />
        )
      ) : (
        <form onSubmit={submit} noValidate>
          {/* Honeypot: hidden from people and assistive tech; bots fill it. */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 overflow-hidden">
            <label htmlFor="lead-company-url">Company website (do not fill)</label>
            <input ref={honeypotRef} id="lead-company-url" name="company_url" type="text" tabIndex={-1} autoComplete="off" />
          </div>

          {step === 1 ? (
            <div>
              <h3 className="font-display text-[22px] leading-[1.15] tracking-[-0.8px] text-black-500">First, who are you?</h3>
              <p className="p5 mt-1 mb-[18px] text-black-300">Step 1 of 2 · contact details first, so we can confirm your booking.</p>

              <Field id="fullName" label="Full name *" error={errors.fullName}>
                <input id="lead-fullName" autoComplete="name" placeholder="e.g. Ahmed Al Mansoori" value={s1.fullName} onChange={set1("fullName")} aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? "lead-fullName-error" : undefined} className={inputClass(Boolean(errors.fullName))} />
              </Field>
              <Field id="email" label="Work email *" error={errors.email}>
                <input id="lead-email" type="email" inputMode="email" autoComplete="email" placeholder="you@company.com / you@gmail.com" value={s1.email} onChange={set1("email")} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "lead-email-error" : undefined} className={inputClass(Boolean(errors.email))} />
              </Field>
              <Field id="company" label="Company or startup name *" error={errors.company}>
                <input id="lead-company" autoComplete="organization" placeholder="e.g. Desert Cart Technologies" value={s1.company} onChange={set1("company")} aria-invalid={Boolean(errors.company)} aria-describedby={errors.company ? "lead-company-error" : undefined} className={inputClass(Boolean(errors.company))} />
              </Field>
              <Field id="whatsapp" label="WhatsApp number *" error={errors.whatsapp} hint="We confirm your booking here. No spam, ever.">
                <input id="lead-whatsapp" type="tel" inputMode="tel" autoComplete="tel" placeholder="+971 5x xxx xxxx" value={s1.whatsapp} onChange={set1("whatsapp")} aria-invalid={Boolean(errors.whatsapp)} aria-describedby={errors.whatsapp ? "lead-whatsapp-error" : "lead-whatsapp-hint"} className={inputClass(Boolean(errors.whatsapp))} />
              </Field>

              <button type="submit" className={`${BTN_PRIMARY} mt-[6px] w-full`}>
                Continue
              </button>
              <p className="mt-[10px] text-center text-[12px] text-black-300">
                We use these details only for this enquiry. See our{" "}
                <Link href="/privacy" className="underline hover:text-cobolt-500">Privacy Policy</Link>.
              </p>
            </div>
          ) : (
            <div>
              <h3 ref={step2HeadingRef} tabIndex={-1} className="font-display text-[22px] leading-[1.15] tracking-[-0.8px] text-black-500 outline-none">Quick qualifiers</h3>
              <p className="p5 mt-1 mb-[18px] text-black-300">Step 2 of 2 · so your call is useful from minute one.</p>

              <PillGroup id="ideaStage" legend="Where is your idea right now? *" name="ideaStage" options={IDEA_STAGE_OPTIONS} value={s2.ideaStage} onChange={set2("ideaStage")} error={errors.ideaStage} />
              <PillGroup id="funding" legend="Funding status *" name="funding" options={FUNDING_OPTIONS} value={s2.funding} onChange={set2("funding")} error={errors.funding} />

              <Field id="budget" label="Budget set aside for this build *" error={errors.budget}>
                <select id="lead-budget" value={s2.budget} onChange={set2("budget")} aria-invalid={Boolean(errors.budget)} aria-describedby={errors.budget ? "lead-budget-error" : undefined} className={inputClass(Boolean(errors.budget))}>
                  <option value="">Select budget range</option>
                  {BUDGET_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </Field>

              <Field id="timeline" label="When do you want to launch?">
                <select id="lead-timeline" value={s2.timeline} onChange={set2("timeline")} className={inputClass(false)}>
                  <option value="">Select timeline</option>
                  {TIMELINE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </Field>

              <PillGroup id="techBackground" legend="Your tech background" name="techBackground" options={TECH_OPTIONS} value={s2.techBackground} onChange={set2("techBackground")} />
              <PillGroup id="decisionRole" legend="Are you the decision maker for this build? *" name="decisionRole" options={DECISION_OPTIONS} value={s2.decisionRole} onChange={set2("decisionRole")} error={errors.decisionRole} />

              <Field id="idea" label="Your idea in one line" hint="Optional, but it makes your call 10x better.">
                <input id="lead-idea" placeholder="e.g. Booking platform for pet grooming in Dubai" maxLength={1000} value={s2.idea} onChange={set2("idea")} aria-describedby="lead-idea-hint" className={inputClass(false)} />
              </Field>

              {errors.form && (
                <p role="alert" className="p5 mb-[12px] rounded-sm border border-error/40 bg-error/5 p-3 text-error">{errors.form}</p>
              )}

              <div className="mt-[18px] flex gap-[10px]">
                <button type="button" className={`${BTN_SECONDARY} flex-1`} onClick={() => { setStep(1); setErrors({}); }}>
                  Back
                </button>
                <button type="submit" disabled={submitting} className={`${BTN_PRIMARY} flex-[2] disabled:opacity-60`}>
                  {submitting ? "Sending..." : "See my booking options"}
                </button>
              </div>
            </div>
          )}
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
}: {
  result: Result;
  booked: boolean;
  copied: boolean;
  onCopy: () => void;
  headingRef: React.RefObject<HTMLHeadingElement | null>;
  calendlySrc: string;
}) {
  return (
    <div>
      <CheckBadge />
      <h3 ref={headingRef} tabIndex={-1} className="mt-[10px] font-display text-[25px] leading-[1.12] tracking-[-0.8px] text-black-500 outline-none">
        {booked ? `You're booked, ${result.firstName}.` : `Thanks, ${result.firstName}. Now lock your slot.`}
      </h3>
      <p className="p5 mt-[8px] text-black-400" aria-live="polite">
        {booked
          ? "Your call is in the calendar. Check your email for the confirmation. We will confirm on WhatsApp within 10 minutes in working hours, plus reminders 24 hours and 2 hours before your call."
          : "Bookings jump when you pick a time right now. Choose one option below. We will confirm on WhatsApp within 10 minutes in working hours, plus reminders 24 hours and 2 hours before your call."}
      </p>

      <iframe
        title="Book your free 30 minute discovery call on Calendly"
        src={calendlySrc}
        className="mt-[16px] h-[700px] w-full rounded-sm border border-neutral-300 bg-white-100"
        loading="lazy"
      />
      <p className="mt-[8px] text-center text-[12.5px] text-black-300">Tip: book within 7 days. Slots further out show up far less.</p>

      <div className="mt-[16px] grid gap-[10px]">
        <a className={`${BTN_SECONDARY} w-full`} href={whatsappUrl(`Hi Technioz, I just filled your SaaS build form.\n\n${result.summary}\n\nI want to book my free discovery call.`)} target="_blank" rel="noopener noreferrer">
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

function NotYetResult({ firstName, headingRef }: { firstName: string; headingRef: React.RefObject<HTMLHeadingElement | null> }) {
  return (
    <div>
      <CheckBadge />
      <h3 ref={headingRef} tabIndex={-1} className="mt-[10px] font-display text-[25px] leading-[1.12] tracking-[-0.8px] text-black-500 outline-none">
        Thanks, {firstName}. A full build isn&apos;t the right first step yet.
      </h3>
      <p className="p4 mt-[10px] text-black-400">
        Our minimum project is $5,000. With a budget under $5k, a prototype tool is a better start to test if
        people want your idea.
      </p>
      <p className="p4 mt-[10px] text-black-400">
        We&apos;ve saved your details. No hard feelings. Come back when the funding and idea are ready, we will be here.
      </p>
      <a className={`${BTN_SECONDARY} mt-[18px] w-full`} href={whatsappUrl("Hi Technioz, I filled your SaaS build form and have a question.")} target="_blank" rel="noopener noreferrer">
        Questions? Message us on WhatsApp
      </a>
    </div>
  );
}
