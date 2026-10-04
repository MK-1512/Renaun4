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
        "flex flex-col p-6 sm:p-8 rounded-3xl bg-[#BCAAA4] border border-[#8D6E63] text-[#3E2723] transition-all duration-300 hover:border-[#4E342E] group shadow-md",
        className,
      )}
    >
      <div className="w-12 h-12 rounded-2xl bg-[#D7CCC8] border border-[#8D6E63]/60 flex items-center justify-center text-[#3E2723] mb-6 transition-colors duration-300 group-hover:bg-[#3E2723] group-hover:text-[#D7CCC8]">
        <IconComponent className="w-5 h-5" />
      </div>

      <span className="text-xs font-mono uppercase tracking-wider text-[#4E342E] mb-1">
        {title}
      </span>
      <h4 className="font-heading font-bold text-lg sm:text-xl text-[#3E2723] mb-2 group-hover:text-[#4E342E] transition-colors">
        {value}
      </h4>
      {description && (
        <p className="text-xs sm:text-sm text-[#4E342E] font-body">{description}</p>
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

export default ContactInfoCard;
