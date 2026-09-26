import React from "react";
import { SectionHeader } from "../molecules/SectionHeader";
import { ServiceCard } from "../molecules/ServiceCard";
import { servicesData } from "../../data/servicesData";

export const ServicesSection = ({ className = "" }) => {
  return (
    <section
      className={`relative w-full py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#fbfde9] ${className}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <SectionHeader
          badge="Services"
          title="Everything you need to grow on social — done for you"
          subtitle="We handle the strategy, execution, and optimization — so you can focus on your business."
          className="mb-14 sm:mb-20"
        />

        {/* 3 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              number={service.number}
              title={service.title}
              subtitle={service.subtitle}
              image={service.image}
              includes={service.includes}
              href="/service"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
