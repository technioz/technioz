interface BlogCardBannerConfig {
  slug: string;
  bgColor: string;
  accentColor: string;
  abstractVisual: "transport" | "microservices" | "react" | "security" | "paper-to-digital" | "custom-software" | "ai" | "cloud-devops" | "app-dev";
  keyword: string;
}

const bannerConfigs: BlogCardBannerConfig[] = [
  { slug: "how-to-choose-software-development-partner-2026", bgColor: "#1d1b16", accentColor: "#887bdd", abstractVisual: "custom-software", keyword: "Custom Software" },
  { slug: "offshore-vs-nearshore-vs-onshore-development-2026", bgColor: "#1a1a2e", accentColor: "#614fd2", abstractVisual: "custom-software", keyword: "Custom Software" },
  { slug: "in-house-vs-outsourced-software-development-2026", bgColor: "#0d1117", accentColor: "#3923c7", abstractVisual: "custom-software", keyword: "Custom Software" },
  { slug: "custom-software-development-cost-2026", bgColor: "#1a1620", accentColor: "#614fd2", abstractVisual: "custom-software", keyword: "Custom Software" },
  { slug: "rag-systems-explained", bgColor: "#121212", accentColor: "#3923c7", abstractVisual: "ai", keyword: "AI" },
  { slug: "mobile-app-development-cost-dubai-uae-saudi-arabia-2026", bgColor: "#1b1b2f", accentColor: "#7c5cbf", abstractVisual: "app-dev", keyword: "Web Mobile" },
  { slug: "web-app-development-company-dubai-2026", bgColor: "#16213e", accentColor: "#5b8def", abstractVisual: "app-dev", keyword: "Web Mobile" },
  { slug: "flutter-app-development-company-dubai-2026", bgColor: "#0f3460", accentColor: "#e94560", abstractVisual: "app-dev", keyword: "Web Mobile" },
  { slug: "mvp-development-for-startups-2026", bgColor: "#1a1a2e", accentColor: "#a855f7", abstractVisual: "custom-software", keyword: "Custom Software" },
  { slug: "common-mistakes-custom-software-development-projects", bgColor: "#111827", accentColor: "#6366f1", abstractVisual: "custom-software", keyword: "Custom Software" },
  { slug: "how-to-plan-custom-software-project-step-by-step", bgColor: "#0c0a1d", accentColor: "#8b5cf6", abstractVisual: "custom-software", keyword: "Custom Software" },
  { slug: "custom-software-vs-off-the-shelf-2026", bgColor: "#1e1b4b", accentColor: "#a78bfa", abstractVisual: "custom-software", keyword: "Custom Software" },
  { slug: "ai-chatbot-development-types-costs-best-practices-2026", bgColor: "#172554", accentColor: "#60a5fa", abstractVisual: "ai", keyword: "AI" },
  { slug: "llm-integration-business-applications-guide-2026", bgColor: "#0f172a", accentColor: "#38bdf8", abstractVisual: "ai", keyword: "AI" },
  { slug: "cloud-migration-strategy-step-by-step-guide-2026", bgColor: "#1c1917", accentColor: "#f59e0b", abstractVisual: "cloud-devops", keyword: "Cloud DevOps" },
  { slug: "cloud-cost-optimization-practical-guide-2026", bgColor: "#1a1a1a", accentColor: "#10b981", abstractVisual: "cloud-devops", keyword: "Cloud DevOps" },
  { slug: "ci-cd-pipelines-explained-benefits-implementation-2026", bgColor: "#0d1117", accentColor: "#22d3ee", abstractVisual: "cloud-devops", keyword: "Cloud DevOps" },
  { slug: "mobile-app-development-process-idea-to-launch-2026", bgColor: "#1e293b", accentColor: "#f472b6", abstractVisual: "app-dev", keyword: "Web Mobile" },
  { slug: "web-app-development-process-step-by-step-2026", bgColor: "#0f0f0f", accentColor: "#a3e635", abstractVisual: "app-dev", keyword: "Web Mobile" },
  { slug: "react-native-vs-flutter-2026-comparison", bgColor: "#1a1a2e", accentColor: "#fb923c", abstractVisual: "app-dev", keyword: "Web Mobile" },
  { slug: "fleet-management-software-features-guide-2026", bgColor: "#1d1b16", accentColor: "#887bdd", abstractVisual: "transport", keyword: "Industry" },
  { slug: "online-ticketing-booking-systems-transport-companies-2026", bgColor: "#1a1a2e", accentColor: "#614fd2", abstractVisual: "transport", keyword: "Industry" },
  { slug: "route-optimization-software-logistics-2026", bgColor: "#0d1117", accentColor: "#3923c7", abstractVisual: "transport", keyword: "Industry" },
  { slug: "telemedicine-app-development-features-compliance-costs-2026", bgColor: "#1a1620", accentColor: "#614fd2", abstractVisual: "transport", keyword: "Industry" },
  { slug: "fintech-app-development-payments-wallets-compliance-2026", bgColor: "#121212", accentColor: "#3923c7", abstractVisual: "transport", keyword: "Industry" },
  { slug: "software-maintenance-support-costs-2026", bgColor: "#1b1b2f", accentColor: "#7c5cbf", abstractVisual: "custom-software", keyword: "Custom Software" },
  { slug: "api-first-development-modern-software-2026", bgColor: "#16213e", accentColor: "#5b8def", abstractVisual: "custom-software", keyword: "Custom Software" },
  { slug: "fine-tuning-vs-prompt-engineering-2026", bgColor: "#0f3460", accentColor: "#e94560", abstractVisual: "ai", keyword: "AI" },
  { slug: "building-production-ready-ai-agents-business-2026", bgColor: "#1a1a2e", accentColor: "#a855f7", abstractVisual: "ai", keyword: "AI" },
  { slug: "ai-use-cases-different-industries-2026", bgColor: "#111827", accentColor: "#6366f1", abstractVisual: "ai", keyword: "AI" },
  { slug: "ai-cost-optimization-production-2026", bgColor: "#0c0a1d", accentColor: "#8b5cf6", abstractVisual: "ai", keyword: "AI" },
  { slug: "docker-application-deployment-beginner-to-production-2026", bgColor: "#1e1b4b", accentColor: "#a78bfa", abstractVisual: "cloud-devops", keyword: "Cloud DevOps" },
  { slug: "scaling-applications-cloud-2026", bgColor: "#172554", accentColor: "#60a5fa", abstractVisual: "cloud-devops", keyword: "Cloud DevOps" },
  { slug: "devops-best-practices-growing-companies-2026", bgColor: "#0f172a", accentColor: "#38bdf8", abstractVisual: "cloud-devops", keyword: "Cloud DevOps" },
  { slug: "progressive-web-apps-pwas-when-to-build-2026", bgColor: "#1c1917", accentColor: "#f59e0b", abstractVisual: "app-dev", keyword: "Web Mobile" },
  { slug: "app-performance-optimization-techniques-2026", bgColor: "#1a1a1a", accentColor: "#10b981", abstractVisual: "app-dev", keyword: "Web Mobile" },
  { slug: "ios-vs-android-app-development-dubai-2026", bgColor: "#0d1117", accentColor: "#22d3ee", abstractVisual: "app-dev", keyword: "Web Mobile" },
  { slug: "react-native-app-development-company-dubai-2026", bgColor: "#1e293b", accentColor: "#f472b6", abstractVisual: "app-dev", keyword: "Web Mobile" },
  { slug: "ecommerce-app-development-dubai-costs-features-2026", bgColor: "#0f0f0f", accentColor: "#a3e635", abstractVisual: "transport", keyword: "Industry" },
  { slug: "headless-commerce-development-when-and-why-2026", bgColor: "#1a1a2e", accentColor: "#fb923c", abstractVisual: "transport", keyword: "Industry" },
  { slug: "multi-vendor-marketplace-development-guide-2026", bgColor: "#1d1b16", accentColor: "#887bdd", abstractVisual: "transport", keyword: "Industry" },
  { slug: "building-custom-transport-management-platforms-2026", bgColor: "#1a1a2e", accentColor: "#614fd2", abstractVisual: "transport", keyword: "Industry" },
  { slug: "kyc-aml-compliance-software-development-2026", bgColor: "#0d1117", accentColor: "#3923c7", abstractVisual: "transport", keyword: "Industry" },
  { slug: "hipaa-compliant-software-development-checklist-2026", bgColor: "#1a1620", accentColor: "#614fd2", abstractVisual: "transport", keyword: "Industry" },
  { slug: "custom-erp-software-healthcare-2026", bgColor: "#121212", accentColor: "#3923c7", abstractVisual: "transport", keyword: "Industry" },
  { slug: "ai-agents-vs-chatbots", bgColor: "#1b1b2f", accentColor: "#7c5cbf", abstractVisual: "ai", keyword: "AI" },
  { slug: "bus-subscription-ticketing-platform-uae", bgColor: "#16213e", accentColor: "#5b8def", abstractVisual: "transport", keyword: "Case Study" },
  { slug: "how-technioz-powered-al-khanjry-transport-s-digital-transformation-in-oman", bgColor: "#0f3460", accentColor: "#e94560", abstractVisual: "transport", keyword: "Case Study" },
  { slug: "from-paper-tickets-to-digital-success-how-we-transformed-integrated-golden-lines", bgColor: "#1a1a2e", accentColor: "#a855f7", abstractVisual: "transport", keyword: "Case Study" },
  { slug: "building-scalable-microservices-with-node-js-and-docker", bgColor: "#111827", accentColor: "#6366f1", abstractVisual: "microservices", keyword: "Backend" },
  { slug: "react-19-features-every-developer-should-know", bgColor: "#0c0a1d", accentColor: "#8b5cf6", abstractVisual: "react", keyword: "Frontend" },
  { slug: "cloud-security-best-practices-for-enterprise-applications", bgColor: "#1e1b4b", accentColor: "#a78bfa", abstractVisual: "security", keyword: "Cloud Security" },
  { slug: "accessibility-in-web-design-guide-startups-2026", bgColor: "#1a1620", accentColor: "#614fd2", abstractVisual: "react", keyword: "Frontend" },
  { slug: "what-is-an-it-consultant-2026-guide", bgColor: "#0c0a1d", accentColor: "#3923c7", abstractVisual: "custom-software", keyword: "Consulting" },
];

