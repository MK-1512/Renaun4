import React from "react";
import { cn } from "../../utils/cn";

export const Textarea = ({
  label,
  id,
  rows = 4,
  placeholder = "",
  value,
  onChange,
  required = false,
  error,
  className = "",
  ...props
}) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className="text-xs font-mono font-medium text-[#4E342E]"
        >
          {label} {required && <span className="text-[#3E2723]">*</span>}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={cn(
          "w-full px-4 py-3.5 rounded-xl bg-[#BCAAA4]/40 border border-[#8D6E63] text-[#3E2723] placeholder:text-[#6D4C41]/70",
          "focus:outline-none focus:border-[#3E2723] focus:ring-1 focus:ring-[#3E2723] transition-all duration-200",
          "hover:border-[#4E342E] text-sm resize-y",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500",
          className,
        )}
        {...props}
      />
      {error && <span className="text-xs text-red-500 font-mono">{error}</span>}
    </div>
  );
};

export default Textarea;
