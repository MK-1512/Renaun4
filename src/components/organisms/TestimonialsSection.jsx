import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { SectionHeader } from "../molecules/SectionHeader";
import { TestimonialCard } from "../molecules/TestimonialCard";
import { testimonialsData } from "../../data/testimonialsData";
import testimonialVideo from "../../assets/testimonial.mp4";

export const TestimonialsSection = ({ className = "" }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Duplicate for smooth continuous infinite horizontal marquee
  const tickerItems = [
    ...testimonialsData,
    ...testimonialsData,
    ...testimonialsData,
    ...testimonialsData,
  ];

  return (
    <section
      className={`relative w-full py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#08090a] overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <SectionHeader
          badge="Testimonials"
          title="What our clients say"
          subtitle="Don’t take our word for it — hear from the brands we’ve helped grow."
          className="mb-8 sm:mb-12"
        />

        {/* Testimonial Video directly below the subtitle */}
        <div className="relative w-full max-w-4xl mx-auto rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/10 bg-black aspect-video mb-16 sm:mb-20 group">
          <video
            ref={videoRef}
            src={testimonialVideo}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onClick={togglePlay}
            className="w-full h-full object-cover cursor-pointer"
          />

          {/* Video Control Buttons Overlay */}
          <div className="absolute bottom-5 right-5 flex items-center gap-3 z-10">
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#d2e823] hover:text-black hover:border-[#d2e823] transition-colors cursor-pointer"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-white text-white" />
              ) : (
                <Play className="w-4 h-4 fill-white text-white ml-0.5" />
              )}
            </button>

            <button
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              className="w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#d2e823] hover:text-black hover:border-[#d2e823] transition-colors cursor-pointer"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4 text-white" />
              ) : (
                <Volume2 className="w-4 h-4 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Marquee Ticker: cards moving from right to left with edge fade masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left edge fade gradient */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#08090a] to-transparent z-10" />

        {/* Right edge fade gradient */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#08090a] to-transparent z-10" />

        {/* Moving row of testimonial cards */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 32,
            ease: "linear",
          }}
          className="flex gap-6 sm:gap-8 w-max py-4 hover:[animation-play-state:paused]"
        >
          {tickerItems.map((item, idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[420px] flex-shrink-0 transition-transform duration-300 hover:scale-[1.02]"
            >
              <TestimonialCard
                quote={item.quote}
                name={item.name}
                role={item.role}
                rating={item.rating}
                avatar={item.avatar}
                className="h-full"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
