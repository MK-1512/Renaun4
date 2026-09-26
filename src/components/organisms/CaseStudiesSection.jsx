import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "../atoms/Badge";
import { CaseStudyCard } from "../molecules/CaseStudyCard";
import { caseStudiesData } from "../../data/caseStudiesData";

export const CaseStudiesSection = ({ showAll = false, className = "" }) => {
  const displayStudies = showAll
    ? caseStudiesData
    : caseStudiesData.slice(0, 3);

  return (
    <section
      className={`relative w-full py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#fbfde9] ${className}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Centered Header Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <Badge variant="lime" hasDot className="mb-4">
            Case Studies
          </Badge>

          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-black tracking-tight leading-[1.1] mb-4">
            Growth you can actually measure
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 max-w-xl mb-8 leading-relaxed font-body">
            We focus on what matters — engagement, leads, and revenue.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-3.5">
            <Link
              to="/blog"
              className="px-6 py-2.5 rounded-full bg-white border border-[#d2e823] text-black text-sm font-medium hover:bg-[#d2e823]/10 transition-colors shadow-sm"
            >
              See Blogs
            </Link>
            <Link
              to="/service"
              className="px-6 py-2.5 rounded-full bg-black text-white text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm"
            >
              Explore Service
            </Link>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {displayStudies.map((study) => (
            <CaseStudyCard
              key={study.id}
              id={study.id}
              title={study.title}
              subtitle={study.subtitle}
              category={study.category}
              video={study.video}
              poster={study.poster}
              metrics={study.metrics}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
