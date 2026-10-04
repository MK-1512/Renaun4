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

  const tickerItems = [
    ...testimonialsData,
    ...testimonialsData,
    ...testimonialsData,
    ...testimonialsData,
  ];

  return (
    <section
      className={`relative w-full py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#D7CCC8] overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <SectionHeader
          badge="Testimonials"
          title="What our clients say"
          subtitle="Don’t take our word for it — hear from the brands we’ve helped grow."
          theme="light"
          className="mb-8 sm:mb-12"
        />

        <div className="relative w-full max-w-4xl mx-auto rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border border-[#8D6E63] bg-[#3E2723] aspect-video mb-16 sm:mb-20 group">
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

          <div className="absolute bottom-5 right-5 flex items-center gap-3 z-10">
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="w-10 h-10 rounded-full bg-[#3E2723] text-[#D7CCC8] flex items-center justify-center hover:bg-[#4E342E] transition-colors cursor-pointer shadow-md"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-current" />
              ) : (
                <Play className="w-4 h-4 fill-current ml-0.5" />
              )}
            </button>

            <button
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute audio" : "Mute audio"}
              className="w-10 h-10 rounded-full bg-[#3E2723] text-[#D7CCC8] flex items-center justify-center hover:bg-[#4E342E] transition-colors cursor-pointer shadow-md"
            >
              {isMuted ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#D7CCC8] to-transparent z-10" />

        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#D7CCC8] to-transparent z-10" />

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
