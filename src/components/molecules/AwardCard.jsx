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
        "flex flex-col justify-between p-8 rounded-3xl bg-[#111418] border border-white/10 text-white transition-all duration-300 hover:border-white/20",
        className,
      )}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="w-12 h-12 rounded-2xl bg-[#d2e823]/10 border border-[#d2e823]/30 flex items-center justify-center text-[#d2e823]">
          <Trophy className="w-6 h-6" />
        </div>
        <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
          {year}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="font-heading font-bold text-xl text-white">{title}</h4>
        <p className="text-sm text-neutral-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
