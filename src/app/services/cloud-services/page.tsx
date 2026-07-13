import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import type { Metadata } from "next";
import { CloudServicesDiagram } from "@/components/diagrams/cloud-services-diagram";

import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Cloud Services & DevOps Company | AWS, Azure, GCP",
  description: "Cloud services and DevOps company. Migration, Kubernetes, CI/CD, serverless, and infrastructure as code across AWS, Azure, and GCP.",
  openGraph: buildOpenGraph({
      title: "Cloud Services & DevOps Company | AWS, Azure, GCP",
      description: "Technioz delivers cloud migration, DevOps automation, Kubernetes, and infrastructure as code across AWS, Azure, and Google Cloud.",
      url: "https://technioz.com/services/cloud-services",
    }),
  alternates: {
    canonical: "https://technioz.com/services/cloud-services",
  },
};

export default function CloudServices() {
  return <SubPage data={pageData} />;
}

type CloudPageData = {
  title: string;
  desc: string;
  label: string;
  icon: string;
  breadcrumb: string;
  features: { title: string; desc: string }[];
  services: { title: string; desc: string; tags: string[]; benefits: string[]; link?: string | null }[];
  providers: { name: string; key: string; strengths: string }[];
  process: { title: string; desc: string }[];
};

const pageData: CloudPageData = {
  title: "Cloud & DevOps Services That Cut Costs and Accelerate Releases",
  desc: "Bad infrastructure shows up as slow deployments, surprise bills, and midnight outages. We design, migrate, and automate cloud environments that are secure, observable, and ready to scale.",
  label: "Cloud Services",
  icon: "\u{2601}\uFE0F",
  breadcrumb: "Cloud Services",
  features: [
    { title: "Faster Releases", desc: "CI/CD pipelines, automated tests, and infrastructure as code reduce deployment time from days to minutes." },
    { title: "Lower Cloud Bills", desc: "Right-sizing, reserved capacity, serverless, and autoscaling that match spend to actual usage." },
    { title: "Zero-Downtime Migrations", desc: "Proven migration runbooks, blue-green deployments, and rollback plans for legacy workloads." },
    { title: "Security by Design", desc: "VPCs, IAM policies, encryption, secrets management, and compliance guardrails from the start." },
    { title: "Full Observability", desc: "Centralized logs, metrics, alerts, and tracing so issues are caught before customers notice." },
    { title: "Multi-Cloud Expertise", desc: "AWS, Azure, and Google Cloud strategy without vendor lock-in or unnecessary complexity." },
  ],
  services: [
    { title: "Cloud Migration", desc: "Move applications, databases, and workloads to the cloud with minimal disruption.", tags: ["AWS Migration Hub", "Azure Migrate", "Google Cloud Migrate"], benefits: ["Reduced Costs", "Better Scalability", "Improved Security", "Less Downtime"], link: "/services/cloud-migration" },
    { title: "DevOps & CI/CD", desc: "Automated build, test, and deployment pipelines that improve reliability and speed.", tags: ["GitHub Actions", "GitLab CI", "Jenkins", "Azure DevOps"], benefits: ["Faster Releases", "Automated Testing", "Fewer Errors", "Better Collaboration"], link: "/services/devops-services" },
    { title: "Kubernetes & Containers", desc: "Container orchestration for microservices and portable, scalable applications.", tags: ["Kubernetes", "Docker", "AWS EKS", "Azure AKS"], benefits: ["Portability", "Auto Scaling", "Resource Efficiency", "Microservices"], link: null },
    { title: "Serverless Architecture", desc: "Event-driven applications that scale automatically and eliminate idle servers.", tags: ["AWS Lambda", "Azure Functions", "Google Cloud Functions"], benefits: ["Cost Optimization", "Auto Scaling", "No Server Management", "Faster Time to Market"], link: null },
    { title: "Cloud Security & Compliance", desc: "Hardened infrastructure, access controls, and compliance-ready configurations.", tags: ["AWS Security Hub", "Azure Policy", "IAM", "Encryption"], benefits: ["Data Protection", "Threat Detection", "Access Control", "Compliance"], link: null },
    { title: "Infrastructure as Code", desc: "Version-controlled infrastructure for reproducible, auditable environments.", tags: ["Terraform", "AWS CloudFormation", "Pulumi", "Ansible"], benefits: ["Version Control", "Reproducibility", "Automation", "Consistency"], link: null },
  ],
  providers: [
    { name: "AWS", key: "EC2, S3, Lambda, RDS, EKS, CloudFormation", strengths: "Market leader with the broadest service catalog and global reach." },
    { name: "Azure", key: "Virtual Machines, Blob Storage, Functions, SQL Database, AKS", strengths: "Strong enterprise integration, hybrid cloud, and security tooling." },
    { name: "Google Cloud", key: "Compute Engine, Cloud Storage, Cloud Functions, Cloud SQL, GKE", strengths: "Best-in-class data analytics, AI/ML services, and Kubernetes leadership." },
  ],
  process: [
    { title: "Assessment", desc: "Audit current infrastructure, workloads, costs, and security posture." },
    { title: "Strategy", desc: "Define target architecture, platform choice, and migration priorities." },
    { title: "Design", desc: "Build IaC templates, CI/CD pipelines, and security guardrails." },
    { title: "Migration", desc: "Execute phased migration with testing, rollback plans, and cutover support." },
    { title: "Optimization", desc: "Tune performance, rightsizing, cost controls, and observability." },
    { title: "Operate", desc: "Provide ongoing monitoring, support, and continuous improvement." },
  ],
};

