import Link from "next/link";

interface SubServicePlaceholderProps {
  title: string;
  description: string;
  parentHref: string;
  parentLabel: string;
  guideHref?: string;
  guideLabel?: string;
}

export function SubServicePlaceholder({
  title,
  description,
  parentHref,
  parentLabel,
  guideHref,
  guideLabel,
}: SubServicePlaceholderProps) {
  return (
    <>
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[700px]">
            <div className="flex items-center gap-2 text-black-300 p5">
              <Link href="/" className="hover:text-cobolt-500">Home</Link>
              {" / "}
              <Link href="/services" className="hover:text-cobolt-500">Services</Link>
              {" / "}
              <Link href={parentHref} className="hover:text-cobolt-500">{parentLabel}</Link>
              {" / "}
              <span className="text-black-400">{title}</span>
            </div>
            <h1 className="h2 text-black-500">{title}</h1>
            <p className="p2 text-black-400">{description}</p>
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Link href="/contact" className="cta-primary">Book a free strategy call</Link>
              {guideHref && guideLabel && (
                <Link href={guideHref} className="e2 text-cobolt-500">
                  {guideLabel} →
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="bg-cobolt-500/5 border border-cobolt-500/20 rounded-sm p-[32px]">
            <h2 className="font-display text-[24px] leading-[1.1] tracking-[-1.2px] text-black-500 mb-3">Content coming soon</h2>
            <p className="p3 text-black-400">
              This page is being built out with detailed service information, case studies, and technology details. In the meantime, you can explore the parent service page or book a call to discuss your project.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
