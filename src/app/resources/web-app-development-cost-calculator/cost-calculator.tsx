"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

type AppType = "saas" | "dashboard" | "marketplace" | "ecommerce" | "landing" | "internal";
type Scope = "mvp" | "standard" | "complex";
type Design = "simple" | "custom" | "premium";
type Backend = "none" | "basic" | "complex";
type Integrations = "0" | "1-3" | "4+";

const appTypeConfig: Record<AppType, { label: string; baseMin: number; baseMax: number }> = {
  saas: { label: "SaaS Platform", baseMin: 10000, baseMax: 30000 },
  dashboard: { label: "Dashboard / Admin", baseMin: 8000, baseMax: 25000 },
  marketplace: { label: "Multi-Vendor Marketplace", baseMin: 20000, baseMax: 50000 },
  ecommerce: { label: "E-commerce Store", baseMin: 15000, baseMax: 40000 },
  landing: { label: "Landing / Marketing Site", baseMin: 3000, baseMax: 12000 },
  internal: { label: "Internal Tool", baseMin: 8000, baseMax: 22000 },
};

const scopeMultiplier: Record<Scope, number> = {
  mvp: 1,
  standard: 1.8,
  complex: 3,
};

const designConfig: Record<Design, { label: string; min: number; max: number }> = {
  simple: { label: "Simple UI", min: 2000, max: 5000 },
  custom: { label: "Custom Design", min: 5000, max: 12000 },
  premium: { label: "Premium UX/UI", min: 12000, max: 25000 },
};

const backendConfig: Record<Backend, { label: string; min: number; max: number }> = {
  none: { label: "No Backend", min: 0, max: 0 },
  basic: { label: "Basic Backend", min: 5000, max: 15000 },
  complex: { label: "Complex Backend", min: 15000, max: 40000 },
};

const integrationsConfig: Record<Integrations, { label: string; min: number; max: number }> = {
  "0": { label: "None", min: 0, max: 0 },
  "1-3": { label: "1-3 Integrations", min: 3000, max: 10000 },
  "4+": { label: "4+ Integrations", min: 10000, max: 25000 },
};

function formatCurrency(n: number) {
  if (n >= 1000) {
    return `$${Math.round(n / 1000)}k`;
  }
  return `$${n.toLocaleString()}`;
}

