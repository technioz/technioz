import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Transformation Consulting Company | Modernize Ops",
  description: "Digital transformation consulting company. Modernize processes, systems, and customer experiences without disrupting operations.",
  openGraph: buildOpenGraph({
      title: "Digital Transformation Consulting Company | Modernize Ops",
      description: "Technioz helps organizations modernize operations, migrate legacy systems, and adopt cloud, AI, and automation.",
      url: "https://technioz.com/services/digital-transformation-consulting",
    }),
  alternates: {
    canonical: "https://technioz.com/services/digital-transformation-consulting",
  },
};

export default function DigitalTransformationConsulting() {
  return (
    <>
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="Digital Transformation" />
            <span className="e1 text-black-300">{'\u{1F504}'} Digital Transformation Consulting</span>
            <h1 className="h2 text-black-500">Modernize Your Business Without the Disruption</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              Digital transformation is not about buying more tools. It is about redesigning how work gets done — then using technology to make it faster, cheaper, and more reliable. We help you do both.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>End-to-end assessment of systems, processes, and people</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Roadmaps for cloud migration, automation, AI adoption, and legacy modernization</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Hands-on execution support from strategy through deployment</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Get a Free Transformation Assessment</Link>
              <Link href="/custom-software-development" className="e2 text-cobolt-500">Read the custom software guide →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">Where Transformation Efforts Get Stuck — and How We Move Them Forward</h2>
            <p className="p3 text-black-400">Most digital transformations stall on process, not technology. We address the human and operational side as well as the technical one.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Process Mapping", desc: "We document current workflows and identify where automation or redesign will have the biggest impact." },
              { title: "Legacy Modernization", desc: "Gradual migration plans that reduce risk and avoid big-bang replacements." },
              { title: "Cloud & Infrastructure", desc: "Move to scalable, secure cloud environments with the right governance model." },
              { title: "AI & Automation", desc: "Introduce AI and automation where they actually improve speed, quality, or customer experience." },
              { title: "Data & Reporting", desc: "Unify data sources and build dashboards that support faster decisions." },
              { title: "Change Management", desc: "Training, rollout plans, and adoption support so people actually use the new systems." },
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
            <h2 className="h4 text-black-500 mb-4">Transformation Services We Deliver</h2>
            <p className="p3 text-black-400">Every engagement is tailored to your current state, goals, and risk tolerance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Digital Strategy", desc: "A clear roadmap that connects business goals to technology initiatives and budget.", tags: ["Roadmap", "Budgeting", "KPIs"], link: "/services/it-consulting" },
              { title: "Cloud Migration", desc: "Move applications and data to the cloud with minimal disruption.", tags: ["AWS", "Azure", "GCP"], link: "/services/cloud-migration" },
              { title: "Legacy System Modernization", desc: "Refactor, re-platform, or replace aging systems while maintaining operations.", tags: ["Refactor", "APIs", "Cloud"], link: "/services/custom-software-development" },
              { title: "Process Automation", desc: "Automate repetitive workflows with custom tools, RPA, or AI agents.", tags: ["Workflow", "RPA", "AI"], link: "/services/ai-workflow-automation" },
              { title: "AI & Analytics", desc: "Deploy AI and dashboards that turn data into faster, better decisions.", tags: ["LLM", "BI", "Reporting"], link: "/services/ai-solutions" },
              { title: "Custom Software Build", desc: "Build new platforms when off-the-shelf products cannot meet your needs.", tags: ["Web", "Mobile", "Enterprise"], link: "/services/custom-software-development" },
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
            <h2 className="h4 !text-white-200 mb-4">Industries We Transform</h2>
            <p className="p3 text-black-200">We combine deep technology expertise with an understanding of sector-specific operations.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["Financial Services", "Digital banking, compliance automation, and legacy modernization."],
              ["Healthcare", "Patient portals, interoperability, and HIPAA-compliant cloud migration."],
              ["Logistics & Transportation", "Fleet tracking, route optimization, and digital dispatch."],
              ["Retail & E-commerce", "Omnichannel operations, inventory systems, and customer data platforms."],
              ["Manufacturing", "IoT integration, production tracking, and quality control systems."],
              ["Education", "Student portals, LMS integrations, and administration automation."],
            ].map(([title, desc]) => (
              <div key={title as string} className="border border-black-400 rounded-sm p-[32px] flex flex-col gap-[12px]">
                <h3 className="font-display text-[22px] leading-none tracking-[-1.1px] !text-white-200">{title as string}</h3>
                <p className="p4 text-black-200">{desc as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-12">Our Digital Transformation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Assess", desc: "Audit systems, processes, data, and team readiness." },
              { title: "Prioritize", desc: "Identify quick wins and high-impact initiatives aligned with business goals." },
              { title: "Execute", desc: "Implement cloud, automation, AI, and custom software in focused phases." },
              { title: "Optimize", desc: "Measure outcomes, refine workflows, and scale what works." },
            ].map((p, i) => (
              <div key={p.title} className="flex gap-[16px]">
                <span className="font-display text-[40px] leading-none text-cobolt-500/30">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-[18px] font-medium text-black-500 mb-2">{p.title}</h3>
                  <p className="p4 text-black-400">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices />

      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-[600px]">
            <h2 className="h3 !text-white-100 mb-4">Ready to Modernize Your Operations?</h2>
            <p className="p3 text-white-100/80">Book a free assessment. We&apos;ll identify your biggest modernization opportunities and propose a practical roadmap.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Schedule Free Assessment</Link>
        </div>
      </section>
    </>
  );
}

const related = [
  { title: "IT Consulting", desc: "Strategic IT consulting that turns technology into growth.", href: "/services/it-consulting" },
  { title: "Cloud Services", desc: "Cloud migration, DevOps automation, and scalable infrastructure.", href: "/services/cloud-services" },
  { title: "AI Solutions", desc: "Practical AI solutions designed for ROI, not demos.", href: "/services/ai-solutions" },
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