function SubPage({ data }: { data: CloudPageData }) {
  return (
    <>
      <Section bg="white-200" pad>
        <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label={data.breadcrumb} />
          <span className="e1 text-black-300">{data.icon} {data.label}</span>
          <h1 className="h2 text-black-500">{data.title}</h1>
          <p className="p3 text-black-400 max-w-[600px]">{data.desc}</p>
          <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
            <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Cloud migration, DevOps automation, Kubernetes, and serverless across AWS, Azure, and GCP</span></li>
            <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Infrastructure as code, CI/CD, and full observability from day one</span></li>
            <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Cost optimization, security hardening, and compliance guardrails built in</span></li>
          </ul>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="cta-primary w-fit">Get a Free Cloud Assessment</Link>
            <Link href="/cloud-devops" className="e2 text-cobolt-500">Read the cloud & DevOps guide →</Link>
          </div>
        </div>
      </Section>

      <Section bg="white-300" pad>
        <div className="max-w-[700px] mb-12">
          <h2 className="h4 text-black-500 mb-4">Why Infrastructure Shouldn&apos;t Be an Afterthought</h2>
          <p className="p3 text-black-400">Slow releases, runaway costs, and fragile systems usually come from the same place: infrastructure that grew without a plan.</p>
        </div>
        <Grid3>
          {data.features.map((f) => (
            <Card key={f.title}>
              <h3 className="font-display text-[18px] font-medium text-black-500 mb-2">{f.title}</h3>
              <p className="p4 text-black-400">{f.desc}</p>
            </Card>
          ))}
        </Grid3>
      </Section>

      <Section bg="white-200" pad>
        <div className="max-w-[640px] flex flex-col gap-[16px] mb-10">
          <span className="e1 inline-flex items-center justify-center border px-[16px] py-[8px] border-black-400 text-black-400 w-fit">Architecture</span>
          <h2 className="h4 text-black-500">From Commit to Production — Safely</h2>
          <p className="p3 text-black-400">Our cloud blueprint combines CI/CD, container orchestration, monitoring, and multi-environment deployment so teams ship faster with confidence.</p>
        </div>
        <div className="bg-white-300 border border-neutral-300 rounded-sm p-6 lg:p-10">
          <CloudServicesDiagram />
        </div>
      </Section>

      <Section bg="white-200" pad>
        <div className="max-w-[700px] mb-12">
          <h2 className="h4 text-black-500 mb-4">Cloud & DevOps Services</h2>
          <p className="p3 text-black-400">We handle the foundation so your engineering team can focus on product.</p>
        </div>
        <Grid3>
          {data.services.map((s) => (
            <div key={s.title} className="bg-white-300 rounded-sm p-[32px] flex flex-col gap-[14px]">
              <h3 className="font-display text-[22px] leading-none tracking-[-1.1px] text-black-500">{s.title}</h3>
              <p className="p4 text-black-400">{s.desc}</p>
              <div className="flex flex-wrap gap-2">{s.tags.map((t) => <span key={t} className="text-[12px] text-cobolt-500 font-mono bg-cobolt-500/5 px-2 py-1 rounded-sm">{t}</span>)}</div>
              <div className="flex flex-wrap gap-2">{s.benefits.map((b) => <span key={b} className="text-[12px] text-black-300 bg-black-500/5 px-2 py-1 rounded-sm">{b}</span>)}</div>
              {s.link && <Link href={s.link} className="e2 text-cobolt-500 text-sm mt-1">Learn more →</Link>}
            </div>
          ))}
        </Grid3>
      </Section>

      <Section bg="black-500" pad>
        <div className="max-w-[700px] mb-12">
          <h2 className="h4 !text-white-200 mb-4">Multi-Cloud Expertise</h2>
          <p className="p3 text-black-200">We match the right platform to your workload, budget, and compliance needs.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {data.providers.map((p) => (
            <div key={p.name} className="border border-black-400 rounded-sm p-[32px] flex flex-col gap-[12px]">
              <h3 className="font-display text-[28px] leading-none tracking-[-1.4px] !text-white-200">{p.name}</h3>
              <p className="p4 text-black-200">{p.key}</p>
              <p className="p5 text-black-300">{p.strengths}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="white-200" pad>
        <div className="max-w-[700px] mb-12">
          <h2 className="h4 text-black-500 mb-4">See it in action</h2>
          <p className="p3 text-black-400">Infrastructure designed for traffic spikes and zero-downtime deployments.</p>
        </div>
        <Link href="/portfolio/alkhanjry-transport" className="bg-white-300 rounded-sm p-[32px] flex flex-col gap-[12px] hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow group max-w-[700px]">
          <h3 className="font-display text-[20px] leading-none tracking-[-1px] text-black-500 group-hover:text-cobolt-500 transition-colors">Al Khanjry Transport</h3>
          <p className="p4 text-black-400">AWS-backed ticketing platform handling peak demand with auto-scaling, CI/CD, and full observability.</p>
          <span className="e2 text-cobolt-500 mt-2">Read case study →</span>
        </Link>
      </Section>

      <Section bg="white-200" pad>
        <h2 className="h4 text-black-500 mb-12">Our Cloud Transformation Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.process.map((p, i) => (
            <div key={p.title} className="flex gap-[16px]">
              <span className="font-display text-[40px] leading-none text-cobolt-500/30">0{i + 1}</span>
              <div>
                <h3 className="font-display text-[18px] font-medium text-black-500 mb-2">{p.title}</h3>
                <p className="p4 text-black-400">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <RelatedServices />

      <Section bg="cobolt-500" pad>
        <HeroCTA title="Ready to Move Faster in the Cloud?" desc="Get a free infrastructure assessment. We&apos;ll identify migration priorities, cost savings, and quick wins." />
      </Section>
    </>
  );
}

const related = [
  { title: "Cloud Migration", desc: "Move applications, databases, and workloads to the cloud with minimal disruption.", href: "/services/cloud-migration" },
  { title: "DevOps Services", desc: "Automated build, test, and deployment pipelines that improve reliability and speed.", href: "/services/devops-services" },
  { title: "Custom Software Development", desc: "Software built around your exact workflows, data, and growth goals.", href: "/services/custom-software-development" },
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

function Section({ children, bg, pad }: { children: React.ReactNode; bg: string; pad?: boolean }) {
  return <section className={`bg-${bg}`}><div className={`max-w-[1440px] mx-auto px-6 ${pad ? 'py-16 lg:py-[100px]' : ''} lg:px-[148px]`}>{children}</div></section>;
}

function Grid3({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{children}</div>;
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-white-200 rounded-sm p-[32px]">{children}</div>;
}

function HeroCTA({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
      <div className="max-w-[600px]">
        <h2 className="h3 !text-white-100 mb-4">{title}</h2>
        <p className="p3 text-white-100/80">{desc}</p>
      </div>
      <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Get Free Cloud Assessment</Link>
    </div>
  );
}
