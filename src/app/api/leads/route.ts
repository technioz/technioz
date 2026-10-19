import { NextRequest, NextResponse, after } from "next/server";
import { saveCampaignLead, sendCampaignLeadNtfy, validateCampaignLead } from "@/lib/campaign-leads";
import { isQualified } from "@/lib/campaign-lead-options";
import { buildLeadConfirmationEmail } from "@/lib/lead-confirmation-email";
import { isMailConfigured, sendMail } from "@/lib/mailer";
import { spamReasonFor } from "@/lib/honeypot";

export const dynamic = "force-dynamic";

// In-process rate limiter (per instance), same policy as /api/contact.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const buckets = new Map<string, number[]>();

function rateLimit(key: string): boolean {
  const now = Date.now();
  const arr = (buckets.get(key) ?? []).filter((t) => t > now - WINDOW_MS);
  arr.push(now);
  buckets.set(key, arr);
  return arr.length <= MAX_PER_WINDOW;
}

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again in a minute." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const parsed = validateCampaignLead(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  // Never discard: suspected spam is saved and flagged (see src/lib/honeypot.ts).
  const spamReason = spamReasonFor(body);

  const saved = await saveCampaignLead({
    ...parsed.data,
    ip,
    userAgent: request.headers.get("user-agent"),
    spamReason,
  });

  // A lead must never be lost because Postgres is down (it has been: see
  // docs/deploy.md). If the row cannot be written we still alert the team and
  // email the visitor, and we let them book. The request only fails when no
  // channel is left that could carry the details anywhere.
  const dbFailed = !saved.ok;
  if (dbFailed) {
    const canStillReach = Boolean(process.env.NTFY_TOPIC) || isMailConfigured();
    if (!canStillReach) {
      return NextResponse.json(
        { error: "Could not save your details. Please try again or message us on WhatsApp." },
        { status: 500 }
      );
    }
    console.error("[leads] database save failed; keeping the lead through ntfy/email only");
  }

  const qualified = saved.ok ? saved.qualified : isQualified(parsed.data.budget);
  const leadId = saved.ok ? saved.id : "not-saved";
  const emailSent = !spamReason && isMailConfigured();

  // after() keeps the notification and the confirmation email alive past the
  // response on serverless hosts. Neither can fail the request: nothing is left
  // to recover the lead from if they throw.
  after(async () => {
      // Flagged submissions still alert us, but get no automatic email: bots must
    // not be able to make our mailbox email arbitrary addresses.
    const [push, mail] = await Promise.allSettled([
      sendCampaignLeadNtfy(parsed.data, qualified, spamReason, dbFailed),
      spamReason
        ? Promise.resolve({ ok: false as const, skipped: true, error: `flagged as possible spam (${spamReason})` })
        : sendMail({ to: parsed.data.email, ...buildLeadConfirmationEmail(parsed.data, qualified) }),
    ]);
    if (push.status === "rejected") console.error("[leads] ntfy threw:", push.reason);
    else if (!push.value.ok) console.warn(`[leads] ntfy failed status=${push.value.status} id=${leadId} err=${push.value.error ?? ""}`);
    if (mail.status === "rejected") console.error("[leads] confirmation email threw:", mail.reason);
    else if (!mail.value.ok) console.warn(`[leads] confirmation email ${mail.value.skipped ? "skipped" : "failed"} id=${leadId} err=${mail.value.error}`);
  });

  // emailSent lets the page only claim "we emailed you a copy" when SMTP is set up.
  // `saved: false` means the row is not in Postgres; the visitor is unaffected.
  return NextResponse.json(
    { ok: true, id: leadId, qualified, emailSent, saved: saved.ok },
    { status: 200 }
  );
}
