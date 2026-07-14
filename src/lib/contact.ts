import "server-only";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

export { PROJECT_TYPE_OPTIONS } from "@/lib/contact-types";

/**
 * Lazy Prisma client for contact_submissions. Reuses the same
 * driver-adapter pattern as the article webhook.
 */
function getPrisma() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error("DATABASE_URL is not set");
  return new PrismaClient({ adapter: new PrismaPg({ connectionString }) });
}

export type ContactFormInput = {
  fullName: string;
  email: string;
  phone?: string | null;
  companyName?: string | null;
  projectType?: string | null;
  message: string;
  source?: string | null;
  ip?: string | null;
  userAgent?: string | null;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FIELD = 5000;
const MAX_MESSAGE = 5000;

export function validateContactInput(body: unknown): {
  ok: true;
  data: ContactFormInput;
} | {
  ok: false;
  error: string;
} {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body" };
  }
  const b = body as Record<string, unknown>;

  const fullName = String(b.fullName ?? "").trim();
  const email = String(b.email ?? "").trim();
  const message = String(b.message ?? "").trim();

  if (!fullName) return { ok: false, error: "Full name is required" };
  if (fullName.length > 200) return { ok: false, error: "Full name is too long" };

  if (!email) return { ok: false, error: "Email is required" };
  if (!EMAIL_RE.test(email)) return { ok: false, error: "Email is not valid" };
  if (email.length > 254) return { ok: false, error: "Email is too long" };

  if (!message) return { ok: false, error: "Message is required" };
  if (message.length < 3) return { ok: false, error: "Message is too short" };
  if (message.length > MAX_MESSAGE) return { ok: false, error: "Message is too long" };

  const phone = b.phone != null ? String(b.phone).trim() : "";
  const companyName = b.companyName != null ? String(b.companyName).trim() : "";
  const projectType = b.projectType != null ? String(b.projectType).trim() : "";
  const source = b.source != null ? String(b.source).trim() : "";
  const ip = b.ip != null ? String(b.ip).trim() : "";
  const userAgent = b.userAgent != null ? String(b.userAgent).trim() : "";

  if (phone.length > MAX_FIELD) return { ok: false, error: "Phone is too long" };
  if (companyName.length > MAX_FIELD) return { ok: false, error: "Company name is too long" };
  if (projectType.length > 200) return { ok: false, error: "Project type is too long" };
  if (source.length > 500) return { ok: false, error: "Source is too long" };
  if (userAgent.length > 2000) return { ok: false, error: "User agent is too long" };

  return {
    ok: true,
    data: {
      fullName,
      email,
      phone: phone || null,
      companyName: companyName || null,
      projectType: projectType || null,
      message,
      source: source || null,
      ip: ip || null,
      userAgent: userAgent || null,
    },
  };
}

export async function saveContactSubmission(data: ContactFormInput) {
  const prisma = getPrisma();
  try {
    const row = await prisma.contactSubmission.create({ data });
    return { ok: true as const, id: row.id };
  } catch (err) {
    console.error("[contact] save failed:", err);
    return { ok: false as const, error: "Failed to save submission" };
  } finally {
    await prisma.$disconnect();
  }
}

const NTFY_DEFAULT_SERVER = "https://ntfy.sh";

/**
 * Send a push notification via ntfy.sh. Topic is in NTFY_TOPIC env var.
 * We never block the user response on this — log + fire-and-forget.
 */
export async function sendContactNtfy(input: {
  fullName: string;
  email: string;
  phone?: string | null;
  companyName?: string | null;
  projectType?: string | null;
  message: string;
  source?: string | null;
}): Promise<{ ok: boolean; status: number; error?: string }> {
  const topic = process.env.NTFY_TOPIC;
  const server = process.env.NTFY_SERVER || NTFY_DEFAULT_SERVER;
  const accessToken = process.env.NTFY_TOKEN; // optional, for private topics

  if (!topic) {
    return { ok: false, status: 0, error: "NTFY_TOPIC not set" };
  }

  const title = `New contact: ${input.fullName}${input.companyName ? ` (${input.companyName})` : ""}`;
  const body = [
    `Email: ${input.email}`,
    input.phone ? `Phone: ${input.phone}` : null,
    input.projectType ? `Project: ${input.projectType}` : null,
    input.source ? `Source: ${input.source}` : null,
    "",
    "Message:",
    input.message,
  ]
    .filter((l) => l !== null)
    .join("\n");

  const tags = ["inbox"];
  if (input.projectType) {
    const tag = input.projectType.toLowerCase().replace(/[^a-z0-9-]/g, "").slice(0, 20);
    if (tag) tags.push(tag);
  }

  const url = `${server.replace(/\/+$/, "")}/${encodeURIComponent(topic)}`;
  const headers: Record<string, string> = {
    Title: title,
    Priority: "default",
    Tags: tags.join(","),
    "Content-Type": "text/plain; charset=utf-8",
  };
  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  try {
    const res = await fetch(url, { method: "POST", headers, body });
    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return { ok: false, status: res.status, error: text.slice(0, 200) };
    }
    return { ok: true, status: res.status };
  } catch (err) {
    return {
      ok: false,
      status: 0,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}
