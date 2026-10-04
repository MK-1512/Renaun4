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
        "group relative flex flex-col justify-end overflow-hidden rounded-[28px] sm:rounded-[32px] h-[490px] sm:h-[530px] transition-all duration-500 select-none",
        "border border-[#8D6E63] shadow-lg",
        className,
      )}
    >
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#3E2723]">
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

      <div
        className={cn(
          "relative z-10 m-3 sm:m-4 transition-all duration-300 pointer-events-none",
          isHovered
            ? "opacity-0 translate-y-4 pointer-events-none"
            : "opacity-100 translate-y-0",
        )}
      >
        <div className="p-4 sm:p-5 rounded-2xl bg-[#3E2723]/90 backdrop-blur-md border border-[#8D6E63] flex items-center justify-between shadow-xl">
          <div className="flex flex-col gap-0.5">
            <h4 className="font-heading font-bold text-base sm:text-lg text-[#D7CCC8] leading-tight">
              {title}
            </h4>
            <span className="text-xs text-[#BCAAA4] font-body">
              {subtitle}
            </span>
          </div>

          <span className="bg-[#D7CCC8] text-[#3E2723] font-semibold text-xs px-3.5 py-1 rounded-full shadow-sm">
            {category}
          </span>
        </div>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-0 z-20 flex flex-col justify-between p-7 sm:p-8 md:p-9 bg-[#3E2723] border-2 border-[#8D6E63] shadow-2xl"
          >
            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col">
                <h3 className="font-heading font-bold text-2xl text-[#D7CCC8] leading-tight">
                  {title}
                </h3>
                <span className="text-xs sm:text-sm text-[#BCAAA4] font-body mt-0.5">
                  {subtitle}
                </span>
              </div>

              <span className="bg-[#D7CCC8] text-[#3E2723] font-bold text-xs px-3.5 py-1 rounded-full shadow-sm">
                {category}
              </span>
            </div>

            <div className="flex flex-col w-full my-auto py-2">
              <div className="flex flex-col items-center text-center">
                <span className="font-heading font-bold text-3xl sm:text-4xl text-[#D7CCC8] tracking-tight leading-none">
                  {statsData.views}
                </span>
                <span className="text-xs text-[#BCAAA4] font-medium flex items-center gap-1.5 mt-1.5">
                  <Eye className="w-3.5 h-3.5 text-[#D7CCC8] stroke-[2.2]" />
                  Views
                </span>
              </div>

              <div className="border-t border-[#8D6E63]/40 my-3.5 sm:my-4 w-full" />

              <div className="flex flex-col items-center text-center">
                <span className="font-heading font-bold text-3xl sm:text-4xl text-[#D7CCC8] tracking-tight leading-none">
                  {statsData.click}
                </span>
                <span className="text-xs text-[#BCAAA4] font-medium flex items-center gap-1.5 mt-1.5">
                  <MousePointerClick className="w-3.5 h-3.5 text-[#D7CCC8] stroke-[2.2]" />
                  Click
                </span>
              </div>

              <div className="border-t border-[#8D6E63]/40 my-3.5 sm:my-4 w-full" />

              <div className="flex flex-col items-center text-center">
                <span className="font-heading font-bold text-3xl sm:text-4xl text-[#D7CCC8] tracking-tight leading-none">
                  {statsData.growth}
                </span>
                <span className="text-xs text-[#BCAAA4] font-medium flex items-center gap-1.5 mt-1.5">
                  <Users className="w-3.5 h-3.5 text-[#D7CCC8] stroke-[2.2]" />
                  Growth
                </span>
              </div>
            </div>

            <div className="pt-2 w-full">
              <Link
                to={`/case-study/${id}`}
                className="w-full py-3.5 rounded-full bg-[#D7CCC8] text-[#3E2723] text-center font-bold text-sm hover:bg-[#BCAAA4] transition-all shadow-sm block"
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
