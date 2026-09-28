import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Logo } from "../atoms/Logo";
import { Button } from "../atoms/Button";
import { NavItem } from "../molecules/NavItem";
import { siteData } from "../../data/siteData";
import { cn } from "../../utils/cn";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className=" top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pt-5 pointer-events-none">
      <div
        className={cn(
          "pointer-events-auto w-full max-w-[880px] rounded-full transition-all duration-300",
          "bg-[#0a0b0e]/85 backdrop-blur-xl border border-white/10 px-4 sm:px-6 py-2.5 sm:py-3 shadow-2xl",
          scrolled &&
            "shadow-[0_10px_35px_rgba(0,0,0,0.8)] border-white/15 border-b-[#d2e823]/30",
        )}
      >
        <div className="flex items-center justify-between w-full">
          <Logo />

          <nav className="hidden md:flex items-center gap-1">
            {siteData.navLinks.map((link) => (
              <NavItem key={link.href} to={link.href}>
                {link.label}
              </NavItem>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              to={siteData.ctaButton.href}
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex font-bold text-xs py-2.5 px-5 bg-[#d2e823] text-black hover:bg-[#dff15c] shadow-[0_2px_12px_rgba(210,232,35,0.3)]"
            >
              {siteData.ctaButton.label}
            </Button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-2 pb-2">
            {siteData.navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                  location.pathname === link.href
                    ? "bg-[#d2e823]/10 text-[#d2e823]"
                    : "text-neutral-300 hover:text-white hover:bg-white/5",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button
                to={siteData.ctaButton.href}
                variant="primary"
                size="md"
                className="w-full text-center font-bold bg-[#d2e823] text-black"
              >
                {siteData.ctaButton.label}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
