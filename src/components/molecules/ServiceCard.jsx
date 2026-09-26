import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, X } from "lucide-react";
import { cn } from "../../utils/cn";

export const ServiceCard = ({
  number,
  title,
  subtitle,
  image,
  includes = [],
  href = "/service",
  className = "",
}) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div
      onMouseLeave={() => setIsRevealed(false)}
      className={cn(
        "relative flex flex-col justify-between overflow-hidden rounded-[32px] p-7 sm:p-8 transition-all duration-300 min-h-[490px] select-none",
        isRevealed
          ? "bg-[#111418] border border-[#d2e823]/60 shadow-[0_0_40px_rgba(210,232,35,0.22)]"
          : "bg-[#0e1014] border border-white/10 hover:border-[#d2e823]/50 hover:shadow-[0_0_30px_rgba(210,232,35,0.15)]",
        className,
      )}
    >
      <AnimatePresence mode="wait">
        {!isRevealed ? (
          <motion.div
            key="front"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center text-center h-full justify-between flex-grow"
          >
            {/* Top 3D illustration */}
            <div className="relative w-full flex items-center justify-center pt-2 pb-4 h-44 sm:h-48">
              <img
                src={image}
                alt={title}
                className="max-h-full max-w-[85%] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Title & Subtitle */}
            <div className="flex flex-col items-center gap-2.5 my-auto">
              <h3 className="font-heading font-bold text-2xl sm:text-[26px] text-white tracking-tight leading-tight">
                {title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed max-w-[270px]">
                {subtitle}
              </p>
            </div>

            {/* Centered Up Arrow Button */}
            <div className="pt-6 mt-auto">
              <button
                type="button"
                onMouseEnter={() => setIsRevealed(true)}
                onClick={() => setIsRevealed(true)}
                aria-label={`View includes for ${title}`}
                className="w-12 h-12 rounded-full bg-[#d2e823] flex items-center justify-center text-black shadow-[0_0_20px_rgba(210,232,35,0.55)] hover:bg-[#dff15c] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <ArrowUp className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col text-left h-full justify-between flex-grow"
          >
            {/* Top Title & Subtitle */}
            <div className="flex flex-col gap-2 pt-1">
              <h3 className="font-heading font-bold text-2xl sm:text-[28px] text-white tracking-tight leading-snug">
                {title}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed font-body">
                {subtitle}
              </p>
            </div>

            {/* Includes Section */}
            <div className="my-auto py-4">
              <h4 className="font-heading font-bold text-lg text-[#d2e823] mb-3.5">
                Includes:
              </h4>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full">
                {includes.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full border border-white/15 text-white/90 font-body text-xs sm:text-sm font-medium bg-white/[0.04]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d2e823] shadow-[0_0_8px_#d2e823] shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Centered Close X Button */}
            <div className="pt-6 mt-auto flex justify-center">
              <button
                type="button"
                onClick={() => setIsRevealed(false)}
                aria-label={`Close details for ${title}`}
                className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#d2e823] hover:text-black hover:border-[#d2e823] transition-all duration-300 cursor-pointer"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceCard;
