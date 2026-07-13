import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AWS Consulting Company",
  description: "AWS consulting company. Architecture design, migration, serverless, cost optimization, and security hardening on Amazon Web Services.",
  openGraph: buildOpenGraph({
      title: "AWS Consulting Company",
      description: "Technioz provides AWS consulting and implementation services including architecture design, migration, serverless, and cost optimization.",
      url: "https://technioz.com/services/aws-consulting",
    }),
  alternates: {
    canonical: "https://technioz.com/services/aws-consulting",
  },
};

export default function AwsConsulting() {
  return (
    <>
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="AWS Consulting" />
            <span className="e1 text-black-300">{'\u{1F4E1}'} AWS Consulting</span>
            <h1 className="h2 text-black-500">AWS Consulting That Maximizes Performance and Minimizes Waste</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              AWS offers hundreds of services, but the wrong choices lead to runaway bills, fragile architectures, and security gaps. We design, migrate, and optimize AWS environments so you use the right services for the right jobs.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Well-Architected Reviews, landing zones, and multi-account strategy</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Serverless, containerized, and event-driven application design</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Cost optimization, security hardening, and 24/7-ready operations</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Get AWS Consulting</Link>
              <Link href="/services/cloud-services" className="e2 text-cobolt-500">Back to cloud services →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">What Strong AWS Architecture Delivers</h2>
            <p className="p3 text-black-400">We align AWS design with the Well-Architected Framework so systems are secure, resilient, efficient, and observable.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Operational Excellence", desc: "Infrastructure as code, automated deployments, runbooks, and continuous improvement loops." },
              { title: "Security", desc: "IAM least privilege, encryption at rest and in transit, VPC segmentation, and audit logging." },
              { title: "Reliability", desc: "Multi-AZ deployments, automated backups, disaster recovery, and chaos-tested failover." },
              { title: "Performance Efficiency", desc: "Right-sized compute, caching, CDNs, and serverless where it fits your traffic patterns." },
              { title: "Cost Optimization", desc: "Reserved capacity, Savings Plans, spot instances, and lifecycle policies that cut waste." },
              { title: "Sustainability", desc: "Efficient resource utilization and sustainable design choices without sacrificing performance." },
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
            <h2 className="h4 text-black-500 mb-4">AWS Consulting Services We Provide</h2>
            <p className="p3 text-black-400">From initial landing zone to production optimization, we cover the full AWS lifecycle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AWS Architecture Design", desc: "Design secure, scalable AWS environments aligned with your applications and compliance needs.", tags: ["VPC", "IAM", "Multi-Account"], link: null },
              { title: "AWS Migration", desc: "Migrate workloads to AWS using proven runbooks, DMS, and phased cutover plans.", tags: ["DMS", "Migration Hub", "Cutover"], link: "/services/cloud-migration" },
              { title: "Serverless Development", desc: "Build event-driven applications with Lambda, API Gateway, Step Functions, and DynamoDB.", tags: ["Lambda", "API Gateway", "DynamoDB"], link: null },
              { title: "Container Services", desc: "Run Docker workloads on ECS or EKS with managed scaling, networking, and observability.", tags: ["ECS", "EKS", "Fargate"], link: null },
              { title: "Cost Optimization", desc: "Analyze billing, right-size resources, and implement purchasing strategies that reduce AWS spend.", tags: ["Cost Explorer", "Savings Plans", "Spot"], link: null },
              { title: "Security & Compliance", desc: "Harden accounts, configure guardrails, and prepare for audits with AWS security services.", tags: ["Security Hub", "Config", "CloudTrail"], link: null },
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
            <h2 className="h4 !text-white-200 mb-4">AWS Services We Work With</h2>
            <p className="p3 text-black-200">Breadth across compute, storage, networking, data, security, and operations.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["AWS Lambda", "Amazon ECS", "Amazon EKS", "AWS Fargate", "Amazon EC2", "Amazon S3", "Amazon RDS", "Amazon DynamoDB", "Amazon CloudFront", "API Gateway", "AWS Step Functions", "Amazon SQS", "Amazon SNS", "Amazon EventBridge", "AWS IAM", "AWS VPC", "AWS CloudFormation", "AWS Terraform", "AWS CloudWatch", "AWS X-Ray", "AWS Security Hub", "AWS Config", "AWS CloudTrail", "AWS Cost Explorer"].map((t) => (
              <span key={t} className="inline-flex items-center rounded-sm border border-black-400 px-[16px] py-[12px] p4 text-black-200">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-12">Our AWS Consulting Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Discover", desc: "Understand workloads, costs, compliance needs, and current AWS usage or readiness." },
              { title: "Architect", desc: "Design accounts, networking, security, compute, and data layers on AWS." },
              { title: "Build", desc: "Implement infrastructure as code, CI/CD, monitoring, and application services." },
              { title: "Optimize", desc: "Tune performance, security, and cost while training your team for ongoing operations." },
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
              { title: "Cloud Migration", desc: "Move applications and databases to AWS and other clouds with minimal downtime.", href: "/services/cloud-migration" },
              { title: "DevOps Services", desc: "Automated CI/CD pipelines and infrastructure operations for AWS workloads.", href: "/services/devops-services" },
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
            <h2 className="h3 !text-white-100 mb-4">Want to Get More From AWS?</h2>
            <p className="p3 text-white-100/80">Tell us your current setup. We&apos;ll identify architecture risks, cost savings, and modernization opportunities.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Start AWS Consulting</Link>
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
