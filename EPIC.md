EPICS.md - F&C Beauty Portfolio Task Breakdown

This document defines the exact tasks the agent must execute. CRITICAL INSTRUCTION: Do not execute these tasks all at once. Execute them sequentially. After completing a task, pause and wait for human approval before moving to the next.

Epic 1: Project Scaffolding & Configuration

Goal: Initialize the Vite project, install dependencies, and configure the strict TypeScript and Tailwind environment.

Task 1.1: Initialize Vite & Install Dependencies
Given the agent is in an empty workspace
When the agent creates a new Vite project using the react-ts template
Then the agent must install tailwindcss, postcss, autoprefixer, framer-motion, and react-router-dom
And the agent must initialize Tailwind CSS using the npx tailwindcss init -p command.

Task 1.2: Configure Tailwind & TypeScript
Given the Vite project is initialized
When the agent edits tailwind.config.js and tsconfig.json
Then the agent must configure the Tailwind content array to include ./index.html, ./src/**/*.{js,ts,jsx,tsx}
And the agent must ensure strict: true is enabled in tsconfig.json
And the agent must update src/index.css to include the Tailwind directives (@tailwind base; @tailwind components; @tailwind utilities;).

Task 1.3: Setup HashRouter
Given the React application entry point (src/main.tsx or src/App.tsx)
When the agent sets up the routing layer
Then the agent must wrap the application in <HashRouter> from react-router-dom
And define the routes: /, /services, /portfolio, /about, /contact, and a catch-all * redirecting to /.

Epic 2: Core Layout & Data Layer

Goal: Create the foundational layout components and the strictly typed local data files.

Task 2.1: Create Data Layer Files
Given the /src/data directory exists
When the agent creates services.ts, portfolio.ts, and testimonials.ts
Then the agent must implement the exact TypeScript interfaces defined in PRD.md (Section 5)
And populate services.ts with the exact services and prices listed in PRD.md (Section 4.2)
And populate portfolio.ts with 6 dummy items using high-quality image URLs from Unsplash/Pexels (searching for "luxury makeup", "bridal makeup", etc.)
And populate testimonials.ts with 3 dummy 5-star reviews.

Task 2.2: Create Navbar Component
Given the /src/components directory exists
When the agent creates Navbar.tsx
Then the component must render the brand name "F&C Beauty"
And include <NavLink> components for Home, Services, Portfolio, About, and Contact
And implement a mobile hamburger menu that toggles a dropdown using React state (useState)
And style it using Tailwind CSS (mobile-first, sticky top, white background, subtle shadow).

Task 2.3: Create Footer Component
Given the /src/components directory exists
When the agent creates Footer.tsx
Then the component must render the address "105 Av. du Général Leclerc, 77400 Lagny-sur-Marne"
And render the phone number "06 18 33 40 83"
And render a link to https://www.planity.com/fc-beauty-77400-lagny-sur-marne with target="_blank" and rel="noopener noreferrer".

Task 2.4: Create Reusable UI Components
Given the /src/components directory exists
When the agent creates Button.tsx and Card.tsx
Then Button.tsx must accept props for label (string), href (optional string), and variant ('primary' | 'secondary')
And if href is provided, render an <a> tag; otherwise, render a <button> tag
And Card.tsx must accept children as props and apply Tailwind classes for rounded corners, padding, and a subtle border.

Epic 3: Page Implementations

Goal: Build the actual pages using the layout and data layers.

Task 3.1: Build Home Page
Given the /src/pages/Home.tsx file is created
When the agent builds the Home page
Then it must include a Hero section with an Unsplash background image and a headline "L'Art de la Beauté & du Maquillage"
And include a <Button> linking to the Planity URL
And map through the services array to display the 3 "Luxury" category services in Card components
And map through the testimonials array to display the 3 reviews.

Task 3.2: Build Services Page
Given the /src/pages/Services.tsx file is created
When the agent builds the Services page
Then it must group the services data by category ('Luxury', 'Makeup', 'Semi-Permanent')
And render a distinct section for each category with a heading
And for each service, render the name, duration, and price exactly as provided in the data file
And include a "Prendre RDV" <Button> linking to the Planity URL at the bottom of each section.

Task 3.3: Build Portfolio Page
Given the /src/pages/Portfolio.tsx file is created
When the agent builds the Portfolio page
Then it must render a set of filter buttons: All, Bridal, Editorial, Brand Events, Semi-Permanent
And implement useState to track the active filter
And map through the portfolio data, filtering items based on the active filter state
And render the images in a responsive CSS Grid (Tailwind: grid grid-cols-1 md:grid-cols-3 gap-4)
And apply a Tailwind hover effect (hover:opacity-80 transition-opacity) to each image.

Task 3.4: Build About Page
Given the /src/pages/About.tsx file is created
When the agent builds the About page
Then it must render an Unsplash portrait image (search "makeup artist portrait")
And render the exact bio text from PRD.md (Section 4.4): "Emphasize expertise in eye beauty (regard), semi-permanent makeup (dermographie), and Brazilian manicure."
And render the philosophy quote: "Hommes et femmes ont le droit au même traitement, c’est-à-dire au meilleur !"

Task 3.5: Build Contact Page
Given the /src/pages/Contact.tsx file is created
When the agent builds the Contact page
Then it must render the business hours exactly as listed in PRD.md (Section 4.5)
And render the address and phone number
And include an <iframe> pointing to a generic Google Maps embed for "Lagny-sur-Marne"
And include a <Button> linking to the Planity URL.
Epic 4: Polish & Animations
Goal: Add luxury feel through animations and ensure technical best practices.

Task 4.1: Implement Framer Motion Fade-ins
Given all pages are built and rendering correctly
When the agent reviews the page components
Then the agent must wrap the main content containers in Framer Motion <motion.div>
And use the initial={{ opacity: 0 }}, whileInView={{ opacity: 1 }}, and viewport={{ once: true }} properties to trigger a smooth fade-in when the user scrolls to the section.

Task 4.2: Final Security & Dependency Check
Given the project is feature-complete
When the agent performs a final code review
Then the agent must verify that NO any types exist in the TypeScript code
And verify that ALL external links (<a> tags) have rel="noopener noreferrer"
And verify that NO dangerouslySetInnerHTML is used anywhere in the codebase.
