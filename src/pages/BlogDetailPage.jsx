import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Badge } from "../components/atoms/Badge";
import { CtaSection } from "../components/organisms/CtaSection";
import { blogData } from "../data/blogData";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export const BlogDetailPage = () => {
  const { slug } = useParams();
  const post = blogData.find((item) => item.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="w-full flex flex-col bg-[#fbfde9]">
      {/* Article Header */}
      <section className="relative w-full pt-36 sm:pt-44 md:pt-48 pb-12 px-4 sm:px-6 lg:px-8 border-b border-black/5">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights</span>
          </Link>

          <Badge variant="lime" hasDot className="w-fit">
            Blog Details
          </Badge>

          <h1 className="font-heading font-bold text-3xl sm:text-5xl md:text-6xl text-[#0a0a0a] tracking-tight leading-[1.1]">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-body">
            {post.description}
          </p>

          <div className="flex items-center gap-4 pt-4 border-t border-black/10 text-xs font-mono text-neutral-500">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-neutral-400" />
              {post.date}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-neutral-400" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Banner Image */}
      <section className="relative w-full py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-xl border border-black/10">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Body Content */}
      <article className="relative w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          {post.sections.map((sec, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#0a0a0a] tracking-tight">
                {sec.heading}
              </h2>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">
                {sec.content}
              </p>
            </div>
          ))}

          {/* Core Framework Checklist Box */}
          <div className="p-8 rounded-3xl bg-white border border-black/10 shadow-sm mt-4 flex flex-col gap-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#a5b00f]">
              Conversion Checklist
            </span>
            <h4 className="font-heading font-bold text-xl text-[#0a0a0a]">
              Always Include in High-Converting Content:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-[#fbfde9] border border-black/5 font-mono text-sm font-semibold text-[#0a0a0a] text-center">
                1. Follow Hook
              </div>
              <div className="p-4 rounded-xl bg-[#fbfde9] border border-black/5 font-mono text-sm font-semibold text-[#0a0a0a] text-center">
                2. Save Trigger
              </div>
              <div className="p-4 rounded-xl bg-[#fbfde9] border border-black/5 font-mono text-sm font-semibold text-[#0a0a0a] text-center">
                3. Click Link Action
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};
