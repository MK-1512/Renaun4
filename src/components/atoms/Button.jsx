import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";
import { ArrowUpRight } from "lucide-react";

export const Button = ({
  children,
  to,
  href,
  variant = "primary",
  size = "md",
  showArrow = false,
  className = "",
  onClick,
  type = "button",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 active:scale-[0.98] select-none text-center cursor-pointer";

  const variants = {
    primary:
      "bg-[#d2e823] text-black font-semibold hover:bg-[#dff15c] shadow-[0_0_20px_rgba(210,232,35,0.25)] hover:shadow-[0_0_30px_rgba(210,232,35,0.4)]",
    dark: "bg-[#0e1014] text-white hover:bg-[#161a22] border border-white/10 hover:border-[#d2e823]/40 shadow-sm",
    white:
      "bg-white/10 text-white hover:bg-white/15 backdrop-blur-md border border-white/15 hover:border-[#d2e823]/40 shadow-sm",
    secondary:
      "bg-white/5 text-white hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-[#d2e823]/30",
    outline:
      "bg-transparent text-white border border-white/20 hover:border-[#d2e823] hover:text-[#d2e823]",
    ghost: "bg-transparent text-neutral-300 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-6 py-3 gap-2",
    lg: "text-base px-8 py-4 gap-2.5 font-semibold",
  };

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  const classes = cn(
    "group",
    baseStyles,
    variants[variant] || variants.primary,
    sizes[size] || sizes.md,
    className,
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
