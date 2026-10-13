import "server-only";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { sendNtfy, type NtfyResult } from "@/lib/ntfy";
import {
  BUDGET_OPTIONS,
  DECISION_OPTIONS,
  FUNDING_OPTIONS,
  IDEA_STAGE_OPTIONS,
  TECH_OPTIONS,
  TIMELINE_OPTIONS,
  UTM_KEYS,
  isQualified,
} from "@/lib/campaign-lead-options";
import { DISTRACTION_FREE_PATHS } from "@/lib/landing-pages";

declare global {
  var __campaignLeadPrisma__: PrismaClient | undefined;
}

function getPrisma() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error("DATABASE_URL is not set");
  if (!global.__campaignLeadPrisma__) {
    global.__campaignLeadPrisma__ = new PrismaClient({ adapter: new PrismaPg({ connectionString }) });
  }
  return global.__campaignLeadPrisma__;
}

export type CampaignLeadInput = {
  fullName: string;
  email: string;
  company: string;
  whatsapp: string;
  ideaStage: string;
  funding: string;
  budget: string;
  timeline: string | null;
  techBackground: string | null;
  decisionRole: string;
  idea: string | null;
  landingPath: string;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmContent: string | null;
  utmTerm: string | null;
  fbclid: string | null;
  referrer: string | null;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const values = (opts: readonly ({ value: string } | string)[]) =>
  opts.map((o) => (typeof o === "string" ? o : o.value));

function str(v: unknown, max: number): string {
  return v == null ? "" : String(v).trim().slice(0, max);
}

export function validateCampaignLead(
  body: unknown
): { ok: true; data: CampaignLeadInput } | { ok: false; error: string } {
  if (!body || typeof body !== "object") return { ok: false, error: "Invalid request body" };
  const b = body as Record<string, unknown>;

  const fullName = str(b.fullName, 200);
  const email = str(b.email, 254);
  const company = str(b.company, 200);
  const whatsapp = str(b.whatsapp, 40);

  if (!fullName) return { ok: false, error: "Please add your name." };
  if (!email || !EMAIL_RE.test(email)) return { ok: false, error: "Please add a valid email address." };
  if (!company) return { ok: false, error: "Please add your company or startup name." };
  if (whatsapp.replace(/\D/g, "").length < 9) {
    return { ok: false, error: "Please add a valid WhatsApp number with country code." };
  }

  const pick = (key: string, allowed: string[], required: boolean) => {
    const v = str(b[key], 100);
    if (!v) return required ? undefined : null;
    return allowed.includes(v) ? v : undefined;
  };

  const ideaStage = pick("ideaStage", values(IDEA_STAGE_OPTIONS), true);
  const funding = pick("funding", values(FUNDING_OPTIONS), true);
  const budget = pick("budget", values(BUDGET_OPTIONS), true);
  const decisionRole = pick("decisionRole", values(DECISION_OPTIONS), true);
  const timeline = pick("timeline", values(TIMELINE_OPTIONS), false);
  const techBackground = pick("techBackground", values(TECH_OPTIONS), false);

  if (!ideaStage) return { ok: false, error: "Please pick where your idea is right now." };
  if (!funding) return { ok: false, error: "Please pick your funding status." };
  if (!budget) return { ok: false, error: "Please select a budget range." };
  if (!decisionRole) return { ok: false, error: "Please tell us if you are the decision maker." };
  if (timeline === undefined || techBackground === undefined) {
    return { ok: false, error: "Invalid answer." };
  }

  const rawPath = str(b.landingPath, 200);
  const landingPath = (DISTRACTION_FREE_PATHS as readonly string[]).includes(rawPath)
    ? rawPath
    : "unknown";

  const utm = (b.utm && typeof b.utm === "object" ? b.utm : {}) as Record<string, unknown>;
  const u = (k: (typeof UTM_KEYS)[number]) => str(utm[k], 500) || null;

  return {
    ok: true,
    data: {
      fullName,
      email,
      company,
      whatsapp,
      ideaStage,
      funding,
      budget,
      timeline,
      techBackground,
      decisionRole,
      idea: str(b.idea, 1000) || null,
      landingPath,
      utmSource: u("utm_source"),
      utmMedium: u("utm_medium"),
      utmCampaign: u("utm_campaign"),
      utmContent: u("utm_content"),
      utmTerm: u("utm_term"),
      fbclid: u("fbclid"),
      referrer: str(b.referrer, 1000) || null,
    },
  };
}

export async function saveCampaignLead(
  data: CampaignLeadInput & { ip: string | null; userAgent: string | null }
): Promise<{ ok: true; id: string; qualified: boolean } | { ok: false }> {
  const qualified = isQualified(data.budget);
  try {
    const row = await getPrisma().campaignLead.create({ data: { ...data, qualified } });
    return { ok: true, id: row.id, qualified };
  } catch (err) {
    console.error("[leads] save failed:", err);
    return { ok: false };
  }
}

export function sendCampaignLeadNtfy(data: CampaignLeadInput, qualified: boolean): Promise<NtfyResult> {
  const title = `${qualified ? "New lead" : "Lead (under $5k)"}: ${data.fullName} (${data.company})`;
  const utm = [data.utmSource, data.utmMedium, data.utmCampaign, data.utmContent].filter(Boolean).join(" / ");
  const body = [
    `Email: ${data.email}`,
    `WhatsApp: ${data.whatsapp}`,
    `Budget: ${data.budget}`,
    `Funding: ${data.funding}`,
    `Idea stage: ${data.ideaStage}`,
    `Decision maker: ${data.decisionRole}`,
    `Timeline: ${data.timeline ?? "Not specified"}`,
    `Tech background: ${data.techBackground ?? "Not specified"}`,
    `Idea: ${data.idea ?? "Not shared"}`,
    "",
    `Page: ${data.landingPath}`,
    utm ? `Campaign: ${utm}` : null,
  ]
    .filter((l) => l !== null)
    .join("\n");

  return sendNtfy({
    title,
    body,
    tags: qualified ? ["moneybag", "lead"] : ["hourglass", "lead"],
    priority: qualified ? "high" : "default",
  });
}
