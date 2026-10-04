import React, { useState } from "react";
import { cn } from "../../utils/cn";

export const TeamMemberCard = ({ name, role, image, className = "" }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={cn(
        "group relative h-[380px] sm:h-[420px] w-full select-none cursor-pointer",
        className,
      )}
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((prev) => !prev)}
    >
      <div
        className="relative h-full w-full rounded-[28px] sm:rounded-[32px] transition-transform duration-700 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className="absolute inset-0 h-full w-full rounded-[28px] sm:rounded-[32px] p-8 sm:p-10 bg-[#3E2723] border border-[#8D6E63] group-hover:border-[#D7CCC8] flex flex-col items-center justify-center text-center overflow-hidden shadow-md transition-colors duration-300"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 max-w-[90%]">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#BCAAA4] font-bold">
              Role
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#D7CCC8] tracking-tight leading-tight">
              {role}
            </h3>
          </div>
        </div>

        <div
          className="absolute inset-0 h-full w-full rounded-[28px] sm:rounded-[32px] overflow-hidden border-2 border-[#8D6E63] shadow-xl flex flex-col justify-end"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <img
            src={image}
            alt={name}
            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/90 via-[#3E2723]/30 to-transparent pointer-events-none" />

          <div className="relative z-10 p-6 sm:p-8 flex flex-col items-center justify-center text-center">
            <h4 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-[#D7CCC8] tracking-tight leading-tight drop-shadow-lg">
              {name}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
