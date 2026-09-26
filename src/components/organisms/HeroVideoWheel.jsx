import React from "react";
import { motion } from "framer-motion";
import { heroVideosData } from "../../data/heroVideosData";

export const HeroVideoWheel = () => {
  return (
    <div className="relative w-full max-w-[1900px] h-[220px] sm:h-[300px] md:h-[360px] overflow-hidden flex justify-center items-start mt-6">
      {/* Giant Rotating Wheel */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="relative w-[1100px] sm:w-[1350px] md:w-[1580px] aspect-square flex-shrink-0 origin-center"
      >
        {heroVideosData.map((item, idx) => {
          // Calculate polar coordinates on the wheel's perimeter
          const radiusPercent = 43; // 43% from center
          const radians = (item.angle - 90) * (Math.PI / 180);
          const x = 50 + radiusPercent * Math.cos(radians);
          const y = 50 + radiusPercent * Math.sin(radians);

          return (
            <div
              key={idx}
              className="absolute w-[120px] sm:w-[145px] md:w-[170px] aspect-[9/16] rounded-2xl md:rounded-3xl overflow-hidden bg-black/80 border border-white/20 shadow-2xl"
              style={{
                top: `${y}%`,
                left: `${x}%`,
                transform: `translate(-50%, -50%) rotate(${item.angle}deg)`,
              }}
            >
              <video
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover select-none pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          );
        })}
      </motion.div>

      {/* Subtle fade overlays at the edges for smooth blending */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#fbfde9] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#fbfde9] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#fbfde9] to-transparent pointer-events-none z-10" />
    </div>
  );
};
