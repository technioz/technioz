// Maps blog post text (title + tags) to relevant money pages so every post
// passes internal link equity to a service/industry landing page.
export type ServiceLink = { label: string; href: string };

const RULES: { test: RegExp; links: ServiceLink[] }[] = [
  {
    test: /\btransport|\blogistic|\bfleet|\bdispatch|\bticketing|\bbus\b|\bsupply chain/i,
    links: [
      { label: "Logistics software development", href: "/solutions/logistics" },
      { label: "Transport & logistics expertise", href: "/industries/transport-logistics" },
    ],
  },
  {
    test: /\brag\b|retrieval.augmented|knowledge.base ai/i,
    links: [{ label: "RAG system development", href: "/services/rag-system-development" }],
  },
  {
    test: /ai agent|agentic|autonomous agent|workflow bot/i,
    links: [{ label: "AI agent development", href: "/services/ai-agent-development" }],
  },
  {
    test: /chatbot|conversational ai/i,
    links: [{ label: "AI chatbot development", href: "/services/ai-chatbot-development" }],
  },
  {
    test: /\bllm\b|large language model|fine.tun/i,
    links: [{ label: "LLM integration services", href: "/services/llm-integration" }],
  },
  {
    test: /machine learning|computer vision|\bai\b|artificial intelligence/i,
    links: [{ label: "AI development company in Dubai", href: "/ai-development-company-dubai" }],
  },
  {
    test: /react native/i,
    links: [{ label: "React Native app development", href: "/services/react-native-app-development" }],
  },
  {
    test: /flutter/i,
    links: [{ label: "Flutter app development", href: "/services/flutter-app-development" }],
  },
  {
    test: /\bios\b/i,
    links: [{ label: "iOS app development", href: "/services/ios-app-development" }],
  },
  {
    test: /android/i,
    links: [{ label: "Android app development", href: "/services/android-app-development" }],
  },
  {
    test: /mobile app|\bcross.platform|\bpwa\b|app development/i,
    links: [{ label: "Mobile app development", href: "/services/mobile-development" }],
  },
  {
    test: /devops|ci\/cd|\bci\/cd\b|kubernetes|docker|infrastructure as code|\biac\b|deployment/i,
    links: [{ label: "DevOps consulting", href: "/services/devops-services" }],
  },
  {
    test: /\bcloud\b|serverless|\baws\b|azure|\bgcp\b|scaling|microservice|monolith/i,
    links: [{ label: "Cloud services", href: "/services/cloud-services" }],
  },
  {
    test: /\berp\b|healthcare|\bhipaa\b|patient|telemedicine|clinical/i,
    links: [
      { label: "Healthcare software development", href: "/solutions/healthcare" },
      { label: "Enterprise software development", href: "/services/enterprise-software-development" },
    ],
  },
  {
    test: /payment|\be.?commerce|shopify|checkout|headless/i,
    links: [{ label: "E-commerce development in Dubai", href: "/ecommerce-website-development-dubai" }],
  },
  {
    test: /\bmvp\b|startup|proof of concept|prototype/i,
    links: [{ label: "MVP development for startups", href: "/services/mvp-development" }],
  },
  {
    test: /cost|pricing|budget|\bhire\b|build vs buy|offshore|outsourc|partner|estimate/i,
    links: [{ label: "Custom software development", href: "/services/custom-software-development" }],
  },
];

const DEFAULTS: ServiceLink[] = [
  { label: "Custom software development", href: "/services/custom-software-development" },
  { label: "Software development company in Dubai", href: "/software-development-company-dubai" },
];

export function getRelatedServiceLinks(text: string): ServiceLink[] {
  const picked: ServiceLink[] = [];
  const push = (link: ServiceLink) => {
    if (!picked.some((p) => p.href === link.href)) picked.push(link);
  };

  for (const rule of RULES) {
    if (rule.test.test(text)) rule.links.forEach(push);
  }

  if (picked.length < 2) DEFAULTS.forEach(push);
  return picked.slice(0, 3);
}