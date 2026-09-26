import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Eye, MousePointerClick, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";

export const CaseStudyCard = ({
  id,
  title,
  subtitle,
  category,
  video,
  poster,
  metrics,
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  // Fallback default metrics if not explicitly passed
  const statsData = metrics || {
    views: "+280%",
    click: "4.2x",
    growth: "+35k",
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative flex flex-col justify-end overflow-hidden rounded-[28px] sm:rounded-[32px] h-[480px] sm:h-[520px] transition-all duration-500 select-none",
        "border border-black/10 shadow-lg",
        className,
      )}
    >
      {/* Background Video / Poster */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={video}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Default Unhovered State: Bottom Floating Frosted Glass Capsule */}
      <div
        className={cn(
          "relative z-10 m-3 sm:m-4 transition-all duration-300 pointer-events-none",
          isHovered
            ? "opacity-0 translate-y-4 pointer-events-none"
            : "opacity-100 translate-y-0",
        )}
      >
        <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/25 flex items-center justify-between shadow-lg">
          <div className="flex flex-col gap-0.5">
            <h4 className="font-heading font-bold text-base sm:text-lg text-white leading-tight">
              {title}
            </h4>
            <span className="text-xs text-white/80 font-body">{subtitle}</span>
          </div>

          <span className="bg-[#d2e823] text-black font-semibold text-xs px-3.5 py-1 rounded-full shadow-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Hovered State: Full Warm Frosted Glass Metrics Overlay */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-0 z-20 flex flex-col justify-between p-6 sm:p-7 bg-[#d5896f]/80 backdrop-blur-xl border-2 border-[#d97757]/60"
          >
            {/* Top row: Title/Subtitle and Category badge */}
            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col">
                <h3 className="font-heading font-bold text-2xl text-black leading-tight">
                  {title}
                </h3>
                <span className="text-xs sm:text-sm text-neutral-800 font-body mt-0.5">
                  {subtitle}
                </span>
              </div>

              <span className="bg-[#d2e823] text-black font-bold text-xs px-3.5 py-1 rounded-full shadow-sm">
                {category}
              </span>
            </div>

            {/* Middle: 3 Metrics with clean dividers */}
            <div className="flex flex-col w-full my-auto py-2">
              {/* Metric 1: Views */}
              <div className="flex flex-col items-center text-center">
                <span className="font-heading font-bold text-3xl sm:text-4xl text-black tracking-tight leading-none">
                  {statsData.views}
                </span>
                <span className="text-xs text-neutral-800 font-medium flex items-center gap-1.5 mt-1.5">
                  <Eye className="w-3.5 h-3.5 text-black/75 stroke-[2.2]" />
                  Views
                </span>
              </div>

              <div className="border-t border-black/15 my-3.5 sm:my-4 w-full" />

              {/* Metric 2: Click */}
              <div className="flex flex-col items-center text-center">
                <span className="font-heading font-bold text-3xl sm:text-4xl text-black tracking-tight leading-none">
                  {statsData.click}
                </span>
                <span className="text-xs text-neutral-800 font-medium flex items-center gap-1.5 mt-1.5">
                  <MousePointerClick className="w-3.5 h-3.5 text-black/75 stroke-[2.2]" />
                  Click
                </span>
              </div>

              <div className="border-t border-black/15 my-3.5 sm:my-4 w-full" />

              {/* Metric 3: Growth */}
              <div className="flex flex-col items-center text-center">
                <span className="font-heading font-bold text-3xl sm:text-4xl text-black tracking-tight leading-none">
                  {statsData.growth}
                </span>
                <span className="text-xs text-neutral-800 font-medium flex items-center gap-1.5 mt-1.5">
                  <Users className="w-3.5 h-3.5 text-black/75 stroke-[2.2]" />
                  Growth
                </span>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-2 w-full">
              <Link
                to={`/case-study/${id}`}
                className="w-full py-3.5 rounded-full bg-black text-white text-center font-bold text-sm hover:bg-neutral-900 transition-colors shadow-lg block"
              >
                View Case Study
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CaseStudyCard;
