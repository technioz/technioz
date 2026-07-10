import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Node.js Development Company | Scalable APIs & Backends | Technioz",
  description: "Node.js development company. Scalable APIs, real-time systems, microservices, and cloud-native backends.",
  openGraph: {
    title: "Node.js Development Company | Scalable APIs & Backends | Technioz",
    description:
      "Technioz builds high-performance Node.js backends, REST/GraphQL APIs, real-time systems, and microservices.",
    url: "https://technioz.com/services/nodejs-development",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://technioz.com/services/nodejs-development",
  },
};

export default function NodejsDevelopment() {
  return (
    <>
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="Node.js Development" />
            <span className="e1 text-black-300">{'\u{1F5A5}'} Node.js Development</span>
            <h1 className="h2 text-black-500">Node.js Backends Built for Speed and Scale</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              Slow APIs, fragile integrations, and unclear data flows kill user experience. We design Node.js backends that handle traffic spikes, integrate cleanly with frontends and third parties, and stay easy to maintain as your product grows.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>REST and GraphQL APIs with clean architecture, validation, and documentation</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Real-time systems, microservices, and event-driven workflows</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Auth, payments, integrations, caching, and database design with security in mind</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Hire Node.js Developers</Link>
              <Link href="/services/web-development" className="e2 text-cobolt-500">Back to web development →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">What Makes a Node.js Backend Reliable</h2>
            <p className="p3 text-black-400">Performance and maintainability come from structure, not just the runtime.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Clean Architecture", desc: "Layered code, clear boundaries, and dependency separation that survives growth." },
              { title: "TypeScript First", desc: "End-to-end type safety between APIs, databases, and frontend clients." },
              { title: "Performance Tuned", desc: "Async patterns, connection pooling, caching, and load-tested endpoints." },
              { title: "Secure by Design", desc: "Auth, input validation, rate limiting, secrets management, and OWASP-aware design." },
              { title: "Observable Systems", desc: "Structured logging, metrics, error tracking, and health checks from day one." },
              { title: "Cloud-Native Deployment", desc: "Docker, Kubernetes, serverless, and CI/CD pipelines that match your scale." },
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
            <h2 className="h4 text-black-500 mb-4">Node.js Backends We Build</h2>
            <p className="p3 text-black-400">From single APIs to distributed systems, we choose the right shape for the job.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "REST APIs", desc: "Clean, versioned, and documented APIs for web and mobile clients.", tags: ["Express", "NestJS", "OpenAPI"], link: null },
              { title: "GraphQL APIs", desc: "Flexible data fetching with resolvers, federation, and caching.", tags: ["Apollo", "TypeGraphQL", "DataLoader"], link: null },
              { title: "Real-Time Systems", desc: "Chat, live updates, notifications, and collaborative features.", tags: ["WebSockets", "Socket.io", "Redis"], link: null },
              { title: "Microservices", desc: "Small, independently deployable services with clear interfaces.", tags: ["Kafka", "RabbitMQ", "gRPC"], link: "/services/cloud-services" },
              { title: "Serverless Functions", desc: "Event-driven compute on AWS Lambda, Vercel, or Google Cloud.", tags: ["Lambda", "Vercel", "EventBridge"], link: "/services/aws-consulting" },
              { title: "Third-Party Integrations", desc: "Stripe, Twilio, Salesforce, HubSpot, and custom API connectors.", tags: ["OAuth", "Webhooks", "SDKs"], link: null },
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
            <h2 className="h4 !text-white-200 mb-4">Node.js Stack We Use</h2>
            <p className="p3 text-black-200">Tools we rely on to ship stable backends quickly.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Node.js 20+", "Express.js", "NestJS", "Fastify", "TypeScript", "PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle", "GraphQL", "REST", "Docker", "Kubernetes", "AWS Lambda", "RabbitMQ", "Kafka"].map((t) => (
              <span key={t} className="inline-flex items-center rounded-sm border border-black-400 px-[16px] py-[12px] p4 text-black-200">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-12">Our Node.js Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Requirements", desc: "Map data model, integrations, auth, and performance needs." },
              { title: "Architecture", desc: "Design API structure, service boundaries, and deployment approach." },
              { title: "Development", desc: "Build endpoints, services, tests, and docs in agile sprints." },
              { title: "Launch & Scale", desc: "Deploy, monitor, load test, and tune for production traffic." },
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
              { title: "React.js Development", desc: "Frontend interfaces that connect to your Node.js APIs.", href: "/services/reactjs-development" },
              { title: "Next.js Development", desc: "Full-stack React with server components and API routes.", href: "/services/nextjs-development" },
              { title: "Custom Software Development", desc: "End-to-end applications with your backend, frontend, and data model.", href: "/services/custom-software-development" },
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
            <h2 className="h3 !text-white-100 mb-4">Need a Backend That Keeps Up With Demand?</h2>
            <p className="p3 text-white-100/80">Tell us about your data, users, and integrations. We&apos;ll design a Node.js backend that fits.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Start Your Node.js Project</Link>
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
