import React from "react";
import { SectionHeader } from "../molecules/SectionHeader";
import { FaqAccordion } from "../molecules/FaqAccordion";
import { Button } from "../atoms/Button";
import { faqData } from "../../data/faqData";

export const FaqSection = ({ className = "" }) => {
  return (
    <section
      className={`relative w-full py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#4E342E] text-[#D7CCC8] ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col gap-8">
            <SectionHeader
              badge={faqData.header.badge}
              badgeVariant="dark"
              title={faqData.header.title}
              subtitle={faqData.header.subtitle}
              align="left"
              theme="dark"
            />

            <div className="flex flex-col sm:flex-row items-center gap-6 p-8 sm:p-9 rounded-3xl bg-[#3E2723] border border-[#8D6E63] overflow-hidden relative shadow-xl">
              <div className="flex-1 flex flex-col gap-3 z-10">
                <h4 className="font-heading font-bold text-xl text-[#D7CCC8]">
                  {faqData.card.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#BCAAA4] leading-relaxed">
                  {faqData.card.description}
                </p>
                <div className="pt-2">
                  <Button
                    to={faqData.card.buttonLink}
                    variant="inverted"
                    size="sm"
                    showArrow
                    className="font-bold text-xs"
                  >
                    {faqData.card.buttonText}
                  </Button>
                </div>
              </div>

              <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-2xl overflow-hidden bg-[#4E342E] border border-[#8D6E63]">
                <img
                  src={faqData.card.image}
                  alt="FAQ support avatar"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 w-full">
            <FaqAccordion items={faqData.items} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
