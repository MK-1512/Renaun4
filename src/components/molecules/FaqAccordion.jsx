import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../utils/cn";

export const FaqAccordion = ({ items = [], className = "" }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className={cn("flex flex-col gap-4 w-full", className)}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            onMouseEnter={() => setOpenIndex(idx)}
            className={cn(
              "rounded-2xl transition-colors duration-200 overflow-hidden border cursor-pointer",
              isOpen
                ? "bg-[#111418] border-[#d2e823]/40"
                : "bg-[#111418]/60 border-white/10 hover:border-white/20",
            )}
          >
            <button
              onClick={() => toggleItem(idx)}
              className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-heading font-semibold text-lg text-white">
                {item.question}
              </span>
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200",
                  isOpen ? "bg-[#d2e823] text-black" : "bg-white/10 text-white",
                )}
              >
                {isOpen ? (
                  <Minus className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 pt-1 text-neutral-300 text-sm leading-relaxed border-t border-white/5">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
