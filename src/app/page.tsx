import Link from "next/link";
import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { CustomerMarquee } from "@/components/customer-marquee";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { FadeIn } from "@/components/fade-in";
import { marqueeCustomers, technologies, testimonials } from "@/lib/homepage-data";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";

import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

const InfrastructureDiagram = dynamic(() => import("@/components/diagrams/infrastructure-diagram").then((m) => m.InfrastructureDiagram));
const PricingModelDiagram = dynamic(() => import("@/components/diagrams/pricing-model-diagram").then((m) => m.PricingModelDiagram));
const ShippingVelocityDiagram = dynamic(() => import("@/components/diagrams/shipping-velocity-diagram").then((m) => m.ShippingVelocityDiagram));

export const metadata: Metadata = {
  title: "Custom Software Development Company — Web, Mobile \u0026 AI",
  description: "We build web apps, mobile apps and AI solutions for GCC and India businesses. 5+ projects shipped, 98% on-time since 2024. Book a free consultation.",
  openGraph: buildOpenGraph({
      title: "Technioz | Full-Cycle Software Development for Growing Businesses",
      description: "One partner for web, mobile, AI, and cloud. We build, launch, and scale software products for growing businesses.",
      url: "https://technioz.com",
    }),
  alternates: {
    canonical: "https://technioz.com",
  },
};

export default function Home() {
  return (
      <>
        <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }]} />
      {/* P — Problem */}
      <FadeIn animation="fade-up">
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-8 sm:pb-12 lg:px-[148px] lg:pt-[140px] lg:pb-[80px]">
          <div className="flex flex-col gap-6 lg:gap-[40px] items-start max-w-[800px]">
            <span className="e1 inline-flex items-center justify-center border px-[16px] py-[8px] border-black-400 text-black-400">For startups and SMBs</span>
            <h1 className="h1 text-black-500">We build what you sell.<br /><span className="text-cobolt-500">You scale what we ship.</span></h1>
            <p className="p3 text-black-400 max-w-[620px]">Custom software, SaaS, and AI — from first line to launch. One team for web, mobile, AI, and cloud, so you ship faster without the vendor juggling act.</p>
            <div className="flex items-center gap-[8px]">
              <Link href="/contact" className="cta-primary">Ship with us</Link>
              <Link href="https://calendly.com/technioztech/30min" className="cta-secondary">Book a call</Link>
            </div>
          </div>
        </div>
      </section>
      </FadeIn>

      <Stats />
      <ProblemRelief />
      <CustomerMarquee customers={marqueeCustomers} />
      <Evidence />
      <InfrastructureSection />
      <ServicesGrid />
      <ShippingVelocitySection />
      <TechStack />
      <PricingSection />
      <Transformation />
      <TestimonialCarousel testimonials={testimonials} />
      <Industries />
      <Offer />
    </>
  );
}
function Stats() {
  return (
    <FadeIn animation="fade-up" delay={100}>
    <section className="border-y border-neutral-300 bg-white-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[148px] py-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {[
          { value: "5+", label: "Projects shipped" },
          { value: "5+", label: "Experience" },
          { value: "98%", label: "On-time delivery" },
          { value: "2+", label: "Years building" },
        ].map((s) => (
          <div key={s.label} className="flex flex-col gap-1"><span className="font-display text-[40px] leading-none tracking-[-2px] text-cobolt-500">{s.value}</span><span className="p5 text-black-400">{s.label}</span></div>
        ))}
      </div>
    </section>
    </FadeIn>
  );
}