interface BlogCardBannerProps {
  slug: string;
  category: string;
  title?: string;
  readTime?: string;
}

export function BlogCardBanner({ slug, category, title, readTime }: BlogCardBannerProps) {
  const config = bannerConfigs.find((c) => c.slug === slug) ?? bannerConfigs[0];

  return (
    <div
      className="w-full h-full relative overflow-hidden flex flex-col justify-between"
      style={{ backgroundColor: config.bgColor }}
    >
      {/* Dot texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Top: labels */}
      <div className="relative p-4 flex items-center justify-between">
        <span
          className="font-mono text-[9px] uppercase tracking-[1.2px] px-2.5 py-1 rounded-sm border"
          style={{ color: config.accentColor, borderColor: `${config.accentColor}40` }}
        >
          {category}
        </span>
        {readTime && (
          <span className="font-mono text-[9px] uppercase tracking-[1px]" style={{ color: "rgba(255,255,255,0.35)" }}>
            {readTime}
          </span>
        )}
      </div>

      {/* Middle: title text */}
      <div className="relative px-4 flex-1 flex flex-col justify-center gap-2 pb-3">
        <span className="font-mono text-[9px] uppercase tracking-[1.4px]" style={{ color: config.accentColor, opacity: 0.7 }}>
          {config.keyword}
        </span>
        {title && (
          <h3 className="font-display text-[16px] lg:text-[18px] leading-[1.15] tracking-[-0.8px] line-clamp-3" style={{ color: "rgba(255,255,255,0.9)" }}>
            {title}
          </h3>
        )}
      </div>

      {/* Bottom: abstract visual strip */}
      <div className="relative h-[40px] overflow-hidden">
        <CardAbstractVisual type={config.abstractVisual} accentColor={config.accentColor} />
      </div>
    </div>
  );
}

