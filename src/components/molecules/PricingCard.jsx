import React from "react";
import { Check } from "lucide-react";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";
import { cn } from "../../utils/cn";

export const PricingCard = ({
  tier = "Starter",
  badge = "Basic",
  price,
  period = "/month",
  description,
  features = [],
  isFeatured = false,
  buttonText = "Start Now",
  buttonLink = "/contact",
  className = "",
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between rounded-3xl p-8 sm:p-10 transition-all duration-300",
        isFeatured
          ? "bg-[#111418] border-2 border-[#d2e823] shadow-[0_15px_50px_rgba(210,232,35,0.15)] text-white"
          : "bg-[#141416] border border-white/10 text-white hover:border-white/20",
        className,
      )}
    >
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <Badge
            variant={isFeatured ? "lime" : "outline"}
            className={!isFeatured ? "text-neutral-300 border-white/20" : ""}
          >
            {badge}
          </Badge>
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
            {tier}
          </span>
        </div>

        {/* Pricing Number */}
        <div className="flex items-baseline gap-2 mb-3">
          <h4 className="font-heading font-bold text-4xl sm:text-5xl text-white">
            {price}
          </h4>
          <span className="text-sm font-mono text-neutral-400">{period}</span>
        </div>

        <p className="text-sm text-neutral-400 mb-8 leading-relaxed">
          {description}
        </p>

        {/* Feature List Header */}
        <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-white/10">
          Features included:
        </div>

        {/* Feature list */}
        <ul className="flex flex-col gap-3.5 mb-10">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-sm text-neutral-300"
            >
              <div className="w-5 h-5 rounded-full bg-[#d2e823]/15 text-[#d2e823] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <Button
        to={buttonLink}
        variant={isFeatured ? "primary" : "white"}
        size="lg"
        className="w-full text-center"
      >
        {buttonText}
      </Button>
    </div>
  );
};
