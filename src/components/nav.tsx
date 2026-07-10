"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect, useCallback } from "react";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", subnav: "services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/resources", label: "Resources", subnav: "resources" },
  { href: "/contact", label: "Contact" },
];

type ServiceGroup = {
  title: string;
  href: string;
  links: { href: string; label: string }[];
};

const serviceGroups: ServiceGroup[] = [
  {
    title: "Web Development",
    href: "/services/web-development",
    links: [
      { href: "/services/web-development", label: "Web Development" },
      { href: "/services/reactjs-development", label: "React.js Development" },
      { href: "/services/nextjs-development", label: "Next.js Development" },
      { href: "/services/nodejs-development", label: "Node.js Development" },
      { href: "/web-app-development-company-dubai", label: "Web Development in Dubai" },
      { href: "/ecommerce-website-development-dubai", label: "E-commerce Dubai" },
    ],
  },
  {
    title: "Mobile App Development",
    href: "/services/mobile-development",
    links: [
      { href: "/services/mobile-development", label: "Mobile App Development" },
      { href: "/services/ios-app-development", label: "iOS App Development" },
      { href: "/services/android-app-development", label: "Android App Development" },
      { href: "/services/react-native-app-development", label: "React Native App Development" },
      { href: "/services/flutter-app-development", label: "Flutter App Development" },
      { href: "/services/cross-platform-app-development", label: "Cross-Platform App Development" },
      { href: "/mobile-app-development-company-dubai", label: "Mobile App Development in Dubai" },
    ],
  },
  {
    title: "Custom Software & AI",
    href: "/services/custom-software-development",
    links: [
      { href: "/services/custom-software-development", label: "Custom Software Development" },
      { href: "/services/enterprise-software-development", label: "Enterprise Software Development" },
      { href: "/services/mvp-development", label: "MVP Development" },
      { href: "/services/ai-solutions", label: "AI Solutions" },
      { href: "/services/ai-chatbot-development", label: "AI Chatbot Development" },
      { href: "/services/ai-agent-development", label: "AI Agent Development" },
      { href: "/services/rag-system-development", label: "RAG System Development" },
      { href: "/services/llm-integration", label: "LLM Integration" },
      { href: "/services/ai-workflow-automation", label: "AI Workflow Automation" },
      { href: "/software-development-company-dubai", label: "Software Development in Dubai" },
    ],
  },
  {
    title: "Cloud & Consulting",
    href: "/services/cloud-services",
    links: [
      { href: "/services/cloud-services", label: "Cloud Services" },
      { href: "/services/cloud-migration", label: "Cloud Migration" },
      { href: "/services/devops-services", label: "DevOps Services" },
      { href: "/services/aws-consulting", label: "AWS Consulting" },
      { href: "/services/it-consulting", label: "IT Consulting" },
      { href: "/services/digital-transformation-consulting", label: "Digital Transformation Consulting" },
    ],
  },
  {
    title: "Industries",
    href: "/solutions/ecommerce",
    links: [
      { href: "/solutions/ecommerce", label: "E-commerce" },
      { href: "/industries/transport-logistics", label: "Transport & Logistics" },
    ],
  },
];

const pillarLinks = [
  { href: "/custom-software-development", label: "Custom Software Guide" },
  { href: "/ai-solutions", label: "AI Solutions Guide" },
  { href: "/cloud-devops", label: "Cloud & DevOps Guide" },
  { href: "/web-mobile-app-development", label: "Web & Mobile App Guide" },
  { href: "/industry-solutions", label: "Industry Solutions Guide" },
  { href: "/digital-transformation", label: "Digital Transformation Guide" },
  { href: "/data-apis-integrations", label: "Data, APIs & Integrations Guide" },
  { href: "/security-reliability", label: "Security & Reliability Guide" },
  { href: "/consulting-strategy", label: "Consulting & Strategy Guide" },
];

