import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Company Dubai | Technioz",
  description: "Custom software development company in Dubai. We build enterprise apps, web apps, mobile apps, and AI solutions for UAE businesses.",
  openGraph: {
    title: "Software Development Company in Dubai | Custom Software & Enterprise Apps | Technioz",
    description:
      "Technioz builds custom software, enterprise apps, and digital platforms for Dubai and GCC businesses.",
    url: "https://technioz.com/software-development-company-dubai",
    images: ["/logo.webp"],
  },
  alternates: {
    canonical: "https://technioz.com/software-development-company-dubai",
  },
};

export default function SoftwareDevelopmentCompanyDubai() {
  return (
    <>
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="Dubai, UAE" />
            <span className="e1 text-cobolt-500">Dubai, UAE</span>
            <h1 className="h2 text-black-500">Custom Software Development Company in Dubai</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              Off-the-shelf software rarely matches how Dubai businesses actually operate. We build custom software platforms, enterprise applications, and digital products that fit your workflows, integrate with your existing systems, and scale across the UAE and GCC.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>End-to-end software development: discovery, architecture, UX, build, and support</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Web apps, mobile apps, cloud platforms, AI features, and legacy modernization</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Engineering teams aligned to UAE and GCC time zones and business expectations</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Book a Free Strategy Call</Link>
              <Link href="/custom-software-development" className="e2 text-cobolt-500">Read the custom software guide →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">Software Engineering for the UAE Market</h2>
            <p className="p3 text-black-400">We combine product thinking with enterprise discipline so your software solves real business problems and lasts.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Requirements First", desc: "We start with your users, processes, and constraints before writing a single line of code." },
              { title: "Scalable Architecture", desc: "Clean monoliths or microservices, cloud-native design, and data models that support growth." },
              { title: "Security & Compliance", desc: "Authentication, authorization, audit trails, and data handling aligned to regional expectations." },
              { title: "Integration Ready", desc: "ERP, CRM, payment gateways, government systems, and third-party APIs connected cleanly." },
              { title: "Bilingual Interfaces", desc: "English and Arabic UIs, RTL support, and locale-aware data formats across web and mobile." },
              { title: "Long-Term Support", desc: "Hosting, monitoring, feature evolution, and technical partnership after go-live." },
            ].map((f, i) => (
              <div key={i} className="bg-white-200 rounded-sm p-[32px]">
                <h3 className="font-display text-[18px] font-medium text-black-500 mb-2">{f.title}</h3>
                <p className="p4 text-black-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-12">
            <h2 className="h4 text-black-500 mb-4">Custom Software We Build in Dubai</h2>
            <p className="p3 text-black-400">From internal operations to customer-facing platforms, we turn complex requirements into clean software.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Enterprise Software", desc: "Workflow automation, reporting, approval chains, and resource planning for large organizations.", tags: ["Enterprise", "ERP", "Reports"], link: "/services/enterprise-software-development" },
              { title: "Operations Platforms", desc: "Custom dashboards and tools that replace spreadsheets and disconnected systems.", tags: ["Dashboards", "APIs", "Cloud"], link: null },
              { title: "Customer-Facing Apps", desc: "Web and mobile products that serve customers, partners, and field teams.", tags: ["B2B", "B2C", "Portals"], link: null },
              { title: "AI-Enabled Software", desc: "LLM features, document processing, and intelligent automation embedded in core systems.", tags: ["OpenAI", "RAG", "Agents"], link: "/services/ai-solutions" },
              { title: "Legacy Modernization", desc: "Rebuild or refactor aging systems while preserving business logic and data.", tags: ["Migration", "Refactor", "Cloud"], link: "/services/cloud-migration" },
              { title: "MVP Development", desc: "Rapid prototypes and minimum viable products to validate ideas before full investment.", tags: ["Lean", "Prototype", "Launch"], link: "/services/mvp-development" },
            ].map((s) => (
              <div key={s.title} className="bg-white-300 rounded-sm p-[32px] flex flex-col gap-[16px]">
                <h3 className="font-display text-[22px] leading-none tracking-[-1.1px] text-black-500">{s.title}</h3>
                <p className="p4 text-black-400 flex-1">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => <span key={t} className="text-[12px] text-cobolt-500 font-mono uppercase tracking-[1px] bg-cobolt-500/5 px-2 py-1 rounded-sm">{t}</span>)}
                </div>
                {s.link && <Link href={s.link} className="e2 text-cobolt-500 text-sm mt-1">Learn more →</Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-12">
            <h2 className="h4 !text-white-200 mb-4">Technologies We Use for Dubai Software Projects</h2>
            <p className="p3 text-black-200">Stack chosen for performance, maintainability, and the ability to hire local talent.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["React", "Next.js", "TypeScript", "Node.js", "NestJS", "Python", "PostgreSQL", "MongoDB", "Redis", "Prisma", "GraphQL", "REST", "Docker", "Kubernetes", "AWS", "Azure", "Google Cloud", "Terraform", "React Native", "Flutter"].map((t) => (
              <span key={t} className="inline-flex items-center rounded-sm border border-black-400 px-[16px] py-[12px] p4 text-black-200">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="max-w-[700px]">
              <h2 className="h4 text-black-500 mb-4">A Software Partner for Dubai & the GCC</h2>
              <p className="p3 text-black-400 mb-6">We act as an extension of your team, with clear ownership, transparent progress, and engineering quality your stakeholders can trust.</p>
              <ul className="flex flex-col gap-3 p4 text-black-400">
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Discovery workshops to define scope, risk, and ROI before development</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Agile delivery with fortnightly releases and real-time progress tracking</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>QA, documentation, deployment, and knowledge transfer included</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Post-launch support and continuous improvement plans</span></li>
              </ul>
            </div>
            <div className="bg-white-300 rounded-sm p-[32px]">
              <h3 className="font-display text-[20px] leading-none tracking-[-1px] text-black-500 mb-4">Local Coverage</h3>
              <p className="p4 text-black-400 mb-4">We support software projects across the UAE and wider GCC region.</p>
              <div className="flex flex-wrap gap-2">
                {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Riyadh", "Jeddah", "Doha", "Kuwait City", "Manama"].map((c) => (
                  <span key={c} className="text-[12px] text-black-300 bg-black-500/5 px-2 py-1 rounded-sm">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-[600px]">
            <h2 className="h3 !text-white-100 mb-4">Build Custom Software in Dubai</h2>
            <p className="p3 text-white-100/80">Tell us your challenge. We&apos;ll design a software solution that fits your business and your market.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Book a Free Strategy Call</Link>
        </div>
      </section>
    </>
  );
}

function Breadcrumb({ label }: { label: string }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Custom Software Development", href: "/services/custom-software-development" }, { name: label }]} />
      <div className="flex items-center gap-2 text-black-300 p5">
        <Link href="/" className="hover:text-cobolt-500">Home</Link> / <Link href="/services" className="hover:text-cobolt-500">Services</Link> / <Link href="/services/custom-software-development" className="hover:text-cobolt-500">Custom Software Development</Link> / <span>{label}</span>
      </div>
    </>
  );
}
