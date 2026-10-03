import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "../atoms/Badge";
import { CaseStudyCard } from "../molecules/CaseStudyCard";
import { caseStudiesData } from "../../data/caseStudiesData";

export const CaseStudiesSection = ({ className = "" }) => {
  const study = caseStudiesData[0];

  return (
    <section
      className={`relative w-full py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#08090a] ${className}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <Badge variant="lime" className="mb-4">
            Case Studies
          </Badge>

          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] mb-4">
            Growth you can actually measure
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 max-w-xl mb-8 leading-relaxed font-body">
            We focus on what matters — engagement, leads, and revenue.
          </p>

          <div className="flex items-center gap-3.5">
            <Link
              to="/service"
              className="px-6 py-2.5 rounded-full bg-[#d2e823] text-black text-sm font-semibold hover:bg-[#dff15c] transition-all shadow-[0_0_20px_rgba(210,232,35,0.25)]"
            >
              Explore Service
            </Link>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <div className="w-full max-w-[440px] sm:max-w-[480px]">
            <CaseStudyCard
              id={study.id}
              title={study.title}
              subtitle={study.subtitle}
              category={study.category}
              video={study.video}
              poster={study.poster}
              metrics={study.metrics}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
