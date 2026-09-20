# Flora Alpande — Luxury Portfolio

A 100% static Single Page Application (SPA) serving as the luxury digital portfolio and booking funnel for **Flora Alpande**, a beauty institute in Lagny-sur-Marne owned by Flora. The business focuses on high-end makeup services (bridal, brand events, private clients) for a high-net-worth clientele in the Île-de-France region.

All bookings are handled externally via [Planity](https://www.planity.com/fc-beauty-77400-lagny-sur-marne) — there is no backend and no database.

## Tech Stack

- **React 18+** (Strict Mode enabled)
- **Vite** — build tool
- **TypeScript** — strict mode, no `any` types
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — subtle scroll-triggered animations (`whileInView`)
- **React Router** — `HashRouter` for static-hosting compatibility (no 404 on refresh)

## Sitemap

- `/` — **Home**: hero, value proposition, featured luxury services, top testimonials
- `/services` — **Services**: luxury tiers, standard makeup, and semi-permanent makeup pricing
- `/portfolio` — **Portfolio**: filterable grid of work (All, Bridal, Editorial, Brand Events, Semi-Permanent)
- `/about` — **About**: Flora's biography and philosophy
- `/contact` — **Contact**: address, hours, phone, Google Maps embed, Planity booking CTA
- `*` — catch-all redirect to Home

## Getting Started

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Type-check and build for production
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
fcbeauty/
├── public/images/        # Static image assets
├── src/
│   ├── components/       # Reusable UI components (Navbar, Footer, Button, Card, ...)
│   ├── data/             # Typed data files (services, portfolio, testimonials)
│   ├── pages/            # One file per route (Home, Services, Portfolio, About, Contact)
│   ├── App.tsx           # Routing layer (HashRouter + routes)
│   └── main.tsx          # Application entry point
├── AGENTS.md             # Development guidelines for the agent
├── EPIC.md               # Task breakdown (executed sequentially, with human approval)
└── PRD.md                # Product requirements
```

## Data & Assets

All portfolio items, services, pricing, and testimonials live in strictly typed TypeScript files under `src/data/`, using the interfaces defined in [PRD.md](PRD.md) (Section 5).

Until official client images are available, portfolio and hero images use free stock photos from Unsplash / Pexels / Pixabay via direct CDN URLs stored in the data files — swapping them for official Flora Alpande images later only requires editing those URLs.

## Security Notes

- No `dangerouslySetInnerHTML` anywhere in the codebase.
- All external links use `target="_blank" rel="noopener noreferrer"`.
- All images are served via HTTPS.
- Any external IDs (e.g., Google Analytics 4) are read from `.env` via `import.meta.env`, never hardcoded.

## Deployment

The app is a fully static build (output in `dist/`) compatible with any static host: Vercel, Netlify, GitHub Pages, etc. No server-side routing configuration is required thanks to `HashRouter`.

## Documentation

- [PRD.md](PRD.md) — product requirements, page specs, data models
- [EPIC.md](EPIC.md) — sequential task breakdown (each task requires human approval)
- [AGENTS.md](AGENTS.md) — development guidelines, coding standards, security rules
