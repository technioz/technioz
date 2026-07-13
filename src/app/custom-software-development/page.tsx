import { PillarPage, type PillarData } from "@/components/pillar-page";
import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development Company",
  description: "Custom software development company. When to build custom software, how the process works, and what to look for in a development partner.",
  openGraph: buildOpenGraph({
      title: "Custom Software Development Company",
      description: "Learn when custom software beats off-the-shelf tools, what drives cost and timeline, and how to choose a development partner.",
      url: "https://technioz.com/custom-software-development",
    }),
  alternates: {
    canonical: "https://technioz.com/custom-software-development",
  },
};

const data: PillarData = {
  title: "Custom Software Development in 2026: The Complete Business Guide",
  description:
    "A practical guide to planning, building, and scaling custom software. Learn when custom beats off-the-shelf, what drives cost, and how to avoid expensive mistakes.",
  heroLabel: "Custom Software",
  heroIcon: "⚙️",
  sections: [
    {
      heading: "What is custom software development?",
      content: [
        "Custom software is built specifically for one organization's workflows, users, and goals. Unlike a SaaS product you rent by the seat, a custom application is designed around your existing processes and can evolve as those processes change.",
        "Common examples include a booking and fleet management platform for a transport company, a procurement portal connecting buyers with approved vendors, an internal dashboard pulling data from ERP and CRM systems, or a customer-facing self-service portal tied to billing and support tools.",
      ],
      points: [
        "Designed around your exact workflow instead of forcing your workflow into a template",
        "Integrates deeply with internal systems and third-party services",
        "Scales with your business without per-seat pricing penalties",
        "Own the roadmap instead of waiting for a vendor to add features",
      ],
    },
    {
      heading: "When to choose custom software vs off-the-shelf",
      content: [
        "Off-the-shelf software is fast to deploy and low risk for standard problems. It becomes expensive when your team pays for unused features or rebuilds processes to fit the software.",
      ],
      points: [
        "Choose off-the-shelf when the problem is common, speed matters most, and you can adapt a few internal processes.",
        "Choose custom software when your workflow is your competitive advantage, you need deep integrations, compliance or scale outpace packaged tools, or manual workarounds cost more than building once.",
      ],
    },
    {
      heading: "The custom software development process",
      content: [
        "Every project is different, but a reliable process follows five phases. Skipping discovery is the most common reason custom projects run late.",
      ],
      points: [
        "Discovery: understand users, business rules, and constraints before writing code",
        "Architecture and design: define the stack, data model, APIs, security, and hosting",
        "Development in iterations: short sprints with regular demos to catch issues early",
        "QA, security, and compliance: testing built into each sprint, not saved for the end",
        "Deployment and improvement: launch is the beginning, supported by monitoring and feedback loops",
      ],
    },
    {
      heading: "What affects cost and timeline",
      content: [
        "Cost is driven by scope, complexity, integrations, compliance needs, and polish. A focused internal tool may take eight to twelve weeks. A multi-tenant enterprise platform with custom workflows may take six to twelve months.",
        "The most expensive mistake is not the build cost. It is rebuilding after poorly defined scope or choosing the wrong partner. A good partner will challenge assumptions early instead of simply quoting whatever you ask for.",
      ],
    },
    {
      heading: "How to choose a reliable development partner",
      content: [
        "Look for evidence of relevant delivery experience, a transparent process with regular demos, strong engineering practices, and a team that asks sharp questions before quoting.",
        "At Technioz, our custom software work includes transport booking platforms, AI-powered automation systems, cloud migrations, and enterprise dashboards. We start every project with a discovery phase so the build is grounded in real user needs and measurable outcomes.",
      ],
    },
  ],
  ctaHeading: "Build software that fits your business",
  ctaBody:
    "If your team is outgrowing off-the-shelf tools, our custom software development service helps you design, build, and scale a solution around your exact workflow.",
  ctaHref: "/services/it-consulting",
  ctaText: "Explore custom software",
  relatedLinks: [
    { title: "How much does custom software cost in 2026?", href: "/blog/custom-software-development-cost-2026" },
    { title: "In-house vs outsourced software development", href: "/blog/in-house-vs-outsourced-software-development-2026" },
    { title: "How to choose a software development partner", href: "/blog/how-to-choose-software-development-partner-2026" },
    { title: "Offshore vs nearshore vs onshore development", href: "/blog/offshore-vs-nearshore-vs-onshore-development-2026" },
  ],
};

export default function CustomSoftwarePillar() {
  return <PillarPage data={data} parent={{ href: "/services", label: "Services" }} parentLabel="Custom Software" />;
}
