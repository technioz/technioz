import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";

interface LocationPlaceholderProps {
  title: string;
  location: string;
  description: string;
  serviceHref: string;
  serviceLabel: string;
  guideHref?: string;
  guideLabel?: string;
}

export function LocationPlaceholder({
  title,
  location,
  description,
  serviceHref,
  serviceLabel,
  guideHref,
  guideLabel,
}: LocationPlaceholderProps) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: serviceLabel, href: serviceHref }, { name: location }]} />
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[700px]">
            <div className="flex items-center gap-2 text-black-300 p5">
              <Link href="/" className="hover:text-cobolt-500">Home</Link>
              {" / "}
              <Link href="/services" className="hover:text-cobolt-500">Services</Link>
              {" / "}
              <Link href={serviceHref} className="hover:text-cobolt-500">{serviceLabel}</Link>
              {" / "}
              <span className="text-black-400">{location}</span>
            </div>
            <span className="e1 text-cobolt-500">{location}</span>
            <h1 className="h2 text-black-500">{title}</h1>
            <p className="p2 text-black-400">{description}</p>
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Link href="/contact" className="cta-primary">Get a {location} quote</Link>
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
            <h2 className="font-display text-[24px] leading-[1.1] tracking-[-1.2px] text-black-500 mb-3">Location page content coming soon</h2>
            <p className="p3 text-black-400">
              This location page is being expanded with Dubai and GCC-specific service details, local case studies, and compliance notes. In the meantime, explore the service page or book a call.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
