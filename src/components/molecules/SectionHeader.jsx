import React from "react";
import { motion } from "framer-motion";
import { Badge } from "../atoms/Badge";
import { cn } from "../../utils/cn";

export const SectionHeader = ({
  badge,
  badgeVariant,
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

  const isLight = theme === "light";
  const resolvedBadgeVariant =
    badgeVariant || (isLight ? "cream" : "dark");

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "flex flex-col gap-4 max-w-3xl",
        alignments[align] || alignments.center,
        className,
      )}
    >
      {badge && (
        <Badge variant={resolvedBadgeVariant} hasDot>
          {badge}
        </Badge>
      )}

      {title && (
        <TitleTag
          className={cn(
            "font-heading font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15]",
            isLight ? "text-[#3E2723]" : "text-[#D7CCC8]",
          )}
        >
          {title}
        </TitleTag>
      )}

      {subtitle && (
        <p
          className={cn(
            "text-sm sm:text-base md:text-lg leading-relaxed",
            isLight ? "text-[#4E342E]" : "text-[#BCAAA4]",
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
