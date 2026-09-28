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
        "relative flex flex-col justify-between overflow-hidden rounded-[32px] p-6 sm:p-7 transition-all duration-300 h-[520px] sm:h-[540px] min-h-[520px] sm:min-h-[540px] max-h-[520px] sm:max-h-[540px] select-none",
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
            className="flex flex-col justify-between h-full w-full overflow-hidden"
          >
            <div className="flex items-center justify-between w-full shrink-0">
              <span className="text-xs font-mono font-bold tracking-widest text-[#d2e823] px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
                {number}
              </span>
              <button
                type="button"
                onMouseEnter={() => setIsRevealed(true)}
                onClick={() => setIsRevealed(true)}
                aria-label={`View includes for ${title}`}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#d2e823] flex items-center justify-center text-black shadow-[0_0_20px_rgba(210,232,35,0.45)] hover:bg-[#dff15c] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <ArrowUp className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            <div className="relative w-full rounded-2xl overflow-hidden bg-black/60 flex items-center justify-center h-48 sm:h-52 border border-white/10 shrink-0 my-auto shadow-inner">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-95 transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col gap-1.5 shrink-0 pt-2 text-left">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white tracking-tight leading-tight">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-body">
                {subtitle}
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col justify-between h-full w-full overflow-hidden text-left"
          >
            <div className="flex items-center justify-between w-full shrink-0">
              <span className="text-xs font-mono font-bold tracking-widest text-[#d2e823] px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
                {number}
              </span>
              <button
                type="button"
                onClick={() => setIsRevealed(false)}
                aria-label={`Close details for ${title}`}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#d2e823] hover:text-black hover:border-[#d2e823] transition-all duration-300 cursor-pointer"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            <div className="flex flex-col gap-1.5 shrink-0 pt-3">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white tracking-tight leading-snug">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-body">
                {subtitle}
              </p>
            </div>

            <div className="my-auto py-2 flex flex-col gap-2">
              <h4 className="font-heading font-bold text-base sm:text-lg text-[#d2e823] mb-1">
                Includes:
              </h4>
              <div className="flex flex-col gap-2 w-full">
                {includes.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-white/12 text-white/90 font-body text-xs sm:text-sm font-medium bg-white/[0.03]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d2e823] shadow-[0_0_8px_#d2e823] shrink-0" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceCard;
