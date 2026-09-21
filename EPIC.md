EPIC.md - Flora Alpande Portfolio Task Breakdown

Version: 1.0 record (production state 0f44306, 2026-09-21). Epics 1-4 are the original build plan, executed with the amendments noted. Epic 5 records the launch iterations merged before the site was declared production-ready. Epic 6 is the open backlog.

CRITICAL INSTRUCTION (still in force): Do not execute tasks all at once. Execute them sequentially. After completing a task, pause and wait for human approval before moving to the next.

Epic 1: Project Scaffolding & Configuration - COMPLETED
Task 1.1: Initialize Vite & Install Dependencies - DONE (react-ts template; tailwindcss, framer-motion, react-router-dom; oxlint added for linting).
Task 1.2: Configure Tailwind & TypeScript - DONE (strict: true; content globs; Tailwind directives).
Task 1.3: Setup HashRouter - DONE, then amended by PR #11: routes are now /, /portfolio, /about, /contact, /mentions-legales, with a catch-all redirect to / (the /services route was removed).

Epic 2: Core Layout & Data Layer - COMPLETED
Task 2.1: Create Data Layer Files - DONE; services.ts now carries the four 'Luxury' signature services (MakeUp Mariage, MakeUp Médias, MakeUp Artist, MakeUp Studio) with optional imageUrl/imageAlt; legacy 'Makeup' and 'Semi-Permanent' entries are retained but unused.
Task 2.2: Create Navbar Component - DONE, then amended (PR #1, #11): brand "Flora Alpande"; links Accueil, Portfolio, À propos, Contact; "Prendre RDV" CTA links internally to /contact (Planity removed).
Task 2.3: Create Footer Component - DONE, then amended (PR #2, #11, #16): four columns on one desktop row (Adresse, Téléphone, Contact -> Demande de devis, Instagram) plus the Mentions légales link; no external booking link.
Task 2.4: Create Reusable UI Components - DONE, then extended: Button accepts label, href (external), to (internal Link, added PR #11), variant and type="submit" (PR #9); Card accepts background 'white' | 'ivory' (PR #15). A FadeIn Framer Motion wrapper was added (Epic 4).

Epic 3: Page Implementations - COMPLETED
Task 3.1: Build Home Page - DONE, then heavily amended (PR #8, #10, #12, #13, #15): current section order is hero (Prendre RDV -> /contact), expertise, Prestations signature (white band; four ivory cards with 4:5 photo under each name and a centered Prendre RDV button), La fondatrice, bridal "Prestation signature" band, Témoignages.
Task 3.2: Build Services Page - DONE initially, then REMOVED (PR #11) together with every Planity link.
Task 3.3: Build Portfolio Page - DONE, then amended (PR #5, #7): official photos, filter buttons derived from data (Tout, Mariée, Événements de marque), lightbox on click, Instagram CTA.
Task 3.4: Build About Page - DONE, then amended (PR #6): official owner portrait /images/flora-alpande.jpg.
Task 3.5: Build Contact Page - DONE initially, then replaced (PR #9, #11): the page now contains only the quote form (Nom, Téléphone, Prestation souhaitée, Votre projet) which opens the visitor's mail application with a pre-filled message to contact@fcbeauty.fr.
Task 3.6 (added): Mentions légales page - DONE (PR #2), updated for the Planity removal (PR #11).

Epic 4: Polish & Animations - COMPLETED
Task 4.1: Implement Framer Motion Fade-ins - DONE via the FadeIn component (whileInView, once).
Task 4.2: Final Security & Dependency Check - DONE: strict typing, no any, no dangerouslySetInnerHTML, external links carry rel="noopener noreferrer", images over HTTPS; AI-crawler opt-out added later (robots meta + robots.txt, PR #5).

Epic 5: Launch Iterations (all merged into main)
- PR #1: rebrand from F&C Beauty to Flora Alpande.
- PR #2: Mentions légales page + footer Instagram link.
- PR #3: scroll to top on route change.
- PR #4: Makefile + Dockerfile local tooling.
- PR #5: portfolio lightbox, Instagram CTA, AI-crawler image protection.
- PR #6: official portrait on About.
- PR #7: official photos across Portfolio.
- PR #8: value proposition, bridal and founder sections on Home.
- PR #9: mailto quote form on Contact (sur-devis services have no external booking).
- PR #10: founder section moved above the bridal section.
- PR #11: Services page and all Planity links removed; CTAs repointed to /contact; Contact page reduced to the form.
- PR #12: signature services renamed to MakeUp Mariage / Médias / Artist / Studio (form + home cards, one data source).
- PR #13: photo and "Prendre RDV" button added to each home signature card.
- PR #14: tab title "Beauty - Flora Alpande Makeup Artist" + FA monogram favicon replacing the template logo.
- PR #15: white band behind Prestations signature with ivory cards, establishing the ivory/white section rhythm.
- PR #16: footer restored to four columns so Instagram aligns on one row.

Epic 6: Open Backlog (not scheduled; owner-driven)
- Replace the favicon monogram with a real logo if the owner provides one (single file swap: public/favicon.svg).
- Replace the home hero stock image with an official photo (HERO_IMAGE_URL in Home.tsx).
- Owner review of the photo-to-service pairing on the home cards and of the eight portfolio titles/categories (src/data/services.ts, src/data/portfolio.ts).
- Dedicated per-service photos, if shot, to replace the portfolio reuses on the home cards.
- Deferred competitor-inspired ideas: trust logos, product brands, rating badge, Backstage/Hommes portfolio categories.

Working protocol for any new task (unchanged): branch from main (never commit to main), keep builds and lint green, verify visual changes in a browser, push the branch and wait for the owner to merge, then pull main. Customer-facing copy is French and contains no em-dashes.