function ProblemRelief() {
  return (
    <FadeIn animation="fade-up" delay={150}>
    <section className="bg-white-300">
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[120px] flex flex-col gap-[48px] lg:gap-[80px]">
        <div className="max-w-[640px] flex flex-col gap-[16px]">
          <span className="e1 inline-flex items-center justify-center border px-[16px] py-[8px] border-black-400 text-black-400 w-fit">What changes</span>
          <h2 className="h3 text-black-500">One partner.<br />Zero finger-pointing.</h2>
          <p className="p3 text-black-400">Imagine briefing a single team, getting a single timeline, and paying a single invoice — while web, mobile, AI, and cloud all move forward together.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reliefCards.map(([t, d]) => <div key={t} className="bg-white-200 rounded-sm p-[32px] flex flex-col gap-[12px]"><h3 className="font-display text-[22px] leading-none tracking-[-1.1px] text-black-500">{t}</h3><p className="p4 text-black-400">{d}</p></div>)}
        </div>
      </div>
    </section>
    </FadeIn>
  );
}

function Evidence() {
  return (
    <FadeIn animation="fade-up" delay={200}>
    <section className="bg-black-500">
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[120px] flex flex-col gap-[48px] lg:gap-[80px]">
        <div className="max-w-[640px] flex flex-col gap-[16px]">
          <span className="e1 inline-flex items-center justify-center border px-[16px] py-[8px] border-black-400 text-black-200 w-fit">Proof</span>
          <h2 className="h3 !text-white-200">Teams like yours already ship with us.</h2>
          <p className="p3 text-black-200">Here&apos;s what happens when you replace five vendors with one team.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {evidenceCards.map((e) => (
            <div key={e.client} className="border border-black-400 rounded-sm p-[32px] flex flex-col gap-[16px]">
              <span className="font-display text-[56px] leading-none tracking-[-2.8px] text-cobolt-300">{e.metric}</span>
              <p className="font-display text-[20px] leading-none tracking-[-1px] text-white-200">{e.label}</p>
              <p className="p5 text-black-200">{e.story}</p>
              <span className="e1 text-cobolt-300 mt-auto">{e.client}</span>
            </div>
          ))}
        </div>
        <Link href="/case-studies" className="cta-secondary-dark group w-fit">See all case studies</Link>
      </div>
    </section>
    </FadeIn>
  );
}

