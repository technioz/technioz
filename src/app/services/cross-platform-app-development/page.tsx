import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cross-Platform App Development Company | React Native, Flutter | Technioz",
  description: "Cross-platform app development company. React Native and Flutter apps for iOS and Android from one codebase.",
  openGraph: {
    title: "Cross-Platform App Development Company | React Native, Flutter | Technioz",
    description:
      "Technioz helps you choose and execute the right cross-platform mobile strategy with React Native or Flutter.",
    url: "https://technioz.com/services/cross-platform-app-development",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://technioz.com/services/cross-platform-app-development",
  },
};

export default function CrossPlatformAppDevelopment() {
  return (
    <>
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[720px]">
            <Breadcrumb label="Cross-Platform App Development" />
            <span className="e1 text-black-300">{'\u{1F4F1}'} Cross-Platform App Development</span>
            <h1 className="h2 text-black-500">Reach iOS and Android Without Building Two Apps</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              Cross-platform development is not about cutting corners — it is about matching your product&apos;s complexity to the right tooling. We help you decide between React Native and Flutter, then build a single codebase that performs on both stores.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Expert guidance on React Native vs Flutter based on your UI and feature needs</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>One codebase for iOS and Android with shared logic and native fallback paths</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Store submission, CI/CD, and ongoing maintenance for both platforms</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Plan My Cross-Platform App</Link>
              <Link href="/services/mobile-development" className="e2 text-cobolt-500">Back to mobile development →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="text-center max-w-[700px] mx-auto mb-12">
            <h2 className="h4 text-black-500 mb-4">React Native vs Flutter — We Help You Choose</h2>
            <p className="p3 text-black-400">Both are excellent. The right choice depends on your design, team, and timeline.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "React Native",
                best: "Best when your team knows React, you need web reuse, or your app relies heavily on third-party native SDKs.",
                pros: ["Large ecosystem", "Web skill reuse", "Fast OTA updates", "Strong native module support"],
                href: "/services/react-native-app-development",
              },
              {
                title: "Flutter",
                best: "Best when you want pixel-perfect custom UI, smooth animations, and identical experience across iOS and Android.",
                pros: ["Consistent rendering", "Custom animations", "Single UI codebase", "Great web support"],
                href: "/services/flutter-app-development",
              },
            ].map((s) => (
              <div key={s.title} className="bg-white-200 rounded-sm p-[32px] flex flex-col gap-[16px]">
                <h3 className="font-display text-[24px] leading-none tracking-[-1.2px] text-black-500">{s.title}</h3>
                <p className="p4 text-black-400">{s.best}</p>
                <ul className="flex flex-col gap-2">
                  {s.pros.map((p) => <li key={p} className="p4 text-black-400 flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cobolt-500 mt-2 shrink-0" />{p}</li>)}
                </ul>
                <Link href={s.href} className="e2 text-cobolt-500 mt-2">Explore {s.title} →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-12">
            <h2 className="h4 text-black-500 mb-4">When Cross-Platform Is the Right Call</h2>
            <p className="p3 text-black-400">The decision is about risk, budget, and user experience — not just cost savings.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "MVP Validation", desc: "Test your mobile idea on both stores without the budget of two native teams." },
              { title: "Tight Timelines", desc: "Launch faster with shared business logic, UI, and release processes." },
              { title: "Consistent Branding", desc: "Keep design and behavior identical across platforms." },
              { title: "Simpler Maintenance", desc: "One codebase means one regression test and one deployment pipeline." },
              { title: "Web + Mobile Reuse", desc: "Share logic between your web app and mobile app with React or Flutter Web." },
              { title: "Native Fallbacks", desc: "Use native modules or platform channels for features that need it." },
            ].map((f, i) => (
              <div key={i} className="bg-white-300 rounded-sm p-[32px]">
                <h3 className="font-display text-[18px] font-medium text-black-500 mb-2">{f.title}</h3>
                <p className="p4 text-black-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[700px] mb-12">
            <h2 className="h4 !text-white-200 mb-4">Our Cross-Platform Approach</h2>
            <p className="p3 text-black-200">A structured process that removes the guesswork from cross-platform delivery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Assess", desc: "Audit your features, design, and performance needs to recommend the right framework." },
              { title: "Architecture", desc: "Set up shared modules, state, navigation, and native integration points." },
              { title: "Build", desc: "Develop iOS and Android features in parallel with automated testing." },
              { title: "Launch", desc: "Submit to both stores, set up CI/CD, and maintain with analytics." },
            ].map((p, i) => (
              <div key={p.title} className="flex gap-[16px]">
                <span className="font-display text-[40px] leading-none text-cobolt-500/30">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-[18px] font-medium text-black-500 mb-2 !text-white-200">{p.title}</h3>
                  <p className="p4 text-black-200">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 text-black-500 mb-8">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "React Native App Development", desc: "One codebase for iOS and Android with native module support.", href: "/services/react-native-app-development" },
              { title: "Flutter App Development", desc: "Custom UI and smooth animations across mobile and web.", href: "/services/flutter-app-development" },
              { title: "Mobile App Development", desc: "Compare all native and cross-platform strategies.", href: "/services/mobile-development" },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="bg-white-300 rounded-sm p-[32px] flex flex-col gap-[12px] hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow group">
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
            <h2 className="h3 !text-white-100 mb-4">Not Sure Which Path to Take?</h2>
            <p className="p3 text-white-100/80">We will audit your requirements and recommend React Native, Flutter, or native — with honest trade-offs.</p>
          </div>
          <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Get a Free Cross-Platform Audit</Link>
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
