import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "../components/atoms/Badge";
import { BlogCard } from "../components/molecules/BlogCard";
import { CtaSection } from "../components/organisms/CtaSection";
import { blogData } from "../data/blogData";

export const BlogPage = () => {
  return (
    <div className="w-full flex flex-col bg-[#08090a]">
      {/* Blog Top Banner */}
      <section className="relative w-full pt-36 sm:pt-44 md:pt-48 pb-12 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <Badge variant="lime" hasDot className="mb-4">
            Blog
          </Badge>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] mb-4">
            Insights That Drive Growth
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto mb-8 leading-relaxed font-body">
            Proven social frameworks, algorithm analyses, and conversion
            playbooks directly from our growth strategists. Tell us about your
            brand — we&apos;ll show you how to grow.
          </p>

          {/* Action Buttons matching screenshot */}
          <div className="flex items-center gap-3.5">
            <Link
              to="/case-study"
              className="px-6 py-2.5 rounded-full bg-white/5 border border-white/15 text-white text-sm font-medium hover:bg-[#d2e823] hover:text-black hover:border-[#d2e823] transition-all shadow-sm"
            >
              See Projects
            </Link>
            <Link
              to="/service"
              className="px-6 py-2.5 rounded-full bg-[#d2e823] text-black text-sm font-semibold hover:bg-[#dff15c] transition-all shadow-[0_0_20px_rgba(210,232,35,0.25)]"
            >
              Explore Service
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid (2 columns on tablet/desktop as shown in design) */}
      <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
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

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default BlogPage;
