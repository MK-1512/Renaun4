import React from "react";
import { motion } from "framer-motion";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { HeroVideoWheel } from "./HeroVideoWheel";
import { siteData } from "../../data/siteData";

export const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#08090a] pt-32 sm:pt-40 md:pt-44 pb-12 overflow-hidden flex flex-col items-center text-center">
      <div className="absolute top-28 sm:top-36 left-1/2 -translate-x-1/2 w-[550px] sm:w-[750px] h-[300px] sm:h-[400px] bg-[#d2e823]/[0.07] blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <Badge variant="cream" hasDot className="mb-6">
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
          className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[76px] tracking-tight text-white leading-[1.08] max-w-4xl mx-auto mb-6"
        >
          Build, Grow, and Scale Your Brand on Social Media
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-body"
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
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-6"
        >
          <Button
            to="/case-study"
            variant="primary"
            size="lg"
            showArrow
            className="shadow-[0_0_25px_rgba(210,232,35,0.3)] px-7 font-bold"
          >
            Case Studies
          </Button>

          <Button
            to="/service"
            variant="white"
            size="lg"
            showArrow
            className="px-7 border border-white/15 hover:border-[#d2e823]/50"
          >
            Explore Service
          </Button>
        </motion.div>
      </div>

      <HeroVideoWheel />
    </section>
  );
};
