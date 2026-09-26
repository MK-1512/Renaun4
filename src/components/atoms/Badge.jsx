import React from "react";
import { cn } from "../../utils/cn";

export const Badge = ({
  children,
  variant = "cream",
  className = "",
  hasDot = false,
}) => {
  const variants = {
    cream:
      "bg-[#d2e823]/10 text-[#d2e823] border border-[#d2e823]/30 shadow-[0_0_15px_rgba(210,232,35,0.12)] font-semibold",
    lime: "bg-[#d2e823] text-black font-bold shadow-[0_0_20px_rgba(210,232,35,0.35)]",
    limeSubtle:
      "bg-[#d2e823]/15 text-[#d2e823] border border-[#d2e823]/40 shadow-[0_0_12px_rgba(210,232,35,0.15)]",
    dark: "bg-[#0e1014] text-[#d2e823] border border-white/10 shadow-sm",
    white: "bg-white/10 text-white border border-white/20 backdrop-blur-md",
    outline: "bg-transparent text-[#d2e823] border border-[#d2e823]/30",
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
        <span className="w-1.5 h-1.5 rounded-full bg-[#d2e823] shadow-[0_0_8px_#d2e823]" />
      )}
      {children}
    </span>
  );
};

export default Badge;
