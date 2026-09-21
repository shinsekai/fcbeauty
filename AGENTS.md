AGENTS.md - Flora Alpande Portfolio Development Guidelines

1. Project Overview
You are developing a Single Page Application (SPA) portfolio for "Flora Alpande", a luxury makeup artist. The application must be a 100% static frontend (no backend, no database). It will be built using React, Vite, TypeScript, Tailwind CSS, Framer Motion, and React Router (BrowserRouter).

2. Autonomy & Human-in-the-Loop (CRITICAL)
DO NOT GUESS: Never guess or hallucinate missing information, data, or requirements.
DO NOT INNOVATE: Do not introduce new design patterns, libraries, UI elements, or conceptual features that were not explicitly requested by the human.
NO UNAUTHORIZED DECISIONS: You are strictly forbidden from making conceptual, architectural, or design decisions on your own. This includes (but is not limited to) choosing color palettes, selecting fonts, defining folder structures outside this document, or assuming business logic.
ASK FOR CLARIFICATION: In case of any doubt, ambiguity, or missing information, you MUST STOP and ask the human for clarification or direction before writing any code.

3. Core Philosophy: KISS & DRY
KISS (Keep It Simple, Stupid): Do not over-engineer. Avoid premature optimizations. Do not introduce global state management (like Redux or Zustand) for a static site; rely on React props, local state, and React Context only if absolutely necessary. Code must be readable and self-explanatory.
DRY (Don't Repeat Yourself): Abstract repetitive UI elements into reusable components (e.g., <ServiceCard />, <Button />, <SectionTitle />). Centralize all text, services, and image URLs in typed data files.

4. Tech Stack & Dependencies
Framework: React 18+ (Strict Mode enabled)
Build Tool: Vite
Language: TypeScript (Strict mode)
Styling: Tailwind CSS (Utility-first, no custom CSS files unless absolutely necessary)
Animations: Framer Motion (Keep animations subtle, smooth, and performant. Use whileInView for lazy animations).
Routing: react-router-dom (Use BrowserRouter so every page has a clean, indexable URL. The host must serve index.html as SPA fallback for unknown paths; see nginx.conf for the Docker deployment).

5. TypeScript & Coding Standards
Strict Typing: Enable "strict": true in tsconfig.json. No any types are allowed. Define clear interface or type definitions for all props, data structures, and function returns.
Immutability: Use const by default. Use let only when reassignment is necessary.
Naming Conventions:
Components: PascalCase (e.g., HeroSection.tsx)
Utilities/Helper functions: camelCase (e.g., formatPrice.ts)
Constants/Data files: camelCase or PascalCase for objects (e.g., servicesData.ts)
File Structure: Keep files modular and small. One React component per file.

6. Security Standards (Frontend Focus)
Even without a backend, frontend security is critical to protect users and maintain SEO integrity.

XSS Prevention: NEVER use dangerouslySetInnerHTML in React. All dynamic data must be rendered as plain text or via safe React children. Since data is locally sourced, this is low risk, but the rule is absolute.
Safe External Links: Any link pointing to an external site (e.g., Planity booking link, social media) MUST include target="_blank", rel="noopener noreferrer".
Dependency Security: Only use well-maintained, highly downloaded npm packages. Do not introduce obscure libraries. (React, Vite, Tailwind, Framer Motion, React Router are approved).
No Hardcoded Secrets: Even though it's a static site, never commit API keys, analytics tracking IDs directly in the code if they can be avoided. Use .env files and import.meta.env for any external IDs (e.g., Google Analytics V4 ID).
Content Security: Ensure all images are served via HTTPS.

7. Architecture & Data Handling
Data Layer: Create a /src/data directory. Store all portfolio items, services, pricing, and testimonials in TypeScript files (e.g., services.ts). Export strongly typed arrays.
Asset Management: Store images in the /public/images directory. Reference them using absolute paths (e.g., /images/bridal-1.jpg).
Routing Structure:
/ (Home: Hero, Featured Services, Testimonials)
/services (Detailed list of premium tiers and standard pricing)
/portfolio (Filterable grid of work)
/contact (Contact info, hours, external booking CTA)
* (Catch-all redirect to Home)

8. Styling & UX Guidelines
(Note: The human must provide the exact design system, colors, and fonts. Do not invent them.)

Design System: Define variables in tailwind.config.js ONLY based on human input.
Responsiveness: Mobile-first design. Use Tailwind breakpoints (sm:, md:, lg:). Test layouts conceptually for mobile, tablet, and desktop.
Accessibility (a11y):
All images MUST have meaningful alt attributes.
Buttons must have clear focus states (focus:ring-2).
Maintain a contrast ratio of at least 4.5:1 for text.
Performance: Use loading="lazy" on all <img> tags below the fold. Do not use heavy background videos; use optimized static images or lightweight SVGs for the hero section unless instructed otherwise.

9. Execution Protocol
When writing code:

Always output the full file content or use clear edit blocks.
Provide the exact file path for every code snippet provided (e.g., src/components/Navbar.tsx).
Ensure all imports are correctly referenced.
If you are unsure of a specific business requirement (e.g., exact pricing, image dimensions), STOP and ask the human. Do not use placeholders unless explicitly instructed to do so.
