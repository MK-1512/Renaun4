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
      <div className="relative aspect-[4/3] sm:aspect-[1.2/1] w-full overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[#BCAAA4] border border-[#8D6E63] transition-all duration-500 group-hover:border-[#3E2723] group-hover:shadow-xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-xs"
          loading="lazy"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-[#3E2723]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="font-heading font-bold text-2xl sm:text-3xl text-[#D7CCC8] tracking-tight drop-shadow-md">
            See Details
          </span>
        </div>
      </div>

      <div className="flex flex-col mt-4 sm:mt-5 px-1">
        <span className="text-xs font-mono text-[#4E342E]">{date}</span>
        <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-[#3E2723] tracking-tight mt-1.5 leading-snug group-hover:text-[#4E342E] transition-colors duration-200">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-[#4E342E] mt-1.5 leading-relaxed line-clamp-2 font-body">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
