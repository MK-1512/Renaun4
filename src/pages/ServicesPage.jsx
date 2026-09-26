import React from "react";
import { SectionHeader } from "../components/molecules/SectionHeader";
import { ServiceCard } from "../components/molecules/ServiceCard";
import { PricingSection } from "../components/organisms/PricingSection";
import { FaqSection } from "../components/organisms/FaqSection";
import { CtaSection } from "../components/organisms/CtaSection";
import { servicesData } from "../data/servicesData";
import { Check } from "lucide-react";

export const ServicesPage = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Services Top Banner */}
      <section className="relative w-full bg-[#fbfde9] pt-36 sm:pt-44 md:pt-48 pb-16 px-4 sm:px-6 lg:px-8 border-b border-black/5">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <SectionHeader
            badge="Services"
            title="Everything you need to grow on social — done for you"
            subtitle="We handle the strategy, execution, and optimization — so you can focus on your business."
            titleTag="h1"
            className="mb-8"
          />
        </div>
      </section>

      {/* Services Deep Dive */}
      <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#fbfde9]">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div key={service.id} className="flex flex-col gap-6">
                <ServiceCard
                  number={service.number}
                  title={service.title}
                  subtitle={service.subtitle}
                  image={service.image}
                  includes={service.includes}
                  href="#pricing"
                />

                {/* Extended Details Box */}
                <div className="p-6 rounded-3xl bg-white/60 border border-black/5 flex flex-col gap-4">
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {service.details}
                  </p>
                  <ul className="flex flex-col gap-2 pt-2 border-t border-black/5">
                    {service.features.map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2.5 text-xs font-mono text-neutral-700"
                      >
                        <Check className="w-4 h-4 text-[#a5b00f] flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <div id="pricing">
        <PricingSection />
      </div>

      {/* FAQ Section */}
      <FaqSection />

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};
