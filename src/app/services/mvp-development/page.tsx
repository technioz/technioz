import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MVP Development Services | Technioz",
  description: "MVP development services for startups. Validate ideas quickly with lean, scalable prototypes built in 8-12 weeks.",
  openGraph: {
    title: "MVP Development Services for Startups | Validate Fast with Technioz",
    description:
      "Technioz helps startups and product teams build a focused, launch-ready MVP in weeks.",
    url: "https://technioz.com/services/mvp-development",
    images: ["/logo.webp"],
  },
  alternates: {
    canonical: "https://technioz.com/services/mvp-development",
  },
};

export default function MvpDevelopment() {
  return (
    <>
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="MVP Development" />
            <span className="e1 text-black-300">{'\u{1F680}'} MVP Development</span>
            <h1 className="h2 text-black-500">Build an MVP That Tests the Right Risk First</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              Most MVPs fail because they try to do too much. We help founders and product teams strip the idea down to the one thing that must be true — then build it fast, launch it, and learn.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Launch-ready MVP in 4–10 weeks with a focused feature set</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Prototype-to-product path with React, Next.js, Node.js, and cloud deployment</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Analytics, feedback loops, and a roadmap for the next iteration</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Get a Free MVP Roadmap</Link>
              <Link href="/web-mobile-app-development" className="e2 text-cobolt-500">Read the app development guide →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">The Most Common MVP Mistakes — and How We Avoid Them</h2>
            <p className="p3 text-black-400">A great MVP proves or disproves your riskiest assumption. It is not a half-finished product.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Scope Discipline", desc: "We define the smallest feature set that can validate the core hypothesis and say no to the rest." },
              { title: "Speed Over Perfection", desc: "Fast iterations, real users, and data-driven decisions beat polished guesswork." },
              { title: "Scalable Foundation", desc: "MVPs built on clean architecture so you can iterate without rebuilding from scratch." },
              { title: "User-Centric Design", desc: "Simple, clear UX that lets early users understand and adopt the product quickly." },
              { title: "Built-In Feedback", desc: "Analytics, user interviews, and behavior tracking built into the first release." },
              { title: "Investor-Ready Delivery", desc: "A working product, clear metrics, and a roadmap for the next raise or launch." },
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
            <h2 className="h4 text-black-500 mb-4">What We Build for Founders</h2>
            <p className="p3 text-black-400">MVPs across web, mobile, and AI — all designed to validate fast and scale cleanly.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "SaaS MVPs", desc: "Web-based platforms with auth, payments, dashboards, and core workflows.", tags: ["React", "Next.js", "Stripe", "Node.js"], link: "/services/web-development" },
              { title: "Mobile MVPs", desc: "iOS and Android apps that prove mobile demand and usage patterns.", tags: ["React Native", "Flutter", "Firebase"], link: "/services/mobile-development" },
              { title: "AI-Powered MVPs", desc: "Chatbots, assistants, and generative features that test AI value quickly.", tags: ["OpenAI", "RAG", "LLM"], link: "/services/ai-solutions" },
              { title: "Marketplace MVPs", desc: "Two-sided platforms connecting buyers and providers with payments and ratings.", tags: ["Marketplace", "Payments", "Ratings"], link: null },
              { title: "Internal Tool MVPs", desc: "Process automation tools that prove ROI inside a team or department.", tags: ["Automation", "Workflow", "APIs"], link: "/services/custom-software-development" },
              { title: "Landing + Waitlist MVPs", desc: "Pre-launch validation with signups, referrals, and early access funnels.", tags: ["Landing Pages", "Conversion", "Email"], link: "/services/web-development" },
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
            <h2 className="h4 !text-white-200 mb-4">Our MVP Sprint Process</h2>
            <p className="p3 text-black-200">A repeatable process designed to take you from idea to validated product in weeks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Idea De-risk", desc: "Define the problem, user, value proposition, and the one assumption to test." },
              { title: "Scope & Design", desc: "Create a lean feature list, user flows, and a clickable prototype." },
              { title: "Build & Launch", desc: "Develop the MVP, set up hosting, analytics, and release to early users." },
              { title: "Measure & Iterate", desc: "Track behavior, collect feedback, and plan the next version." },
            ].map((p, i) => (
              <div key={p.title} className="flex gap-[16px]">
                <span className="font-display text-[40px] leading-none text-cobolt-500/30">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-[18px] font-medium text-black-500 mb-2 !text-white-200">{p.title}</h3>
                  <p className="p4 text-black-200">{p.desc}</p>
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
            <h2 className="h3 !text-white-100 mb-4">Got an Idea? Let&apos;s Validate It.</h2>
            <p className="p3 text-white-100/80">Tell us the problem you&apos;re solving. We&apos;ll help you scope an MVP that tests the right assumption in the shortest time.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Plan My MVP</Link>
        </div>
      </section>
    </>
  );
}

const related = [
  { title: "Web Development", desc: "Fast, secure, SEO-friendly web applications with React, Next.js, and Node.js.", href: "/services/web-development" },
  { title: "Mobile Development", desc: "Native iOS, Android, and cross-platform apps built for engagement and growth.", href: "/services/mobile-development" },
  { title: "AI Solutions", desc: "Practical AI solutions: chatbots, AI agents, RAG systems, and LLM integrations.", href: "/services/ai-solutions" },
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
