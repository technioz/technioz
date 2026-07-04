import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web App Development Company Dubai | Technioz",
  description: "Web app development company in Dubai. We build custom web applications with React, Next.js, and Node.js for UAE businesses.",
  openGraph: {
    title: "Web App Development Company in Dubai | React, Next.js, Node.js | Technioz",
    description:
      "Technioz builds custom web applications for Dubai and GCC businesses with React, Next.js, and Node.js.",
    url: "https://technioz.com/web-app-development-company-dubai",
    images: ["/logo.webp"],
  },
  alternates: {
    canonical: "https://technioz.com/web-app-development-company-dubai",
  },
};

export default function WebAppDevelopmentCompanyDubai() {
  return (
    <>
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="Dubai, UAE" />
            <span className="e1 text-cobolt-500">Dubai, UAE</span>
            <h1 className="h2 text-black-500">Web App Development Company in Dubai</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              A web application is often the first place customers, partners, and employees interact with your business. We build fast, secure, and scalable web apps for Dubai-based companies using React, Next.js, Node.js, and modern cloud infrastructure.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Custom web apps, dashboards, portals, and SaaS platforms built for the UAE market</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>SEO-friendly Next.js frontends, secure Node.js backends, and cloud deployment on AWS/Azure/GCP</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Arabic / RTL support, local payment integration, and performance tuned for the region</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Book a Free Strategy Call</Link>
              <Link href="/services/web-development" className="e2 text-cobolt-500">Explore web app development →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">Web Apps Built for Dubai&apos;s Digital Economy</h2>
            <p className="p3 text-black-400">We design web applications around local user behavior, business workflows, and regional compliance expectations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Performance First", desc: "Server-side rendering, edge caching, and optimized bundles for fast load times across devices." },
              { title: "Bilingual UX", desc: "English and Arabic interfaces with full RTL support and locale-aware formatting." },
              { title: "Secure by Design", desc: "Auth, input validation, encryption, and OWASP-aware patterns protecting user data." },
              { title: "Scalable Architecture", desc: "Component-based frontends, clean APIs, and cloud-native backends that grow with traffic." },
              { title: "Third-Party Integrations", desc: "Local payment gateways, CRMs, ERPs, government APIs, and marketing tools." },
              { title: "Analytics & SEO", desc: "Search-optimized pages, conversion tracking, and dashboards that show what matters." },
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
            <h2 className="h4 text-black-500 mb-4">Web Applications We Deliver in the UAE</h2>
            <p className="p3 text-black-400">We match the tech stack and architecture to your business model and user expectations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "SaaS Platforms", desc: "Multi-tenant applications with subscription billing, admin dashboards, and role-based access.", tags: ["Next.js", "Stripe", "Auth"], link: null },
              { title: "E-commerce Web Apps", desc: "Headless storefronts, custom checkout flows, and inventory integrations for UAE retailers.", tags: ["React", "Node.js", "Payments"], link: null },
              { title: "Customer Portals", desc: "Self-service portals for B2B clients, vendors, and partners with document and order management.", tags: ["Dashboards", "APIs", "SSO"], link: null },
              { title: "Internal Tools", desc: "Workflow automation, reporting, and operations dashboards that replace spreadsheets.", tags: ["Admin", "Reports", "Automation"], link: null },
              { title: "AI-Powered Web Apps", desc: "LLM features, semantic search, and intelligent assistants embedded in your product.", tags: ["OpenAI", "RAG", "Chat"], link: "/services/ai-solutions" },
              { title: "Booking & Service Platforms", desc: "Appointment scheduling, quotation flows, and service-provider marketplaces.", tags: ["Calendar", "Maps", "Payments"], link: null },
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
            <h2 className="h4 !text-white-200 mb-4">Web App Stack We Use</h2>
            <p className="p3 text-black-200">Modern, proven tools that keep your web app fast, maintainable, and ready to scale.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["React", "Next.js", "TypeScript", "Node.js", "NestJS", "Express", "PostgreSQL", "MongoDB", "Redis", "Prisma", "GraphQL", "REST", "Tailwind CSS", "AWS", "Azure", "Google Cloud", "Vercel", "Docker", "Kubernetes"].map((t) => (
              <span key={t} className="inline-flex items-center rounded-sm border border-black-400 px-[16px] py-[12px] p4 text-black-200">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="max-w-[700px]">
              <h2 className="h4 text-black-500 mb-4">Why Dubai Companies Work With Technioz</h2>
              <p className="p3 text-black-400 mb-6">We understand the pressure to launch quickly while meeting high user expectations. Our Dubai clients get senior engineering, clear communication, and delivery that respects Gulf business hours.</p>
              <ul className="flex flex-col gap-3 p4 text-black-400">
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Senior engineers based in time zones friendly to UAE and GCC schedules</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Iterative delivery with weekly demos and transparent progress tracking</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Local payment, logistics, and identity integrations where required</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Long-term support, hosting guidance, and feature evolution after go-live</span></li>
              </ul>
            </div>
            <div className="bg-white-300 rounded-sm p-[32px]">
              <h3 className="font-display text-[20px] leading-none tracking-[-1px] text-black-500 mb-4">Local Coverage</h3>
              <p className="p4 text-black-400 mb-4">We support web app projects across the UAE and neighboring GCC markets.</p>
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
            <h2 className="h3 !text-white-100 mb-4">Build Your Web App in Dubai</h2>
            <p className="p3 text-white-100/80">Tell us about your product and users. We&apos;ll propose the right architecture, stack, and roadmap.</p>
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
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Web App Development", href: "/services/web-development" }, { name: label }]} />
      <div className="flex items-center gap-2 text-black-300 p5">
        <Link href="/" className="hover:text-cobolt-500">Home</Link> / <Link href="/services" className="hover:text-cobolt-500">Services</Link> / <Link href="/services/web-development" className="hover:text-cobolt-500">Web App Development</Link> / <span>{label}</span>
      </div>
    </>
  );
}
