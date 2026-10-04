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
      className={`relative w-full py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#8D6E63] ${className}`}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <Badge variant="cream" className="mb-4">
            Pricing
          </Badge>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-[#D7CCC8] tracking-tight leading-[1.1] mb-4 uppercase">
            Simple pricing.
            <br />
            Scalable growth.
          </h2>
          <p className="text-base sm:text-lg text-[#D7CCC8]/90 max-w-xl leading-relaxed font-body">
            Choose a plan that fits your stage — and scale as you grow.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 w-full items-stretch lg:h-[520px]">
          <div
            onMouseEnter={() => setHoveredCard("left")}
            onClick={() => setHoveredCard("left")}
            style={{
              flex: hoveredCard === "left" ? "1.85 1 0%" : "1 1 0%",
              willChange: "flex",
            }}
            className={cn(
              "relative rounded-[32px] p-8 sm:p-9 md:p-10 flex flex-col justify-between cursor-pointer overflow-hidden transition-[flex,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
              "lg:h-full lg:max-h-[520px] lg:min-h-[520px]",
              "bg-[#D7CCC8] border border-[#BCAAA4] text-[#3E2723] shadow-xl",
              hoveredCard === "left" && "border-[#3E2723] shadow-2xl",
            )}
          >
            <div>
              <div className="flex items-start justify-between w-full mb-5">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#3E2723]">
                    Starter
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4E342E] font-body mt-1">
                    Small businesses starting their social presence
                  </p>
                </div>
                <span className="bg-[#8D6E63] text-[#D7CCC8] font-bold text-xs px-3.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm shrink-0">
                  <Star className="w-3.5 h-3.5 fill-[#D7CCC8] text-[#D7CCC8]" />
                  Basic
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 my-3">
                <div className="min-w-0">
                  <h4 className="font-heading font-bold text-sm sm:text-base text-[#3E2723] mb-3">
                    Features included:
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {basicFeatures.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-[#3E2723] font-body"
                      >
                        <div className="w-4 h-4 rounded-full bg-[#3E2723] text-[#D7CCC8] flex items-center justify-center shrink-0">
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
                          <span className="font-heading font-semibold text-xs sm:text-sm text-[#3E2723]">
                            Select Billing Cycle
                          </span>
                          <div className="bg-[#BCAAA4] border border-[#8D6E63]/60 p-1 rounded-full inline-flex items-center gap-1">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setBillingCycle("monthly");
                              }}
                              className={cn(
                                "px-3.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer",
                                billingCycle === "monthly"
                                  ? "bg-[#3E2723] text-[#D7CCC8] shadow-sm font-bold"
                                  : "text-[#4E342E] hover:text-[#3E2723]",
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
                                  ? "bg-[#3E2723] text-[#D7CCC8] shadow-sm font-bold"
                                  : "text-[#4E342E] hover:text-[#3E2723]",
                              )}
                            >
                              Yearly
                            </button>
                          </div>
                        </div>

                        <div className="mt-3">
                          <span className="italic font-semibold text-xs sm:text-sm text-[#3E2723] block mb-2">
                            Additional Benefits:
                          </span>
                          <ul className="flex flex-col gap-2">
                            {additionalBenefits.map((benefit, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-xs sm:text-sm text-[#4E342E] font-medium"
                              >
                                <Rocket className="w-3.5 h-3.5 text-[#3E2723] shrink-0" />
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

            <div className="flex items-center justify-between gap-4 pt-5 mt-auto border-t border-[#BCAAA4]">
              <div className="flex items-baseline gap-1.5">
                <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#3E2723]">
                  {leftPrice}
                </span>
                <span className="text-xs sm:text-sm text-[#4E342E] font-body">
                  /month
                </span>
              </div>

              <Link
                to="/contact"
                className="bg-[#3E2723] text-[#D7CCC8] font-bold py-3.5 px-8 rounded-full text-sm hover:bg-[#4E342E] transition-all shadow-sm text-center"
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
              "relative rounded-[32px] p-8 sm:p-9 md:p-10 flex flex-col justify-between cursor-pointer overflow-hidden transition-[flex,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]",
              "lg:h-full lg:max-h-[520px] lg:min-h-[520px]",
              "bg-[#4E342E] border border-[#8D6E63] text-[#D7CCC8] shadow-xl",
              hoveredCard === "right" && "border-[#D7CCC8] shadow-2xl",
            )}
          >
            <div>
              <div className="flex items-start justify-between w-full mb-5">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#D7CCC8]">
                    Growth
                  </h3>
                  <p className="text-xs sm:text-sm text-[#BCAAA4] font-body mt-1">
                    Established brands ready to scale aggressively
                  </p>
                </div>
                <span className="bg-[#3E2723] text-[#D7CCC8] border border-[#8D6E63] font-bold text-xs px-3.5 py-1 rounded-full flex items-center gap-1.5 shadow-sm shrink-0">
                  <Crown className="w-3.5 h-3.5 fill-[#D7CCC8] text-[#D7CCC8]" />
                  Premium
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 my-3">
                <div className="min-w-0">
                  <h4 className="font-heading font-bold text-sm sm:text-base text-[#D7CCC8] mb-3">
                    Features included:
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {premiumFeatures.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-[#BCAAA4] font-body font-medium"
                      >
                        <div className="w-4 h-4 rounded-full bg-[#3E2723] border border-[#8D6E63] text-[#D7CCC8] flex items-center justify-center shrink-0 shadow-sm">
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
                          <span className="font-heading font-bold text-xs sm:text-sm text-[#D7CCC8]">
                            Select Billing Cycle
                          </span>
                          <div className="bg-[#3E2723] border border-[#8D6E63] p-1 rounded-full inline-flex items-center gap-1">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setBillingCycle("monthly");
                              }}
                              className={cn(
                                "px-3.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer",
                                billingCycle === "monthly"
                                  ? "bg-[#D7CCC8] text-[#3E2723] shadow-sm font-bold"
                                  : "text-[#BCAAA4] hover:text-[#D7CCC8]",
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
                                  ? "bg-[#D7CCC8] text-[#3E2723] shadow-sm font-bold"
                                  : "text-[#BCAAA4] hover:text-[#D7CCC8]",
                              )}
                            >
                              Yearly
                            </button>
                          </div>
                        </div>

                        <div className="mt-3">
                          <span className="italic font-bold text-xs sm:text-sm text-[#D7CCC8] block mb-2">
                            Additional Benefits:
                          </span>
                          <ul className="flex flex-col gap-2">
                            {additionalBenefits.map((benefit, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-xs sm:text-sm text-[#BCAAA4] font-medium"
                              >
                                <Rocket className="w-3.5 h-3.5 text-[#D7CCC8] shrink-0" />
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

            <div className="flex items-center justify-between gap-4 pt-5 mt-auto border-t border-[#8D6E63]">
              <div className="flex items-baseline gap-1.5">
                <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#D7CCC8]">
                  {rightPrice}
                </span>
                <span className="text-xs sm:text-sm text-[#BCAAA4] font-body">
                  /month
                </span>
              </div>

              <Link
                to="/contact"
                className="bg-[#D7CCC8] text-[#3E2723] font-bold py-3.5 px-8 rounded-full text-sm hover:bg-[#BCAAA4] transition-all shadow-sm text-center"
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
