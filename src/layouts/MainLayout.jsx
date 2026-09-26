import React, { useEffect, useRef } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { Navbar } from "../components/organisms/Navbar";
import { Footer } from "../components/organisms/Footer";

// Helper component to reset window scroll position on page change
const ScrollToTop = ({ lenisRef }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenisRef]);

  return null;
};

export const MainLayout = () => {
  const lenisRef = useRef(null);
  const location = useLocation();
  const outlet = useOutlet();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Smooth anchor navigation handling (e.g. #pricing, #faq)
    const handleAnchorClick = (e) => {
      const link = e.target.closest("a");
      if (!link) return;
      const href = link.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const targetElement = document.querySelector(href);
        if (targetElement && lenisRef.current) {
          e.preventDefault();
          lenisRef.current.scrollTo(targetElement, {
            offset: -80,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Handle in-page hash changes
  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement && lenisRef.current) {
        setTimeout(() => {
          lenisRef.current?.scrollTo(targetElement, {
            offset: -80,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        }, 120);
      }
    }
  }, [location.hash, location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfde9] text-[#0a0a0a]">
      <ScrollToTop lenisRef={lenisRef} />
      <Navbar />
      <main className="flex-grow flex flex-col">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.38,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full flex-grow flex flex-col"
          >
            {outlet}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
