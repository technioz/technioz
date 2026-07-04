"use client";

import Image from "next/image";

interface MarqueeCustomer {
  name: string;
  logo: string;
}

export function CustomerMarquee({ customers }: { customers: MarqueeCustomer[] }) {
  const doubled = [...customers, ...customers];

  return (
    <div className="overflow-hidden bg-white-200 py-10 lg:py-14">
      <div className="relative">
        {/* Edge fade gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-[80px] z-10 pointer-events-none bg-gradient-to-r from-white-200 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-[80px] z-10 pointer-events-none bg-gradient-to-l from-white-200 to-transparent" />

        {/* Marquee track — duplicated once for seamless loop */}
        <div className="flex w-max animate-marquee">
          {doubled.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="shrink-0 flex items-center justify-center px-[32px] lg:px-[48px] h-[100px] border-r border-neutral-300/40"
            >
              <div className="relative w-[180px] h-[180px]">
                <Image
                  src={item.logo}
                  alt={`${item.name} logo`}
                  fill
                  sizes="180px"
                  className="object-contain customer-logo"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        :global(.customer-logo) {
          filter: brightness(0);
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }
        :global(.customer-logo:hover) {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}