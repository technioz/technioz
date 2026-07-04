"use client";

import { useEffect, useRef, useState } from "react";

interface Step {
  title: string;
  desc: string;
  image: string;
  cta: { label: string; href: string };
}

interface ReferenceFlowProps {
  steps: Step[];
}

export function ReferenceFlow({ steps }: ReferenceFlowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = sectionRef.current;
    if (!container) return;

    const stepEls = container.querySelectorAll("[data-step]");

    const handleScroll = () => {
      const viewportMiddle = window.innerHeight / 2;
      let closest = 0;
      let closestDist = Infinity;

      stepEls.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        const elMiddle = rect.top + rect.height / 2;
        const dist = Math.abs(elMiddle - viewportMiddle);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });

      setActiveIndex(closest);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="bg-white-200" data-river-sticky>
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:py-20 lg:px-[148px] lg:py-0">
        {/* Mobile: stacked */}
        <div className="lg:hidden flex flex-col gap-16">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col gap-[32px]">
              <div className="aspect-[4/3] border rounded-[4px] overflow-clip relative border-neutral-300 bg-white-100 flex items-center justify-center">
                <span className="p4 text-black-300">{step.image}</span>
              </div>
              <div className="flex flex-col gap-[24px] items-start">
                <h3 className="h4 text-black-500">{step.title}</h3>
                <p className="p4 text-black-400">{step.desc}</p>
                <a href={step.cta.href} className="cta-secondary">{step.cta.label}</a>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: sticky text + media */}
        <div className="hidden lg:grid lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] xl:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:gap-[60px] xl:gap-[120px]">
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <div
                key={i}
                data-step={i}
                className="rf-step min-h-[80vh] flex flex-col justify-center max-w-[440px] gap-[32px] transition-opacity duration-400 ease-in-out"
                style={{ opacity: activeIndex === i ? 1 : 0.25 }}
              >
                <div className="flex flex-col gap-[24px] items-start">
                  <h3 className="h4 text-black-500">{step.title}</h3>
                  <p className="p4 text-black-400">{step.desc}</p>
                </div>
                <div className="self-start">
                  <a href={step.cta.href} className="cta-secondary">{step.cta.label}</a>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div aria-hidden="true" className="absolute left-0 right-0 top-[30vh] bottom-[30vh] pointer-events-none" style={{
              backgroundImage: "linear-gradient(rgba(0,0,0,.06),rgba(0,0,0,.06)),linear-gradient(rgba(0,0,0,.06),rgba(0,0,0,.06)),linear-gradient(rgba(0,0,0,.06),rgba(0,0,0,.06)),linear-gradient(rgba(0,0,0,.06),rgba(0,0,0,.06)),linear-gradient(rgba(0,0,0,.06),rgba(0,0,0,.06)),linear-gradient(rgba(0,0,0,.06),rgba(0,0,0,.06)),linear-gradient(rgba(0,0,0,.06),rgba(0,0,0,.06)),linear-gradient(rgba(0,0,0,.06),rgba(0,0,0,.06)),linear-gradient(rgba(0,0,0,.06),rgba(0,0,0,.06))",
              backgroundSize: "1px 100%",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "0%,12.5%,25%,37.5%,50%,62.5%,75%,87.5%,100%",
            }} />

            <div className="sticky top-24 h-[80vh] flex items-center">
              <div className="relative w-full aspect-[4/3]">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 border rounded-[4px] overflow-clip border-neutral-300 bg-white-100 flex items-center justify-center transition-opacity duration-500 ease-in-out`}
                    style={{ opacity: activeIndex === i ? 1 : 0 }}
                  >
                    <span className="p4 text-black-300">{step.image}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
