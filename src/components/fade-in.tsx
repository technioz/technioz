"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Animation = "fade-up" | "fade-in" | "fade-scale";

export function FadeIn({ children, delay = 0, animation = "fade-up", className = "" }: { children: ReactNode; delay?: number; animation?: Animation; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animStyles: Record<Animation, React.CSSProperties> = {
    "fade-up": {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(12px)",
      transition: `opacity 0.5s ease-out ${delay}ms, transform 0.5s ease-out ${delay}ms`,
    },
    "fade-in": {
      opacity: visible ? 1 : 0,
      transition: `opacity 0.6s ease-out ${delay}ms`,
    },
    "fade-scale": {
      opacity: visible ? 1 : 0,
      transform: visible ? "scale(1)" : "scale(0.97)",
      transition: `opacity 0.5s ease-out ${delay}ms, transform 0.5s ease-out ${delay}ms`,
    },
  };

  return (
    <div ref={ref} className={className} style={animStyles[animation]}>
      {children}
    </div>
  );
}
