# Gayatri Jewellers - Premium Preview Website

A high-fidelity, agency-quality frontend-only preview website for **Gayatri Jewellers** located in Gate Bazar, Kharagpur. Designed using Astro, Tailwind CSS v4, and TypeScript.

This repository serves as a staging website preview to present structure, animations, and branding elements to the client before full production development.

---

## 🌟 Key Features

1. **Premium Luxury Aesthetic:** Custom dark-mode color palette built around deep obsidian and champagne-gold gradients, designed with elegant typography (`Cinzel` & `Inter`).
2. **BIS HUID & Standards Highlights:** Informational components detailing the BIS 6-digit HUID Hallmark purity standards and live weight-testing assurance.
3. **Horizontal Patrons Carousel:** Accessible carousel sliding reviews with pause-on-hover/focus controls, slide controls, and automatic `prefers-reduced-motion` compliance.
4. **SVG-based Signature Catalog:** A responsive vector masonry catalog with an interactive vanilla TS lightbox overlay and WhatsApp deep link triggers.
5. **Staging SEO & Privacy Protections:**
   - Pre-configured `noindex, nofollow` meta tags.
   - Global `robots.txt` blocking indexing.
   - Privacy-respecting lazy-loaded map frame.
6. **Fully Responsive:** Custom mobile-navigation drawer, flexible flex/grid layouts, and optimized image container scales.

---

## 🛠️ Tech Stack

- **Framework:** Astro 7
- **Styling:** Tailwind CSS v4 (CSS-first configuration via `@theme`)
- **Typography:** Self-hosted `@fontsource/cinzel` and `@fontsource/inter` (removes third-party CDN latency and tracking)
- **Deployment:** GitHub Pages (via GitHub Actions workflow)

---

## 📁 Folder Structure

```text
├── .github/workflows/   # CI/CD Deployment configurations
│   └── deploy.yml       # GitHub Actions workflow for Pages
├── public/              # Static assets (Favicons, robots.txt, .nojekyll)
│   ├── assets/images/   # High-resolution branding banner
│   ├── favicon.svg      # Handcrafted G Monogram SVG Favicon
│   └── robots.txt       # Crawler restriction rules
├── src/
│   ├── components/      # Modular layout elements
│   │   ├── About.astro        # Brand legacy story
│   │   ├── Collections.astro  # Fine jewelry catalogs
│   │   ├── Contact.astro      # WhatsApp & Tel triggers
│   │   ├── Features.astro     # Purity standards details
│   │   ├── Footer.astro       # Structured layout footer
│   │   ├── Gallery.astro      # Masonry layout & Lightbox
│   │   ├── Hero.astro         # Ambient animated hero section
│   │   ├── Location.astro     # Showroom details & Map
│   │   ├── Navbar.astro       # Mobile responsive navigation header
│   │   └── Testimonials.astro # Horizontal accessible slider
│   ├── layouts/
│   │   └── Layout.astro       # Base HTML document shell
│   ├── pages/
│   │   └── index.astro        # Target Landing page entrypoint
│   └── styles/
│       └── global.css         # Tailwind v4 import & custom tokens
├── package.json         # Dependencies & Build commands
├── tsconfig.json        # TypeScript configuration settings
└── astro.config.mjs     # Astro build and plugin controls
```

---

## 🚀 Getting Started

### 1. Installation
Clone the repository and install the standard dependencies:
```bash
npm install
```

### 2. Development Mode
Run the local dev server:
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 3. Build & Preview
Generate the optimized static build output:
```bash
npm run build
```
Preview the local production build:
```bash
npm run preview
```

---

## 🌎 Staging & SEO Settings

By default, the website contains a **noindex, nofollow** crawler rule to protect search visibility and preserve SEO authority for the client's eventual custom domain. 

### Moving to Production Domain
1. Open [Layout.astro](file:///Users/diwakaracharya/Documents/business-kharagpur/jewellery/gaytri%20jewelres/src/layouts/Layout.astro).
2. Set the `IS_PREVIEW_STAGING` constant to `false`:
   ```typescript
   const IS_PREVIEW_STAGING = false;
   ```
3. Update the `siteUrl` in `Layout.astro` and the `site` property in `astro.config.mjs` to match the client's purchased custom domain.
4. Modify `public/robots.txt` to allow indexation:
   ```text
   User-agent: *
   Allow: /
   ```
