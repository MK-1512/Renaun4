import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, Crown, Rocket } from "lucide-react";
import { Badge } from "../atoms/Badge";
import { cn } from "../../utils/cn";

export const PricingSection = ({ className = "" }) => {
  // "left" is initially active, matching screenshot
  const [hoveredCard, setHoveredCard] = useState("left");
  const [billingCycle, setBillingCycle] = useState("monthly");

  const leftPrice = billingCycle === "monthly" ? "3,990€" : "3,190€";
  const rightPrice = billingCycle === "monthly" ? "5,990€" : "4,790€";

  const basicFeatures = [
    "Social brand audit",
    "3–4 posts per week",
    "Basic content strategy",
    "Platform management (1–2 platforms)",
  ];

  const premiumFeatures = [
    "Everything in Starter",
    "Daily posting & engagement",
    "Daily posting & engagement",
    "Paid ads setup & management",
  ];

  const additionalBenefits = [
    "Unlimited Social Channels",
    "Daily AI-Powered Content",
    "Priority 24/7 Support",
  ];

  return (
    <section
      className={`relative w-full py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#fbfde9] ${className}`}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <Badge variant="lime" hasDot className="mb-4">
            Pricing
          </Badge>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-black tracking-tight leading-[1.1] mb-4">
            Simple pricing.
            <br />
            Scalable growth.
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-xl leading-relaxed font-body">
            Choose a plan that fits your stage — and scale as you grow.
          </p>
        </div>

        {/* 2 Interactive Accordion Cards */}
        <div className="flex flex-col lg:flex-row gap-6 w-full items-stretch min-h-[460px]">
          {/* ================= LEFT CARD (BASIC / STARTER) ================= */}
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 240, damping: 26 }}
            onMouseEnter={() => setHoveredCard("left")}
            onClick={() => setHoveredCard("left")}
            className={cn(
              "relative rounded-[32px] p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden",
              hoveredCard === "left"
                ? "lg:flex-[1.85] bg-white border-2 border-[#d2e823] shadow-[0_12px_40px_rgba(210,232,35,0.18)]"
                : "lg:flex-[1] bg-white/90 border border-black/10 hover:border-[#d2e823]/60 shadow-sm",
            )}
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between w-full mb-6">
                <div>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-black">
                    Starter
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 font-body mt-1">
                    Small businesses starting their social presence
                  </p>
                </div>
                <span className="bg-[#d2e823] text-black font-bold text-xs px-3.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm shrink-0">
                  <Star className="w-3.5 h-3.5 fill-black text-black" />
                  Basic
                </span>
              </div>

              {/* Body Content */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 my-4">
                {/* Column 1: Features Included */}
                <div className="flex-1 min-w-[220px]">
                  <h4 className="font-heading font-bold text-sm sm:text-base text-black mb-3.5">
                    Features included:
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {basicFeatures.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-800 font-body"
                      >
                        <div className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Select Billing Cycle & Additional Benefits (when expanded) */}
                <AnimatePresence>
                  {hoveredCard === "left" && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.25 }}
                      className="flex-1 min-w-[230px] flex flex-col justify-between pt-2 md:pt-0"
                    >
                      {/* Billing Cycle Pill */}
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="font-heading font-semibold text-xs sm:text-sm text-black">
                            Select Billing Cyle
                          </span>
                          <div className="bg-neutral-900 p-1 rounded-full inline-flex items-center gap-1">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setBillingCycle("monthly");
                              }}
                              className={cn(
                                "px-3.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer",
                                billingCycle === "monthly"
                                  ? "bg-white text-black shadow-sm"
                                  : "text-neutral-400 hover:text-white",
                              )}
                            >
                              Monthly
                            </button>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setBillingCycle("yearly");
                              }}
                              className={cn(
                                "px-3.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer",
                                billingCycle === "yearly"
                                  ? "bg-white text-black shadow-sm"
                                  : "text-neutral-400 hover:text-white",
                              )}
                            >
                              Yearly
                            </button>
                          </div>
                        </div>

                        {/* Additional Benefits */}
                        <div className="mt-4">
                          <span className="italic font-semibold text-xs sm:text-sm text-[#8e9d0c] block mb-2.5">
                            Additional Benefits:
                          </span>
                          <ul className="flex flex-col gap-2">
                            {additionalBenefits.map((benefit, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-xs sm:text-sm text-neutral-800 font-medium"
                              >
                                <Rocket className="w-3.5 h-3.5 text-[#8e9d0c] shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center justify-between gap-4 pt-6 mt-6 border-t border-black/5">
              <div className="flex items-baseline gap-1.5">
                <span className="font-heading font-bold text-3xl sm:text-4xl text-black">
                  {leftPrice}
                </span>
                <span className="text-xs sm:text-sm text-neutral-500 font-body">
                  /month
                </span>
              </div>

              <Link
                to="/contact"
                className="bg-black text-white font-bold py-3.5 px-8 rounded-full text-sm hover:bg-neutral-800 transition-colors shadow-md text-center"
              >
                Start Now
              </Link>
            </div>
          </motion.div>

          {/* ================= RIGHT CARD (PREMIUM / STARTER) ================= */}
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 240, damping: 26 }}
            onMouseEnter={() => setHoveredCard("right")}
            onClick={() => setHoveredCard("right")}
            className={cn(
              "relative rounded-[32px] p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden",
              hoveredCard === "right"
                ? "lg:flex-[1.85] bg-[#0a0a0a] border-2 border-white/20 shadow-2xl text-white"
                : "lg:flex-[1] bg-[#0a0a0a] border border-white/10 text-white hover:border-white/20 shadow-xl",
            )}
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between w-full mb-6">
                <div>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                    Starter
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-body mt-1">
                    Small businesses starting their social presence
                  </p>
                </div>
                <span className="bg-white text-black font-bold text-xs px-3.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm shrink-0">
                  <Crown className="w-3.5 h-3.5 text-black" />
                  Premium
                </span>
              </div>

              {/* Body Content */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 my-4">
                {/* Column 1: Features Included */}
                <div className="flex-1 min-w-[220px]">
                  <h4 className="font-heading font-bold text-sm sm:text-base text-white mb-3.5">
                    Features included:
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {premiumFeatures.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-200 font-body"
                      >
                        <div className="w-4 h-4 rounded-full bg-white text-black flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Select Billing Cycle & Additional Benefits (when expanded) */}
                <AnimatePresence>
                  {hoveredCard === "right" && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      className="flex-1 min-w-[230px] flex flex-col justify-between pt-2 md:pt-0"
                    >
                      {/* Billing Cycle Pill */}
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="font-heading font-semibold text-xs sm:text-sm text-white">
                            Select Billing Cyle
                          </span>
                          <div className="bg-neutral-800 p-1 rounded-full inline-flex items-center gap-1 border border-white/10">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setBillingCycle("monthly");
                              }}
                              className={cn(
                                "px-3.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer",
                                billingCycle === "monthly"
                                  ? "bg-white text-black shadow-sm"
                                  : "text-neutral-400 hover:text-white",
                              )}
                            >
                              Monthly
                            </button>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setBillingCycle("yearly");
                              }}
                              className={cn(
                                "px-3.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer",
                                billingCycle === "yearly"
                                  ? "bg-white text-black shadow-sm"
                                  : "text-neutral-400 hover:text-white",
                              )}
                            >
                              Yearly
                            </button>
                          </div>
                        </div>

                        {/* Additional Benefits */}
                        <div className="mt-4">
                          <span className="italic font-semibold text-xs sm:text-sm text-[#d2e823] block mb-2.5">
                            Additional Benefits:
                          </span>
                          <ul className="flex flex-col gap-2">
                            {additionalBenefits.map((benefit, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200 font-medium"
                              >
                                <Rocket className="w-3.5 h-3.5 text-[#d2e823] shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center justify-between gap-4 pt-6 mt-6 border-t border-white/10">
              <div className="flex items-baseline gap-1.5">
                <span className="font-heading font-bold text-3xl sm:text-4xl text-white">
                  {rightPrice}
                </span>
                <span className="text-xs sm:text-sm text-neutral-400 font-body">
                  /month
                </span>
              </div>

              <Link
                to="/contact"
                className="bg-[#d2e823] text-black font-bold py-3.5 px-8 rounded-full text-sm hover:bg-[#dff15c] transition-colors shadow-md text-center"
              >
                Start Now
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
