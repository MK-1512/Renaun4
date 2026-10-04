import React from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "../molecules/SectionHeader";
import { TestimonialCard } from "../molecules/TestimonialCard";
import { testimonialsData } from "../../data/testimonialsData";

export const ReviewsSection = ({ className = "" }) => {
  const tickerItems = [
    ...testimonialsData,
    ...testimonialsData,
    ...testimonialsData,
    ...testimonialsData,
  ];

  return (
    <section
      className={`relative w-full py-20 sm:py-28 md:py-32 bg-[#8D6E63] overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center mb-12 sm:mb-16">
        <SectionHeader
          badge="Reviews"
          badgeVariant="cream"
          title="What our clients say"
          subtitle="Don’t take our word for it — hear from the brands we’ve helped grow."
          theme="dark"
        />
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#8D6E63] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#8D6E63] to-transparent z-10" />

        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 32,
            ease: "linear",
          }}
          className="flex gap-6 sm:gap-8 w-max py-4"
        >
          {tickerItems.map((item, idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[420px] flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]"
            >
              <TestimonialCard
                quote={item.quote}
                name={item.name}
                role={item.role}
                rating={item.rating}
                avatar={item.avatar}
                className="h-full"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
