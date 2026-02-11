# My WAS Study Guide

A single‑page web application that organizes study materials for the IAAP Web Accessibility Specialist (WAS) exam. The app is built with React and React Router and contains topic pages across multiple domains (e.g., Using ARIA, Testing with Assistive Technologies). Styling emphasizes accessible color contrast and semantics.

> Last updated: 2026‑02‑11

## Tech Stack
- Language: JavaScript (ESNext), JSX
- Framework: React 19
- Router: `react-router-dom` 7
- Build toolchain: Create React App (`react-scripts` 5)
- Testing: Jest + Testing Library (`@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`)
- Validation: `ajv`, `ajv-errors` (for JSON schema validation where needed)
- Performance metrics: `web-vitals`
- Package manager: npm (lockfile: `package-lock.json`)

## Requirements
- Node.js and npm
  - TODO: Confirm and document the exact Node.js version used in development/CI. CRA 5 commonly works on active/LTS Node versions. Recommend using the latest LTS.
- A modern browser (see `browserslist` in `package.json` for targeted browsers)

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
   - Opens http://localhost:3000
   - Hot reload is enabled; lint errors show in the console.

## Scripts
All scripts are defined in `package.json`:

- `npm start` — Run the dev server with hot reload (CRA).
- `npm run build` — Create an optimized production build in `build/`.
- `npm test` — Run tests in watch mode (Jest via CRA).
- `npm run eject` — Copy CRA configuration locally. One‑way operation; use only if you need custom Webpack/Babel/ESLint config.

## Entry Points & App Structure
- Entry: `src/index.js`
  - Creates the root with `ReactDOM.createRoot(...)` and renders `<App />` inside `<React.StrictMode>`.
- App shell and routing: `src/App.js`
  - Uses `react-router-dom` to define routes for the various study domains and topic pages.
- Global styles: `src/index.css`
  - Defines CSS custom properties with an accessible pink palette and base layout/typography.

### Project Layout (partial)
```
my-WAS-study-guide/
├─ public/                 # Static assets, CRA HTML template
├─ src/
│  ├─ components/          # UI components (e.g., Menu, Footer, Breadcrumbs)
│  ├─ pages/               # Domain pages and subtopics (DomainOne/Two/Three/...)
│  │  └─ DomainOne/
│  │     └─ D-Using-ARIA/  # Example: ARIA topics incl. names/roles, AAPG, focus mgmt
│  ├─ App.js               # Routes and high-level layout
│  ├─ index.js             # React entry point
│  └─ index.css            # Global styles and variables
├─ package.json            # Scripts, dependencies, browserslist
├─ package-lock.json       # npm lockfile
├─ README.md               # This file
└─ WASBoK_PDF.docx         # Reference material (WAS Body of Knowledge)
```

## Environment Variables
This project uses Create React App conventions:
- App variables must be prefixed with `REACT_APP_` to be included in the build, e.g. `REACT_APP_API_BASE=https://example.com`.
- Common CRA envs supported by the dev server/build:
  - `PORT` — change dev server port (default 3000)
  - `BROWSER` — specify which browser to open (`none` to disable)
  - `HTTPS=true` — run dev server over HTTPS (optionally `SSL_CRT_FILE` and `SSL_KEY_FILE`)

Create a `.env` file in the project root if needed. Example:
```dotenv
# Application-specific
REACT_APP_EXAMPLE=

# Dev server tweaks
# PORT=3001
# BROWSER=none
# HTTPS=true
```

## Testing
- Run the interactive test watcher:
  ```bash
  npm test
  ```
- Testing stack: Jest (via CRA) with Testing Library for DOM/React component tests and `@testing-library/jest-dom` matchers.
- Place tests alongside components/pages (e.g., `Component.test.js`) under `src/`.

## Build & Deploy
- Production build:
  ```bash
  npm run build
  ```
  Outputs static assets to `build/` suitable for any static host (Netlify, Vercel, GitHub Pages, S3, etc.).
- Deployment specifics depend on your hosting platform.
  - TODO: Document the chosen deployment target and steps (e.g., `netlify.toml`, GitHub Pages config, custom server).

## Accessibility Notes
- The UI styling in `src/index.css` aims for WCAG-friendly contrast and clear focus states.
- Content is organized to mirror WAS domains and emphasizes semantics, keyboard interaction, ARIA usage, and testing guidance.
- Contributions should maintain accessible patterns (semantic HTML first; ARIA only when necessary) and include keyboard/focus considerations.

## License
- TODO: Add a LICENSE file and state the license here (e.g., MIT, Apache-2.0). Until then, default copyright applies.

## Acknowledgments
- Bootstrapped with [Create React App](https://create-react-app.dev/).
- React, React Router, and Testing Library communities for tooling and docs.
