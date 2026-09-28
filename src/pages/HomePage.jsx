import React from "react";
import { HeroSection } from "../components/organisms/HeroSection";
import { ServicesSection } from "../components/organisms/ServicesSection";
import { CaseStudiesSection } from "../components/organisms/CaseStudiesSection";
import { PricingSection } from "../components/organisms/PricingSection";
import { TeamSection } from "../components/organisms/TeamSection";
import { ReviewsSection } from "../components/organisms/ReviewsSection";
import { FaqSection } from "../components/organisms/FaqSection";
import { CtaSection } from "../components/organisms/CtaSection";

export const HomePage = () => {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <ServicesSection />
      <CaseStudiesSection />
      <PricingSection />
      <TeamSection />
      <ReviewsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
};

export default HomePage;
