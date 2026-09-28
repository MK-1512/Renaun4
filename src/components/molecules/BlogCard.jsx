import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

export const BlogCard = ({
  slug,
  title,
  description,
  date,
  readTime,
  image,
  className = "",
}) => {
  return (
    <Link
      to={`/blog/${slug}`}
      className={cn(
        "group flex flex-col cursor-pointer select-none",
        className,
      )}
    >
      <div className="relative aspect-[4/3] sm:aspect-[1.2/1] w-full overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[#0e1014] border border-white/10 transition-all duration-500 group-hover:border-[#d2e823]/60 group-hover:shadow-[0_0_35px_rgba(210,232,35,0.22)]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-md"
          loading="lazy"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] group-hover:text-[#d2e823] transition-colors">
            See Details
          </span>
        </div>
      </div>

      <div className="flex flex-col mt-4 sm:mt-5 px-1">
        <span className="text-xs font-mono text-neutral-400">{date}</span>
        <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-white tracking-tight mt-1.5 leading-snug group-hover:text-[#d2e823] transition-colors duration-200">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-neutral-400 mt-1.5 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
