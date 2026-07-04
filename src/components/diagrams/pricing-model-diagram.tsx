export function PricingModelDiagram() {
  const tiers = [
    {
      name: "Project-Based",
      tagline: "Fixed scope. Fixed price.",
      price: "$10K – $100K+",
      unit: "per project",
      desc: "Best for well-defined projects with clear requirements and a known endpoint.",
      features: [
        "MVP packages from $15K",
        "Milestone-based billing",
        "Fixed deliverables and timeline",
        "30-day post-launch support included",
        "All code and IP transferred to you",
      ],
      highlight: false,
    },
    {
      name: "Dedicated Team",
      tagline: "Your squad, on retainer.",
      price: "$8K – $30K",
      unit: "per month",
      desc: "A full team — PM, developers, QA — working only on your product. Scales up or down monthly.",
      features: [
        "Project manager + developers + QA",
        "Two-week sprint cadence with demos",
        "Scale team size month to month",
        "No long-term contracts required",
        "Dedicated Slack channel and weekly calls",
        "Architecture and code reviews included",
      ],
      highlight: true,
    },
    {
      name: "Team Augmentation",
      tagline: "Engineers on demand.",
      price: "$3K – $6K",
      unit: "per engineer / month",
      desc: "Individual engineers embedded in your existing team. No recruiting, no onboarding lag.",
      features: [
        "Per-engineer monthly pricing",
        "React, Node.js, DevOps, Python available",
        "Embedded in your workflow and tools",
        "No onboarding lag — productive week one",
        "Cancel any time with 30 days notice",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="w-full" role="region" aria-label="Technioz pricing models: project-based, dedicated team, and retainer plans">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-neutral-300 border border-neutral-300 rounded-sm overflow-hidden">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`flex flex-col gap-[24px] p-[32px] lg:p-[40px] ${tier.highlight ? "bg-black-500" : "bg-white-200"}`}
          >
            {/* Header */}
            <div className="flex flex-col gap-[8px]">
              <span
                className={`e1 ${tier.highlight ? "text-cobolt-300" : "text-cobolt-500"}`}
              >
                {tier.tagline}
              </span>
              <h3
                className={`font-display text-[28px] leading-none tracking-[-1.4px] ${tier.highlight ? "text-white-100" : "text-black-500"}`}
              >
                {tier.name}
              </h3>
            </div>

            {/* Price */}
            <div className="flex flex-col gap-[4px]">
              <div className="flex items-baseline gap-[8px]">
                <span
                  className={`font-display text-[36px] leading-none tracking-[-1.8px] ${tier.highlight ? "text-cobolt-300" : "text-cobolt-500"}`}
                >
                  {tier.price}
                </span>
                <span
                  className={`p5 ${tier.highlight ? "text-black-200" : "text-black-400"}`}
                >
                  {tier.unit}
                </span>
              </div>
            </div>

            {/* Description */}
            <p
              className={`p4 leading-relaxed ${tier.highlight ? "text-black-200" : "text-black-400"}`}
            >
              {tier.desc}
            </p>

            {/* Divider */}
            <div className={`w-full h-px ${tier.highlight ? "bg-black-400" : "bg-neutral-300"}`} />

            {/* Features */}
            <ul className="flex flex-col gap-[12px] flex-1">
              {tier.features.map((f) => (
                <li
                  key={f}
                  className={`p5 flex items-start gap-[10px] ${tier.highlight ? "text-black-100" : "text-black-400"}`}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className={`shrink-0 mt-[3px] ${tier.highlight ? "text-cobolt-300" : "text-cobolt-500"}`}
                  >
                    <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}