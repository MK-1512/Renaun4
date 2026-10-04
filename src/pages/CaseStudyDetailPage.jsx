import React, { useRef, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  Play,
  Pause,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Badge } from "../components/atoms/Badge";
import { StatCard } from "../components/molecules/StatCard";
import { StarRating } from "../components/atoms/StarRating";
import { CtaSection } from "../components/organisms/CtaSection";
import { caseStudiesData } from "../data/caseStudiesData";

export const CaseStudyDetailPage = () => {
  const { id } = useParams();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const study =
    caseStudiesData.find((s) => s.id === id) || caseStudiesData[0];

  if (!study) {
    return <Navigate to="/case-study" replace />;
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="w-full flex flex-col bg-[#D7CCC8]">
      <section className="relative w-full pt-36 sm:pt-44 md:pt-48 pb-14 px-4 sm:px-6 lg:px-8 border-b border-[#8D6E63]/30">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <Link
              to="/case-study"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#4E342E] hover:text-[#3E2723] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Case Studies</span>
            </Link>

            <Badge variant="cream" hasDot>
              {study.category}
            </Badge>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-mono text-[#4E342E] uppercase tracking-wider">
              {study.subtitle}
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl text-[#3E2723] tracking-tight leading-[1.05]">
              {study.title}
            </h1>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#BCAAA4] border border-[#8D6E63] mt-4 shadow-sm">
            <div>
              <span className="text-xs font-mono uppercase text-[#4E342E] block mb-1">
                Category
              </span>
              <span className="font-heading font-semibold text-base text-[#3E2723]">
                {study.category}
              </span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-[#4E342E] block mb-1">
                Year
              </span>
              <span className="font-heading font-semibold text-base text-[#3E2723]">
                {study.year}
              </span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-[#4E342E] block mb-1">
                Platforms
              </span>
              <span className="font-heading font-semibold text-base text-[#3E2723]">
                IG, TikTok, Meta
              </span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-[#4E342E] block mb-1">
                Timeline
              </span>
              <span className="font-heading font-semibold text-base text-[#3E2723]">
                90 Days System
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-[#3E2723] shadow-2xl border border-[#8D6E63] group">
            <video
              ref={videoRef}
              src={study.video}
              poster={study.poster}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <button
              onClick={togglePlay}
              className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-[#3E2723] text-[#D7CCC8] flex items-center justify-center hover:bg-[#4E342E] transition-all duration-300 shadow-md cursor-pointer"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" />
              )}
            </button>
          </div>
        </div>
      </section>

      <section className="relative w-full py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {study.stats.map((stat, idx) => (
              <StatCard
                key={idx}
                value={stat.value}
                label={stat.label}
                theme="light"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#BCAAA4] border border-[#8D6E63] flex flex-col gap-4 shadow-md">
            <span className="text-xs font-mono uppercase tracking-wider text-[#4E342E] font-bold">
              Introduction
            </span>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#3E2723]">
              {study.overview}
            </h3>
            <p className="text-base text-[#4E342E] leading-relaxed font-body">
              {study.introduction}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#BCAAA4] text-[#3E2723] border border-[#8D6E63] flex flex-col gap-6 shadow-md">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-[#3E2723]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#4E342E] font-bold">
                  The Challenge
                </span>
              </div>
              <h4 className="font-heading font-bold text-2xl text-[#3E2723]">
                Main Issues Faced
              </h4>
              <ul className="flex flex-col gap-3.5">
                {study.challenges.map((c, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-[#4E342E] font-body"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3E2723] mt-2 flex-shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#BCAAA4] border border-[#8D6E63] flex flex-col gap-6 shadow-md">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#3E2723]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#4E342E] font-bold">
                  Our Approach
                </span>
              </div>
              <h4 className="font-heading font-bold text-2xl text-[#3E2723]">
                The Growth System
              </h4>
              <ul className="flex flex-col gap-3.5">
                {study.approaches.map((a, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-[#4E342E] font-body"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3E2723] mt-2 flex-shrink-0" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#BCAAA4] border border-[#8D6E63] flex flex-col gap-6 shadow-md">
            <span className="text-xs font-mono uppercase tracking-wider text-[#4E342E] font-bold">
              Content in Action
            </span>
            <h4 className="font-heading font-bold text-2xl text-[#3E2723]">
              Highlights & Production Focus
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {study.highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-[#D7CCC8] border border-[#8D6E63]/50 text-sm font-medium text-[#3E2723] shadow-xs"
                >
                  {h}
                </div>
              ))}
            </div>
          </div>

          {study.testimonial && (
            <div className="p-8 sm:p-12 rounded-3xl bg-[#BCAAA4] text-[#3E2723] border border-[#8D6E63] shadow-lg flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#4E342E] font-bold">
                  Client Feedback
                </span>
                <StarRating count={5} />
              </div>
              <p className="text-xl sm:text-2xl text-[#3E2723] italic leading-relaxed">
                "{study.testimonial.quote}"
              </p>
              <div className="flex flex-col pt-4 border-t border-[#8D6E63]/40">
                <span className="font-heading font-bold text-lg text-[#3E2723]">
                  {study.testimonial.author}
                </span>
                <span className="text-xs font-mono text-[#4E342E]">
                  {study.testimonial.role}
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      <CtaSection />
    </div>
  );
};

export default CaseStudyDetailPage;
