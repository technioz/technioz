import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";

import { buildOpenGraph, buildTwitterCard } from "@/lib/metadata-helpers";

export const metadata: Metadata = {
  title: "Contact Technioz — Free 30-Min Consultation & 48h Quote",
  description: "Tell us about your project. We reply within 24 hours with next steps and a scoping call — no commitment, NDA on request.",
  openGraph: buildOpenGraph({
      title: "Contact Us",
      description: "Get in touch with Technioz for a free 30-minute consultation. Discuss your project and receive a custom roadmap and quote.",
      url: "https://technioz.com/contact",
    }),
  alternates: {
    canonical: "https://technioz.com/contact",
  },
};

export default function Contact() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[700px]">
            <div className="flex items-center gap-2 text-black-300 p5">
              <Link href="/" className="hover:text-cobolt-500">Home</Link> / <span>Contact</span>
            </div>
            <span className="e1 text-black-300">Contact Us</span>
            <h1 className="h2 text-black-500">Let&apos;s Build Something Amazing Together</h1>
            <p className="p3 text-black-400">Ready to transform your business with innovative software solutions? Get in touch with our team for a free consultation and project quote.</p>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12">
            {/* Form */}
            <div>
              <h2 className="h4 text-black-500 mb-8">Send Us a Message</h2>
              <p className="p4 text-black-400 mb-6">Fill out the form below and we&apos;ll respond within 24 hours.</p>
              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Full Name *" type="text" />
                  <Field label="Email Address *" type="email" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Phone Number" type="tel" />
                  <Field label="Company Name" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="p4 text-black-500">What can we help you with? *</label>
                  <textarea rows={5} className="w-full border border-neutral-300 rounded-sm p-3 p4 text-black-500 bg-white-200 focus:outline-none focus:border-cobolt-500 resize-none" />
                </div>
                <button type="submit" className="cta-primary !px-8">Send Message</button>
                <p className="p5 text-black-300">We reply within 24 hours. Your information is confidential and an NDA is available on request.</p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-8">
              <div className="bg-white-200 rounded-sm p-[32px] flex flex-col gap-5">
                <h3 className="font-display text-[24px] leading-none tracking-[-1.2px] text-black-500">Contact Details</h3>
                <div className="flex flex-col gap-4">
                  <a href="mailto:info@technioz.com" className="p4 text-black-500 hover:text-cobolt-500 transition-colors underline underline-offset-4">info@technioz.com</a>
                  <a href="https://wa.me/971569451930" target="_blank" rel="noopener noreferrer" className="p4 text-black-500 hover:text-cobolt-500 transition-colors underline underline-offset-4">UAE / WhatsApp: +971 56 945 1930</a>
                  <a href="tel:+919803683577" className="p4 text-black-500 hover:text-cobolt-500 transition-colors underline underline-offset-4">India: +91 98036 83577</a>
                </div>
                <p className="p5 text-black-400">Remote-first team serving UAE, Oman, India, and clients worldwide.</p>
                <div className="flex flex-col gap-2 pt-2 border-t border-neutral-300">
                  <span className="p5 text-black-300">Quick links:</span>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/services" className="p4 text-cobolt-500 hover:underline underline-offset-4">Explore our services</Link>
                    <Link href="/portfolio" className="p4 text-cobolt-500 hover:underline underline-offset-4">See our work</Link>
                    <Link href="/faq" className="p4 text-cobolt-500 hover:underline underline-offset-4">Read FAQ</Link>
                  </div>
                </div>
              </div>
              <div className="bg-white-200 rounded-sm p-[32px] flex flex-col gap-5">
                <h3 className="font-display text-[24px] leading-none tracking-[-1.2px] text-black-500">Frequently Asked Questions</h3>
                {faqs.map((faq) => (
                  <div key={faq.q} className="flex flex-col gap-2">
                    <p className="p4 font-medium text-black-500">{faq.q}</p>
                    <p className="p5 text-black-400">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, type }: { label: string; type: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="p4 text-black-500">{label}</label>
      <input type={type} className="w-full border border-neutral-300 rounded-sm px-3 py-2.5 p4 text-black-500 bg-white-200 focus:outline-none focus:border-cobolt-500" />
    </div>
  );
}

const faqs = [
  { q: "How long does a typical project take?", a: "Project timelines vary based on complexity, but most projects range from 2-6 months from start to finish." },
  { q: "Do you provide ongoing support?", a: "Yes, we offer comprehensive support and maintenance packages to keep your software running smoothly." },
  { q: "Can you work with our existing team?", a: "Absolutely. We can integrate with your existing development team or work as your dedicated development partner." },
];
