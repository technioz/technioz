import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "iOS App Development Company | Swift, SwiftUI, App Store",
  description:
    "iOS app development company. Native iPhone and iPad apps with Swift and SwiftUI — fast, secure, App Store-ready, with Apple ecosystem integration.",
  openGraph: buildOpenGraph({
      title: "iOS App Development Company | Swift, SwiftUI, App Store",
      description: "Technioz builds native iOS apps with Swift and SwiftUI for iPhone and iPad.",
      url: "https://technioz.com/services/ios-app-development",
    }),
  alternates: {
    canonical: "https://technioz.com/services/ios-app-development",
  },
};

export default function IosAppDevelopment() {
  return (
    <>
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="iOS App Development" />
            <span className="e1 text-black-300">{'\u{1F4F1}'} iOS App Development</span>
            <h1 className="h2 text-black-500">iOS Apps That Feel Native Because They Are</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              Cross-platform tools can get you to both stores, but when experience, performance, and Apple ecosystem integration matter, native iOS development wins. We build iPhone and iPad apps with Swift and SwiftUI that users trust.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Native iOS apps with Swift, SwiftUI, and Apple&apos;s latest frameworks</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>App Store submission, TestFlight distribution, and ongoing updates</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Integration with Apple Pay, Sign in with Apple, push notifications, and widgets</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Hire iOS Developers</Link>
              <Link href="/services/mobile-development" className="e2 text-cobolt-500">Back to mobile development →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">When to Build Native iOS</h2>
            <p className="p3 text-black-400">Some products need the polish, performance, and platform access that only native development delivers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Premium User Experience", desc: "Smooth animations, native gestures, and platform-consistent UI that feels right at home on iOS." },
              { title: "Best Performance", desc: "Direct access to Apple&apos;s hardware and APIs for graphics, audio, and real-time processing." },
              { title: "Apple Ecosystem", desc: "Handoff, widgets, Apple Watch, Apple Pay, Sign in with Apple, and iCloud integration." },
              { title: "Security & Privacy", desc: "Keychain, biometric auth, App Attest, and privacy-first patterns users expect." },
              { title: "App Store Advantage", desc: "Fewer review rejections, better ASO fit, and faster access to new OS features." },
              { title: "Long-Term Maintainability", desc: "Clean Swift code, modular architecture, and dependency management that ages well." },
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
            <h2 className="h4 text-black-500 mb-4">iOS Apps We Build</h2>
            <p className="p3 text-black-400">Native apps across consumer, business, and regulated industries.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Consumer Apps", desc: "Social, lifestyle, fitness, and utility apps designed for daily engagement.", tags: ["SwiftUI", "UIKit", "Core Data"], link: null },
              { title: "E-commerce Apps", desc: "Native storefronts with Apple Pay, checkout, and personalized recommendations.", tags: ["Apple Pay", "StoreKit", "Commerce"], link: "/solutions/ecommerce" },
              { title: "Healthcare Apps", desc: "HIPAA-aware patient apps with HealthKit integration and secure data handling.", tags: ["HealthKit", "CareKit", "Security"], link: "/solutions/healthcare" },
              { title: "Finance Apps", desc: "Secure banking, wallet, and trading apps with biometric auth and encryption.", tags: ["Face ID", "Keychain", "Crypto"], link: "/solutions/finance" },
              { title: "On-Demand Apps", desc: "Real-time booking, tracking, and payment flows for service marketplaces.", tags: ["MapKit", "Push", "Payments"], link: null },
              { title: "Enterprise Apps", desc: "Internal tools, field service apps, and B2B platforms for iOS fleets.", tags: ["MDM", "UIKit", "APIs"], link: "/services/enterprise-software-development" },
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
            <h2 className="h4 !text-white-200 mb-4">iOS Technologies We Use</h2>
            <p className="p3 text-black-200">Modern Apple tooling for fast, stable, and future-ready apps.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Swift", "SwiftUI", "UIKit", "Combine", "Core Data", "CloudKit", "HealthKit", "MapKit", "Apple Pay", "Sign in with Apple", "Push Notifications", "CoreML", "TestFlight", "Xcode"].map((t) => (
              <span key={t} className="inline-flex items-center rounded-sm border border-black-400 px-[16px] py-[12px] p4 text-black-200">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-12">Our iOS Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Define & Design", desc: "Clarify user flows, wireframes, and Apple Human Interface Guidelines alignment." },
              { title: "Swift Development", desc: "Build features in Swift or SwiftUI with clean architecture and tests." },
              { title: "Test & Distribute", desc: "Unit tests, device testing, TestFlight beta, and crash monitoring." },
              { title: "Launch & Iterate", desc: "App Store submission, analytics, reviews, and ongoing updates." },
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

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-8">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Android App Development", desc: "Build the same product for Google Play with native Kotlin quality.", href: "/services/android-app-development" },
              { title: "React Native App Development", desc: "Share code across iOS and Android when speed and budget matter.", href: "/services/react-native-app-development" },
              { title: "Mobile App Development", desc: "Compare native, cross-platform, and hybrid strategies.", href: "/services/mobile-development" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="bg-white-200 rounded-sm p-[32px] flex flex-col gap-[12px] hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow group">
                <h3 className="font-display text-[20px] leading-none tracking-[-1px] text-black-500 group-hover:text-cobolt-500 transition-colors">{s.title}</h3>
                <p className="p4 text-black-400">{s.desc}</p>
                <span className="e2 text-cobolt-500 mt-2">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-[600px]">
            <h2 className="h3 !text-white-100 mb-4">Ready for a Native iOS App?</h2>
            <p className="p3 text-white-100/80">Tell us your app idea. We&apos;ll recommend native iOS or the right cross-platform approach for your goals.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Start Your iOS Project</Link>
        </div>
      </section>
    </>
  );
}

function Breadcrumb({ label }: { label: string }) {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: label }]} />
      <div className="flex items-center gap-2 text-black-300 p5">
      <Link href="/" className="hover:text-cobolt-500">Home</Link> / <Link href="/services" className="hover:text-cobolt-500">Services</Link> / <span>{label}</span>
    </div>
    </>
  );
}
