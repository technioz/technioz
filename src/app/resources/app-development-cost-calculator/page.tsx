import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { FaqJsonLd } from "@/components/faq-jsonld";
import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

import { CostCalculator } from "./cost-calculator";

export const metadata: Metadata = {
  title: "App Development Cost Calculator (2026)",
  description: "Estimate custom app development cost in 2 minutes. Interactive calculator for iOS, Android, React Native, Flutter, and web apps. Get a detailed PDF breakdown.",
  openGraph: buildOpenGraph({
      title: "App Development Cost Calculator (2026)",
      description: "Estimate custom app development cost in 2 minutes. Interactive calculator for iOS, Android, React Native, Flutter, and web apps.",
      url: "https://technioz.com/resources/app-development-cost-calculator",
    }),
  alternates: {
    canonical: "https://technioz.com/resources/app-development-cost-calculator",
  },
};

const faqs = [
  {
    question: "How accurate is this app cost calculator?",
    answer: "The calculator gives a realistic range based on platform, scope, design, backend, and integrations. It is not a final quote. For an exact fixed-price proposal, book a free scoping call where we review your specific requirements, user flows, and third-party systems.",
  },
  {
    question: "What is included in the emailed PDF breakdown?",
    answer: "The PDF includes your selected platform, screen count, design level, backend complexity, integration count, estimated timeline, cost range, and a checklist of questions to prepare before talking to any development partner.",
  },
  {
    question: "How much does a React Native app cost compared to native iOS and Android?",
    answer: "React Native and Flutter typically cost 20-35% less than building separate native iOS and Android apps because one codebase serves both platforms. However, if your app needs heavy native animations, AR, or platform-specific hardware, native may be the better investment.",
  },
  {
    question: "Why do Dubai and GCC app projects sometimes cost more?",
    answer: "GCC projects often require bilingual Arabic/English interfaces, RTL layouts, local payment gateways, regional compliance considerations, and delivery teams aligned to Gulf business hours. These factors add complexity but also protect your product-market fit.",
  },
  {
    question: "Do you offer fixed-price quotes?",
    answer: "Yes. After a short discovery call, we provide a fixed-price quote with clear milestones and acceptance criteria. We also offer monthly dedicated-team and staff-augmentation models if your scope is likely to evolve.",
  },
  {
    question: "How long does it take to develop an app?",
    answer: "Most MVPs ship in 8-12 weeks. Standard apps with integrations take 3-5 months. Complex platforms with custom backend, multiple user roles, and third-party integrations can take 5-9 months. We run two-week sprints with demos so you see progress continuously.",
  },
];

export default function AppDevelopmentCostCalculator() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Resources", href: "/resources" },
          { name: "App Cost Calculator", href: "/resources/app-development-cost-calculator" },
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
            <h1 className="h2 text-black-500 mb-6">How Much Does It Cost to Develop an App in 2026?</h1>
            <p className="p3 text-black-400 max-w-[640px] mb-8">
              Get a realistic cost estimate for your iOS, Android, React Native, Flutter, or web app in under two minutes. No email required for the estimate. Enter your details below to see your range.
            </p>
            <Link href="#calculator" className="cta-primary">Estimate my app cost</Link>
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
            <h2 className="h4 text-black-500 mb-4">What Drives App Development Cost</h2>
            <p className="p3 text-black-400">
              App pricing is not random. These five factors account for most of the difference between a $20,000 MVP and a $200,000 platform.
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
            <h2 className="h4 !text-white-200 mb-4">Typical App Development Cost Ranges</h2>
            <p className="p3 text-black-200">These are real-world ranges we see for projects in Dubai, the GCC, India, and globally. Your estimate may fall above or below depending on design and integration complexity.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Why Technioz */}
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="max-w-[600px]">
              <h2 className="h4 text-black-500 mb-4">Why Teams Use Technioz to Build Their Apps</h2>
              <p className="p3 text-black-400 mb-6">
                We are not just estimating costs. We build the apps behind the numbers — from first prototype to App Store launch and ongoing support.
              </p>
              <ul className="flex flex-col gap-3 p4 text-black-400">
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Shipped BusPass UAE and HattaFoodHub — apps used by thousands daily</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Fixed-price quotes with clear milestones, no surprise overages</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>React Native, Flutter, Swift, Kotlin, and Next.js under one team</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>GCC-aligned delivery and Arabic/RTL support built in</span></li>
              </ul>
            </div>
            <div className="bg-white-300 rounded-sm p-[32px]">
              <h3 className="font-display text-[24px] leading-none tracking-[-1.2px] text-black-500 mb-4">Not ready for a call yet?</h3>
              <p className="p4 text-black-400 mb-6">
                Read our complete guide on <Link href="/blog/mobile-app-development-cost-dubai-uae-saudi-arabia-2026" className="text-cobolt-500 underline hover:no-underline">mobile app development cost in Dubai, UAE & Saudi Arabia</Link> or explore our <Link href="/services/mobile-development" className="text-cobolt-500 underline hover:no-underline">mobile development services</Link>.
              </p>
              <Link href="/services/mobile-development" className="cta-secondary">Explore mobile services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-link to web calculator */}
      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-[600px]">
              <span className="e1 text-white-100/70 mb-4 inline-block">Also available</span>
              <h2 className="h3 !text-white-100 mb-4">Building a Web App Instead?</h2>
              <p className="p3 text-white-100/80 mb-6">
                Use our web app cost calculator to estimate SaaS, dashboards, marketplaces, and e-commerce development based on app type, scope, design, backend, and integrations.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Link href="/resources/web-app-development-cost-calculator" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">
                Estimate web app cost
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[800px] mx-auto">
            <h2 className="h4 text-black-500 mb-10">Questions About App Development Costs</h2>
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
  { title: "Platform", desc: "iOS, Android, React Native, Flutter, or web. Native apps require two separate codebases; cross-platform shares one.", range: "$12k – $35k base" },
  { title: "Scope & Screens", desc: "More screens, user roles, and workflows mean more design, development, and testing work.", range: "MVP 1x · Complex 3x" },
  { title: "Design & UX", desc: "Custom UI, animations, and accessibility work increase quality and cost but also adoption.", range: "$2k – $25k" },
  { title: "Backend & API", desc: "User accounts, databases, business logic, admin panels, and cloud infrastructure.", range: "$5k – $40k" },
  { title: "Integrations", desc: "Payment gateways, maps, CRMs, ERPs, analytics, and third-party APIs add build and maintenance work.", range: "$3k – $25k" },
  { title: "Location & Team", desc: "GCC-aligned teams and bilingual requirements add coordination; India-based delivery reduces cost.", range: "20-40% variance" },
];

const typicalRanges = [
  { label: "MVP", range: "$15k – $35k", desc: "5-8 screens, core workflow, basic backend, no heavy integrations." },
  { label: "Standard App", range: "$35k – $85k", desc: "15-25 screens, custom UI, backend, 1-3 integrations, iOS + Android." },
  { label: "Complex Platform", range: "$85k – $160k", desc: "30+ screens, multi-role admin, 4+ integrations, analytics, compliance." },
  { label: "Enterprise", range: "$160k+", desc: "Custom architecture, multiple modules, SSO, audit trails, SLA support." },
];
