"use client";

import { useState } from "react";

export function ChecklistForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-cobolt-500/5 rounded-sm p-[32px] text-center">
        <p className="p3 text-black-500 font-medium">Checklist sent. Check your inbox.</p>
        <p className="p5 text-black-400 mt-2">If you do not see it, check your spam folder.</p>
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
      <button type="submit" className="cta-primary w-full justify-center">
        Send me the checklist
      </button>
      <p className="p5 text-black-300">No spam. Unsubscribe anytime.</p>
    </form>
  );
}
