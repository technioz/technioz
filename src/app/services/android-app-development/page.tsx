import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Android App Development Company | Kotlin & Jetpack",
  description: "Android app development company. Native Kotlin apps with Jetpack — performance, security, and scale on every device.",
  openGraph: buildOpenGraph({
      title: "Android App Development Company | Kotlin & Jetpack",
      description: "Technioz builds native Android apps with Kotlin and Jetpack Compose.",
      url: "https://technioz.com/services/android-app-development",
    }),
  alternates: {
    canonical: "https://technioz.com/services/android-app-development",
  },
};

export default function AndroidAppDevelopment() {
  return (
    <>
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="Android App Development" />
            <span className="e1 text-black-300">{'\u{1F4F1}'} Android App Development</span>
            <h1 className="h2 text-black-500">Android Apps That Perform on Every Device</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              Android runs on thousands of device shapes and sizes. We build Kotlin apps that handle fragmentation gracefully — fast startup, responsive layouts, and deep integration with Google services so your app works consistently everywhere.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Native Android apps with Kotlin, Jetpack Compose, and the Android SDK</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Google Play submission, in-app billing, Firebase, and Play Console optimization</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Adaptive UI, offline support, push notifications, and background services</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Hire Android Developers</Link>
              <Link href="/services/mobile-development" className="e2 text-cobolt-500">Back to mobile development →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">Why Native Android Development Still Matters</h2>
            <p className="p3 text-black-400">Google Play rewards quality. Users reward performance. Native Android delivers both.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Fragmentation Handling", desc: "Adaptive layouts, responsive design, and testing across screen sizes and OS versions." },
              { title: "Material Design", desc: "Modern, consistent UI that follows Google's guidelines and user expectations." },
              { title: "Google Services", desc: "Firebase, Maps, Analytics, Cloud Messaging, Authentication, and In-App Billing." },
              { title: "Performance", desc: "Efficient memory use, smooth scrolling, fast startup, and battery-friendly background work." },
              { title: "Security", desc: "Encrypted storage, biometric auth, SafetyNet, and secure network communication." },
              { title: "Play Store Ready", desc: "Build configuration, signing, ASO metadata, staged rollouts, and review guidance." },
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
            <h2 className="h4 text-black-500 mb-4">Android Apps We Build</h2>
            <p className="p3 text-black-400">Native Android products for consumer, business, and regulated markets.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Consumer Apps", desc: "Social, entertainment, lifestyle, and utility apps for the Play Store.", tags: ["Kotlin", "Jetpack", "Firebase"], link: null },
              { title: "E-commerce Apps", desc: "Native shopping with Google Pay, product catalogs, and order tracking.", tags: ["Google Pay", "Room", "Retrofit"], link: "/solutions/ecommerce" },
              { title: "On-Demand Apps", desc: "Delivery, ride-hailing, and service booking with real-time tracking.", tags: ["Maps", "FCM", "Payments"], link: null },
              { title: "Healthcare Apps", desc: "Patient portals, telemedicine, and secure data handling for Android.", tags: ["FHIR", "Encryption", "Security"], link: "/solutions/healthcare" },
              { title: "Finance Apps", desc: "Banking, wallet, and payment apps with biometric and tokenized security.", tags: ["Biometric", "Keystore", "OAuth"], link: "/solutions/finance" },
              { title: "Enterprise Apps", desc: "B2B tools, field service, and device management for Android fleets.", tags: ["Work Profile", "APIs", "Offline"], link: "/services/enterprise-software-development" },
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
            <h2 className="h4 !text-white-200 mb-4">Android Technologies We Use</h2>
            <p className="p3 text-black-200">Modern Google-backed tooling for stable, scalable Android apps.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Kotlin", "Jetpack Compose", "Android SDK", "Coroutines", "Flow", "Room", "Retrofit", "Koin", "Hilt", "Firebase", "Google Maps", "Google Pay", "FCM", "Crashlytics"].map((t) => (
              <span key={t} className="inline-flex items-center rounded-sm border border-black-400 px-[16px] py-[12px] p4 text-black-200">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-12">Our Android Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Discovery", desc: "Define audience, device targets, feature set, and Google service integrations." },
              { title: "Design", desc: "Material Design UI, adaptive layouts, and interaction patterns." },
              { title: "Build", desc: "Kotlin development with Jetpack, tests, and CI/CD." },
              { title: "Launch", desc: "Internal testing, Play Console release, monitoring, and updates." },
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
              { title: "iOS App Development", desc: "Build the same product for the App Store with native Swift quality.", href: "/services/ios-app-development" },
              { title: "Flutter App Development", desc: "One codebase for iOS and Android with a unified UI.", href: "/services/flutter-app-development" },
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
            <h2 className="h3 !text-white-100 mb-4">Ready for a Native Android App?</h2>
            <p className="p3 text-white-100/80">Tell us your goals. We&apos;ll recommend native Android or the right cross-platform approach.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Start Your Android Project</Link>
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
