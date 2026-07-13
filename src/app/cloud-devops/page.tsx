import { PillarPage, type PillarData } from "@/components/pillar-page";
import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud & DevOps Consulting Company | AWS, Azure, GCP",
  description: "Cloud and DevOps consulting company. Cloud migration, Kubernetes, CI/CD, and infrastructure as code for modern teams.",
  openGraph: buildOpenGraph({
      title: "Cloud & DevOps Consulting Company | AWS, Azure, GCP",
      description: "How cloud infrastructure, CI/CD, and DevOps practices help businesses scale reliably and ship faster.",
      url: "https://technioz.com/cloud-devops",
    }),
  alternates: {
    canonical: "https://technioz.com/cloud-devops",
  },
};

const data: PillarData = {
  title: "Cloud and DevOps for Modern Businesses: A Practical Guide",
  description:
    "How cloud platforms, CI/CD pipelines, and DevOps practices help teams scale infrastructure, reduce downtime, and ship software faster.",
  heroLabel: "Cloud & DevOps",
  heroIcon: "☁️",
  sections: [
    {
      heading: "Why cloud infrastructure matters",
      content: [
        "Cloud platforms like AWS, Azure, and Google Cloud let you rent compute, storage, and services on demand. The real benefit is elasticity. Your infrastructure can grow during peak traffic and shrink during quiet periods, so you pay for what you use instead of what you fear you might need.",
        "For businesses in the UAE, Saudi Arabia, and surrounding regions, cloud also brings local data centers, low-latency delivery, and easier compliance with regional data residency requirements.",
      ],
    },
    {
      heading: "Cloud migration in sensible phases",
      content: [
        "Migration does not have to be a big-bang event. The most successful moves happen in phases.",
      ],
      points: [
        "Audit what you currently run, who owns it, and what depends on it",
        "Move non-critical or stateless workloads first to build confidence",
        "Refactor the most expensive or fragile systems for cloud-native patterns",
        "Set up monitoring, cost controls, and security policies before scaling",
      ],
    },
    {
      heading: "CI/CD and automated deployments",
      content: [
        "Continuous Integration and Continuous Deployment mean code changes are tested, built, and released automatically. The result is smaller, safer updates that reach users faster.",
        "A mature pipeline includes automated tests, security scanning, environment promotion, rollback triggers, and observability. When something breaks, you know immediately and can revert in minutes.",
      ],
    },
    {
      heading: "DevOps as a culture, not just tools",
      content: [
        "DevOps is often described as a set of tools, but the tools only work if the team owns reliability together. That means developers understand operations, operations understands code, and both are measured on delivery speed and system stability.",
        "At Technioz, we design cloud architecture that balances speed, cost, and security. Our DevOps work has helped clients achieve 99.9% uptime, cut deployment time from hours to minutes, and scale infrastructure across regions.",
      ],
    },
  ],
  ctaHeading: "Scale your infrastructure with confidence",
  ctaBody:
    "We design cloud architecture, automate deployments, and implement DevOps practices that keep your systems reliable as you grow.",
  ctaHref: "/services/cloud-services",
  ctaText: "Explore cloud services",
  relatedLinks: [
    { title: "Cloud migration strategy for businesses", href: "/blog/cloud-migration-strategy-step-by-step-guide-2026" },
    { title: "The complete cloud cost optimization guide", href: "/blog/cloud-cost-optimization-practical-guide-2026" },
    { title: "CI/CD pipelines explained", href: "/blog/ci-cd-pipelines-explained-benefits-implementation-2026" },
    { title: "DevOps best practices for growing companies", href: "/blog/devops-best-practices-growing-companies-2026" },
  ],
};

export default function CloudDevopsPillar() {
  return <PillarPage data={data} parent={{ href: "/services", label: "Services" }} parentLabel="Cloud & DevOps" />;
}
