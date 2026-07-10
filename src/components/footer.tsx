import Link from "next/link";
import { FooterBrand } from "@/components/footer-brand";

const columns = [
  {
    label: "Services",
    links: [
      { href: "/services/web-development", label: "Web Development" },
      { href: "/services/mobile-development", label: "Mobile App Development" },
      { href: "/services/ai-solutions", label: "AI Solutions" },
      { href: "/services/cloud-services", label: "Cloud Services" },
      { href: "/services/it-consulting", label: "IT Consulting" },
      { href: "/services/custom-software-development", label: "Custom Software Development" },
      { href: "/services/enterprise-software-development", label: "Enterprise Software" },
    ],
  },
  {
    label: "Specific Expertise",
    links: [
      { href: "/services/reactjs-development", label: "React.js Development" },
      { href: "/services/nextjs-development", label: "Next.js Development" },
      { href: "/services/react-native-app-development", label: "React Native Apps" },
      { href: "/services/flutter-app-development", label: "Flutter Apps" },
      { href: "/services/ai-chatbot-development", label: "AI Chatbot Development" },
      { href: "/services/ai-agent-development", label: "AI Agent Development" },
      { href: "/services/cloud-migration", label: "Cloud Migration" },
      { href: "/services/devops-services", label: "DevOps Services" },
    ],
  },
  {
    label: "Solutions",
    links: [
      { href: "/enterprise", label: "Enterprise" },
      { href: "/solutions/startups", label: "Startups" },
      { href: "/solutions/healthcare", label: "Healthcare" },
      { href: "/solutions/finance", label: "Finance" },
      { href: "/solutions/ecommerce", label: "E-commerce" },
      { href: "/solutions/education", label: "Education" },
      { href: "/solutions/logistics", label: "Logistics" },
    ],
  },
  {
    label: "Quick Links",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/contact", label: "Contact" },
      { href: "/blog", label: "Blog" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    label: "Guides & Resources",
    links: [
      { href: "/custom-software-development", label: "Custom Software Guide" },
      { href: "/ai-solutions", label: "AI Solutions Guide" },
      { href: "/cloud-devops", label: "Cloud & DevOps Guide" },
      { href: "/web-mobile-app-development", label: "Web & Mobile App Guide" },
      { href: "/industry-solutions", label: "Industry Solutions Guide" },
      { href: "/digital-transformation", label: "Digital Transformation Guide" },
      { href: "/data-apis-integrations", label: "Data, APIs & Integrations" },
      { href: "/security-reliability", label: "Security & Reliability" },
      { href: "/consulting-strategy", label: "Consulting & Strategy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-black-500">
      {/* CTA Section */}
      

      {/* Links */}
      <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-12 lg:gap-[80px] px-6 pt-12 pb-8 lg:px-[30px] lg:pt-[120px] lg:pb-[40px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 lg:gap-8 text-white-300 w-full">
          {columns.map((col) => (
            <div key={col.label} className="flex flex-col gap-[16px] lg:gap-[24px]">
              <span className="e1 opacity-80">{col.label}</span>
              <nav className="flex flex-col gap-[16px]">
                {col.links.map((link) => (
                  <Link key={link.label} href={link.href} className="p4 hover:text-cobolt-300 transition-colors whitespace-nowrap">
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between text-white-300/80 p4">
          <div className="flex flex-col gap-2">
            <span className="text-white-300/60">Contact</span>
            <a href="mailto:info@technioz.com" className="hover:text-cobolt-300 transition-colors">info@technioz.com</a>
            <a href="https://wa.me/971569451930" target="_blank" rel="noopener noreferrer" className="hover:text-cobolt-300 transition-colors">UAE/WhatsApp: +971 56 945 1930</a>
            <a href="tel:+919803683577" className="hover:text-cobolt-300 transition-colors">India: +91 98036 83577</a>
            <span className="text-white-300/60 text-sm">Remote-first team · Serving UAE, Oman, India & worldwide</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-cobolt-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-cobolt-300 transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-cobolt-300 transition-colors">Sitemap</Link>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/company/technioz" target="_blank" rel="noopener noreferrer" className="hover:text-cobolt-300 transition-colors">LinkedIn</a>
            <a href="https://github.com/technioz" target="_blank" rel="noopener noreferrer" className="hover:text-cobolt-300 transition-colors">GitHub</a>
            <a href="https://x.com/technioz" target="_blank" rel="noopener noreferrer" className="hover:text-cobolt-300 transition-colors">X/Twitter</a>
            <a href="https://www.instagram.com/technioz" target="_blank" rel="noopener noreferrer" className="hover:text-cobolt-300 transition-colors">Instagram</a>
          </div>
        </div>
        <div className="text-center text-white-300/60 p4">
          <span>&copy; {new Date().getFullYear()} Technioz. All rights reserved.</span>
        </div>
      </div>

      {/* Full-width brand mark — centered, at the very end */}
      <div className="flex justify-center pb-8 lg:pb-12">
        <FooterBrand />
      </div>
    </footer>
  );
}
