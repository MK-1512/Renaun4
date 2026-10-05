import React from "react";
import { motion } from "framer-motion";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { HeroVideoWheel } from "./HeroVideoWheel";
import { siteData } from "../../data/siteData";

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#3E2723] pt-32 sm:pt-40 md:pt-44 pb-16 sm:pb-24 overflow-hidden flex flex-col items-center text-center">
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <Badge variant="dark" hasDot className="mb-6">
            Trusted by global brands
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight text-[#D7CCC8] leading-[1.14] max-w-4xl mx-auto mb-6 uppercase"
        >
          Empower your digital presence with social media strategies built to
          scale your business.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="text-base sm:text-lg md:text-xl text-[#BCAAA4] max-w-2xl mx-auto mb-10 leading-relaxed font-body"
        >
          {siteData.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-5"
        >
          <Button
            to="/case-study"
            variant="inverted"
            size="lg"
            showArrow
            className="px-7 font-bold uppercase tracking-wider text-xs sm:text-sm"
          >
            Case Studies
          </Button>

          <Button
            to="/service"
            variant="outlineDark"
            size="lg"
            showArrow
            className="px-7 font-bold uppercase tracking-wider text-xs sm:text-sm"
          >
            Explore Service
          </Button>
        </motion.div>
      </div>

      <div className="relative w-full z-10 pt-4 pb-16 sm:pb-24">
        <HeroVideoWheel />
      </div>
    </section>
  );
};

export default HeroSection;
