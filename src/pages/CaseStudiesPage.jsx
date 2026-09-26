import React from "react";
import { SectionHeader } from "../components/molecules/SectionHeader";
import { CaseStudiesSection } from "../components/organisms/CaseStudiesSection";
import { CtaSection } from "../components/organisms/CtaSection";

export const CaseStudiesPage = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Case Studies Header */}
      <section className="relative w-full bg-[#fbfde9] pt-36 sm:pt-44 md:pt-48 pb-12 px-4 sm:px-6 lg:px-8 border-b border-black/5">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <SectionHeader
            badge="Case Studies"
            title="Growth you can actually measure"
            subtitle="We focus on what matters — engagement, leads, and revenue. Real campaigns, authentic creative hooks, and verifiable results."
            titleTag="h1"
            className="mb-6"
          />
        </div>
      </section>

      {/* Case Studies Grid & Filters */}
      <CaseStudiesSection showAll className="!pt-8" />

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};
