import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enterprise Software Development | Technioz",
  description: "Enterprise software development that is secure, compliant, and scalable. Built for organizations that cannot afford downtime.",
  openGraph: {
  title: "Enterprise Software Development | Secure & Scalable | Technioz",
    description:
      "Technioz builds enterprise software with role-based access, audit trails, integrations, and compliance controls.",
    url: "https://technioz.com/services/enterprise-software-development",
    images: ["/logo.webp"],
  },
  alternates: {
    canonical: "https://technioz.com/services/enterprise-software-development",
  },
};

export default function EnterpriseSoftwareDevelopment() {
  return (
    <>
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="Enterprise Software" />
            <span className="e1 text-black-300">{'\u{1F3E2}'} Enterprise Software Development</span>
            <h1 className="h2 text-black-500">Enterprise Software That Stays Secure, Compliant, and Fast</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              Enterprise software has to do more than work — it has to protect data, satisfy auditors, integrate with legacy systems, and scale with the business. We build platforms that do all four.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Role-based access, audit trails, encryption, and compliance by design</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Integration with ERP, CRM, HR, payment, and legacy systems</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Scalable cloud architecture, automated testing, and long-term support</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Get an Enterprise Software Assessment</Link>
              <Link href="/custom-software-development" className="e2 text-cobolt-500">Read the custom software guide →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">What Enterprise Software Must Get Right</h2>
            <p className="p3 text-black-400">Growth introduces complexity. We build systems that handle it without creating risk or friction.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Security First", desc: "Auth, encryption, access control, vulnerability testing, and secure SDLC practices." },
              { title: "Compliance Ready", desc: "Built-in controls for SOC 2, GDPR, HIPAA, PCI-DSS, and industry-specific standards." },
              { title: "Role-Based Access", desc: "Granular permissions, admin controls, and audit logs for every action." },
              { title: "System Integration", desc: "Connect with ERP, CRM, accounting, HR, and custom legacy systems through APIs." },
              { title: "High Availability", desc: "Redundancy, monitoring, backups, and disaster recovery plans that protect revenue." },
              { title: "Operational Visibility", desc: "Dashboards, reporting, and alerts that give leadership real-time insight." },
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
            <h2 className="h4 text-black-500 mb-4">Enterprise Software We Build</h2>
            <p className="p3 text-black-400">Tailored platforms for the operational and regulatory demands of large organizations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Operations Platforms", desc: "Workflow automation, resource planning, and team coordination tools.", tags: ["Operations", "Workflow", "Reporting"], link: null },
              { title: "Customer Portals", desc: "Self-service portals with account management, support, and billing.", tags: ["Self-Service", "Billing", "Support"], link: "/services/web-development" },
              { title: "Supply Chain Systems", desc: "Inventory, procurement, vendor management, and logistics tracking.", tags: ["Inventory", "Procurement", "Logistics"], link: "/solutions/logistics" },
              { title: "Finance & Billing", desc: "Invoicing, payment processing, revenue recognition, and financial reporting.", tags: ["Payments", "Reporting", "Compliance"], link: "/solutions/finance" },
              { title: "Healthcare Systems", desc: "HIPAA-compliant patient management, scheduling, and clinical documentation.", tags: ["HIPAA", "Scheduling", "EHR"], link: "/solutions/healthcare" },
              { title: "Legacy Modernization", desc: "Refactor or replace aging systems while keeping the business running.", tags: ["Refactor", "Migration", "Cloud"], link: "/services/cloud-migration" },
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
            <h2 className="h4 !text-white-200 mb-4">Industries We Serve</h2>
            <p className="p3 text-black-200">We understand the workflows, integrations, and compliance pressures of regulated industries.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["Financial Services", "Compliance, risk management, secure transactions, and reporting."],
              ["Healthcare", "HIPAA, interoperability, patient portals, and clinical workflows."],
              ["Logistics & Supply Chain", "Fleet management, inventory, and multi-vendor coordination."],
              ["Retail & E-commerce", "Omnichannel operations, order management, and customer data."],
              ["Education", "Student portals, scheduling, assessments, and administration."],
              ["Manufacturing", "Production tracking, quality control, and IoT integrations."],
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
          <h2 className="h4 text-black-500 mb-12">Our Enterprise Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Governance & Discovery", desc: "Define stakeholders, security requirements, compliance scope, and success metrics." },
              { title: "Architecture & Design", desc: "Design secure, scalable systems with clear integration points and audit controls." },
              { title: "Agile Development", desc: "Sprints with stakeholder demos, automated testing, and documentation." },
              { title: "Deployment & Support", desc: "Production rollout, monitoring, user training, and ongoing maintenance." },
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
            <h2 className="h3 !text-white-100 mb-4">Build Enterprise Software Without the Enterprise Risk</h2>
            <p className="p3 text-white-100/80">Share your requirements. We&apos;ll respond with a security, compliance, and delivery plan tailored to your organization.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Start Your Enterprise Build</Link>
        </div>
      </section>
    </>
  );
}

const related = [
  { title: "Custom Software Development", desc: "Software built around your exact workflows, data, and growth goals.", href: "/services/custom-software-development" },
  { title: "Cloud Migration", desc: "Move applications and data to the cloud with minimal disruption.", href: "/services/cloud-migration" },
  { title: "IT Consulting", desc: "Strategic IT consulting that turns technology into growth.", href: "/services/it-consulting" },
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
