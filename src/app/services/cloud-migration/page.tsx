import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Migration Services | Technioz",
  description: "Cloud migration services for AWS, Azure, and GCP. Move applications and databases with minimal downtime and risk.",
  openGraph: {
    title: "Cloud Migration Services | AWS, Azure, GCP | Technioz",
    description:
      "Technioz migrates applications and infrastructure to AWS, Azure, and Google Cloud with minimal downtime.",
    url: "https://technioz.com/services/cloud-migration",
    images: ["/logo.webp"],
  },
  alternates: {
    canonical: "https://technioz.com/services/cloud-migration",
  },
};

export default function CloudMigration() {
  return (
    <>
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="Cloud Migration" />
            <span className="e1 text-black-300">{'\u{2601}\u{FE0F}'} Cloud Migration</span>
            <h1 className="h2 text-black-500">Move to the Cloud Without the Downtime or Drama</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              Cloud migrations fail when teams treat them like pure copy-and-paste exercises. We migrate workloads to AWS, Azure, and Google Cloud with a phased plan that protects uptime, controls cost, and leaves your team confident operating the new environment.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Lift-and-shift, re-platforming, refactoring, and hybrid cloud strategies</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Database replication, storage transfer, and zero-downtime cutover plans</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Risk assessment, cost modeling, security hardening, and rollback playbooks</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Get a Migration Assessment</Link>
              <Link href="/services/cloud-services" className="e2 text-cobolt-500">Back to cloud services →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">Why Cloud Migrations Stall — and How We Keep Them Moving</h2>
            <p className="p3 text-black-400">Our process addresses the real reasons migrations fail: underestimated dependencies, untested cutover steps, and unclear ownership.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Dependency Mapping", desc: "Catalog services, databases, integrations, and network requirements before a single workload moves." },
              { title: "Risk-First Sequencing", desc: "Migrate low-risk workloads first, validate performance, then move mission-critical systems." },
              { title: "Data Migration Runbooks", desc: "Replication, validation, and rollback steps for databases, files, caches, and message queues." },
              { title: "Cost Modeling", desc: "Right-size instances, choose reserved or spot options, and set budgets before go-live." },
              { title: "Security Hardening", desc: "IAM, encryption, VPC design, and compliance controls built into the target environment." },
              { title: "Knowledge Transfer", desc: "Documentation, runbooks, and hands-on sessions so your team can operate independently." },
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
            <h2 className="h4 text-black-500 mb-4">Migration Strategies We Apply</h2>
            <p className="p3 text-black-400">We pick the approach that fits your timeline, risk tolerance, and modernization goals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Lift-and-Shift", desc: "Move existing workloads quickly with minimal changes. Best for tight deadlines and stable applications.", tags: ["Rehost", "VMs", "Fast Cutover"], link: null },
              { title: "Re-Platforming", desc: "Make targeted optimizations such as managed databases and load balancers without full rewrites.", tags: ["Managed RDS", "Load Balancers", "PaaS"], link: null },
              { title: "Refactoring", desc: "Break monoliths into cloud-native services, containers, or serverless functions for long-term agility.", tags: ["Microservices", "Containers", "Serverless"], link: "/services/devops-services" },
              { title: "Hybrid Cloud", desc: "Keep sensitive workloads on-premises while bursting or extending to the cloud.", tags: ["VPN", "Direct Connect", "Hybrid"], link: null },
              { title: "Database Migration", desc: "Move SQL and NoSQL databases with replication, validation, and cutover windows planned to the minute.", tags: ["DMS", "Replication", "Validation"], link: null },
              { title: "Multi-Cloud", desc: "Distribute workloads across providers to reduce vendor lock-in and improve resilience.", tags: ["AWS", "Azure", "GCP"], link: null },
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
            <h2 className="h4 !text-white-200 mb-4">Platforms We Migrate To</h2>
            <p className="p3 text-black-200">Deep expertise across the three major clouds and the toolchain that connects them.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["AWS", "Microsoft Azure", "Google Cloud Platform", "AWS Migration Hub", "Azure Migrate", "Google Cloud Migrate", "Terraform", "CloudFormation", "Pulumi", "AWS DMS", "Azure Database Migration Service", "Docker", "Kubernetes", "CI/CD Pipelines"].map((t) => (
              <span key={t} className="inline-flex items-center rounded-sm border border-black-400 px-[16px] py-[12px] p4 text-black-200">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-12">Our Cloud Migration Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Discover", desc: "Inventory applications, data, dependencies, compliance needs, and current costs." },
              { title: "Plan", desc: "Select target architecture, migration waves, cutover windows, and success metrics." },
              { title: "Pilot", desc: "Migrate a non-critical workload first, validate performance, security, and operations." },
              { title: "Migrate", desc: "Execute the migration runbook with monitoring, rollback options, and go-live support." },
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

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-8">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "DevOps Services", desc: "Automated CI/CD pipelines and infrastructure that keep cloud workloads healthy.", href: "/services/devops-services" },
              { title: "AWS Consulting", desc: "Architecture design, migration, and cost optimization on AWS.", href: "/services/aws-consulting" },
              { title: "Cloud Services", desc: "Explore the full range of cloud and DevOps capabilities.", href: "/services/cloud-services" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="bg-white-200 rounded-sm p-[32px] flex flex-col gap-[12px] hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow group">
                <h3 className="font-display text-[20px] leading-none tracking-[-1px] text-black-500 group-hover:text-cobolt-500 transition-colors">{s.title}</h3>
                <p className="p4 text-black-400">{s.desc}</p>
                <span className="e2 text-cobolt-500 mt-2">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-[600px]">
            <h2 className="h3 !text-white-100 mb-4">Ready to Migrate With Confidence?</h2>
            <p className="p3 text-white-100/80">Tell us about your current environment. We&apos;ll map a low-risk migration plan and cost estimate.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Plan Your Cloud Migration</Link>
        </div>
      </section>
    </>
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
