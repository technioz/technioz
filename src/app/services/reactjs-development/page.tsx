import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "React.js Development Company | SPAs, Dashboards, Design Systems | Technioz",
  description: "React.js development company. Fast, modular, and maintainable frontends: SPAs, dashboards, design systems, and more.",
  openGraph: {
    title: "React.js Development Company | SPAs, Dashboards, Design Systems | Technioz",
    description:
      "Technioz builds fast, modular, and maintainable React.js frontends for web apps, dashboards, and design systems.",
    url: "https://technioz.com/services/reactjs-development",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://technioz.com/services/reactjs-development",
  },
};

export default function ReactjsDevelopment() {
  return (
    <>
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="React.js Development" />
            <span className="e1 text-black-300">{'\u{269B}'} React.js Development</span>
            <h1 className="h2 text-black-500">React.js Frontends That Stay Fast as They Grow</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              Many React apps start fast and turn into a tangle of props, context, and duplicated logic. We build component architectures that stay clean, testable, and performant from the first screen to the hundredth.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Modular component design with TypeScript, hooks, and reusable UI libraries</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>State management, routing, and performance tuned for real user workflows</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Integration with REST, GraphQL, real-time APIs, and headless CMS backends</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Hire React.js Developers</Link>
              <Link href="/services/web-development" className="e2 text-cobolt-500">Back to web development →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">What Breaks in React Apps — and How We Prevent It</h2>
            <p className="p3 text-black-400">Our engineering standards keep your UI predictable, fast, and easy to extend as features multiply.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Component Architecture", desc: "Atomic design, composition patterns, and clear boundaries so UI pieces stay reusable." },
              { title: "TypeScript by Default", desc: "Type-safe props, strict config, and generated types that catch bugs before runtime." },
              { title: "Performance Tuning", desc: "Memoization, code splitting, virtualization, and bundle analysis for smooth interactions." },
              { title: "State That Scales", desc: "Context, Zustand, Redux Toolkit, or TanStack Query chosen for your data flow." },
              { title: "Testing Coverage", desc: "Unit tests with Vitest, component tests with React Testing Library, and E2E where it matters." },
              { title: "Design System Ready", desc: "Storybook, Tailwind, and documented component libraries your team can reuse." },
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
            <h2 className="h4 text-black-500 mb-4">React.js Projects We Deliver</h2>
            <p className="p3 text-black-400">From dashboards to consumer apps, we match the stack to the use case.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "SaaS Dashboards", desc: "Data-heavy interfaces with filtering, tables, charts, and role-based views.", tags: ["React", "TanStack Table", "Recharts"], link: "/services/custom-software-development" },
              { title: "Single-Page Apps", desc: "Fast, app-like experiences with client-side routing and optimistic UI.", tags: ["React Router", "Vite", "Zustand"], link: null },
              { title: "Design Systems", desc: "Documented component libraries that keep design and code in sync.", tags: ["Storybook", "Tailwind", "Radix"], link: null },
              { title: "E-commerce Frontends", desc: "Headless storefronts with cart, checkout, and real-time inventory.", tags: ["Next.js", "Stripe", "GraphQL"], link: "/services/nextjs-development" },
              { title: "Real-Time UIs", desc: "Live feeds, chat, notifications, and collaborative interfaces.", tags: ["WebSockets", "Socket.io", "React"], link: null },
              { title: "Migration & Rescue", desc: "Refactor legacy React code, upgrade versions, and fix performance debt.", tags: ["Refactor", "Upgrade", "Audit"], link: null },
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
            <h2 className="h4 !text-white-200 mb-4">React Stack We Use</h2>
            <p className="p3 text-black-200">Tools chosen for stability, performance, and long-term maintainability.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["React 18", "TypeScript", "Vite", "Next.js", "React Router", "TanStack Query", "Zustand", "Redux Toolkit", "Tailwind CSS", "Shadcn UI", "Radix UI", "Storybook", "Vitest", "React Testing Library"].map((t) => (
              <span key={t} className="inline-flex items-center rounded-sm border border-black-400 px-[16px] py-[12px] p4 text-black-200">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-12">Our React.js Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Discovery", desc: "Map user flows, existing design assets, and integration requirements." },
              { title: "Architecture", desc: "Define component structure, state strategy, and performance targets." },
              { title: "Build", desc: "Develop features in sprints with code review, tests, and Storybook stories." },
              { title: "Ship & Support", desc: "Deploy, monitor bundle size, and iterate based on real usage." },
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
              { title: "Next.js Development", desc: "SEO-friendly, full-stack React applications with server components.", href: "/services/nextjs-development" },
              { title: "Node.js Development", desc: "Scalable backends and APIs that power React frontends.", href: "/services/nodejs-development" },
              { title: "Custom Software Development", desc: "End-to-end web and mobile applications built around your workflow.", href: "/services/custom-software-development" },
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
            <h2 className="h3 !text-white-100 mb-4">Need a React Frontend That Scales?</h2>
            <p className="p3 text-white-100/80">Tell us about your app. We&apos;ll recommend the right architecture and team setup.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Start Your React Project</Link>
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
