/**
 * Spam trap shared by the contact form and the campaign lead form.
 *
 * It is a hidden CHECKBOX ("contact me by fax only"), not a text field:
 * browser and password-manager autofill fill hidden text inputs such as
 * "company website" (we lost real leads that way) but never tick checkboxes.
 * Naive bots tick everything, so a ticked box means a bot.
 *
 * The old text trap ("company_url") is deliberately ignored, so pages cached
 * in visitors' browsers that still send it are no longer dropped.
 */
export const HONEYPOT_FIELD = "fax_only";

export function isHoneypotTripped(body: unknown): boolean {
  if (!body || typeof body !== "object") return false;
  const v = (body as Record<string, unknown>)[HONEYPOT_FIELD];
  return v === true || v === "1" || v === "on" || v === "true";
}
