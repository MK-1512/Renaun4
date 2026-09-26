import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

export const Logo = ({ className = "", variant = "default" }) => {
  return (
    <Link
      to="/"
      className={cn(
        "inline-flex items-center gap-2 select-none group",
        className,
      )}
    >
      <img
        src="src/assets/logo.png"
        alt="Renaun4 Logo"
        className="h-9 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        onError={(e) => {
          e.target.style.display = "none";
          if (e.target.nextSibling) {
            e.target.nextSibling.style.display = "flex";
          }
        }}
      />
      <div className="hidden items-center gap-2 font-heading font-bold text-xl tracking-tight text-white">
        <span className="w-3 h-3 rounded-full bg-[#d2e823]" />
        <span>Renaun4</span>
      </div>
    </Link>
  );
};
