# Scalex Factor Web

React + TypeScript + Tailwind CSS rebuild of the Google Stitch "Scalex Factor Web Platform" screens.

## Run
    npm install
    npm run dev      # http://localhost:5173
    npm run build

## Routes
- `/` Homepage (Hero, Capabilities, ProblemSolution, WhyChoose, RoiMetrics, DeliveryProcess, Industries, Testimonials, Faq, FinalCta)
- `/case-studies` Portfolio with working category filter, search and sort
- `/admin` Lead management CRM screen (static mock data)

## Structure
- `src/components/layout` SiteHeader, SiteFooter, SiteLayout, AdminLayout, ScrollManager
- `src/components/home|cases|admin` one component per page section
- `src/components/ui/Icon.tsx` Material Symbols wrapper
- `src/data` site config, FAQs, case study metadata and filters
- `tailwind.config.js` design tokens taken from the Stitch export (`DESIGN.md`)
