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
            ? "text-[#3E2723] font-bold bg-[#3E2723]/10"
            : "text-[#4E342E] hover:text-[#3E2723] hover:bg-[#3E2723]/5",
          className,
        )
      }
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
