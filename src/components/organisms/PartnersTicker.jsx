import React from "react";
import { servicesTickerData } from "../../data/partnersData";

const renderServiceIcon = (id) => {
  switch (id) {
    case "brand-strategy":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L4 7V17L12 22L20 17V7L12 2Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M12 6L16 12L12 18L8 12L12 6Z"
            fill="currentColor"
            fillOpacity="0.25"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      );
    case "social-media":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <circle
            cx="6"
            cy="12"
            r="3"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle
            cx="18"
            cy="6"
            r="3"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle
            cx="18"
            cy="18"
            r="3"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M8.7 10.6L15.3 7.4M8.7 13.4L15.3 16.6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "content-creative":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z"
            fill="currentColor"
            fillOpacity="0.25"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      );
    case "video-production":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <rect
            x="2.5"
            y="5"
            width="14"
            height="14"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M16.5 9.5L21.5 6.5V17.5L16.5 14.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polygon points="7.5,9.5 11.5,12 7.5,14.5" fill="currentColor" />
        </svg>
      );
    case "performance-marketing":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 19L9 13L13 17L21 7"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 7H21V13"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "seo-ai-search":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <circle
            cx="11"
            cy="11"
            r="7"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M16.5 16.5L21 21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="11" cy="11" r="2.5" fill="currentColor" />
        </svg>
      );
    case "website-conversion":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <rect
            x="3"
            y="4"
            width="18"
            height="16"
            rx="3"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path d="M3 9H21" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="6" cy="6.5" r="1" fill="currentColor" />
          <path
            d="M8 14L11 17L16 12"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "lead-gen-funnels":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 4H21L14 13V19L10 21V13L3 4Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="8.5" r="1.5" fill="currentColor" />
        </svg>
      );
    case "crm-automation":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path
            d="M18 8C21.5 8 22 16 18 16C14 16 10 8 6 8C2 8 2.5 16 6 16C10 16 14 8 18 8Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case "ai-solutions":
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
            fill="currentColor"
            fillOpacity="0.25"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    default:
      return (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );
  }
};

export const PartnersTicker = () => {
  const items = [...servicesTickerData, ...servicesTickerData];

  return (
    <section className="relative w-full py-8 sm:py-10 bg-[#08090a] overflow-hidden border-y border-white/[0.08] pointer-events-none select-none">
      <div className="relative w-full flex overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-20 sm:w-44 bg-gradient-to-r from-[#08090a] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 sm:w-44 bg-gradient-to-l from-[#08090a] to-transparent z-10 pointer-events-none" />

        <div className="flex shrink-0 animate-marquee items-center gap-10 sm:gap-14">
          {items.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-3.5 px-4.5 py-2.5 rounded-2xl border whitespace-nowrap select-none"
              style={{
                backgroundColor: `${service.color}0a`,
                borderColor: `${service.color}2e`,
                boxShadow: `0 0 20px ${service.color}12`,
              }}
            >
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border"
                style={{
                  color: service.color,
                  backgroundColor: `${service.color}18`,
                  borderColor: `${service.color}45`,
                  boxShadow: `0 0 10px ${service.color}30`,
                }}
              >
                {renderServiceIcon(service.id)}
              </div>
              <span
                className="font-heading font-semibold text-sm sm:text-base tracking-wide"
                style={{
                  color: service.color,
                  textShadow: `0 0 12px ${service.color}66, 0 0 24px ${service.color}26`,
                }}
              >
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersTicker;
