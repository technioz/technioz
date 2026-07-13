import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { FaqJsonLd } from "@/components/faq-jsonld";
import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

import { StoreAuditForm } from "./store-audit-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce Development in Dubai",
  description: "E-commerce website development in Dubai for Shopify, WooCommerce and custom stores. Arabic RTL, UAE payments, BNPL, COD, VAT. Get a free store audit.",
  openGraph: buildOpenGraph({
      title: "E-commerce Development in Dubai",
      description: "Dubai e-commerce development for Shopify, WooCommerce and custom stores. Arabic-ready, UAE payment gateways, BNPL, COD, VAT.",
      url: "https://technioz.com/ecommerce-website-development-dubai",
    }),
  alternates: {
    canonical: "https://technioz.com/ecommerce-website-development-dubai",
  },
};

const faqs = [
  {
    question: "Do you work with e-commerce clients in Dubai and the GCC?",
    answer: "Yes. We partner with UAE-based e-commerce brands and retailers across Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman. We are remote-first and collaborate over video, WhatsApp, and email.",
  },
  {
    question: "Can you build Arabic e-commerce stores?",
    answer: "Absolutely. We build Arabic-first or bilingual stores with RTL layouts, translated product data, Arabic-friendly search, and localized checkout flows.",
  },
  {
    question: "Which platform is best for UAE e-commerce?",
    answer: "It depends on your catalogue, budget, and growth plan. Shopify works well for fast D2C launches, WooCommerce suits content-heavy brands, and custom headless is best for unique B2B or marketplace models.",
  },
  {
    question: "Do you help with payment gateways and BNPL?",
    answer: "Yes. We integrate UAE payment gateways such as Telr, PayTabs, and Tap, plus BNPL providers like Tabby and Tamara, along with COD and digital wallet options.",
  },
  {
    question: "How much does a Dubai e-commerce website cost?",
    answer: "A Shopify customization typically ranges from $8,000 to $25,000. WooCommerce stores range from $10,000 to $35,000. Custom headless or multi-vendor platforms usually start around $35,000 and scale based on complexity.",
  },
  {
    question: "How long does it take to launch a UAE e-commerce store?",
    answer: "Shopify stores can launch in 4-6 weeks. WooCommerce stores typically take 6-10 weeks. Custom headless or marketplace builds range from 3-6 months depending on integrations and catalogue size.",
  },
];

