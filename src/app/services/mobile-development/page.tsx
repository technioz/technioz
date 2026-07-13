import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import type { Metadata } from "next";
import { MobileDevDiagram } from "@/components/diagrams/mobile-dev-diagram";

import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Mobile App Development Company — iOS & Android",
  description: "Native and cross-platform apps in React Native and Flutter. We ship iOS and Android apps for startups and SMBs. Free app consultation, no commitment.",
  openGraph: buildOpenGraph({
      title: "Mobile App Development Services | iOS, Android, React Native",
      description: "Technioz builds native iOS, Android, and cross-platform mobile apps with React Native and Flutter.",
      url: "https://technioz.com/services/mobile-development",
    }),
  alternates: {
    canonical: "https://technioz.com/services/mobile-development",
  },
};

export default function MobileDev() {
  const meta = { title: "Mobile App Development for iOS & Android", desc: "Launch Apps People Actually Keep Using" };
  return (
    <>
      <Hero meta={meta} />
      <PainPromise />
      <Services />
      <CaseStudyLink />
      <AppTypes />
      <Process />
      <RelatedServices />
      <CTA />
    </>
  );
}

const related = [
  { title: "iOS App Development", desc: "Swift-based iPhone and iPad apps that use the full Apple ecosystem.", href: "/services/ios-app-development" },
  { title: "Android App Development", desc: "Kotlin apps built with Material Design and Google services.", href: "/services/android-app-development" },
  { title: "React Native App Development", desc: "One codebase for iOS and Android with near-native performance.", href: "/services/react-native-app-development" },
];

