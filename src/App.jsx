import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";

const HomePage = lazy(() =>
  import("./pages/HomePage").then((m) => ({ default: m.HomePage })),
);
const AboutPage = lazy(() =>
  import("./pages/AboutPage").then((m) => ({ default: m.AboutPage })),
);
const ServicesPage = lazy(() =>
  import("./pages/ServicesPage").then((m) => ({ default: m.ServicesPage })),
);
const CaseStudiesPage = lazy(() =>
  import("./pages/CaseStudiesPage").then((m) => ({
    default: m.CaseStudiesPage,
  })),
);
const CaseStudyDetailPage = lazy(() =>
  import("./pages/CaseStudyDetailPage").then((m) => ({
    default: m.CaseStudyDetailPage,
  })),
);
const ContactPage = lazy(() =>
  import("./pages/ContactPage").then((m) => ({ default: m.ContactPage })),
);
const ComingSoonPage = lazy(() =>
  import("./pages/ComingSoonPage").then((m) => ({ default: m.ComingSoonPage })),
);
const TermsConditionsPage = lazy(() =>
  import("./pages/TermsConditionsPage").then((m) => ({
    default: m.TermsConditionsPage,
  })),
);
const PrivacyPolicyPage = lazy(() =>
  import("./pages/PrivacyPolicyPage").then((m) => ({
    default: m.PrivacyPolicyPage,
  })),
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })),
);

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#D7CCC8]">
    <div className="w-10 h-10 border-4 border-[#8D6E63]/30 border-t-[#3E2723] rounded-full animate-spin" />
  </div>
);

export function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/service" element={<ServicesPage />} />
            <Route path="/case-study" element={<CaseStudiesPage />} />
            <Route path="/blog" element={<Navigate to="/" replace />} />
            <Route path="/blog/:slug" element={<Navigate to="/" replace />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/coming-soon" element={<ComingSoonPage />} />
            <Route
              path="/privacy-terms/terms-conditions"
              element={<TermsConditionsPage />}
            />
            <Route
              path="/privacy-terms/privacy-policy"
              element={<PrivacyPolicyPage />}
            />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
