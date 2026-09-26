import React from "react";
import { cn } from "../../utils/cn";

export const StatCard = ({ value, label, className = "", theme = "light" }) => {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col p-6 rounded-2xl transition-all duration-300",
        isDark
          ? "bg-[#111418] border border-white/10 text-white"
          : "bg-white/80 border border-black/5 text-[#0a0a0a] shadow-sm",
        className,
      )}
    >
      <span className="font-heading font-bold text-3xl sm:text-4xl text-[#d2e823]">
        {value}
      </span>
      <span
        className={cn(
          "text-xs sm:text-sm font-mono mt-1 uppercase tracking-wider",
          isDark ? "text-neutral-400" : "text-neutral-500",
        )}
      >
        {label}
      </span>
    </div>
  );
};
