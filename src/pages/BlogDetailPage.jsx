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
    <div className="w-full flex flex-col bg-[#D7CCC8]">
      <section className="relative w-full pt-36 sm:pt-44 md:pt-48 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#8D6E63]/30">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#4E342E] hover:text-[#3E2723] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights</span>
          </Link>

          <Badge variant="cream" hasDot className="w-fit">
            Blog Details
          </Badge>

          <h1 className="font-heading font-bold text-3xl sm:text-5xl md:text-6xl text-[#3E2723] tracking-tight leading-[1.1]">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-[#4E342E] leading-relaxed font-body">
            {post.description}
          </p>

          <div className="flex items-center gap-4 pt-4 border-t border-[#8D6E63]/30 text-xs font-mono text-[#4E342E]">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#4E342E]" />
              {post.date}
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#4E342E]" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      <section className="relative w-full py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl border border-[#8D6E63]">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <article className="relative w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto flex flex-col gap-10">
          {post.sections.map((sec, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#3E2723] tracking-tight">
                {sec.heading}
              </h2>
              <p className="text-base sm:text-lg text-[#4E342E] leading-relaxed font-body">
                {sec.content}
              </p>
            </div>
          ))}

          <div className="p-8 rounded-3xl bg-[#BCAAA4] border border-[#8D6E63] shadow-lg mt-4 flex flex-col gap-4">
            <span className="text-xs font-mono uppercase tracking-wider text-[#4E342E] font-bold">
              Conversion Checklist
            </span>
            <h4 className="font-heading font-bold text-xl text-[#3E2723]">
              Always Include in High-Converting Content:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-[#D7CCC8] border border-[#8D6E63]/60 font-mono text-sm font-semibold text-[#3E2723] text-center shadow-xs">
                1. Follow Hook
              </div>
              <div className="p-4 rounded-xl bg-[#D7CCC8] border border-[#8D6E63]/60 font-mono text-sm font-semibold text-[#3E2723] text-center shadow-xs">
                2. Save Trigger
              </div>
              <div className="p-4 rounded-xl bg-[#D7CCC8] border border-[#8D6E63]/60 font-mono text-sm font-semibold text-[#3E2723] text-center shadow-xs">
                3. Click Link Action
              </div>
            </div>
          </div>
        </div>
      </article>

      <CtaSection />
    </div>
  );
};

export default BlogDetailPage;
