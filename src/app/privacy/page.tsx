import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";

export const metadata: Metadata = {
  title: "Privacy Policy | Technioz",
  description: "Learn how Technioz collects, uses, and protects your personal data when you use our website and services.",
  openGraph: {
    title: "Privacy Policy | Technioz",
    description: "Technioz privacy policy and data protection practices.",
    url: "https://technioz.com/privacy",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://technioz.com/privacy",
  },
};

const sections = [
  {
    title: "1. Who We Are",
    content: "Technioz is a technology company based in Punjab, India. We specialize in delivering web and mobile software solutions to clients worldwide. Contact: info@technioz.com.",
  },
  {
    title: "2. Information We Collect",
    content: "We may collect the following types of personal and non-personal information: Personal Information (full name, email address, phone number, company name, billing and shipping address, IP address, browser information, device identifiers, and any other information you voluntarily provide), and Automated Information (cookies and usage data including pages visited, time spent, links clicked, log files, analytics, and error logs).",
  },
  {
    title: "3. How We Use Your Information",
    content: "We use your information for: providing and managing our services, communicating with you regarding support, updates, or promotions, customizing user experience, complying with legal obligations, analytics and website improvements, and preventing fraud and misuse.",
  },
  {
    title: "4. Legal Basis for Processing (EU GDPR)",
    content: "If you are located in the European Economic Area (EEA), our legal basis includes: your consent, performance of a contract, compliance with legal obligations, and legitimate interests such as service improvement.",
  },
  {
    title: "5. Your Rights",
    content: "Depending on your jurisdiction, you may have the right to: access, correct, update, or delete your data; withdraw consent at any time; object to or restrict processing; request data portability; and lodge a complaint with a supervisory authority. To exercise your rights, contact us at info@technioz.com.",
  },
  {
    title: "6. Cookies and Tracking Technologies",
    content: "We use cookies, beacons, tags, and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content.",
    subsections: [
      { title: "Essential Cookies", content: "These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions made by you such as setting your privacy preferences, logging in, or filling in forms." },
      { title: "Analytics Cookies", content: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services." },
      { title: "Functional Cookies", content: "These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings. They may be set by us or by third-party providers." },
      { title: "Marketing Cookies", content: "These cookies are used to deliver relevant advertisements and track campaign performance. They may be set by our advertising partners and help us show you relevant content." },
    ],
  },
  {
    title: "7. Third-Party Cookies",
    content: "We may use third-party services that set cookies on your device, including Google Analytics for website analytics, social media platforms for content sharing, and advertising networks for targeted advertising. These third-party cookies are subject to the respective privacy policies of these services.",
  },
  {
    title: "8. Data Retention",
    content: "We retain your data only as long as necessary or as required by law.",
  },
  {
    title: "9. Data Sharing and Transfers",
    content: "We do not sell your personal data. We may share your data with trusted service providers, legal authorities if required, and affiliates and business partners with safeguards. International transfers comply with SCCs or adequacy decisions where applicable.",
  },
  {
    title: "10. Children's Privacy",
    content: "We do not knowingly collect data from children under 13. If you believe your child has shared data, contact us for deletion.",
  },
  {
    title: "11. Security Measures",
    content: "We implement industry-standard measures to protect your data. However, no method of electronic storage or transmission is 100% secure.",
  },
  {
    title: "12. Third-Party Links",
    content: "Our website may link to third-party sites. We are not responsible for their content or privacy practices.",
  },
  {
    title: "13. Compliance with Indian IT Laws",
    content: "We adhere to the Information Technology Act, 2000, including implementing reasonable security practices (Rule 8, 2011 Rules), appointing a Grievance Officer, and handling Sensitive Personal Data or Information (SPDI) as per law.",
  },
  {
    title: "14. California Privacy Rights (CCPA)",
    content: "California residents have additional rights including: right to know what personal information we collect, right to request deletion, and right to opt-out of data sale (we do not sell data).",
  },
  {
    title: "15. Changes to This Privacy Policy",
    content: "We may update this policy periodically. Revisions will be posted with the new \"Last Updated\" date. Continued use of the site after changes constitutes acceptance.",
  },
  {
    title: "16. Contact Us",
    content: "If you have questions about this Privacy Policy: Technioz, Email: info@technioz.com, Website: https://technioz.com. Grievance Officer: info@technioz.com.",
  },
];

export default function Privacy() {
  return (
      <>
        <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Privacy Policy", href: "/privacy" }]} />
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[800px]">
            <div className="flex items-center gap-2 text-black-400 p5">
              <Link href="/" className="hover:text-cobolt-500 transition-colors">Home</Link>
              <span>/</span>
              <span>Privacy</span>
            </div>
            <h1 className="h2 text-black-500">Privacy Policy</h1>
            <p className="p5 text-black-400">Effective Date: June 23, 2025 · Last Updated: June 23, 2025</p>
            <p className="p3 text-black-400">At Technioz, accessible at https://technioz.com, we are committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. By accessing or using our services, you agree to the terms of this Privacy Policy.</p>
          </div>
        </div>
      </section>

      <section className="bg-white-300">
        <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[100px]">
          <div className="max-w-[800px] flex flex-col gap-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-display text-[24px] leading-[1.2] tracking-[-1.2px] text-black-500 mb-3">{s.title}</h2>
                <p className="p3 text-black-400 leading-relaxed">{s.content}</p>
                {s.subsections && (
                  <div className="flex flex-col gap-3 mt-3 ml-4">
                    {s.subsections.map((sub) => (
                      <div key={sub.title}>
                        <h3 className="p4 font-medium text-black-500">{sub.title}</h3>
                        <p className="p4 text-black-400 mt-1">{sub.content}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}