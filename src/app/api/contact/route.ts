import { NextRequest, NextResponse } from "next/server";
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

  // Honeypot: a hidden field named "company_url" must be empty. Bots fill
  // all inputs. Humans never type into it, so it always submits as "".
  // The form is off-screen and aria-hidden, so assistive tech also leaves
  // it alone.
  const b = (body ?? {}) as Record<string, unknown>;
  if (typeof b.company_url === "string" && b.company_url.trim().length > 0) {
    // Silently accept (return 200) so the bot doesn't retry, but skip
    // DB write + notification.
    return NextResponse.json({ ok: true, status: "accepted" }, { status: 200 });
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
  };

  // Save to DB (synchronous — return 500 to user if it fails).
  const saved = await saveContactSubmission(data);
  if (!saved.ok) {
    return NextResponse.json(
      { error: "Could not save your message. Please try again or email info@technioz.com." },
      { status: 500 }
    );
  }

  // Fire-and-forget ntfy notification. We don't block the user response on
  // this — log the result for monitoring.
  sendContactNtfy({
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    companyName: data.companyName,
    projectType: data.projectType,
    message: data.message,
    source: data.source,
  })
    .then((r) => {
      if (r.ok) {
        console.log(`[contact] ntfy ok status=${r.status} for id=${saved.id}`);
      } else {
        console.warn(
          `[contact] ntfy failed status=${r.status} id=${saved.id} err=${r.error ?? ""}`
        );
      }
    })
    .catch((err) => {
      console.error("[contact] ntfy threw:", err);
    });

  return NextResponse.json(
    {
      ok: true,
      status: "received",
      id: saved.id,
    },
    { status: 200 }
  );
}
