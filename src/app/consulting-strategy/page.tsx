import { PillarPage, type PillarData } from "@/components/pillar-page";
import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Consulting & Technology Strategy Company",
  description: "IT consulting and technology strategy company. Choose the right tech stack, plan software projects, and build a clear roadmap.",
  openGraph: buildOpenGraph({
      title: "IT Consulting & Technology Strategy Company",
      description: "IT consulting and technology strategy company. Choose the right tech stack, plan software projects, and build a clear roadmap.",
      url: "https://technioz.com/consulting-strategy",
    }),
  twitter: buildTwitterCard({
      title: "IT Consulting & Technology Strategy Company",
      description: "IT consulting and technology strategy company. Choose the right tech stack, plan software projects, and build a clear roadmap.",
      image: "/og-image.png",
    }),
  alternates: {
    canonical: "https://technioz.com/consulting-strategy",
  },
};

const data: PillarData = {
  title: "IT Consulting and Technology Strategy: A Guide for Growing Businesses",
  description: "A practical guide to IT consulting and technology strategy. Choose the right tech stack, plan software projects, and build a roadmap.",
  heroLabel: "Consulting & Strategy",
  heroIcon: "🧭",
  sections: [
    {
      heading: "What does an IT consulting partner actually do?",
      content: [
        "An IT consulting partner helps business leaders make better technology decisions. That includes evaluating the current stack, defining what to build and in what order, choosing the right architecture, estimating cost and timeline, and helping internal teams execute with confidence.",
        "Consulting is most valuable when the stakes are high and the path is unclear. Common triggers are preparing for a fundraise, launching a new product line, modernizing legacy systems, or scaling a platform that is starting to break under growth.",
      ],
      points: [
        "Assess current systems, teams, and technical debt",
        "Define scope, priorities, and a phased delivery roadmap",
        "Recommend the right architecture and technology stack",
        "Estimate realistic budgets, timelines, and team needs",
        "Provide hands-on support through design, build, and launch",
      ],
    },
    {
      heading: "How to choose the right technology stack",
      content: [
        "The best stack is the one that fits your team, your product, and your timeline — not the one that wins online debates. A good stack decision balances performance, maintainability, hiring market, ecosystem maturity, and long-term vendor risk.",
      ],
      points: [
        "Match the stack to your product type: web, mobile, AI, real-time, or data-heavy",
        "Consider hiring and training costs, not just licensing",
        "Prefer proven tools for core systems and experiment with newer tools at the edges",
        "Plan for scale you can realistically reach in 18–24 months",
        "Avoid switching stacks before the current one is a proven bottleneck",
      ],
    },
    {
      heading: "The value of a technical discovery workshop",
      content: [
        "A discovery workshop brings structure to uncertainty. It maps business goals, user needs, constraints, and technical risks before anyone writes code. The output is a shared understanding that prevents scope creep, budget overruns, and mismatched expectations.",
        "At Technioz, we run discovery workshops at the start of every significant engagement. We interview stakeholders, review existing systems, model user journeys, and produce a clear recommendation: build, buy, integrate, or prototype first. This step often saves clients months of rework.",
      ],
      points: [
        "Clarify what problem you are solving and for whom",
        "Identify constraints: budget, timeline, compliance, team capacity",
        "Map existing systems and data flows",
        "Define success metrics before choosing solutions",
        "Produce a prioritized roadmap with clear next steps",
      ],
    },
    {
      heading: "Solution architecture that scales with the business",
      content: [
        "Solution architecture is the bridge between business requirements and working software. Good architecture makes the system reliable, maintainable, and adaptable. Bad architecture makes every future change expensive and risky.",
        "Key architectural decisions include monolith vs microservices, cloud provider and region strategy, database choice, API design, security model, and how the system integrates with external services. These decisions are much cheaper to change early than after launch.",
      ],
      points: [
        "Start simple and split services only when boundaries are clear",
        "Design for the scale you will reach, not the scale you dream of",
        "Keep security, observability, and deployment in mind from day one",
        "Document decisions and trade-offs so future teams understand them",
        "Review architecture before major features and growth milestones",
      ],
    },
    {
      heading: "Estimating software projects honestly",
      content: [
        "Software estimates are hard because requirements change and unknowns are common. The best estimates are ranges based on clear assumptions, not single numbers pulled from thin air. A good estimate explains what is included, what is excluded, and what would change it.",
      ],
      points: [
        "Break work into phases and estimate each separately",
        "Distinguish between known work, known unknowns, and unknown unknowns",
        "Add buffer for integration, testing, and feedback cycles",
        "Update estimates as requirements become clearer",
        "Avoid fixed-price bids for undefined or exploratory work",
      ],
    },
    {
      heading: "Building a technology roadmap that business and engineering agree on",
      content: [
        "A technology roadmap is a plan for how technology will support business goals over time. It is not a list of features. It is a sequence of outcomes: launch the MVP, reduce operational cost, enter a new market, or comply with a regulation.",
        "The best roadmaps are visible, flexible, and owned by both business and engineering. They make it easier to say no to distractions, justify investment, and adjust when priorities change.",
      ],
      points: [
        "Anchor every initiative to a business outcome",
        "Sequence projects by impact, dependency, and risk",
        "Review and reprioritize quarterly based on learning",
        "Keep a clear distinction between foundation work and customer-facing features",
        "Communicate the roadmap across teams and stakeholders",
      ],
    },
    {
      heading: "When to hire vs outsource software development",
      content: [
        "Building software in-house gives you control and deep domain knowledge. Outsourcing gives you speed, specialized skills, and flexibility. Most growing businesses use a hybrid model: a small internal team owns product and architecture, while an external partner handles execution, specialized work, or surge capacity.",
      ],
      points: [
        "Hire in-house when software is your core product and the roadmap is long-term",
        "Outsource when you need speed, specialized skills, or flexible capacity",
        "Use a hybrid model to combine strategic control with delivery speed",
        "Keep architecture, product decisions, and IP ownership internal",
        "Choose partners who document, hand over, and support transition",
      ],
    },
  ],
  ctaHeading: "Get clear on your technology strategy",
  ctaBody:
    "Our IT consulting and strategy services help you choose the right stack, plan your roadmap, and build software that matches your business goals.",
  ctaHref: "/services/it-consulting",
  ctaText: "Explore consulting services",
  relatedArticles: [
    { title: "How to Choose a Reliable Software Development Partner in 2026", slug: "how-to-choose-software-development-partner-2026" },
    { title: "In-House vs Outsourced Software Development in 2026", slug: "in-house-vs-outsourced-software-development-2026" },
    { title: "Offshore vs Nearshore vs Onshore Software Development in 2026", slug: "offshore-vs-nearshore-vs-onshore-development-2026" },
    { title: "Custom Software Development Cost in 2026", slug: "custom-software-development-cost-2026" },
    { title: "How to Plan a Custom Software Project Step by Step", slug: "how-to-plan-custom-software-project-step-by-step" },
    { title: "Common Mistakes in Custom Software Development Projects", slug: "common-mistakes-custom-software-development-projects" },
  ],
};

export default function ConsultingStrategyPillar() {
  return <PillarPage data={data} parent={{ href: "/services", label: "Services" }} parentLabel="Consulting & Strategy" />;
}
