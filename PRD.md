PRD.md - F&C Beauty Luxury Portfolio

1. Project Overview
Project Name: F&C Beauty Luxury PortfolioBusiness Context: F&C Beauty is a beauty institute in Lagny-sur-Marne owned by Flora. The business is pivoting to focus on high-end makeup services (bridal, brand events, private clients) to increase cash flow and attract a wealthier clientele.Objective: Build a 100% static Single Page Application (SPA) to serve as a luxury digital portfolio and booking funnel.Target Audience: High-net-worth individuals, brides, brand managers, and event planners in the Île-de-France region.

2. Technical Architecture
Type: Static Single Page Application (SPA)
Hosting: Static hosting (e.g., Vercel, Netlify, GitHub Pages) - No server-side rendering.
Routing: HashRouter (to ensure compatibility with static hosting without 404 errors on refresh).
Booking System: External integration via links to https://www.planity.com/fc-beauty-77400-lagny-sur-marne. No custom booking backend.

3. Sitemap & Information Architecture
The SPA will contain the following routes:

/ - Home: Hero, value proposition, featured services, top testimonials.
/services - Services: Detailed list of luxury makeup tiers and standard services.
/portfolio - Portfolio: Filterable image grid of makeup work.
/about - About: Flora's biography, expertise, and philosophy.
/contact - Contact: Address, hours, phone, and external booking CTA.

4. Functional Requirements by Page

4.1. Home Page (/)
Hero Section: Full-width high-quality image. Headline emphasizing luxury makeup. CTA button: "Book on Planity" (external link).
Value Proposition: Brief text highlighting expertise in bridal, editorial, and private events.
Featured Services: 3 Cards highlighting top-tier services (Bridal, Brand Events, Private Events).
Testimonials: Carousel or grid showing 3 top reviews (5.0/5.0 rating from Planity).

4.2. Services Page (/services)
Luxury Tiers:
Bridal Signature: "Sur devis" (Custom quote).
Brand & Editorial: "Sur devis" (Custom quote).
Private Events: "Sur devis" (Custom quote).
Standard Makeup Services (Extracted from Planity):
Maquillage Jour (45min) - 58€
Maquillage Soir / Thème (1h) - 89€
Maquillage Mariée (2h) - Sur devis
Maquillage Mariée + 1 Essai (30min) - Sur devis
Essai mariage (40min) - 90€
Semi-Permanent Makeup (Extracted from Planity):
Eye Liner (dermographie) (1h30) - 150€
Poil à Poil (dermographie) (3h) - 210€
Microshading Sourcils (2h) - 190€
Soft Shading Sourcils (3h) - 190€
CTA: Each section must have a "Prendre RDV" button linking to the Planity URL.

4.3. Portfolio Page (/portfolio)
Grid Layout: Masonry or standard grid using CSS Grid/Tailwind.
Filtering: Interactive buttons to filter images by category: All, Bridal, Editorial, Brand Events, Semi-Permanent.
Interactions: Hover effects (slight zoom, overlay text). Clicking an image opens a simple lightbox/modal.
Images: Use free stock images from Unsplash, Pexels, or Pixabay (See Section 8).
4.4. About Page (/about)
Profile Image: High-quality portrait (Use stock image placeholder).
Bio: Emphasize expertise in eye beauty (regard), semi-permanent makeup (dermographie), and Brazilian manicure.
Philosophy: "Hommes et femmes ont le droit au même traitement, c’est-à-dire au meilleur !" (Inclusive luxury).
4.5. Contact Page (/contact)
Address: 105 Av. du Général Leclerc, 77400 Lagny-sur-Marne
Phone: 06 18 33 40 83
Hours:
Monday: 09:30 - 18:00
Tuesday: 09:30 - 14:40
Wednesday: Closed
Thursday: 09:30 - 18:00
Friday: 09:30 - 18:00
Saturday: 09:30 - 17:00
Sunday: Closed
Map: Embedded Google Maps iframe (Agent must ask human for the embed code or use a generic placeholder for Lagny-sur-Marne).

