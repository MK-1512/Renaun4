import React, { useEffect, useRef, useState } from "react";

const sphereImages = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=85",
  "https://framerusercontent.com/images/WUDb6I7B9y8L3jYkrOHh2C00Oiw.png?width=900&height=1200",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=85",
  "https://framerusercontent.com/images/yqf6ebGWcixisXDtgOmph82TDeA.png?width=1200&height=933",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85",
  "https://framerusercontent.com/images/4Ft4BHj6NGDvJiQFYoSHIL1Le40.png?width=876&height=1200",

  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=85",
  "https://framerusercontent.com/images/tkXDrbRAWTXHyfqSxSSe2wmGHNg.png?width=800&height=1200",
  "https://framerusercontent.com/images/sPJvxGCZHe8wQ1ON9OCwFxRofIY.png?width=655&height=1200",
  "https://framerusercontent.com/images/x5dQAI8dggdvbkghM3epPChmU.png?width=1200&height=904",
  "https://framerusercontent.com/images/saCK0AdLHTLiaDLsB0bxMUY.png?width=837&height=1199",
  "https://framerusercontent.com/images/Bo1arJSjQszj3p0xQ0skJr4JMBY.png?width=1200&height=679",

  "https://framerusercontent.com/images/Bnb5C8aD9bMXulZDvYKX7FP1fJM.jpg?width=768&height=1020",
  "https://framerusercontent.com/images/0xgrhBDNmzaO3KmGGPBiN22Hkk.png?width=904&height=1200",
  "https://framerusercontent.com/images/vISuSBCQTcFMPuGS5HXuILHMc.png?width=992&height=1200",
  "https://framerusercontent.com/images/37ixGJCI8TkrMSifcexb6ncGz5g.png?width=640&height=850",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=85",
  "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=85",
];

export const HeroVideoWheel = () => {
  const sphereRef = useRef(null);

  const isDraggingRef = useRef(false);

  const dragStartRef = useRef({
    x: 0,
    y: 0,
  });

  const velocityRef = useRef({
    x: 0,
    y: 0,
  });

  const rotRef = useRef({
    x: -4,
    y: 0,
  });

  const [dimensions, setDimensions] = useState({
    radius: 500,
    midCardWidth: 120,
    midCardHeight: 190,
    perspective: 1100,
  });

  useEffect(() => {
    const updateSize = () => {
      const w = window.innerWidth;

      if (w < 640) {
        setDimensions({
          radius: 270,
          midCardWidth: 65,
          midCardHeight: 105,
          perspective: 680,
        });
      } else if (w < 1024) {
        setDimensions({
          radius: 390,
          midCardWidth: 90,
          midCardHeight: 145,
          perspective: 900,
        });
      } else {
        setDimensions({
          radius: 500,
          midCardWidth: 120,
          midCardHeight: 190,
          perspective: 1100,
        });
      }
    };

    updateSize();

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  useEffect(() => {
    let animId;
    let lastTime = performance.now();

    const loop = (time) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);

      lastTime = time;

      if (!isDraggingRef.current) {
        velocityRef.current.x *= 0.95;
        velocityRef.current.y *= 0.95;

        const constantSpeed = 14;

        rotRef.current.y += constantSpeed * dt + velocityRef.current.x;

        rotRef.current.x = Math.max(
          -25,
          Math.min(25, rotRef.current.x + velocityRef.current.y),
        );

        if (Math.abs(velocityRef.current.y) < 0.01) {
          const defaultTilt = -4;

          rotRef.current.x += (defaultTilt - rotRef.current.x) * 0.02;
        }
      }

      if (sphereRef.current) {
        sphereRef.current.style.transform = `
          rotateX(${rotRef.current.x.toFixed(2)}deg)
          rotateY(${rotRef.current.y.toFixed(2)}deg)
        `;
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animId);
  }, []);

  const handlePointerDown = (e) => {
    isDraggingRef.current = true;

    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
    };

    velocityRef.current = {
      x: 0,
      y: 0,
    };
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;

    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;

    const sensX = 0.25;
    const sensY = 0.2;

    rotRef.current.y += dx * sensX;

    rotRef.current.x = Math.max(
      -25,
      Math.min(25, rotRef.current.x - dy * sensY),
    );

    velocityRef.current = {
      x: dx * sensX,
      y: -dy * sensY,
    };

    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
    };
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <div
      className="
        relative
        w-full
        max-w-[1900px]
        h-[480px]
        sm:h-[600px]
        md:h-[680px]
        lg:h-[740px]
        overflow-hidden
        flex
        justify-center
        items-center
        select-none
      "
      style={{
        perspective: `${dimensions.perspective}px`,
        perspectiveOrigin: "50% 50%",
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div
        ref={sphereRef}
        className="
          relative
          flex
          items-center
          justify-center
          pointer-events-auto
        "
        style={{
          width: "0px",
          height: "0px",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {sphereImages.map((image, i) => {
          const theta = i * (360 / sphereImages.length);

          return (
            <div
              key={`mid-${i}`}
              className="
                absolute
                rounded-xl
                md:rounded-2xl
                overflow-hidden
                bg-[#BCAAA4]
                border
                border-[#8D6E63]
                shadow-xl
                transition-[border-color,box-shadow]
                duration-300
              "
              style={{
                width: `${dimensions.midCardWidth}px`,
                height: `${dimensions.midCardHeight}px`,
                left: `${-dimensions.midCardWidth / 2}px`,
                top: `${-dimensions.midCardHeight / 2}px`,
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",

                transform: `
                  rotateY(${theta}deg)
                  translateZ(${dimensions.radius}px)
                `,
              }}
            >
              <img
                src={image}
                alt={`Photo gallery ${i + 1}`}
                loading="eager"
                draggable={false}
                className="
                  w-full
                  h-full
                  object-cover
                  select-none
                  pointer-events-none
                "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroVideoWheel;
