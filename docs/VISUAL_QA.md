# Visual QA

All checks used the production build (`astro build`), served locally and opened in headless Chromium (Playwright). Every page was screenshotted and reviewed by eye, not just checked for console errors. Scripts: `scripts/qa.py` (captures), `scripts/flow.py` (booking click-through), `scripts/interact.py` (menu, sticky bar, contact notice, lightbox, tabs).

## Viewports checked

| Viewport | Device class | Pages |
|---|---|---|
| 1440 × 900 | Laptop / desktop | All 15 pages, full length |
| 1280 × 800 | Small laptop | Home, booking, room detail |
| 768 × 1024 (2×) | Tablet portrait | Home, booking, room detail |
| 390 × 844 (2×, touch) | iPhone 12–15 class | All 15 pages, full length; booking flow end to end |
| 360 × 740 (2×, touch) | Small Android | Home, booking, room detail |

Automated checks on every capture: no JavaScript errors, no console errors, no horizontal overflow (`scrollWidth ≤ viewport`), no 4xx/5xx requests.
Homepage measured locally: first load about 1.0 MB, LCP 0.4 s desktop / 0.9 s phone (localhost, so network time is excluded), CLS 0.003.

## Problems found and fixed

| # | Where | Problem (as seen in screenshots) | Fix |
|---|---|---|---|
| 1 | Home | All four room panels rendered stacked on desktop: component CSS `display:grid` overrode the `hidden` attribute | `.stay__panel[hidden]{display:none}` |
| 2 | Home, Stay, Dining, Offers | Mask-reveal images stayed blank: the observer watched an element that was itself fully clipped | Clip the `<img>` inside, observe the unclipped figure; reveals default to visible without JS |
| 3 | Home | Statement paragraph and "breath" quote rendered in the sans-serif because `.h1–.h3` classes didn't set the serif | Serif set on the classes, not only on the tags |
| 4 | Footer | "Check availability" button text invisible (inherited link colour) | Scoped footer link styles to `a:not(.btn)` |
| 5 | Booking | On mobile all four steps rendered at once (same `display` vs `hidden` issue) | `.st[hidden]{display:none}` |
| 6 | Booking | Calendar ran below the fold at 1440 × 900; no sold-out nights ever appeared, which looked fake | Fixed 52 px cells; estate-wide sold-out nights simulated (more often on winter weekends and holidays) |
| 7 | Booking | "Please choose an arrival date" stayed visible after dates were chosen | Message cleared on date or room selection |
| 8 | Booking | Room price block on phone loosely spaced across two lines | Rebuilt as one wrapping row under a rule |
| 9 | Booking | A toast repeated the confirmation screen's message | Removed |
| 10 | Days here | Groups with 1–2 cards left large empty areas; the Bath House repeated an image | Regrouped into Estate (4), Beyond the gate & after dark (3), plus a dedicated dark Bath House band with a price list |
| 11 | Gallery | CSS columns ended unevenly (one column much shorter) | Dense grid with feature tiles; captions on hover/focus and in the lightbox |
| 12 | Gallery | Phone lightbox placed the photo in a zero-width column | Explicit grid placement |
| 13 | Visit | Hero lede hard to read over busy foliage | Added a left-side scrim to inner-page heroes |
| 14 | Room detail | Planter's Bungalow gallery showed three near-identical angles of one bed | Replaced one with a tea-service detail; shortened a size label that wrapped |
| 15 | Home | Hero booking bar sat half below the fold at 900 px and showed the browser's raw `mm/dd/yyyy` date field | Bar moved fully inside the hero; date fields became "Choose date" buttons that open the priced calendar with guests carried over |
| 16 | All | Demo notice covered the hero booking bar | Notice appears only after scrolling past the hero; hidden on the booking page, which has its own label |
| 17 | Copy | Gallery caption named a real wetland for a photo whose location isn't verified | Caption made generic |

## Interactions verified

- **Booking:** step 1 empty-submit shows an error; choose dates (keyboard arrows also move between days); add a child with age; step 2 lists 4 rooms with availability states ("Available", "2 left", "Not available on these dates", "Too many guests"), averages and totals; extras add correctly (driver per night × nights); invalid phone shows an inline error; review totals match the summary; reference number generated. Both 1440 and 390, no errors.
- **Menu:** opens full screen, focus moves to Close, Escape closes and returns focus.
- **Sticky phone bar** appears after the hero; Call/WhatsApp show the demo notice with the pre-written message.
- **Room tabs:** click and arrow-key navigation; on a phone they become a swipe rail.
- **Lightbox:** arrows, swipe, Escape, focus trap.
- **Portable build** (`dist-artifact/`): every page loaded from a sub-path and from inside a simulated host wrapper, with zero failed requests.

