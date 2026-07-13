import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { FaqJsonLd } from "@/components/faq-jsonld";
import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

import { RoadmapForm } from "./roadmap-form";
import type { Metadata } from "next";

const faqs = [
  {
    question: "Do you work with GCC transport companies?",
    answer: "Yes. We have delivered transport platforms for clients in the UAE and Oman and work with fleet operators, bus companies, and logistics providers across Saudi Arabia, Qatar, Kuwait, and Bahrain.",
  },
  {
    question: "Can you align with UAE and Oman business hours?",
    answer: "Yes. We schedule standups, demos, and reviews during Gulf Standard Time and keep progress visible with async updates between meetings.",
  },
  {
    question: "What kind of transport software do you build?",
    answer: "We build online ticketing portals, fleet management dashboards, route optimization tools, warehouse management systems, last-mile delivery apps, and freight-matching platforms.",
  },
  {
    question: "How long does it take to digitize a transport operation?",
    answer: "Most first releases go live in 3-5 months. A phased rollout over 6-12 months is common for operators that want ticketing, fleet tracking, and warehouse tools in stages.",
  },
  {
    question: "Should we build or buy a bus ticketing system?",
    answer: "Buy if your routes are simple and your volume is low. Build when you need bilingual checkout, multi-route carts, corporate accounts, loyalty, dynamic pricing, or integration with fleet and accounting systems.",
  },
  {
    question: "Do you help with Arabic/RTL interfaces?",
    answer: "Yes. We build bilingual Arabic/English platforms with RTL layouts, localized content, and Arabic-friendly search and checkout flows for GCC passengers and staff.",
  },
];

export const metadata: Metadata = {
  title: "Transport & Logistics Software Development",
  description: "Custom transport and logistics software for GCC operators. Ticketing, fleet tracking, route optimization, and warehouse systems. See the Al Khanjry case study.",
  openGraph: buildOpenGraph({
      title: "Transport & Logistics Software Development",
      description: "Custom transport and logistics software for GCC operators. Ticketing, fleet tracking, route optimization, and warehouse systems. See the Al Khanjry case study.",
      url: "https://technioz.com/industries/transport-logistics",
    }),
  alternates: {
    canonical: "https://technioz.com/industries/transport-logistics",
  },
};

