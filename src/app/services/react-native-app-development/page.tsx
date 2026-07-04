import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Native App Development | Technioz",
  description: "React Native app development for iOS and Android from a single codebase. Fast, native-feeling cross-platform apps.",
  openGraph: {
    title: "React Native App Development | Cross-Platform Mobile | Technioz",
    description:
      "Technioz builds cross-platform mobile apps with React Native for iOS and Android.",
    url: "https://technioz.com/services/react-native-app-development",
    images: ["/logo.webp"],
  },
  alternates: {
    canonical: "https://technioz.com/services/react-native-app-development",
  },
};

export default function ReactNativeAppDevelopment() {
  return (
    <>
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="React Native App Development" />
            <span className="e1 text-black-300">{'\u{1F4F1}'} React Native App Development</span>
            <h1 className="h2 text-black-500">Cross-Platform Apps Without the Compromise</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              React Native lets you ship one codebase to both iOS and Android — but only if you understand the bridge, native modules, and performance traps. We build React Native apps that feel native, scale cleanly, and are easy to maintain.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>One codebase for iOS and Android with near-native performance</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Custom native modules, Expo, and performance profiling</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>App Store and Google Play submission, updates, and support</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Hire React Native Developers</Link>
              <Link href="/services/mobile-development" className="e2 text-cobolt-500">Back to mobile development →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">Why React Native Works for Many Products</h2>
            <p className="p3 text-black-400">Speed and budget matter, but only if the user experience does not suffer. We balance both.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Faster Time to Market", desc: "Ship iOS and Android together with shared business logic, UI, and state." },
              { title: "Lower Maintenance Cost", desc: "One codebase means one set of bug fixes, one CI pipeline, and one release cycle." },
              { title: "Native When Needed", desc: "We bridge to Swift or Kotlin for features React Native cannot handle well." },
              { title: "Hot Reload Productivity", desc: "Fast iteration during development so you can refine UX quickly." },
              { title: "Expo or Bare Workflow", desc: "Choose managed Expo for speed or bare workflow for full native control." },
              { title: "OTA Updates", desc: "Push JavaScript updates without waiting for full App Store review." },
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
            <h2 className="h4 text-black-500 mb-4">React Native Apps We Build</h2>
            <p className="p3 text-black-400">Products where shared code makes sense and native polish still matters.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Social Apps", desc: "Feeds, messaging, notifications, and media sharing on both platforms.", tags: ["Firebase", "Socket.io", "Media"], link: null },
              { title: "E-commerce Apps", desc: "Catalogs, carts, checkout, and order tracking with payment SDKs.", tags: ["Stripe", "Apple Pay", "Google Pay"], link: "/solutions/ecommerce" },
              { title: "On-Demand Apps", desc: "Real-time tracking, booking, ratings, and payment for marketplaces.", tags: ["Maps", "Geolocation", "Payments"], link: null },
              { title: "Health & Fitness", desc: "Wearable integrations, workout tracking, and progress dashboards.", tags: ["HealthKit", "Google Fit", "Charts"], link: "/solutions/healthcare" },
              { title: "Enterprise Tools", desc: "Internal apps, field service tools, and B2B workflows.", tags: ["Auth", "Offline", "Sync"], link: "/services/enterprise-software-development" },
              { title: "MVP Launches", desc: "Validate your mobile idea on both stores without doubling your budget.", tags: ["MVP", "Expo", "Fast Release"], link: "/services/mvp-development" },
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
            <h2 className="h4 !text-white-200 mb-4">React Native Stack We Use</h2>
            <p className="p3 text-black-200">Tools and libraries that keep cross-platform code stable and performant.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["React Native", "Expo", "TypeScript", "React Navigation", "TanStack Query", "Zustand", "Redux Toolkit", "Reanimated", "MMKV", "Firebase", "Stripe SDK", "Mapbox", "React Native Skia", "Fastlane"].map((t) => (
              <span key={t} className="inline-flex items-center rounded-sm border border-black-400 px-[16px] py-[12px] p4 text-black-200">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-12">Our React Native Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Choose the Stack", desc: "Decide Expo vs bare workflow based on your feature and native needs." },
              { title: "Shared Foundation", desc: "Set up navigation, state, theming, and API clients for both platforms." },
              { title: "Build & Optimize", desc: "Develop screens, native modules, and performance-tune animations." },
              { title: "Release & Maintain", desc: "Submit to both stores, set up CI/CD, and ship OTA updates." },
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
              { title: "Flutter App Development", desc: "Compare Google's cross-platform toolkit to React Native.", href: "/services/flutter-app-development" },
              { title: "iOS App Development", desc: "Build native iOS features or a fully native iOS companion.", href: "/services/ios-app-development" },
              { title: "Mobile App Development", desc: "Explore all native and cross-platform strategies.", href: "/services/mobile-development" },
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
            <h2 className="h3 !text-white-100 mb-4">Launch on iOS and Android Together</h2>
            <p className="p3 text-white-100/80">Tell us about your app. We&apos;ll recommend React Native, Flutter, or native based on your features and budget.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Start Your React Native Project</Link>
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
