import React from "react";
import { partnersData } from "../../data/partnersData";

export const PartnersTicker = () => {
  // Duplicate logos for seamless infinite loop
  const logos = [...partnersData, ...partnersData, ...partnersData];

  return (
    <section className="relative w-full py-12 md:py-16 bg-[#fbfde9] overflow-hidden border-y border-black/5">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
          Growth Partners
        </span>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Left and Right Fade Gradients */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-[#fbfde9] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-[#fbfde9] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex shrink-0 animate-marquee items-center gap-12 sm:gap-16">
          {logos.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 sm:h-14 w-32 sm:w-44 px-3 grayscale opacity-65 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