function RelatedServices() {
  return (
    <section className="bg-white-300">
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
        <h2 className="h4 text-black-500 mb-8">Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((s) => (
            <Link key={s.href} href={s.href} className="bg-white-200 rounded-sm p-[32px] flex flex-col gap-[12px] hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow group">
              <h3 className="font-display text-[20px] leading-none tracking-[-1px] text-black-500 group-hover:text-cobolt-500 transition-colors">{s.title}</h3>
              <p className="p4 text-black-400">{s.desc}</p>
              <span className="e2 text-cobolt-500 mt-2">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
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

function Hero({ meta }: { meta: { title: string; desc: string } }) {
  return (
    <section className="bg-white-200">
      <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10">
          <div className="flex-1 flex flex-col gap-[24px]">
            <Breadcrumb label="Mobile Development" />
            <span className="e1 text-black-300">
              <span className="mr-2">{'\u{1F4F1}'}</span> Mobile App Development
            </span>
            <h1 className="h2 text-black-500">{meta.desc}</h1>
            <p className="p3 text-black-400 max-w-[600px]">
              Most apps are abandoned because they are slow, confusing, or solve the wrong problem. We build mobile applications that users open daily — combining intuitive design, reliable performance, and a launch-to-scale process.
            </p>
            <ul className="flex flex-col gap-2 p4 text-black-400 max-w-[600px]">
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>Native iOS & Android, React Native, and Flutter development</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>UX-first design built around retention and conversion</span></li>
              <li className="flex items-start gap-2"><span className="text-cobolt-500 mt-1">→</span><span>App store submission, ASO, and ongoing maintenance included</span></li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="cta-primary w-fit">Get a Free App Consultation</Link>
              <Link href="/web-mobile-app-development" className="e2 text-cobolt-500">Read the app development guide →</Link>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full bg-white-300 border border-neutral-300 rounded-sm p-6">
              <MobileDevDiagram />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PainPromise() {
  return (
    <section className="bg-white-300">
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
        <div className="text-center max-w-[700px] mx-auto mb-12">
          <h2 className="h4 text-black-500 mb-4">From Idea to App Store — Without the Usual Delays</h2>
          <p className="p3 text-black-400">We remove the common friction points: unclear requirements, poor UX, unstable builds, and launch-day surprises.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Strategy Before Code", desc: "We validate user needs, platform choice, and monetization model before writing a single line." },
            { title: "Native-Grade Performance", desc: "Whether native or cross-platform, we optimize animations, startup time, and battery use." },
            { title: "Security Built In", desc: "Biometric auth, encrypted storage, and secure API design from day one." },
            { title: "Scalable Architecture", desc: "Clean code, modular features, and CI/CD so your app grows without breaking." },
            { title: "User-Centric Design", desc: "Interfaces that reduce friction and increase daily active usage." },
            { title: "Store-Ready Launch", desc: "We handle submission, screenshots, metadata, and ongoing updates." },
          ].map((f, i) => (
            <div key={i} className="bg-white-200 rounded-sm p-[32px]">
              <h3 className="font-display text-[18px] font-medium text-black-500 mb-2">{f.title}</h3>
              <p className="p4 text-black-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { title: "Native iOS Apps", desc: "Swift-based iPhone and iPad apps that use the full Apple ecosystem.", tags: ["Swift", "SwiftUI", "UIKit", "Core Data"], link: "/services/ios-app-development" },
    { title: "Native Android Apps", desc: "Kotlin apps built with Material Design and Google services.", tags: ["Kotlin", "Jetpack Compose", "Room", "Firebase"], link: "/services/android-app-development" },
    { title: "React Native Apps", desc: "One codebase for iOS and Android with near-native performance.", tags: ["React Native", "Expo", "TypeScript", "Redux"], link: "/services/react-native-app-development" },
    { title: "Flutter Apps", desc: "Fast, beautiful cross-platform apps with a single Dart codebase.", tags: ["Flutter", "Dart", "Firebase", "BLoC"], link: "/services/flutter-app-development" },
    { title: "Progressive Web Apps", desc: "Web apps that feel native, with offline support and push notifications.", tags: ["PWA", "Service Workers", "React", "Next.js"], link: null },
    { title: "App Store Optimization", desc: "Keyword research, screenshots, metadata, and launch strategy.", tags: ["ASO", "App Store Connect", "Google Play Console"], link: null },
  ];

  return (
    <section className="bg-white-200">
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
        <div className="max-w-[700px] mb-12">
          <h2 className="h4 text-black-500 mb-4">Mobile Development Services</h2>
          <p className="p3 text-black-400">Choose the right approach for your audience, budget, and timeline.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
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
  );
}

function CaseStudyLink() {
  return (
    <section className="bg-white-300">
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
        <div className="max-w-[700px] mb-12">
          <h2 className="h4 text-black-500 mb-4">See it in action</h2>
          <p className="p3 text-black-400">A live mobile product used by thousands of customers every day.</p>
        </div>
        <Link href="/portfolio/food-delivery-app" className="bg-white-200 rounded-sm p-[32px] flex flex-col gap-[12px] hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow group max-w-[700px]">
          <h3 className="font-display text-[20px] leading-none tracking-[-1px] text-black-500 group-hover:text-cobolt-500 transition-colors">HattaFoodHub</h3>
          <p className="p4 text-black-400">Food delivery app used by thousands of customers — iOS, Android, and real-time dispatch.</p>
          <span className="e2 text-cobolt-500 mt-2">Read case study →</span>
        </Link>
      </div>
    </section>
  );
}

function AppTypes() {
  return (
    <section className="bg-white-300">
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
        <div className="max-w-[700px] mb-12">
          <h2 className="h4 text-black-500 mb-4">Apps We Build</h2>
          <p className="p3 text-black-400">Every vertical has different user expectations. Here are the mobile products we specialize in.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            ["E-commerce Apps", "Shopping experiences with checkout, wishlists, and order tracking.", ["Payment Gateway", "Product Catalog", "Push Notifications"]],
            ["On-Demand Apps", "Marketplaces connecting customers with providers in real time.", ["Real-time Tracking", "Payments", "Rating System"]],
            ["Healthcare Apps", "HIPAA-aware patient, telehealth, and scheduling solutions.", ["Booking", "Telemedicine", "Health Tracking"]],
            ["Finance Apps", "Secure banking, wallet, and transaction apps.", ["Biometric Auth", "Encryption", "Analytics"]],
            ["Education Apps", "Learning platforms with courses, progress, and assessments.", ["Course Player", "Progress Tracking", "Quizzes"]],
            ["Logistics Apps", "Fleet tracking, route optimization, and driver management.", ["Geolocation", "Route Optimization", "Dispatch"]],
          ].map(([title, desc, features]) => (
            <div key={title as string} className="bg-white-200 rounded-sm p-[32px] flex flex-col gap-[16px]">
              <h3 className="font-display text-[22px] leading-none tracking-[-1.1px] text-black-500">{title as string}</h3>
              <p className="p4 text-black-400">{desc as string}</p>
              <ul className="flex flex-wrap gap-2">
                {(features as string[]).map((f) => <li key={f} className="text-[12px] text-black-300 bg-black-500/5 px-2 py-1 rounded-sm">{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="bg-white-200">
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
        <h2 className="h4 text-black-500 mb-12">Our Mobile App Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Discovery & Platform Strategy", desc: "Define the audience, features, platform mix, and success metrics." },
            { title: "UX & UI Design", desc: "User flows, prototypes, and polished visuals ready for development." },
            { title: "Development & QA", desc: "Sprints, automated tests, device testing, and beta distribution." },
            { title: "Launch & Growth", desc: "App store submission, analytics setup, and iterative improvements." },
          ].map((s, i) => (
            <div key={s.title} className="flex gap-[16px]">
              <span className="font-display text-[40px] leading-none text-cobolt-500/30">0{i + 1}</span>
              <div>
                <h3 className="font-display text-[18px] font-medium text-black-500 mb-2">{s.title}</h3>
                <p className="p4 text-black-400">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="bg-cobolt-500">
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="max-w-[600px]">
          <h2 className="h3 !text-white-100 mb-4">Ready to Build a Mobile App?</h2>
          <p className="p3 text-white-100/80">Tell us your idea. We&apos;ll recommend the right platform, estimate scope, and outline next steps.</p>
        </div>
        <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Start Your App Project</Link>
      </div>
    </section>
  );
}
