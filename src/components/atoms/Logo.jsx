import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";
import logoImg from "../../assets/logo.png";

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
        src={logoImg}
        alt="Renaun4 Logo"
        className="h-9 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        onError={(e) => {
          e.target.src = "/logo.png";
        }}
      />
      <div className="hidden items-center gap-2 font-heading font-bold text-xl tracking-tight text-[#3E2723]">
        <span className="w-3 h-3 rounded-full bg-[#3E2723]" />
        <span>Renaun4</span>
      </div>
    </Link>
  );
};

export default Logo;