const resourceLinks = [
  { href: "/resources", label: "All Resources", desc: "Guides, case studies, and engineering notes" },
  { href: "/blog", label: "Blog", desc: "Tutorials, insights, and updates" },
  { href: "/case-studies", label: "Case Studies", desc: "Real client results and project breakdowns" },
];

function Chevron() {
  return (
    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-[300ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[state=open]:rotate-90">
      <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MobileAccordion({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="group border-b border-neutral-300" data-state={open ? "open" : "closed"}>
      <button type="button" className="p3 text-black-500 py-3 hover:text-cobolt-500 transition-colors flex items-center justify-between text-left w-full" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span>{label}</span>
        <Chevron />
      </button>
      <div className={`grid transition-[grid-template-rows] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden min-h-0">
          <div className="flex flex-col gap-[20px] pb-[20px] pt-[8px]">{children}</div>
        </div>
      </div>
    </div>
  );
}

const activeClass = "text-cobolt-500";
const inactiveClass = "text-black-500 hover:text-cobolt-500";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  if (href === "/services") return pathname.startsWith("/services");
  if (href === "/resources") {
    return pathname.startsWith("/blog") ||
      pathname.startsWith("/case-studies") ||
      pathname.startsWith("/resources") ||
      pathname === "/custom-software-development" ||
      pathname === "/ai-solutions" ||
      pathname === "/cloud-devops" ||
      pathname === "/web-mobile-app-development" ||
      pathname === "/industry-solutions" ||
      pathname === "/digital-transformation" ||
      pathname === "/data-apis-integrations" ||
      pathname === "/security-reliability" ||
      pathname === "/consulting-strategy";
  }
  if (href === "/portfolio") return pathname.startsWith("/portfolio");
  return pathname === href;
}

type SubnavKey = "services" | "resources" | null;

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSubnav, setActiveSubnav] = useState<SubnavKey>(null);
  const [subnavLeft, setSubnavLeft] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLAnchorElement>(null);
  const resourcesRef = useRef<HTMLAnchorElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showSubnav = useCallback((key: SubnavKey) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    const triggerRef = key === "services" ? servicesRef : key === "resources" ? resourcesRef : null;
    if (triggerRef?.current && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const triggerRect = triggerRef.current.getBoundingClientRect();
      setSubnavLeft(triggerRect.left - navRect.left - 100);
    }
    setActiveSubnav(key);
  }, []);

  const hideSubnav = useCallback(() => {
    timeoutRef.current = setTimeout(() => setActiveSubnav(null), 150);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const linkClass = (href: string) => `p5 transition-colors whitespace-nowrap ${isActive(pathname, href) ? activeClass : inactiveClass}`;

  return (
    <>
      <div className="bg-white-200 sticky top-0 z-50"
        onMouseLeave={hideSubnav}
      >
        <nav aria-label="Primary" ref={navRef} className="max-w-[1440px] mx-auto flex items-center justify-between px-4 lg:px-[30px] h-[64px] lg:h-[82px] relative">
          <div className="flex items-center lg:gap-[28px] xl:gap-[65px]">
            <Link href="/" className="flex items-center shrink-0" aria-label="Technioz home">
              <Image
                src="/logo.webp"
                alt="Technioz"
                width={130}
                height={36}
                priority
                className="h-[28px] lg:h-[36px] w-auto nav-logo"
                unoptimized
              />
            </Link>
            <div className="hidden lg:flex items-center gap-[24px] xl:gap-[35px]">
            {navItems.map((item) =>
              item.subnav === "services" ? (
                <Link
                  key={item.href}
                  href={item.href}
                  ref={servicesRef}
                  className={`cursor-pointer ${linkClass(item.href)}`}
                  onMouseEnter={() => showSubnav("services")}
                >
                  {item.label}
                </Link>
              ) : item.subnav === "resources" ? (
                <Link
                  key={item.href}
                  href={item.href}
                  ref={resourcesRef}
                  className={`cursor-pointer ${linkClass(item.href)}`}
                  onMouseEnter={() => showSubnav("resources")}
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={linkClass(item.href)}
                  onMouseEnter={() => hideSubnav()}
                >
                  {item.label}
                </Link>
              )
            )}
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-[16px]">
            <Link href="/contact" className="cta-tertiary">Book a free strategy call</Link>
          </div>
          <div className="lg:hidden flex items-center gap-[16px]">
            <Link href="/contact" className="inline-flex items-center justify-center bg-cobolt-500 hover:bg-cobolt-300 text-white-100 rounded-[2px] px-[12px] py-[8px] font-mono text-[12px] uppercase tracking-[1.2px] transition-colors whitespace-nowrap" style={{ fontFeatureSettings: "'ss09' 1" }}>Book a call</Link>
            <button onClick={() => setMobileOpen(true)} className="text-black-500" aria-label="Open menu">
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none"><path d="M0 1.25H16M0 6.75H16" stroke="currentColor" strokeWidth="1.25" /></svg>
            </button>
          </div>
        </nav>

        {activeSubnav === "services" && (
          <ServicesSubnav
            left={subnavLeft}
            onMouseEnter={() => showSubnav("services")}
          />
        )}

        {activeSubnav === "resources" && (
          <ResourcesSubnav
            left={subnavLeft}
            onMouseEnter={() => showSubnav("resources")}
          />
        )}
      </div>

      {activeSubnav && (
        <div className="hidden lg:block fixed inset-0 z-[29] bg-black/10 backdrop-blur-md" onClick={() => setActiveSubnav(null)} />
      )}

      {mobileOpen && <MobileDrawer close={() => setMobileOpen(false)} pathname={pathname} />}
      <style jsx global>{`
        .nav-logo {
          filter: brightness(0);
        }
      `}</style>
    </>
  );
}

function ServicesSubnav({ left, onMouseEnter }: { left: number; onMouseEnter: () => void }) {
  return (
    <div
      className="hidden lg:block absolute top-full z-50 pb-[4px]"
      style={{ left: `${left}px` }}
    >
      <div className="flex items-start border border-solid rounded-b-[4px] overflow-hidden w-fit bg-white-200 border-neutral-300 shadow-[0_10px_24px_rgba(29,27,22,0.12)]" onMouseEnter={onMouseEnter}>
        <Link href="/services" className="flex flex-col gap-[40px] items-start p-[32px] border-r border-solid rounded-bl-[4px] self-stretch shrink-0 w-[260px] hover:opacity-80 transition-opacity border-neutral-300">
          <div>
            <p className="e1 text-black-300">services</p>
            <p className="p4 text-black-500">All Services</p>
          </div>
          <p className="p5 text-black-400">End-to-end software development from web and mobile apps to AI, cloud, and consulting.</p>
        </Link>
        <div className="flex items-start p-[32px] gap-[32px] self-stretch">
          {serviceGroups.map((group) => (
            <div key={group.title} className="flex flex-col gap-[16px] min-w-[190px]">
              <Link href={group.href} className="e1 text-black-300 hover:text-cobolt-500 transition-colors">
                {group.title}
              </Link>
              <div className="flex flex-col gap-[12px]">
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href} className="p4 transition-colors text-black-500 hover:text-cobolt-500">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResourcesSubnav({ left, onMouseEnter }: { left: number; onMouseEnter: () => void }) {
  return (
    <div
      className="hidden lg:block absolute top-full z-50 pb-[4px]"
      style={{ left: `${left}px` }}
    >
      <div className="flex items-start border border-solid rounded-b-[4px] overflow-hidden w-fit bg-white-200 border-neutral-300 shadow-[0_10px_24px_rgba(29,27,22,0.12)]" onMouseEnter={onMouseEnter}>
        <Link href="/resources" className="flex flex-col gap-[40px] items-start p-[32px] border-r border-solid rounded-bl-[4px] self-stretch shrink-0 w-[260px] hover:opacity-80 transition-opacity border-neutral-300">
          <div>
            <p className="e1 text-black-300">resources</p>
            <p className="p4 text-black-500">All Resources</p>
          </div>
          <p className="p5 text-black-400">Guides, case studies, and practical notes for teams building modern software.</p>
        </Link>
        <div className="flex items-start p-[32px] gap-[48px] self-stretch">
          <div className="flex flex-col gap-[16px] min-w-[220px]">
            <p className="e1 text-black-300">pillar guides</p>
            <div className="flex flex-col gap-[12px]">
              {pillarLinks.map((link) => (
                <Link key={link.href} href={link.href} className="p4 transition-colors text-black-500 hover:text-cobolt-500">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[24px] min-w-[220px]">
            <p className="e1 text-black-300">explore</p>
            {resourceLinks.slice(1).map((s) => (
              <Link key={s.href} href={s.href} className="p4 transition-colors text-black-500 hover:text-cobolt-500 flex flex-col gap-[4px]">
                <span>{s.label}</span>
                <span className="p5 text-black-300">{s.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileDrawer({ close, pathname }: { close: () => void; pathname: string }) {
  return (
    <div className="fixed inset-0 z-[100] lg:hidden">
      <div className="fixed inset-0 bg-black/25" onClick={close} />
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white-200 shadow-xl flex flex-col">
        <div className="flex justify-between items-center px-[30px] py-[24px] shrink-0">
          <Link href="/" className="flex items-center shrink-0" aria-label="Technioz home" onClick={close}>
            <Image
              src="/logo.webp"
              alt="Technioz"
              width={130}
              height={36}
              priority
              className="h-[28px] w-auto nav-logo"
              unoptimized
            />
          </Link>
          <button onClick={close} className="text-black-300">
            <span className="sr-only">Close</span>
            <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto flex flex-col px-[30px] mt-4">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            if (item.subnav === "services") {
              return (
                <MobileAccordion key={item.label} label={item.label}>
                  {serviceGroups.map((group) => (
                    <div key={group.title} className="flex flex-col gap-2 ml-2">
                      <Link href={group.href} className="p4 text-black-500 hover:text-cobolt-500 transition-colors font-medium" onClick={close}>{group.title}</Link>
                      {group.links.map((s) => (
                        <Link key={s.href} href={s.href} className="p4 text-black-400 hover:text-cobolt-500 transition-colors ml-3" onClick={close}>{s.label}</Link>
                      ))}
                    </div>
                  ))}
                </MobileAccordion>
              );
            }
            if (item.subnav === "resources") {
              return (
                <MobileAccordion key={item.label} label={item.label}>
                  <div className="flex flex-col gap-2 ml-2">
                    <span className="p4 text-black-400">Pillar guides</span>
                    {pillarLinks.map((s) => (
                      <Link key={s.href} href={s.href} className="p4 text-black-500 hover:text-cobolt-500 transition-colors ml-3" onClick={close}>{s.label}</Link>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 ml-2 mt-2">
                    <span className="p4 text-black-400">Explore</span>
                    {resourceLinks.slice(1).map((s) => (
                      <Link key={s.href} href={s.href} className="p4 text-black-500 hover:text-cobolt-500 transition-colors ml-3" onClick={close}>{s.label}</Link>
                    ))}
                  </div>
                </MobileAccordion>
              );
            }
            return (
              <Link key={item.href} href={item.href} className={`p3 py-3 border-b border-neutral-300 transition-colors ${active ? activeClass : inactiveClass}`} onClick={close}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="px-[30px] pt-8 pb-[48px] shrink-0 flex flex-col gap-3">
          <Link href="/contact" className="cta-tertiary text-center" onClick={close}>Book a free strategy call</Link>
        </div>
      </div>
    </div>
  );
}
