import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";

export const metadata: Metadata = {
  title: "About Technioz | Software Development Company",
  description: "Founded in 2024, Technioz is a new-age software company building web, mobile, AI, and cloud solutions for startups and enterprises worldwide.",
  openGraph: {
    title: "About Technioz | Software Development Company",
    description: "Meet the team behind Technioz and learn how we help businesses build scalable software.",
    url: "https://technioz.com/about",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://technioz.com/about",
  },
};

export default function About() {
  return (
      <>
        <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "About", href: "/about" }]} />
      {/* Hero */}
      <section className="bg-white-200">
        <div className="mx-auto max-w-[1440px] px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[120px] lg:pb-[100px]">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-[80px]">
            <div className="flex-1 flex flex-col gap-[24px]">
              <span className="e1 text-black-300">About Technioz</span>
              <h1 className="h2 text-black-500">Building the Future with Passion & Expertise</h1>
              <p className="p3 text-black-400 max-w-[600px]">
                Founded in 2024, Technioz is a remote-first software development company with a passionate team of engineers across logistics, e-learning, e-commerce, fintech, and custom app development. We help businesses turn ideas into reality with innovative, reliable, and scalable solutions.
              </p>
              <p className="p4 text-black-300">
                Serving clients in UAE, Oman, India, and worldwide. No physical office — we collaborate remotely and meet over video, WhatsApp, or email.
              </p>
              <div className="flex items-center gap-[8px]">
                <Link href="/contact" className="cta-primary">Work With Us</Link>
                <Link href="/portfolio" className="cta-secondary">View Our Work</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] grid md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-[16px]">
            <h2 className="h4 text-black-500">Our Mission</h2>
            <p className="p3 text-black-400">To empower businesses of all sizes with innovative, custom-built software that solves real-world challenges and accelerates growth. We are dedicated to delivering value through technology, creativity, and collaboration.</p>
          </div>
          <div className="flex flex-col gap-[16px]">
            <h2 className="h4 text-black-500">Our Vision</h2>
            <p className="p3 text-black-400">To become a trusted technology partner for businesses worldwide, recognized for our passion, expertise, and ability to deliver impactful solutions across diverse industries.</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col gap-[24px]">
          <h2 className="h4 text-black-500">Our Story</h2>
          <p className="p2 text-black-300">A new journey of innovation and collaboration</p>
          <div className="max-w-[800px] flex flex-col gap-6">
            <p className="p3 text-black-400">
              Technioz was founded in 2024 by a group of passionate technologists who wanted to make a difference. Our team brings together years of experience from various domains — logistics, e-learning, e-commerce, fintech, and custom app development — to create a company focused on delivering real value.
            </p>
            <p className="p3 text-black-400">
              We operate as a remote-first company, collaborating closely with clients across the UAE, Oman, India, and beyond. Our model keeps overhead low and communication direct — daily standups, async updates, and video calls when it matters.
            </p>
            <p className="p3 text-black-400">
              Our journey has just begun, but our commitment to quality, innovation, and client satisfaction is unwavering. We are excited to grow, learn, and build lasting relationships as we help shape the digital future.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] flex flex-col gap-[48px]">
          <h2 className="h4 text-black-500">Our Values</h2>
          <p className="p2 text-black-300 max-w-[600px]">The principles that guide our work and shape our company culture</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Passion", desc: "Our team is driven by a genuine passion for technology and problem-solving, always striving to deliver the best for our clients." },
              { title: "Expertise", desc: "We bring together experts from diverse backgrounds to craft tailored solutions." },
              { title: "Quality", desc: "We are committed to delivering high-quality, reliable, and scalable software that empowers our clients to grow." },
              { title: "Integrity", desc: "We believe in honest communication, transparency, and building lasting relationships with our clients and partners." },
            ].map((v) => (
              <div key={v.title} className="bg-white-200 rounded-sm p-[32px] flex flex-col gap-[16px]">
                <h3 className="font-display text-[24px] leading-none tracking-[-1.2px] text-black-500">{v.title}</h3>
                <p className="p4 text-black-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-black-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <h2 className="h4 !text-white-200 mb-10">Our Journey</h2>
          <p className="p2 text-black-200 mb-12 max-w-[600px]">Early milestones that reflect our commitment to excellence and innovation</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "5+", label: "Projects Shipped", sub: "Successfully completed projects in logistics, e-learning, fintech, and more" },
              { value: "98%", label: "On-Time Delivery", sub: "We keep our promises — clear timelines, daily updates, and no surprises" },
              { value: "5+", label: "Engineers On Deck", sub: "A passionate, multi-disciplinary team ready to take on new challenges" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-[16px] p-[32px] border border-black-400 rounded-sm">
                <span className="font-display text-[56px] leading-none tracking-[-2.8px] text-cobolt-300">{s.value}</span>
                <span className="font-display text-[24px] leading-none tracking-[-1.2px] text-white-200">{s.label}</span>
                <span className="p4 text-black-200">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cobolt-500">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px] text-center flex flex-col items-center gap-[24px]">
          <h2 className="h3 !text-white-100">Ready to partner with our team?</h2>
          <p className="p3 text-white-100/80 max-w-[600px]">Tell us what you are building and we will share how we have helped similar teams ship faster.</p>
          <div className="flex flex-wrap items-center justify-center gap-[8px]">
            <Link href="/contact" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90">Meet the team on a call</Link>
            <Link href="/portfolio" className="cta-secondary-dark !border-white-100 !text-white-100 hover:!bg-white-100 hover:!text-cobolt-500">View Our Portfolio</Link>
            <Link href="/case-studies" className="cta-secondary-dark !border-white-100 !text-white-100 hover:!bg-white-100 hover:!text-cobolt-500">Read case studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}