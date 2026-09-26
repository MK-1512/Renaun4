import React from "react";
import { motion } from "framer-motion";
import aboutVideo from "../assets/about.mp4";
import missionTargetImg from "../assets/mission-target.jpg";
import { Badge } from "../components/atoms/Badge";
import { AwardsSection } from "../components/organisms/AwardsSection";
import { TeamSection } from "../components/organisms/TeamSection";
import { TestimonialsSection } from "../components/organisms/TestimonialsSection";
import { CtaSection } from "../components/organisms/CtaSection";

const statsData = [
  { value: "200", label: "Brand Collaboration" },
  { value: "30M", label: "Engaged Followers Built" },
  { value: "20+", label: "Successful Campaigns" },
  { value: "3k", label: "Published Content" },
];

const missionSteps = [
  {
    title: "Drive Real Growth",
    desc: "Focus on engagement, leads, and revenue — not just visibility.",
  },
  {
    title: "Build Scalable Systems",
    desc: "Create processes that deliver consistent results over time.",
  },
  {
    title: "Combine Creativity & Strategy",
    desc: "Blend strong content with data-driven decisions.",
  },
  {
    title: "Simplify Social Media",
    desc: "Remove guesswork with clear, proven frameworks.",
  },
];

export const AboutPage = () => {
  return (
    <div className="w-full flex flex-col bg-[#08090a]">
      {/* 1. Hero Section */}
      <section className="relative w-full pt-32 sm:pt-40 md:pt-44 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.05,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            <Badge variant="cream" hasDot className="mb-6 sm:mb-8">
              About
            </Badge>
          </motion.div>

          {/* Heading & Subtitle */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white text-center tracking-tight leading-[1.1] max-w-4xl"
          >
            We Build Brands That Grow on Social
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-neutral-400 text-center max-w-2xl mx-auto leading-relaxed"
          >
            We help brands turn content, strategy, and paid media into real
            growth, engagement, and revenue.
          </motion.p>

          {/* Hero Video */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="w-full mt-10 sm:mt-14 rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl border border-white/10 aspect-[16/9] sm:aspect-[21/9] max-h-[580px] bg-black/40"
          >
            <video
              src={aboutVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* 4 Obsidian Stat Cards with Glowing Neon Figures */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-8">
            {statsData.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="bg-[#0e1014] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center text-center border border-white/10 hover:border-[#d2e823]/50 hover:shadow-[0_0_30px_rgba(210,232,35,0.18)] transition-all duration-300 group"
              >
                <span className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#d2e823] tracking-tight group-hover:drop-shadow-[0_0_12px_rgba(210,232,35,0.5)]">
                  {stat.value}
                </span>
                <span className="font-medium text-xs sm:text-sm md:text-base text-neutral-300 mt-2 sm:mt-3 leading-snug">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision Section */}
      <section className="relative w-full py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 sm:mb-20"
          >
            <Badge variant="cream" hasDot className="mb-3">
              Mission &amp; Vision
            </Badge>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
              Our Mission
            </h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-neutral-400 leading-relaxed max-w-2xl">
              To help brands grow faster by turning social media into a reliable
              and scalable growth channel.
            </p>
          </motion.div>

          {/* 2-Column Content: Left Target Graphic, Right Stepper */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: 3D Target Bullseye */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="lg:col-span-5 flex justify-center items-center"
            >
              <div className="w-full max-w-[420px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src={missionTargetImg}
                  alt="Our Mission - Dart hitting bullseye"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Right Column: Mission Statement & 4-Step Vertical Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.75,
                delay: 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="lg:col-span-7 flex flex-col justify-center"
            >
              <h3 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white leading-tight mb-8 sm:mb-12">
                Our mission is to help brands turn social media into a reliable
                growth engine.
              </h3>

              {/* Vertical Stepper with dotted lines */}
              <div className="flex flex-col">
                {missionSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-5 relative">
                    {/* Vertical connector line */}
                    {idx !== missionSteps.length - 1 && (
                      <div className="absolute left-[7px] top-[22px] bottom-0 w-[2px] border-l-2 border-dashed border-white/20" />
                    )}
                    {/* Lime bullet dot */}
                    <div className="relative z-10 w-4 h-4 rounded-full bg-[#d2e823] border-2 border-[#d2e823] shadow-[0_0_10px_#d2e823] shrink-0 mt-1" />
                    {/* Text */}
                    <div className="pb-8 sm:pb-10">
                      <h4 className="font-heading font-bold text-lg sm:text-xl text-white">
                        {step.title}
                      </h4>
                      <p className="text-neutral-400 text-sm sm:text-base mt-1.5 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Trusted & Recognized / Awards Section */}
      <AwardsSection />

      {/* 4. Meet the Team Section */}
      <TeamSection />

      {/* 5. Testimonials Section (with video & marquee) */}
      <TestimonialsSection />

      {/* 6. CTA / Get Started Section (with 3D cylinder carousel) */}
      <CtaSection />
    </div>
  );
};

export default AboutPage;
