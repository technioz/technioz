import type { Metadata } from "next";
import Link from "next/link";
import { solutions, enterpriseData } from "@/lib/solutions-data";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";

import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Industry Software Solutions",
  description: "Custom software solutions for startups, healthcare, fintech, e-commerce, education, logistics, and enterprise. Domain expertise plus solid engineering.",
  openGraph: buildOpenGraph({
      title: "Industry Software Solutions",
      description: "Custom software solutions for startups, healthcare, fintech, e-commerce, education, logistics, and enterprise.",
      url: "https://technioz.com/solutions",
    }),
  alternates: {
    canonical: "https://technioz.com/solutions",
  },
};

export default function SolutionsIndex() {
  const allSolutions = [
    { ...enterpriseData, slug: "enterprise", href: "/enterprise" },
    ...solutions.map((s) => ({ ...s, href: `/solutions/${s.slug}` })),
  ];

  return (
      <>
        <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Solutions", href: "/solutions" }]} />
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[148px] pt-6 lg:pt-[40px] pb-10 lg:pb-[60px]">
          <div className="flex items-center gap-2 text-black-400 p5 mb-6">
            <Link href="/" className="hover:text-cobolt-500 transition-colors">Home</Link>
            <span className="text-black-200">/</span>
            <span>Solutions</span>
          </div>
          <div className="flex flex-col gap-[16px] max-w-[700px]">
            <span className="e1 text-cobolt-500">Solutions</span>
            <h1 className="h2 text-black-500">Solutions for every industry.</h1>
            <p className="p3 text-black-400">We don&apos;t just write code. We understand what the software is for — the regulations, the user expectations, the business model, the compliance requirements. Pick your industry to see how we help.</p>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allSolutions.map((sol) => (
              <Link
                key={sol.slug}
                href={sol.href}
                className="group bg-white-200 border border-neutral-300 hover:border-cobolt-500 rounded-sm p-[32px] flex flex-col gap-[20px] transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="w-[48px] h-[48px] rounded-sm bg-cobolt-500/10 border border-cobolt-500/20 flex items-center justify-center text-[22px] shrink-0">
                    {sol.icon}
                  </div>
                  <span className="e1 text-black-400">{sol.label}</span>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h2 className="font-display text-[22px] leading-[1.1] tracking-[-1.1px] text-black-500 group-hover:text-cobolt-500 transition-colors">{sol.title}</h2>
                  <p className="p5 text-black-400 line-clamp-3">{sol.subtitle}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {sol.techTags.slice(0, 4).map((t) => (
                    <span key={t} className="text-[11px] font-mono uppercase tracking-[0.8px] text-cobolt-500 bg-cobolt-500/5 px-2 py-1 rounded-sm">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-[8px]">
                  <span className="e2 text-cobolt-500 group-hover:underline underline-offset-4">Explore solution</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cobolt-500"><path d="M6 18L18 6M18 6H10M18 6V14" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-[600px]">
            <h2 className="h3 text-white-100 mb-4">Don&apos;t see your industry?</h2>
            <p className="p3 text-white-100/80">We work across many more sectors. Tell us what you&apos;re building and we&apos;ll tell you if we can help.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Talk to us</Link>
        </div>
      </section>
    </>
  );
}