export default function TransportLogisticsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Industries", href: "/industry-solutions" }, { name: "Transport & Logistics" }]} />
      <FaqJsonLd items={faqs} />
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="GCC" />
            <span className="e1 text-cobolt-500">GCC</span>
            <h1 className="h2 text-black-500">Transport & Logistics Software Development for the GCC</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              We digitize bus operators, fleet owners, and logistics companies across the Gulf with custom software for bookings, tracking, routing, and warehouse operations.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Online ticketing, fleet management, route optimization, and warehouse systems</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Built for bilingual GCC users, mobile-first workflows, and peak-season traffic</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Remote-first delivery aligned to UAE, Oman, and GCC business hours</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Book a transport scoping call</Link>
              <Link href="/solutions/logistics" className="e2 text-cobolt-500">Explore logistics solutions →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">Problems We Solve for Transport Operators</h2>
            <p className="p3 text-black-400">Manual processes and disconnected tools slow down GCC transport businesses. We replace them with integrated platforms that scale.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Manual Bookings", desc: "Phone and counter bookings replaced with online sales, seat selection, and digital receipts." },
              { title: "No Real-Time Tracking", desc: "Live fleet visibility for dispatchers, drivers, and customers across routes and borders." },
              { title: "Disconnected Systems", desc: "Unified booking, fleet, warehouse, and accounting tools that share data automatically." },
              { title: "Peak-Season Overload", desc: "Architecture that handles holiday and event spikes without crashing or manual workarounds." },
            ].map((f, i) => (
              <div key={i} className="bg-white-200 rounded-sm p-[32px]">
                <h3 className="font-display text-[18px] font-medium text-black-500 mb-2">{f.title}</h3>
                <p className="p4 text-black-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-12">
            <h2 className="h4 text-black-500 mb-4">What We Build</h2>
            <p className="p3 text-black-400">End-to-end software for transport and logistics businesses in the Gulf region.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Online Ticketing & Booking", desc: "Web and mobile ticket sales with seat maps, schedules, promotions, and digital wallets.", tags: ["Ticketing", "Payments", "B2C"], link: null },
              { title: "Fleet Management", desc: "Vehicle tracking, maintenance schedules, driver assignments, and compliance dashboards.", tags: ["GPS", "Fleet", "Compliance"], link: null },
              { title: "Route Optimization", desc: "AI-assisted route planning that reduces fuel costs, idle time, and missed delivery windows.", tags: ["Routing", "AI", "Efficiency"], link: null },
              { title: "Warehouse Management", desc: "Inventory intake, picking, packing, and barcode-based stock control.", tags: ["WMS", "Inventory", "Barcode"], link: null },
              { title: "Last-Mile Delivery", desc: "Driver apps, delivery proof, customer notifications, and real-time ETAs.", tags: ["Delivery", "Mobile", "Tracking"], link: null },
              { title: "Freight & Load Matching", desc: "Shipper-carrier matching, load boards, quotes, and document management.", tags: ["Freight", "B2B", "Matching"], link: null },
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-[700px]">
              <span className="e1 text-black-200">Case Study</span>
              <h2 className="h4 !text-white-200 mb-4 mt-2">Al Khanjry Transport</h2>
              <p className="p3 text-black-200 mb-6">
                A bilingual Next.js booking portal for an Omani bus operator that handles intercity routes, seat selection, promotions, and real-time operations dashboards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="border border-black-400 rounded-sm p-[20px]">
                  <span className="font-display text-[24px] leading-none tracking-[-1.2px] text-cobolt-500">$1M+</span>
                  <p className="p5 text-black-200 mt-1">Online ticket sales</p>
                </div>
                <div className="border border-black-400 rounded-sm p-[20px]">
                  <span className="font-display text-[24px] leading-none tracking-[-1.2px] text-cobolt-500">150K+</span>
                  <p className="p5 text-black-200 mt-1">Bookings completed</p>
                </div>
                <div className="border border-black-400 rounded-sm p-[20px]">
                  <span className="font-display text-[24px] leading-none tracking-[-1.2px] text-cobolt-500">99.9%</span>
                  <p className="p5 text-black-200 mt-1">Uptime target</p>
                </div>
              </div>
              <Link href="/portfolio/alkhanjry-transport" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Read the case study →</Link>
            </div>
            <div className="bg-white-200 rounded-sm p-[32px]">
              <h3 className="font-display text-[20px] leading-none tracking-[-1px] text-black-500 mb-4">What the platform includes</h3>
              <ul className="flex flex-col gap-3 p4 text-black-400">
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Bilingual Arabic/English booking portal</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Seat selection, schedules, and multi-route cart</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Promo codes, loyalty, and corporate accounts</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Dispatcher dashboard and real-time reporting</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[800px] mx-auto">
            <h2 className="h4 text-black-500 mb-10">Middle East Transport FAQ</h2>
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

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-12">
            <h2 className="h4 text-black-500 mb-4">Technologies We Use</h2>
            <p className="p3 text-black-400">A modern, proven stack chosen for performance, maintainability, and the ability to scale transport platforms across the GCC.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["React", "Next.js", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker", "React Native", "Flutter"].map((t) => (
              <span key={t} className="inline-flex items-center rounded-sm border border-neutral-300 px-[16px] py-[12px] p4 text-black-400 bg-white-200">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-[640px]">
              <span className="e1 text-white-100/70">Free guide</span>
              <h2 className="h4 !text-white-100 mt-2 mb-4">Transport Digitalization Roadmap for the GCC</h2>
              <p className="p3 text-white-100/80 mb-6">
                A practical 10-page guide for fleet owners and logistics operators who want to digitize bookings, tracking, routing, and warehouse operations without wasting budget on the wrong tools.
              </p>
              <ul className="flex flex-col gap-2 p4 text-white-100/80 mb-8">
                <li className="flex items-start gap-2"><span className="text-white-100 mt-1">→</span><span>6-month phased rollout plan for GCC transport companies</span></li>
                <li className="flex items-start gap-2"><span className="text-white-100 mt-1">→</span><span>Checklist of integrations: payments, GPS, WMS, accounting</span></li>
                <li className="flex items-start gap-2"><span className="text-white-100 mt-1">→</span><span>Budget guidance and common build-vs-buy trade-offs</span></li>
              </ul>
            </div>
            <div className="bg-white-100 rounded-sm p-[32px]">
              <h3 className="font-display text-[20px] leading-none tracking-[-1px] text-black-500 mb-4">Get the free roadmap</h3>
              <RoadmapForm />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-neutral-300">
                {[
                  "Current-state audit template",
                  "Feature prioritization matrix",
                  "Integration architecture map",
                  "Vendor evaluation scorecard",
                  "Go-live readiness checklist",
                  "ROI tracking worksheet",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 p4 text-black-400">
                    <span className="text-cobolt-500 mt-1">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-[600px]">
            <h2 className="h3 !text-white-100 mb-4">Build Your Transport Platform</h2>
            <p className="p3 text-white-100/80">Tell us your fleet, routes, and operational pain points. We will propose a software plan tailored to the GCC market.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Book a transport scoping call</Link>
        </div>
      </section>
    </>
  );
}

function Breadcrumb({ label }: { label: string }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Industries", href: "/industry-solutions" }, { name: "Transport & Logistics" }]} />
      <div className="flex items-center gap-2 text-black-300 p5">
        <Link href="/" className="hover:text-cobolt-500">Home</Link> / <Link href="/industry-solutions" className="hover:text-cobolt-500">Industries</Link> / <span>{label}</span>
      </div>
    </>
  );
}
