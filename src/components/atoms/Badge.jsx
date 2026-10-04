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
      "bg-[#BCAAA4] text-[#3E2723] border border-[#8D6E63]/50 font-semibold",
    lime:
      "bg-[#3E2723] text-[#D7CCC8] font-bold shadow-sm",
    limeSubtle:
      "bg-[#BCAAA4]/70 text-[#3E2723] border border-[#8D6E63]/40",
    dark:
      "bg-[#4E342E] text-[#D7CCC8] border border-[#8D6E63] shadow-sm",
    white:
      "bg-[#D7CCC8] text-[#3E2723] border border-[#8D6E63]/50 font-semibold",
    outline:
      "bg-transparent text-[#3E2723] border border-[#3E2723]/40",
    outlineDark:
      "bg-transparent text-[#D7CCC8] border border-[#8D6E63]",
  };

  const isDarkVariant = variant === "dark" || variant === "outlineDark";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide uppercase",
        variants[variant] || variants.cream,
        className,
      )}
    >
      {hasDot && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full shrink-0",
            isDarkVariant ? "bg-[#D7CCC8]" : "bg-[#3E2723]",
          )}
        />
      )}
      {children}
    </span>
  );
};

export default Badge;
