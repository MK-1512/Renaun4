import React from "react";
import { SectionHeader } from "../components/molecules/SectionHeader";
import { FaqSection } from "../components/organisms/FaqSection";
import { PhoneCall, MessageCircle, ArrowUpRight } from "lucide-react";

const WhatsAppIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.031 2C6.496 2 2 6.496 2 12.031c0 1.768.46 3.493 1.332 5.006L2 22l5.105-1.314c1.464.81 3.125 1.258 4.926 1.258 5.535 0 10.031-4.496 10.031-10.031C22.062 6.496 17.566 2 12.031 2zm5.882 14.237c-.244.686-1.42 1.309-1.969 1.393-.513.078-1.18.11-3.376-.8-2.809-1.164-4.607-4.01-4.747-4.196-.139-.187-1.134-1.51-1.134-2.879 0-1.37.717-2.045.972-2.325.255-.28.558-.35.744-.35.187 0 .373.002.535.01.173.008.406-.065.635.485.233.56.791 1.932.861 2.073.07.14.116.303.023.49-.093.186-.14.303-.279.466-.14.163-.294.364-.42.49-.14.14-.286.293-.123.573.163.28.723 1.192 1.55 1.928 1.064.948 1.961 1.242 2.24 1.382.28.14.443.117.606-.07.163-.186.7-.815.886-1.094.186-.28.373-.233.629-.14.256.093 1.63.769 1.91.908.28.14.466.21.535.326.07.117.07.677-.174 1.363z" />
  </svg>
);

export const ContactPage = () => {
  const whatsappNumber = "919908680481";
  const displayPhone = "+91 99086 80481";
  const whatsappCallUrl =
    "https://call.whatsapp.com/voice/bgl6yZftAJDs7B4Vdko6i9";
  const whatsappChatUrl = `https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services`;

  return (
    <div className="w-full flex flex-col bg-[#08090a]">
      <section className="relative w-full pt-36 sm:pt-44 md:pt-48 pb-12 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <SectionHeader
            badge="Connect With Us"
            title="Let’s Talk Growth"
            subtitle="Connect directly with our team on WhatsApp for voice calls and instant chats."
            titleTag="h1"
            className="mb-6"
          />
        </div>
      </section>

      <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-full rounded-[32px] sm:rounded-[36px] bg-[#0e1014] border border-white/10 p-8 sm:p-12 md:p-14 shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#25D366]/10 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#d2e823]/10 rounded-full blur-3xl" />

            <div className="relative z-10 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs sm:text-sm font-semibold mb-6 shadow-[0_0_20px_rgba(37,211,102,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Direct Line</span>
            </div>

            <span className="relative z-10 text-xs sm:text-sm font-mono tracking-widest uppercase text-neutral-400 mb-2">
              WhatsApp Contact
            </span>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white hover:text-[#d2e823] tracking-tight leading-tight transition-colors duration-300 drop-shadow-[0_0_25px_rgba(210,232,35,0.15)] my-2 inline-flex items-center gap-3 group"
            >
              <span>{displayPhone}</span>
              <ArrowUpRight className="w-7 h-7 sm:w-9 sm:h-9 text-[#d2e823] opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <p className="relative z-10 text-sm sm:text-base text-neutral-400 max-w-lg mt-3 mb-10 leading-relaxed font-body">
              Choose your preferred way to connect with our team — start a
              direct voice call or chat with our strategists.
            </p>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 w-full max-w-2xl">
              <a
                href={whatsappCallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-between p-7 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#14171d] border border-white/10 hover:border-[#25D366]/60 hover:shadow-[0_0_35px_rgba(37,211,102,0.25)] transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#25D366] group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(37,211,102,0.2)]">
                  <PhoneCall className="w-6 h-6 stroke-[2.2]" />
                </div>

                <div className="flex flex-col gap-1 mb-6">
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-[#25D366] transition-colors">
                    Call via WhatsApp
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-body">
                    Join live WhatsApp voice call room directly
                  </p>
                </div>

                <div className="w-full py-3.5 px-6 rounded-full bg-[#25D366] text-black font-heading font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-[#2fe671] shadow-[0_0_20px_rgba(37,211,102,0.35)] transition-all">
                  <span>Start Call</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </a>

              <a
                href={whatsappChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-between p-7 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#14171d] border border-white/10 hover:border-[#d2e823]/60 hover:shadow-[0_0_35px_rgba(210,232,35,0.25)] transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#d2e823]/15 border border-[#d2e823]/30 text-[#d2e823] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#d2e823] group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(210,232,35,0.2)]">
                  <MessageCircle className="w-6 h-6 stroke-[2.2]" />
                </div>

                <div className="flex flex-col gap-1 mb-6">
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-[#d2e823] transition-colors">
                    Chat via WhatsApp
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-body">
                    Chat with our growth specialists in real-time
                  </p>
                </div>

                <div className="w-full py-3.5 px-6 rounded-full bg-[#d2e823] text-black font-heading font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-[#dff15c] shadow-[0_0_20px_rgba(210,232,35,0.35)] transition-all">
                  <span>Message Now</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <FaqSection />
    </div>
  );
};

export default ContactPage;
