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
        "flex flex-col justify-between p-8 sm:p-9 md:p-10 rounded-3xl bg-[#D7CCC8] border border-[#BCAAA4] text-[#3E2723] transition-all duration-300 hover:border-[#3E2723] shadow-xl",
        className,
      )}
    >
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <StarRating count={5} />
          <span className="text-xs font-mono text-[#4E342E] font-bold">{rating}</span>
        </div>

        <p className="text-base sm:text-lg text-[#3E2723] leading-relaxed italic">
          "{quote.replace(/^"|"$/g, "")}"
        </p>
      </div>

      <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#BCAAA4]">
        {avatar && (
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover border border-[#8D6E63]"
            loading="lazy"
          />
        )}
        <div className="flex flex-col">
          <span className="font-heading font-bold text-base text-[#3E2723]">
            {name}
          </span>
          <span className="text-xs font-mono text-[#4E342E]">{role}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
