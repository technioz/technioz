interface BlogBannerConfig {
  slug: string;
  bgColor: string;
  accentColor: string;
  label: string;
  abstractVisual: "transport" | "microservices" | "react" | "security" | "paper-to-digital" | "custom-software" | "ai" | "cloud-devops" | "app-dev";
}

const bannerConfigs: BlogBannerConfig[] = [
  { slug: "how-to-choose-software-development-partner-2026", bgColor: "#1d1b16", accentColor: "#887bdd", label: "Custom Software", abstractVisual: "custom-software" },
  { slug: "offshore-vs-nearshore-vs-onshore-development-2026", bgColor: "#1a1a2e", accentColor: "#614fd2", label: "Custom Software", abstractVisual: "custom-software" },
  { slug: "in-house-vs-outsourced-software-development-2026", bgColor: "#0d1117", accentColor: "#3923c7", label: "Custom Software", abstractVisual: "custom-software" },
  { slug: "custom-software-development-cost-2026", bgColor: "#1a1620", accentColor: "#614fd2", label: "Custom Software", abstractVisual: "custom-software" },
  { slug: "rag-systems-explained", bgColor: "#121212", accentColor: "#3923c7", label: "AI Solutions", abstractVisual: "ai" },
  { slug: "mobile-app-development-cost-dubai-uae-saudi-arabia-2026", bgColor: "#1b1b2f", accentColor: "#7c5cbf", label: "Web & Mobile", abstractVisual: "app-dev" },
  { slug: "web-app-development-company-dubai-2026", bgColor: "#16213e", accentColor: "#5b8def", label: "Web & Mobile", abstractVisual: "app-dev" },
  { slug: "flutter-app-development-company-dubai-2026", bgColor: "#0f3460", accentColor: "#e94560", label: "Web & Mobile", abstractVisual: "app-dev" },
  { slug: "mvp-development-for-startups-2026", bgColor: "#1a1a2e", accentColor: "#a855f7", label: "Custom Software", abstractVisual: "custom-software" },
  { slug: "common-mistakes-custom-software-development-projects", bgColor: "#111827", accentColor: "#6366f1", label: "Custom Software", abstractVisual: "custom-software" },
  { slug: "how-to-plan-custom-software-project-step-by-step", bgColor: "#0c0a1d", accentColor: "#8b5cf6", label: "Custom Software", abstractVisual: "custom-software" },
  { slug: "custom-software-vs-off-the-shelf-2026", bgColor: "#1e1b4b", accentColor: "#a78bfa", label: "Custom Software", abstractVisual: "custom-software" },
  { slug: "ai-chatbot-development-types-costs-best-practices-2026", bgColor: "#172554", accentColor: "#60a5fa", label: "AI Solutions", abstractVisual: "ai" },
  { slug: "llm-integration-business-applications-guide-2026", bgColor: "#0f172a", accentColor: "#38bdf8", label: "AI Solutions", abstractVisual: "ai" },
  { slug: "cloud-migration-strategy-step-by-step-guide-2026", bgColor: "#1c1917", accentColor: "#f59e0b", label: "Cloud & DevOps", abstractVisual: "cloud-devops" },
  { slug: "cloud-cost-optimization-practical-guide-2026", bgColor: "#1a1a1a", accentColor: "#10b981", label: "Cloud & DevOps", abstractVisual: "cloud-devops" },
  { slug: "ci-cd-pipelines-explained-benefits-implementation-2026", bgColor: "#0d1117", accentColor: "#22d3ee", label: "Cloud & DevOps", abstractVisual: "cloud-devops" },
  { slug: "mobile-app-development-process-idea-to-launch-2026", bgColor: "#1e293b", accentColor: "#f472b6", label: "Web & Mobile", abstractVisual: "app-dev" },
  { slug: "web-app-development-process-step-by-step-2026", bgColor: "#0f0f0f", accentColor: "#a3e635", label: "Web & Mobile", abstractVisual: "app-dev" },
  { slug: "react-native-vs-flutter-2026-comparison", bgColor: "#1a1a2e", accentColor: "#fb923c", label: "Web & Mobile", abstractVisual: "app-dev" },
  { slug: "fleet-management-software-features-guide-2026", bgColor: "#1d1b16", accentColor: "#887bdd", label: "Industry Solutions", abstractVisual: "transport" },
  { slug: "online-ticketing-booking-systems-transport-companies-2026", bgColor: "#1a1a2e", accentColor: "#614fd2", label: "Industry Solutions", abstractVisual: "transport" },
  { slug: "route-optimization-software-logistics-2026", bgColor: "#0d1117", accentColor: "#3923c7", label: "Industry Solutions", abstractVisual: "transport" },
  { slug: "telemedicine-app-development-features-compliance-costs-2026", bgColor: "#1a1620", accentColor: "#614fd2", label: "Industry Solutions", abstractVisual: "transport" },
  { slug: "fintech-app-development-payments-wallets-compliance-2026", bgColor: "#121212", accentColor: "#3923c7", label: "Industry Solutions", abstractVisual: "transport" },
  { slug: "software-maintenance-support-costs-2026", bgColor: "#1b1b2f", accentColor: "#7c5cbf", label: "Custom Software", abstractVisual: "custom-software" },
  { slug: "api-first-development-modern-software-2026", bgColor: "#16213e", accentColor: "#5b8def", label: "Custom Software", abstractVisual: "custom-software" },
  { slug: "fine-tuning-vs-prompt-engineering-2026", bgColor: "#0f3460", accentColor: "#e94560", label: "AI Solutions", abstractVisual: "ai" },
  { slug: "building-production-ready-ai-agents-business-2026", bgColor: "#1a1a2e", accentColor: "#a855f7", label: "AI Solutions", abstractVisual: "ai" },
  { slug: "ai-use-cases-different-industries-2026", bgColor: "#111827", accentColor: "#6366f1", label: "AI Solutions", abstractVisual: "ai" },
  { slug: "ai-cost-optimization-production-2026", bgColor: "#0c0a1d", accentColor: "#8b5cf6", label: "AI Solutions", abstractVisual: "ai" },
  { slug: "docker-application-deployment-beginner-to-production-2026", bgColor: "#1e1b4b", accentColor: "#a78bfa", label: "Cloud & DevOps", abstractVisual: "cloud-devops" },
  { slug: "scaling-applications-cloud-2026", bgColor: "#172554", accentColor: "#60a5fa", label: "Cloud & DevOps", abstractVisual: "cloud-devops" },
  { slug: "devops-best-practices-growing-companies-2026", bgColor: "#0f172a", accentColor: "#38bdf8", label: "Cloud & DevOps", abstractVisual: "cloud-devops" },
  { slug: "progressive-web-apps-pwas-when-to-build-2026", bgColor: "#1c1917", accentColor: "#f59e0b", label: "Web & Mobile", abstractVisual: "app-dev" },
  { slug: "app-performance-optimization-techniques-2026", bgColor: "#1a1a1a", accentColor: "#10b981", label: "Web & Mobile", abstractVisual: "app-dev" },
  { slug: "ios-vs-android-app-development-dubai-2026", bgColor: "#0d1117", accentColor: "#22d3ee", label: "Web & Mobile", abstractVisual: "app-dev" },
  { slug: "react-native-app-development-company-dubai-2026", bgColor: "#1e293b", accentColor: "#f472b6", label: "Web & Mobile", abstractVisual: "app-dev" },
  { slug: "ecommerce-app-development-dubai-costs-features-2026", bgColor: "#0f0f0f", accentColor: "#a3e635", label: "Industry Solutions", abstractVisual: "transport" },
  { slug: "headless-commerce-development-when-and-why-2026", bgColor: "#1a1a2e", accentColor: "#fb923c", label: "Industry Solutions", abstractVisual: "transport" },
  { slug: "multi-vendor-marketplace-development-guide-2026", bgColor: "#1d1b16", accentColor: "#887bdd", label: "Industry Solutions", abstractVisual: "transport" },
  { slug: "building-custom-transport-management-platforms-2026", bgColor: "#1a1a2e", accentColor: "#614fd2", label: "Industry Solutions", abstractVisual: "transport" },
  { slug: "kyc-aml-compliance-software-development-2026", bgColor: "#0d1117", accentColor: "#3923c7", label: "Industry Solutions", abstractVisual: "transport" },
  { slug: "hipaa-compliant-software-development-checklist-2026", bgColor: "#1a1620", accentColor: "#614fd2", label: "Industry Solutions", abstractVisual: "transport" },
  { slug: "custom-erp-software-healthcare-2026", bgColor: "#121212", accentColor: "#3923c7", label: "Industry Solutions", abstractVisual: "transport" },
  { slug: "ai-agents-vs-chatbots", bgColor: "#1b1b2f", accentColor: "#7c5cbf", label: "AI Solutions", abstractVisual: "ai" },
  { slug: "bus-subscription-ticketing-platform-uae", bgColor: "#16213e", accentColor: "#5b8def", label: "Case Study", abstractVisual: "transport" },
  { slug: "how-technioz-powered-al-khanjry-transport-s-digital-transformation-in-oman", bgColor: "#0f3460", accentColor: "#e94560", label: "Case Study", abstractVisual: "transport" },
  { slug: "from-paper-tickets-to-digital-success-how-we-transformed-integrated-golden-lines", bgColor: "#1a1a2e", accentColor: "#a855f7", label: "Case Study", abstractVisual: "transport" },
  { slug: "building-scalable-microservices-with-node-js-and-docker", bgColor: "#111827", accentColor: "#6366f1", label: "Backend Development", abstractVisual: "microservices" },
  { slug: "react-19-features-every-developer-should-know", bgColor: "#0c0a1d", accentColor: "#8b5cf6", label: "Frontend Development", abstractVisual: "react" },
  { slug: "cloud-security-best-practices-for-enterprise-applications", bgColor: "#1e1b4b", accentColor: "#a78bfa", label: "Cloud Security", abstractVisual: "security" },
  { slug: "accessibility-in-web-design-guide-startups-2026", bgColor: "#1a1620", accentColor: "#614fd2", label: "Frontend Development", abstractVisual: "react" },
  { slug: "what-is-an-it-consultant-2026-guide", bgColor: "#0c0a1d", accentColor: "#3923c7", label: "Consulting & Strategy", abstractVisual: "custom-software" },
];

