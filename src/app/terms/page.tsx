import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | Technioz",
  description: "Read the terms and conditions governing the use of the Technioz website and software development services.",
  openGraph: {
    title: "Terms and Conditions | Technioz",
    description: "Terms and conditions for using Technioz website and services.",
    url: "https://technioz.com/terms",
    images: ["/logo.webp"],
  },
  alternates: {
    canonical: "https://technioz.com/terms",
  },
};

const sections = [
  {
    title: "1. Eligibility",
    content: "You must be at least 18 years old (or the age of majority in your jurisdiction), have the legal capacity to enter into a binding agreement, and use the Website in accordance with these Terms and all applicable laws.",
  },
  {
    title: "2. Services Offered",
    content: "Technioz offers a range of digital services, including but not limited to web and mobile application development, custom software solutions, and IT consulting and support services. The features, scope, and pricing of services may vary and will be detailed in individual contracts or proposals.",
  },
  {
    title: "3. Intellectual Property",
    content: "All content on our website — including but not limited to text, graphics, logos, icons, software, and design — is the intellectual property of Technioz or our licensors. You may not reproduce, distribute, or publicly display any material without written permission. You may not reverse-engineer or misuse our software or services. Technioz and its logos are trademarks owned by Technioz. Use without permission is strictly prohibited.",
  },
  {
    title: "4. User Conduct",
    content: "You agree not to use the website or services for unlawful or harmful purposes, transmit any viruses, malware, or harmful code, infringe upon the rights of Technioz or third parties, or attempt unauthorized access to our systems or networks. Violation of these rules may result in immediate termination of your access.",
  },
  {
    title: "5. Payments and Billing",
    content: "Pricing will be outlined in your service agreement or proposal. Payment terms must be followed as agreed (e.g., upfront, milestone-based). Late payments may incur interest or suspension of services. All invoices are denominated in Indian Rupees (INR) or the mutually agreed currency.",
  },
  {
    title: "6. Refund & Cancellation Policy",
    content: "Service-based payments are non-refundable once development or delivery has commenced, unless otherwise specified in your contract. You may request a cancellation prior to the start of a project. After work begins, cancellation may incur partial charges for the time and resources spent.",
  },
  {
    title: "7. Limitation of Liability",
    content: "To the maximum extent permitted by law, Technioz is not liable for any indirect, incidental, or consequential damages. Our liability for direct damages is limited to the amount paid by you in the 3 months preceding the claim.",
  },
  {
    title: "8. Warranties and Disclaimers",
    content: "All services and content are provided \"as is\" and \"as available.\" We do not warrant that the website or services will be error-free or uninterrupted, that all bugs or defects will be corrected, or that third-party integrations will remain available or functional.",
  },
  {
    title: "9. Third-Party Links",
    content: "Our website may contain links to third-party websites. These are provided for convenience only. We do not endorse, control, or take responsibility for their content or privacy practices.",
  },
  {
    title: "10. Privacy",
    content: "Your use of the website is also governed by our Privacy Policy, which is incorporated by reference into these Terms.",
  },
  {
    title: "11. Termination",
    content: "We reserve the right to suspend or terminate your access to the website or services without prior notice if you violate these Terms or applicable laws. Upon termination, your access to services will be revoked, any outstanding payments remain due, and clauses related to IP, liability, and law will survive.",
  },
  {
    title: "12. Governing Law and Jurisdiction",
    content: "These Terms are governed by the laws of India, particularly the Information Technology Act, 2000. Disputes shall fall under the exclusive jurisdiction of the courts in Punjab, India.",
  },
  {
    title: "13. International Use",
    content: "We make no representation that our services are available in all locations. Users are responsible for compliance with local laws, including GDPR or CCPA as applicable.",
  },
  {
    title: "14. Amendments",
    content: "We may update these Terms at any time. Changes will be posted on this page with the updated date. Continued use constitutes acceptance of the new Terms.",
  },
  {
    title: "15. Contact Information",
    content: "Technioz. Email: info@technioz.com. Website: https://technioz.com. Address: Punjab, India.",
  },
];

export default function Terms() {
  return (
    <>
      <section className="bg-white-200">
        <div className="max-w-[1440px] mx-auto px-6 pt-12 pb-16 lg:px-[148px] lg:pt-[100px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px] max-w-[800px]">
            <div className="flex items-center gap-2 text-black-400 p5">
              <Link href="/" className="hover:text-cobolt-500 transition-colors">Home</Link>
              <span>/</span>
              <span>Terms</span>
            </div>
            <h1 className="h2 text-black-500">Terms and Conditions</h1>
            <p className="p5 text-black-400">Effective Date: June 23, 2025 · Last Updated: June 23, 2025</p>
            <p className="p3 text-black-400">Welcome to Technioz. These Terms and Conditions govern your access to and use of our website https://technioz.com and all services offered therein. By using our website, services, or communicating with us, you agree to be legally bound by these Terms. If you do not agree, please do not use our services.</p>
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
