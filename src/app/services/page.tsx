import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Services | Technioz",
  description: "End-to-end software development services: web apps, mobile apps, AI solutions, cloud platforms, and IT consulting.",
  openGraph: {
    title: "Software Development Services - Web, Mobile, AI & Cloud | Technioz",
    description:
      "Technioz provides end-to-end software development services: custom web apps, mobile apps, AI solutions, cloud services, and IT consulting.",
    url: "https://technioz.com/services",
    images: ["/logo.webp"],
  },
  alternates: {
    canonical: "https://technioz.com/services",
  },
};

export default function Services() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Services" }]} />
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[700px]">
            <div className="flex items-center gap-2 text-black-300 p5">
              <Link href="/" className="hover:text-cobolt-500 transition-colors">Home</Link>
              <span>/</span>
              <span>Services</span>
            </div>
            <h1 className="h2 text-black-500">Comprehensive Software Development Services</h1>
            <p className="p3 text-black-400">From web and mobile applications to AI solutions and cloud services, we provide end-to-end software development services that drive business growth and digital transformation.</p>
            <Link href="/contact" className="cta-primary mt-4 w-fit">Get Started Today</Link>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceList.map((s) => (
              <Link key={s.href} href={s.href} className="bg-white-200 rounded-sm p-[32px] flex flex-col gap-[24px] hover:shadow-[0_10px_24px_rgba(29,27,22,0.12)] transition-shadow group">
                <div className="flex flex-col gap-[12px]">
                  <span className="text-[32px]">{s.icon}</span>
                  <h3 className="font-display text-[32px] leading-none tracking-[-1.6px] text-black-500">{s.title}</h3>
                  <p className="p4 text-black-400">{s.desc}</p>
                </div>
                <ul className="flex flex-col gap-[8px]">
                  {s.features.map((f) => (
                    <li key={f} className="p4 text-black-400 flex items-center gap-[8px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-cobolt-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="e2 text-cobolt-500 group-hover:underline underline-offset-4 mt-auto">Learn More</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col gap-[48px]">
          <h2 className="h4 text-black-500">Our Development Process</h2>
          <p className="p2 text-black-300 max-w-[600px]">A proven methodology that ensures successful project delivery and client satisfaction</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processItems.map((item, i) => (
              <div key={item.title} className="flex gap-[16px]">
                <span className="font-display text-[40px] leading-none text-cobolt-500/30 shrink-0">0{i + 1}</span>
                <div className="flex flex-col gap-[8px]">
                  <h3 className="font-display text-[20px] leading-none tracking-[-1px] text-black-500 font-medium">{item.title}</h3>
                  <p className="p4 text-black-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="bg-black-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col lg:flex-row lg:items-start gap-10">
          <div className="flex flex-col gap-[16px] max-w-[400px] shrink-0">
            <h2 className="h4 !text-white-200">Technologies We Use</h2>
            <p className="p3 text-black-200">Modern, proven stacks chosen for reliability, performance, and long-term maintainability.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {["React", "Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "MySQL", "PHP", "Laravel", "Yii2", "AWS", "Vercel", "Docker"].map((t) => (
              <span key={t} className="inline-flex items-center rounded-sm border border-black-400 bg-black-500 px-[16px] py-[12px] p4 text-black-200">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="flex flex-col gap-[16px] max-w-[600px]">
            <h2 className="h3 !text-white-100">Ready to Start Your Project?</h2>
            <p className="p3 text-white-100/80">Let&apos;s discuss how our comprehensive software development services can help transform your business and achieve your goals.</p>
          </div>
          <div className="flex items-center gap-[8px]">
            <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Get Free Consultation</Link>
            <Link href="/portfolio" className="cta-secondary-dark !border-white-100 !text-white-100 hover:!bg-white-100 hover:!text-cobolt-500">View Our Work</Link>
          </div>
        </div>
      </section>
    </>
  );
}

const serviceList = [
  {
    href: "/services/web-development",
    icon: "\u{1F310}",
    title: "Web Development",
    desc: "Custom web applications built with modern frameworks like React, Next.js, and Node.js. Responsive, scalable, and optimized for performance.",
    features: ["Responsive Design", "Progressive Web Apps", "E-commerce Solutions", "CMS Development"],
  },
  {
    href: "/services/mobile-development",
    icon: "\u{1F4F1}",
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile applications for iOS and Android. Built with React Native, Flutter, and native technologies.",
    features: ["iOS Development", "Android Development", "Cross-platform Apps", "App Store Optimization"],
  },
  {
    href: "/services/ai-solutions",
    icon: "\u{1F916}",
    title: "AI & Machine Learning",
    desc: "Intelligent solutions powered by artificial intelligence and machine learning. From chatbots to predictive analytics.",
    features: ["AI Chatbots", "Predictive Analytics", "Computer Vision", "Natural Language Processing"],
  },
  {
    href: "/services/cloud-services",
    icon: "\u{2601}\uFE0F",
    title: "Cloud Services",
    desc: "Scalable cloud solutions on AWS, Azure, and Google Cloud. Migration, deployment, and ongoing management services.",
    features: ["Cloud Migration", "DevOps", "Serverless Architecture", "Container Orchestration"],
  },
  {
    href: "/services/it-consulting",
    icon: "\u{1F4BC}",
    title: "IT Consulting",
    desc: "Strategic technology consulting to help you make informed decisions and optimize your IT infrastructure.",
    features: ["Technology Strategy", "Digital Transformation", "System Integration", "Performance Optimization"],
  },
];

const processItems = [
  { title: "Discovery & Analysis", desc: "We start by understanding your business goals, requirements, and challenges through detailed consultation." },
  { title: "Strategy & Planning", desc: "We develop a comprehensive strategy and project plan with clear timelines and deliverables." },
    { title: "Design & Development", desc: "Our team designs and develops your solution using best practices and proven modern technologies." },
    { title: "Testing & QA", desc: "Rigorous testing ensures your solution meets the highest standards of quality and performance." },
  { title: "Deployment & Launch", desc: "We handle the deployment process and ensure a smooth launch of your solution." },
  { title: "Support & Maintenance", desc: "Ongoing support and maintenance to ensure your solution continues to perform optimally." },
];
