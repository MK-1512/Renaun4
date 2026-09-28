import React from "react";
import { StarRating } from "../atoms/StarRating";
import { cn } from "../../utils/cn";

export const TestimonialCard = ({
  quote,
  name,
  role,
  rating = "4.5/5",
  avatar,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-between p-8 rounded-3xl bg-[#111418] border border-white/10 text-white transition-all duration-300 hover:border-white/20",
        className,
      )}
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <StarRating count={5} />
          <span className="text-xs font-mono text-neutral-400">{rating}</span>
        </div>

        <p className="text-base sm:text-lg text-neutral-200 leading-relaxed italic">
          "{quote.replace(/^"|"$/g, "")}"
        </p>
      </div>

      <div className="flex items-center gap-4 mt-8 pt-6 border-t border-white/10">
        {avatar && (
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover border border-white/20"
            loading="lazy"
          />
        )}
        <div className="flex flex-col">
          <span className="font-heading font-bold text-base text-white">
            {name}
          </span>
          <span className="text-xs font-mono text-neutral-400">{role}</span>
        </div>
      </div>
    </div>
  );
};
