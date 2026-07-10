import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { FaqJsonLd } from "@/components/faq-jsonld";
import type { Metadata } from "next";
import { ITConsultingDiagram } from "@/components/diagrams/it-consulting-diagram";
import { AuditForm } from "./audit-form";

export const metadata: Metadata = {
  title: "IT Consulting Company | Strategy & Digital Transformation | Technioz",
  description: "IT consulting company. Strategic technology planning and digital transformation aligned with business goals and growth.",
  openGraph: {
  title: "IT Consulting Company | Strategy & Digital Transformation | Technioz",
    description:
      "Technioz provides strategic IT consulting: digital transformation roadmaps, architecture reviews, tech stack selection, and execution support.",
    url: "https://technioz.com/services/it-consulting",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://technioz.com/services/it-consulting",
  },
};

export default function ITConsulting() {
  return (
    <>
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="IT Consulting" />
            <span className="e1 text-black-300">{'\u{1F4BC}'} IT Consulting</span>
            <h1 className="h2 text-black-500">Strategic IT Consulting That Turns Technology Into Growth</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              Most companies don&apos;t need more tools — they need clearer decisions. We help leadership teams choose the right technology, build realistic roadmaps, and execute with confidence.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Digital transformation strategy, architecture reviews, and technology roadmaps</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Tech stack selection, vendor evaluation, and due diligence support</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Fractional CTO support and execution oversight from planning to delivery</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Schedule a Free Consultation</Link>
              <Link href="/digital-transformation" className="e2 text-cobolt-500">Read the digital transformation guide →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[80px]">
          <div className="max-w-[640px] flex flex-col gap-[16px] mb-10">
            <span className="e1 inline-flex items-center justify-center border px-[16px] py-[8px] border-black-400 text-black-400 w-fit">Process</span>
            <h2 className="h4 text-black-500">From Audit to Action Plan in 4–8 Weeks</h2>
            <p className="p3 text-black-400">Our consulting engagement delivers a clear roadmap: current-state audit, target architecture, implementation plan, and risk controls.</p>
          </div>
          <div className="bg-white-300 border border-neutral-300 rounded-sm p-6 lg:p-10">
            <ITConsultingDiagram />
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="grid lg:grid-cols-[1fr_420px] gap-12">
            <div className="flex flex-col gap-[16px]">
              <span className="e1 inline-flex items-center justify-center border px-[16px] py-[8px] border-black-400 text-black-400 w-fit">Free 10-Point Technical Audit</span>
              <h2 className="h4 text-black-500">Find Out Why Your App Is Slow, Costly, or Hard to Change</h2>
              <p className="p3 text-black-400">Submit your app or website and we will email a practical audit covering architecture, performance, security, cloud spend, and team delivery speed. No sales pitch.</p>
              <ul className="flex flex-col gap-2 p4 text-black-400">
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Architecture review — monolith, microservices, or messy in between</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Performance & scalability bottlenecks</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Security, compliance, and data-protection gaps</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Cloud cost optimization opportunities</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Delivery speed and team-structure blockers</span></li>
              </ul>
            </div>
            <div className="bg-white-200 rounded-sm p-[32px] border border-neutral-300">
              <AuditForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">Why Technology Decisions Need Outside Perspective</h2>
            <p className="p3 text-black-400">Internal teams are deep in the day-to-day. We bring structure, benchmarks, and cross-industry experience to your most expensive decisions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["Strategic Planning", "IT strategies that align with business objectives, budgets, and growth targets."],
              ["Digital Transformation", "Roadmaps that modernize operations without disrupting revenue."],
              ["Technology Leadership", "Fractional CTO and interim engineering leadership for scale-ups."],
              ["Risk Assessment", "Security, compliance, and continuity reviews with mitigation plans."],
              ["System Integration", "Connecting siloed tools into a coherent, efficient ecosystem."],
              ["Performance Optimization", "Cost, speed, and reliability improvements across infrastructure and teams."],
            ].map(([t, d]) => (
              <div key={t as string} className="bg-white-200 rounded-sm p-[32px]">
                <h3 className="font-display text-[18px] font-medium text-black-500 mb-2">{t as string}</h3>
                <p className="p4 text-black-400">{d as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-12">
            <h2 className="h4 text-black-500 mb-4">See it in action</h2>
            <p className="p3 text-black-400">A digital transformation roadmap that moved a transport operator from manual counters to online sales.</p>
          </div>
          <Link href="/portfolio/alkhanjry-transport" className="bg-white-200 rounded-sm p-[32px] flex flex-col gap-[12px] hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow group max-w-[700px]">
            <h3 className="font-display text-[20px] leading-none tracking-[-1px] text-black-500 group-hover:text-cobolt-500 transition-colors">Al Khanjry Groups</h3>
            <p className="p4 text-black-400">Digital transformation from manual counters to online sales — strategy, architecture, and execution.</p>
            <span className="e2 text-cobolt-500 mt-2">Read case study →</span>
          </Link>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-12">
            <h2 className="h4 text-black-500 mb-4">Our Consulting Services</h2>
            <p className="p3 text-black-400">Each engagement is scoped to your stage, team size, and most urgent questions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {consultServices.map((s) => (
              <div key={s.title} className="bg-white-300 rounded-sm p-[32px] flex flex-col gap-[14px]">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-[22px] leading-none tracking-[-1.1px] text-black-500">{s.title}</h3>
                  <span className="text-[12px] font-mono text-black-300">{s.timeline}</span>
                </div>
                <p className="p4 text-black-400">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((i) => <span key={i} className="text-[12px] text-black-300 bg-black-500/5 px-2 py-1 rounded-sm">{i}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-12">
            <h2 className="h4 !text-white-200 mb-4">Industry Expertise</h2>
            <p className="p3 text-black-200">We apply lessons learned across regulated and fast-moving industries.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["Financial Services", "Regulatory Compliance, Legacy Modernization, Digital Banking, Risk Management"],
              ["Healthcare", "HIPAA Compliance, Interoperability, EHR Integration, Telemedicine"],
              ["Manufacturing", "Industry 4.0, IoT Integration, Supply Chain, Quality Control"],
              ["Retail & E-commerce", "Omnichannel Experience, Inventory Management, Customer Analytics, Scalability"],
            ].map(([t, items]) => (
              <div key={t as string} className="border border-black-400 rounded-sm p-[32px] flex flex-col gap-[12px]">
                <h3 className="font-display text-[24px] leading-none tracking-[-1.2px] !text-white-200">{t as string}</h3>
                <div className="flex flex-wrap gap-2">
                  {(items as string).split(", ").map((i) => <span key={i} className="text-[12px] text-cobolt-300 bg-black-400/30 px-2 py-1 rounded-sm">{i}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices />

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mx-auto text-center mb-12">
            <h2 className="h4 text-black-500 mb-4">IT Consulting FAQs</h2>
            <p className="p3 text-black-400">Common questions about how we work with leadership teams.</p>
          </div>
          <div className="max-w-[760px] mx-auto flex flex-col gap-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white-300 rounded-sm p-[24px] flex flex-col gap-2">
                <h3 className="font-display text-[18px] font-medium text-black-500">{faq.q}</h3>
                <p className="p4 text-black-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-[600px]">
            <h2 className="h3 !text-white-100 mb-4">Ready to Make Better Technology Decisions?</h2>
            <p className="p3 text-white-100/80">Book a free strategy call. We&apos;ll understand your goals, diagnose your biggest risk, and propose a clear path forward.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Schedule Free Strategy Call</Link>
        </div>
      </section>
      <FaqJsonLd items={faqs.map(({ q, a }) => ({ question: q, answer: a }))} />
    </>
  );
}

const related = [
  { title: "Custom Software Development", desc: "Software built around your exact workflows, data, and growth goals.", href: "/services/custom-software-development" },
  { title: "Enterprise Software Development", desc: "Secure, scalable platforms with role-based access and compliance controls.", href: "/services/enterprise-software-development" },
  { title: "Digital Transformation Consulting", desc: "Modernize operations, migrate legacy systems, and adopt cloud, AI, and automation.", href: "/services/digital-transformation-consulting" },
];

function RelatedServices() {
  return (
    <section className="bg-white-300">
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
        <h2 className="h4 text-black-500 mb-8">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((s) => (
            <Link key={s.href} href={s.href} className="bg-white-200 rounded-sm p-[32px] flex flex-col gap-[12px] hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow group">
              <h3 className="font-display text-[20px] leading-none tracking-[-1px] text-black-500 group-hover:text-cobolt-500 transition-colors">{s.title}</h3>
              <p className="p4 text-black-400">{s.desc}</p>
              <span className="e2 text-cobolt-500 mt-2">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Breadcrumb({ label }: { label: string }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: label }]} />
      <div className="flex items-center gap-2 text-black-300 p5">
      <Link href="/" className="hover:text-cobolt-500">Home</Link> / <Link href="/services" className="hover:text-cobolt-500">Services</Link> / <span>{label}</span>
    </div>
    </>
  );
}

const consultServices = [
  { title: "Technology Strategy & Roadmap", timeline: "4–8 weeks", desc: "Assess current systems and build a prioritized roadmap aligned with business goals.", items: ["Technology Assessment", "Strategic Roadmap", "Budget Planning", "Risk Analysis"] },
  { title: "Digital Transformation", timeline: "3–6 months", desc: "Guide end-to-end modernization with change management and phased execution.", items: ["Current State Analysis", "Future State Design", "Implementation Plan", "Change Management"] },
  { title: "Architecture Review & Design", timeline: "6–12 weeks", desc: "Review existing architecture and design scalable, secure, and cost-effective systems.", items: ["Architecture Assessment", "Design Documentation", "Best Practices", "Implementation Guide"] },
  { title: "Vendor Selection & Management", timeline: "4–10 weeks", desc: "Evaluate, select, and manage technology vendors and outsourcing partners.", items: ["Vendor Evaluation", "RFP Management", "Contract Negotiation", "Vendor Management"] },
  { title: "Security & Compliance", timeline: "6–8 weeks", desc: "Ensure infrastructure and processes meet security standards and regulatory requirements.", items: ["Security Assessment", "Compliance Audit", "Policy Development", "Implementation Plan"] },
  { title: "Performance Optimization", timeline: "4–6 weeks", desc: "Analyze and optimize systems for speed, scalability, and cost-effectiveness.", items: ["Performance Analysis", "Optimization Plan", "Cost Analysis", "Implementation Support"] },
];

const faqs = [
  { q: "What does a free 10-point technical audit include?", a: "We review your application architecture, performance, scalability, security posture, cloud spend, deployment practices, code maintainability, team structure, third-party dependencies, and compliance readiness. You receive a written report with the biggest risks and a prioritized fix list." },
  { q: "How long does an IT consulting engagement take?", a: "Advisory engagements range from 4–8 weeks for assessments and roadmaps to 3–6 months for hands-on transformation programs. We scope based on your most urgent questions and existing team capacity." },
  { q: "Do you work with existing internal development teams?", a: "Yes. Many of our clients have internal engineering teams. We act as an outside architect, reviewer, or fractional CTO and can integrate with your team without replacing it." },
  { q: "Can you help us choose or replace a software vendor?", a: "Yes. We provide vendor evaluation scorecards, RFP support, technical due diligence, and contract review to reduce vendor risk." },
  { q: "Do you work with companies outside the UAE and India?", a: "Yes. We are a remote-first team and work with clients across the GCC, Europe, and North America. Meetings are scheduled around your time zone." },
];
