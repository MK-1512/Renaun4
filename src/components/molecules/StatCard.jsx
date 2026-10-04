import React from "react";
import { cn } from "../../utils/cn";

export const StatCard = ({ value, label, className = "", theme = "light" }) => {
  const isLight = theme === "light";

  return (
    <div
      className={cn(
        "flex flex-col p-6 sm:p-7 rounded-2xl transition-all duration-300 shadow-sm",
        isLight
          ? "bg-[#BCAAA4] border border-[#8D6E63] text-[#3E2723] hover:border-[#4E342E]"
          : "bg-[#4E342E] border border-[#8D6E63] text-[#D7CCC8] hover:border-[#D7CCC8]",
        className,
      )}
    >
      <span
        className={cn(
          "font-heading font-bold text-3xl sm:text-4xl",
          isLight ? "text-[#3E2723]" : "text-[#D7CCC8]",
        )}
      >
        {value}
      </span>
      <span
        className={cn(
          "text-xs sm:text-sm font-mono mt-1 uppercase tracking-wider",
          isLight ? "text-[#4E342E]" : "text-[#BCAAA4]",
        )}
      >
        {label}
      </span>
    </div>
  );
};

export default StatCard;
