import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Development Company | SEO-Friendly React Apps",
  description: "Next.js development company. SEO-friendly, full-stack React apps with server components, API routes, and edge deployment.",
  openGraph: buildOpenGraph({
      title: "Next.js Development Company | SEO-Friendly React Apps",
      description: "Technioz builds fast, SEO-friendly Next.js applications with App Router, server components, and edge rendering.",
      url: "https://technioz.com/services/nextjs-development",
    }),
  alternates: {
    canonical: "https://technioz.com/services/nextjs-development",
  },
};

export default function NextjsDevelopment() {
  return (
    <>
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="Next.js Development" />
            <span className="e1 text-black-300">{'\u{25A0}'} Next.js Development</span>
            <h1 className="h2 text-black-500">Next.js Apps That Rank Faster and Load Faster</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              Most marketing sites built with React are invisible to search engines. Next.js fixes that with server-side rendering, static generation, and a modern full-stack runtime — but only when it is configured correctly. We build Next.js apps that perform in both Google and production.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>App Router, server components, SSR/SSG/ISR, and edge-ready deployment</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>SEO-first architecture: metadata, structured data, canonicals, and Core Web Vitals</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Full-stack patterns: API routes, auth, caching, payments, and CMS integration</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Hire Next.js Developers</Link>
              <Link href="/services/web-development" className="e2 text-cobolt-500">Back to web development →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">Why Next.js Is the Right Choice for Serious Products</h2>
            <p className="p3 text-black-400">We use Next.js features for what they are good at — not because they are trendy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "SEO by Default", desc: "Server-rendered pages, automatic metadata, and clean URLs help you rank from launch." },
              { title: "Blazing Fast Loads", desc: "Static generation, edge caching, image optimization, and code splitting out of the box." },
              { title: "Full-Stack in One Repo", desc: "API routes, server actions, auth, and database queries live alongside your UI." },
              { title: "App Router Ready", desc: "Layouts, parallel routes, interceptors, and server components for complex apps." },
              { title: "Scalable Deployment", desc: "Vercel, AWS, Docker, or self-hosted — configured for CI/CD and observability." },
              { title: "Content Integration", desc: "Headless CMS, markdown docs, MDX, and dynamic routes handled cleanly." },
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
            <h2 className="h4 text-black-500 mb-4">Next.js Projects We Build</h2>
            <p className="p3 text-black-400">Production-grade sites and apps that take advantage of the full Next.js runtime.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Marketing Websites", desc: "SEO-optimized, fast-loading sites with CMS-driven content and conversion paths.", tags: ["SSG", "CMS", "Analytics"], link: "/services/web-development" },
              { title: "SaaS Platforms", desc: "Auth, dashboards, billing, and admin tools in a single Next.js codebase.", tags: ["Auth", "Stripe", "SSR"], link: "/services/custom-software-development" },
              { title: "E-commerce Stores", desc: "Headless storefronts with dynamic product pages, cart, and checkout flows.", tags: ["Shopify", "Stripe", "ISR"], link: "/solutions/ecommerce" },
              { title: "Documentation Sites", desc: "Searchable, versioned docs with MDX and automatic navigation.", tags: ["MDX", "Search", "SSG"], link: null },
              { title: "Internal Dashboards", desc: "Role-based admin tools with real-time data and server-side rendering.", tags: ["App Router", "Server Actions", "Charts"], link: "/services/custom-software-development" },
              { title: "Migration to App Router", desc: "Upgrade from Pages Router to App Router safely, page by page.", tags: ["Refactor", "Testing", "Audit"], link: null },
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
            <h2 className="h4 !text-white-200 mb-4">Next.js Stack We Use</h2>
            <p className="p3 text-black-200">Modern tools that fit the framework instead of fighting it.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Next.js 14+", "App Router", "React Server Components", "TypeScript", "Tailwind CSS", "Prisma", "Drizzle", "PostgreSQL", "Vercel", "AWS", "Auth.js", "Stripe", "Sanity", "MDX"].map((t) => (
              <span key={t} className="inline-flex items-center rounded-sm border border-black-400 px-[16px] py-[12px] p4 text-black-200">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-12">Our Next.js Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Audit & Plan", desc: "Choose App Router vs Pages Router, rendering strategy, and hosting." },
              { title: "Architecture", desc: "Set up project structure, auth, data layer, and component conventions." },
              { title: "Build & Optimize", desc: "Develop features with performance budgets, tests, and SEO checks." },
              { title: "Deploy & Monitor", desc: "Ship to Vercel or AWS with analytics, error tracking, and Core Web Vitals." },
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
              { title: "React.js Development", desc: "Component-based frontends and design systems that pair with Next.js.", href: "/services/reactjs-development" },
              { title: "Node.js Development", desc: "APIs and backends that feed data into your Next.js app.", href: "/services/nodejs-development" },
              { title: "Custom Software Development", desc: "Full-stack applications built around your business logic.", href: "/services/custom-software-development" },
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
            <h2 className="h3 !text-white-100 mb-4">Ready for a Faster, Search-Friendly Web App?</h2>
            <p className="p3 text-white-100/80">Tell us what you&apos;re building. We&apos;ll recommend the right Next.js architecture and deployment setup.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Start Your Next.js Project</Link>
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
