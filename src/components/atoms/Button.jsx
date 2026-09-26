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
      "bg-[#d2e823] text-black hover:bg-[#dff15c] shadow-[0_2px_12px_rgba(210,232,35,0.3)]",
    dark: "bg-[#0a0a0a] text-white hover:bg-[#1a1a1a] border border-white/10 hover:border-white/20",
    white:
      "bg-white text-black hover:bg-neutral-100 shadow-sm border border-neutral-200",
    outline:
      "bg-transparent text-current border border-neutral-300 hover:border-neutral-800 dark:hover:border-white/40",
    ghost: "bg-transparent text-current hover:bg-black/5 dark:hover:bg-white/5",
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

  // Combine classes with full priority to user's className
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
