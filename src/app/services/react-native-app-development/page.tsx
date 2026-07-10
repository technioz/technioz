import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { FaqJsonLd } from "@/components/faq-jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Native Development Company | Cross-Platform Apps | Technioz",
  description: "React Native development company building cross-platform iOS and Android apps. We shipped BusPass UAE and HattaFoodHub. Book a free React Native scoping call.",
  openGraph: {
    title: "React Native Development Company | Cross-Platform Apps | Technioz",
    description: "React Native development company building cross-platform iOS and Android apps. Book a free scoping call.",
    url: "https://technioz.com/services/react-native-app-development",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://technioz.com/services/react-native-app-development",
  },
};

const faqs = [
  {
    question: "Is React Native good for my mobile app?",
    answer: "React Native works well for most business apps, marketplaces, delivery apps, and social products where you want iOS and Android from one codebase. It may not be ideal for heavy games, AR/VR, or apps that need deep platform-specific hardware access.",
  },
  {
    question: "How much does a React Native app cost?",
    answer: "React Native apps typically cost 20-35% less than separate native iOS and Android apps. Most MVPs range from $15,000 to $45,000. Use our app cost calculator or book a free scoping call for a fixed-price quote.",
  },
  {
    question: "How long does it take to build a React Native app?",
    answer: "Most React Native MVPs ship in 8-12 weeks. Standard apps with integrations take 3-5 months. We run two-week sprints with demos every fourteen days.",
  },
  {
    question: "Can you publish the app to the App Store and Google Play?",
    answer: "Yes. We handle App Store and Google Play submission, metadata, screenshots, review responses, and ongoing updates including over-the-air (OTA) patches.",
  },
  {
    question: "What if React Native cannot handle a feature we need?",
    answer: "We bridge to native Swift or Kotlin modules when React Native is not enough. This gives you the speed of shared code where possible and native performance where it matters.",
  },
  {
    question: "Do you work with GCC and Dubai-based startups?",
    answer: "Yes. We have shipped cross-platform apps for clients in the UAE and Oman, with Arabic/RTL support, local payment gateways, and GCC-aligned delivery schedules.",
  },
];

