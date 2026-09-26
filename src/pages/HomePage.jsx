import React from "react";
import { HeroSection } from "../components/organisms/HeroSection";
import { PartnersTicker } from "../components/organisms/PartnersTicker";
import { ServicesSection } from "../components/organisms/ServicesSection";
import { CaseStudiesSection } from "../components/organisms/CaseStudiesSection";
import { PricingSection } from "../components/organisms/PricingSection";
import { TeamSection } from "../components/organisms/TeamSection";
import { TestimonialsSection } from "../components/organisms/TestimonialsSection";
import { FaqSection } from "../components/organisms/FaqSection";
import { CtaSection } from "../components/organisms/CtaSection";

export const HomePage = () => {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <PartnersTicker />
      <ServicesSection />
      <CaseStudiesSection />
      <PricingSection />
      <TeamSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
};
