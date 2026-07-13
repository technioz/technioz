import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";

import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Software Development FAQs",
  description: "30 straight answers: what custom software costs, fixed-price vs hourly, timelines, NDAs, GDPR/HIPAA compliance, and how to start.",
  openGraph: buildOpenGraph({
      title: "FAQ | Technioz Software Development Questions",
      description: "Quick answers about our services, pricing, process, and engagement models.",
      url: "https://technioz.com/faq",
    }),
  alternates: {
    canonical: "https://technioz.com/faq",
  },
};

const faqs = [
  {
    q: "What services does Technioz offer?",
    a: "We offer full-cycle software development services including web application development (React, Next.js, Node.js), mobile app development (iOS, Android, React Native, Flutter), AI & machine learning solutions (NLP, chatbots, computer vision, predictive analytics), cloud services (AWS, Azure, GCP, DevOps), IT consulting, and team augmentation.",
  },
  {
    q: "How much does custom software development cost?",
    a: "Project costs vary based on scope and complexity. Most projects range from $15,000 to $100,000+. We provide a detailed fixed quote after an initial discovery phase where we understand your requirements, goals, and constraints. MVP packages for startups start at $15,000.",
  },
  {
    q: "How long does it take to develop a mobile app or web application?",
    a: "Timelines vary based on complexity. A typical MVP takes 8-12 weeks. Full-featured applications range from 2-6 months. We work in two-week sprint cycles with demos at the end of each, so you see progress regularly and can adjust priorities as needed.",
  },
  {
    q: "Do you work with clients in the Middle East and GCC?",
    a: "Yes. We have deep experience with clients across the GCC region including Oman, UAE, Saudi Arabia, Kuwait, Qatar, and Bahrain. We understand local payment gateways, regulatory requirements, and cultural expectations. Several of our flagship case studies — Integrated Golden Lines and Al Khanjry Groups — are GCC-based.",
  },
  {
    q: "Can I hire dedicated developers from Technioz?",
    a: "Yes. Our team augmentation model lets you embed individual engineers or dedicated squads into your existing team. No recruiting, no onboarding lag, no contractor churn. Pricing starts at $3,000/month per engineer with no long-term contracts.",
  },
  {
    q: "How do I start a project with Technioz?",
    a: "The fastest way is to book a free 30-minute roadmap session at calendly.com/technioztech/30min. We'll map out your product's next three milestones — what to build, in what order, and what it'll take. No contracts, no obligations. You can also email us at info@technioz.com or fill out the contact form on our contact page.",
  },
  {
    q: "What technologies do you use?",
    a: "We use modern, production-grade technologies: React, Next.js, TypeScript, Node.js, Python, React Native, Flutter, AWS, Azure, GCP, Docker, Kubernetes, MongoDB, PostgreSQL, GraphQL, REST APIs, and more. We pick the right stack for your specific needs — no legacy excuses.",
  },
  {
    q: "Do you provide ongoing support and maintenance?",
    a: "Yes. Every project includes 30 days of post-launch support. We also offer comprehensive maintenance packages that cover security updates, performance monitoring, bug fixes, backup management, and feature enhancements. Support is available 24/7 for critical issues.",
  },
  {
    q: "Can you work with our existing development team?",
    a: "Yes. We integrate seamlessly with your existing team — whether you need us to take ownership of a specific part of the stack, augment your team with additional engineers, or provide architectural guidance. We adapt to your workflow, tools, and communication preferences.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We have deep expertise across transportation & logistics, finance & fintech, e-commerce, healthcare, and education. Our work includes booking platforms, fleet management systems, payment gateways, HIPAA-compliant applications, learning management systems, and more.",
  },
  {
    q: "What is your development process?",
    a: "We follow a four-stage process: (1) Discover — we review your requirements and deliver a trusted timeline, (2) Design — wireframes, architecture, and sprint plan approved before any code is written, (3) Build — two-week sprints with demos every fourteen days, (4) Launch & Scale — deploy, monitor, iterate with ongoing support.",
  },
  {
    q: "What payment terms do you offer?",
    a: "We offer flexible payment structures including milestone-based payments, monthly retainers for dedicated teams, and per-engineer pricing for team augmentation. Payment terms are detailed in your project agreement. We accept bank transfers and major payment methods.",
  },
  {
    q: "Is my project data and IP secure?",
    a: "Yes. All intellectual property developed for your project belongs to you. We sign NDAs by default, follow industry-standard security practices, and can comply with specific regulatory requirements including HIPAA, PCI-DSS, and GDPR as needed.",
  },
  {
    q: "What's the free roadmap session? Is there any catch?",
    a: "No catch. The 30-minute roadmap session is genuinely free — we map out your product's next three milestones, discuss technical approach, and give you a clear plan you can execute with any team. No contracts, no credit card, no obligations. Book at calendly.com/technioztech/30min.",
  },
];

export default function FAQ() {
  return (
      <>
        <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "FAQ", href: "/faq" }]} />
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[700px]">
            <div className="flex items-center gap-2 text-black-400 p5">
              <Link href="/" className="hover:text-cobolt-500 transition-colors">Home</Link>
              <span>/</span>
              <span>FAQ</span>
            </div>
            <h1 className="h2 text-black-500">Frequently Asked Questions</h1>
            <p className="p3 text-black-400">Quick answers to common questions about our services, process, pricing, and how we work with clients worldwide.</p>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[800px] flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white-200 border border-neutral-300 rounded-sm overflow-hidden">
                <summary className="p-[24px] lg:p-[32px] cursor-pointer flex items-start justify-between gap-4 hover:text-cobolt-500 transition-colors list-none">
                  <h3 className="font-display text-[20px] leading-[1.2] tracking-[-1px] text-black-500 group-hover:text-cobolt-500 transition-colors">{faq.q}</h3>
                  <svg
                    className="w-6 h-6 text-black-400 group-open:rotate-45 transition-transform duration-[300ms] shrink-0 mt-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </summary>
                <div className="px-[24px] pb-[24px] lg:px-[32px] lg:pb-[32px] -mt-2">
                  <p className="p3 text-black-400 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-[600px]">
            <h2 className="h3 text-white-100 mb-4">Still have questions?</h2>
            <p className="p3 text-white-100/80">Book a free 30-minute call and get answers directly from our team.</p>
          </div>
          <div className="flex items-center gap-[8px]">
            <Link href="https://calendly.com/technioztech/30min" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Book a call</Link>
            <Link href="/contact" className="cta-secondary-dark !border-white-100 !text-white-100 hover:!bg-white-100 hover:!text-cobolt-500">Message us instead</Link>
          </div>
        </div>
      </section>
    </>
  );
}