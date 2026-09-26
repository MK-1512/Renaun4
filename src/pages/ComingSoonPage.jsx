import React, { useState } from "react";
import { Badge } from "../components/atoms/Badge";
import { Button } from "../components/atoms/Button";
import { CheckCircle2 } from "lucide-react";

export const ComingSoonPage = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <div className="min-h-[85vh] flex flex-col justify-center items-center px-4 sm:px-6 pt-36 pb-20 text-center bg-[#08090a]">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <Badge variant="lime" hasDot className="mb-6">
          Coming Soon
        </Badge>

        <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.08] mb-6">
          We are coming soon!
        </h1>

        <p className="text-base sm:text-lg text-neutral-400 max-w-lg mb-10 leading-relaxed font-body">
          We're bringing something fresh and exciting to the table. Be the first
          to experience it!
        </p>

        {subscribed ? (
          <div className="flex items-center gap-3 p-4 px-6 rounded-full bg-[#d2e823]/10 border border-[#d2e823]/40 text-[#d2e823] text-sm font-medium shadow-[0_0_15px_rgba(210,232,35,0.15)]">
            <CheckCircle2 className="w-5 h-5 text-[#d2e823]" />
            <span>Thank you! We'll notify you as soon as we launch.</span>
          </div>
        ) : (
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow px-5 py-3.5 rounded-full bg-[#0e1014] border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#d2e823] focus:ring-1 focus:ring-[#d2e823] text-sm shadow-sm"
            />
            <Button
              type="submit"
              variant="primary"
              size="md"
              className="sm:flex-shrink-0 font-bold"
            >
              Notify me
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};