interface BlogBannerProps {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
}

export function BlogBanner({ slug, title, category, date, readTime, author }: BlogBannerProps) {
  const config = bannerConfigs.find((c) => c.slug === slug) ?? bannerConfigs[0];

  return (
    <div
      className="w-full rounded-sm overflow-hidden relative"
      style={{ backgroundColor: config.bgColor }}
    >
      {/* Subtle dot texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content */}
      <div className="relative px-6 py-10 lg:px-12 lg:py-14 flex flex-col gap-5 min-h-[280px] lg:min-h-[340px]">
        {/* Labels */}
        <div className="flex items-center gap-3">
          <span
            className="font-mono text-[10px] uppercase tracking-[1.4px] px-3 py-1.5 rounded-sm border"
            style={{ color: config.accentColor, borderColor: `${config.accentColor}40` }}
          >
            {config.label}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[1.2px]" style={{ color: "rgba(255,255,255,0.4)" }}>
            {category}
          </span>
        </div>

        {/* Title */}
        <h1
          className="font-display text-[28px] lg:text-[40px] leading-[1.1] tracking-[-2px] max-w-[700px]"
          style={{ color: "#ffffff" }}
        >
          {title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mt-auto">
          <span className="font-mono text-[11px] uppercase tracking-[1px]" style={{ color: "rgba(255,255,255,0.5)" }}>
            {author}
          </span>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
          <span className="font-mono text-[11px] uppercase tracking-[1px]" style={{ color: "rgba(255,255,255,0.5)" }}>
            {date}
          </span>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
          <span className="font-mono text-[11px] uppercase tracking-[1px]" style={{ color: "rgba(255,255,255,0.5)" }}>
            {readTime}
          </span>
        </div>

        {/* Abstract bottom visual strip */}
        <div className="absolute bottom-0 left-0 right-0 h-[80px] lg:h-[100px] overflow-hidden pointer-events-none">
          <AbstractVisual type={config.abstractVisual} accentColor={config.accentColor} />
        </div>
      </div>
    </div>
  );
}

function AbstractVisual({ type, accentColor }: { type: BlogBannerConfig["abstractVisual"]; accentColor: string }) {
  if (type === "transport") {
    return (
      <svg className="w-full h-full" viewBox="0 0 900 100" preserveAspectRatio="xMidYMid slice" fill="none">
        {/* Route lines */}
        <path d="M0 70 Q 150 40, 300 60 T 600 50 T 900 65" stroke={accentColor} strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4" />
        <path d="M0 80 Q 200 50, 400 70 T 700 55 T 900 75" stroke={accentColor} strokeWidth="1" strokeDasharray="3 6" opacity="0.25" />
        <path d="M0 60 Q 250 30, 500 50 T 800 40 T 900 55" stroke={accentColor} strokeWidth="1" opacity="0.15" />
        {/* Route nodes */}
        {[100, 250, 450, 650, 800].map((x, i) => (
          <circle key={i} cx={x} cy={[70, 60, 50, 55, 65][i]} r="3" fill={accentColor} opacity="0.5" />
        ))}
        {/* Bus stop markers */}
        {[100, 450, 800].map((x, i) => (
          <rect key={`stop-${i}`} x={x - 8} y={[55, 35, 50][i]} width="16" height="10" rx="2" fill={accentColor} opacity="0.15" />
        ))}
      </svg>
    );
  }

  if (type === "paper-to-digital") {
    return (
      <svg className="w-full h-full" viewBox="0 0 900 100" preserveAspectRatio="xMidYMid slice" fill="none">
        {/* Paper tickets on left side, fading to digital on right */}
        {[0, 60, 120].map((x, i) => (
          <rect key={`paper-${i}`} x={x + 20} y={30 + i * 5} width="50" height="40" rx="2" fill={accentColor} opacity={0.08 - i * 0.02} stroke={accentColor} strokeWidth="0.5" strokeOpacity="0.2" />
        ))}
        {/* Transition arrows */}
        <path d="M180 50 L 220 50" stroke={accentColor} strokeWidth="1" opacity="0.3" />
        <path d="M215 45 L 220 50 L 215 55" stroke={accentColor} strokeWidth="1" opacity="0.3" fill="none" />
        {/* Digital blocks on right */}
        {[280, 340, 400, 460, 520, 580, 640, 700, 760, 820].map((x, i) => (
          <rect key={`digital-${i}`} x={x} y={40 + (i % 2) * 8} width="40" height="20" rx="3" fill={accentColor} opacity={0.06 + (i / 20)} />
        ))}
        {/* Connection lines */}
        <line x1="280" y1="50" x2="860" y2="50" stroke={accentColor} strokeWidth="0.5" strokeDasharray="2 4" opacity="0.2" />
      </svg>
    );
  }

  if (type === "microservices") {
    return (
      <svg className="w-full h-full" viewBox="0 0 900 100" preserveAspectRatio="xMidYMid slice" fill="none">
        {/* API gateway */}
        <rect x="380" y="30" width="140" height="25" rx="3" fill={accentColor} opacity="0.15" />
        <text x="450" y="47" textAnchor="middle" fontSize="8" fill={accentColor} opacity="0.5" fontFamily="monospace">API Gateway</text>
        {/* Services below */}
        {[100, 200, 300, 600, 700, 800].map((x, i) => (
          <g key={i}>
            <rect x={x - 30} y={65} width="60" height="25" rx="3" fill={accentColor} opacity={0.08 + (i % 2) * 0.04} stroke={accentColor} strokeWidth="0.5" strokeOpacity="0.2" />
            <line x1={x} y1="55" x2="450" y2="55" stroke={accentColor} strokeWidth="0.5" opacity="0.15" strokeDasharray="2 3" />
          </g>
        ))}
        {/* Docker containers indicator */}
        {[160, 260, 360, 660, 760, 860].map((x) => (
          <circle key={x} cx={x} cy="50" r="2" fill={accentColor} opacity="0.3" />
        ))}
      </svg>
    );
  }

  if (type === "react") {
    return (
      <svg className="w-full h-full" viewBox="0 0 900 100" preserveAspectRatio="xMidYMid slice" fill="none">
        {/* React atom logo abstract */}
        <g transform="translate(450, 50)">
          <ellipse cx="0" cy="0" rx="40" ry="15" fill="none" stroke={accentColor} strokeWidth="1" opacity="0.4" />
          <ellipse cx="0" cy="0" rx="40" ry="15" fill="none" stroke={accentColor} strokeWidth="1" opacity="0.3" transform="rotate(60)" />
          <ellipse cx="0" cy="0" rx="40" ry="15" fill="none" stroke={accentColor} strokeWidth="1" opacity="0.2" transform="rotate(120)" />
          <circle cx="0" cy="0" r="4" fill={accentColor} opacity="0.5" />
        </g>
        {/* Component tree on left */}
        {[100, 150, 200, 100, 150].map((x, i) => (
          <rect key={`left-${i}`} x={x} y={20 + (i % 3) * 20} width="30" height="12" rx="2" fill={accentColor} opacity={0.06 + (i * 0.02)} />
        ))}
        {/* Hooks symbols on right */}
        {[650, 700, 750, 800, 850].map((x, i) => (
          <g key={`right-${i}`}>
            <text x={x} y={40 + (i % 2) * 30} fontSize="9" fill={accentColor} opacity={0.2} fontFamily="monospace">use()</text>
          </g>
        ))}
        {/* Flow lines */}
        <path d="M250 50 Q 350 30, 410 50" stroke={accentColor} strokeWidth="0.5" strokeDasharray="2 4" opacity="0.15" />
        <path d="M490 50 Q 600 70, 640 50" stroke={accentColor} strokeWidth="0.5" strokeDasharray="2 4" opacity="0.15" />
      </svg>
    );
  }

  if (type === "security") {
    return (
      <svg className="w-full h-full" viewBox="0 0 900 100" preserveAspectRatio="xMidYMid slice" fill="none">
        {/* Shield shape */}
        <path d="M430 20 L 470 20 L 470 45 Q 470 60, 450 70 Q 430 60, 430 45 Z" fill={accentColor} opacity="0.08" stroke={accentColor} strokeWidth="1" strokeOpacity="0.3" />
        {/* Lock icon inside */}
        <rect x="442" y="38" width="16" height="12" rx="2" fill="none" stroke={accentColor} strokeWidth="1" opacity="0.4" />
        <path d="M445 38 V 34 Q 445 30, 450 30 Q 455 30, 455 34 V 38" fill="none" stroke={accentColor} strokeWidth="1" opacity="0.4" />
        {/* Encryption blocks left */}
        {[100, 140, 180, 220, 260, 300, 340].map((x, i) => (
          <rect key={`enc-${i}`} x={x} y={30 + (i % 2) * 15} width="28" height="14" rx="2" fill={accentColor} opacity={0.04 + (i * 0.01)} />
        ))}
        {/* Firewall lines right */}
        {[540, 580, 620, 660, 700, 740, 780, 820, 860].map((x, i) => (
          <line key={`fw-${i}`} x1={x} y1={20} x2={x} y2={80} stroke={accentColor} strokeWidth="1" opacity={0.06 + (i % 3) * 0.04} strokeDasharray="3 3" />
        ))}
        {/* Lock checkmarks */}
        {[560, 660, 760, 860].map((x) => (
          <path key={`check-${x}`} d={`M${x} 40 l 4 4 l 8 -8`} fill="none" stroke={accentColor} strokeWidth="1.5" opacity="0.3" />
        ))}
      </svg>
    );
  }

  if (type === "custom-software") {
    return (
      <svg className="w-full h-full" viewBox="0 0 900 100" preserveAspectRatio="xMidYMid slice" fill="none">
        <rect x="420" y="25" width="60" height="50" rx="3" fill={accentColor} opacity="0.08" stroke={accentColor} strokeWidth="1" strokeOpacity="0.25" />
        <rect x="435" y="40" width="30" height="20" rx="2" fill="none" stroke={accentColor} strokeWidth="1" opacity="0.4" />
        {[120, 200, 280, 580, 660, 740].map((x, i) => (
          <g key={i}>
            <rect x={x - 25} y={30 + (i % 2) * 25} width="50" height="20" rx="2" fill={accentColor} opacity="0.05 + (i % 2) * 0.04" stroke={accentColor} strokeWidth="0.5" strokeOpacity="0.2" />
            <line x1={x} y1="40" x2="420" y2="40" stroke={accentColor} strokeWidth="0.5" opacity="0.15" strokeDasharray="3 4" />
          </g>
        ))}
      </svg>
    );
  }

  if (type === "ai") {
    return (
      <svg className="w-full h-full" viewBox="0 0 900 100" preserveAspectRatio="xMidYMid slice" fill="none">
        <g transform="translate(450, 50)">
          <circle cx="0" cy="0" r="18" fill={accentColor} opacity="0.08" stroke={accentColor} strokeWidth="1" strokeOpacity="0.3" />
          <circle cx="0" cy="0" r="6" fill={accentColor} opacity="0.25" />
          {[0, 60, 120, 180, 240, 300].map((a, i) => (
            <line key={i} x1="0" y1="0" x2={Math.cos((a * Math.PI) / 180) * 30} y2={Math.sin((a * Math.PI) / 180) * 30} stroke={accentColor} strokeWidth="1" opacity="0.3" />
          ))}
        </g>
        {[100, 180, 260, 640, 720, 800].map((x, i) => (
          <rect key={i} x={x} y={25 + (i % 2) * 35} width="40" height="16" rx="2" fill={accentColor} opacity="0.06 + (i % 2) * 0.04" />
        ))}
      </svg>
    );
  }

  if (type === "cloud-devops") {
    return (
      <svg className="w-full h-full" viewBox="0 0 900 100" preserveAspectRatio="xMidYMid slice" fill="none">
        <path d="M250 60 Q 350 30, 450 50 T 650 45 T 850 55" stroke={accentColor} strokeWidth="1.5" strokeDasharray="6 4" opacity="0.35" />
        {[300, 450, 600, 750].map((x, i) => (
          <rect key={i} x={x - 20} y={35 + (i % 2) * 20} width="40" height="22" rx="2" fill={accentColor} opacity="0.08" stroke={accentColor} strokeWidth="0.5" strokeOpacity="0.2" />
        ))}
        {[100, 140, 180, 220].map((x, i) => (
          <circle key={i} cx={x} cy={45 + (i % 2) * 15} r="3" fill={accentColor} opacity="0.25" />
        ))}
      </svg>
    );
  }

  if (type === "app-dev") {
    return (
      <svg className="w-full h-full" viewBox="0 0 900 100" preserveAspectRatio="xMidYMid slice" fill="none">
        <rect x="400" y="15" width="100" height="70" rx="4" fill={accentColor} opacity="0.06" stroke={accentColor} strokeWidth="1" strokeOpacity="0.2" />
        <rect x="415" y="30" width="70" height="40" rx="2" fill="none" stroke={accentColor} strokeWidth="1" opacity="0.3" />
        {[120, 220, 680, 780].map((x, i) => (
          <g key={i}>
            <rect x={x} y={30 + (i % 2) * 25} width="55" height="22" rx="2" fill={accentColor} opacity="0.06 + (i % 2) * 0.04" />
            <line x1={x + 27} y1="30" x2="400" y2="40" stroke={accentColor} strokeWidth="0.5" opacity="0.15" strokeDasharray="2 4" />
          </g>
        ))}
      </svg>
    );
  }

  return null;
}