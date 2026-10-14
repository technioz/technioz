import "server-only";
import type { CampaignLeadInput } from "@/lib/campaign-leads";
import { DECISION_OPTIONS, FUNDING_OPTIONS, IDEA_STAGE_OPTIONS, TECH_OPTIONS } from "@/lib/campaign-lead-options";
import { CALENDLY_URL, WHATSAPP_NUMBER } from "@/app/ai-saas-development-uae/constants";

/**
 * "We've got your details" email sent to every campaign lead right after the
 * form is saved. Shows back everything they submitted. Copy promises must stay
 * true: fixed quote within 48 hours of the call; $5,000 minimum project.
 * Any change to what this email contains must be reflected in /privacy.
 */

const WHATSAPP_DISPLAY = "+971 56 945 1930";
const SITE = "https://technioz.com";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

const labelOf = (opts: readonly { value: string; label: string }[], v: string | null) =>
  v ? (opts.find((o) => o.value === v)?.label ?? v) : null;

export function buildLeadConfirmationEmail(data: CampaignLeadInput, qualified: boolean) {
  const firstName = data.fullName.split(/\s+/)[0] || data.fullName;
  const bookingUrl = `${CALENDLY_URL}?${new URLSearchParams({ name: data.fullName, email: data.email }).toString()}`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  const rows: [string, string][] = [
    ["Name", data.fullName],
    ["Email", data.email],
    ["Company", data.company],
    ["WhatsApp", data.whatsapp],
    ["Where your idea is", labelOf(IDEA_STAGE_OPTIONS, data.ideaStage) ?? data.ideaStage],
    ["Funding", labelOf(FUNDING_OPTIONS, data.funding) ?? data.funding],
    ["Budget", data.budget],
    ["Launch timeline", data.timeline ?? "Not specified"],
    ["Tech background", labelOf(TECH_OPTIONS, data.techBackground) ?? "Not specified"],
    ["Decision maker", labelOf(DECISION_OPTIONS, data.decisionRole) ?? data.decisionRole],
    ["Your idea", data.idea ?? "Not shared yet"],
  ];

  const subject = qualified
    ? `We've got your details, ${firstName}. Your fixed quote is next.`
    : `We've got your details, ${firstName}`;

  // ── Plain text ──
  const textIntro = qualified
    ? [
        `Thanks for telling us about ${data.company}. We've got your details.`,
        "",
        "Next step: pick a 30-minute call, if you haven't already. You get a fixed quote within 48 hours of the call.",
        `Pick a time: ${bookingUrl}`,
      ]
    : [
        `Thanks for telling us about ${data.company}. We've got your details.`,
        "",
        "Our minimum project is $5,000, so a full build isn't the right first step yet. We've saved your details. When your budget and idea are ready, just reply to this email.",
      ];
  const text = [
    `Hi ${firstName},`,
    "",
    ...textIntro,
    "",
    `Questions? Reply to this email or message us on WhatsApp: ${WHATSAPP_DISPLAY} (${whatsappUrl}).`,
    "",
    "Here's what you sent us:",
    ...rows.map(([k, v]) => `- ${k}: ${v}`),
    "",
    "Gaurav Bhatia",
    "Founder, Technioz",
    SITE,
    "",
    "You're getting this because you filled in the form at technioz.com. If that wasn't you, reply and we'll delete your details.",
    `Privacy Policy: ${SITE}/privacy`,
  ].join("\n");

  // ── HTML (inline styles, table layout: email clients ignore stylesheets) ──
  const p = (s: string) => `<p style="margin:0 0 14px;font-size:15px;line-height:1.6;color:#1d1b16;">${s}</p>`;
  const introHtml = qualified
    ? [
        p(`Thanks for telling us about <strong>${esc(data.company)}</strong>. We've got your details.`),
        p(`<strong>Next step:</strong> pick a 30-minute call, if you haven't already. You get a <strong>fixed quote within 48 hours</strong> of the call.`),
        `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:6px 0 20px;"><tr><td style="background:#3923c7;border-radius:4px;">
          <a href="${esc(bookingUrl)}" style="display:inline-block;padding:13px 22px;font-size:14px;font-weight:bold;color:#ffffff;text-decoration:none;letter-spacing:0.3px;">Pick your call time</a>
        </td></tr></table>`,
      ].join("")
    : [
        p(`Thanks for telling us about <strong>${esc(data.company)}</strong>. We've got your details.`),
        p("Our minimum project is $5,000, so a full build isn't the right first step yet. We've saved your details. When your budget and idea are ready, just reply to this email."),
      ].join("");

  const tableRows = rows
    .map(
      ([k, v]) => `<tr>
        <td style="padding:9px 12px 9px 0;border-top:1px solid #e3e0d4;font-size:13px;color:#6b6a63;vertical-align:top;white-space:nowrap;">${esc(k)}</td>
        <td style="padding:9px 0;border-top:1px solid #e3e0d4;font-size:14px;color:#1d1b16;vertical-align:top;word-break:break-word;">${esc(v)}</td>
      </tr>`
    )
    .join("");

  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(subject)}</title></head>
<body style="margin:0;padding:0;background:#f5f3eb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f3eb;"><tr><td align="center" style="padding:28px 14px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#fdfcf8;border:1px solid #c7c3b2;border-radius:4px;">
      <tr><td style="padding:26px 28px 6px;">
        <p style="margin:0 0 22px;font-size:18px;font-weight:bold;letter-spacing:-0.3px;color:#1d1b16;">Technioz</p>
        ${p(`Hi ${esc(firstName)},`)}
        ${introHtml}
        ${p(`Questions? Reply to this email or message us on WhatsApp: <a href="${whatsappUrl}" style="color:#3923c7;">${WHATSAPP_DISPLAY}</a>.`)}
      </td></tr>
      <tr><td style="padding:6px 28px 4px;">
        <p style="margin:0 0 8px;font-size:11px;letter-spacing:1.4px;text-transform:uppercase;color:#3923c7;">Here's what you sent us</p>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-bottom:1px solid #e3e0d4;">${tableRows}</table>
      </td></tr>
      <tr><td style="padding:20px 28px 26px;">
        <p style="margin:0;font-size:15px;line-height:1.5;color:#1d1b16;">Gaurav Bhatia<br><span style="color:#6b6a63;">Founder, Technioz</span></p>
      </td></tr>
    </table>
    <p style="max-width:560px;margin:14px auto 0;font-size:12px;line-height:1.6;color:#6b6a63;">
      You're getting this because you filled in the form at technioz.com. If that wasn't you, reply and we'll delete your details.
      <a href="${SITE}/privacy" style="color:#6b6a63;">Privacy Policy</a>
    </p>
  </td></tr></table>
</body></html>`;

  return { subject, text, html };
}
