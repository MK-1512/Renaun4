import React from "react";
import { Star } from "lucide-react";
import { cn } from "../../utils/cn";

export const StarRating = ({
  count = 5,
  className = "",
  starClassName = "",
}) => {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className={cn("w-4 h-4 fill-[#d2e823] text-[#d2e823]", starClassName)}
        />
      ))}
    </div>
  );
};

export default StarRating;
