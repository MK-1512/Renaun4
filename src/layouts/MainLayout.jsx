import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/organisms/Navbar";
import { Footer } from "../components/organisms/Footer";

// Helper component to reset window scroll position on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#fbfde9] text-[#0a0a0a]">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
