import React, { useState } from "react";
import { SectionHeader } from "../components/molecules/SectionHeader";
import { ContactInfoCard } from "../components/molecules/ContactInfoCard";
import { FaqSection } from "../components/organisms/FaqSection";
import { Input } from "../components/atoms/Input";
import { Textarea } from "../components/atoms/Textarea";
import { Select } from "../components/atoms/Select";
import { Button } from "../components/atoms/Button";
import { siteData } from "../data/siteData";
import { CheckCircle2 } from "lucide-react";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "$3,000 - $5,000 / month",
    services: {
      contentCreation: true,
      socialManagement: false,
      paidAds: false,
    },
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const toggleService = (key) => {
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [key]: !prev.services[key],
      },
    }));
  };

  return (
    <div className="w-full flex flex-col bg-[#08090a]">
      {/* Contact Banner */}
      <section className="relative w-full pt-36 sm:pt-44 md:pt-48 pb-12 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <SectionHeader
            badge="Contact Us"
            title="Let’s Talk Growth"
            subtitle="Tell us about your brand — we’ll show you how to grow."
            titleTag="h1"
            className="mb-6"
          />
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column (7 Cols) */}
            <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-[#0e1014] text-white border border-white/10 shadow-2xl">
              <div className="flex flex-col gap-2 mb-8">
                <span className="text-xs font-mono uppercase tracking-wider text-[#d2e823]">
                  Form
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                  Start the Conversation
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400">
                  We focus on what matters — engagement, leads, and revenue.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center gap-4 bg-white/5 rounded-2xl p-6 border border-[#d2e823]/30">
                  <div className="w-14 h-14 rounded-full bg-[#d2e823]/20 text-[#d2e823] flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-bold text-2xl text-white">
                    Thank You!
                  </h4>
                  <p className="text-sm text-neutral-300 max-w-sm">
                    We’ve received your message. Our growth strategists will
                    review your brand within 24 hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="white"
                    size="sm"
                    className="mt-4"
                  >
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Full Name */}
                  <Input
                    label="Full Name"
                    id="name"
                    required
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />

                  {/* Email */}
                  <Input
                    label="Email Address"
                    id="email"
                    type="email"
                    required
                    placeholder="alex@brand.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />

                  {/* Social Budget */}
                  <Select
                    label="Social Budget"
                    id="budget"
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    options={[
                      { value: "< $2,000 / month", label: "< $2,000 / month" },
                      {
                        value: "$2,000 - $5,000 / month",
                        label: "$2,000 - $5,000 / month",
                      },
                      {
                        value: "$5,000 - $10,000 / month",
                        label: "$5,000 - $10,000 / month",
                      },
                      { value: "$10,000+ / month", label: "$10,000+ / month" },
                    ]}
                  />

                  {/* Service Checkboxes */}
                  <div className="flex flex-col gap-2.5">
                    <label className="text-xs font-mono font-medium text-neutral-400">
                      What services are you interested in?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { key: "contentCreation", label: "Content Creation" },
                        { key: "socialManagement", label: "Social Management" },
                        { key: "paidAds", label: "Paid Ads" },
                      ].map((srv) => (
                        <button
                          type="button"
                          key={srv.key}
                          onClick={() => toggleService(srv.key)}
                          className={`p-3.5 rounded-xl border text-xs font-mono font-medium text-left transition-all duration-200 cursor-pointer flex items-center justify-between ${
                            formData.services[srv.key]
                              ? "bg-[#d2e823] border-[#d2e823] text-black font-semibold"
                              : "bg-white/5 border-white/10 text-neutral-300 hover:border-white/20"
                          }`}
                        >
                          <span>{srv.label}</span>
                          {formData.services[srv.key] && <span>✓</span>}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <Textarea
                    label="Message"
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell us about your brand goals, target audience, and current challenges..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />

                  {/* Submit */}
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    showArrow
                    className="w-full text-center mt-2 font-bold"
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Info Cards Column (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="flex flex-col gap-2 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#d2e823]">
                  Help
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white">
                  Reach out to us, we’re ready to help
                </h3>
              </div>

              <ContactInfoCard
                type="phone"
                title="Call Us"
                value="+0 000 000 000 000"
                description="We’re here to listen, help, and make things happen."
                href={`tel:${siteData.contact.phone}`}
              />

              <ContactInfoCard
                type="mail"
                title="Mail Us"
                value={siteData.contact.email}
                description="Drop us an email and we will reply within 24 hours."
                href={`mailto:${siteData.contact.email}`}
              />

              <ContactInfoCard
                type="location"
                title="Meet Us"
                value={siteData.contact.location}
                description="Visit our creative growth studios in the city center."
                href={siteData.contact.addressMapUrl}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqSection />
    </div>
  );
};
