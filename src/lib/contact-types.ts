/**
 * Safe to import from client components. Pure data only.
 */

export const PROJECT_TYPE_OPTIONS = [
  { value: "web-app", label: "Web app / portal / dashboard" },
  { value: "mobile-app", label: "Mobile app (iOS / Android)" },
  { value: "ai-llm", label: "AI / LLM / chatbot / agent" },
  { value: "cloud-devops", label: "Cloud migration / DevOps" },
  { value: "custom-software", label: "Custom software / SaaS" },
  { value: "mvp", label: "MVP / startup build" },
  { value: "consulting", label: "IT consulting / technical audit" },
  { value: "other", label: "Something else" },
] as const;
