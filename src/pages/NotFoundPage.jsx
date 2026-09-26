import React from "react";
import { Badge } from "../components/atoms/Badge";
import { Button } from "../components/atoms/Button";

export const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center px-4 sm:px-6 pt-36 pb-20 text-center bg-[#08090a]">
      <div className="max-w-2xl mx-auto flex flex-col items-center">
        <Badge variant="lime" hasDot className="mb-6">
          Page Not Found
        </Badge>

        <span className="font-heading font-bold text-7xl sm:text-9xl text-neutral-800 mb-2 select-none">
          404
        </span>

        <h1 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight leading-[1.1] mb-6">
          Looks like you’ve taken a wrong turn!
        </h1>

        <p className="text-base sm:text-lg text-neutral-400 max-w-md mb-10 leading-relaxed font-body">
          Don’t worry — head back home and keep exploring more creative pages.
        </p>

        <Button
          to="/"
          variant="primary"
          size="lg"
          showArrow
          className="px-8 font-bold"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};
