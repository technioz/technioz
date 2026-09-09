import { notFound } from "next/navigation";
import Link from "next/link";
import { tools, getToolBySlug } from "@/lib/tools-data";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

import type { Metadata } from "next";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  return {
    title: tool.title,
    description: tool.metaDescription,
    openGraph: buildOpenGraph({
      title: tool.title,
      description: tool.tagline,
      url: `https://technioz.com/tools/${tool.slug}`,
    }),
    alternates: {
      canonical: `https://technioz.com/tools/${tool.slug}`,
    },
  };
}

function SoftwareAppJsonLd({
  tool,
}: {
  tool: NonNullable<ReturnType<typeof getToolBySlug>>;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    applicationCategory: tool.applicationCategory,
    url: tool.liveUrl,
    description: tool.metaDescription,
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: {
      "@type": "Organization",
      name: "Technioz",
      url: "https://technioz.com",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function FaqJsonLd({ faq }: { faq: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function ToolDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Tools", href: "/tools" },
          { name: tool.name, href: `/tools/${tool.slug}` },
        ]}
      />
      <SoftwareAppJsonLd tool={tool} />
      <FaqJsonLd faq={tool.faq} />

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[760px]">
            <span className="e1 text-cobolt-500">Technioz Tools</span>
            <h1 className="h2 text-black-500">{tool.name}: {tool.tagline}</h1>
            <p className="p3 text-black-400">{tool.intro}</p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={tool.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary"
              >
                {tool.liveLabel} ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <article className="max-w-[1440px] mx-auto px-6 pb-16 lg:px-[148px] lg:pb-[120px]">
          <div className="max-w-[760px] flex flex-col">
            {tool.sections.map((section) => (
              <div key={section.heading} className="mb-10">
                <h2 className="h4 text-black-500 mt-12 mb-4">{section.heading}</h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="p3 text-black-400 my-4 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            ))}

            <h2 className="h4 text-black-500 mt-12 mb-6">What&apos;s inside</h2>
            <ul className="flex flex-col gap-3 mb-12">
              {tool.features.map((feature) => (
                <li key={feature} className="p4 text-black-400 flex items-start gap-[10px]">
                  <span className="text-cobolt-500 mt-1">→</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-12">
              {tool.techs.map((tech) => (
                <span key={tech} className="text-[12px] text-cobolt-500 font-mono bg-cobolt-500/5 px-3 py-1.5 rounded-full">
                  {tech}
                </span>
              ))}
            </div>

            <h2 className="h4 text-black-500 mt-12 mb-6">Questions people ask</h2>
            <div className="flex flex-col gap-4 mb-12">
              {tool.faq.map((f) => (
                <div key={f.q} className="bg-white-300 border border-neutral-300 rounded-sm p-[24px]">
                  <h3 className="font-display text-[20px] leading-[1.2] tracking-[-1px] text-black-500 mb-2">{f.q}</h3>
                  <p className="p4 text-black-400">{f.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-8 bg-cobolt-500/5 border border-cobolt-500/20 rounded-sm">
              <h2 className="font-display text-[24px] leading-[1.15] tracking-[-1.2px] text-black-500 mb-3">
                {tool.moneyPage.blurb}
              </h2>
              <p className="p3 text-black-400 mb-6 leading-relaxed">
                We built {tool.name} for ourselves — the same team builds
                production software for clients across the GCC and India.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact" className="cta-primary">
                  Talk to Technioz
                </Link>
                <Link href={tool.moneyPage.href} className="e2 text-cobolt-500">
                  See our {tool.moneyPage.label} →
                </Link>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-10">More Technioz tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools
              .filter((t) => t.slug !== tool.slug)
              .map((t) => (
                <Link
                  key={t.slug}
                  href={`/tools/${t.slug}`}
                  className="bg-white-200 rounded-sm p-[32px] flex flex-col gap-[12px] hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow group"
                >
                  <span className="e2 text-cobolt-500">{t.tagline}</span>
                  <h3 className="font-display text-[24px] leading-[1.15] tracking-[-1.2px] text-black-500 group-hover:text-cobolt-500 transition-colors">
                    {t.name}
                  </h3>
                  <span className="e2 text-cobolt-500">Explore →</span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}