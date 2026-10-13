import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";

import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Case Studies | Technioz Client Results",
  description: "See how Technioz delivered scalable software, mobile apps, and cloud platforms for clients across transport, food tech, and logistics.",
  openGraph: buildOpenGraph({
      title: "Case Studies | Technioz Client Results",
      description: "Explore real client results and transformation stories from Technioz.",
      url: "https://technioz.com/case-studies",
    }),
  alternates: {
    canonical: "https://technioz.com/case-studies",
  },
};

const caseStudies = [
  {
    slug: "/portfolio/food-delivery-app",
    client: "Hatta Food Hub",
    title: "A Food Delivery App Running 1,500 Orders a Month in Hatta",
    desc: "Ordering, operations, and customer flow built end to end for Hatta Food Hub: an iOS and Android app plus a bilingual web storefront for restaurants, home cooks, grocers, and shops in Hatta, Dubai.",
    industry: "Food Delivery",
    techs: [] as string[],
    image: "/assets/hatta-food.webp",
    results: [
      { metric: "1,500", label: "orders every month" },
      { metric: "AED 100k", label: "monthly revenue on the platform" },
      { metric: "30K+", label: "orders delivered" },
    ],
  },
  {
    slug: "/portfolio/alkhanjry-transport",
    client: "Al Khanjry Transport",
    title: "From Manual Counters to 200K+ Tickets Booked",
    desc: "Replaced phone bookings and counter queues with a bilingual booking and management system for an Omani bus operator running Oman–UAE routes since 1998: online booking at alkhanjryonline.com plus counter booking, check-in, and finance reports for staff.",
    industry: "Transportation & Logistics",
    techs: ["React", "Next.js", "Node.js", "AWS", "PostgreSQL", "Redis"],
    image: "/assets/booking.webp",
    results: [
      { metric: "85%", label: "faster booking" },
      { metric: "200K+", label: "tickets booked" },
      { metric: "200K+", label: "customers served" },
      { metric: "150+", label: "routes managed" },
      { metric: "99.9%", label: "platform uptime" },
    ],
  },
];

export default function CaseStudies() {
  return (
      <>
        <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Case Studies", href: "/case-studies" }]} />
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
                { value: "5+", label: "Projects shipped" },
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
                <div className="relative aspect-[16/10] bg-neutral-200 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={`${study.client} — ${study.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500"
                  />
                </div>
                <div className="p-[32px] flex flex-col gap-[20px]">
                  <div className="flex items-center gap-3">
                    <span className="e1 text-cobolt-500">Case Study</span>
                    <span className="p5 text-black-400">{study.industry}</span>
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
          <div className="flex items-center gap-[8px]">
            <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Tell us about your project</Link>
            <Link href="/services" className="cta-secondary-dark !border-white-100 !text-white-100 hover:!bg-white-100 hover:!text-cobolt-500">Explore our services</Link>
          </div>
        </div>
      </section>
    </>
  );
}