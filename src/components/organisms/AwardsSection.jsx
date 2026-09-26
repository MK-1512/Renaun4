import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

import socialAwardVideo from "../../assets/social_award.mp4";
import marketingAwardVideo from "../../assets/marketing_award.mp4";
import contentAwardVideo from "../../assets/content_award.mp4";
import milestoneAwardVideo from "../../assets/milestone_award.mp4";

export const awardsData = [
  {
    id: 0,
    title: "Social Growth Excellence Award",
    description:
      "For delivering consistent, measurable brand growth across social platforms",
    year: "2025",
    video: socialAwardVideo,
    stats: [
      { value: "280%", label: "Avg. Engagement Growth" },
      { value: "45×", label: "ROAS across campaing" },
      { value: "50+", label: "Brand Scaled" },
    ],
    note: "Awarded for consistent client growth and performance-driven strategies.",
  },
  {
    id: 1,
    title: "Performance Marketing Achievement",
    description:
      "Recognized for high-impact campaigns and strong return on ad spend",
    year: "2025",
    video: marketingAwardVideo,
    stats: [
      { value: "200%", label: "Avg. Engagement Growth" },
      { value: "45×", label: "ROAS across campaing" },
      { value: "50+", label: "Brand Scaled" },
    ],
    note: "Awarded for consistent client growth and performance-driven strategies.",
  },
  {
    id: 2,
    title: "Creative Content Distinction",
    description:
      "Awarded for producing engaging, conversion-focused social content",
    year: "2025",
    video: contentAwardVideo,
    stats: [
      { value: "200%", label: "Avg. Engagement Growth" },
      { value: "87×", label: "ROAS across campaing" },
      { value: "95+", label: "Brand Scaled" },
    ],
    note: "Awarded for consistent client growth and performance-driven strategies.",
  },
  {
    id: 3,
    title: "Digital Growth Milestone",
    description:
      "100M+ views generated across campaigns, viral content, and client projects",
    year: "2025",
    video: milestoneAwardVideo,
    stats: [
      { value: "200%", label: "Avg. Engagement Growth" },
      { value: "45×", label: "ROAS across campaing" },
      { value: "83+", label: "Brand Scaled" },
    ],
    note: "Awarded for consistent client growth and performance-driven strategies.",
  },
];

export const AwardsSection = ({ className = "" }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isTransitioningRef = useRef(false);
  const transitionTimerRef = useRef(null);

  const handleActivate = (idx) => {
    if (idx === activeIndex) return;

    // Prevent spurious rapid re-triggers while layout is animating
    if (isTransitioningRef.current) return;

    setActiveIndex(idx);
    isTransitioningRef.current = true;

    if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
    transitionTimerRef.current = setTimeout(() => {
      isTransitioningRef.current = false;
    }, 350);
  };

  const handleSelect = (idx) => {
    setActiveIndex(idx);
    isTransitioningRef.current = true;

    if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
    transitionTimerRef.current = setTimeout(() => {
      isTransitioningRef.current = false;
    }, 350);
  };

  return (
    <section
      style={{ overflowAnchor: "none" }}
      className={`relative w-full py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white ${className}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15]">
            Trusted &amp; Recognized
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            Our work has been recognized for delivering real growth, creative
            excellence, &amp; measurable results.
          </p>
        </div>

        {/* Awards Accordion List */}
        <div className="flex flex-col border-t border-[#222222]">
          {awardsData.map((award, idx) => {
            const isExpanded = activeIndex === idx;

            return (
              <div
                key={award.id}
                className="relative border-b border-[#222222]"
                style={{ overflowAnchor: "none" }}
              >
                {/* Collapsed Row */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? 0 : "auto",
                    opacity: isExpanded ? 0 : 1,
                  }}
                  transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
                  className="overflow-hidden"
                >
                  <div
                    className="w-full py-7 sm:py-9 px-3 sm:px-6 flex items-center justify-between gap-6 cursor-pointer group hover:bg-white/[0.03] transition-colors duration-200 select-none"
                    onMouseEnter={() => handleActivate(idx)}
                    onClick={() => handleSelect(idx)}
                  >
                    {/* Left: Title */}
                    <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-white group-hover:text-[#d2e823] transition-colors duration-200 shrink-0 w-full sm:w-[40%] text-left">
                      {award.title}
                    </h3>

                    {/* Middle: Description */}
                    <p className="text-neutral-400 text-xs sm:text-sm md:text-base hidden sm:block flex-1 text-left leading-relaxed">
                      {award.description}
                    </p>

                    {/* Right: Year */}
                    <span className="text-neutral-400 font-heading font-medium text-base sm:text-lg text-right shrink-0">
                      {award.year}
                    </span>
                  </div>
                </motion.div>

                {/* Expanded Card */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
                  className="overflow-hidden"
                >
                  <div className="py-4 sm:py-6">
                    <div className="bg-[#d2e823] text-black rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 md:p-10 shadow-xl">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch">
                        {/* Left Column: Sculpture Video */}
                        <div className="lg:col-span-4 xl:col-span-4 flex">
                          <div className="w-full aspect-square sm:aspect-[4/3] lg:aspect-square rounded-[22px] sm:rounded-[26px] overflow-hidden bg-black/10 shadow-inner">
                            <video
                              src={award.video}
                              autoPlay
                              loop
                              muted
                              playsInline
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        {/* Right Column: Details & Stats */}
                        <div className="lg:col-span-8 xl:col-span-8 flex flex-col justify-between">
                          {/* Top: Title & Description + Year */}
                          <div className="flex items-start justify-between gap-4">
                            <div className="max-w-xl">
                              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#0a0a0a] tracking-tight leading-snug">
                                {award.title}
                              </h3>
                              <p className="text-[#323b06] text-sm sm:text-base mt-2 font-normal leading-relaxed">
                                {award.description}
                              </p>
                            </div>
                            <span className="font-heading font-bold text-xl sm:text-2xl text-[#0a0a0a] shrink-0 pt-0.5">
                              {award.year}
                            </span>
                          </div>

                          {/* Middle: 3 Dark Olive Green Metric Cards */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 my-6 sm:my-8">
                            {award.stats.map((stat, statIdx) => (
                              <div
                                key={statIdx}
                                className="bg-[#485306] p-5 sm:p-6 rounded-2xl flex flex-col justify-center"
                              >
                                <span className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#d2e823] tracking-tight">
                                  {stat.value}
                                </span>
                                <span className="text-xs sm:text-sm text-[#cbd686] mt-2 font-medium leading-snug">
                                  {stat.label}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Bottom Note */}
                          <p className="text-[#566308] font-medium text-xs sm:text-sm">
                            {award.note}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
