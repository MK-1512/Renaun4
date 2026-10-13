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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pointer-events-none">
      <div
        className={cn(
          "pointer-events-auto w-full transition-all duration-300",
          "bg-[#D7CCC8] border-b border-[#8D6E63]/40 px-4 sm:px-8 py-3.5 sm:py-4 shadow-sm",
          scrolled && "shadow-md bg-[#D7CCC8]/95 backdrop-blur-md",
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
          <Logo />

          <nav className="hidden md:flex items-center gap-2">
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
              className="hidden sm:inline-flex font-bold text-xs py-2.5 px-6 bg-[#3E2723] text-[#D7CCC8] hover:bg-[#4E342E] shadow-sm rounded-lg"
            >
              {siteData.ctaButton.label}
            </Button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-9 h-9 rounded-lg bg-[#3E2723]/10 flex items-center justify-center text-[#3E2723] hover:bg-[#3E2723]/20 transition-colors cursor-pointer"
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
          <div className="md:hidden mt-4 pt-4 border-t border-[#8D6E63]/30 flex flex-col gap-2 pb-2 max-w-7xl mx-auto">
            {siteData.navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === link.href
                    ? "bg-[#3E2723]/15 text-[#3E2723] font-bold"
                    : "text-[#4E342E] hover:text-[#3E2723] hover:bg-[#3E2723]/5",
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
                className="w-full text-center font-bold bg-[#3E2723] text-[#D7CCC8] rounded-lg"
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

export default Navbar;
