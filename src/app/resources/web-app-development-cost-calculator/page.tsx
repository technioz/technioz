import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { FaqJsonLd } from "@/components/faq-jsonld";
import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

import { CostCalculator } from "./cost-calculator";

export const metadata: Metadata = {
  title: "Web App Development Cost Calculator",
  description: "Estimate custom web app development cost in 2 minutes. SaaS, dashboards, marketplaces, and e-commerce. Get a detailed PDF breakdown.",
  openGraph: buildOpenGraph({
      title: "Web App Development Cost Calculator",
      description: "Estimate custom web app development cost in 2 minutes. SaaS, dashboards, marketplaces, and e-commerce.",
      url: "https://technioz.com/resources/web-app-development-cost-calculator",
    }),
  alternates: {
    canonical: "https://technioz.com/resources/web-app-development-cost-calculator",
  },
};

const faqs = [
  {
    question: "How accurate is the web app cost calculator?",
    answer: "The calculator gives a realistic range based on app type, scope, design, backend, and integrations. It is not a final quote. For a fixed-price proposal, book a free scoping call where we review your user roles, workflows, and third-party systems.",
  },
  {
    question: "What is included in the emailed PDF breakdown?",
    answer: "The PDF includes your selected app type, screen count, design level, backend complexity, integration count, estimated timeline, cost range, and a checklist to prepare before talking to any development partner.",
  },
  {
    question: "How much does a SaaS MVP cost?",
    answer: "A typical SaaS MVP with auth, core workflow, and a simple admin dashboard ranges from $20,000 to $45,000. More complex SaaS platforms with billing, role-based access, and integrations usually fall between $45,000 and $120,000.",
  },
  {
    question: "Why do web apps for Dubai and GCC cost more?",
    answer: "GCC projects often require bilingual Arabic/English interfaces, RTL layouts, local payment gateways, regional compliance considerations, and delivery teams aligned to Gulf business hours. These add complexity but protect product-market fit.",
  },
  {
    question: "Do you offer fixed-price quotes for web apps?",
    answer: "Yes. After a short discovery call, we provide a fixed-price quote with clear milestones and acceptance criteria. We also offer monthly dedicated-team models if your scope is likely to evolve.",
  },
  {
    question: "How long does it take to develop a custom web app?",
    answer: "Most MVPs ship in 8-12 weeks. Standard web apps with integrations take 3-5 months. Complex platforms with custom backend, multiple user roles, and third-party integrations can take 5-9 months.",
  },
];

