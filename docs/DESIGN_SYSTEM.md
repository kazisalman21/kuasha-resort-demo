# Kuasha Design System

The single source of truth is `src/styles/tokens.css`. This document explains the tokens and the rules for using them.

## 1. Colour

### Brand and neutrals
| Token | Hex | Use |
|---|---|---|
| `--paper` | `#F3EEE4` | Default page background (warm, unbleached) |
| `--paper-2` | `#E9E3D6` | Alternate band, form fields, image placeholders |
| `--mist` | `#DFE2D9` | Cool green-grey band (seasons, facts) |
| `--ink` | `#1C2520` | Headings and body text (13.6:1 on paper) |
| `--ink-2` | `#4B544D` | Secondary text and captions (6.8:1) |
| `--ink-3` | `#5F675E` | Meta text ≥ 14px only (≈4.8:1) |
| `--line` | `rgb(28 37 32 / .16)` | Hairline rules and field borders |
| `--tea` | `#2D4537` | **Primary**: buttons, links on paper, active states (9:1) |
| `--tea-deep` | `#18241D` | Dark bands (dining, footer). Paper on it is 13.9:1 |
| `--on-dark-2` | `#C9D2C2` | Secondary text on dark bands (10.3:1) |

### Accent
| Token | Hex | Use |
|---|---|---|
| `--clay` | `#9C4F2E` | Taken from brick and clay tea cups. Used **sparingly**: prices, the current step, selected dates, small labels. 5.1:1 on paper. **Never as text on `--tea-deep`** (2.7:1); use `--clay-light` there. |
| `--clay-light` | `#D9A487` | Accent on dark bands (7.3:1) |
| `--leaf` | `#7A9466` | Status "available" dot only, never text |

Rules: one deep colour per screen (tea); clay at most twice per viewport; no gradients except the photo-scrim (a black-to-transparent overlay on hero images, never coloured).

### Dark sections
Dining and footer only. There is no global dark mode: the site's identity is warm paper, and the brand prints the same way.

## 2. Typography

| Role | Family | Notes |
|---|---|---|
| Display / headings / ledes / prices | **Newsreader** (variable: opsz 6–72, wght 200–700, italic) | The serif voice. Use optical size automatically (`font-optical-sizing: auto`). Italic is used *inside* headings for one phrase only. |
| UI / body / labels / forms | **Hanken Grotesk** (variable 300–700) | Quiet, slightly warm grotesque. |
| Wordmark Bangla | **Noto Serif Bengali** | Loaded with the Google Fonts `text=` subset (the word কুয়াশা only), so it costs ≈3 KB. |

### Scale (fluid; min at 360 px, max at 1440 px)
| Token | Size | Line height | Weight | Family |
|---|---|---|---|---|
| `--t-display` | clamp(2.9rem → 6.4rem) | 0.98 | 300 | Newsreader, letter-spacing −0.02em |
| `--t-h1` | clamp(2.4rem → 4.5rem) | 1.02 | 300 | Newsreader |
| `--t-h2` | clamp(2rem → 3.4rem) | 1.05 | 300 | Newsreader |
| `--t-h3` | clamp(1.45rem → 1.9rem) | 1.15 | 400 | Newsreader |
| `--t-lede` | clamp(1.25rem → 1.6rem) | 1.38 | 350 | Newsreader |
| `--t-body` | 1.0625rem (17px) | 1.65 | 400 | Hanken Grotesk |
| `--t-small` | 0.9rem | 1.5 | 400 | Hanken Grotesk |
| `--t-label` | 0.75rem | 1.3 | 600 | Hanken Grotesk, uppercase, tracking 0.14em |
| `--t-num` | 1.75–2.5rem | 1 | 300 | Newsreader, tabular lining figures (fact list, prices) |

Rules
- The measure for body copy is ≤ 34em; ledes ≤ 22em.
- Uppercase is for labels only, never for headings.
- Numbers in fact lists are set big in Newsreader, with a small label underneath.
- Bangla is used only in the wordmark and, deliberately, for a few dish names, always paired with English.

## 3. Layout

- **Container:** max 1320px of content; outer margin `clamp(20px, 5vw, 72px)`; wide bleed sections go to 1600px or full width.
- **Grid:** 12 columns on desktop, 6 on tablet, 4 on phone; gutter `clamp(16px, 2vw, 32px)`.
- **Spacing scale (8-pt):** `--s-1` 4 · `--s-2` 8 · `--s-3` 12 · `--s-4` 16 · `--s-5` 24 · `--s-6` 32 · `--s-7` 48 · `--s-8` 64 · `--s-9` 96 · `--s-10` 128.
- **Section padding:** `--section` = clamp(72px, 10vw, 160px) top and bottom. Dense sections (facts, seasons) use 0.6×; "breath" sections use 0 (full-bleed photo).
- **Asymmetry:** editorial splits are 7/5, 5/7 or 4/8, with images offset by one column. Pure centred layouts are reserved for short statements.

