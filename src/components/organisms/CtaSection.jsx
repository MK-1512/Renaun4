import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "../atoms/Badge";
import { Button } from "../atoms/Button";

const ctaVideos = [
  "https://framerusercontent.com/assets/GHkNwjSRge2GL1tR5qdng1UCtc.mp4", // Woman in red dress, curls
  "https://framerusercontent.com/assets/P06YaNIKki2B3i3Vvjpsb3AmRQ.mp4", // Model in white sheer dress
  "https://framerusercontent.com/assets/zMexgBHyeHY99EjtiWTg2eY4.mp4", // Red sunglasses
  "https://framerusercontent.com/assets/S6io1Wjon3bfaeyDEmSEPww1a0.mp4", // Clear futuristic visor glasses
  "https://framerusercontent.com/assets/2rNRnnf79FoE7pnq5M1MEvAbPo.mp4",
  "https://framerusercontent.com/assets/dLQVRzGAgiavmhF6IvTLmo82T7Q.mp4", // Mirror in field of flowers
  "https://framerusercontent.com/assets/XjbutqbT6Oa8zL6fpCNasosLI8.mp4",
  "https://framerusercontent.com/assets/RXbzKGR1rI23g0edq2X8QLk1QY.mp4", // Rainbow light on face
  "https://framerusercontent.com/assets/emCE0rrCwtn6j4Zkqr77I0PeXtk.mp4",
  "https://framerusercontent.com/assets/aQgjqLBaxG3TQZS2FjonHEmYic.mp4",
  "https://framerusercontent.com/assets/BFhH7GlKrFeKB6FyQs34HZM94.mp4",
  "https://framerusercontent.com/assets/T3Horp6jHulJGKhKpKfMm4dTd0.mp4",
  "https://framerusercontent.com/assets/9LQ7fGWzQPOqjDlckElOv1wTf8I.mp4",
  "https://framerusercontent.com/assets/gNN0lGo19Rdv99WfLkbeTn1Uuo.mp4",
];

export const CtaSection = ({
  badge = "Get Started",
  heading = "Ready to grow your brand?",
  subheading = "Let’s turn your social media into a powerful growth engine.",
  buttonText,
  buttonHref = "/contact",
  className = "",
}) => {
  const [dimensions, setDimensions] = useState({
    cardWidth: 260,
    cardHeight: 380,
    radius: 720,
    perspective: 1100,
  });

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDimensions({
          cardWidth: 160,
          cardHeight: 240,
          radius: 400,
          perspective: 750,
        });
      } else if (width < 1024) {
        setDimensions({
          cardWidth: 210,
          cardHeight: 310,
          radius: 560,
          perspective: 950,
        });
      } else {
        setDimensions({
          cardWidth: 260,
          cardHeight: 380,
          radius: 720,
          perspective: 1100,
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const totalCards = ctaVideos.length;

  return (
    <section
      className={`relative w-full pt-20 sm:pt-28 md:pt-32 pb-16 sm:pb-24 bg-black overflow-hidden ${className}`}
    >
      {/* Background radial accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#d2e823]/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Centered Heading Block matching screenshot */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <Badge variant="lime" hasDot className="mb-6">
          {badge}
        </Badge>

        <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] mb-5">
          {heading}
        </h2>

        <p className="text-base sm:text-lg text-neutral-400 max-w-xl leading-relaxed font-body">
          {subheading}
        </p>

        {buttonText && (
          <div className="pt-8">
            <Button
              to={buttonHref}
              variant="primary"
              size="lg"
              showArrow
              className="font-bold text-base px-9 py-4 shadow-[0_4px_25px_rgba(210,232,35,0.35)]"
            >
              {buttonText}
            </Button>
          </div>
        )}
      </div>

      {/* ================= 3D CYLINDRICAL CAROUSEL ================= */}
      {/* Matching the exact concave 3D perspective arc from the user screenshots */}
      <div
        className="relative w-full overflow-hidden flex items-center justify-center select-none"
        style={{
          perspective: `${dimensions.perspective}px`,
          perspectiveOrigin: "center 45%",
          height: `${dimensions.cardHeight + 140}px`,
        }}
      >
        {/* Left & Right dark edge fade overlays */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-24 sm:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 inset-y-0 w-24 sm:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-20" />

        {/* 3D Rotating Cylinder Ring */}
        <motion.div
          animate={{ rotateY: [0, -360] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 38,
            ease: "linear",
          }}
          className="relative origin-center pointer-events-auto hover:[animation-play-state:paused]"
          style={{
            transformStyle: "preserve-3d",
            width: "100%",
            height: "100%",
          }}
        >
          {ctaVideos.map((videoSrc, idx) => {
            const angle = (idx * 360) / totalCards;

            return (
              <div
                key={idx}
                className="absolute rounded-[24px] sm:rounded-[32px] overflow-hidden bg-neutral-900 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
                style={{
                  width: `${dimensions.cardWidth}px`,
                  height: `${dimensions.cardHeight}px`,
                  left: "50%",
                  top: "50%",
                  marginLeft: `-${dimensions.cardWidth / 2}px`,
                  marginTop: `-${dimensions.cardHeight / 2}px`,
                  transform: `rotateY(${angle}deg) translateZ(-${dimensions.radius}px)`,
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <video
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover pointer-events-none select-none"
                />
                <div className="absolute inset-0 bg-black/10 pointer-events-none" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