export default function ReactNativeAppDevelopment() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "React Native App Development", href: "/services/react-native-app-development" }]} />
      <FaqJsonLd items={faqs} />

      {/* Hero: Problem + Offer */}
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="React Native App Development" />
            <span className="e1 text-black-300">React Native Development Company</span>
            <h1 className="h2 text-black-500">One Codebase. Two App Stores. Zero Compromise.</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              React Native promises faster launches and lower costs — but only if your team knows where the bridge breaks, where performance hides, and when to drop into native code. We build cross-platform apps that feel native, scale cleanly, and pass App Store review.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Ship iOS and Android together from a single React Native codebase</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Native modules, performance profiling, and App Store submission handled end-to-end</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Built for Dubai and GCC with Arabic RTL, local payments, and Gulf time-zone delivery</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="https://calendly.com/technioztech/30min" className="cta-primary w-fit">Book a Free React Native Call</Link>
              <Link href="/resources/app-development-cost-calculator" className="e2 text-cobolt-500">Estimate app cost →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Empathy: the real pain */}
      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <span className="e1 text-cobolt-500 mb-3 block">Why React Native projects struggle</span>
            <h2 className="h4 text-black-500 mb-4">The Cross-Platform Trap</h2>
            <p className="p3 text-black-400">Most teams pick React Native to save money. Then they hit the same five walls.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Slow Animations", desc: "Janky lists, bad transitions, and frame drops make the app feel cheap. We profile and fix the real cause — not just the symptom." },
              { title: "Native Module Headaches", desc: "Payments, maps, push notifications, and camera features often need native bridges done right." },
              { title: "App Store Rejection", desc: "Metadata, permissions, screenshots, and review guidelines trip up first-time launches. We have done it before." },
              { title: "Code That Does Not Scale", desc: "State management, navigation, and folder structure become chaos after ten screens without discipline." },
              { title: "Two Platforms, One Deadline", desc: "iOS works. Android crashes. Or vice versa. We test both from day one." },
              { title: "No Post-Launch Plan", desc: "Launch is day one. OTA updates, analytics, and crash monitoring keep the app alive." },
            ].map((f, i) => (
              <div key={i} className="bg-white-200 rounded-sm p-[32px]">
                <h3 className="font-display text-[18px] font-medium text-black-500 mb-2">{f.title}</h3>
                <p className="p4 text-black-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution: how we build */}
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="max-w-[600px]">
              <span className="e1 text-cobolt-500 mb-3 block">Our solution</span>
              <h2 className="h4 text-black-500 mb-4">React Native Done Like a Product Team</h2>
              <p className="p3 text-black-400 mb-6">
                We treat React Native as a product decision, not just a cost shortcut. That means clean architecture, native bridges only where needed, and a release process that keeps both stores happy.
              </p>
              <ul className="flex flex-col gap-3 p4 text-black-400">
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Architecture first: navigation, state, theming, and API clients set up correctly</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Performance profiling for lists, images, and animations from sprint one</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Native modules for payments, maps, push, camera, and hardware when required</span></li>
                <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>CI/CD, App Store submission, OTA updates, and crash monitoring included</span></li>
              </ul>
            </div>
            <div className="bg-white-300 rounded-sm p-[32px]">
              <h3 className="font-display text-[20px] leading-none tracking-[-1px] text-black-500 mb-4">React Native Stack We Use</h3>
              <div className="flex flex-wrap gap-2">
                {["React Native", "Expo", "TypeScript", "React Navigation", "TanStack Query", "Zustand", "Redux Toolkit", "Reanimated", "MMKV", "Firebase", "Stripe SDK", "Mapbox", "React Native Skia", "Fastlane"].map((t) => (
                  <span key={t} className="inline-flex items-center rounded-sm border border-neutral-300 bg-white-200 px-[16px] py-[12px] p4 text-black-500">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation: proof */}
      <section className="bg-black-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-[600px]">
              <span className="e1 text-cobolt-300 mb-4 inline-block">Proof</span>
              <h2 className="h3 !text-white-200 mb-4">Built and Shipped on React Native</h2>
              <p className="p3 text-black-200 mb-6">
                We have used React Native for real products under real load. Our food delivery and transport apps serve thousands of daily users with shared code, native polish, and stores that stay approved.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {[
                  { metric: "10,000+", label: "concurrent orders handled" },
                  { metric: "iOS + Android", label: "from one codebase" },
                  { metric: "99.9%", label: "platform uptime" },
                  { metric: "40%", label: "more repeat customers" },
                ].map((s) => (
                  <div key={s.label} className="border border-black-400 rounded-sm p-[24px]">
                    <span className="font-display text-[32px] leading-none tracking-[-1.6px] text-cobolt-300">{s.metric}</span>
                    <p className="p5 text-black-200 mt-2">{s.label}</p>
                  </div>
                ))}
              </div>
              <Link href="/portfolio/food-delivery-app" className="cta-secondary-dark !border-cobolt-300 !text-cobolt-300 hover:!bg-cobolt-300 hover:!text-black-500">Read the food delivery case study</Link>
            </div>
            <div className="flex flex-col gap-6">
              <Link href="/portfolio/food-delivery-app" className="bg-white-100 rounded-sm p-[24px] flex flex-col gap-[12px] hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow group">
                <span className="text-[12px] font-mono uppercase tracking-[1px] text-cobolt-500">React Native case study</span>
                <span className="font-display text-[18px] leading-none tracking-[-0.9px] text-black-500 group-hover:text-cobolt-500 transition-colors">HattaFoodHub</span>
                <p className="p5 text-black-400">On-demand food delivery platform rebuilt to handle 10,000+ concurrent orders.</p>
                <span className="e2 text-cobolt-500">Read case study →</span>
              </Link>
              <Link href="/portfolio/alkhanjry-transport" className="bg-white-100 rounded-sm p-[24px] flex flex-col gap-[12px] hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow group">
                <span className="text-[12px] font-mono uppercase tracking-[1px] text-cobolt-500">Cross-platform booking</span>
                <span className="font-display text-[18px] leading-none tracking-[-0.9px] text-black-500 group-hover:text-cobolt-500 transition-colors">Al Khanjry Transport</span>
                <p className="p5 text-black-400">Bilingual bus booking experience used by 200K+ passengers across GCC routes.</p>
                <span className="e2 text-cobolt-500">Read case study →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-12">
            <span className="e1 text-cobolt-500 mb-3 block">Use cases</span>
            <h2 className="h4 text-black-500 mb-4">React Native Apps We Build</h2>
            <p className="p3 text-black-400">Products where shared code makes sense and native quality still matters.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Delivery Apps", desc: "Real-time tracking, rider coordination, payments, and customer notifications.", tags: ["GPS", "Payments", "Push"], link: "/portfolio/food-delivery-app" },
              { title: "E-commerce Apps", desc: "Catalogs, carts, checkout, and order tracking with local payment SDKs.", tags: ["Stripe", "Apple Pay", "Google Pay"], link: "/solutions/ecommerce" },
              { title: "Booking & Ticketing", desc: "Seat selection, schedules, digital tickets, and passenger management.", tags: ["Booking", "QR", "Payments"], link: "/portfolio/alkhanjry-transport" },
              { title: "Health & Fitness", desc: "Wearable integrations, workout tracking, and progress dashboards.", tags: ["HealthKit", "Google Fit", "Charts"], link: "/solutions/healthcare" },
              { title: "On-Demand Marketplaces", desc: "Two-sided matching, ratings, chat, and payouts for service marketplaces.", tags: ["Chat", "Ratings", "Payouts"], link: null },
              { title: "Startup MVPs", desc: "Validate your mobile idea on both stores without doubling your budget.", tags: ["MVP", "Expo", "Fast Release"], link: "/services/mvp-development" },
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

      {/* Process */}
      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-12">
            <h2 className="h4 text-black-500 mb-4">Our React Native Process</h2>
            <p className="p3 text-black-400">From stack choice to App Store approval.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Choose the Stack", desc: "Expo vs bare workflow based on your native and performance needs." },
              { title: "Shared Foundation", desc: "Navigation, state, theming, API clients, and testing setup for both platforms." },
              { title: "Build & Optimize", desc: "Screens, native modules, and performance-tuned animations." },
              { title: "Release & Maintain", desc: "Store submission, CI/CD, OTA updates, and ongoing support." },
            ].map((p, i) => (
              <div key={p.title} className="flex gap-[16px]">
                <span className="font-display text-[40px] leading-none text-cobolt-500/30">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-[18px] font-medium text-black-500 mb-2">{p.title}</h3>
                  <p className="p4 text-black-400">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[800px] mx-auto">
            <h2 className="h4 text-black-500 mb-10">React Native Development Questions</h2>
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

      {/* Final Offer */}
      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-[600px]">
            <h2 className="h3 !text-white-100 mb-4">Launch on iOS and Android Together</h2>
            <p className="p3 text-white-100/80">Tell us about your app. We will recommend React Native, Flutter, or native based on your features, budget, and timeline.</p>
          </div>
          <div className="flex flex-wrap items-center gap-[12px]">
            <Link href="https://calendly.com/technioztech/30min" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Book a Free React Native Call</Link>
            <Link href="/resources/app-development-cost-calculator" className="cta-secondary-dark !border-white-100 !text-white-100 hover:!bg-white-100 hover:!text-cobolt-500">Estimate app cost</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Breadcrumb({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 text-black-300 p5">
      <Link href="/" className="hover:text-cobolt-500">Home</Link> / <Link href="/services" className="hover:text-cobolt-500">Services</Link> / <span>{label}</span>
    </div>
  );
}
