import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { siteData } from "../../data/siteData";
import logoImg from "../../assets/logo.png";

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
    <footer className="relative w-full bg-[#08090a] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 items-stretch">
        <div className="bg-[#0e1014] rounded-[32px] p-8 sm:p-10 flex flex-col justify-between lg:w-[38%] border border-white/10 shadow-xl">
          <div>
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-full bg-[#d2e823]/10 border border-[#d2e823]/30 flex items-center justify-center shadow-[0_0_15px_rgba(210,232,35,0.2)]">
                <div className="w-6 h-6 rounded-full bg-[#d2e823] flex items-center justify-center">
                  <span className="text-black text-xs font-bold">✦</span>
                </div>
              </div>
              <span className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight">
                <img
                  src={logoImg}
                  alt="Renaun4"
                  onError={(e) => {
                    e.target.src = "/logo.png";
                  }}
                />
              </span>
            </Link>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-body mt-5 mb-10 max-w-sm">
              We combine content, management, & paid media to help brands grow,
              engage, & convert — on the platforms that matter most.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-xl text-white mb-4">
              Follow Us
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 border border-white/10 text-white font-semibold text-sm py-3.5 px-4 rounded-full flex items-center justify-center gap-2.5 shadow-sm hover:bg-[#d2e823] hover:text-black hover:border-[#d2e823] transition-all"
              >
                <FacebookIcon className="w-4 h-4 fill-current" />
                <span>Facebook</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 border border-white/10 text-white font-semibold text-sm py-3.5 px-4 rounded-full flex items-center justify-center gap-2.5 shadow-sm hover:bg-[#d2e823] hover:text-black hover:border-[#d2e823] transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram</span>
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 border border-white/10 text-white font-semibold text-sm py-3.5 px-4 rounded-full flex items-center justify-center gap-2.5 shadow-sm hover:bg-[#d2e823] hover:text-black hover:border-[#d2e823] transition-all"
              >
                <TiktokIcon className="w-4 h-4 fill-current" />
                <span>Tiktok</span>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="bg-white/5 border border-white/10 text-white font-semibold text-sm py-3.5 px-4 rounded-full flex items-center justify-center gap-2.5 shadow-sm hover:bg-[#d2e823] hover:text-black hover:border-[#d2e823] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Community</span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#0e1014] rounded-[32px] p-8 sm:p-12 flex flex-col justify-between lg:w-[62%] text-white border border-white/10 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10">
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
              </ul>
            </div>

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

            <div className="flex flex-col">
              <span className="font-heading font-bold text-base text-white mb-4 block">
                Get in touch
              </span>
              <ul className="flex flex-col gap-4 text-sm text-neutral-300">
                <li>
                  <a
                    href="mailto:Renaun4@email.com"
                    className="flex items-center gap-3 group hover:text-white transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-neutral-800 text-neutral-300 flex items-center justify-center shrink-0 group-hover:bg-[#d2e823] group-hover:text-black transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span className="break-all">Renaun4@email.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/919908680481"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group hover:text-white transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-neutral-800 text-neutral-300 flex items-center justify-center shrink-0 group-hover:bg-[#d2e823] group-hover:text-black transition-colors">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>+91 99086 80481</span>
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

          <div className="pt-8 mt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500 font-mono">
            <p>© {new Date().getFullYear()} Renaun4. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
