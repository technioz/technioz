import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile App Development Company Dubai | Technioz",
  description: "Mobile app development company in Dubai. Native iOS, Android, React Native, and Flutter apps for UAE and GCC businesses.",
  openGraph: {
    title: "Mobile App Development Company in Dubai | iOS, Android, React Native | Technioz",
    description:
      "Technioz builds native and cross-platform mobile apps for Dubai and GCC businesses.",
    url: "https://technioz.com/mobile-app-development-company-dubai",
    images: ["/logo.webp"],
  },
  alternates: {
    canonical: "https://technioz.com/mobile-app-development-company-dubai",
  },
};

export default function MobileAppDevelopmentCompanyDubai() {
  return (
    <>
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="Dubai, UAE" />
            <span className="e1 text-cobolt-500">Dubai, UAE</span>
            <h1 className="h2 text-black-500">Mobile App Development Company in Dubai</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              Dubai is one of the world&apos;s most competitive app markets — users expect speed, security, and local payment and language support. We design and build mobile apps that meet those expectations, whether you are launching a startup in DIFC, scaling an e-commerce brand in the UAE, or digitizing operations across the GCC.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Native iOS and Android apps, plus cross-platform React Native and Flutter solutions</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Arabic / RTL support, local payment gateways, and GCC compliance considerations</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>From concept and UX to App Store launch, analytics, and ongoing support</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Book a Free Strategy Call</Link>
              <Link href="/services/mobile-development" className="e2 text-cobolt-500">Explore mobile app development →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">Why Dubai Businesses Choose Technioz for Mobile Apps</h2>
            <p className="p3 text-black-400">We combine international engineering standards with the local context that matters in the UAE and GCC.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "GCC Market Fit", desc: "RTL layouts, bilingual interfaces, local integrations, and cultural UX patterns built in from day one." },
              { title: "Regulatory Awareness", desc: "We design with data residency, accessibility, and industry-specific compliance in mind." },
              { title: "Payment Integration", desc: "Apple Pay, Google Pay, Stripe, Telr, PayFort, and local banking gateways configured for the UAE market." },
              { title: "Rapid Prototyping", desc: "Validate ideas with clickable prototypes before committing to full native builds." },
              { title: "Scalable Architecture", desc: "Clean APIs, offline support, and push infrastructure that grows with your user base." },
              { title: "Ongoing Support", desc: "App Store management, crash monitoring, performance tuning, and feature updates after launch." },
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
            <h2 className="h4 text-black-500 mb-4">Mobile Apps We Build for Dubai & the GCC</h2>
            <p className="p3 text-black-400">Every vertical in Dubai has different user expectations. We tailor features, performance, and integrations to match.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "E-commerce & Retail", desc: "Catalogs, carts, payments, loyalty programs, and delivery tracking for UAE shoppers.", tags: ["Shopify", "Stripe", "Maps"], link: null },
              { title: "Food & Delivery", desc: "Order flow, real-time tracking, rider apps, and kitchen dashboards.", tags: ["GPS", "Payments", "Push"], link: "/portfolio/food-delivery-app" },
              { title: "Fintech & Banking", desc: "Secure wallets, transaction history, KYC workflows, and biometric authentication.", tags: ["Security", "KYC", "APIs"], link: null },
              { title: "Healthcare", desc: "Appointment booking, telemedicine, prescriptions, and patient portals.", tags: ["HIPAA-aware", "Video", "Booking"], link: null },
              { title: "Logistics & Transport", desc: "Fleet tracking, dispatch, route optimization, and driver applications.", tags: ["GPS", "Fleet", "Dispatch"], link: "/portfolio/alkhanjry-transport" },
              { title: "Real Estate", desc: "Property listings, virtual tours, mortgage calculators, and agent communication.", tags: ["Listings", "Maps", "Chat"], link: null },
            ].map((s) => (
              <div key={s.title} className="bg-white-300 rounded-sm p-[32px] flex flex-col gap-[16px]">
                <h3 className="font-display text-[22px] leading-none tracking-[-1.1px] text-black-500">{s.title}</h3>
                <p className="p4 text-black-400 flex-1">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => <span key={t} className="text-[12px] text-cobolt-500 font-mono uppercase tracking-[1px] bg-cobolt-500/5 px-2 py-1 rounded-sm">{t}</span>)}
                </div>
                {s.link && <Link href={s.link} className="e2 text-cobolt-500 text-sm mt-1">View case study →</Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-12">
            <h2 className="h4 !text-white-200 mb-4">Mobile Stack We Use in Dubai Projects</h2>
            <p className="p3 text-black-200">Modern frameworks and native tooling chosen for performance, maintainability, and app store approval.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Swift", "Kotlin", "React Native", "Flutter", "iOS", "Android", "Firebase", "AWS Amplify", "OneSignal", "Mixpanel", "Stripe", "Apple Pay", "Google Pay", "Telr", "Mapbox", "Google Maps"].map((t) => (
              <span key={t} className="inline-flex items-center rounded-sm border border-black-400 px-[16px] py-[12px] p4 text-black-200">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="max-w-[700px]">
              <h2 className="h4 text-black-500 mb-4">Built for the Dubai App Market</h2>
              <p className="p3 text-black-400 mb-6">Dubai users download fast and uninstall faster. We design apps that load quickly, handle spotty connectivity gracefully, and feel native to the region.</p>
              <ul className="flex flex-col gap-3 p4 text-black-400">
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Arabic and English interfaces with full RTL layout support</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Local payment methods and tax configuration for the UAE</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>App Store and Google Play submission, metadata, and review support</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Analytics, crash reporting, and performance monitoring configured from launch</span></li>
              </ul>
            </div>
            <div className="bg-white-300 rounded-sm p-[32px]">
              <h3 className="font-display text-[20px] leading-none tracking-[-1px] text-black-500 mb-4">Local Coverage</h3>
              <p className="p4 text-black-400 mb-4">We work with clients across the UAE and broader GCC, with project support aligned to Gulf business hours.</p>
              <div className="flex flex-wrap gap-2">
                {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Riyadh", "Jeddah", "Doha", "Kuwait City", "Manama"].map((c) => (
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
            <h2 className="h3 !text-white-100 mb-4">Start Your Mobile App in Dubai</h2>
            <p className="p3 text-white-100/80">Tell us your idea and target market. We&apos;ll recommend the right platform, timeline, and budget for Dubai.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Book a Free Strategy Call</Link>
        </div>
      </section>
    </>
  );
}

function Breadcrumb({ label }: { label: string }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Mobile App Development", href: "/services/mobile-development" }, { name: label }]} />
      <div className="flex items-center gap-2 text-black-300 p5">
        <Link href="/" className="hover:text-cobolt-500">Home</Link> / <Link href="/services" className="hover:text-cobolt-500">Services</Link> / <Link href="/services/mobile-development" className="hover:text-cobolt-500">Mobile App Development</Link> / <span>{label}</span>
      </div>
    </>
  );
}
