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
              "rounded-2xl transition-colors duration-200 overflow-hidden border cursor-pointer shadow-sm",
              isOpen
                ? "bg-[#3E2723] border-[#D7CCC8]"
                : "bg-[#3E2723] border-[#8D6E63] hover:border-[#D7CCC8]",
            )}
          >
            <button
              onClick={() => toggleItem(idx)}
              className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-heading font-semibold text-lg text-[#D7CCC8]">
                {item.question}
              </span>
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200",
                  isOpen
                    ? "bg-[#D7CCC8] text-[#3E2723]"
                    : "bg-[#3E2723] text-[#D7CCC8] border border-[#8D6E63]",
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
                  <div className="px-6 pb-6 pt-1 text-[#BCAAA4] text-sm leading-relaxed border-t border-[#8D6E63]/40">
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

export default FaqAccordion;
