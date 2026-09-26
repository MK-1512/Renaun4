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
          className="text-xs font-mono font-medium text-neutral-400"
        >
          {label} {required && <span className="text-[#d2e823]">*</span>}
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
          "w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-neutral-500",
          "focus:outline-none focus:border-[#d2e823] focus:ring-1 focus:ring-[#d2e823] transition-all duration-200",
          "hover:border-white/20 text-sm resize-y",
          error && "border-red-500 focus:border-red-500 focus:ring-red-500",
          className,
        )}
        {...props}
      />
      {error && <span className="text-xs text-red-400 font-mono">{error}</span>}
    </div>
  );
};
