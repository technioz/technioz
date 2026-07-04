import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Technioz",
  description:
    "Get in touch with Technioz for a free 30-minute consultation. Discuss your web, mobile, AI, or cloud project and receive a custom roadmap and quote.",
  openGraph: {
    title: "Contact Us | Technioz",
    description:
      "Get in touch with Technioz for a free 30-minute consultation. Discuss your project and receive a custom roadmap and quote.",
    url: "https://technioz.com/contact",
    images: ["/logo.webp"],
  },
  alternates: {
    canonical: "https://technioz.com/contact",
  },
};

export default function Contact() {
  return (
    <>
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
                  <Field label="First Name *" type="text" />
                  <Field label="Last Name *" type="text" />
                </div>
                <Field label="Email Address *" type="email" />
                <Field label="Phone Number" type="tel" />
                <Field label="Company Name" type="text" />
                <Select label="Service Interested In *" options={["Web Development", "Mobile App Development", "AI & Machine Learning", "Cloud Services", "Enterprise Software", "IT Consulting", "E-commerce Solutions", "Other"]} />
                <Select label="Project Budget" options={["Under $10,000", "$10,000 - $25,000", "$25,000 - $50,000", "$50,000 - $100,000", "Over $100,000"]} />
                <Select label="Project Timeline" options={["ASAP", "1-3 months", "3-6 months", "6-12 months", "Flexible"]} />
                <div className="flex flex-col gap-2">
                  <label className="p4 text-black-500">Project Description *</label>
                  <textarea rows={5} className="w-full border border-neutral-300 rounded-sm p-3 p4 text-black-500 bg-white-200 focus:outline-none focus:border-cobolt-500 resize-none" />
                </div>
                <button type="submit" className="cta-primary !px-8">Send Message</button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-8">
              <div className="bg-white-200 rounded-sm p-[32px] flex flex-col gap-5">
                <h3 className="font-display text-[24px] leading-none tracking-[-1.2px] text-black-500">Frequently Asked Questions</h3>
                {faqs.map((faq) => (
                  <div key={faq.q} className="flex flex-col gap-2">
                    <p className="p4 font-medium text-black-500">{faq.q}</p>
                    <p className="p5 text-black-400">{faq.a}</p>
                  </div>
                ))}
              </div>
              <div className="bg-cobolt-500 rounded-sm p-[32px] flex flex-col gap-[16px]">
                <h3 className="font-display text-[24px] leading-none tracking-[-1.2px] !text-white-100">Need Immediate Assistance?</h3>
                <p className="p4 text-white-100/70">For urgent inquiries or immediate support, don&apos;t hesitate to reach out directly.</p>
                <a href="mailto:info@technioz.com" className="e2 text-white-100 underline underline-offset-4 hover:text-cobolt-200 transition-colors">info@technioz.com</a>
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

function Select({ label, options }: { label: string; options: string[] }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="p4 text-black-500">{label}</label>
      <select className="w-full border border-neutral-300 rounded-sm px-3 py-2.5 p4 text-black-500 bg-white-200 focus:outline-none focus:border-cobolt-500">
        <option value="">Select...</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  );
}

const faqs = [
  { q: "How long does a typical project take?", a: "Project timelines vary based on complexity, but most projects range from 2-6 months from start to finish." },
  { q: "Do you provide ongoing support?", a: "Yes, we offer comprehensive support and maintenance packages to keep your software running smoothly." },
  { q: "Can you work with our existing team?", a: "Absolutely. We can integrate with your existing development team or work as your dedicated development partner." },
];
