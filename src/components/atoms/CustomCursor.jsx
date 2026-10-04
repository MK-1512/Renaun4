import React, { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const canvasRef = useRef(null);

  const [isSupported, setIsSupported] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTextTarget, setIsTextTarget] = useState(false);

  useEffect(() => {
    const finePointerQuery = window.matchMedia("(pointer: fine)");
    if (!finePointerQuery.matches) {
      return;
    }
    setIsSupported(true);

    const mouse = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    const prevMouse = { x: -100, y: -100 };
    let animId = null;
    let particles = [];
    const canvas = canvasRef.current;
    const ctx = canvas ? canvas.getContext("2d") : null;

    const resizeCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
        ring.x = e.clientX;
        ring.y = e.clientY;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }

      const dx = mouse.x - prevMouse.x;
      const dy = mouse.y - prevMouse.y;
      const dist = Math.hypot(dx, dy);

      if (dist > 3 && particles.length < 24) {
        particles.push({
          x: mouse.x,
          y: mouse.y,
          vx: (Math.random() - 0.5) * 0.8 - dx * 0.08,
          vy: (Math.random() - 0.5) * 0.8 - dy * 0.08,
          size: Math.min(4.5, 2.5 + dist * 0.05),
          alpha: 0.45,
          decay: 0.035 + Math.random() * 0.015,
        });
      }
      prevMouse.x = mouse.x;
      prevMouse.y = mouse.y;

      const target = e.target;
      if (target && target.closest) {
        const isInteractive = Boolean(
          target.closest(
            'a, button, [role="button"], input, select, textarea, .cursor-pointer, [data-cursor-hover]',
          ),
        );
        const isTextInput = Boolean(
          target.closest('input[type="text"], input[type="email"], textarea'),
        );
        setIsHovered(isInteractive);
        setIsTextTarget(isTextInput);
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => {
      setIsVisible(false);
      particles = [];
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    const render = () => {
      const lerpFactor = 0.18;
      ring.x += (mouse.x - ring.x) * lerpFactor;
      ring.y += (mouse.y - ring.y) * lerpFactor;

      const vx = mouse.x - ring.x;
      const vy = mouse.y - ring.y;
      const speed = Math.min(Math.hypot(vx, vy), 28);
      const angle = Math.atan2(vy, vx);

      if (ringRef.current) {
        const stretchX = 1 + speed * 0.012;
        const stretchY = 1 / (1 + speed * 0.008);
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) rotate(${angle}rad) scale(${stretchX}, ${stretchY})`;
      }

      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = particles.length - 1; i >= 0; i--) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;
          p.size = Math.max(0, p.size - 0.08);
          p.alpha -= p.decay;

          if (p.alpha <= 0 || p.size <= 0) {
            particles.splice(i, 1);
            continue;
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(62, 39, 35, ${p.alpha})`;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!isSupported) {
    return null;
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[99990]"
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 -ml-1 -mt-1 pointer-events-none z-[99999] rounded-full transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          isTextTarget
            ? "w-1 h-3.5 bg-[#3E2723] rounded-xs"
            : isHovered
              ? "w-2 h-2 bg-[#3E2723]"
              : "w-2 h-2 bg-[#3E2723]"
        }`}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`fixed top-0 left-0 pointer-events-none z-[99995] rounded-full transition-all duration-200 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          isTextTarget
            ? "w-5 h-5 -ml-2.5 -mt-2.5 border border-[#3E2723]/30 bg-transparent opacity-30"
            : isHovered
              ? isClicked
                ? "w-11 h-11 -ml-[22px] -mt-[22px] border-2 border-[#3E2723] bg-[#3E2723]/20 scale-90"
                : "w-12 h-12 -ml-6 -mt-6 border-2 border-[#3E2723] bg-[#3E2723]/10 scale-110"
              : isClicked
                ? "w-7 h-7 -ml-3.5 -mt-3.5 border border-[#3E2723] bg-[#3E2723]/15 scale-75"
                : "w-8 h-8 -ml-4 -mt-4 border border-[#3E2723]/60 bg-transparent"
        }`}
      />
    </>
  );
}

export default CustomCursor;
