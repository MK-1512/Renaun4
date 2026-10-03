import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, Crown, Rocket } from "lucide-react";
import { Badge } from "../atoms/Badge";
import { cn } from "../../utils/cn";

export const PricingSection = ({ className = "" }) => {
  const [hoveredCard, setHoveredCard] = useState("right");
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
    "Dedicated content strategist",
    "Paid ads setup & management",
  ];

  const additionalBenefits = [
    "Unlimited Social Channels",
    "Daily AI-Powered Content",
    "Priority 24/7 Support",
  ];

  return (
    <section
      className={`relative w-full py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#08090a] ${className}`}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <Badge variant="lime" className="mb-4">
            Pricing
          </Badge>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] mb-4">
            Simple pricing.
            <br />
            Scalable growth.
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 max-w-xl leading-relaxed font-body">
            Choose a plan that fits your stage — and scale as you grow.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 w-full items-stretch lg:h-[500px]">
          <div
            onMouseEnter={() => setHoveredCard("left")}
            onClick={() => setHoveredCard("left")}
            style={{
              flex: hoveredCard === "left" ? "1.85 1 0%" : "1 1 0%",
              willChange: "flex",
            }}
            className={cn(
              "relative rounded-[32px] p-7 sm:p-8 md:p-9 flex flex-col justify-between cursor-pointer overflow-hidden transition-[flex,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
              "lg:h-full lg:max-h-[500px] lg:min-h-[500px]",
              hoveredCard === "left"
                ? "bg-[#0e1014] border-2 border-[#d2e823] shadow-[0_0_35px_rgba(210,232,35,0.18)] text-white"
                : "bg-[#0e1014] border border-white/10 text-white hover:border-[#d2e823]/50 shadow-sm",
            )}
          >
            <div>
              <div className="flex items-start justify-between w-full mb-5">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                    Starter
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 font-body mt-1">
                    Small businesses starting their social presence
                  </p>
                </div>
                <span className="bg-[#d2e823] text-black font-bold text-xs px-3.5 py-1 rounded-full flex items-center gap-1.5 shadow-[0_0_12px_rgba(210,232,35,0.3)] shrink-0">
                  <Star className="w-3.5 h-3.5 fill-black text-black" />
                  Basic
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 my-3">
                <div className="min-w-0">
                  <h4 className="font-heading font-bold text-sm sm:text-base text-white mb-3">
                    Features included:
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {basicFeatures.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300 font-body"
                      >
                        <div className="w-4 h-4 rounded-full bg-[#d2e823]/20 border border-[#d2e823]/50 text-[#d2e823] flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <AnimatePresence>
                  {hoveredCard === "left" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="min-w-0 flex flex-col justify-between pt-2 md:pt-0"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="font-heading font-semibold text-xs sm:text-sm text-white">
                            Select Billing Cycle
                          </span>
                          <div className="bg-white/5 border border-white/10 p-1 rounded-full inline-flex items-center gap-1">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setBillingCycle("monthly");
                              }}
                              className={cn(
                                "px-3.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer",
                                billingCycle === "monthly"
                                  ? "bg-[#d2e823] text-black shadow-sm"
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
                                  ? "bg-[#d2e823] text-black shadow-sm"
                                  : "text-neutral-400 hover:text-white",
                              )}
                            >
                              Yearly
                            </button>
                          </div>
                        </div>

                        <div className="mt-3">
                          <span className="italic font-semibold text-xs sm:text-sm text-[#d2e823] block mb-2">
                            Additional Benefits:
                          </span>
                          <ul className="flex flex-col gap-2">
                            {additionalBenefits.map((benefit, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300 font-medium"
                              >
                                <Rocket className="w-3.5 h-3.5 text-[#d2e823] shrink-0" />
                                <span className="truncate">{benefit}</span>
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

            <div className="flex items-center justify-between gap-4 pt-5 mt-auto border-t border-white/10">
              <div className="flex items-baseline gap-1.5">
                <span className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                  {leftPrice}
                </span>
                <span className="text-xs sm:text-sm text-neutral-400 font-body">
                  /month
                </span>
              </div>

              <Link
                to="/contact"
                className="bg-[#d2e823] text-black font-bold py-3.5 px-8 rounded-full text-sm hover:bg-[#dff15c] transition-all shadow-[0_0_20px_rgba(210,232,35,0.25)] text-center"
              >
                Start Now
              </Link>
            </div>
          </div>

          <div
            onMouseEnter={() => setHoveredCard("right")}
            onClick={() => setHoveredCard("right")}
            style={{
              flex: hoveredCard === "right" ? "1.85 1 0%" : "1 1 0%",
              willChange: "flex",
            }}
            className={cn(
              "relative rounded-[32px] p-7 sm:p-8 md:p-9 flex flex-col justify-between cursor-pointer overflow-hidden transition-[flex,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
              "lg:h-full lg:max-h-[500px] lg:min-h-[500px]",
              hoveredCard === "right"
                ? "bg-white border-2 border-[#d2e823] shadow-[0_10px_35px_rgba(210,232,35,0.25)] text-black"
                : "bg-white/95 border border-neutral-200 text-black hover:border-[#d2e823]/60 shadow-sm",
            )}
          >
            <div>
              <div className="flex items-start justify-between w-full mb-5">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-black">
                    Growth
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 font-body mt-1">
                    Established brands ready to scale aggressively
                  </p>
                </div>
                <span className="bg-[#d2e823] text-black font-bold text-xs px-3.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm shrink-0">
                  <Crown className="w-3.5 h-3.5 fill-black text-black" />
                  Premium
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 my-3">
                <div className="min-w-0">
                  <h4 className="font-heading font-bold text-sm sm:text-base text-black mb-3">
                    Features included:
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {premiumFeatures.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-800 font-body font-medium"
                      >
                        <div className="w-4 h-4 rounded-full bg-[#d2e823] text-black flex items-center justify-center shrink-0 shadow-sm">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <AnimatePresence>
                  {hoveredCard === "right" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="min-w-0 flex flex-col justify-between pt-2 md:pt-0"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="font-heading font-bold text-xs sm:text-sm text-black">
                            Select Billing Cycle
                          </span>
                          <div className="bg-neutral-100 border border-neutral-200/80 p-1 rounded-full inline-flex items-center gap-1">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setBillingCycle("monthly");
                              }}
                              className={cn(
                                "px-3.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer",
                                billingCycle === "monthly"
                                  ? "bg-[#d2e823] text-black shadow-sm"
                                  : "text-neutral-600 hover:text-black",
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
                                "px-3.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer",
                                billingCycle === "yearly"
                                  ? "bg-[#d2e823] text-black shadow-sm"
                                  : "text-neutral-600 hover:text-black",
                              )}
                            >
                              Yearly
                            </button>
                          </div>
                        </div>

                        <div className="mt-3">
                          <span className="italic font-bold text-xs sm:text-sm text-[#6b7c03] block mb-2">
                            Additional Benefits:
                          </span>
                          <ul className="flex flex-col gap-2">
                            {additionalBenefits.map((benefit, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-xs sm:text-sm text-neutral-800 font-medium"
                              >
                                <Rocket className="w-3.5 h-3.5 text-[#7b8f04] shrink-0" />
                                <span className="truncate">{benefit}</span>
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

            <div className="flex items-center justify-between gap-4 pt-5 mt-auto border-t border-neutral-200">
              <div className="flex items-baseline gap-1.5">
                <span className="font-heading font-extrabold text-3xl sm:text-4xl text-black">
                  {rightPrice}
                </span>
                <span className="text-xs sm:text-sm text-neutral-500 font-body">
                  /month
                </span>
              </div>

              <Link
                to="/contact"
                className="bg-[#d2e823] text-black font-bold py-3.5 px-8 rounded-full text-sm hover:bg-[#dff15c] transition-all shadow-[0_4px_15px_rgba(210,232,35,0.35)] text-center"
              >
                Start Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
