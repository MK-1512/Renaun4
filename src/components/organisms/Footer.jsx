import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { siteData } from "../../data/siteData";

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TiktokIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-6.62 6.3 6.34 6.34 0 0 0 10.86 4.48c1.3-1.3 2.04-3.08 2.04-4.94V8.45a8.28 8.28 0 0 0 4.97 1.64V6.69h-2z" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="relative w-full bg-[#fbfde9] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 items-stretch">
        {/* ================= LEFT CARD (LIME) ================= */}
        <div className="bg-[#d2e823] rounded-[32px] p-8 sm:p-10 flex flex-col justify-between lg:w-[38%] shadow-sm">
          <div>
            {/* Logo Emblem & Brand Name */}
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center shadow-sm">
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✦</span>
                </div>
              </div>
              <span className="font-heading font-bold text-2xl sm:text-3xl text-black tracking-tight">
                {siteData.name}
              </span>
            </Link>

            {/* Tagline */}
            <p className="text-sm sm:text-base text-neutral-900 leading-relaxed font-body mt-5 mb-10 max-w-sm">
              We combine content, management, & paid media to help brands grow,
              engage, & convert — on the platforms that matter most.
            </p>
          </div>

          {/* Follow Us Grid */}
          <div>
            <h4 className="font-heading font-bold text-xl text-black mb-4">
              Follow Us
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-black font-semibold text-sm py-3.5 px-4 rounded-full flex items-center justify-center gap-2.5 shadow-sm hover:bg-neutral-50 transition-colors"
              >
                <FacebookIcon className="w-4 h-4 fill-black text-black" />
                <span>Facebook</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-black font-semibold text-sm py-3.5 px-4 rounded-full flex items-center justify-center gap-2.5 shadow-sm hover:bg-neutral-50 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-black" />
                <span>Instagram</span>
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-black font-semibold text-sm py-3.5 px-4 rounded-full flex items-center justify-center gap-2.5 shadow-sm hover:bg-neutral-50 transition-colors"
              >
                <TiktokIcon className="w-4 h-4 fill-current text-black" />
                <span>Tiktok</span>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white text-black font-semibold text-sm py-3.5 px-4 rounded-full flex items-center justify-center gap-2.5 shadow-sm hover:bg-neutral-50 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-black" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* ================= RIGHT CARD (BLACK) ================= */}
        <div className="bg-black rounded-[32px] p-8 sm:p-12 flex flex-col justify-between lg:w-[62%] text-white shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
            {/* Column 1: Main & CMS */}
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base text-white mb-4 block">
                Main
              </span>
              <ul className="flex flex-col gap-3 text-sm text-neutral-400 mb-8">
                <li>
                  <Link
                    to="/about-us"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service"
                    className="hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/case-study"
                    className="hover:text-white transition-colors"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>

              <span className="font-heading font-bold text-base text-white mb-4 block">
                CMS
              </span>
              <ul className="flex flex-col gap-3 text-sm text-neutral-400">
                <li>
                  <Link
                    to="/case-study/radiance"
                    className="hover:text-white transition-colors"
                  >
                    Case Studies Details
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog/how-to-create-content-that-actually-converts"
                    className="hover:text-white transition-colors"
                  >
                    Blog Details
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Other Page */}
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base text-white mb-4 block">
                Other Page
              </span>
              <ul className="flex flex-col gap-3 text-sm text-neutral-400">
                <li>
                  <Link
                    to="/privacy-terms/terms-conditions"
                    className="hover:text-white transition-colors"
                  >
                    Terms & Condition
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-terms/privacy-policy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy & Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/404"
                    className="hover:text-white transition-colors"
                  >
                    404
                  </Link>
                </li>
                <li>
                  <Link
                    to="/coming-soon"
                    className="hover:text-white transition-colors"
                  >
                    Coming Soon
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Get in touch */}
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base text-white mb-4 block">
                Get in touch
              </span>
              <ul className="flex flex-col gap-4 text-sm text-neutral-300">
                <li>
                  <a
                    href="mailto:viralize@email.com"
                    className="flex items-center gap-3 group hover:text-white transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-neutral-800 text-neutral-300 flex items-center justify-center shrink-0 group-hover:bg-[#d2e823] group-hover:text-black transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="break-all">viralize@email.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+123456789"
                    className="flex items-center gap-3 group hover:text-white transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-neutral-800 text-neutral-300 flex items-center justify-center shrink-0 group-hover:bg-[#d2e823] group-hover:text-black transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>+123 456 789</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3 text-neutral-300">
                    <div className="w-9 h-9 rounded-full bg-neutral-800 text-neutral-300 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span>London, UK</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright Row inside Black Card */}
          <div className="pt-8 mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500 font-mono">
            <p>© {new Date().getFullYear()} Viralize. All rights reserved.</p>
            <p>Replicated in React & Tailwind</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