function CardAbstractVisual({ type, accentColor }: { type: BlogCardBannerConfig["abstractVisual"]; accentColor: string }) {
  if (type === "transport") {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 40" preserveAspectRatio="xMidYMid slice" fill="none">
        <path d="M0 25 Q 80 10, 160 18 T 320 15 T 400 20" stroke={accentColor} strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4" />
        <path d="M0 30 Q 100 15, 200 22 T 400 25" stroke={accentColor} strokeWidth="1" strokeDasharray="3 6" opacity="0.25" />
        {[60, 140, 240, 340].map((x, i) => (
          <circle key={i} cx={x} cy={[25, 18, 15, 20][i]} r="2.5" fill={accentColor} opacity="0.5" />
        ))}
      </svg>
    );
  }

  if (type === "paper-to-digital") {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 40" preserveAspectRatio="xMidYMid slice" fill="none">
        {[0, 30, 60].map((x, i) => (
          <rect key={`paper-${i}`} x={x + 20} y={10 + i * 3} width="28" height="20" rx="2" fill={accentColor} opacity={0.1 - i * 0.03} stroke={accentColor} strokeWidth="0.5" strokeOpacity="0.2" />
        ))}
        <path d="M100 20 L 130 20" stroke={accentColor} strokeWidth="1" opacity="0.3" />
        <path d="M126 16 L 130 20 L 126 24" stroke={accentColor} strokeWidth="1" opacity="0.3" fill="none" />
        {[160, 200, 240, 280, 320, 360].map((x, i) => (
          <rect key={`digital-${i}`} x={x} y={12 + (i % 2) * 6} width="28" height="12" rx="2" fill={accentColor} opacity={0.06 + (i / 18)} />
        ))}
      </svg>
    );
  }

  if (type === "microservices") {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 40" preserveAspectRatio="xMidYMid slice" fill="none">
        <rect x="160" y="8" width="80" height="14" rx="2" fill={accentColor} opacity="0.15" />
        <text x="200" y="18" textAnchor="middle" fontSize="6" fill={accentColor} opacity="0.5" fontFamily="monospace">API Gateway</text>
        {[40, 90, 140, 260, 310, 360].map((x, i) => (
          <g key={i}>
            <rect x={x - 18} y={22} width="36" height="14" rx="2" fill={accentColor} opacity={0.08 + (i % 2) * 0.04} stroke={accentColor} strokeWidth="0.5" strokeOpacity="0.2" />
            <line x1={x} y1="14" x2="200" y2="14" stroke={accentColor} strokeWidth="0.5" opacity="0.15" strokeDasharray="2 3" />
          </g>
        ))}
      </svg>
    );
  }

  if (type === "react") {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 40" preserveAspectRatio="xMidYMid slice" fill="none">
        <g transform="translate(200, 20)">
          <ellipse cx="0" cy="0" rx="28" ry="10" fill="none" stroke={accentColor} strokeWidth="1" opacity="0.4" />
          <ellipse cx="0" cy="0" rx="28" ry="10" fill="none" stroke={accentColor} strokeWidth="1" opacity="0.3" transform="rotate(60)" />
          <ellipse cx="0" cy="0" rx="28" ry="10" fill="none" stroke={accentColor} strokeWidth="1" opacity="0.2" transform="rotate(120)" />
          <circle cx="0" cy="0" r="2.5" fill={accentColor} opacity="0.5" />
        </g>
        {[50, 80, 110].map((x, i) => (
          <rect key={`left-${i}`} x={x} y={5 + i * 8} width="18" height="7" rx="1" fill={accentColor} opacity={0.08} />
        ))}
        {[290, 320, 350].map((x, i) => (
          <text key={`right-${i}`} x={x} y={15 + (i % 2) * 12} fontSize="7" fill={accentColor} opacity="0.2" fontFamily="monospace">use()</text>
        ))}
      </svg>
    );
  }

  if (type === "security") {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 40" preserveAspectRatio="xMidYMid slice" fill="none">
        <path d="M180 5 L 220 5 L 220 22 Q 220 35, 200 38 Q 180 35, 180 22 Z" fill={accentColor} opacity="0.08" stroke={accentColor} strokeWidth="1" strokeOpacity="0.3" />
        <rect x="192" y="16" width="16" height="10" rx="1" fill="none" stroke={accentColor} strokeWidth="1" opacity="0.4" />
        <path d="M195 16 V 13 Q 195 10, 200 10 Q 205 10, 205 13 V 16" fill="none" stroke={accentColor} strokeWidth="1" opacity="0.4" />
        {[40, 70, 100, 130].map((x, i) => (
          <rect key={`enc-${i}`} x={x} y={10 + (i % 2) * 8} width="18" height="8" rx="1" fill={accentColor} opacity={0.04 + (i * 0.01)} />
        ))}
        {[260, 290, 320, 350, 380].map((x, i) => (
          <line key={`fw-${i}`} x1={x} y1={5} x2={x} y2={35} stroke={accentColor} strokeWidth="1" opacity={0.06 + (i % 3) * 0.04} strokeDasharray="3 3" />
        ))}
      </svg>
    );
  }

  if (type === "custom-software") {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 40" preserveAspectRatio="xMidYMid slice" fill="none">
        <rect x="170" y="8" width="60" height="24" rx="2" fill={accentColor} opacity="0.08" stroke={accentColor} strokeWidth="0.5" strokeOpacity="0.2" />
        <rect x="185" y="16" width="30" height="8" rx="1" fill="none" stroke={accentColor} strokeWidth="0.5" opacity="0.4" />
        {[60, 110, 230, 280].map((x, i) => (
          <g key={i}>
            <rect x={x - 18} y={12 + (i % 2) * 12} width="36" height="10" rx="1" fill={accentColor} opacity="0.06 + (i % 2) * 0.04" stroke={accentColor} strokeWidth="0.5" strokeOpacity="0.2" />
            <line x1={x} y1="14" x2="170" y2="14" stroke={accentColor} strokeWidth="0.5" opacity="0.15" strokeDasharray="2 3" />
          </g>
        ))}
      </svg>
    );
  }

  if (type === "ai") {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 40" preserveAspectRatio="xMidYMid slice" fill="none">
        <g transform="translate(200, 20)">
          <circle cx="0" cy="0" r="10" fill={accentColor} opacity="0.08" stroke={accentColor} strokeWidth="0.5" strokeOpacity="0.3" />
          <circle cx="0" cy="0" r="3" fill={accentColor} opacity="0.3" />
          {[0, 60, 120, 180, 240, 300].map((a, i) => (
            <line key={i} x1="0" y1="0" x2={Math.cos((a * Math.PI) / 180) * 16} y2={Math.sin((a * Math.PI) / 180) * 16} stroke={accentColor} strokeWidth="0.5" opacity="0.3" />
          ))}
        </g>
        {[60, 100, 300, 340].map((x, i) => (
          <rect key={i} x={x} y={10 + (i % 2) * 14} width="22" height="8" rx="1" fill={accentColor} opacity="0.06 + (i % 2) * 0.04" />
        ))}
      </svg>
    );
  }

  if (type === "cloud-devops") {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 40" preserveAspectRatio="xMidYMid slice" fill="none">
        <path d="M80 28 Q 150 15, 220 22 T 320 20" stroke={accentColor} strokeWidth="1" strokeDasharray="4 3" opacity="0.35" />
        {[140, 220, 300].map((x, i) => (
          <rect key={i} x={x - 12} y={12 + (i % 2) * 10} width="24" height="12" rx="1" fill={accentColor} opacity="0.08" stroke={accentColor} strokeWidth="0.5" strokeOpacity="0.2" />
        ))}
        {[50, 75, 325, 350].map((x, i) => (
          <circle key={i} cx={x} cy={18 + (i % 2) * 8} r="2" fill={accentColor} opacity="0.25" />
        ))}
      </svg>
    );
  }

  if (type === "app-dev") {
    return (
      <svg className="w-full h-full" viewBox="0 0 400 40" preserveAspectRatio="xMidYMid slice" fill="none">
        <rect x="170" y="5" width="60" height="30" rx="2" fill={accentColor} opacity="0.06" stroke={accentColor} strokeWidth="0.5" strokeOpacity="0.2" />
        <rect x="180" y="12" width="40" height="16" rx="1" fill="none" stroke={accentColor} strokeWidth="0.5" opacity="0.3" />
        {[60, 120, 280, 340].map((x, i) => (
          <g key={i}>
            <rect x={x} y={10 + (i % 2) * 14} width="28" height="10" rx="1" fill={accentColor} opacity="0.06 + (i % 2) * 0.04" />
            <line x1={x + 14} y1="10" x2="170" y2="14" stroke={accentColor} strokeWidth="0.5" opacity="0.15" strokeDasharray="2 3" />
          </g>
        ))}
      </svg>
    );
  }

  return null;
}