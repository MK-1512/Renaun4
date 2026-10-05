import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const [isSupported, setIsSupported] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const isClickedRef = useRef(false);

  useEffect(() => {
    const finePointerQuery = window.matchMedia("(pointer: fine)");
    if (!finePointerQuery.matches) {
      return;
    }
    setIsSupported(true);

    const mouse = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let animId = null;

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
        ring.x = e.clientX;
        ring.y = e.clientY;
      }
    };

    const onMouseDown = () => {
      isClickedRef.current = true;
    };

    const onMouseUp = () => {
      isClickedRef.current = false;
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);
    const onWindowBlur = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("blur", onWindowBlur);

    const render = () => {
      const posLerp = 0.2;
      ring.x += (mouse.x - ring.x) * posLerp;
      ring.y += (mouse.y - ring.y) * posLerp;

      const vx = mouse.x - ring.x;
      const vy = mouse.y - ring.y;
      const speed = Math.min(Math.hypot(vx, vy), 28);
      const angle = Math.atan2(vy, vx);

      const targetScale = isClickedRef.current ? 0.8 : 1;
      const stretchX = (1 + speed * 0.008) * targetScale;
      const stretchY = (1 / (1 + speed * 0.006)) * targetScale;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) rotate(${angle}rad) scale(${stretchX.toFixed(3)}, ${stretchY.toFixed(3)})`;
      }

      if (dotRef.current) {
        const dotScale = isClickedRef.current ? 0.85 : 1;
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) scale(${dotScale})`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("blur", onWindowBlur);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!isSupported) {
    return null;
  }

  return createPortal(
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{ mixBlendMode: "difference" }}
        className={`fixed top-0 left-0 -ml-1 -mt-1 pointer-events-none z-[999999] rounded-full bg-white transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        } w-2 h-2`}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{ mixBlendMode: "difference" }}
        className={`fixed top-0 left-0 -ml-4 -mt-4 pointer-events-none z-[999995] rounded-full border-[1.5px] border-white bg-transparent transition-opacity duration-200 ${
          isVisible ? "opacity-90" : "opacity-0"
        } w-8 h-8`}
      />
    </>,
    document.body,
  );
}

export default CustomCursor;
