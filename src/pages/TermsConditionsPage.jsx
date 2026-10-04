import React from "react";
import { Badge } from "../components/atoms/Badge";

export const TermsConditionsPage = () => {
  const sections = [
    {
      id: "1-introduction",
      title: "1. Introduction",
      content:
        "By accessing or using our services, you agree to these terms. These terms outline how we work and what you can expect from us.",
    },
    {
      id: "2-services-overview",
      title: "2. Services Overview",
      content:
        "We provide social media services including content creation, management, and paid advertising. Service scope may vary based on your selected plan or custom signed agreement.",
    },
    {
      id: "3-user-responsibilities",
      title: "3. User Responsibilities",
      content:
        "You agree to provide accurate information, respond in a timely manner to review requests, and approve content and creative assets when required for execution.",
    },
    {
      id: "4-payments-billing",
      title: "4. Payments & Billing",
      content:
        "Payments are billed monthly in advance unless stated otherwise. All payments must be made on time. Late payments may result in paused services or postponed campaign launches.",
    },
    {
      id: "5-intellectual-property",
      title: "5. Intellectual Property",
      content:
        "All final delivered media content created remains the exclusive property of the client after receipt of full payment. We reserve the right to showcase completed work in our agency portfolio and case studies unless agreed otherwise in writing.",
    },
    {
      id: "6-results-disclaimer",
      title: "6. Results Disclaimer",
      content:
        "We aim to deliver strong results through proven strategies, but we do not guarantee specific monetary outcomes or algorithmic virality. Performance may vary based on industry, ad budget, product market fit, and platform policy conditions.",
    },
    {
      id: "7-termination",
      title: "7. Termination",
      content:
        "You may cancel services at any time with 30 days written notice unless stated in a fixed retainer contract. We reserve the right to terminate services immediately if ethical or communication terms are violated.",
    },
    {
      id: "8-limitation-of-liability",
      title: "8. Limitation of Liability",
      content:
        "We are not liable for third-party platform algorithm updates, unexpected account suspensions by Meta/TikTok, or external market disruptions affecting conversion rates.",
    },
    {
      id: "9-changes-to-terms",
      title: "9. Changes to Terms",
      content:
        "We may update these terms periodically to reflect industry shifts and service evolutions. Changes will be reflected directly on this page.",
    },
    {
      id: "10-contact-information",
      title: "10. Contact Information",
      content:
        "If you have any questions or require clarification regarding these terms, feel free to reach out to legal@Renaun4.com or via our contact page.",
    },
  ];

  return (
    <div className="w-full flex flex-col bg-[#D7CCC8] pt-36 sm:pt-44 md:pt-48 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-4 text-center items-center pb-8 border-b border-[#8D6E63]/30">
          <Badge variant="cream" hasDot>
            Terms of Service
          </Badge>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-[#3E2723] tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-base text-[#4E342E] max-w-xl font-body">
            Clear guidelines for using our services and working together.
          </p>
          <span className="text-xs font-mono text-[#4E342E]">
            Last Updated: March 2026 • Please read carefully before using our
            services
          </span>
        </div>

        <div className="flex flex-col gap-8">
          {sections.map((sec) => (
            <div
              key={sec.id}
              className="p-8 sm:p-9 rounded-3xl bg-[#BCAAA4] border border-[#8D6E63] hover:border-[#4E342E] transition-colors shadow-md flex flex-col gap-3"
            >
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#3E2723]">
                {sec.title}
              </h2>
              <p className="text-sm sm:text-base text-[#4E342E] leading-relaxed font-body">
                {sec.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;
