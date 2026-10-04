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
        "bg-[#4E342E] border border-[#8D6E63] text-[#D7CCC8] shadow-xl",
        isFeatured && "border-[#D7CCC8] shadow-2xl",
        className,
      )}
    >
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <Badge
            variant={isFeatured ? "dark" : "outlineDark"}
            className="text-[#D7CCC8]"
          >
            {badge}
          </Badge>
          <span className="text-xs font-mono uppercase tracking-wider text-[#BCAAA4]">
            {tier}
          </span>
        </div>

        <div className="flex items-baseline gap-2 mb-3">
          <h4 className="font-heading font-bold text-4xl sm:text-5xl text-[#D7CCC8]">
            {price}
          </h4>
          <span className="text-sm font-mono text-[#BCAAA4]">{period}</span>
        </div>

        <p className="text-sm text-[#BCAAA4] mb-8 leading-relaxed font-body">
          {description}
        </p>

        <div className="text-xs font-mono uppercase tracking-wider text-[#BCAAA4] mb-4 pb-2 border-b border-[#8D6E63]">
          Features included:
        </div>

        <ul className="flex flex-col gap-3.5 mb-10">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-sm text-[#BCAAA4] font-body"
            >
              <div className="w-5 h-5 rounded-full bg-[#3E2723] border border-[#8D6E63] text-[#D7CCC8] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button
        to={buttonLink}
        variant={isFeatured ? "inverted" : "dark"}
        size="lg"
        className="w-full text-center"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default PricingCard;
