import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "../atoms/Badge";
import { CaseStudyCard } from "../molecules/CaseStudyCard";
import { caseStudiesData } from "../../data/caseStudiesData";

export const CaseStudiesSection = ({ className = "" }) => {
  const study = caseStudiesData[0];

  return (
    <section
      className={`relative w-full py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#4E342E] ${className}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <Badge variant="dark" className="mb-4">
            Case Studies
          </Badge>

          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-[#D7CCC8] tracking-tight leading-[1.1] mb-4 uppercase">
            Growth you can actually measure
          </h2>

          <p className="text-base sm:text-lg text-[#BCAAA4] max-w-xl mb-8 leading-relaxed font-body">
            We focus on what matters — engagement, leads, and revenue.
          </p>

          <div className="flex items-center gap-3.5">
            <Link
              to="/service"
              className="px-7 py-3 rounded-full bg-[#D7CCC8] text-[#3E2723] text-sm font-bold uppercase tracking-wider hover:bg-[#BCAAA4] transition-all shadow-md"
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
