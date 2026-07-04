"use client";

import { useState } from "react";

interface Tab {
  label: string;
  model: string;
  content: string;
  code: string;
}

interface DemoWidgetProps {
  tabs: Tab[];
}

export function DemoWidget({ tabs }: DemoWidgetProps) {
  const [activeTab, setActiveTab] = useState(0);
  const tab = tabs[activeTab];

  return (
    <div className="bg-white-300 border border-neutral-300 rounded-sm p-4 md:p-6">
      {/* Tab buttons */}
      <div role="tablist" className="grid grid-cols-1 lg:grid-cols-3 mb-4">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            type="button"
            role="tab"
            aria-selected={i === activeTab}
            onClick={() => setActiveTab(i)}
            className={`p-2 sm:p-3 font-mono text-[10px] uppercase tracking-[1.2px] text-center transition-colors whitespace-nowrap cursor-pointer border border-solid ${
              i === activeTab
                ? "border-cobolt-500 text-cobolt-500 relative z-10"
                : "border-neutral-300 text-black-400 hover:text-cobolt-500 lg:-ml-px"
            } ${i === 0 ? "rounded-l-[2px]" : ""} ${i === tabs.length - 1 ? "rounded-r-[2px]" : ""}`}
            style={{ fontFeatureSettings: "'ss09' 1" }}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Content: code panel + preview */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        {/* Preview area */}
        <div className="order-1 md:order-2 flex-1 min-w-0 h-[420px] md:h-[280px] bg-white-100 border border-cobolt-500 rounded-sm flex overflow-hidden">
          <div className="relative flex flex-col flex-1 min-w-0 p-4 overflow-hidden">
            <div className="flex-1 min-h-0 overflow-hidden">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[12px] uppercase tracking-[1.2px] text-black-400" style={{ fontFeatureSettings: "'ss09' 1" }}>
                    {tab.model}
                  </span>
                </div>
                <div className="flex-1 overflow-y-auto min-h-0">
                  <p className="font-mono text-[12px] uppercase tracking-[1.2px] text-black-500" style={{ fontFeatureSettings: "'ss09' 1" }}>
                    {tab.content}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Code panel */}
          <div className="hidden md:block w-[200px] shrink-0 min-w-0 p-4 overflow-hidden border-l border-cobolt-500" style={{ backgroundColor: "#d7d3f4" }}>
            <pre className="font-mono text-[10px] leading-[1.4] text-cobolt-500 whitespace-pre m-0" style={{ fontFeatureSettings: "'ss09' 1", letterSpacing: "0.6px", textTransform: "uppercase" }}>
              {tab.code}
            </pre>
          </div>
        </div>

        {/* Try it button */}
        <button
          type="button"
          className="order-3 md:order-1 bg-cobolt-500 rounded-sm flex flex-row md:flex-col items-center justify-center gap-2 md:gap-4 px-4 py-2.5 md:p-3 w-full md:w-[136px] md:shrink-0 text-white-100 cursor-pointer transition-opacity hover:opacity-90"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="2" width="6" height="11" rx="3" />
            <path d="M19 10v2a7 7 0 01-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="22" />
          </svg>
          <span className="font-mono text-[11px] md:text-[12px] uppercase tracking-[1.2px] text-center leading-none" style={{ fontFeatureSettings: "'ss09' 1" }}>
            Try it out
          </span>
        </button>
      </div>
    </div>
  );
}
