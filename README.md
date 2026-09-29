# Renaun4 - Social Media Marketing Agency Website Replication

A 100% exact, pixel-perfect replication of [https://virulhub.framer.website/](https://virulhub.framer.website/) built with **React**, **Tailwind CSS**, and **Framer Motion** utilizing **Atomic Design & Component-Based Architecture**.

---

## 🚀 Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 (@tailwindcss/vite)
- **Animations**: Framer Motion (infinite circular rotating video orbit wheel, collapsible accordions, hover transitions)
- **Routing**: React Router v7 (Code-split with React.lazy and Suspense)
- **Icons**: Lucide React + custom Framer SVGs
- **Typography**: Google Fonts (_Lato_)
- **Theme Palette**:
  - Lime Accent: `#d2e823`
  - Lime Hover: `#dff15c`
  - Cream Background: `#fbfde9`
  - Dark Surfaces: `#0a0a0a` / `#111418`

---

## 🏛️ Atomic Design Architecture

```
src/
├── assets/                  # Brand SVG icons and media
├── components/
│   ├── atoms/              # Base UI atoms
│   │   ├── CustomCursor.jsx # Smooth interactive neon follower cursor
│   │   ├── Badge.jsx        # Status pills, categories, tags with indicator dots
│   │   ├── Button.jsx       # Primary lime, dark, white, and outline pill buttons
│   │   ├── Logo.jsx         # SVG Brand Logo with fallback
│   │   ├── StarRating.jsx   # Review rating stars
│   │   ├── Input.jsx        # Styled form input
│   │   ├── Textarea.jsx     # Styled textarea
│   │   └── Select.jsx       # Custom styled select dropdown
│   ├── molecules/          # Reusable composite UI units
│   │   ├── NavItem.jsx      # Navigation links with active router state
│   │   ├── SectionHeader.jsx# Standardized section headings with badges
│   │   ├── StatCard.jsx     # Metric counters (Engagement, ROAS, Followers)
│   │   ├── ServiceCard.jsx  # Service card with 3D illustration and hover arrow
│   │   ├── CaseStudyCard.jsx# Autoplaying looping video project card
│   │   ├── PricingCard.jsx  # Tiered pricing plan with checkmark features
│   │   ├── TeamMemberCard.jsx # Team photo with grayscale-to-color hover
│   │   ├── TestimonialCard.jsx# Client quote, rating, and avatar
│   │   ├── FaqAccordion.jsx # Collapsible accordion with smooth height transition
│   │   ├── BlogCard.jsx     # Post preview with featured image and date
│   │   ├── AwardCard.jsx    # Trophy recognition cards
│   │   └── ContactInfoCard.jsx # Call, Mail, and Location cards
│   └── organisms/          # Full page sections
│       ├── Navbar.jsx       # Floating pill header with responsive mobile drawer
│       ├── HeroVideoWheel.jsx # Signature rotating circular video orbit carousel
│       ├── HeroSection.jsx  # Main hero with H1, badges, buttons & video wheel
│       ├── PartnersTicker.jsx # "Growth Partners" infinite marquee ticker
│       ├── ServicesSection.jsx# 3-column services grid
│       ├── CaseStudiesSection.jsx # 6 video projects with category filter tabs
│       ├── PricingSection.jsx # Starter and Premium plans
│       ├── TeamSection.jsx  # 6 team member cards
│       ├── TestimonialsSection.jsx # Client reviews grid
│       ├── FaqSection.jsx   # 2-column FAQ with support callout box
│       ├── CtaSection.jsx   # "Ready to grow your brand?" neon CTA banner
│       └── Footer.jsx       # 5-column footer with social links & sitemap
├── layouts/
│   └── MainLayout.jsx       # Master layout with Navbar, Footer & ScrollToTop
├── pages/
│   ├── HomePage.jsx         # Route: /
│   ├── AboutPage.jsx        # Route: /about-us
│   ├── ServicesPage.jsx     # Route: /service
│   ├── CaseStudiesPage.jsx  # Route: /case-study
│   ├── CaseStudyDetailPage.jsx # Route: /case-study/:id (All 6 projects)
│   ├── BlogPage.jsx         # Route: /blog
│   ├── BlogDetailPage.jsx   # Route: /blog/:slug (All 6 articles)
│   ├── ContactPage.jsx      # Route: /contact (With interactive form)
│   ├── ComingSoonPage.jsx   # Route: /coming-soon
│   ├── TermsConditionsPage.jsx # Route: /privacy-terms/terms-conditions
│   ├── PrivacyPolicyPage.jsx   # Route: /privacy-terms/privacy-policy
│   └── NotFoundPage.jsx     # Route: /404 and wildcard *
├── data/                    # Clean modular data sources
│   ├── siteData.js
│   ├── heroVideosData.js
│   ├── servicesData.js
│   ├── caseStudiesData.js
│   ├── pricingData.js
│   ├── teamData.js
│   ├── testimonialsData.js
│   ├── faqData.js
│   ├── blogData.js
│   └── partnersData.js
├── utils/
│   └── cn.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🏃 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```
