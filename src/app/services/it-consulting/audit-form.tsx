"use client";

import { useState } from "react";

export function AuditForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-cobolt-500/5 rounded-sm p-[32px] text-center">
        <p className="p3 text-black-500 font-medium">Audit request received.</p>
        <p className="p5 text-black-400 mt-2">We will email your 10-point technical audit within 24 hours.</p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <input
        type="text"
        placeholder="Full name"
        required
        className="h-[48px] px-4 rounded-sm border border-neutral-300 focus:outline-none focus:border-cobolt-500"
      />
      <input
        type="email"
        placeholder="Email address"
        required
        className="h-[48px] px-4 rounded-sm border border-neutral-300 focus:outline-none focus:border-cobolt-500"
      />
      <input
        type="text"
        placeholder="Company name (optional)"
        className="h-[48px] px-4 rounded-sm border border-neutral-300 focus:outline-none focus:border-cobolt-500"
      />
      <input
        type="url"
        placeholder="App or website URL (optional)"
        className="h-[48px] px-4 rounded-sm border border-neutral-300 focus:outline-none focus:border-cobolt-500"
      />
      <select
        className="h-[48px] px-4 rounded-sm border border-neutral-300 focus:outline-none focus:border-cobolt-500 bg-white-200 text-black-400"
        defaultValue=""
      >
        <option value="" disabled>What worries you most about your current system?</option>
        <option value="slow">It is slow or crashes under load</option>
        <option value="legacy">We are stuck on legacy tech</option>
        <option value="security">Security or compliance gaps</option>
        <option value="cost">Cloud or infrastructure costs are too high</option>
        <option value="team">The team cannot scale delivery</option>
        <option value="other">Something else</option>
      </select>
      <button type="submit" className="cta-primary w-full justify-center">
        Get my free audit
      </button>
      <p className="p5 text-black-300">No spam. We review each request manually and reply within 24 hours.</p>
    </form>
  );
}
