import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../../utils/cn";

export const NavItem = ({ to, children, className = "", onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full",
          isActive
            ? "text-[#d2e823] font-semibold"
            : "text-neutral-300 hover:text-white hover:bg-white/5",
          className,
        )
      }
    >
      {children}
    </NavLink>
  );
};
