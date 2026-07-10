import { PillarPage, type PillarData } from "@/components/pillar-page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security & Reliability Consulting | Compliance & Uptime | Technioz",
  description: "Security and reliability consulting. Protect APIs, secure data, meet compliance, and maintain uptime.",
  openGraph: {
    title: "Security & Reliability Consulting | Compliance & Uptime | Technioz",
    description: "Security and reliability consulting. Protect APIs, secure data, meet compliance, and maintain uptime.",
    url: "https://technioz.com/security-reliability",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Security and reliability consulting" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Security & Reliability Consulting | Compliance & Uptime | Technioz",
    description: "Security and reliability consulting. Protect APIs, secure data, meet compliance, and maintain uptime.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://technioz.com/security-reliability",
  },
};

const data: PillarData = {
  title: "Security and Reliability: A Practical Guide for Software Teams",
  description: "A practical guide to web application security, compliance and reliability. Protect APIs, secure data, meet compliance, and maintain uptime.",
  heroLabel: "Security & Reliability",
  heroIcon: "🛡️",
  sections: [
    {
      heading: "Security as a design principle, not a feature",
      content: [
        "Adding security at the end of a project is expensive and incomplete. The most secure products are built with security in mind from the first architecture decisions: who can access what, how data moves, where it is stored, and what happens when something fails.",
        "This does not mean moving slowly. It means making the right defaults easy. Strong authentication, encrypted connections, least-privilege access, input validation, and audit logging should be part of the foundation, not tickets opened after a penetration test.",
      ],
      points: [
        "Design access controls around roles and data sensitivity",
        "Encrypt data in transit and at rest by default",
        "Validate every input to prevent injection and malformed data",
        "Log access and changes for audit and incident response",
        "Run security checks in CI/CD before code is deployed",
      ],
    },
    {
      heading: "Common application security risks and how to avoid them",
      content: [
        "Most security breaches are caused by a small set of common mistakes. Understanding them makes it easier to prevent them. The OWASP Top Ten is a good starting point, but real-world security also depends on how your application is hosted, how secrets are managed, and how your team responds to incidents.",
      ],
      points: [
        "Injection attacks: use parameterized queries and input validation",
        "Broken authentication: enforce strong passwords, MFA, and session management",
        "Sensitive data exposure: encrypt and minimize what you store",
        "Insecure APIs: authenticate, authorize, and rate-limit every endpoint",
        "Vulnerable dependencies: scan libraries and patch regularly",
        "Misconfigured cloud resources: lock down storage, networks, and IAM roles",
      ],
    },
    {
      heading: "Compliance by design: HIPAA, PCI-DSS, and beyond",
      content: [
        "Compliance is not a certificate you buy. It is a set of practices that must be embedded in how you build, deploy, and operate software. Healthcare companies need HIPAA-aligned systems. Finance and ecommerce companies need PCI-DSS controls. Enterprise buyers increasingly expect SOC 2 attestation.",
        "The right approach is to identify which requirements apply early, design the system to meet them, and document the controls. Retrofitting compliance after launch usually means rebuilding parts of the application.",
      ],
      points: [
        "HIPAA: encryption, access logs, BAAs, audit trails, and data minimization",
        "PCI-DSS: tokenized payments, network segmentation, and strict access controls",
        "SOC 2: security, availability, and confidentiality controls with evidence",
        "GDPR / UAE Data Protection: consent, data subject rights, and lawful processing",
      ],
    },
    {
      heading: "Building reliable software that stays up",
      content: [
        "Reliability means your software works when users need it. That requires more than good code. It requires monitoring, redundancy, automated recovery, and a clear incident response process. Uptime is the result of systems that fail gracefully and teams that know what to do when they do fail.",
      ],
      points: [
        "Monitor application and infrastructure health in real time",
        "Use auto-scaling and load balancing to handle traffic spikes",
        "Build redundancy into databases, queues, and critical services",
        "Define runbooks and escalation paths for common incidents",
        "Test recovery procedures before you need them",
      ],
    },
    {
      heading: "API and cloud security essentials",
      content: [
        "APIs and cloud infrastructure are common attack surfaces. APIs are exposed to the internet and often carry sensitive operations. Cloud environments are powerful but easy to misconfigure. A disciplined approach to both reduces risk significantly.",
        "At Technioz, we build security into APIs with OAuth 2.0, scoped tokens, rate limiting, and request signing. On cloud infrastructure, we use private subnets, security groups, IAM least privilege, encrypted storage, and centralized logging. These practices help clients pass security reviews and keep systems resilient.",
      ],
      points: [
        "Use scoped API tokens with short expiration times",
        "Apply rate limiting and anomaly detection to public endpoints",
        "Segment networks and restrict internal service access",
        "Encrypt backups and enable point-in-time recovery",
        "Rotate secrets and use a secrets manager instead of hardcoding keys",
      ],
    },
    {
      heading: "What to do before and after a security incident",
      content: [
        "No system is perfectly secure. The difference between a minor issue and a major breach is often preparation and response speed. Having an incident response plan, contact list, and forensic logging in place makes it possible to contain and recover quickly.",
      ],
      points: [
        "Prepare: define roles, communication channels, and response steps",
        "Detect: use monitoring, alerts, and anomaly detection",
        "Contain: isolate affected systems without destroying evidence",
        "Eradicate: remove the root cause and patch vulnerabilities",
        "Recover: restore services and verify integrity before reopening access",
        "Learn: document the incident and update processes to prevent recurrence",
      ],
    },
  ],
  ctaHeading: "Build secure, reliable software from day one",
  ctaBody:
    "We help businesses design secure architecture, meet compliance requirements, and build reliable systems that stay up under pressure.",
  ctaHref: "/services/it-consulting",
  ctaText: "Explore security services",
  relatedArticles: [
    { title: "Cloud Security Best Practices for Enterprise Applications", slug: "cloud-security-best-practices-for-enterprise-applications" },
    { title: "HIPAA-Compliant Software Development: A Checklist for 2026", slug: "hipaa-compliant-software-development-checklist-2026" },
    { title: "KYC and AML Compliance in Software Development in 2026", slug: "kyc-aml-compliance-software-development-2026" },
    { title: "Custom ERP Software in Healthcare: A Complete Guide for 2026", slug: "custom-erp-software-healthcare-2026" },
    { title: "DevOps Best Practices for Growing Companies in 2026", slug: "devops-best-practices-growing-companies-2026" },
  ],
};

export default function SecurityReliabilityPillar() {
  return <PillarPage data={data} parent={{ href: "/services", label: "Services" }} parentLabel="Security & Reliability" />;
}
