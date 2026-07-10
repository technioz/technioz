import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { FaqJsonLd } from "@/components/faq-jsonld";
import { ChecklistForm } from "./checklist-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MVP Development Company for Startups | 12 Weeks to Launch | Technioz",
  description: "MVP development company for startups. Validate your idea, scope the smallest useful version, and launch in 8-12 weeks with React Native, Next.js, or Node.js.",
  openGraph: {
    title: "MVP Development Company for Startups | 12 Weeks to Launch | Technioz",
    description: "Validate your startup idea and launch an MVP in 8-12 weeks. Fixed-price scoping, lean scope, and a clear path to product-market fit.",
    url: "https://technioz.com/services/mvp-development",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://technioz.com/services/mvp-development",
  },
};

const faqs = [
  {
    question: "What is an MVP in startup terms?",
    answer: "An MVP is the smallest version of your product that lets you test your riskiest assumption with real users. It is not a half-finished product. It is a focused experiment designed to prove or disprove whether people will use and pay for what you are building.",
  },
  {
    question: "How long does it take to build an MVP?",
    answer: "Most MVPs we build take 8-12 weeks from first workshop to launch. Complex MVPs with multiple user roles, payment flows, or third-party integrations can take 12-16 weeks. We run two-week sprints with demos so you see progress continuously.",
  },
  {
    question: "How much does an MVP cost?",
    answer: "Startup MVPs typically range from $15,000 to $45,000 depending on platform, scope, and integrations. You can get a quick estimate with our app cost calculator or book a free scoping call for a fixed-price quote.",
  },
  {
    question: "What happens after the MVP launches?",
    answer: "We help you measure usage, collect feedback, and prioritize the next version. Many of our startup clients continue with a monthly product development partnership where we ship, learn, and iterate together.",
  },
  {
    question: "Do you help with idea validation before building?",
    answer: "Yes. Our discovery workshop helps you define the problem, target user, value proposition, and the one assumption that must be true for the business to work. Sometimes the right next step is a prototype or landing page instead of code.",
  },
  {
    question: "What technologies do you use for startup MVPs?",
    answer: "We typically use React Native or Flutter for cross-platform mobile apps, Next.js or React for web apps, and Node.js or Python for backends. We choose the stack that gets you to validated users fastest without trapping you in technical debt.",
  },
];

