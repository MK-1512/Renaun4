import React from "react";
import { cn } from "../../utils/cn";

export const TeamMemberCard = ({ name, role, image, className = "" }) => {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl bg-[#111418] border border-white/10 transition-all duration-500",
        "hover:border-[#d2e823]/40 hover:shadow-xl",
        className,
      )}
    >
      {/* Photo Frame */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111418] via-transparent to-transparent opacity-80" />
      </div>

      {/* Member Info */}
      <div className="p-6 flex flex-col gap-1">
        <span className="text-xs font-mono uppercase tracking-wider text-[#d2e823]">
          {role}
        </span>
        <h4 className="font-heading font-bold text-xl text-white">{name}</h4>
      </div>
    </div>
  );
};
