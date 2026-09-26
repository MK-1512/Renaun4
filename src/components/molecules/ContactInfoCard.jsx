import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { cn } from "../../utils/cn";

const icons = {
  phone: Phone,
  mail: Mail,
  location: MapPin,
};

export const ContactInfoCard = ({
  type = "phone",
  title,
  value,
  description,
  href,
  className = "",
}) => {
  const IconComponent = icons[type] || Phone;

  const content = (
    <div
      className={cn(
        "flex flex-col p-6 sm:p-8 rounded-3xl bg-[#111418] border border-white/10 text-white transition-all duration-300 hover:border-[#d2e823]/40 group",
        className,
      )}
    >
      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d2e823] mb-6 transition-colors duration-300 group-hover:bg-[#d2e823] group-hover:text-black">
        <IconComponent className="w-5 h-5" />
      </div>

      <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1">
        {title}
      </span>
      <h4 className="font-heading font-bold text-lg sm:text-xl text-white mb-2 group-hover:text-[#d2e823] transition-colors">
        {value}
      </h4>
      {description && (
        <p className="text-xs sm:text-sm text-neutral-400">{description}</p>
      )}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : "_self"}
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  return content;
};
