import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";

export type PillarData = {
  title: string;
  description: string;
  heroLabel: string;
  heroIcon: string;
  sections: {
    heading: string;
    content: string[];
    points?: string[];
  }[];
  ctaHeading: string;
  ctaBody: string;
  ctaHref: string;
  ctaText: string;
  relatedArticles?: { title: string; slug: string }[];
  relatedLinks?: { title: string; href: string }[];
};

export function PillarPage({
  data,
  parent,
  parentLabel,
  children,
}: {
  data: PillarData;
  parent?: { href: string; label: string };
  parentLabel?: string;
  children?: React.ReactNode;
}) {
  const breadcrumbItems = parent
    ? [
        { name: "Home", href: "/" },
        { name: parent.label, href: parent.href },
        { name: parentLabel || data.heroLabel },
      ]
    : [
        { name: "Home", href: "/" },
        { name: parentLabel || data.heroLabel },
      ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col lg:flex-row lg:items-start gap-12">
            <div className="flex-1 flex flex-col gap-[24px]">
              <div className="flex items-center gap-2 text-black-300 p5">
                <Link href="/" className="hover:text-cobolt-500">Home</Link>
                {parent && (
                  <>
                    {" / "}
                    <Link href={parent.href} className="hover:text-cobolt-500">{parent.label}</Link>
                  </>
                )}
                {" / "}
                <span className="text-black-400">{parentLabel || data.heroLabel}</span>
              </div>
              <span className="e1 text-cobolt-500">{data.heroLabel}</span>
              <h1 className="h2 text-black-500 max-w-[800px]">{data.title}</h1>
              <p className="p2 text-black-400 max-w-[700px]">{data.description}</p>
              <Link href={data.ctaHref} className="cta-primary w-fit mt-2">{data.ctaText}</Link>
            </div>
            <div className="lg:w-[380px] shrink-0">
              <div className="bg-cobolt-500/5 border border-cobolt-500/20 rounded-sm p-[32px]">
                <div className="w-12 h-12 rounded-sm bg-cobolt-500/10 flex items-center justify-center text-[24px] mb-6">
                  {data.heroIcon}
                </div>
                <h2 className="font-display text-[20px] leading-[1.1] tracking-[-1px] text-black-500 mb-3">In this guide</h2>
                <ul className="flex flex-col gap-3">
                  {data.sections.map((s, i) => (
                    <li key={i}>
                      <a href={`#section-${i}`} className="p4 text-black-400 hover:text-cobolt-500 transition-colors">
                        {s.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <article className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[800px]">
            {data.sections.map((s, i) => (
              <div key={i} id={`section-${i}`} className="mb-16 last:mb-0">
                <h2 className="h4 text-black-500 mb-4">{s.heading}</h2>
                {s.content.map((p, j) => (
                  <p key={j} className="p3 text-black-400 mb-4 leading-relaxed">{p}</p>
                ))}
                {s.points && s.points.length > 0 && (
                  <ul className="flex flex-col gap-2 my-4 ml-4">
                    {s.points.map((point, k) => (
                      <li key={k} className="p3 text-black-400 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cobolt-500 shrink-0 mt-[9px]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {children}

            {(data.relatedArticles?.length || data.relatedLinks?.length) ? (
              <div className="mt-16 pt-16 border-t border-neutral-300">
                <h2 className="h4 text-black-500 mb-6">Related resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.relatedArticles?.map((a) => (
                    <Link key={a.slug} href={`/blog/${a.slug}`} className="p4 text-black-500 hover:text-cobolt-500 transition-colors bg-white-200 rounded-sm p-[20px] border border-neutral-300">
                      {a.title}
                    </Link>
                  ))}
                  {data.relatedLinks?.map((l) => (
                    <Link key={l.href} href={l.href} className="p4 text-black-500 hover:text-cobolt-500 transition-colors bg-white-200 rounded-sm p-[20px] border border-neutral-300">
                      {l.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </article>
      </section>

      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-[700px]">
            <h2 className="h3 !text-white-100 mb-4">{data.ctaHeading}</h2>
            <p className="p3 text-white-100/80">{data.ctaBody}</p>
          </div>
          <Link href={data.ctaHref} className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90 shrink-0">
            {data.ctaText}
          </Link>
        </div>
      </section>
    </>
  );
}
