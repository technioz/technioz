/**
 * Answer options for the paid-ads lead form (/ai-saas-development-uae).
 * Shared by the client form and the server validator, and stored verbatim in
 * campaign_leads. Changing a value changes what new rows contain.
 */

export const IDEA_STAGE_OPTIONS = [
  { value: "Idea with research", label: "Idea + research" },
  { value: "Prototype built", label: "Prototype built" },
  { value: "Have customers waiting", label: "Customers waiting" },
  { value: "Rebuilding existing product", label: "Rebuilding product" },
] as const;

export const FUNDING_OPTIONS = [
  { value: "Pre-seed funded", label: "Pre-seed funded" },
  { value: "Revenue backed", label: "Revenue backed" },
  { value: "Bootstrapping with budget", label: "Bootstrapping" },
  { value: "Still raising", label: "Still raising" },
] as const;

export const BUDGET_OPTIONS = [
  "Under AED 18k",
  "AED 18k to AED 27.5k",
  "AED 27.5k to AED 37k",
  "AED 37k+",
  "Not sure yet",
] as const;

/**
 * The USD ranges this form used before the switch to dirhams. A visitor with
 * the old page still open during a deploy would otherwise fail validation and
 * lose their lead, so these stay accepted and stored verbatim.
 */
export const LEGACY_BUDGET_OPTIONS = ["Under $5k", "$5k to $7.5k", "$7.5k to $10k", "$10k+"] as const;

export const ALL_BUDGET_OPTIONS = [...BUDGET_OPTIONS, ...LEGACY_BUDGET_OPTIONS] as const;

export const TIMELINE_OPTIONS = [
  "ASAP - next 30 days",
  "In 1 to 2 months",
  "In 2 to 3 months",
  "Just exploring",
] as const;

export const TECH_OPTIONS = [
  { value: "Non-technical", label: "Non-technical" },
  { value: "Some technical knowledge", label: "Some knowledge" },
  { value: "Technical", label: "Technical" },
  { value: "Have a tech co-founder", label: "Have co-founder" },
] as const;

export const DECISION_OPTIONS = [
  { value: "Yes", label: "Yes, I decide" },
  { value: "Shared decision", label: "Shared decision" },
] as const;

/** Minimum build is AED 18,000 (~$5k): only this answer skips the booking step. */
export const DISQUALIFYING_BUDGET = "Under AED 18k";
const LEGACY_DISQUALIFYING_BUDGET = "Under $5k";

export function isQualified(budget: string): boolean {
  return budget !== DISQUALIFYING_BUDGET && budget !== LEGACY_DISQUALIFYING_BUDGET;
}

export const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"] as const;
export type UtmKey = (typeof UTM_KEYS)[number];
