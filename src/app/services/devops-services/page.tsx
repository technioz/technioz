import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevOps Services | Technioz",
  description: "DevOps services including CI/CD, Kubernetes, infrastructure as code, and observability. Ship faster with reliable systems.",
  openGraph: {
    title: "DevOps Services | CI/CD, Kubernetes, IaC | Technioz",
    description:
      "Technioz delivers DevOps services including CI/CD pipelines, infrastructure as code, Kubernetes, and observability.",
    url: "https://technioz.com/services/devops-services",
    images: ["/logo.webp"],
  },
  alternates: {
    canonical: "https://technioz.com/services/devops-services",
  },
};

export default function DevopsServices() {
  return (
    <>
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="DevOps Services" />
            <span className="e1 text-black-300">{'\u{2699}\u{FE0F}'} DevOps Services</span>
            <h1 className="h2 text-black-500">DevOps Automation That Speeds Up Releases Without Breaking Things</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              Manual deployments, silent failures, and invisible infrastructure waste engineering hours and create outages. We implement CI/CD, infrastructure as code, containers, and observability so your team ships faster and sleeps better.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>CI/CD pipelines, automated testing, and deployment strategies from staging to production</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Infrastructure as code with Terraform, Pulumi, CloudFormation, and Ansible</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Kubernetes, Docker, monitoring, alerting, and incident response practices</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Get a DevOps Assessment</Link>
              <Link href="/services/cloud-services" className="e2 text-cobolt-500">Back to cloud services →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">What Reliable DevOps Looks Like</h2>
            <p className="p3 text-black-400">We build automation that reduces toil, catches problems early, and gives teams clear ownership of production.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Continuous Integration", desc: "Automated builds, linting, tests, and security scans on every pull request." },
              { title: "Continuous Delivery", desc: "One-click, repeatable deployments to staging and production with approval gates." },
              { title: "Infrastructure as Code", desc: "Version-controlled, testable, and reusable infrastructure definitions." },
              { title: "Container Orchestration", desc: "Docker and Kubernetes clusters for scalable, portable workloads." },
              { title: "Observability Stack", desc: "Metrics, logs, traces, and alerts that point to root cause quickly." },
              { title: "Incident Preparedness", desc: "Runbooks, rollback automation, and on-call workflows that shorten recovery time." },
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
            <h2 className="h4 text-black-500 mb-4">DevOps Solutions We Deliver</h2>
            <p className="p3 text-black-400">From green-field platforms to rescue missions on legacy pipelines, we meet teams where they are.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "CI/CD Pipeline Design", desc: "Build, test, and release automation tuned for your stack and cadence.", tags: ["GitHub Actions", "GitLab CI", "Jenkins"], link: null },
              { title: "Kubernetes Platforms", desc: "EKS, AKS, GKE, and self-managed clusters with scaling, networking, and security configured.", tags: ["EKS", "AKS", "GKE"], link: null },
              { title: "Containerization", desc: "Dockerize applications, optimize image size, and secure registry workflows.", tags: ["Docker", "Harbor", "ECR"], link: null },
              { title: "Infrastructure as Code", desc: "Declarative environments for AWS, Azure, and GCP with review and rollback workflows.", tags: ["Terraform", "Pulumi", "CloudFormation"], link: null },
              { title: "Observability", desc: "Centralized logging, metrics dashboards, distributed tracing, and intelligent alerting.", tags: ["Datadog", "Prometheus", "Grafana"], link: null },
              { title: "DevSecOps", desc: "Shift-left security scanning, secret management, and compliance checks inside the pipeline.", tags: ["SAST", "Snyk", "Vault"], link: null },
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
            <h2 className="h4 !text-white-200 mb-4">DevOps Toolchain We Use</h2>
            <p className="p3 text-black-200">Cloud-native tools chosen for reliability, ecosystem maturity, and your existing stack.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["GitHub Actions", "GitLab CI", "Jenkins", "Azure DevOps", "Terraform", "Pulumi", "AWS CloudFormation", "Ansible", "Docker", "Kubernetes", "Helm", "AWS EKS", "Azure AKS", "Google GKE", "Prometheus", "Grafana", "Datadog", "ELK Stack", "HashiCorp Vault", "ArgoCD", "Flux"].map((t) => (
              <span key={t} className="inline-flex items-center rounded-sm border border-black-400 px-[16px] py-[12px] p4 text-black-200">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-12">Our DevOps Engagement Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Assess", desc: "Audit current pipelines, infrastructure, tooling, and deployment pain points." },
              { title: "Design", desc: "Define target workflows, IaC structure, observability, and security controls." },
              { title: "Implement", desc: "Build pipelines, provision environments, and migrate workloads incrementally." },
              { title: "Operate", desc: "Monitor, refine, document, and train your team for self-sufficient operations." },
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
              { title: "Cloud Migration", desc: "Move applications and databases to the cloud with minimal downtime.", href: "/services/cloud-migration" },
              { title: "AWS Consulting", desc: "Design, migrate, and optimize workloads on AWS.", href: "/services/aws-consulting" },
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
            <h2 className="h3 !text-white-100 mb-4">Tired of Slow, Fragile Deployments?</h2>
            <p className="p3 text-white-100/80">Tell us your current stack. We&apos;ll design a DevOps workflow your team can trust.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Build Your DevOps Pipeline</Link>
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
