import React from "react";
import { cn } from "../../utils/cn";

export const Badge = ({
  children,
  variant = "cream",
  className = "",
  hasDot = false,
}) => {
  const variants = {
    cream: "bg-[#fbfde9] text-[#0a0a0a] border border-[#0a0a0a]/10",
    lime: "bg-[#d2e823] text-black font-semibold",
    limeSubtle: "bg-[#d2e823]/20 text-[#363508] border border-[#d2e823]/40",
    dark: "bg-[#111418] text-[#fbfde9] border border-white/10",
    white: "bg-white text-black border border-black/10 shadow-sm",
    outline: "bg-transparent text-current border border-current/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide uppercase",
        variants[variant] || variants.cream,
        className,
      )}
    >
      {hasDot && (
        <span className="w-1.5 h-1.5 rounded-full bg-[black] ring-2 ring-black/20" />
      )}
      {children}
    </span>
  );
};
