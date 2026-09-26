import React from "react";
import { partnersData } from "../../data/partnersData";

export const PartnersTicker = () => {
  // Duplicate logos for seamless infinite loop
  const logos = [...partnersData, ...partnersData, ...partnersData];

  return (
    <section className="relative w-full py-12 md:py-16 bg-[#08090a] overflow-hidden border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-[#d2e823]/80">
          Growth Partners
        </span>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Left and Right Fade Gradients */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-[#08090a] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-[#08090a] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex shrink-0 animate-marquee items-center gap-12 sm:gap-16">
          {logos.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 sm:h-14 w-32 sm:w-44 px-3 brightness-0 invert opacity-60 hover:opacity-100 hover:drop-shadow-[0_0_10px_rgba(210,232,35,0.5)] transition-all duration-300"
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