export function CostCalculator() {
  const [appType, setAppType] = useState<AppType>("saas");
  const [scope, setScope] = useState<Scope>("standard");
  const [design, setDesign] = useState<Design>("custom");
  const [backend, setBackend] = useState<Backend>("basic");
  const [integrations, setIntegrations] = useState<Integrations>("1-3");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const estimate = useMemo(() => {
    const a = appTypeConfig[appType];
    const s = scopeMultiplier[scope];
    const d = designConfig[design];
    const b = backendConfig[backend];
    const i = integrationsConfig[integrations];

    const min = Math.round((a.baseMin * s + d.min + b.min + i.min) / 1000) * 1000;
    const max = Math.round((a.baseMax * s + d.max + b.max + i.max) / 1000) * 1000;

    return { min, max };
  }, [appType, scope, design, backend, integrations]);

  const breakdown = useMemo(
    () => [
      { label: appTypeConfig[appType].label, min: Math.round(appTypeConfig[appType].baseMin * scopeMultiplier[scope]), max: Math.round(appTypeConfig[appType].baseMax * scopeMultiplier[scope]) },
      { label: designConfig[design].label, min: designConfig[design].min, max: designConfig[design].max },
      { label: backendConfig[backend].label, min: backendConfig[backend].min, max: backendConfig[backend].max },
      { label: integrationsConfig[integrations].label, min: integrationsConfig[integrations].min, max: integrationsConfig[integrations].max },
    ],
    [appType, scope, design, backend, integrations]
  );

  const timeline = useMemo(() => {
    if (scope === "mvp") return "8–12 weeks";
    if (scope === "standard") return "3–5 months";
    return "5–9 months";
  }, [scope]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
  }

  return (
    <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">
      {/* Inputs */}
      <div className="bg-white-200 rounded-sm border border-neutral-300 p-[32px] flex flex-col gap-8">
        <h2 className="font-display text-[28px] leading-none tracking-[-1.4px] text-black-500">Build your estimate</h2>

        <RadioGroup
          label="App Type"
          value={appType}
          onChange={(v) => setAppType(v as AppType)}
          options={Object.entries(appTypeConfig).map(([value, { label }]) => ({ value, label }))}
        />

        <RadioGroup
          label="Scope"
          value={scope}
          onChange={(v) => setScope(v as Scope)}
          options={[
            { value: "mvp", label: "MVP (5-8 screens)" },
            { value: "standard", label: "Standard (15-25 screens)" },
            { value: "complex", label: "Complex (30+ screens)" },
          ]}
        />

        <RadioGroup
          label="Design & UX"
          value={design}
          onChange={(v) => setDesign(v as Design)}
          options={Object.entries(designConfig).map(([value, { label }]) => ({ value, label }))}
        />

        <RadioGroup
          label="Backend & Admin"
          value={backend}
          onChange={(v) => setBackend(v as Backend)}
          options={Object.entries(backendConfig).map(([value, { label }]) => ({ value, label }))}
        />

        <RadioGroup
          label="Third-party integrations"
          value={integrations}
          onChange={(v) => setIntegrations(v as Integrations)}
          options={Object.entries(integrationsConfig).map(([value, { label }]) => ({ value, label }))}
        />
      </div>

      {/* Result */}
      <div className="flex flex-col gap-6 sticky top-6">
        <div className="bg-cobolt-500 rounded-sm p-[32px] text-white-100">
          <span className="e1 text-white-100/70 block mb-3">Estimated cost range</span>
          <div className="font-display text-[48px] leading-none tracking-[-2.4px] mb-2">
            {formatCurrency(estimate.min)} – {formatCurrency(estimate.max)}
          </div>
          <p className="p4 text-white-100/80 mb-6">
            Typical timeline: <span className="text-white-100 font-medium">{timeline}</span>
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <label htmlFor="calc-email" className="p5 text-white-100/80">
                Enter your email to unlock the detailed PDF breakdown
              </label>
              <input
                id="calc-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="h-[48px] px-4 rounded-sm border border-white/30 bg-white/10 text-white-100 placeholder:text-white-100/50 focus:outline-none focus:border-white-100"
              />
              <button type="submit" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90 w-full justify-center">
                Get my PDF breakdown
              </button>
              <p className="p5 text-white-100/60">No spam. Unsubscribe anytime.</p>
            </form>
          ) : (
            <div className="bg-white-100/10 rounded-sm p-[24px] border border-white/20">
              <p className="p4 text-white-100 font-medium mb-4">Detailed breakdown for {email}</p>
              <div className="flex flex-col gap-3">
                {breakdown.map((item) => (
                  <div key={item.label} className="flex items-center justify-between p4 text-white-100/90 border-b border-white/10 pb-2 last:border-0 last:pb-0">
                    <span>{item.label}</span>
                    <span className="font-mono">
                      {formatCurrency(item.min)} – {formatCurrency(item.max)}
                    </span>
                  </div>
                ))}
              </div>
              <Link href="https://calendly.com/technioztech/30min" className="cta-primary-dark !bg-white-100 !text-cobolt-500 hover:!opacity-90 w-full justify-center mt-6">
                Book a free scoping call
              </Link>
            </div>
          )}
        </div>

        <div className="bg-white-200 rounded-sm border border-neutral-300 p-[24px]">
          <p className="p5 text-black-400">
            This estimate is a starting range, not a final quote. Prices vary by team location, compliance needs, and discovery findings.
          </p>
        </div>
      </div>
    </div>
  );
}

function RadioGroup({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="e1 text-black-400">{label}</span>
      <div className="flex flex-wrap gap-3">
        {options.map((opt) => {
          const active = value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(opt.value)}
              className={`px-4 py-3 rounded-sm border text-[14px] transition-all ${
                active
                  ? "border-cobolt-500 bg-cobolt-500 text-white-100"
                  : "border-neutral-300 bg-white-100 text-black-500 hover:border-cobolt-500"
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