## 4. Shape, rule, elevation
- Radius: `--r` 2px for buttons, fields and chips. Images have **0 radius**.
- Hairlines: 1px `--line`. Section dividers use the *tea-rows* motif (below), not boxes.
- Shadow: only on floating layers (menu sheet, booking sheet, toast): `0 18px 50px rgb(24 36 29 / .18)`.

## 5. Motif: tea rows
A set of 5–9 fine, nearly parallel contour lines, like tea bushes seen from the air. It is an inline SVG with a 1px stroke in `currentColor` at 25–40% opacity. Use: section divider (width 120px), footer texture, the booking page header, and the 404 page. It never goes over photography and never animates.

## 6. Photography
See `IMAGE_STRATEGY.md`. Ratios in use: **3:2** (default landscape), **4:5** (portrait cards), **16:9 / full-bleed** (breath sections), **1:1** (gallery mixed), plus the hero (fill viewport, focal point per image). Every image has a placeholder background colour and an explicit `width` and `height` so the layout doesn't shift while it loads.

Captions are `--t-small`, `--ink-2`, sentence case, placed under the image and aligned to its left edge, never over it (the hero is the exception).

## 7. Components

### Buttons
| Variant | Style | Use |
|---|---|---|
| Primary | `--tea` fill, `--paper` text, 48px high (44px minimum), padding 0 24px, label in Hanken Grotesk 600, 0.95rem, tracking 0.02em | One per view: Check availability / Send request |
| Secondary | 1px `--ink` outline, transparent | A second action |
| On-photo | 1px paper outline on a scrim | Hero only |
| Text link | Underline with 1px rule offset 4px; on hover the rule thickens and the colour moves to `--clay` | Most onward links ("See the rooms →") |
| Quiet | No border, `--ink-2`, underline on hover | Tertiary actions |

Pills are **not** used. Focus: a 2px `--clay` outline, offset 3px, on every interactive element.

### Navigation
- Header: transparent over the hero with paper text; after 80px of scroll it becomes paper with a hairline. Height 76px desktop / 64px mobile.
- Desktop: wordmark, then links (Stay · Days here · Dining · Gatherings · Offers · Visit), then the phone as a quiet link, then the primary "Check availability" button.
- Mobile: wordmark + "Menu". The menu is a full-height sheet with large serif links, contact and booking.
- Mobile bottom bar (pages with a hero): appears after the hero leaves the viewport: `Call · WhatsApp · Check dates`. It is hidden on the booking page.

### Cards
- **Room tab panel** (home): a text list of room names on the left (active one marked with a clay rule), a large 3:2 image and spec line on the right.
- **Experience card**: 4:5 image, title in Newsreader, then a meta line (duration · season · price) in labels.
- **Offer card**: an image plus a *fact bar* (Nights · Valid · Includes) and a text link.
- No card has a border *and* a fill *and* a shadow; at most one of the three.

### Fact list
A grid of 2–4 items, each a big number plus a label. Hairline above.

### Forms
- Fields: 52px high, `--paper-2` fill, 1px `--line` bottom border that turns `--tea` on focus. Label above in `--t-label`. Helper text below in `--t-small`.
- Errors: clay text with an icon, plus `aria-invalid` and `aria-describedby`.
- Steppers (guests): − value + buttons, 44px, with a live region announcing the change.
- The calendar is a `grid` of buttons with `aria-label="Fri 14 Nov, from ৳16,800, available"`, fully keyboard-operable with the arrow keys.

### Booking UI
- Steps: Dates & guests → Room → Details → Review. The progress is shown as text ("Step 2 of 4") with a hairline progress rule. No numbered circles.
- The summary panel is sticky on desktop and collapsible on mobile, with a sticky "Continue" bar at the bottom.
- A demo label ("Availability shown is simulated for this demo") appears in `--t-small` above the calendar and on the review step.

## 8. Motion
| Token | Value |
|---|---|
| `--ease` | cubic-bezier(.2,.7,.2,1) |
| `--ease-in-out` | cubic-bezier(.65,0,.35,1) |
| `--d-fast` | 180ms (hovers, focus) |
| `--d-base` | 380ms (header, menus, tabs) |
| `--d-slow` | 900ms (reveals) |
| `--d-hero` | 2400ms (hero settle) |

Rules
1. Content is visible without JavaScript. Reveal classes are added by JS only.
2. `prefers-reduced-motion: reduce` turns off the reveal, the hero settle and image cross-fades. State changes become instant.
3. Animate only `opacity`, `transform` and `clip-path`.
4. Each element reveals once, never on scroll-up.
5. No auto-advancing carousels; rails move only on user input.

## 9. Accessibility checklist
Semantic landmarks; one `h1` per page; a skip link; visible focus; colour contrast ≥ 4.5:1 for text; 44px targets; `alt` text written per image (in `images.json`), with decorative images using `alt=""`; dialogs (menu, lightbox, booking sheet) trap focus and close with Esc; no information carried by colour alone (sold-out dates also carry a strike-through and a label).