export default function WebAppDevelopmentCostCalculator() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
          { name: "Web App Cost Calculator", href: "/resources/web-app-development-cost-calculator" },
        ]}
      />
      <FaqJsonLd items={faqs} />

      {/* Hero */}
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[80px]">
          <div className="max-w-[800px]">
            <div className="flex items-center gap-2 text-black-400 p5 mb-6">
              <Link href="/" className="hover:text-cobolt-500 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/resources" className="hover:text-cobolt-500 transition-colors">Resources</Link>
              <span>/</span>
              <span>Cost Calculator</span>
            </div>
            <span className="e1 text-cobolt-500 mb-4 inline-block">Free tool</span>
            <h1 className="h2 text-black-500 mb-6">How Much Does a Custom Web App Cost in 2026?</h1>
            <p className="p3 text-black-400 max-w-[640px] mb-8">
              Get a realistic cost estimate for your SaaS, dashboard, marketplace, or e-commerce web app in under two minutes. No email required for the estimate. Enter your details below to see your range.
            </p>
            <Link href="#calculator" className="cta-primary">Estimate my web app cost</Link>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="bg-white-300 scroll-mt-24">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <CostCalculator />
        </div>
      </section>

      {/* Cost guide */}
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-12">
            <h2 className="h4 text-black-500 mb-4">What Drives Web App Development Cost</h2>
            <p className="p3 text-black-400">
              Web app pricing depends on five things: the type of product you are building, how many screens and user roles it has, the design and UX expectations, backend complexity, and how many third-party systems it must connect to.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {costDrivers.map((d) => (
              <div key={d.title} className="bg-white-300 rounded-sm p-[32px] flex flex-col gap-[12px]">
                <h3 className="font-display text-[22px] leading-none tracking-[-1.1px] text-black-500">{d.title}</h3>
                <p className="p4 text-black-400">{d.desc}</p>
                <span className="text-[12px] font-mono uppercase tracking-[1px] text-cobolt-500 mt-auto">{d.range}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical ranges */}
      <section className="bg-black-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-12">
            <h2 className="h4 !text-white-200 mb-4">Typical Web App Development Cost Ranges</h2>
            <p className="p3 text-black-200">
              These are real-world ranges for custom web apps in Dubai, the GCC, India, and globally. Your estimate may vary based on design and integration complexity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {typicalRanges.map((r) => (
              <div key={r.label} className="border border-black-400 rounded-sm p-[32px] flex flex-col gap-[12px]">
                <span className="font-display text-[40px] leading-none tracking-[-2px] text-cobolt-300">{r.range}</span>
                <h3 className="font-display text-[20px] leading-none tracking-[-1px] text-white-200">{r.label}</h3>
                <p className="p5 text-black-200">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link to app calculator */}
      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-[600px]">
              <span className="e1 text-white-100/70 mb-4 inline-block">Also available</span>
              <h2 className="h3 !text-white-100 mb-4">Building a Mobile App Instead?</h2>
              <p className="p3 text-white-100/80 mb-6">
                Use our mobile app cost calculator to estimate iOS, Android, React Native, or Flutter development based on platform, scope, design, backend, and integrations.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Link href="/resources/app-development-cost-calculator" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">
                Estimate mobile app cost
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Technioz */}
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="max-w-[600px]">
              <h2 className="h4 text-black-500 mb-4">Why Teams Use Technioz for Web Apps</h2>
              <p className="p3 text-black-400 mb-6">
                We estimate costs based on real project experience — then we build the actual product.
              </p>
              <ul className="flex flex-col gap-3 p4 text-black-400">
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Shipped the Al Khanjry bilingual booking portal — 150K+ bookings completed</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Fixed-price quotes with clear milestones, no surprise overages</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>React, Next.js, Node.js, and cloud engineering under one team</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>GCC-aligned delivery and Arabic/RTL support built in</span></li>
              </ul>
            </div>
            <div className="bg-white-300 rounded-sm p-[32px]">
              <h3 className="font-display text-[24px] leading-none tracking-[-1.2px] text-black-500 mb-4">Want a deeper guide?</h3>
              <p className="p4 text-black-400 mb-6">
                Read our complete guide on <Link href="/blog/custom-software-development-cost-2026" className="text-cobolt-500 underline hover:no-underline">custom software development cost in 2026</Link> or explore our <Link href="/services/web-development" className="text-cobolt-500 underline hover:no-underline">web development services</Link>.
              </p>
              <Link href="/services/web-development" className="cta-secondary">Explore web services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[800px] mx-auto">
            <h2 className="h4 text-black-500 mb-10">Questions About Web App Development Costs</h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-white-200 border border-neutral-300 rounded-sm overflow-hidden">
                  <summary className="p-[24px] lg:p-[32px] cursor-pointer flex items-start justify-between gap-4 hover:text-cobolt-500 transition-colors list-none">
                    <h3 className="font-display text-[20px] leading-[1.2] tracking-[-1px] text-black-500 group-hover:text-cobolt-500 transition-colors">{faq.question}</h3>
                    <svg className="w-6 h-6 text-black-400 group-open:rotate-45 transition-transform duration-[300ms] shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </summary>
                  <div className="px-[24px] pb-[24px] lg:px-[32px] lg:pb-[32px] -mt-2">
                    <p className="p3 text-black-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-[600px]">
            <h2 className="h3 !text-white-100 mb-4">Get a fixed-price quote in 48 hours</h2>
            <p className="p3 text-white-100/80">Tell us what you are building. We will scope it, estimate it, and send you a proposal with clear deliverables and timeline.</p>
          </div>
          <div className="flex flex-wrap items-center gap-[12px]">
            <Link href="https://calendly.com/technioztech/30min" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Book a free scoping call</Link>
            <Link href="/contact" className="cta-secondary-dark !border-white-100 !text-white-100 hover:!bg-white-100 hover:!text-cobolt-500">Message us</Link>
          </div>
        </div>
      </section>
    </>
  );
}

const costDrivers = [
  { title: "App Type", desc: "SaaS, dashboard, marketplace, e-commerce, or internal tool. Each has different architectural needs.", range: "$8k – $50k base" },
  { title: "Scope & Screens", desc: "More screens, user roles, and workflows mean more design, development, and testing work.", range: "MVP 1x · Complex 3x" },
  { title: "Design & UX", desc: "Custom UI, data visualization, accessibility, and responsive design all affect cost.", range: "$2k – $25k" },
  { title: "Backend & Admin", desc: "Auth, databases, business logic, APIs, and admin panels form the engine of most web apps.", range: "$5k – $40k" },
  { title: "Integrations", desc: "Payment gateways, CRMs, ERPs, email, analytics, and third-party APIs add build and maintenance work.", range: "$3k – $25k" },
  { title: "Location & Team", desc: "GCC-aligned teams and bilingual requirements add coordination; India-based delivery reduces cost.", range: "20-40% variance" },
];

const typicalRanges = [
  { label: "Landing / Marketing Site", range: "$3k – $12k", desc: "Brochure sites, campaign pages, and lead-capture funnels with CMS." },
  { label: "MVP Web App", range: "$15k – $35k", desc: "5-8 screens, core workflow, basic backend, and simple auth." },
  { label: "SaaS / Dashboard", range: "$35k – $85k", desc: "15-25 screens, role-based access, billing, reporting, and 1-3 integrations." },
  { label: "Marketplace / B2B Platform", range: "$85k – $160k", desc: "Multi-sided platform, complex workflows, 4+ integrations, and compliance." },
];
