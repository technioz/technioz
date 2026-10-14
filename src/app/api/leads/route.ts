import { NextRequest, NextResponse, after } from "next/server";
import { saveCampaignLead, sendCampaignLeadNtfy, validateCampaignLead } from "@/lib/campaign-leads";
import { buildLeadConfirmationEmail } from "@/lib/lead-confirmation-email";
import { isMailConfigured, sendMail } from "@/lib/mailer";

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

  // Honeypot: hidden "company_url" field. Bots fill it; humans never see it.
  const b = (body ?? {}) as Record<string, unknown>;
  if (typeof b.company_url === "string" && b.company_url.trim().length > 0) {
    return NextResponse.json({ ok: true, qualified: false }, { status: 200 });
  }

  const parsed = validateCampaignLead(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const saved = await saveCampaignLead({
    ...parsed.data,
    ip,
    userAgent: request.headers.get("user-agent"),
  });
  if (!saved.ok) {
    return NextResponse.json(
      { error: "Could not save your details. Please try again or message us on WhatsApp." },
      { status: 500 }
    );
  }

  // after() keeps the notification and the confirmation email alive past the
  // response on serverless hosts. Neither can fail the request: the lead is saved.
  after(async () => {
    const [push, mail] = await Promise.allSettled([
      sendCampaignLeadNtfy(parsed.data, saved.qualified),
      sendMail({ to: parsed.data.email, ...buildLeadConfirmationEmail(parsed.data, saved.qualified) }),
    ]);
    if (push.status === "rejected") console.error("[leads] ntfy threw:", push.reason);
    else if (!push.value.ok) console.warn(`[leads] ntfy failed status=${push.value.status} id=${saved.id} err=${push.value.error ?? ""}`);
    if (mail.status === "rejected") console.error("[leads] confirmation email threw:", mail.reason);
    else if (!mail.value.ok) console.warn(`[leads] confirmation email ${mail.value.skipped ? "skipped" : "failed"} id=${saved.id} err=${mail.value.error}`);
  });

  // emailSent lets the page only claim "we emailed you a copy" when SMTP is set up.
  return NextResponse.json(
    { ok: true, id: saved.id, qualified: saved.qualified, emailSent: isMailConfigured() },
    { status: 200 }
  );
}
