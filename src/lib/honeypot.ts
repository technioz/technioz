/**
 * Spam signals shared by the contact form and the campaign lead form.
 *
 * Policy: NEVER discard a submission. Every submission is saved and alerts the
 * team; these signals only FLAG it (stored in `spam_reason`, shown as
 * "Possible spam" in the ntfy alert). A flagged submission skips the automatic
 * confirmation email, so bots can't use our mailbox to email strangers. A real
 * person flagged by mistake is still saved and still reaches us.
 *
 * Signals:
 * - "honeypot": a hidden checkbox ("contact me by fax only") was ticked.
 *   Autofill doesn't tick checkboxes; naive bots tick everything.
 * - "too_fast": the form was submitted less than MIN_FORM_MS after it loaded.
 *   Only checked when the client reports the time (old cached pages don't).
 *
 * The old hidden text trap ("company_url") is ignored: browser autofill filled
 * it for real people.
 */
export const HONEYPOT_FIELD = "fax_only";
export const FORM_TIME_FIELD = "form_ms";
export const MIN_FORM_MS = 2500;

export function spamSignals(body: unknown): string[] {
  if (!body || typeof body !== "object") return [];
  const b = body as Record<string, unknown>;
  const reasons: string[] = [];

  const trap = b[HONEYPOT_FIELD];
  if (trap === true || trap === "1" || trap === "on" || trap === "true") reasons.push("honeypot");

  const raw = b[FORM_TIME_FIELD];
  const ms = Number(raw);
  if (raw != null && raw !== "" && Number.isFinite(ms) && ms >= 0 && ms < MIN_FORM_MS) reasons.push("too_fast");

  return reasons;
}

/** Comma-joined reasons for the `spam_reason` column, or null when clean. */
export function spamReasonFor(body: unknown): string | null {
  const r = spamSignals(body);
  return r.length ? r.join(",") : null;
}
