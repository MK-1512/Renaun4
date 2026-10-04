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
      title: "9. Contact Us",
      items: [
        "If you have inquiries about how your information is handled, reach us at privacy@Renaun4.com.",
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col bg-[#D7CCC8] pt-36 sm:pt-44 md:pt-48 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-4 text-center items-center pb-8 border-b border-[#8D6E63]/30">
          <Badge variant="cream" hasDot>
            Legal & Privacy
          </Badge>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-[#3E2723] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-base text-[#4E342E] max-w-xl font-body">
            How we collect, manage, and protect your personal and business data.
          </p>
          <span className="text-xs font-mono text-[#4E342E]">
            Last Updated: March 2026 • Effective Immediately
          </span>
        </div>

        <div className="flex flex-col gap-8">
          {sections.map((sec, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-9 rounded-3xl bg-[#BCAAA4] border border-[#8D6E63] hover:border-[#4E342E] transition-colors shadow-md flex flex-col gap-4"
            >
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#3E2723]">
                {sec.title}
              </h2>
              <ul className="flex flex-col gap-2.5">
                {sec.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-start gap-3 text-sm sm:text-base text-[#4E342E] leading-relaxed font-body"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3E2723] mt-2.5 flex-shrink-0" />
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

export default PrivacyPolicyPage;
