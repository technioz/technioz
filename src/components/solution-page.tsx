import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { enterpriseData, type SolutionData } from "@/lib/solutions-data";

interface SolutionDataExtended extends SolutionData {
  metaDescription: string;
  keywords: string[];
  industries: string[];
}

type AnySolution = SolutionDataExtended | typeof enterpriseData;

export function SolutionPage({ data }: { data: AnySolution }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Solutions", href: "/solutions" }, { name: data.label }]} />
      {/* Hero */}
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[148px] pt-6 lg:pt-[40px] pb-10 lg:pb-[60px]">
          <div className="flex items-center gap-2 text-black-400 p5 mb-6">
            <Link href="/" className="hover:text-cobolt-500 transition-colors">Home</Link>
            <span className="text-black-200">/</span>
            <Link href="/solutions" className="hover:text-cobolt-500 transition-colors">Solutions</Link>
            <span className="text-black-200">/</span>
            <span className="text-black-400">{data.label}</span>
          </div>
          <div className="flex flex-col gap-[16px] max-w-[700px]">
            <span className="e1 text-cobolt-500">{data.label}</span>
            <h1 className="h2 text-black-500">{data.title}</h1>
            <p className="p3 text-black-400 leading-relaxed">{data.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[148px] pb-10 lg:pb-[80px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-[32px] bg-white-300 rounded-sm border border-neutral-300">
            {data.results.map((r) => (
              <div key={r.label} className="flex flex-col gap-1">
                <span className="font-display text-[36px] leading-none tracking-[-1.8px] text-cobolt-500">{r.metric}</span>
                <span className="p5 text-black-400">{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[800px] mx-auto">
            <h2 className="h4 text-black-500 mb-4">The challenge</h2>
            <p className="p3 text-black-400 mb-8">What makes {data.label.toLowerCase()} software hard to get right — and why most off-the-shelf solutions fall short.</p>
            <div className="flex flex-col gap-4">
              {data.challenges.map((challenge, i) => (
                <div key={i} className="bg-white-200 rounded-sm p-[28px] flex flex-col gap-[12px]">
                  <div className="flex items-start gap-[16px]">
                    <span className="font-display text-[24px] leading-none tracking-[-1.2px] text-cobolt-500/30 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <div className="flex flex-col gap-[8px]">
                      <h3 className="font-display text-[20px] leading-[1.1] tracking-[-1px] text-black-500">{challenge.title}</h3>
                      <p className="p4 text-black-400 leading-relaxed">{challenge.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[800px] mx-auto">
            <h2 className="h4 text-black-500 mb-4">What we build</h2>
            <p className="p3 text-black-400 mb-8">Specific solutions we deliver for {data.label.toLowerCase()} organizations — not generic promises, but concrete architecture and features.</p>
            <div className="flex flex-col gap-3">
              {data.solutions.map((solution, i) => (
                <div key={i} className="bg-white-300 rounded-sm border border-neutral-300 p-[24px] flex flex-col gap-[10px]">
                  <div className="flex items-start gap-[12px]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-cobolt-500 shrink-0 mt-[3px]">
                      <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex flex-col gap-[6px]">
                      <h3 className="p4 font-medium text-black-500">{solution.title}</h3>
                      <p className="p5 text-black-400 leading-relaxed">{solution.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech tags */}
            <div className="mt-10">
              <p className="e1 text-black-400 mb-4">Technology stack</p>
              <div className="flex flex-wrap gap-2">
                {data.techTags.map((t) => (
                  <span key={t} className="text-[12px] font-mono uppercase tracking-[1px] text-cobolt-500 bg-cobolt-500/5 px-3 py-1.5 rounded-sm">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries served */}
      {"industries" in data && data.industries && (
        <section className="bg-white-300">
          <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[80px]">
            <div className="max-w-[800px] mx-auto">
              <h2 className="h4 text-black-500 mb-4">Who we serve</h2>
              <p className="p3 text-black-400 mb-8">Organizations we&apos;ve built software for within the {data.label.toLowerCase()} sector.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {data.industries.map((ind) => (
                  <div key={ind} className="bg-white-200 border border-neutral-300 rounded-sm px-[20px] py-[16px] flex items-center gap-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-cobolt-500 shrink-0" />
                    <span className="p5 text-black-500">{ind}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-[600px]">
            <h2 className="h3 !text-white-100 mb-4">Building something in {data.label.toLowerCase()}?</h2>
            <p className="p3 text-white-100/80">Let&apos;s discuss your project and map out what it takes to get there. Free 30-minute roadmap session, no sales pitch.</p>
          </div>
          <div className="flex items-center gap-[8px]">
            <Link href="https://calendly.com/technioztech/30min" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Book a free roadmap session</Link>
            <Link href="/contact" className="cta-secondary-dark !border-white-100 !text-white-100 hover:!bg-white-100 hover:!text-cobolt-500">Contact us</Link>
          </div>
        </div>
      </section>
    </>
  );
}