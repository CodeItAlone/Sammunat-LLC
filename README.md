# Sammaut LLC Landing Page

A professional, responsive business landing page built with React and Vite, and deployed on Vercel.

## Live Demo


## Tech Stack
- React
- Vite
- CSS Modules
- Vercel (deployment)

## Project Overview
This project is a static landing page designed for a business website.  
The focus was on clean component structure, scoped styling, responsive layout, and a simple production-ready setup without unnecessary complexity.

## Key Decisions
- **React + Vite**: Chosen for fast development and minimal configuration. Next.js was not used since server-side rendering and routing were not required.
- **CSS Modules**: Used for component-scoped styles without introducing external styling dependencies.
- **Vercel**: Used for Git-based deployment with automatic builds and HTTPS support.

## Folder Structure
src/
├── components/
│ ├── Navbar/
│ ├── Hero/
│ ├── Features/
│ ├── CTA/
│ └── Footer/
├── App.jsx
├── index.css
└── main.jsx

Each component has its own folder with co-located styles for clarity and maintainability.

## Build & Verification
The project was built locally using:
```bash
npm run build
The build completed successfully without errors.
The layout was manually verified on desktop, tablet, and mobile screen sizes.

Deployment

The project is deployed on Vercel using Git-based automatic deployment.
Any push to the main branch triggers a new production build.

Future Improvements

Add a contact form using EmailJS without a backend

Add subtle scroll-based animations using Intersection Observer

Implement dark mode using CSS variables


---

## After pasting this README, do THIS

Run these commands:

```bash
git add README.md
git commit -m "docs: add project README"
git push
