import { NextRequest, NextResponse, after } from "next/server";
import { spamReasonFor } from "@/lib/honeypot";
import {
  saveContactSubmission,
  sendContactNtfy,
  validateContactInput,
} from "@/lib/contact";

export const dynamic = "force-dynamic";

// In-process rate limiter (per-instance). Production multi-instance would
// need Redis or a token bucket; this is sufficient for our traffic.
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;
const buckets = new Map<string, number[]>();

function rateLimit(key: string): boolean {
  const now = Date.now();
  const cutoff = now - WINDOW_MS;
  const arr = (buckets.get(key) ?? []).filter((t) => t > cutoff);
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
  const userAgent = request.headers.get("user-agent") ?? "unknown";

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

  const parsed = validateContactInput(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const data = {
    ...parsed.data,
    source: parsed.data.source ?? "contact-page",
    ip,
    userAgent,
    // Never discard: suspected spam is saved and flagged (see src/lib/honeypot.ts).
    spamReason: spamReasonFor(body),
  };

  // Save to DB. If Postgres is unreachable the enquiry must still reach us, so
  // fall back to the push notification instead of throwing the message away.
  const saved = await saveContactSubmission(data);
  const dbFailed = !saved.ok;
  if (dbFailed) {
    if (!process.env.NTFY_TOPIC) {
      return NextResponse.json(
        { error: "Could not save your message. Please try again or email info@technioz.com." },
        { status: 500 }
      );
    }
    console.error("[contact] database save failed; keeping the message through ntfy only");
  }

  // Notify after responding. after() keeps the work alive on serverless hosts;
  // a bare un-awaited promise can be cut off once the response is sent.
  after(() => sendContactNtfy({
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    companyName: data.companyName,
    projectType: data.projectType,
    message: data.message,
    source: data.source,
    spamReason: data.spamReason,
    dbFailed,
  })
    .then((r) => {
      if (r.ok) {
        console.log(`[contact] ntfy ok status=${r.status} for id=${saved.ok ? saved.id : "not-saved"}`);
      } else {
        console.warn(
          `[contact] ntfy failed status=${r.status} id=${saved.ok ? saved.id : "not-saved"} err=${r.error ?? ""}`
        );
      }
    })
    .catch((err) => {
      console.error("[contact] ntfy threw:", err);
    }));

  return NextResponse.json(
    {
      ok: true,
      status: "received",
      id: saved.ok ? saved.id : null,
      saved: saved.ok,
    },
    { status: 200 }
  );
}
