export interface SolutionData {
  slug: string;
  title: string;
  subtitle: string;
  label: string;
  icon: string;
  metaDescription: string;
  challenges: { title: string; desc: string }[];
  solutions: { title: string; desc: string }[];
  techTags: string[];
  results: { metric: string; label: string }[];
  industries: string[];
}

export const solutions: SolutionData[] = [
  {
    slug: "startups",
    title: "Startup Software Development Company | MVP to Scale | Technioz",
    subtitle: "From pitch deck to production — we help startups launch fast, iterate faster, and scale without rewriting everything. MVPs in 8-12 weeks, not 8-12 months.",
    label: "Startups",
    icon: "\u{1F680}",
    metaDescription: "Startup software development company. MVP builds, scalable architecture, and dedicated teams for pre-seed to Series B startups.",
    challenges: [
      { title: "Limited runway", desc: "You have 6-12 months of runway. Every dollar spent on the wrong feature is a dollar closer to running out of cash. You need an MVP that proves the concept — not a full enterprise build that burns your seed round." },
      { title: "Speed to market", desc: "Every week of delay is a week closer to a competitor launching first. First-mover advantage matters. You need to ship, get user feedback, and iterate — not plan for 6 months before writing code." },
      { title: "Technical debt at MVP stage", desc: "The wrong stack choice at MVP stage means a full rewrite at Series A. You need architecture that scales from 100 users to 100,000 without a complete rebuild — but you can't afford to over-engineer either." },
      { title: "Hiring is slow and expensive", desc: "Finding a senior full-stack developer takes 2-3 months and costs $120K+ per year. You can't wait that long. You need a team that's productive on day one, not after a 3-month onboarding." },
      { title: "Investor expectations", desc: "Your investors want to see traction. They want demos, metrics, user growth charts. You need a development partner who can produce investor-ready demos at every sprint review." },
    ],
    solutions: [
      { title: "MVP packages from $15K", desc: "Fixed-scope MVP builds with clear deliverables and 8-12 week timelines. You know exactly what you're getting, when you're getting it, and what it costs — no surprises, no scope creep." },
      { title: "Scalable architecture from day one", desc: "We build with React, Next.js, Node.js, and PostgreSQL — stacks that handle your first 100 users and your first 100,000 without a rewrite. No throwaway MVP code. No technical debt accumulation." },
      { title: "Dedicated team that scales with you", desc: "Start with 2 engineers at pre-seed. Scale to 10 at Series A. Scale to 30 at Series B. Same team, same codebase, same standards — just more capacity when you need it." },
      { title: "Architecture reviews before every major feature", desc: "Before we build any feature, we review the architecture. This prevents the gradual decay that kills most startup codebases by month 12. You stay clean, fast, and maintainable." },
      { title: "Investor-ready demos every two weeks", desc: "At the end of every sprint, you get a working demo. Show it in your next pitch meeting. Show it to users. Show it to investors. Real software, not slide ware." },
      { title: "Stripe integration and payment infrastructure", desc: "Payment flows, subscription billing, one-time charges, webhook reconciliation, and refund automation — all built in from the start. Monetize from day one." },
      { title: "Analytics and user tracking built in", desc: "Mixpanel, Amplitude, or PostHog integration from day one. You know exactly how users interact with your product — what they click, where they drop off, what features they ignore." },
    ],
    techTags: ["React", "Next.js", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Stripe", "Mixpanel"],
    results: [
      { metric: "8-12 wks", label: "MVP delivery time" },
      { metric: "$15K+", label: "starting price" },
      { metric: "2x", label: "faster than hiring internally" },
    ],
    industries: ["SaaS startups", "Marketplace startups", "Fintech startups", "Healthtech startups", "Edtech startups", "Consumer apps"],
  },
  {
    slug: "healthcare",
    title: "Healthcare Software Development | HIPAA & Telemedicine | Technioz",
    subtitle: "Healthcare software that keeps patient data safe and clinical workflows efficient.",
    label: "Healthcare",
    icon: "\u{1F3E5}",
    metaDescription: "Healthcare software development with HIPAA portals, telemedicine, EHR integration (FHIR/HL7), and clinic management systems.",
    challenges: [
      { title: "HIPAA compliance is non-negotiable", desc: "One breach can end your business. PHI (Protected Health Information) must be encrypted at rest, in transit, and in backups. Access must be logged. Business Associate Agreements (BAAs) must be signed with every vendor in the chain. Getting this wrong is not an option." },
      { title: "EHR integration is complex", desc: "Every Electronic Health Record system speaks a different dialect of HL7 and FHIR. Epic, Cerner, Athenahealth, Allscripts — each has its own API quirks, rate limits, and authentication requirements. Integration takes months if you don't know the terrain." },
      { title: "Patient data security requirements", desc: "Encryption at rest with AES-256. Encryption in transit with TLS 1.3. Key rotation. Audit trails for every data access. Role-based access control. Data retention policies. Breach notification procedures. The list is long and the penalties for getting it wrong are severe." },
      { title: "Telemedicine needs real-time reliability", desc: "Video consultations require sub-second latency and zero dropped calls. Patients and doctors cannot tolerate frozen screens or audio cutting out mid-consultation. The infrastructure must handle peak loads during flu season or health crises." },
      { title: "Regulatory landscape keeps changing", desc: "HIPAA, HITECH, 21st Century Cures Act, state-level privacy laws, and international regulations like GDPR for cross-border telemedicine. Staying compliant requires ongoing vigilance, not a one-time audit." },
    ],
    solutions: [
      { title: "HIPAA-compliant architecture on AWS", desc: "BAA-ready infrastructure with encryption at rest (AES-256 via KMS), encryption in transit (TLS 1.3), isolated VPCs, private subnets, and security groups. Every component is auditable and compliant from day one." },
      { title: "FHIR-standard API design for EHR integration", desc: "We build FHIR R4-compliant APIs that integrate with Epic, Cerner, Athenahealth, Allscripts, and any HL7 v2 system. SMART on FHIR for patient-facing apps. Bulk data access for population health." },
      { title: "WebRTC-based telemedicine platform", desc: "Real-time video consultations with sub-second latency. Adaptive bitrate streaming for unreliable connections. Screen sharing for remote diagnosis. Recording with patient consent. Fallback to audio-only for low-bandwidth scenarios." },
      { title: "Patient portal development", desc: "Secure patient-facing web and mobile apps. Appointment scheduling, prescription refill requests, lab results viewing, secure messaging with providers, bill payment, and insurance verification — all HIPAA-compliant." },
      { title: "Audit logging and compliance reporting", desc: "Every access to PHI is logged — who, what, when, from where. Automated compliance reports for HIPAA audits. Breach detection alerts. Data retention policy enforcement with automated purging." },
      { title: "Clinical workflow automation", desc: "Automated appointment reminders, prescription refill workflows, lab order routing, insurance claim submission, and prior authorization automation. Reduce administrative overhead by 40-60%." },
      { title: "Medical device integration", desc: "Integration with wearable health devices (Apple Watch, Fitbit), remote patient monitoring systems, and IoT medical devices. Real-time data ingestion into the patient record with anomaly detection alerts." },
    ],
    techTags: ["HIPAA", "FHIR", "HL7", "WebRTC", "AWS", "BAA", "SMART on FHIR", "PostgreSQL", "Redis"],
    results: [
      { metric: "100%", label: "HIPAA compliant" },
      { metric: "<1s", label: "telemedicine latency" },
      { metric: "0", label: "compliance breaches" },
    ],
    industries: ["Hospitals and health systems", "Telemedicine companies", "Digital health startups", "Medical practices", "Mental health platforms", "Pharmacy chains"],
  },
  {
    slug: "finance",
    title: "Fintech Software Development | Payments, Banking & Trading | Technioz",
    subtitle: "Secure, compliant financial software for digital banking, payments, lending, and trading.",
    label: "Finance",
    icon: "\u{1F4B8}",
    metaDescription: "Fintech software development — PCI-DSS payments, digital banking, ML fraud detection, KYC/AML automation, and trading platforms.",
    challenges: [
      { title: "PCI-DSS compliance", desc: "Payment Card Industry Data Security Standard compliance is mandatory for any system that processes, stores, or transmits cardholder data. Level 1 (processing 6M+ transactions annually) requires annual on-site audits, quarterly network scans, and rigorous security controls across 12 requirement areas." },
      { title: "Real-time fraud detection", desc: "Payment fraud costs the global economy billions annually. You need ML models that analyze transaction patterns in real time — velocity checks, geolocation anomalies, device fingerprinting, behavioral biometrics — and flag suspicious transactions before they settle." },
      { title: "KYC and AML compliance", desc: "Know Your Customer (KYC) and Anti-Money Laundering (AML) regulations require identity verification, sanctions screening, beneficial ownership identification, and suspicious activity reporting. Manual processes are slow and error-prone. Automation is essential." },
      { title: "High availability and zero downtime", desc: "Financial systems cannot go down. Every minute of downtime means lost transactions, lost revenue, and lost customer trust. You need 99.99% uptime (less than 52 minutes of downtime per year) with multi-region active-active deployment." },
      { title: "Multi-currency and cross-border complexity", desc: "Supporting multiple currencies, exchange rate fluctuations, cross-border payment regulations, and local payment methods (UPI, SEPA, ACH, Faster Payments) adds significant complexity to any fintech platform." },
    ],
    solutions: [
      { title: "PCI-DSS Level 1 compliant payment architecture", desc: "Tokenized card data, network segmentation, encrypted vaults, and strict access controls. We build payment systems that pass Level 1 audits — whether you process 1,000 or 10 million transactions per month." },
      { title: "ML-powered fraud detection", desc: "Real-time transaction scoring using gradient-boosted models trained on historical fraud patterns. Velocity checks, device fingerprinting, geolocation anomaly detection, and behavioral biometrics. Sub-100ms scoring latency." },
      { title: "Automated KYC/AML workflows", desc: "Identity verification with document scanning and liveness detection. Sanctions screening against OFAC, UN, EU lists. Beneficial ownership identification. Automated Suspicious Activity Report (SAR) generation." },
      { title: "Multi-currency payment processing", desc: "Real-time exchange rate tracking, automatic currency conversion, support for 135+ currencies, and integration with local payment rails worldwide — UPI, SEPA, ACH, Faster Payments, Pix, and more." },
      { title: "Digital banking platform development", desc: "Account management, fund transfers, bill payments, card management, spending analytics, savings goals, and budgeting tools. White-label banking-as-a-service architecture for neobanks." },
      { title: "Trading platform development", desc: "Real-time market data feeds, order management, portfolio tracking, charting tools, and risk management. Support for equities, crypto, forex, and derivatives. Sub-millisecond order routing." },
      { title: "99.99% uptime with multi-region deployment", desc: "Active-active multi-region deployment on AWS or Azure. Automated failover. Zero-downtime deployments via blue-green strategy. Real-time monitoring with PagerDuty integration for incident response." },
    ],
    techTags: ["PCI-DSS", "Stripe", "Plaid", "AWS", "Kubernetes", "Redis", "Kafka", "TensorFlow", "OAuth 2.0"],
    results: [
      { metric: "99.99%", label: "uptime SLA" },
      { metric: "<100ms", label: "fraud check latency" },
      { metric: "Level 1", label: "PCI-DSS compliance" },
    ],
    industries: ["Digital banks and neobanks", "Payment processors", "Lending platforms", "Insurance (InsurTech)", "Wealth management", "Cryptocurrency exchanges", "Remittance services"],
  },
  {
    slug: "ecommerce",
    title: "E-commerce Software Development Company | Custom Stores | Technioz",
    subtitle: "E-commerce platforms built to convert visitors, manage inventory, and handle scale.",
    label: "E-commerce",
    icon: "\u{1F6D2}",
    metaDescription: "E-commerce software development company. Headless commerce, Shopify, custom marketplaces, inventory sync, and payment integration.",
    challenges: [
      { title: "Flash sale traffic spikes", desc: "When you run a promotion or flash sale, traffic can spike 100x in seconds. Without auto-scaling infrastructure, your store crashes at the exact moment when revenue potential is highest. Every minute of downtime during a sale is thousands in lost sales." },
      { title: "Inventory synchronization", desc: "Online and in-store inventory must match in real time. Overselling damages reputation and triggers chargebacks. Underselling means lost revenue. Multi-warehouse, multi-channel inventory management requires careful architecture." },
      { title: "Cart abandonment and checkout friction", desc: "The average e-commerce cart abandonment rate is 70%. Slow checkout, too many form fields, required account creation, and limited payment options all contribute. Every second of checkout delay costs you conversion." },
      { title: "Core Web Vitals and SEO performance", desc: "Google's Core Web Vitals directly impact search rankings. Slow LCP, high CLS, and poor INP mean lower search visibility, less organic traffic, and fewer customers finding your products." },
      { title: "Multi-channel selling complexity", desc: "Selling on your website, Amazon, Instagram, TikTok Shop, and physical stores simultaneously requires centralized product management, order routing, and inventory allocation. Manual processes don't scale." },
    ],
    solutions: [
      { title: "Headless commerce architecture", desc: "Decouple your storefront from your backend. React/Next.js storefront connected to Shopify Plus, BigCommerce, or a custom commerce engine via GraphQL APIs. Faster page loads, better SEO, unlimited customization." },
      { title: "Real-time inventory sync", desc: "Centralized inventory management that syncs across all sales channels — website, marketplaces, and physical stores — in real time. Prevent oversells, enable ship-from-store, and optimize stock allocation." },
      { title: "One-page checkout with wallet payments", desc: "Apple Pay, Google Pay, PayPal, and saved card checkout in a single page. Guest checkout by default. Address autocomplete. Conversion-optimized checkout flow that reduces abandonment by 30-50%." },
      { title: "Auto-scaling flash sale infrastructure", desc: "AWS auto-scaling groups that spin up additional capacity in seconds during traffic spikes. CDN-cached product pages. Queue-based order processing to prevent database overload. Your store stays up when it matters most." },
      { title: "Product information management (PIM)", desc: "Centralized product catalog with bulk import/export, variant management, multi-language descriptions, and automatic feed generation for Google Shopping, Amazon, and social media platforms." },
      { title: "Analytics and A/B testing dashboard", desc: "Conversion funnel analysis, cohort retention, A/B test results, and revenue attribution. Know exactly which products, campaigns, and UX changes drive revenue — and which ones don't." },
      { title: "Marketplace platform development", desc: "Multi-vendor marketplaces with seller onboarding, commission management, payout automation, seller dashboards, and dispute resolution. Build the next Etsy, not just another store." },
    ],
    techTags: ["Shopify", "Stripe", "Next.js", "Redis", "Elasticsearch", "AWS", "GraphQL", "PostgreSQL"],
    results: [
      { metric: "100x", label: "peak traffic handled" },
      { metric: "<2s", label: "checkout completion" },
      { metric: "200%", label: "avg revenue increase" },
    ],
    industries: ["D2C brands", "Online marketplaces", "B2B commerce", "Subscription commerce", "Fashion and apparel", "Electronics retailers", "Grocery delivery"],
  },
  {
    slug: "education",
    title: "Education Software Development | LMS & AI Tutoring | Technioz",
    subtitle: "Learning platforms, assessment tools, and school management systems that engage students and administrators.",
    label: "Education",
    icon: "\u{1F393}",
    metaDescription: "Education software development — LMS platforms, AI tutoring, assessment engines, SCORM compliance, and video streaming.",
    challenges: [
      { title: "Student engagement and completion rates", desc: "Online course completion rates average below 15%. Boring interfaces, lack of interactivity, and missing social features kill motivation. You need software that makes learning feel rewarding, not like a chore." },
      { title: "Assessment integrity and proctoring", desc: "Online exams are vulnerable to cheating. You need randomized question banks, browser lockdown, webcam proctoring, plagiarism detection on written responses, and timer enforcement — all without making the exam experience feel hostile to honest students." },
      { title: "Scalability during exam periods", desc: "Thousands of concurrent students logging in simultaneously during final exam week. The platform must handle the spike without slowdowns, timeouts, or crashed exams — students' grades depend on it." },
      { title: "Content management for educators", desc: "Teachers need to upload, organize, and update course material without calling IT. Video lectures, PDFs, interactive quizzes, discussion forums — all manageable through a simple interface that doesn't require technical knowledge." },
      { title: "Accessibility and inclusive design", desc: "Educational platforms must comply with WCAG 2.1 AA standards. Screen reader support, keyboard navigation, captioned videos, and adjustable text sizes are not optional — they're legal requirements in many jurisdictions." },
    ],
    solutions: [
      { title: "SCORM-compliant LMS development", desc: "Full-featured learning management system with course creation, enrollment management, progress tracking, gamification (badges, points, leaderboards), and certification generation. SCORM 1.2 and 2004 compliant for compatibility with existing content." },
      { title: "AI-powered adaptive tutoring", desc: "Machine learning models that adapt to each student's learning pace. Personalized question difficulty, targeted remediation for weak areas, and predictive analytics that flag at-risk students before they fail." },
      { title: "Online assessment engine", desc: "Randomized question banks, timed exams, browser lockdown mode, webcam proctoring integration, automatic grading for objective questions, and rubric-based grading for subjective responses. Anti-cheating measures built in." },
      { title: "Plagiarism detection integration", desc: "Integration with plagiarism detection services for written assignments. Similarity scoring, source highlighting, and paraphrasing detection. Protect academic integrity without manual review." },
      { title: "Adaptive video streaming", desc: "Video lectures with adaptive bitrate streaming for low-bandwidth students. Chapter markers, searchable transcripts, playback speed control, and download for offline viewing. CDN-delivered for global access." },
      { title: "Parent and teacher dashboards", desc: "Real-time progress tracking, engagement metrics, attendance records, and performance analytics. Parents see their child's progress. Teachers see class-level insights. Administrators see school-wide trends." },
      { title: "Mobile-first learning apps", desc: "iOS and Android apps with offline mode — students download course content and complete assignments without internet. Progress syncs automatically when connectivity returns. Push notifications for deadlines and new content." },
    ],
    techTags: ["LMS", "SCORM", "AI Tutoring", "WebRTC", "PostgreSQL", "AWS", "React Native", "Elasticsearch"],
    results: [
      { metric: "92%", label: "student satisfaction" },
      { metric: "10K+", label: "concurrent students" },
      { metric: "3x", label: "faster content delivery" },
    ],
    industries: ["K-12 education", "Higher education", "Corporate training", "Professional certification", "Language learning", "Test prep platforms", "Vocational training"],
  },
  {
    slug: "logistics",
    title: "Logistics & Transportation Software Development | GCC | Technioz",
    subtitle: "Fleet, warehouse, and transport software that keeps goods moving and customers informed.",
    label: "Logistics",
    icon: "\u{1F69A}",
    metaDescription: "Logistics and transportation software development for GCC operators. Fleet tracking, bus ticketing, route optimization, and automated dispatching.",
    challenges: [
      { title: "Real-time tracking across borders", desc: "Passengers, dispatchers, and fleet managers need to see exact vehicle locations at all times. Cross-border routes (Oman-UAE, UAE-Saudi) add roaming data costs, GPS accuracy variations, and connectivity gaps in remote areas." },
      { title: "Route optimization and fuel costs", desc: "Fuel is 30-40% of operating costs for transport companies. Inefficient routing wastes fuel, increases wear and tear, and delays deliveries. You need algorithms that factor in traffic, road closures, border wait times, and vehicle capacity." },
      { title: "Multi-agent operations", desc: "Drivers, ticket agents, branch staff, admin operators, and API partners all need different views and permissions. A walk-in agent at a branch counter needs the same real-time inventory as an online customer — or you get double bookings." },
      { title: "Peak season scaling", desc: "Eid, Hajj season, winter tourism, and national holidays can spike traffic 5x without warning. Your infrastructure must absorb the spike without downtime, slow bookings, or crashed payment systems." },
      { title: "Bilingual operations in the GCC", desc: "Arabic and English must both be first-class citizens. Booking confirmations, error messages, seat maps, payment receipts — everything must work flawlessly in both languages. Machine translation is not acceptable for customer-facing content." },
    ],
    solutions: [
      { title: "Real-time GPS tracking platform", desc: "WebSocket-based live vehicle tracking with sub-second updates. Geofencing for route compliance. ETA calculations that factor in traffic, border crossings, and historical patterns. Offline caching for connectivity gaps." },
      { title: "Route optimization engine", desc: "Algorithms that minimize distance, time, and fuel consumption. Traffic-aware routing with real-time road conditions. Multi-stop optimization for delivery fleets. Vehicle capacity and weight constraints factored in." },
      { title: "Multi-role ticketing platform", desc: "Passenger booking portal, agent counter system, admin operations dashboard, and API partner gateway — all sharing a single real-time inventory database. No double bookings, no manual reconciliation, no inventory discrepancies." },
      { title: "AWS auto-scaling for peak seasons", desc: "EC2 auto-scaling groups that handle 5x traffic spikes automatically. Serverless Lambda functions for background tasks (reminders, reports, seat release). CloudFront CDN for global content delivery. 99.9% uptime guaranteed." },
      { title: "Automated dispatching system", desc: "Proximity-based driver assignment with load balancing. Automatic reassignment for rejected or timed-out jobs. Real-time driver status (available, en route, on break, offline). Dispatch dashboard with live map view." },
      { title: "Bilingual Arabic/English platform", desc: "Full RTL (right-to-left) support for Arabic. Native localization — not machine translation. Booking confirmations, SMS notifications, email receipts, and error messages all in both languages. Language switcher with one tap." },
      { title: "Payment integration for GCC markets", desc: "Multi-currency support (AED, OMR, SAR, KWD, QAR, BHD). Local payment gateways (Telr, PayTabs, Network International). Stripe for international cards. Webhook-based reconciliation with automatic refunds." },
    ],
    techTags: ["React", "Next.js", "Node.js", "AWS", "WebSocket", "PostgreSQL", "Redis", "Docker", "Stripe"],
    results: [
      { metric: "$1M+", label: "ticket sales processed" },
      { metric: "150K+", label: "bookings completed" },
      { metric: "80+", label: "routes covered" },
    ],
    industries: ["Bus and coach operators", "Freight and cargo", "Last-mile delivery", "Ride-hailing", "Shipping and maritime", "Aviation ground services", "Warehouse management"],
  },
];

export const enterpriseData = {
  title: "Enterprise Software Solutions",
  subtitle: "Scalable, secure, and compliant software for organizations that can't afford downtime, data breaches, or missed deadlines. SOC 2, ISO 27001, and enterprise-grade reliability.",
  label: "Enterprise",
  icon: "\u{1F3E2}",
  metaDescription: "Enterprise software development services. SOC 2/ISO 27001-ready, microservices migration, multi-cloud strategy and SLA-backed support.",
  challenges: [
    { title: "Legacy systems that can't integrate", desc: "Your mission-critical systems were built 10-15 years ago. They work, but they can't talk to modern APIs, cloud services, or mobile apps. Replacing them is risky. Integrating them is complex. Doing nothing is not an option." },
    { title: "Compliance and security requirements", desc: "SOC 2 Type 2, ISO 27001, GDPR, HIPAA, PCI-DSS — depending on your industry, you may need all of them. Each has dozens of requirements. Each requires ongoing audits. Each has severe penalties for non-compliance." },
    { title: "Multi-team coordination", desc: "Your IT department has 50+ people across 5 departments and 3 time zones. Every project touches multiple teams. Coordination overhead kills velocity. You need development practices that scale across large organizations." },
    { title: "Vendor lock-in", desc: "You're paying premium prices to a legacy vendor because switching is too painful. Your data is in proprietary formats. Your integrations are custom. Your team only knows their tools. Breaking free requires a deliberate strategy." },
    { title: "Security audits and penetration testing", desc: "Your board requires annual penetration tests. Your customers demand security questionnaires. Your cyber insurance requires specific controls. You need development practices that pass audits without emergency remediation sprints." },
  ],
  solutions: [
    { title: "Enterprise architecture review and modernization", desc: "We assess your current architecture, identify bottlenecks and risks, and create a phased modernization roadmap. No big-bang rewrites — we migrate incrementally with zero disruption to ongoing operations." },
    { title: "SOC 2 Type 2 and ISO 27001 development practices", desc: "Security controls built into every stage of development. Code reviews, dependency scanning, secrets management, audit logging, and access controls. Ready for SOC 2 and ISO 27001 audits without emergency preparation." },
    { title: "Microservices migration from monolith", desc: "Strangler fig pattern: we extract services one at a time from your monolith, build replacement microservices, and route traffic gradually. The monolith shrinks safely while new services handle increasing load." },
    { title: "Multi-cloud strategy (AWS, Azure, GCP)", desc: "Avoid vendor lock-in with architecture that spans multiple cloud providers. Terraform-managed infrastructure. Portable containerized workloads. Cloud-agnostic data layers. Negotiate better pricing with leverage." },
    { title: "SLA-backed enterprise support", desc: "Dedicated support team with guaranteed response times: critical issues under 4 hours, high priority under 8 hours. 24/7 on-call rotation for production systems. Quarterly business reviews and roadmap alignment." },
    { title: "Security hardening and penetration testing", desc: "OWASP Top 10 protection, dependency vulnerability scanning, secrets rotation, penetration testing before every major release. We find and fix vulnerabilities before attackers do." },
  ],
  techTags: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "OAuth 2.0", "SAML", "API Gateway", "PostgreSQL"],
  results: [
    { metric: "99.99%", label: "uptime SLA" },
    { metric: "SOC 2", label: "Type 2 compliant" },
    { metric: "<4hr", label: "critical response time" },
  ],
  industries: ["Financial services", "Healthcare systems", "Manufacturing", "Retail chains", "Telecommunications", "Government agencies"],
};