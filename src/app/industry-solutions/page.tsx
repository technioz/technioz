import { PillarPage, type PillarData } from "@/components/pillar-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industry-Specific Software Solutions | Transport, Healthcare, Fintech | Technioz",
  description: "Custom software solutions for transport, logistics, retail, healthcare, finance, and education. Built around real industry workflows.",
  openGraph: {
    title: "Industry-Specific Software Solutions: Transport, Retail & Beyond | Technioz",
    description:
      "How custom software solves industry-specific problems in transport, retail, logistics, healthcare, finance, and more.",
    url: "https://technioz.com/industry-solutions",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://technioz.com/industry-solutions",
  },
};

const data: PillarData = {
  title: "Industry-Specific Software Solutions: Transport, Retail & Beyond",
  description:
    "How custom software creates value in transport, retail, logistics, healthcare, and finance. Learn what industry-specific solutions look like and why domain expertise matters.",
  heroLabel: "Industry Solutions",
  heroIcon: "🏭",
  sections: [
    {
      heading: "Transport and logistics",
      content: [
        "Transport companies often struggle with fragmented booking, manual dispatch, and limited visibility into fleet performance. Custom platforms can combine online ticketing, route management, real-time tracking, payment integration, and analytics into one system.",
        "For Al Khanjry Transport, we built a digital booking and operations platform that transformed how passengers book tickets across Oman and the UAE. The result was faster bookings, lower operational costs, and a foundation for scaling across the GCC.",
      ],
    },
    {
      heading: "Retail and e-commerce",
      content: [
        "Modern retail needs more than a storefront. It needs inventory sync across channels, personalized promotions, loyalty programs, multi-vendor marketplaces, and integrations with payment and delivery providers. Custom e-commerce platforms can be shaped around the business model instead of forcing the business into a template.",
      ],
    },
    {
      heading: "Food, agriculture, and local services",
      content: [
        "Local service businesses benefit from tools that match how they actually operate. That might mean order management for a food hub, delivery scheduling for fresh produce, or customer tracking for a service fleet. The best solutions are built around the daily rhythm of the business.",
      ],
    },
    {
      heading: "Healthcare, finance, and compliance-heavy industries",
      content: [
        "In regulated industries, software must handle compliance by design. That means secure authentication, audit trails, data encryption, role-based access, and sometimes integration with government or insurer systems. Building for compliance from day one is far cheaper than retrofitting it later.",
      ],
    },
    {
      heading: "Why industry expertise matters",
      content: [
        "A generalist developer can build a login screen. Only a team that understands the industry can ask the right questions about peak loads, user roles, pricing rules, dispute handling, and local regulations. Domain knowledge turns a functional app into a competitive tool.",
        "At Technioz, we specialize in turning complex industry workflows into clean, scalable software. Our portfolio spans transport, food tech, retail, AI, and enterprise platforms. We combine technical delivery with business context so the software actually fits.",
      ],
    },
  ],
  ctaHeading: "Software built for your industry",
  ctaBody:
    "We turn complex industry workflows into clean digital products. Whether you are in transport, retail, food, logistics, or regulated sectors, we can help.",
  ctaHref: "/services/mobile-development",
  ctaText: "Explore industry solutions",
  relatedLinks: [
    { title: "Fleet management software features", href: "/blog/fleet-management-software-features-guide-2026" },
    { title: "Transport ticketing and booking systems", href: "/blog/online-ticketing-booking-systems-transport-companies-2026" },
    { title: "eCommerce app development in Dubai", href: "/blog/ecommerce-app-development-dubai-costs-features-2026" },
    { title: "Fintech app development guide", href: "/blog/fintech-app-development-payments-wallets-compliance-2026" },
  ],
};

export default function IndustrySolutionsPillar() {
  return <PillarPage data={data} parent={{ href: "/services", label: "Services" }} parentLabel="Industry Solutions" />;
}
