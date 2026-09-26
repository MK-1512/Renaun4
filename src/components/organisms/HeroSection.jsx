import React from "react";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { HeroVideoWheel } from "./HeroVideoWheel";
import { siteData } from "../../data/siteData";

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#fbfde9] pt-32 sm:pt-40 md:pt-44 pb-12 overflow-hidden flex flex-col items-center text-center">
      {/* Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Top Badge */}
        <Badge
          variant="cream"
          hasDot
          className="mb-6 shadow-sm border border-black/10 bg-[#ebf59a]"
        >
          Trusted by global brands
        </Badge>

        {/* Main H1 Heading */}
        <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-tight text-[#0a0a0a] leading-[1.08] max-w-4xl mx-auto mb-6">
          Build, Grow, and Scale Your Brand on Social Media
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto mb-10 leading-relaxed font-body">
          {siteData.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-6">
          <Button
            to="/case-study"
            variant="dark"
            size="lg"
            showArrow
            className="shadow-xl px-7"
          >
            Case Studies
          </Button>

          <Button
            to="/service"
            variant="white"
            size="lg"
            showArrow
            className="shadow-md px-7 border border-black/10"
          >
            Explore Service
          </Button>
        </div>
      </div>

      {/* Signature Rotating Circular Video Wheel */}
      <HeroVideoWheel />
    </section>
  );
};
