import React from "react";
import { Badge } from "../atoms/Badge";
import { cn } from "../../utils/cn";

export const SectionHeader = ({
  badge,
  badgeVariant = "cream",
  title,
  subtitle,
  align = "center",
  theme = "light",
  className = "",
  titleTag: TitleTag = "h2",
}) => {
  const alignments = {
    center: "text-center items-center",
    left: "text-left items-start",
    right: "text-right items-end",
  };

  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex flex-col gap-4 max-w-3xl",
        alignments[align] || alignments.center,
        className,
      )}
    >
      {badge && (
        <Badge variant={isDark ? "dark" : badgeVariant} hasDot>
          {badge}
        </Badge>
      )}

      {title && (
        <TitleTag
          className={cn(
            "font-heading font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15]",
            isDark ? "text-white" : "text-[#0a0a0a]",
          )}
        >
          {title}
        </TitleTag>
      )}

      {subtitle && (
        <p
          className={cn(
            "text-sm sm:text-base md:text-lg leading-relaxed",
            isDark ? "text-neutral-400" : "text-neutral-600",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
