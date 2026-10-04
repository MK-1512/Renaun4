import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, X } from "lucide-react";
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
        "relative flex flex-col justify-between overflow-hidden rounded-[32px] p-7 sm:p-8 md:p-9 transition-all duration-300 h-[530px] sm:h-[550px] min-h-[530px] sm:min-h-[550px] max-h-[530px] sm:max-h-[550px] select-none",
        "bg-[#D7CCC8] border border-[#BCAAA4] shadow-xl hover:border-[#3E2723]",
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
              <span className="text-xs font-mono font-bold tracking-widest text-[#D7CCC8] px-3.5 py-1.5 rounded-full bg-[#8D6E63]">
                {number}
              </span>
              <button
                type="button"
                onMouseEnter={() => setIsRevealed(true)}
                onClick={() => setIsRevealed(true)}
                aria-label={`View includes for ${title}`}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#3E2723] flex items-center justify-center text-[#D7CCC8] shadow-md hover:bg-[#4E342E] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <ArrowDown className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            <div className="relative w-full rounded-2xl overflow-hidden bg-[#3E2723]/10 flex items-center justify-center h-48 sm:h-52 border border-[#BCAAA4] shrink-0 my-auto shadow-inner">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover filter grayscale contrast-125 brightness-95 transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col gap-1.5 shrink-0 pt-2 text-left">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#3E2723] tracking-tight leading-tight">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4E342E] leading-relaxed font-body">
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
              <span className="text-xs font-mono font-bold tracking-widest text-[#D7CCC8] px-3.5 py-1.5 rounded-full bg-[#8D6E63]">
                {number}
              </span>
              <button
                type="button"
                onClick={() => setIsRevealed(false)}
                aria-label={`Close details for ${title}`}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#BCAAA4] border border-[#8D6E63] flex items-center justify-center text-[#3E2723] hover:bg-[#3E2723] hover:text-[#D7CCC8] transition-all duration-300 cursor-pointer"
              >
                <X className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            <div className="flex flex-col gap-1.5 shrink-0 pt-3">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#3E2723] tracking-tight leading-snug">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4E342E] leading-relaxed font-body">
                {subtitle}
              </p>
            </div>

            <div className="my-auto py-2 flex flex-col gap-2">
              <h4 className="font-heading font-bold text-base sm:text-lg text-[#3E2723] mb-1">
                Includes:
              </h4>
              <div className="flex flex-col gap-2 w-full">
                {includes.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-[#8D6E63]/40 text-[#3E2723] font-body text-xs sm:text-sm font-medium bg-[#BCAAA4]/70 shadow-xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3E2723] shrink-0" />
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
