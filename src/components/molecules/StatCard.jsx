import React from "react";
import { cn } from "../../utils/cn";

export const StatCard = ({ value, label, className = "", theme = "dark" }) => {
  return (
    <div
      className={cn(
        "flex flex-col p-6 rounded-2xl bg-[#0e1014] border border-white/10 text-white transition-all duration-300 hover:border-[#d2e823]/40 hover:shadow-[0_0_20px_rgba(210,232,35,0.12)]",
        className,
      )}
    >
      <span className="font-heading font-bold text-3xl sm:text-4xl text-[#d2e823] drop-shadow-[0_0_8px_rgba(210,232,35,0.3)]">
        {value}
      </span>
      <span className="text-xs sm:text-sm font-mono mt-1 uppercase tracking-wider text-neutral-400">
        {label}
      </span>
    </div>
  );
};