## Remaining limitations (not fixed, by decision or constraint)

- Tested in Chromium only. Safari/iOS and Firefox were not available here. Most risk is in `:has()` (used for the selected-room outline, which degrades to no outline) and `100svh`.
- Mobile was emulated, not tested on physical devices or a slow 3G connection.
- No screen-reader pass (VoiceOver/TalkBack). Semantics, labels, focus order and live regions were built in, but not verified with assistive technology.
- Fonts load from Google Fonts. On a very slow connection the fallback serif shows briefly (`display=swap`).
- Gallery tall-image cropping depends on the photo; real photography needs a quick crop review.

---

# Competitor test and final self-review

Compared side by side, desktop and phone, against Soneva Fushi, Gleneagles, Resplendent Ceylon and The Brando (all captured in research), and against Grand Sultan as the Bangladeshi benchmark.

**1. Custom or template?**
It reads as custom. Distinctive choices include the Bangla wordmark, the "tea rows" motif, captions under photos, fact lists with real numbers, prices in taka with VAT stated, and seasons with honest notes. Structurally it is a familiar premium-hospitality pattern (photo hero, editorial sections), which is intentional because guests know how to use it.

**2. Three researched sites visually stronger than ours, and why**
- *Soneva Fushi:* real people in the hero (children walking a jungle path) give life and scale that a still landscape can't. Their photography is commissioned; ours is borrowed.
- *Cap Juluca (Belmond):* the editorial layout has more variety (off-grid images of different sizes, captions, a historical essay). Ours alternates fewer layouts and has no story of the place's history.
- *Resplendent Ceylon:* a founder's signature and a real-world purpose story create trust we can't fake for a fictional brand.

**3. Where ours is stronger**
- Booking clarity: nightly prices in the calendar, stay rules stated, children's ages, live totals, the advance and cancellation terms, and a human channel at every step. Only Soneva was comparable.
- Phone: our hero, headline and two actions sit in one screen; Gleneagles and Grand Sultan crowd it. The phone bar (Call · WhatsApp · Check dates) fits Bangladeshi behaviour better than any researched site.
- Prices and logistics: taka, VAT, drivers, trains, minimum stays. None of the international sites address this market; most Bangladeshi sites do it with broken copy.
- Speed and robustness: no video, no preloader, content visible without JavaScript. Eleven researched heroes failed to render in our captures.

**4. What still feels generic**
- The cream, deep green and serif palette sits close to a common "luxury nature" look (Resplendent and Gleneagles use relatives of it). The tea-rows motif and Bangla wordmark separate it, but only a little.
- "Days here" cards and offer cards are conventional components.
- Without a real person (host, chef, founder) the site lacks a voice of its own.

**5. What an experienced hospitality web designer would criticise**
- The photography is mixed-source: sea views through two bedroom doors, karst mountains behind the pool. A trained eye will see it isn't one property.
- No video or motion moment in the hero. That's deliberate, but some clients expect it.
- The home page is long (12 sections). One section, Seasons or Gatherings, could move off the home page.
- No Bangla version yet.

**6. Is mobile designed or merely responsive?**
Designed. The phone gets different behaviour: a hero with two actions, a bottom contact bar after the hero, a swipe rail of rooms instead of tabs, a one-month calendar, a collapsible stay summary with the total, a sticky Continue button and a full-screen serif menu.

**7. Are the photographs coherent?**
Mostly, because of the shared grade and material palette. They are not perfectly coherent (see point 5). This is the biggest weakness and can only be fixed by a shoot.

**8. Is the booking/inquiry journey obvious?**
Yes. There is a header button on every page, a bar in the hero, a phone bar, room and offer buttons, and the flow tells you what happens next and when.

**9. Could anything damage guest trust?**
If shown with real contact details but the simulated calendar, yes, because a guest would see "available" for nights that aren't. **Never launch the simulated calendar for a real resort.** Connect a real engine, or switch the calendar to "request dates" mode (no availability shown). All demo labels are in place.

**10. Would I put this in an agency portfolio?**
As a concept piece, yes, with screenshots of the home, booking and room detail. I would hold it back as a client case study until it has real photography.
