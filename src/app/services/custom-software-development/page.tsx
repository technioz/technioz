import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Software Development Company | Web, Mobile, Enterprise | Technioz",
  description: "Custom software development company. End-to-end web, mobile, and enterprise solutions built around your exact workflow.",
  openGraph: {
    title: "Custom Software Development Company | Web, Mobile, Enterprise | Technioz",
    description:
      "Technioz designs and builds custom software that fits your exact workflows.",
    url: "https://technioz.com/services/custom-software-development",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://technioz.com/services/custom-software-development",
  },
};

export default function CustomSoftwareDevelopment() {
  return (
    <>
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="Custom Software" />
            <span className="e1 text-black-300">{'\u{1F4BB}'} Custom Software Development</span>
            <h1 className="h2 text-black-500">Custom Software Built for Your Exact Workflow</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              Off-the-shelf tools force you to adapt your business to someone else&apos;s product. We build software around your processes, your data, and your growth goals.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Web, mobile, and enterprise applications designed around your business logic</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Integrations with existing CRM, ERP, payment, and productivity tools</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Scalable architecture, clean code, and ongoing support from one team</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Get a Free Custom Software Quote</Link>
              <Link href="/custom-software-development" className="e2 text-cobolt-500">Read the custom software guide →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">Why Custom Software Wins Over Generic Tools</h2>
            <p className="p3 text-black-400">When your competitive advantage depends on how you operate, your software should fit you — not the other way around.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Fits Your Workflow", desc: "We model your real process, roles, and rules instead of forcing you into preset features." },
              { title: "Own Your Data", desc: "No platform limits or surprise pricing changes. Your data, your logic, your infrastructure." },
              { title: "Integrate Everything", desc: "Connect your CRM, ERP, accounting, warehouse, and marketing tools into one system." },
              { title: "Scale Without Friction", desc: "Architected for growth with modular code, APIs, and cloud-native infrastructure." },
              { title: "Better UX, Higher Adoption", desc: "Interfaces designed for the people who actually use the system every day." },
              { title: "Long-Term Support", desc: "We stay with you for updates, monitoring, security patches, and new features." },
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
            <h2 className="h4 text-black-500 mb-4">What We Build</h2>
            <p className="p3 text-black-400">Every project starts with the business outcome and ends with production-ready software.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Business Web Applications", desc: "Internal portals, dashboards, and workflow tools that replace spreadsheets and manual handoffs.", tags: ["React", "Next.js", "Node.js"], link: "/services/web-development" },
              { title: "Customer-Facing Platforms", desc: "Self-service portals, booking systems, and SaaS products for end users.", tags: ["SaaS", "Subscription", "UX/UI"], link: "/services/web-development" },
              { title: "Mobile-First Products", desc: "iOS, Android, and cross-platform apps that extend your software to users on the move.", tags: ["React Native", "Flutter", "Swift"], link: "/services/mobile-development" },
              { title: "Enterprise Systems", desc: "Secure, multi-role platforms with audit trails, permissions, and compliance controls.", tags: ["RBAC", "Audit Logs", "Compliance"], link: "/services/enterprise-software-development" },
              { title: "System Integrations", desc: "APIs, connectors, and middleware that keep data flowing between tools.", tags: ["REST", "GraphQL", "Webhooks"], link: null },
              { title: "Legacy Modernization", desc: "Rebuild or refactor aging systems without disrupting current operations.", tags: ["Migration", "Refactor", "Cloud"], link: "/services/cloud-migration" },
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

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-12">
            <h2 className="h4 text-black-500 mb-4">See it in action</h2>
            <p className="p3 text-black-400">A custom platform built around a client&apos;s exact workflow — from manual counters to digital sales.</p>
          </div>
          <Link href="/portfolio/alkhanjry-transport" className="bg-white-200 rounded-sm p-[32px] flex flex-col gap-[12px] hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow group max-w-[700px]">
            <h3 className="font-display text-[20px] leading-none tracking-[-1px] text-black-500 group-hover:text-cobolt-500 transition-colors">Al Khanjry Groups</h3>
            <p className="p4 text-black-400">Custom ticketing and operations platform that handles $1M+ in digital ticket sales.</p>
            <span className="e2 text-cobolt-500 mt-2">Read case study →</span>
          </Link>
        </div>
      </section>

      <section className="bg-black-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-12">
            <h2 className="h4 !text-white-200 mb-4">Technologies We Use</h2>
            <p className="p3 text-black-200">Stacks chosen for reliability, developer productivity, and long-term maintainability.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"].map((t) => (
              <span key={t} className="inline-flex items-center rounded-sm border border-black-400 px-[16px] py-[12px] p4 text-black-200">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-12">How We Build Custom Software</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Discovery", desc: "We learn your process, users, constraints, and what success looks like." },
              { title: "Architecture", desc: "We design the data model, integrations, tech stack, and security model." },
              { title: "Development", desc: "Agile sprints with demos, tests, and feedback loops every two weeks." },
              { title: "Launch & Support", desc: "Production deployment, monitoring, training, and continuous improvement." },
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
            <h2 className="h3 !text-white-100 mb-4">Stop Working Around Your Software</h2>
            <p className="p3 text-white-100/80">Tell us what you need. We&apos;ll design a custom solution that fits your workflow and grows with your business.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Start Your Custom Build</Link>
        </div>
      </section>
    </>
  );
}

const related = [
  { title: "Web Development", desc: "Fast, secure, SEO-friendly web applications with React, Next.js, and Node.js.", href: "/services/web-development" },
  { title: "Mobile Development", desc: "Native iOS, Android, and cross-platform apps built for engagement and growth.", href: "/services/mobile-development" },
  { title: "Enterprise Software Development", desc: "Secure, scalable platforms with role-based access and compliance controls.", href: "/services/enterprise-software-development" },
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
