import React from "react";
import { SectionHeader } from "../components/molecules/SectionHeader";
import { BlogCard } from "../components/molecules/BlogCard";
import { Button } from "../components/atoms/Button";
import { CtaSection } from "../components/organisms/CtaSection";
import { blogData } from "../data/blogData";

export const BlogPage = () => {
  return (
    <div className="w-full flex flex-col">
      {/* Blog Top Banner */}
      <section className="relative w-full bg-[#fbfde9] pt-36 sm:pt-44 md:pt-48 pb-12 px-4 sm:px-6 lg:px-8 border-b border-black/5">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <SectionHeader
            badge="Blog"
            title="Insights That Drive Growth"
            subtitle="Proven social frameworks, algorithm analyses, and conversion playbooks directly from our growth strategists."
            titleTag="h1"
            className="mb-8"
          />

          <div className="flex items-center gap-3">
            <Button
              to="/case-study"
              variant="white"
              size="sm"
              showArrow
              className="border border-black/10"
            >
              See Projects
            </Button>
            <Button to="/service" variant="dark" size="sm" showArrow>
              Explore Service
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#fbfde9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
