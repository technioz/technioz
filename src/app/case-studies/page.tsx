import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies | Technioz Client Results",
  description: "See how Technioz delivered scalable software, mobile apps, and cloud platforms for clients across transport, food tech, and logistics.",
  openGraph: {
    title: "Case Studies | Technioz Client Results",
    description: "Explore real client results and transformation stories from Technioz.",
    url: "https://technioz.com/case-studies",
    images: ["/logo.webp"],
  },
  alternates: {
    canonical: "https://technioz.com/case-studies",
  },
};

const caseStudies = [
  {
    slug: "/portfolio/food-delivery-app",
    client: "hattaFoodHub",
    title: "Food Delivery Platform Scaling to 10,000+ Concurrent Orders",
    desc: "Replaced a crumbling monolith with microservices architecture. Real-time GPS tracking, automated dispatching, and a restaurant dashboard that handles peak loads without breaking a sweat.",
    industry: "Food & Logistics",
    timeline: "4 months",
    techs: ["React Native", "Laravel", "MySQL", "Firebase"],
    results: [
      { metric: "10,000+", label: "concurrent orders handled" },
      { metric: "99.9%", label: "platform uptime" },
      { metric: "40%", label: "increase in repeat customers" },
    ],
  },
  {
    slug: "/portfolio/alkhanjry-transport",
    client: "Al Khanjry Groups",
    title: "From Manual Counters to $27M+ in Digital Ticket Sales",
    desc: "Replaced phone bookings and counter queues with a modern online ticketing platform. Real-time seat selection, bilingual Arabic/English support, SMS confirmations, and AWS auto-scaling that handles peak demand without breaking.",
    industry: "Transportation & Logistics",
    timeline: "7 months",
    techs: ["React", "Next.js", "Node.js", "AWS", "PostgreSQL", "Redis"],
    results: [
      { metric: "$27M+", label: "ticket sales processed" },
      { metric: "150K+", label: "bookings completed" },
      { metric: "200K+", label: "passengers served" },
      { metric: "80+", label: "routes covered" },
      { metric: "40%", label: "faster booking time" },
      { metric: "99.9%", label: "platform uptime" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <>
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[700px]">
            <div className="flex items-center gap-2 text-black-400 p5">
              <Link href="/" className="hover:text-cobolt-500 transition-colors">Home</Link>
              <span>/</span>
              <span>Case Studies</span>
            </div>
            <span className="e1 text-cobolt-500">Case Studies</span>
            <h1 className="h2 text-black-500">Real results from real clients.</h1>
            <p className="p3 text-black-400">Take an in-depth look at how we helped two very different businesses replace outdated systems with custom software that transformed their operations.</p>
            <div className="flex items-center gap-6 mt-2">
              {[
                { value: "200+", label: "Projects shipped" },
                { value: "98%", label: "On-time delivery" },
                { value: "5", label: "Industries served" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-display text-[32px] leading-none tracking-[-1.6px] text-cobolt-500">{s.value}</span>
                  <span className="p5 text-black-400 mt-1">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Link key={study.client} href={study.slug} className="group bg-white-200 rounded-sm overflow-hidden border border-neutral-300 hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow">
                <div className="aspect-[16/10] bg-neutral-200 flex items-center justify-center">
                  <span className="p4 text-black-400">{study.client} case study</span>
                </div>
                <div className="p-[32px] flex flex-col gap-[20px]">
                  <div className="flex items-center gap-3">
                    <span className="e1 text-cobolt-500">Case Study</span>
                    <span className="p5 text-black-400">{study.industry}</span>
                    <span className="text-black-200">&middot;</span>
                    <span className="p5 text-black-400">{study.timeline}</span>
                  </div>
                  <h2 className="font-display text-[28px] leading-[1.1] tracking-[-1.4px] text-black-500 group-hover:text-cobolt-500 transition-colors">{study.title}</h2>
                  <p className="p3 text-black-400">{study.desc}</p>

                  {/* Results grid */}
                  <div className="grid grid-cols-3 gap-4 p-[24px] bg-white-300 rounded-sm">
                    {study.results.map((r) => (
                      <div key={r.label} className="flex flex-col gap-1">
                        <span className="font-display text-[28px] leading-none tracking-[-1.4px] text-cobolt-500">{r.metric}</span>
                        <span className="p5 text-black-400">{r.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.techs.map((t) => (
                      <span key={t} className="text-[12px] font-mono uppercase tracking-[1px] text-cobolt-500 bg-cobolt-500/5 px-3 py-1.5 rounded-sm">{t}</span>
                    ))}
                  </div>

                  <span className="e2 text-cobolt-500 group-hover:underline underline-offset-4">Read full case study</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] text-center">
          <h2 className="h4 text-black-500 mb-4">More projects in our portfolio</h2>
          <p className="p3 text-black-400 mb-8 max-w-[480px] mx-auto">Every project tells a story. Browse our complete portfolio to see the full range of what we build.</p>
          <Link href="/portfolio" className="cta-secondary">View full portfolio</Link>
        </div>
      </section>

      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-[600px]">
            <h2 className="h3 !text-white-100 mb-4">Want to be our next case study?</h2>
            <p className="p3 text-white-100/80">Let&apos;s discuss your project and see how we can deliver results for your business.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Start your project</Link>
        </div>
      </section>
    </>
  );
}
