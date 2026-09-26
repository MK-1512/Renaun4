import React from "react";
import { CaseStudiesSection } from "../components/organisms/CaseStudiesSection";
import { CtaSection } from "../components/organisms/CtaSection";

export const CaseStudiesPage = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Single unified Case Studies Section (duplicate upper header removed) */}
      <CaseStudiesSection showAll className="pt-36 sm:pt-44 md:pt-48" />

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default CaseStudiesPage;
