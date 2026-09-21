PRD.md - Flora Alpande Luxury Portfolio

Version: 1.0 (as built, production state 0f44306, 2026-09-21). This document describes the product as shipped. It supersedes the initial PRD, which specified a Planity booking funnel and a Services page that have since been removed.

1. Project Overview
Project Name: Flora Alpande Luxury Portfolio
Business Context: Flora Alpande is a beauty institute in Lagny-sur-Marne owned by Flora. The business pivoted to focus on high-end makeup services for weddings, media work and private clients.
Objective: A 100% static Single Page Application (SPA) serving as a luxury digital portfolio, whose single conversion point is a quote request ("demande de devis") form that opens the visitor's mail application.
Offer: Four signature services, all "sur devis": MakeUp Mariage, MakeUp Médias, MakeUp Artist, MakeUp Studio.
Target Audience: High-net-worth individuals, brides, brand managers, and event planners in the Île-de-France region.
Language: French throughout (UI labels, aria-labels, html lang="fr").

2. Technical Architecture
Type: Static Single Page Application (SPA), no backend, no database.
Hosting: Production domain is https://floraalpande.com (the host must serve index.html with HTTP 200 as SPA fallback for unknown paths; nginx.conf does this for the Docker deployment). A Dockerfile (Node 22 build, nginx serve) and a Makefile wrap local testing (make help lists targets).
Routing: BrowserRouter (clean, indexable URLs); unknown routes redirect to /; hosts must serve index.html as SPA fallback (nginx.conf for the Docker deployment).
Conversion point: The contact form composes a mailto: link to contact@fcbeauty.fr with encodeURIComponent-encoded subject ("Demande de devis" + selected service) and body (name, phone, message). No data transits through the site.
Tooling: npm run dev / lint (oxlint) / build (tsc -b && vite build) / preview.
AI opt-out: meta robots "noai, noimageai" in index.html plus robots.txt disallowing GPTBot, Google-Extended and CCBot.
Browser tab: title "Beauty - Flora Alpande Makeup Artist"; favicon is an "FA" monogram SVG (champagne on espresso) at public/favicon.svg, to be replaced by a real logo when the owner provides one.

3. Sitemap & Information Architecture
/ - Home: hero, expertise text, four signature service cards, founder section, bridal section, testimonials.
/portfolio - Portfolio: filterable grid with lightbox.
/about - About: Flora's portrait, biography and philosophy.
/contact - Contact: quote request form only.
/mentions-legales - Legal notice.
* - Catch-all redirect to Home.
(The /services page was removed; Planity links no longer exist anywhere.)

4. Functional Requirements by Page

4.1. Home Page (/)
Section order and background rhythm (ivory is the page default; champagne is accent-only and never a section background):
- Hero (image background): Unsplash stock image (official replacement pending), headline "L'Art de la Beauté & du Maquillage", "Prendre RDV" button navigating to /contact.
- Une expertise dédiée à votre beauté (ivory): introductory paragraph.
- Prestations signature (white band): four cards in one row on desktop (sm:grid-cols-2 lg:grid-cols-4). Each card has an ivory background, the service name, a 4:5 photo below the name, and a centered "Prendre RDV" button to /contact. Photo mapping lives in services.ts (imageUrl/imageAlt): Mariage -> bridal-3, Médias -> brand-events-1, Artist -> brand-events-3, Studio -> brand-events-4.
- La fondatrice (ivory): label, portrait of Flora, biography paragraph, philosophy quote, link "Découvrir son parcours" to /about.
- Prestation signature (white band): bridal image (bridal-2.jpg), copy about wedding-day makeup and the prior trial, "Prendre RDV" button to /contact.
- Témoignages (ivory): three review cards with star rating, rating value, quote, author and date.

4.2. Portfolio Page (/portfolio)
- Eight official photos (4 Bridal, 4 Brand Events) in a responsive grid (grid-cols-1 md:grid-cols-3), aspect 4:5, hover opacity effect, loading="lazy".
- Filter buttons derive from the data (only categories with items are shown): Tout, Mariée, Événements de marque.
- Clicking an image opens a lightbox; Escape or backdrop click closes it.
- Secondary "Voir plus sur Instagram" button linking to https://www.instagram.com/fcbeauty.77/ (target="_blank", rel="noopener noreferrer").

4.3. About Page (/about)
- Official portrait (/images/flora-alpande.jpg).
- Label "Maquilleuse professionnelle", heading "Flora", two biography paragraphs (eye beauty signature, semi-permanent makeup and Brazilian manicure).
- Philosophy quote: "Hommes et femmes ont le droit au même traitement, c'est-à-dire au meilleur !"