export default function MvpDevelopment() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "MVP Development", href: "/services/mvp-development" }]} />
      <FaqJsonLd items={faqs} />

      {/* Hero */}
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="MVP Development" />
            <span className="e1 text-black-300">MVP Development for Startups</span>
            <h1 className="h2 text-black-500">Validate Your Idea in Weeks, Not Years</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              Most startups fail because they build too much before they know what users want. We help founders scope, design, and ship a lean MVP in 8-12 weeks — so you can test the one assumption that matters and decide what to build next with real data.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Lean MVP scoping: define the smallest version that proves your riskiest assumption</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Cross-platform mobile and web MVPs with React Native, Flutter, Next.js, and Node.js</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Fixed-price workshops, clear milestones, and a post-launch iteration roadmap</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="https://calendly.com/technioztech/30min" className="cta-primary w-fit">Book a Free MVP Scoping Call</Link>
              <Link href="/resources/app-development-cost-calculator" className="e2 text-cobolt-500">Estimate MVP cost →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Founder problems */}
      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">The Startup Traps We Help You Avoid</h2>
            <p className="p3 text-black-400">Founders do not need more features. They need clarity on what to build first.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Building Everything at Once", desc: "We strip your idea down to the one feature that must work. Everything else waits until users prove they care." },
              { title: "Hiring Before You Have Product-Market Fit", desc: "A fixed-price MVP lets you validate before committing to a full-time engineering team or expensive agency retainer." },
              { title: "Scope Creep from Friendly Advice", desc: "Every founder gets conflicting advice. We create a written scope and hypothesis so every feature earns its place." },
              { title: "No Technical Co-Founder", desc: "We act as your technical partner — architecture, stack choice, dev team, and launch — without giving away equity." },
              { title: "Long Timelines with No Demo", desc: "Two-week sprints with working demos mean you see progress every fourteen days, not after six months." },
              { title: "Launching Without Analytics", desc: "We instrument the MVP from day one so you know what users do, not just what they say." },
            ].map((f, i) => (
              <div key={i} className="bg-white-200 rounded-sm p-[32px]">
                <h3 className="font-display text-[18px] font-medium text-black-500 mb-2">{f.title}</h3>
                <p className="p4 text-black-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof */}
      <section className="bg-black-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-[600px]">
              <span className="e1 text-cobolt-300 mb-4 inline-block">Case Study</span>
              <h2 className="h3 !text-white-200 mb-4">From Failing MVP to 10,000+ Concurrent Orders</h2>
              <p className="p3 text-black-200 mb-6">
                HattaFoodHub started with an MVP that could not handle growth. We rebuilt the platform with a lean, scalable architecture and helped them validate demand before investing in a full-featured product. The result: order confirmation under 800ms, 99.9% uptime, and 40% more repeat customers.
              </p>
              <Link href="/portfolio/food-delivery-app" className="cta-secondary-dark !border-cobolt-300 !text-cobolt-300 hover:!bg-cobolt-300 hover:!text-black-500">Read the HattaFoodHub case study</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { metric: "8-12", label: "weeks to MVP launch" },
                { metric: "5+", label: "startup MVPs shipped" },
                { metric: "$15k", label: "MVP starting range" },
                { metric: "98%", label: "on-time delivery" },
              ].map((s) => (
                <div key={s.label} className="border border-black-400 rounded-sm p-[32px] text-center">
                  <span className="font-display text-[48px] leading-none tracking-[-2.4px] text-cobolt-300">{s.metric}</span>
                  <p className="p4 text-black-200 mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MVP types */}
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-12">
            <h2 className="h4 text-black-500 mb-4">MVPs We Build for Founders</h2>
            <p className="p3 text-black-400">Every startup tests a different assumption. We match the MVP to the hypothesis.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "SaaS MVP", desc: "Web app with auth, core workflow, and admin dashboard. Test if businesses will pay for your tool.", tags: ["Next.js", "Node.js", "Stripe"], link: "/services/web-development" },
              { title: "Mobile App MVP", desc: "iOS and Android from one codebase. Validate mobile user behavior before native investment.", tags: ["React Native", "Flutter", "Firebase"], link: "/services/mobile-development" },
              { title: "AI-Powered MVP", desc: "Chatbot, assistant, or generative feature that tests whether AI actually saves time or drives revenue.", tags: ["OpenAI", "RAG", "LLM"], link: "/services/ai-solutions" },
              { title: "Marketplace MVP", desc: "Two-sided platform with listings, payments, and basic trust signals. Test supply and demand side by side.", tags: ["Payments", "Ratings", "Messaging"], link: "/services/custom-software-development" },
              { title: "Landing + Waitlist MVP", desc: "Pre-launch validation with signups, referrals, and early-access funnels. Cheap before you commit to code.", tags: ["Conversion", "Email", "Analytics"], link: "/services/web-development" },
              { title: "Internal Tool MVP", desc: "Automate one painful process inside a team. Prove ROI before building a full operations platform.", tags: ["Automation", "APIs", "Workflow"], link: "/services/custom-software-development" },
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

      {/* Process */}
      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-12">
            <h2 className="h4 text-black-500 mb-4">Our 4-Week Sprint Process</h2>
            <p className="p3 text-black-400">A repeatable path from idea to validated users.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "De-risk", desc: "Discovery workshop: problem, user, value prop, and the one assumption to test." },
              { title: "Scope", desc: "Lean feature list, user flows, clickable prototype, and technical architecture." },
              { title: "Build", desc: "Two-week sprints with demos, fast feedback, and weekly stakeholder updates." },
              { title: "Launch", desc: "Deploy, instrument analytics, onboard first users, and plan the next iteration." },
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

      {/* Lead magnet */}
      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-[600px]">
              <span className="e1 text-white-100/70 mb-4 inline-block">Free checklist</span>
              <h2 className="h3 !text-white-100 mb-4">MVP Launch Checklist: 27 Steps from Idea to App Store</h2>
              <p className="p3 text-white-100/80 mb-6">
                The same checklist we use with founders to stay focused, avoid scope creep, and hit launch day with confidence. Get it by email.
              </p>
              <ul className="flex flex-col gap-2 p4 text-white-100/80 mb-8">
                <li className="flex items-start gap-2"><span className="text-white-100 mt-1">→</span><span>How to define your riskiest assumption</span></li>
                <li className="flex items-start gap-2"><span className="text-white-100 mt-1">→</span><span>What to cut (and what to keep) in your first release</span></li>
                <li className="flex items-start gap-2"><span className="text-white-100 mt-1">→</span><span>Pre-launch analytics and App Store readiness</span></li>
              </ul>
            </div>
            <div className="bg-white-100 rounded-sm p-[32px] text-black-500">
              <h3 className="font-display text-[24px] leading-none tracking-[-1.2px] mb-4">Get the free checklist</h3>
              <ChecklistForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[800px] mx-auto">
            <h2 className="h4 text-black-500 mb-10">MVP Development Questions</h2>
            <div className="flex flex-col gap-4">
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

      {/* Final CTA */}
      <section className="bg-black-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-[600px]">
            <h2 className="h3 !text-white-100 mb-4">Stop Guessing. Start Validating.</h2>
            <p className="p3 text-black-200">Book a free MVP scoping call. In 30 minutes we will define your riskiest assumption and the smallest MVP that can test it.</p>
          </div>
          <div className="flex flex-wrap items-center gap-[12px]">
            <Link href="https://calendly.com/technioztech/30min" className="cta-primary-dark !bg-cobolt-300 !text-white-100 hover:!opacity-90">Book a Free MVP Scoping Call</Link>
            <Link href="/resources/app-development-cost-calculator" className="cta-secondary-dark !border-cobolt-300 !text-cobolt-300 hover:!bg-cobolt-300 hover:!text-black-500">Estimate MVP cost</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Breadcrumb({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 text-black-300 p5">
      <Link href="/" className="hover:text-cobolt-500">Home</Link> / <Link href="/services" className="hover:text-cobolt-500">Services</Link> / <span>{label}</span>
    </div>
  );
}
