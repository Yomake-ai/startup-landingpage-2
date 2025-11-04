# Azzle Home 2 - Vite Landing Page

This is a standalone Vite + React + TypeScript landing page converted from the Next.js Azzle template (Home 2 design).

## Features

- Modern Vite build system with fast HMR
- React 19 with TypeScript
- Fully responsive design
- Animation support (AOS, GSAP)
- Slick carousel for sliders
- Independent deployment ready

## Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
```

Build output: `dist/` folder

### Preview Build

```bash
npm run preview
```

## Project Structure

```
home-2-vite/
├── public/assets/       # Static assets (images, CSS, fonts)
├── src/
│   ├── common/          # Shared utilities
│   ├── components/      # Home 2 components
│   ├── layouts/         # Headers & footers
│   ├── data/            # Data files
│   ├── hooks/           # React hooks
│   └── App.tsx          # Main app
└── index.html
```

## Deployment

Deploy to any static hosting:
- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: Drag `dist` folder
- **GitHub Pages**: Push `dist` to gh-pages
- **Others**: Upload `dist` contents

## Technologies

- Vite, React 19, TypeScript
- AOS, GSAP, React Slick
- React CountUp, Intersection Observer
# startup-landingpage-2