function ServicesGrid() {
  return (
    <FadeIn animation="fade-up" delay={100}>
    <section className="bg-white-300">
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[120px] flex flex-col gap-[48px] lg:gap-[80px]">
        <div className="max-w-[640px] flex flex-col gap-[16px]">
          <span className="e1 inline-flex items-center justify-center border px-[16px] py-[8px] border-black-400 text-black-400 w-fit">What we do</span>
          <h2 className="h3 text-black-500">Every layer of your stack.<br />Every stage of your growth.</h2>
          <p className="p3 text-black-400">From the first mockup to production at scale — one team covers the full lifecycle.</p>
        </div>
        <div className="marketecture-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-300 border border-neutral-300 rounded-sm overflow-hidden">
          {serviceCards.map((s) => (
            <Link key={s.title} href={s.href} className="marketecture-card bg-white-300 flex flex-col gap-[28px] px-[28px] py-[36px] lg:px-[32px] lg:py-[44px] outline outline-1 outline-transparent -outline-offset-1 hover:outline-cobolt-300 relative overflow-hidden group">
              <div className="flex flex-col gap-[20px]">
                <h3 className="marketecture-title font-display text-[28px] leading-none tracking-[-1.4px] text-black-500">{s.title}</h3>
                <p className="marketecture-desc p4 text-black-400">{s.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2">{s.tags.map((t) => <span key={t} className="inline-flex items-center rounded-full border whitespace-nowrap font-body leading-[1.3] gap-[4px] p-[8px] text-[14px] bg-cobolt-500/5 border-cobolt-500/10 text-black-400">{t}</span>)}</div>
              <span className="e2 text-cobolt-500 group-hover:underline underline-offset-4 mt-auto">Learn more</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
    </FadeIn>
  );
}

function InfrastructureSection() {
  return (
    <FadeIn animation="fade-up" delay={100}>
    <section className="bg-white-200">
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[120px] flex flex-col gap-[48px] lg:gap-[60px]">
        <div className="max-w-[640px] flex flex-col gap-[16px]">
          <span className="e1 inline-flex items-center justify-center border px-[16px] py-[8px] border-black-400 text-black-400 w-fit">Infrastructure</span>
          <h2 className="h3 text-black-500">Architecture you can build a business on.</h2>
          <p className="p3 text-black-400">Every project ships with production-grade infrastructure — CDN, auto-scaling, containerized services, managed databases, and serverless functions. One diagram, zero hidden pieces.</p>
        </div>
        <div className="bg-white-300 border border-neutral-300 rounded-sm p-6 lg:p-10">
          <InfrastructureDiagram />
        </div>
      </div>
    </section>
    </FadeIn>
  );
}

function ShippingVelocitySection() {
  return (
    <FadeIn animation="fade-up" delay={100}>
    <section className="bg-white-300">
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[120px] flex flex-col gap-[48px] lg:gap-[60px]">
        <div className="max-w-[640px] flex flex-col gap-[16px]">
          <span className="e1 inline-flex items-center justify-center border px-[16px] py-[8px] border-black-400 text-black-400 w-fit">Shipping velocity</span>
          <h2 className="h3 text-black-500">Four weeks to first deploy.<br />Zero months of onboarding.</h2>
          <p className="p3 text-black-400">We don&apos;t spend weeks &ldquo;understanding your business.&rdquo; We start building in week one, with demos every fourteen days.</p>
        </div>
        <div className="bg-white-200 border border-neutral-300 rounded-sm p-6 lg:p-10">
          <ShippingVelocityDiagram />
        </div>
      </div>
    </section>
    </FadeIn>
  );
}

function PricingSection() {
  return (
    <FadeIn animation="fade-up" delay={100}>
    <section className="bg-white-200">
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[120px] flex flex-col gap-[48px] lg:gap-[60px]">
        <div className="max-w-[640px] flex flex-col gap-[16px]">
          <span className="e1 inline-flex items-center justify-center border px-[16px] py-[8px] border-black-400 text-black-400 w-fit">Pricing</span>
          <h2 className="h3 text-black-500">Three ways to work with us.<br />One fits your stage.</h2>
          <p className="p3 text-black-400">Whether you need a fixed-scope build, a dedicated squad, or extra engineers by Monday — we have a model that matches where you are right now.</p>
        </div>
        <PricingModelDiagram />
      </div>
    </section>
    </FadeIn>
  );
}

function TechStack() {
  return (
    <FadeIn animation="fade-up" delay={100}>
    <section className="bg-white-200"><div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[120px] flex flex-col gap-[48px] lg:gap-[60px]"><div className="max-w-[640px] flex flex-col gap-[16px]"><span className="e1 inline-flex items-center justify-center border px-[16px] py-[8px] border-black-400 text-black-400 w-fit">Our stack</span><h2 className="h3 text-black-500">Modern tools.<br />No legacy excuses.</h2><p className="p3 text-black-400">We build with the tech your future hires will actually want to work on.</p></div><div className="flex flex-wrap gap-3">{technologies.map((t) => <span key={t} className="inline-flex items-center rounded-sm border border-neutral-300 bg-white-300 px-[16px] py-[12px] p4 text-black-500">{t}</span>)}</div></div></section>
    </FadeIn>
  );
}

function Transformation() {
  return (
    <FadeIn animation="fade-up" delay={100}>
    <section className="bg-white-300">
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[120px] flex flex-col gap-[48px] lg:gap-[80px]"><div className="max-w-[640px] flex flex-col gap-[16px]"><span className="e1 inline-flex items-center justify-center border px-[16px] py-[8px] border-black-400 text-black-400 w-fit">The outcome</span><h2 className="h3 text-black-500">What your team looks like after working with us.</h2></div><div className="grid grid-cols-1 md:grid-cols-2 gap-6">{outcomeCards.map(([t, d]) => <div key={t} className="bg-white-200 rounded-sm p-[32px] flex flex-col gap-[16px]"><h3 className="font-display text-[24px] leading-none tracking-[-1.2px] text-black-500">{t}</h3><p className="p4 text-black-400">{d}</p></div>)}</div></div>
    </section>
    </FadeIn>
  );
}

function Industries() {
  return (
    <FadeIn animation="fade-up" delay={100}>
    <section className="bg-black-500 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "48px 48px" }} />
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[120px] flex flex-col gap-[48px] lg:gap-[80px] relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"><div className="max-w-[580px] flex flex-col gap-[16px]"><span className="e1 inline-flex items-center justify-center border px-[16px] py-[8px] border-black-400 text-black-200 w-fit">Industries</span><h2 className="h2 !text-white-200">We speak your domain.<br />Not just your stack.</h2><p className="p3 text-black-200 max-w-[480px]">The fastest software comes from teams who understand what the software is for — not just how to write it.</p></div><p className="font-display text-[16px] text-cobolt-200 uppercase tracking-[2px] hidden lg:block">5 industries &middot; 5+ projects shipped</p></div>
        <FeaturedIndustry />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{industryCards.map((ind, i) => (
          <Link key={ind.name} href={ind.href} className="group bg-black-500 border border-black-400 hover:border-cobolt-300 rounded-sm p-[36px] lg:p-[44px] flex flex-col gap-[24px] transition-colors duration-300">
            <div className="flex items-start justify-between">
              <div className="w-[48px] h-[48px] rounded-sm bg-cobolt-500/10 border border-cobolt-500/20 flex items-center justify-center text-[22px] shrink-0">
              {ind.icon}
              </div>
              <span className="font-display text-[60px] leading-none tracking-[-3px] text-cobolt-500/10 select-none">{String(i + 2).padStart(2, "0")}</span>
            </div>
            <div className="flex flex-col gap-[12px]">
              <h3 className="font-display text-[28px] leading-none tracking-[-1.4px] !text-white-200">{ind.name}</h3>
              <p className="p3 text-black-200 leading-relaxed">{ind.desc}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {ind.tags.map((tag) => <span key={tag} className="text-[12px] text-cobolt-300 bg-cobolt-500/10 px-3 py-1.5 rounded-sm font-mono uppercase tracking-[0.8px]">{tag}</span>)}
            </div>
            <div className="flex items-center gap-[8px] mt-auto">
              <span className="e2 text-cobolt-300 group-hover:underline underline-offset-4">
                Explore {ind.name} solutions
              </span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cobolt-300"><path d="M6 18L18 6M18 6H10M18 6V14" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
          </Link>
        ))}</div>
      </div>
    </section>
    </FadeIn>
  );
}

function FeaturedIndustry() {
  return (
    <Link href="/solutions/logistics" className="group relative overflow-hidden rounded-sm border border-black-400 hover:border-cobolt-300 transition-colors duration-300">
      <div className="grid lg:grid-cols-[1fr_420px] min-h-[420px]">
        <div className="flex flex-col justify-between p-[40px] lg:p-[56px] gap-[32px]">
          <div className="flex flex-col gap-[24px]"><span className="e1 text-cobolt-300">Featured</span><h3 className="h3 !text-white-200">Transportation &amp; Logistics</h3><p className="p3 text-black-200 max-w-[520px] leading-relaxed">We&apos;ve built booking platforms, fleet dashboards, route optimizers, and multi-vendor ticketing systems used by tens of thousands of passengers across the GCC. Al Khanjry Transport, Integrated Golden Lines, Al Khanjry Groups — they all ship on our infrastructure.</p></div>
          <div className="flex flex-wrap gap-3">{["Real-time tracking","Online ticketing","Fleet management","Multi-agent systems","AWS auto-scaling","Payment integration"].map((t) => <span key={t} className="inline-flex items-center rounded-full border border-cobolt-500/30 bg-cobolt-500/10 text-cobolt-200 px-[14px] py-[7px] text-[13px] font-body">{t}</span>)}</div>
          <div className="flex items-center gap-[8px]"><span className="e2 text-cobolt-300 group-hover:underline underline-offset-4">See transport case studies</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cobolt-300"><path d="M6 18L18 6M18 6H10M18 6V14" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
        </div>
        <div className="relative flex items-end justify-center bg-gradient-to-br from-cobolt-500/20 via-black-500 to-black-500 min-h-[280px] lg:min-h-0 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className="relative w-full h-full">
              {[...Array(6)].map((_, i) => <div key={i} className="absolute bg-cobolt-500/15 rounded-full" style={{ width: `${60+i*30}px`, height: `${60+i*30}px`, top: `${20+i*12}%`, left: `${15+i*14}%` }} />)}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
                <path d="M40 320 Q 120 200, 180 300 T 320 280 T 360 200" stroke="#887bdd" strokeWidth="1.5" strokeDasharray="8 4" opacity="0.6" />
                <path d="M60 340 Q 160 150, 200 250 T 340 220" stroke="#614fd2" strokeWidth="2" strokeDasharray="4 6" opacity="0.5" />
                <circle cx="200" cy="270" r="4" fill="#b0a7e9" /><circle cx="320" cy="230" r="4" fill="#b0a7e9" /><circle cx="120" cy="280" r="4" fill="#b0a7e9" />
                <rect x="180" y="150" width="60" height="40" rx="3" fill="#3923c7" opacity="0.3" /><rect x="260" y="100" width="50" height="35" rx="3" fill="#3923c7" opacity="0.25" /><rect x="300" y="300" width="55" height="35" rx="3" fill="#3923c7" opacity="0.2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function Offer() {
  return (
    <FadeIn animation="fade-up" delay={100}>
    <section className="bg-cobolt-500 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true"><div className="absolute -top-[200px] -right-[200px] w-[600px] h-[600px] rounded-full border border-white/10" /><div className="absolute -top-[120px] -right-[120px] w-[440px] h-[440px] rounded-full border border-white/8" /><div className="absolute -bottom-[300px] -left-[100px] w-[700px] h-[700px] rounded-full border border-white/5" /></div>
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[120px] relative">
        <div className="max-w-[640px] flex flex-col gap-[20px]">
          <span className="e1 text-white-100/70">No commitment. Real next steps.</span>
          <h2 className="h1 !text-white-100/80 leading-[1.05]">Free roadmap session.<br /><span className="text-white-100/80">Zero sales pitch.</span></h2>
          <p className="p3 text-white-100/80 leading-relaxed max-w-[540px]">In 30 minutes we&apos;ll map out your product&apos;s next three milestones — what to build, in what order, and what it&apos;ll take. No contracts, no obligations, just a clear plan you can take to any team.</p>
          <div className="flex items-center gap-5 mt-2">{[{v:"100%",l:"Free"},{v:"30min",l:"Live session"},{v:"$0",l:"No commitment"}].map(({v,l}) => <div key={l} className="flex items-center gap-[10px]"><span className="font-display text-[36px] leading-none tracking-[-1.8px] text-white-100">{v}</span><span className="p5 text-white-100/70 leading-tight">{l}</span></div>)}</div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[12px] mt-6">
            <Link href="https://calendly.com/technioztech/30min" className="inline-flex items-center gap-[10px] bg-white-100 text-cobolt-500 font-mono text-[16px] tracking-[1.4px] uppercase rounded-sm h-[52px] px-[28px] hover:opacity-90 transition-opacity whitespace-nowrap">Claim your free roadmap<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 18L18 6M18 6H10M18 6V14" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
            <Link href="/contact" className="inline-flex items-center gap-[8px] text-white-100 font-mono text-[14px] tracking-[1.2px] uppercase rounded-sm h-[52px] px-[20px] border border-white/30 hover:bg-white/10 transition-all whitespace-nowrap">Or message us first</Link>
          </div>
          <p className="p5 text-white-100/70 mt-3">Typical response time: under 4 hours &middot; Limited spots this month</p>
        </div>
      </div>
    </section>
    </FadeIn>
  );
}

const reliefCards = [
  ["One relationship","No more &ldquo;that's the other vendor's problem.&rdquo; We own the outcome end-to-end."],
  ["One timeline","Every piece of your stack moves in sync."],
  ["One invoice","Predictable monthly billing. No surprise overages from three different agencies."],
  ["One standard","Same code quality, security practices, design language — across your entire product."],
  ["One backlog","Priorities are clear. Nothing falls through the cracks between disconnected teams."],
  ["One launch day","Web, mobile, and backend go live together. Tested together. Working together."],
];

const evidenceCards = [
  { metric:"85%",label:"faster booking processing",story:"Al Khanjry Transport replaced manual ticketing with a full-stack platform we built — booking time dropped from 15 minutes to under 30 seconds.",client:"Al Khanjry Transport"},
  { metric:"35%",label:"revenue increase",story:"Integrated Golden Lines went from paper tickets to a modern web + mobile booking system. Revenue grew 35% in the first quarter.",client:"Integrated Golden Lines"},
  { metric:"60%",label:"lower ticketing costs",story:"Al Khanjry Groups needed a unified platform. We built it — 500K+ transactions/month, six integrations, 60% cost reduction.",client:"Al Khanjry Groups"},
];

const serviceCards = [
  { title:"Web Applications",desc:"Full-stack platforms that scale from your first user to your first million.",href:"/services/web-development",tags:["React","Next.js","Node.js","TypeScript"]},
  { title:"Mobile Apps",desc:"iOS and Android apps your users will actually open. Native performance with one codebase.",href:"/services/mobile-development",tags:["iOS","Android","React Native","Flutter"]},
  { title:"AI & Machine Learning",desc:"Chatbots that don't sound like robots. Predictive models that spot patterns your team misses.",href:"/services/ai-solutions",tags:["Chatbots","Analytics","Vision","NLP"]},
  { title:"Cloud & DevOps",desc:"AWS, Azure, GCP — we handle infra so you don't wake up to outage alerts.",href:"/services/cloud-services",tags:["AWS","Docker","Kubernetes","CI/CD"]},
  { title:"IT Consulting",desc:"Not sure what to build first? We'll map your architecture, pick the stack, and write the roadmap.",href:"/services/it-consulting",tags:["Strategy","Architecture","Roadmap","Audit"]},
  { title:"Team Augmentation",desc:"Need devs by Monday? Our bench is your bench. No recruiting, no onboarding lag.",href:"/contact",tags:["React","Node.js","DevOps","Python"]},
];

const outcomeCards = [
  ["Ship features, not manage vendors","Your product velocity doubles because you're briefing one team, not coordinating five. Engineering time goes back to engineering."],
  ["Sleep through launch weekends","When web, mobile, and backend are built and tested together — launch day is boring. That's the point."],
  ["Scale without hiring chaos","Need more capacity? We scale up. Need less? We scale down. No HR pipelines, no bench costs."],
  ["One person who gets the whole picture","Your lead engineer knows the web app, the mobile app, the API, and the infrastructure. No handoffs."],
];

const industryCards = [
  { icon:"\u{1F4B0}",name:"Finance",desc:"Secure fintech apps, payment gateways, and compliance automation. Banking-grade platforms that pass audits the first time.",href:"/solutions/finance",tags:["PCI-DSS","Stripe","Banking APIs","Fraud Detection","RegTech"]},
  { icon:"\u{1F6D2}",name:"E-commerce",desc:"Storefronts and marketplaces that handle flash sales without crumbling. Inventory sync, payment flows, admin dashboards — all battle-tested.",href:"/solutions/ecommerce",tags:["Shopify","Stripe","PIM","Analytics","Headless"]},
  { icon:"\u{1F3E5}",name:"Healthcare",desc:"HIPAA-compliant patient portals, telemedicine platforms, and clinic management systems your compliance officer will actually approve.",href:"/solutions/healthcare",tags:["HIPAA","FHIR","Telehealth","EMR/EHR","BAA-ready"]},
  { icon:"\u{1F393}",name:"Education",desc:"Learning management systems, assessment engines, and AI tutoring platforms that students and teachers both enjoy using.",href:"/solutions/education",tags:["LMS","SCORM","Assessments","AI tutoring","Analytics"]},
];