import React, { useRef, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Badge } from "../components/atoms/Badge";
import { Button } from "../components/atoms/Button";
import { StatCard } from "../components/molecules/StatCard";
import { StarRating } from "../components/atoms/StarRating";
import { CtaSection } from "../components/organisms/CtaSection";
import { caseStudiesData } from "../data/caseStudiesData";
import {
  ArrowLeft,
  Play,
  Pause,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export const CaseStudyDetailPage = () => {
  const { id } = useParams();
  const study = caseStudiesData.find(
    (item) => item.id.toLowerCase() === id?.toLowerCase(),
  );

  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

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
    <div className="w-full flex flex-col bg-[#08090a]">
      {/* Top Banner */}
      <section className="relative w-full pt-36 sm:pt-44 md:pt-48 pb-14 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          {/* Back link & Category Badge */}
          <div className="flex items-center justify-between">
            <Link
              to="/case-study"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Case Studies</span>
            </Link>

            <Badge variant="lime" hasDot>
              {study.category}
            </Badge>
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-mono text-[#d2e823] uppercase tracking-wider">
              {study.subtitle}
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.05]">
              {study.title}
            </h1>
          </div>

          {/* Project Meta Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#0e1014] border border-white/10 mt-4 shadow-sm">
            <div>
              <span className="text-xs font-mono uppercase text-neutral-400 block mb-1">
                Category
              </span>
              <span className="font-heading font-semibold text-base text-white">
                {study.category}
              </span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-neutral-400 block mb-1">
                Year
              </span>
              <span className="font-heading font-semibold text-base text-white">
                {study.year}
              </span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-neutral-400 block mb-1">
                Platforms
              </span>
              <span className="font-heading font-semibold text-base text-white">
                IG, TikTok, Meta
              </span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-neutral-400 block mb-1">
                Timeline
              </span>
              <span className="font-heading font-semibold text-base text-white">
                90 Days System
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Video Showcase */}
      <section className="relative w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-black shadow-2xl border border-black/10 group">
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
            {/* Play/Pause Button overlay */}
            <button
              onClick={togglePlay}
              className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#d2e823] hover:text-black transition-all duration-300"
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

      {/* Key Metrics / Results Counters */}
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

      {/* Case Study Content Breakdown */}
      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col gap-16">
          {/* Introduction & Overview */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0e1014] border border-white/10 flex flex-col gap-4 shadow-sm">
            <span className="text-xs font-mono uppercase tracking-wider text-[#d2e823]">
              Introduction
            </span>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
              {study.overview}
            </h3>
            <p className="text-base text-neutral-300 leading-relaxed font-body">
              {study.introduction}
            </p>
          </div>

          {/* Challenge & Approach 2-column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Challenge */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0e1014] text-white border border-white/10 flex flex-col gap-6 shadow-sm">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-[#d2e823]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#d2e823]">
                  The Challenge
                </span>
              </div>
              <h4 className="font-heading font-bold text-2xl text-white">
                Main Issues Faced
              </h4>
              <ul className="flex flex-col gap-3.5">
                {study.challenges.map((c, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-neutral-300 font-body"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d2e823] mt-2 flex-shrink-0 shadow-[0_0_6px_#d2e823]" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Approach */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0e1014] border border-[#d2e823]/40 flex flex-col gap-6 shadow-[0_0_25px_rgba(210,232,35,0.12)]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#d2e823]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#d2e823]">
                  Our Approach
                </span>
              </div>
              <h4 className="font-heading font-bold text-2xl text-white">
                The Growth System
              </h4>
              <ul className="flex flex-col gap-3.5">
                {study.approaches.map((a, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-neutral-300 font-body"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d2e823] mt-2 flex-shrink-0 shadow-[0_0_6px_#d2e823]" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Highlights in Action */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0e1014] border border-white/10 flex flex-col gap-6 shadow-sm">
            <span className="text-xs font-mono uppercase tracking-wider text-[#d2e823]">
              Content in Action
            </span>
            <h4 className="font-heading font-bold text-2xl text-white">
              Highlights & Production Focus
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {study.highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-sm font-medium text-neutral-200"
                >
                  {h}
                </div>
              ))}
            </div>
          </div>

          {/* Client Feedback Card */}
          {study.testimonial && (
            <div className="p-8 sm:p-12 rounded-3xl bg-[#0e1014] text-white border border-[#d2e823]/30 shadow-[0_0_30px_rgba(210,232,35,0.12)] flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#d2e823]">
                  Client Feedback
                </span>
                <StarRating count={5} />
              </div>
              <p className="text-xl sm:text-2xl text-neutral-200 italic leading-relaxed">
                "{study.testimonial.quote}"
              </p>
              <div className="flex flex-col pt-4 border-t border-white/10">
                <span className="font-heading font-bold text-lg text-white">
                  {study.testimonial.author}
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  {study.testimonial.role}
                </span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};
