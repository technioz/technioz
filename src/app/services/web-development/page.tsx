import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import type { Metadata } from "next";
import { WebDevDiagram } from "@/components/diagrams/web-dev-diagram";

export const metadata: Metadata = {
  title: "Custom Web Application Development Company | Technioz",
  description: "Custom web apps in React, Next.js and Node — built for scale. See how we digitized GCC transport operators, then get a fixed quote in 48 hours.",
  openGraph: {
    title: "Custom Web Development Services | React, Next.js & Node.js | Technioz",
    description:
      "Technioz builds fast, secure, SEO-friendly web applications with React, Next.js, Node.js, and TypeScript.",
    url: "https://technioz.com/services/web-development",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://technioz.com/services/web-development",
  },
};

export default function WebDev() {
  return <ServicePage data={webData} />;
}

const webData = {
  title: "Web Development Services That Turn Visitors Into Customers",
  desc: "Most business websites are slow, hard to manage, and leak conversions. We design and build web applications that load fast, rank higher, and make every click count.",
  heroIcon: "\u{1F4CA}",
  heroLabel: "Web Development",
  features: [
    { title: "Built for Speed", desc: "Sub-second load times using Next.js static generation, edge caching, and optimized assets — because every 100ms delay costs conversions." },
    { title: "Engineered for Search", desc: "Semantic HTML, Core Web Vitals, structured data, and clean URLs baked in from day one so your pages get found." },
    { title: "Designed to Convert", desc: "User flows, clear CTAs, and mobile-first interfaces that guide visitors toward action instead of confusion." },
    { title: "Easy to Manage", desc: "Headless CMS, reusable components, and clear documentation so your team can update content without engineering help." },
    { title: "Secure by Default", desc: "Type-safe code, secure auth patterns, input validation, and infrastructure hardening that protect user data." },
    { title: "Ready to Scale", desc: "API-first architecture, serverless deployments, and CI/CD pipelines that grow with your traffic and product." },
  ],
  services: [
    { title: "Custom Web Applications", desc: "Tailored SaaS platforms, internal tools, and customer portals built around your workflows.", tags: ["React", "Next.js", "Node.js", "TypeScript"], link: "/services/custom-software-development" },
    { title: "E-commerce Development", desc: "High-converting storefronts with payment gateways, inventory, and order management.", tags: ["Shopify", "WooCommerce", "Stripe", "Headless"], link: "/solutions/ecommerce" },
    { title: "Progressive Web Apps", desc: "Installable web apps with offline support, push notifications, and native-like performance.", tags: ["PWA", "Service Workers", "React", "Next.js"], link: null },
    { title: "API & Backend Development", desc: "REST and GraphQL APIs that power frontends, mobile apps, and third-party integrations.", tags: ["REST API", "GraphQL", "Node.js", "PostgreSQL"], link: "/services/nodejs-development" },
    { title: "Headless CMS Integration", desc: "Content infrastructure that lets marketing teams publish fast without touching code.", tags: ["Strapi", "Contentful", "Sanity", "WordPress"], link: null },
    { title: "Website Maintenance", desc: "Security updates, performance monitoring, and ongoing improvements so your site never degrades.", tags: ["Monitoring", "Backups", "Updates", "Support"], link: null },
  ],
  technologies: ["React", "Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "GraphQL", "Tailwind CSS", "AWS", "Vercel", "Docker"],
  process: [
    { title: "Discovery", desc: "We map your users, goals, and existing tech to define what actually needs to be built." },
    { title: "UX & Design", desc: "Wireframes and prototypes that balance brand, usability, and conversion before code is written." },
    { title: "Development", desc: "Iterative sprints with code reviews, automated tests, and integrated SEO best practices." },
    { title: "Launch & Optimize", desc: "Production deployment, monitoring, and continuous performance improvements." },
  ],
};

function ServicePage({ data }: { data: typeof webData }) {
  return (
    <>
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10">
            <div className="flex-1 flex flex-col gap-[24px]">
            <Breadcrumb label="Web Development" />
              <h1 className="h2 text-black-500">{data.title}</h1>
              <p className="p3 text-black-400 max-w-[600px]">{data.desc}</p>
              <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Full-stack development with React, Next.js, Node.js, and TypeScript</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>SEO-first architecture that helps pages rank from launch</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Conversion-focused design backed by clear user flows</span></li>
              </ul>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="cta-primary w-fit">Get a Free Web Development Quote</Link>
                <Link href="/web-mobile-app-development" className="e2 text-cobolt-500">Read the web & app guide →</Link>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full bg-white-300 border border-neutral-300 rounded-sm p-6">
                <WebDevDiagram />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col gap-[48px]">
          <div className="text-center max-w-[700px] mx-auto">
            <h2 className="h4 text-black-500 mb-4">Why Most Websites Underperform — and How Ours Don&apos;t</h2>
            <p className="p3 text-black-400">We rebuild web experiences around what actually matters: speed, clarity, search visibility, and conversion.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.features.map((f) => (
              <div key={f.title} className="bg-white-200 rounded-sm p-[32px] flex flex-col gap-[8px]">
                <h3 className="font-display text-[18px] font-medium text-black-500">{f.title}</h3>
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
            <p className="p3 text-black-400">From customer-facing marketing sites to complex SaaS platforms, every project gets the same disciplined approach.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.services.map((s) => (
              <div key={s.title} className="bg-white-300 rounded-sm p-[32px] flex flex-col gap-[16px]">
                <h3 className="font-display text-[22px] leading-none tracking-[-1.1px] text-black-500">{s.title}</h3>
                <p className="p4 text-black-400 flex-1">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="text-[12px] text-cobolt-500 font-mono uppercase tracking-[1px] bg-cobolt-500/5 px-2 py-1 rounded-sm">{t}</span>
                  ))}
                </div>
                {s.link && <Link href={s.link} className="e2 text-cobolt-500 text-sm mt-1">Explore {s.title.toLowerCase()} →</Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-12">
            <h2 className="h4 text-black-500 mb-4">See it in action</h2>
            <p className="p3 text-black-400">A real project built with the same approach we use for every web application.</p>
          </div>
          <Link href="/portfolio/alkhanjry-transport" className="bg-white-200 rounded-sm p-[32px] flex flex-col gap-[12px] hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow group max-w-[700px]">
            <h3 className="font-display text-[20px] leading-none tracking-[-1px] text-black-500 group-hover:text-cobolt-500 transition-colors">Al Khanjry Transport</h3>
            <p className="p4 text-black-400">Online ticketing portal for UAE-Oman routes — built with React, Next.js, and AWS auto-scaling.</p>
            <span className="e2 text-cobolt-500 mt-2">Read case study →</span>
          </Link>
        </div>
      </section>

      <section className="bg-black-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col lg:flex-row lg:items-start gap-10">
          <div className="shrink-0 max-w-[400px]">
            <h2 className="h4 !text-white-200 mb-4">Technologies We Use</h2>
            <p className="p3 text-black-200">Modern, proven stacks chosen for performance, maintainability, and long-term support.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {data.technologies.map((t) => (
              <span key={t} className="inline-flex items-center rounded-sm border border-black-400 px-[16px] py-[12px] p4 text-black-200">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-12">Our Web Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.process.map((p, i) => (
              <div key={p.title} className="flex gap-[16px]">
                <span className="font-display text-[40px] leading-none text-cobolt-500/30 shrink-0">0{i + 1}</span>
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
            <h2 className="h3 !text-white-100 mb-4">Need a Website That Actually Performs?</h2>
            <p className="p3 text-white-100/80">Tell us what you&apos;re building. We&apos;ll respond with a clear scope, timeline, and budget within 24 hours.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Start Your Web Project</Link>
        </div>
      </section>
    </>
  );
}

const related = [
  { title: "Next.js Development", desc: "High-performance React applications with server-side rendering and static generation.", href: "/services/nextjs-development" },
  { title: "ReactJS Development", desc: "Component-based UIs that scale with your product and team.", href: "/services/reactjs-development" },
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
