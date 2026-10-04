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
      "bg-[#3E2723] text-[#D7CCC8] font-semibold hover:bg-[#4E342E] shadow-sm",
    secondary:
      "bg-transparent text-[#3E2723] border border-[#3E2723] hover:bg-[#3E2723]/10",
    outline:
      "bg-transparent text-[#3E2723] border border-[#3E2723] hover:bg-[#3E2723] hover:text-[#D7CCC8]",
    dark:
      "bg-[#4E342E] text-[#D7CCC8] border border-[#8D6E63] hover:bg-[#3E2723] hover:border-[#D7CCC8] shadow-sm",
    white:
      "bg-transparent text-[#3E2723] border border-[#3E2723] hover:bg-[#3E2723]/10",
    ghost:
      "bg-transparent text-[#3E2723] hover:bg-[#BCAAA4]/40",
    inverted:
      "bg-[#D7CCC8] text-[#3E2723] hover:bg-[#BCAAA4] font-bold shadow-sm",
    outlineDark:
      "bg-transparent text-[#D7CCC8] border border-[#8D6E63] hover:border-[#D7CCC8] hover:bg-[#4E342E]",
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
