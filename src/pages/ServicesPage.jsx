import React from "react";
import { SectionHeader } from "../components/molecules/SectionHeader";
import { ServiceCard } from "../components/molecules/ServiceCard";
import { PricingSection } from "../components/organisms/PricingSection";
import { FaqSection } from "../components/organisms/FaqSection";
import { CtaSection } from "../components/organisms/CtaSection";
import { servicesData } from "../data/servicesData";

export const ServicesPage = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Services Top Banner */}
      <section className="relative w-full bg-[#08090a] pt-36 sm:pt-44 md:pt-48 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/10">
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

      {/* Services Cards */}
      <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#08090a]">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                number={service.number}
                title={service.title}
                subtitle={service.subtitle}
                image={service.image}
                includes={service.includes}
                href="#pricing"
              />
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

export default ServicesPage;
