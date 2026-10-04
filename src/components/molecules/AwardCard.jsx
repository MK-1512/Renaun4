import React from "react";
import { Trophy } from "lucide-react";
import { cn } from "../../utils/cn";

export const AwardCard = ({
  title,
  description,
  year = "2025",
  className = "",
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-between p-8 sm:p-9 md:p-10 rounded-3xl bg-[#BCAAA4] border border-[#8D6E63] text-[#3E2723] transition-all duration-300 hover:border-[#4E342E] shadow-md",
        className,
      )}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="w-12 h-12 rounded-2xl bg-[#D7CCC8] border border-[#8D6E63]/60 flex items-center justify-center text-[#3E2723]">
          <Trophy className="w-6 h-6" />
        </div>
        <span className="font-mono text-xs uppercase tracking-wider text-[#4E342E]">
          {year}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="font-heading font-bold text-xl text-[#3E2723]">{title}</h4>
        <p className="text-sm text-[#4E342E] leading-relaxed font-body">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AwardCard;