4.4. Contact Page (/contact)
The page contains the quote form and nothing else (address, phone, hours and the Google Maps embed were removed).
- Fields: Nom, Téléphone, Prestation souhaitée (select: MakeUp Mariage, MakeUp Médias, MakeUp Artist, MakeUp Studio, Autre demande), Votre projet.
- On submit the visitor's mail application opens with a pre-filled message to contact@fcbeauty.fr; a helper line under the submit button explains this.
- Address and phone remain available in the footer; the phone also appears on the legal notice page.

4.5. Mentions Legales Page (/mentions-legales)
Editor identity, contact, intellectual property, photography credits (official photos plus stock images), personal data note (no data collected, no cookies, the form opens the visitor's own mail application).

5. Data Models (TypeScript interfaces, as implemented in /src/data/)
// services.tsexport interface Service {  id: string;  name: string;  category: 'Luxury' | 'Makeup' | 'Semi-Permanent';  duration: string;  price: string;  description?: string;  imageUrl?: string;  imageAlt?: string;}// portfolio.tsexport interface PortfolioItem {  id: string;  title: string;  category: 'Bridal' | 'Editorial' | 'Brand Events' | 'Semi-Permanent';  imageUrl: string;}// testimonials.tsexport interface Testimonial {  id: string;  author: string;  rating: number;  text: string;  date: string;}
Notes:
- The four signature services are the 'Luxury' entries and are the site's offer; the 'Makeup' and 'Semi-Permanent' entries are legacy from the removed Services page, kept for reference, and rendered nowhere.
- Home signature cards read imageUrl/imageAlt from services.ts; swapping a card photo is a one-line data edit.

6. UI/UX & Design Guidelines
6.1. Approved Design System (unchanged, human decision 2026-09-08)
Color Palette - "Champagne & Espresso":
- Background (ivory): #FAF7F2 - page background.
- Surface (white): #FFFFFF - navbar, cards, alternating section bands.
- Text (espresso): #3A2D27 - headings and body text.
- Accent (champagne gold): #B59A6B - buttons, active states, underlines, favicon monogram.
- Secondary (taupe): #CCAD8E - dividers, borders, hover accents.
Section rhythm: sections alternate ivory (page default) and white bands. On a white band, cards use the ivory background to stay distinct (the Card component's background prop). Champagne must never be used as a section background.
Contrast rules (WCAG AA, 4.5:1 minimum): espresso on ivory/white passes; champagne/taupe are not used for small text; gold-filled buttons use espresso text.
Typography:
- Headings: "Cormorant Garamond" (serif), weights 500 and 600.
- Body: "Jost" (sans-serif), weights 300, 400 and 500.
- Loaded via Google Fonts link tags with preconnect, display=swap.
6.2. Components
- Navbar: brand "Flora Alpande"; links Accueil, Portfolio, À propos, Contact; "Prendre RDV" CTA to /contact; sticky white bar; hamburger menu on mobile.
- Footer: four columns on one row at desktop (Adresse, Téléphone, Contact -> Demande de devis, Instagram), then copyright line with Mentions légales link.
- Button: props label, href (external anchor, target="_blank" rel="noopener noreferrer"), to (internal react-router Link), variant ('primary' | 'secondary'), type ('submit').
- Card: props children and background ('white' default | 'ivory').
- FadeIn: Framer Motion wrapper, fade-in on scroll (whileInView, once).
6.3. Accessibility & Performance
Meaningful alt attributes on all images; visible focus rings (focus-visible ring in champagne); loading="lazy" below the fold; no background videos; no dangerouslySetInnerHTML anywhere.

7. Delivery Workflow
Never commit directly to main. Every change: feature branch -> build and lint pass -> push -> owner merges the PR -> agent pulls main. Verify visual changes in a browser before pushing. Customer-facing copy contains no em-dashes.

8. Asset Management
- Official owner photos live in /public/images: bridal-1..4.jpg, brand-events-1..4.jpg, flora-alpande.jpg, work-2.jpg (home hero). Owner files sometimes arrive as JPEG data with wrong extensions (.PNG/.JPG/.jpeg); rename to .jpg on copy.
- The hero uses the official photo /images/work-2.jpg (owner-supplied); no stock imagery remains anywhere on the site.
- brand-events-2.jpg is currently unused; bridal-2.jpg is reserved for the bridal home section.
