# VSS Salesco — Official Website

**Vision And Security Solution** | Faridabad, Delhi NCR

Production-ready Next.js 14 website with Apple-style design, Three.js hero, Framer Motion animations, and full SEO.

---

## Tech Stack

- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS**
- **Framer Motion** (scroll + page animations)
- **Three.js + React Three Fiber** (3D hero)
- **Lenis** (smooth scrolling)
- **Lucide React** (icons)

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
# → http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata + JSON-LD
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── automation/         # Automation services page
│   ├── security/           # Security solutions page
│   ├── theater/            # Home theater page
│   ├── case-studies/       # Case studies listing
│   ├── blog/               # Blog listing
│   ├── contact/            # Contact form + map
│   ├── privacy/            # Privacy policy
│   ├── sitemap.ts          # Auto-generated XML sitemap
│   └── not-found.tsx       # 404 page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Floating glass navbar
│   │   ├── Footer.tsx      # Full footer
│   │   └── SmoothScroll.tsx # Lenis wrapper
│   ├── sections/
│   │   ├── HeroSection.tsx  # Three.js 3D hero
│   │   ├── ServicesSection.tsx
│   │   ├── WhyUsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── TestimonialsSection.tsx
│   └── ui/
│       └── index.tsx        # FadeIn, SectionLabel, MagneticButton, StatCard
├── styles/
│   └── globals.css          # Design tokens, Tailwind base
public/
├── logo.png                 # VSS Salesco logo
├── robots.txt
└── favicon.ico              # Add your favicon here
```

---

## Deploy to Vercel

### Option 1: GitHub + Vercel (Recommended)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Set your custom domain `vsssalesco.in` in Vercel dashboard → Domains

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

---

## SEO Checklist

- ✅ Title + description metadata on every page
- ✅ Open Graph + Twitter card tags
- ✅ JSON-LD LocalBusiness structured data
- ✅ XML sitemap at `/sitemap.xml`
- ✅ robots.txt
- ✅ Canonical URLs
- ✅ Semantic HTML (header, main, section, article, address)
- ✅ H1–H3 heading hierarchy
- ✅ Alt text on all images
- ✅ Next.js Image optimisation (lazy loading, WebP)
- ✅ Security headers via vercel.json

---

## Customisation

### Update Contact Details
Edit `src/app/layout.tsx` (JSON-LD schema) and `src/components/layout/Footer.tsx`

### Add Real Form Submission
In `src/app/contact/page.tsx`, replace the `setTimeout` in `handleSubmit` with your preferred form service (Formspree, EmailJS, or your own API route).

### Add Favicon
Replace `public/favicon.ico` with your brand favicon. Use [realfavicongenerator.net](https://realfavicongenerator.net) to generate all sizes.

### Add OG Image
Add a `public/og-image.jpg` (1200×630px) for rich social media previews.

---

## Performance Notes

- All images use `next/image` with lazy loading and automatic WebP conversion
- Three.js hero uses `Suspense` with a null fallback to avoid blocking
- Lenis smooth scroll is lightweight (<5KB)
- Code splitting is automatic via Next.js App Router

---

© 2024 VSS Salesco | vsssalesco.in