5. Data Models (TypeScript Interfaces)
The agent MUST use these exact interfaces when creating the data files in /src/data/.

// /src/data/services.tsexport interface Service {  id: string;  name: string;  category: 'Luxury' | 'Makeup' | 'Semi-Permanent';  duration: string;  price: string; // e.g., "58€" or "Sur devis"  description?: string;}// /src/data/portfolio.tsexport interface PortfolioItem {  id: string;  title: string;  category: 'Bridal' | 'Editorial' | 'Brand Events' | 'Semi-Permanent';  imageUrl: string;}// /src/data/testimonials.tsexport interface Testimonial {  id: string;  author: string;  rating: number; // e.g., 5.0  text: string;  date: string; // e.g., "31/08/2026"}

6. UI/UX & Design Guidelines
(Note to Agent: The exact colors and fonts have been approved by the human — see Section 6.1. Do not deviate from them. Also adhere to the following structural rules):

Aesthetic: Minimalist, luxury, spacious (high white space).
Typography: Clean sans-serif for body, elegant serif for headings (Approved fonts: see Section 6.1).
Imagery: High-resolution, optimized for web.
Responsive: Must be mobile-first. Navigation bar collapses into a hamburger menu on mobile.
Animations: Subtle fade-ins on scroll using Framer Motion (whileInView).

6.1. Approved Design System (Human Decision — 2026-09-08)
These tokens are the definitive design system. Implement them in tailwind.config.js (theme.extend) and do not deviate.

Color Palette — "Champagne & Espresso":
- Background (ivory): #FAF7F2 — page background.
- Surface (white): #FFFFFF — navbar, cards, elevated surfaces.
- Text (espresso): #3A2D27 — headings and body text.
- Accent (champagne gold): #B59A6B — buttons, active states, borders, decorative accents.
- Secondary (taupe): #CCAD8E — dividers, hover accents, subtle decorative touches.

Contrast rules (WCAG AA, 4.5:1 minimum for text): espresso on ivory/white passes. Champagne (#B59A6B) and taupe (#CCAD8E) must NOT be used for small text on light backgrounds; the accent is expressed via borders, underlines, and background fills instead. Gold-filled buttons use espresso text (4.9:1).

Typography:
- Headings: "Cormorant Garamond" (serif), weights 500 and 600 — Google Fonts.
- Body: "Jost" (sans-serif), weights 300, 400 and 500 — Google Fonts.
- Loaded via <link> tags with preconnect in index.html, display=swap.

Navbar scope addition (human-approved): the Navbar includes a "Prendre RDV" call-to-action button linking to https://www.planity.com/fc-beauty-77400-lagny-sur-marne with target="_blank" and rel="noopener noreferrer".

Site language (human decision): French. UI labels, aria-labels, and the html lang attribute ("fr") are in French.

7. Execution Protocol for the Agent
Step 1: Scaffolding: Create Vite + React + TS project. Setup Tailwind, Framer Motion, React Router.
Step 2: Data Layer: Create the /src/data files using the interfaces above.
Step 3: Components: Create reusable UI components (Button, Card, Navbar, Footer).
Step 4: Pages: Build the 5 pages defined in Section 3 & 4.
Step 5: Review: Ensure all external links use target="_blank" rel="noopener noreferrer".

8. Asset Management & Placeholders (CRITICAL)
Official images from the client are not yet available. To build a realistic UI:

Approved Sources: You MUST use free, high-quality stock images from Unsplash, Pexels, or Pixabay.
Search Terms: Use relevant search queries like "luxury makeup", "bridal makeup", "beauty salon", "editorial makeup", "makeup products".
URL Usage: Use the direct CDN URLs for these images in the TypeScript data files. Do not download them locally unless instructed.
No Generic Placeholders: DO NOT use generic gray placeholders (e.g., via.placeholder.com). The site must look like a real luxury portfolio during development.
Human Swap: The human will later swap these stock URLs with the official F&C Beauty images. Ensure the data structure makes this easy to do.
