import React from "react";
import { SectionHeader } from "../molecules/SectionHeader";
import { FaqAccordion } from "../molecules/FaqAccordion";
import { Button } from "../atoms/Button";
import { faqData } from "../../data/faqData";

export const FaqSection = ({ className = "" }) => {
  return (
    <section
      className={`relative w-full py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] text-white ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading & Support Card */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <SectionHeader
              badge={faqData.header.badge}
              title={faqData.header.title}
              subtitle={faqData.header.subtitle}
              align="left"
              theme="dark"
            />

            {/* Support Callout Card */}
            <div className="flex flex-col sm:flex-row items-center gap-6 p-6 sm:p-8 rounded-3xl bg-[#111418] border border-white/10 overflow-hidden relative">
              <div className="flex-1 flex flex-col gap-3 z-10">
                <h4 className="font-heading font-bold text-xl text-white">
                  {faqData.card.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {faqData.card.description}
                </p>
                <div className="pt-2">
                  <Button
                    to={faqData.card.buttonLink}
                    variant="primary"
                    size="sm"
                    showArrow
                    className="font-semibold text-xs"
                  >
                    {faqData.card.buttonText}
                  </Button>
                </div>
              </div>

              {/* Decorative Image */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-2xl overflow-hidden bg-black/40 border border-white/10">
                <img
                  src={faqData.card.image}
                  alt="FAQ support avatar"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Accordion Items */}
          <div className="lg:col-span-7 w-full">
            <FaqAccordion items={faqData.items} />
          </div>
        </div>
      </div>
    </section>
  );
};
