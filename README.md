# Kuasha — resort website concept

A premium resort website concept for a fictional 22-room retreat in the tea hills of Sreemangal, Bangladesh. It was built as a sales demo for Bangladeshi resorts that don't yet have a proper website.

> **Everything here is sample content.** The property, prices, phone numbers and offers are fictional, the photographs are free-licence stock (see `/about-this-demo/`), and the booking calendar's availability is simulated.

## Run it

```bash
npm install
python3 scripts/fetch-photos.py && python3 scripts/grade.py   # only if public/img/ is missing
npm run dev            # http://localhost:4321
npm run build          # static site in dist/
npm run build:artifact # portable copy in dist-artifact/ (relative links, trimmed images)
```

Stack: [Astro](https://astro.build) static site, no UI framework. Plain CSS with design tokens and about 20 KB of JavaScript in total (9 KB gzipped). No runtime dependencies.

## Structure

```
src/data/site.ts        All content: rooms, prices, offers, experiences, policies, FAQs. Rebrand here.
src/data/images.json    Generated image manifest (sizes, focal points, alt text, credits)
src/styles/global.css   Design tokens and base styles
src/layouts/Base.astro  <head>, SEO/OG, JSON-LD (Resort), header, footer, phone bar, demo notice
src/components/         Header, Footer, MobileBar, Pic (responsive image), PageHero, HeroBook,
                        FactList, ExperienceCard, OfferCard, RouteMap, FloorPlan, TeaRows, DemoTag
src/pages/              Home, Stay (+4 room pages), Days here, Dining, Gatherings, Offers, Visit,
                        Gallery, Book (4-step flow), About this demo, 404
scripts/grade.py        Colour-grades photos into one look and exports WebP sizes
scripts/qa.py etc.      Screenshot QA, booking click-through, pitch screenshots
docs/                   Research, feature matrix, design direction, design system, image strategy,
                        visual QA + self-review, client summary, screens/ for the pitch
```

## Turning the demo into a real resort's site

1. Replace `src/data/site.ts` (name, Bangla name, address, phones, rooms, rates, offers, policies, FAQs).
2. Photos: `python3 scripts/fetch-photos.py` downloads the demo originals, `python3 scripts/grade.py` grades and exports them to `public/img/`. For a real resort, put its photos in `assets-src/originals/`, list them in `scripts/images.json`, and run `grade.py`.
3. Set `demo: false` in `site.ts` (removes the notice and the call/WhatsApp interception) and set `site` in `astro.config.mjs`.
4. **Booking:** remove the simulated rates in `src/pages/book/index.astro` (`factor`, `roomLeft`, `estateFull`). Either connect the reservation engine, or keep dates and guests and send the request to email/WhatsApp through a small form backend. Never launch the simulated availability.
5. Allow indexing in `public/robots.txt`, update `public/sitemap.xml`.
6. Re-run `python3 scripts/qa.py` and review the screenshots.
