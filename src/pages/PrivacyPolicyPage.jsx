import React from "react";
import { Badge } from "../components/atoms/Badge";

export const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      items: [
        "Name and contact details provided during inquiry or onboarding",
        "Business information including brand guidelines, social accounts, and goals",
        "Communication data sent via contact forms, emails, and messages",
      ],
    },
    {
      title: "2. How We Use Information",
      items: [
        "To deliver, execute, and optimize social media marketing services",
        "To communicate directly regarding campaign approvals and weekly reporting",
        "To analyze website performance and enhance visitor engagement experience",
      ],
    },
    {
      title: "3. Data Sharing",
      items: [
        "We do not sell, rent, or trade your personal or business data.",
        "We may share necessary data with trusted tools (analytics, schedulers) required to deliver campaign results.",
      ],
    },
    {
      title: "4. Cookies & Tracking",
      items: [
        "We use functional cookies to optimize browsing speed and analyze website traffic patterns.",
        "You can manage cookie preferences directly through your browser settings.",
      ],
    },
    {
      title: "5. Data Security",
      items: [
        "We implement industry-standard encryption and security protocols to safeguard your information from unauthorized access.",
      ],
    },
    {
      title: "6. Your Rights",
      items: [
        "You retain the right to access your stored data at any point.",
        "You can request immediate correction, export, or complete deletion of your records.",
      ],
    },
    {
      title: "7. Third-Party Services",
      items: [
        "We interface with third-party social platforms (Meta, TikTok, Google Analytics). Each platform adheres to its own distinct privacy policies.",
      ],
    },
    {
      title: "8. Updates to Policy",
      items: [
        "We may update this policy periodically to comply with privacy regulations. Updates are published directly on this page.",
      ],
    },
    {
      title: "9. Contact Information",
      items: [
        "If you have any questions or data requests, please contact our data privacy officer at privacy@Renaun4.com.",
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col bg-[#08090a] pt-36 sm:pt-44 md:pt-48 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-4 text-center items-center pb-8 border-b border-white/10">
          <Badge variant="lime" hasDot>
            Privacy
          </Badge>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-base text-neutral-400 max-w-xl">
            How we collect, use, and protect your information.
          </p>
          <span className="text-xs font-mono text-neutral-400">
            Last Updated: March 2026 • Your privacy matters to us
          </span>
        </div>

        <div className="flex flex-col gap-8">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#0e1014] border border-white/10 hover:border-[#d2e823]/30 transition-colors shadow-sm flex flex-col gap-4"
            >
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-white">
                {sec.title}
              </h2>
              <ul className="flex flex-col gap-2.5">
                {sec.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm sm:text-base text-neutral-300 leading-relaxed font-body"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d2e823] shadow-[0_0_6px_#d2e823] mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
