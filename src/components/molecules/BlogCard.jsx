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
        "group relative flex flex-col overflow-hidden rounded-3xl bg-[#111418] border border-white/10 p-6 transition-all duration-300",
        "hover:border-[#d2e823]/40 hover:shadow-xl",
        className,
      )}
    >
      {/* Featured Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-neutral-900 mb-6">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Meta Date and Read Time */}
      <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-3">
        <span>{date}</span>
        <span>•</span>
        <span>{readTime}</span>
      </div>

      {/* Title & Description */}
      <div className="flex flex-col gap-2 flex-grow">
        <h3 className="font-heading font-bold text-xl text-white group-hover:text-[#d2e823] transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Footer Link */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10 text-xs font-mono uppercase tracking-wider text-neutral-300 group-hover:text-[#d2e823]">
        <span>See Details</span>
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
};
