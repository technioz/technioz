import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { FaqJsonLd } from "@/components/faq-jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web App Development Company in Dubai | React, Next.js, Node | Technioz",
  description: "Custom web application development company in Dubai. React, Next.js, and Node.js web apps for UAE and GCC businesses. See Al Khanjry case study. Get a 48-hour quote.",
  openGraph: {
    title: "Web App Development Company in Dubai | React, Next.js, Node | Technioz",
    description: "Technioz builds custom web applications for Dubai and GCC businesses with React, Next.js, and Node.js.",
    url: "https://technioz.com/web-app-development-company-dubai",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://technioz.com/web-app-development-company-dubai",
  },
};

const faqs = [
  {
    question: "Do you work with clients in Dubai and the GCC?",
    answer: "Yes. We partner with companies in the UAE and Oman, and we work with buyers across Saudi Arabia, Qatar, Bahrain, and Kuwait. We are a remote-first team and collaborate over video, WhatsApp, and email with schedules that overlap Gulf Standard Time.",
  },
  {
    question: "Can you align with UAE business hours?",
    answer: "Yes. We schedule standups, sprint reviews, and demos to overlap with Gulf Standard Time, with async updates in between so progress is visible every day.",
  },
  {
    question: "Do you have a Dubai office?",
    answer: "No — we are a remote-first company. Day-to-day delivery is fully virtual. If an in-person meeting is essential, we can coordinate one when a team member is in the region.",
  },
  {
    question: "What technologies do you use for Dubai web apps?",
    answer: "We typically use React, Next.js, TypeScript, Node.js, NestJS, PostgreSQL, and AWS for web applications. We choose the stack based on your performance, scale, and team requirements.",
  },
  {
    question: "How much does a custom web app cost in Dubai?",
    answer: "Most custom web apps range from $20,000 to $120,000 depending on scope, design, backend complexity, and integrations. MVPs start around $15,000. Use our app cost calculator or book a free scoping call for a fixed-price quote.",
  },
  {
    question: "Can you build Arabic/RTL web apps?",
    answer: "Yes. We build bilingual Arabic/English web applications with full RTL layouts, Arabic-friendly typography, localized content, and right-to-left UI patterns.",
  },
];

export default function WebAppDevelopmentCompanyDubai() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Web App Development", href: "/services/web-development" }, { name: "Dubai, UAE" }]} />
      <FaqJsonLd items={faqs} />
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
            <div className="bg-white-300 rounded-sm p-[32px] flex flex-col gap-4">
              <h3 className="font-display text-[20px] leading-none tracking-[-1px] text-black-500">Web Apps We Have Shipped</h3>
              <p className="p4 text-black-400">Real projects with real users across the UAE, Oman, and New Zealand.</p>
              <Link href="/portfolio/alkhanjry-transport" className="bg-white-200 rounded-sm p-[24px] flex flex-col gap-[12px] hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow group">
                <span className="text-[12px] font-mono uppercase tracking-[1px] text-cobolt-500">Transport booking portal</span>
                <span className="font-display text-[18px] leading-none tracking-[-0.9px] text-black-500 group-hover:text-cobolt-500 transition-colors">Al Khanjry Transport</span>
                <p className="p5 text-black-400">Bilingual Next.js booking portal for UAE-Oman routes — 150K+ bookings completed.</p>
                <span className="e2 text-cobolt-500">Read case study →</span>
              </Link>
              <Link href="/portfolio/sky-growers" className="bg-white-200 rounded-sm p-[24px] flex flex-col gap-[12px] hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow group">
                <span className="text-[12px] font-mono uppercase tracking-[1px] text-cobolt-500">E-commerce + subscriptions</span>
                <span className="font-display text-[18px] leading-none tracking-[-0.9px] text-black-500 group-hover:text-cobolt-500 transition-colors">Sky Growers</span>
                <p className="p5 text-black-400">Farm-to-table storefront with seasonal produce, bulk wholesale, and Stripe checkout.</p>
                <span className="e2 text-cobolt-500">Read case study →</span>
              </Link>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Riyadh", "Jeddah", "Doha", "Kuwait City", "Manama"].map((c) => (
                  <span key={c} className="text-[12px] text-black-300 bg-black-500/5 px-2 py-1 rounded-sm">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[800px]">
            <h2 className="h4 text-black-500 mb-8">Working With Technioz From Dubai</h2>
            <div className="grid gap-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-white-300 border border-neutral-300 rounded-sm overflow-hidden">
                  <summary className="p-[24px] lg:p-[32px] cursor-pointer flex items-start justify-between gap-4 hover:text-cobolt-500 transition-colors list-none">
                    <h3 className="font-display text-[20px] leading-[1.2] tracking-[-1px] text-black-500 group-hover:text-cobolt-500 transition-colors">{faq.question}</h3>
                    <svg className="w-6 h-6 text-black-400 group-open:rotate-45 transition-transform duration-[300ms] shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </summary>
                  <div className="px-[24px] pb-[24px] lg:px-[32px] lg:pb-[32px] -mt-2">
                    <p className="p3 text-black-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-10">
            <h2 className="h4 text-black-500 mb-4">Related Guides</h2>
            <p className="p3 text-black-400">Deep dives to help you plan and budget your web app project.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Custom Software Cost Breakdown", desc: "Understand what drives pricing for custom web applications in 2026.", href: "/blog/custom-software-development-cost-2026" },
              { title: "Bus Ticketing: Build vs Buy", desc: "A real-world guide for transport and booking platform decisions.", href: "/blog/bus-ticketing-system-build-vs-buy-2026" },
              { title: "How to Choose a Development Partner", desc: "Red flags, questions, and evaluation criteria for hiring a team.", href: "/blog/how-to-choose-software-development-partner-2026" },
            ].map((g) => (
              <Link key={g.href} href={g.href} className="bg-white-200 rounded-sm p-[32px] flex flex-col gap-[12px] hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow group">
                <h3 className="font-display text-[20px] leading-none tracking-[-1px] text-black-500 group-hover:text-cobolt-500 transition-colors">{g.title}</h3>
                <p className="p4 text-black-400 flex-1">{g.desc}</p>
                <span className="e2 text-cobolt-500">Read guide →</span>
              </Link>
            ))}
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
