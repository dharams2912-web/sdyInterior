# SDY Interior website

Multi-page website for **SDY Interior** ("Design Beyond Walls"), led by ID. Dharamraj Yadav, Mumbai.
Built from the *Website Strategy & SEO/GEO Blueprint* and the SDY visiting card.

## Stack
- Next.js 16 (App Router, static prerendering) + TypeScript
- Tailwind CSS 4 (brand tokens in `src/app/globals.css`: forest green `#1D3D35`, antique gold `#D9AE62`, ivory `#F6F0E5`)
- Framer Motion (page reveals, split headlines, magnetic buttons, sticky horizontal project rail, scroll-linked process line)
- Three.js via @react-three/fiber + drei (3D living room in the hero, 3D material samples on /materials-finishes/)
- Lenis smooth scrolling
- SDY logo loader (`src/components/Loader.tsx`) recreated from the visiting card

## Run it
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```
Deploy on Vercel (import the folder/repo) or any Node host.

## Pages (blueprint §4)
`/`, `/about/`, `/services/` + 6 service pages, `/projects/` + case studies, `/our-process/`,
`/interior-design-styles/`, `/materials-finishes/`, `/interior-design-cost/`, `/locations/`, `/locations/mumbai/`,
`/reviews/`, `/blog/` + 3 articles, `/faqs/`, `/contact/`, `/privacy-policy/`, `/terms/`, custom 404.

## SEO / GEO built in
- Unique title, meta description, canonical, Open Graph per page; one H1 per page; trailing-slash URLs
- JSON-LD: HomeAndConstructionBusiness, WebSite, Person (designer), BreadcrumbList, Service, FAQPage, Article, HowTo, ItemList
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, generated OG image, `public/llms.txt` for AI crawlers
- Answer-first "In short" blocks on key pages; content stays server-rendered under the animations
- Tap-to-call, WhatsApp button with prefilled message, lead form (blueprint §13 fields) with consent;
  `data-event` attributes + `dataLayer` `form_submit` push ready for GA4

## Where to edit
- Business facts: `src/lib/site.ts`
- All copy (services, projects, FAQs, process, blog, locations): `src/lib/content.ts`

## Before launch (from blueprint §19, nothing was invented)
- [ ] Confirm which phone is WhatsApp-enabled (`site.whatsapp`, currently +91 91679 55625)
- [ ] Add email, studio address, opening hours, social/Google Business Profile URLs (`site.ts`) — schema picks them up automatically
- [ ] Replace the 4 **design concepts** with real project case studies + photos (set `projects` in `content.ts`; use `next/image`)
- [ ] Add the designer's approved biography/qualifications (`src/app/about/page.tsx`)
- [ ] Add genuine client reviews (`/reviews/`) and budget bands (`/interior-design-cost/`, lead form)
- [ ] Confirm the service list (commercial/turnkey pages were left out until confirmed)
- [ ] Connect the lead form to an inbox/CRM as well as WhatsApp (see comment in `LeadForm.tsx`)
- [ ] Add GA4 + Search Console, submit the sitemap; have the privacy policy reviewed (DPDP Act)
