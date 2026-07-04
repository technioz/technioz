"use client";

import { useState, useCallback, useEffect } from "react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  // Auto-advance every 5 seconds; loop from last back to first
  useEffect(() => {
    if (total <= 1) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, total]);

  return (
    <section className="bg-white-200">
      <div className="max-w-[1440px] mx-auto px-6 py-16 lg:px-[148px] lg:py-[120px]">
        <div className="flex flex-col gap-[48px] lg:gap-[60px]">
          <div className="flex items-center justify-between gap-6">
            <h2 className="h3 text-black-500">What our clients say.</h2>
            <div className="hidden sm:flex items-center gap-2">
              <CarouselButton onClick={prev} ariaLabel="Previous testimonial">
                <Chevron direction="left" />
              </CarouselButton>
              <CarouselButton onClick={next} ariaLabel="Next testimonial">
                <Chevron direction="right" />
              </CarouselButton>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={`${t.author}-${i}`}
                  className="shrink-0 w-full px-0 md:px-3"
                >
                  <TestimonialCard t={t} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex sm:hidden items-center justify-center gap-2">
            <CarouselButton onClick={prev} ariaLabel="Previous testimonial">
              <Chevron direction="left" />
            </CarouselButton>
            <CarouselButton onClick={next} ariaLabel="Next testimonial">
              <Chevron direction="right" />
            </CarouselButton>
          </div>

          <div className="flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === index ? "bg-cobolt-500" : "bg-black-200 hover:bg-black-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="bg-white-300 rounded-sm p-[32px] flex flex-col gap-[24px] h-full max-w-[720px] mx-auto">
      <p className="p3 text-black-400 italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
      <div className="flex flex-col gap-1 mt-auto">
        <span className="font-display text-[18px] font-medium text-black-500">{t.author}</span>
        <span className="p5 text-black-400">{t.role}</span>
      </div>
    </div>
  );
}

function CarouselButton({
  children,
  onClick,
  ariaLabel,
}: {
  children: React.ReactNode;
  onClick: () => void;
  ariaLabel: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-black-200 text-black-400 hover:border-cobolt-500 hover:text-cobolt-500 transition-colors"
    >
      {children}
    </button>
  );
}

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d={direction === "left" ? "M10 3L5 8L10 13" : "M6 3L11 8L6 13"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
