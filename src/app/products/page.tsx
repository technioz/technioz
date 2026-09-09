import Link from "next/link";
import { products } from "@/lib/products-data";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products We Built",
  description:
    "Live products we built and run ourselves: Uplink self-hosted video calls and The Neural Journal, an autonomous AI news engine. What we build when nobody is paying us.",
  openGraph: buildOpenGraph({
    title: "Products We Built",
    description:
      "Live products built and operated by Technioz — real-time video from the terminal, an AI newspaper that writes itself.",
    url: "https://technioz.com/products",
  }),
  alternates: {
    canonical: "https://technioz.com/products",
  },
};

export default function ProductsIndex() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Products", href: "/products" }]} />
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <span className="e1 text-cobolt-500">Technioz Products</span>
            <h1 className="h2 text-black-500">Products we built and run ourselves</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              Client work proves we deliver to a spec. These prove what happens
              when there is no spec: products we designed, shipped, and operate
              around the clock — the same engineering behind everything we build
              for clients.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 pb-16 lg:px-[148px] lg:pb-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((tool) => (
              <Link
                key={tool.slug}
                href={`/products/${tool.slug}`}
                className="bg-white-300 border border-neutral-300 rounded-sm p-[32px] flex flex-col gap-[16px] hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow group"
              >
                <div className="flex flex-col gap-[12px]">
                  <span className="e2 text-cobolt-500">{tool.tagline}</span>
                  <h2 className="font-display text-[28px] leading-[1.1] tracking-[-1.4px] text-black-500 group-hover:text-cobolt-500 transition-colors">
                    {tool.name}
                  </h2>
                  <p className="p4 text-black-400">{tool.metaDescription}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {tool.techs.slice(0, 5).map((tech) => (
                    <span key={tech} className="text-[12px] text-cobolt-500 font-mono bg-cobolt-500/5 px-3 py-1.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="e2 text-cobolt-500">Explore {tool.name} →</span>
              </Link>
            ))}
          </div>

          <div className="mt-16 p-8 bg-cobolt-500/5 border border-cobolt-500/20 rounded-sm max-w-[800px]">
            <h2 className="font-display text-[24px] leading-[1.15] tracking-[-1.2px] text-black-500 mb-3">
              Need something like this for your business?
            </h2>
            <p className="p3 text-black-400 mb-6 leading-relaxed">
              Every one of these started as an engineering problem a client
              eventually pays us to solve. Bring us yours.
            </p>
            <Link href="/contact" className="cta-primary">
              Talk directly to the founder
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}