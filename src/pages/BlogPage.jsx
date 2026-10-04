import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "../components/atoms/Badge";
import { BlogCard } from "../components/molecules/BlogCard";
import { CtaSection } from "../components/organisms/CtaSection";
import { blogData } from "../data/blogData";

export const BlogPage = () => {
  return (
    <div className="w-full flex flex-col bg-[#D7CCC8]">
      <section className="relative w-full pt-36 sm:pt-44 md:pt-48 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#8D6E63]/30">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <Badge variant="cream" hasDot className="mb-4">
            Blog
          </Badge>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#3E2723] tracking-tight leading-[1.1] mb-4">
            Insights That Drive Growth
          </h1>

          <p className="text-base sm:text-lg text-[#4E342E] max-w-2xl mx-auto mb-8 leading-relaxed font-body">
            Proven social frameworks, algorithm analyses, and conversion
            playbooks directly from our growth strategists. Tell us about your
            brand — we&apos;ll show you how to grow.
          </p>

          <div className="flex items-center gap-3.5">
            <Link
              to="/case-study"
              className="px-6 py-2.5 rounded-full bg-transparent text-[#3E2723] border border-[#3E2723] text-sm font-medium hover:bg-[#3E2723]/10 transition-all shadow-xs"
            >
              See Projects
            </Link>
            <Link
              to="/service"
              className="px-6 py-2.5 rounded-full bg-[#3E2723] text-[#D7CCC8] text-sm font-semibold hover:bg-[#4E342E] transition-all shadow-sm"
            >
              Explore Service
            </Link>
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#D7CCC8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {blogData.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                readTime={post.readTime}
                image={post.image}
              />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default BlogPage;