export default function EcommerceWebsiteDevelopmentDubai() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Solutions", href: "/solutions" }, { name: "E-commerce", href: "/solutions/ecommerce" }, { name: "Dubai, UAE" }]} />
      <FaqJsonLd items={faqs} />
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="Dubai, UAE" />
            <span className="e1 text-cobolt-500">Dubai, UAE</span>
            <h1 className="h2 text-black-500">E-commerce Website Development Company in Dubai</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              We build UAE-ready online stores that handle Arabic browsing, local payment methods, and the volume spikes that come with Dubai&apos;s digital shopping seasons.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Shopify, WooCommerce, custom headless, and multi-vendor marketplaces</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Arabic RTL, UAE payment gateways, BNPL, COD, and VAT-inclusive pricing</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Storefronts that load fast on mobile and convert across Dubai and the GCC</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Get a free e-commerce estimate</Link>
              <Link href="/solutions/ecommerce" className="e2 text-cobolt-500">Explore e-commerce solutions →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="max-w-[700px]">
              <h2 className="h4 text-black-500 mb-4">Why Dubai E-commerce Needs a Local Approach</h2>
              <p className="p3 text-black-400 mb-6">
                The UAE is one of the most mobile-first e-commerce markets in the region. Winning stores are built around how people here actually shop, pay, and expect support.
              </p>
              <ul className="flex flex-col gap-3 p4 text-black-400">
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span><strong>Mobile-first:</strong> around 79% of UAE shopping happens on smartphones, so performance and checkout flow on small screens come first.</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span><strong>Arabic matters:</strong> roughly 60% of UAE shoppers prefer Arabic content, and a proper RTL experience builds trust and repeat visits.</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span><strong>Flexible payments:</strong> COD still accounts for 30–50% of orders but is falling as cards, digital wallets, and BNPL grow.</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span><strong>Strong logistics:</strong> fast delivery expectations mean your store must integrate cleanly with couriers, warehousing, and order-tracking systems.</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span><strong>Government digital push:</strong> UAE initiatives continue to accelerate online retail, making a compliant, scalable store a real competitive advantage.</span></li>
              </ul>
            </div>
            <div className="bg-white-200 rounded-sm p-[32px]">
              <h3 className="font-display text-[20px] leading-none tracking-[-1px] text-black-500 mb-4">E-commerce Stats That Shape Our Builds</h3>
              <div className="grid gap-4">
                {[
                  { stat: "79%", desc: "of UAE shopping sessions happen on mobile" },
                  { stat: "~60%", desc: "of UAE shoppers prefer Arabic-language experiences" },
                  { stat: "30–50%", desc: "of regional orders still use COD, though digital payments are rising fast" },
                ].map((s) => (
                  <div key={s.stat} className="flex items-start gap-4">
                    <span className="font-display text-[28px] leading-none tracking-[-1.4px] text-cobolt-500 shrink-0">{s.stat}</span>
                    <p className="p4 text-black-400">{s.desc}</p>
                  </div>
                ))}
                <p className="p5 text-black-300 mt-2">Sources: regional e-commerce research and market reports on UAE consumer behavior.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-12">
            <h2 className="h4 text-black-500 mb-4">What We Build</h2>
            <p className="p3 text-black-400">From quick-to-launch Shopify stores to custom platforms for complex catalogues, we match the platform to your business model.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Shopify Stores", desc: "Theme customization, app integrations, and checkout tuning for brands launching fast in the UAE.", tags: ["D2C", "Fashion", "Retail"], link: null },
              { title: "WooCommerce Stores", desc: "Flexible WordPress-based stores for businesses that want full ownership and plugin freedom.", tags: ["B2C", "Content", "SEO"], link: null },
              { title: "Custom / Headless Stores", desc: "React or Next.js frontends with a dedicated backend for unique catalogues, subscriptions, or B2B flows.", tags: ["Next.js", "React", "Node.js"], link: null },
              { title: "Multi-Vendor Marketplaces", desc: "Seller portals, commission logic, vendor payouts, and moderation tools for marketplace operators.", tags: ["Marketplace", "Vendor", "Payouts"], link: null },
              { title: "B2B Wholesale Portals", desc: "Tiered pricing, bulk ordering, customer-specific catalogues, and credit-limit workflows.", tags: ["B2B", "Wholesale", "ERP"], link: null },
            ].map((s) => (
              <div key={s.title} className="bg-white-300 rounded-sm p-[32px] flex flex-col gap-[16px]">
                <h3 className="font-display text-[22px] leading-none tracking-[-1.1px] text-black-500">{s.title}</h3>
                <p className="p4 text-black-400 flex-1">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => <span key={t} className="text-[12px] text-cobolt-500 font-mono uppercase tracking-[1px] bg-cobolt-500/5 px-2 py-1 rounded-sm">{t}</span>)}
                </div>
                {s.link && <Link href={s.link} className="e2 text-cobolt-500 text-sm mt-1">Learn more →</Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-12">
            <h2 className="h4 !text-white-200 mb-4">UAE-Specific E-commerce Capabilities</h2>
            <p className="p3 text-black-200">We handle the local details so your store feels native to UAE shoppers and backend teams.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Arabic RTL", desc: "Full Arabic interfaces, right-to-left layouts, and locale-aware fonts and formatting." },
              { title: "UAE Payment Gateways", desc: "Telr, PayTabs, Tap, Stripe, and other regional providers integrated cleanly." },
              { title: "BNPL Options", desc: "Tabby and Tamara buy-now-pay-later support at checkout to lift conversion." },
              { title: "Cash on Delivery", desc: "COD workflows with rider instructions, verification, and reconciliation reporting." },
              { title: "VAT-Inclusive Pricing", desc: "5% UAE VAT handling, invoice formatting, and reporting-ready exports." },
              { title: "Trade Licence Guidance", desc: "We can align technical setup with common e-commerce licence needs; formal legal advice should come from your licencing partner." },
            ].map((c, i) => (
              <div key={i} className="border border-black-400 rounded-sm p-[32px]">
                <h3 className="font-display text-[18px] font-medium text-white-200 mb-2">{c.title}</h3>
                <p className="p4 text-black-200">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-12">
            <h2 className="h4 text-black-500 mb-4">See It in Action</h2>
            <p className="p3 text-black-400">Two commerce-focused projects we have delivered for clients in the region.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/portfolio/food-delivery-app" className="bg-white-300 rounded-sm p-[24px] flex flex-col gap-[12px] hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow group">
              <span className="text-[12px] font-mono uppercase tracking-[1px] text-cobolt-500">E-commerce example</span>
              <span className="font-display text-[18px] leading-none tracking-[-0.9px] text-black-500 group-hover:text-cobolt-500 transition-colors">Food Delivery App</span>
              <p className="p5 text-black-400">On-demand ordering, payments, and logistics coordination for a delivery business.</p>
              <span className="e2 text-cobolt-500">View case study →</span>
            </Link>
            <Link href="/portfolio/sky-growers" className="bg-white-300 rounded-sm p-[24px] flex flex-col gap-[12px] hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow group">
              <span className="text-[12px] font-mono uppercase tracking-[1px] text-cobolt-500">E-commerce example</span>
              <span className="font-display text-[18px] leading-none tracking-[-0.9px] text-black-500 group-hover:text-cobolt-500 transition-colors">Sky Growers</span>
              <p className="p5 text-black-400">Agricultural e-commerce and subscription platform with order management.</p>
              <span className="e2 text-cobolt-500">View case study →</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[800px] mx-auto">
            <h2 className="h4 text-black-500 mb-10">Middle East E-commerce FAQ</h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <details key={i} className="group bg-white-300 border border-neutral-300 rounded-sm overflow-hidden">
                  <summary className="p-[24px] lg:p-[32px] cursor-pointer flex items-start justify-between gap-4 hover:text-cobolt-500 transition-colors list-none">
                    <h3 className="font-display text-[20px] leading-[1.2] tracking-[-1px] text-black-500 group-hover:text-cobolt-500 transition-colors">{faq.question}</h3>
                    <svg className="w-6 h-6 text-black-400 group-open:rotate-45 transition-transform duration-[300ms] shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </summary>
                  <div className="px-[24px] pb-[24px] lg:px-[32px] lg:pb-[32px] -mt-2">
                    <p className="p3 text-black-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-[600px]">
              <span className="e1 text-white-100/70 mb-4 inline-block">Free audit</span>
              <h2 className="h3 !text-white-100 mb-4">Get a Free E-commerce Store Audit</h2>
              <p className="p3 text-white-100/80 mb-6">
                Send us your store URL. We will review your checkout flow, mobile experience, payment setup, speed, and Arabic readiness — then send you a short prioritized action list.
              </p>
              <ul className="flex flex-col gap-2 p4 text-white-100/80">
                <li className="flex items-start gap-2"><span className="text-white-100 mt-1">→</span><span>Mobile checkout friction points</span></li>
                <li className="flex items-start gap-2"><span className="text-white-100 mt-1">→</span><span>Payment and BNPL gaps</span></li>
                <li className="flex items-start gap-2"><span className="text-white-100 mt-1">→</span><span>Page speed and SEO quick wins</span></li>
                <li className="flex items-start gap-2"><span className="text-white-100 mt-1">→</span><span>Arabic/RTL readiness check</span></li>
              </ul>
            </div>
            <div className="bg-white-100 rounded-sm p-[32px] text-black-500">
              <StoreAuditForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="max-w-[700px]">
              <h2 className="h4 text-black-500 mb-4">Local Coverage</h2>
              <p className="p3 text-black-400 mb-6">We support e-commerce projects across the UAE and the wider GCC region.</p>
              <ul className="flex flex-col gap-3 p4 text-black-400">
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Daily standups aligned to Gulf Standard Time</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Experience with UAE payment, logistics, and tax expectations</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Remote-first delivery with transparent milestones and async updates</span></li>
              </ul>
            </div>
            <div className="bg-white-200 rounded-sm p-[32px]">
              <h3 className="font-display text-[20px] leading-none tracking-[-1px] text-black-500 mb-4">Cities & Markets We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {["Dubai", "Abu Dhabi", "Sharjah", "Oman", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain"].map((c) => (
                  <span key={c} className="text-[12px] text-black-300 bg-black-500/5 px-2 py-1 rounded-sm">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-[600px]">
            <h2 className="h3 !text-white-100 mb-4">Launch a UAE-Ready E-commerce Store</h2>
            <p className="p3 text-white-100/80">Tell us your product catalogue, target market, and preferred platform. We&apos;ll send a clear estimate and roadmap.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Get a free e-commerce estimate</Link>
        </div>
      </section>
    </>
  );
}

function Breadcrumb({ label }: { label: string }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Solutions", href: "/solutions" }, { name: "E-commerce", href: "/solutions/ecommerce" }, { name: label }]} />
      <div className="flex items-center gap-2 text-black-300 p5">
        <Link href="/" className="hover:text-cobolt-500">Home</Link> / <Link href="/solutions" className="hover:text-cobolt-500">Solutions</Link> / <Link href="/solutions/ecommerce" className="hover:text-cobolt-500">E-commerce</Link> / <span>{label}</span>
      </div>
    </>
  );
}
