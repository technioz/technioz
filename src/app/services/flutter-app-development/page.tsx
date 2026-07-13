import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flutter App Development Company | Cross-Platform Apps",
  description: "Flutter app development company. Beautiful, high-performance cross-platform apps on iOS, Android, and web.",
  openGraph: buildOpenGraph({
      title: "Flutter App Development Company | Cross-Platform Apps",
      description: "Technioz builds beautiful, fast cross-platform apps with Flutter and Dart for iOS, Android, and web.",
      url: "https://technioz.com/services/flutter-app-development",
    }),
  alternates: {
    canonical: "https://technioz.com/services/flutter-app-development",
  },
};

export default function FlutterAppDevelopment() {
  return (
    <>
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="Flutter App Development" />
            <span className="e1 text-black-300">{'\u{1F3A8}'} Flutter App Development</span>
            <h1 className="h2 text-black-500">Flutter Apps That Look and Feel Premium on Every Screen</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              Flutter gives you one codebase and full control over every pixel. We use it to build fast, beautiful apps with custom animations, consistent design, and native performance on iOS, Android, and web.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Single codebase for iOS, Android, and web with custom UI</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>High-performance rendering, animations, and platform channels</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Clean Dart architecture, state management, and scalable feature modules</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Hire Flutter Developers</Link>
              <Link href="/services/mobile-development" className="e2 text-cobolt-500">Back to mobile development →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">Why Flutter Stands Out</h2>
            <p className="p3 text-black-400">When design consistency and performance matter, Flutter delivers a unified experience without native rework.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Pixel-Perfect UI", desc: "Custom widgets, animations, and themes that look identical on iOS and Android." },
              { title: "Fast Rendering", desc: "Skia-powered graphics with 60fps animations and smooth transitions." },
              { title: "One Team, One Codebase", desc: "Faster delivery and lower cost than building separate native apps." },
              { title: "Web Ready", desc: "Reuse mobile logic for admin portals, dashboards, and preview sites." },
              { title: "Native Access", desc: "Platform channels and plugins for device-specific features when needed." },
              { title: "Testable Architecture", desc: "Clean separation, dependency injection, and widget tests for confidence." },
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
            <h2 className="h4 text-black-500 mb-4">Flutter Apps We Build</h2>
            <p className="p3 text-black-400">Products where beautiful UI and shared code are both priorities.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Consumer Apps", desc: "Lifestyle, social, and entertainment apps with rich UI and animations.", tags: ["Custom UI", "Animations", "Dart"], link: null },
              { title: "E-commerce Apps", desc: "Beautiful catalogs, carts, and checkout flows for mobile and web.", tags: ["Stripe", "Shopify", "State"], link: "/solutions/ecommerce" },
              { title: "Fintech Apps", desc: "Banking, wallet, and trading interfaces with secure authentication.", tags: ["Biometric", "OAuth", "Charts"], link: "/solutions/finance" },
              { title: "Healthcare Apps", desc: "Patient engagement, scheduling, and wellness tracking with custom design.", tags: ["HealthKit", "UI", "APIs"], link: "/solutions/healthcare" },
              { title: "Enterprise Apps", desc: "Internal tools and B2B apps with consistent branding across platforms.", tags: ["BLoC", "Web", "APIs"], link: "/services/enterprise-software-development" },
              { title: "MVP Products", desc: "Validate your idea on mobile and web simultaneously from day one.", tags: ["MVP", "Fast", "Scalable"], link: "/services/mvp-development" },
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
            <h2 className="h4 !text-white-200 mb-4">Flutter Stack We Use</h2>
            <p className="p3 text-black-200">Dart ecosystem tools chosen for maintainability and performance.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Flutter", "Dart", "BLoC", "Riverpod", "GetIt", "Dio", "Hive", "Drift", "Firebase", "Stripe SDK", "GraphQL", "Flame", "Rive", "Flutter Web"].map((t) => (
              <span key={t} className="inline-flex items-center rounded-sm border border-black-400 px-[16px] py-[12px] p4 text-black-200">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-12">Our Flutter Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Design System", desc: "Define widgets, theme, animation language, and platform behavior." },
              { title: "Architecture", desc: "Set up state management, routing, dependency injection, and API layer." },
              { title: "Build", desc: "Develop features in sprints with custom widgets and platform integration." },
              { title: "Launch", desc: "Build for iOS, Android, and web; submit to stores and monitor performance." },
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
              { title: "React Native App Development", desc: "Compare the other major cross-platform approach.", href: "/services/react-native-app-development" },
              { title: "iOS App Development", desc: "Add native iOS depth or build a fully native companion.", href: "/services/ios-app-development" },
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
            <h2 className="h3 !text-white-100 mb-4">Ready for a Beautiful Cross-Platform App?</h2>
            <p className="p3 text-white-100/80">Tell us your product vision. We&apos;ll recommend Flutter or the right cross-platform path.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Start Your Flutter Project</Link>
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
