# Design Direction

What the research says (Part 1). What we will build (Part 2). Where this disagrees with the brief (Part 3).
Every claim in Part 1 traces to an observation in `HOSPITALITY_RESEARCH.md`. Part 1 is **inferred** and Part 2 is **recommended**.

---

## Part 1 — Pattern synthesis

### 1.1 What the strongest sites consistently do

The strongest sites were Soneva Fushi, Cap Juluca, Gleneagles, Resplendent Ceylon, Fogo Island Inn, Blackberry Farm, The Brando (mobile), Capella Ubud and Four Seasons (for function).

1. **They state facts plainly.** Cap Juluca's fact list ("68 rooms, 45 suites — 4 restaurants — 20 minutes from the airport"), Fogo's "29 rooms", Gleneagles' "850 acres". The weakest sites substitute adjectives ("an ode to luxury", "heavenly havens of bliss"). Premium reads as *confident and specific*, not effusive.
2. **They give photography room and context.** Captions sit under images (Cap Juluca, Fogo's hero caption). Images come in deliberate sizes rather than a uniform card grid. Gutters are generous.
3. **They use a two-family type system with a serif voice.** Lyon (Aman), Moulin (Soneva), Austin (Rosewood), PP Pangaia (Resplendent), Bembo (Fife Arms) and Canela (Post Ranch, Habitas) are serifs for voice, set against a quiet sans for UI. Roman + italic within a single headline (Resplendent, Rosewood) adds warmth without decoration.
4. **They limit the palette to one deep colour on a warm neutral.** Gleneagles uses bottle green on sage, Resplendent forest green on cream, Soneva brick on cream, Post Ranch teal plus blush and aubergine bands. Colour blocks pace the scroll; they don't decorate it.
5. **They treat booking as calm utility, never as an advert.** It's a white bar docked to the hero (Six Senses, Soneva), a quiet header button, or a full-screen overlay with a real calendar (Soneva, Capella). The best detail is honesty inside the flow: nightly prices (Soneva), stay rules (Blackberry), children's ages (Soneva, Brando).
6. **They answer arrival anxiety.** Distance, minutes from the airport, how to get there, local time (Aman, Oberoi, Six Senses, Cap Juluca).
7. **They show people from behind, at a distance or through their hands.** Soneva's children on the path, Resplendent's tea-plucking hand, Cap Juluca's walkers. Lifestyle without posed models.

### 1.2 What mediocre sites get wrong (much of it from the Bangladesh sample)

- **Fragile heroes.** Video embeds with no poster (Balishira's "Video unavailable", Aman's player error in capture), preloaders that block everything (Pacuare, Kazi), and heavy overlays that bury the photo (Sarah, Kamalaya).
- **Copy that breaks trust.** Template placeholders left live (Novem), copy from another country (Paragon's "Blue Ridge Mountains"), spelling errors (Sreemangal Inn), contradictory positioning (Sayeman: "luxury" and "low-budget"), and SEO keyword stuffing in visible headings (Namir, Kazi).
- **Uniform-weight grids.** Every section is a card grid of equal size with icons (Grand Sultan's orange line icons, Novem's rainbow tiles). Nothing is emphasised, so nothing feels special.
- **Competing calls to action.** A "Special offer" tab, a WhatsApp float, a phone FAB, a booking modal on load and a "Book now" button all at once (Sreemangal Inn, Grand Sultan).
- **Low contrast mistaken for elegance.** Ultralight grey on cream (Ikos) and near-invisible navigation over photos (The Palace).
- **Stock clip-art.** A router photo for "Wi-Fi", an aeroplane for "airport pickup" (Sampan).

### 1.3 What improves luxury perception
Space; a serif voice; captions; facts instead of adjectives; one deep accent colour; slow, few transitions; human scale in photos (a cup, a hand, a chair on a veranda); local specificity (Resplendent's tea hand; Mermaid's named cottages; Chuti's "firefly processions… full moon and rain").

### 1.4 What improves booking conversion
Dates and guests reachable within one tap on every page; prices visible before the form; clarity on what's included (Explora's "What's included" strip); a human channel next to the machine one (Singita's "Plan your trip", NIHI's WhatsApp, Blackberry's "Schedule a call"); and offers with concrete terms (Gleneagles' "2 nights or more · now–January 2027 · breakfast included").

### 1.5 Layouts that now look dated
Boxed layouts with sidebars (Hotel Agrabad, Bhawal), caps-serif everything (Datai, Uga), checkerboard image/text tiles (Sreemangal Inn, Sayeman), rounded-blob image masks (Grand Sultan), and icon-bento amenity grids (Novem).

### 1.6 Motion
- **Feels premium:** slow cross-fades; a hero that settles (slight scale-down) on load; images revealed by a mask *once*; a header that changes from transparent to solid on scroll.
- **Feels gimmicky:** rotating circular text badges (Sarah), a megaphone "Special offer" wiggle (Grand Sultan), auto-advancing sliders, and content that stays invisible until scroll animations fire (NIHI, Fife Arms and Habitas painted blank in our capture).

### 1.7 How much the homepage exposes
The best homepages are **tasting menus**: 7–10 sections, each with *one* idea and *one* link onward. Booking appears 2–3 times (hero, rooms, end). Rooms appear as types, not every room. Dining appears as one place and one dish, not a menu.

### 1.8 Mobile
The best mobile versions changed behaviour, not just layout. Brando's booking becomes a bottom sheet with steppers; Rosewood adds a sticky bottom Reserve bar; Capella collapses its nav into "MENU · ✶ · BOOK"; Fogo shortens the hero to ~45% so the headline and CTA appear without a scroll. Weak mobile versions just stack the desktop (Grand Sultan's 10 identical room cards).

### 1.9 Photograph sequencing
Strong sites alternate *wide → close → human → wide*: landscape, then a detail (a hand, a bowl), then architecture, then a person seen from behind. They never put two similar shots side by side. Night and dusk images go late in the page.

### 1.10 Room presentation
Two models work. (a) **Type tabs controlling one large image** (Capella, Sarah), which is compact and good for 3–6 types. (b) **Individual large tiles with name + floor/size** (Fogo). Detail pages that win answer, in order: *what it feels like → size/occupancy/bed/view → what's included → check-in/out → floor plan → book → two alternatives*.

### 1.11 Offers, dining, experiences, footer
- **Offers:** a fact bar (nights · validity · inclusions) plus terms, with a phone alternative.
- **Dining:** each outlet gets a one-line character and its meal periods; one great dish photo beats a gallery.
- **Experiences:** cards with duration, season and price (Four Seasons); specific names, not categories ("Sundowner by zipline", not "Adventure").
- **Footer:** address, separate numbers by purpose (reservations / events), "Get directions", social, legal. Dark-green or near-black footers dominated our sample.

---

## Part 2 — Our concept: **Kuasha** (কুয়াশা, "mist")

### 2.1 The fictional property (demo content, labelled as such on the site)
A 22-room retreat on a 48-acre former tea-garden section outside Sreemangal, Moulvibazar. It has shade-tree avenues, a small lake, a long brick-and-timber dining veranda, a pool and a bath house. It sits about 4 hours by road from Dhaka and 15 minutes from Sreemangal railway station.

Why Sreemangal: it is Bangladesh's most established premium leisure destination outside Cox's Bazar. It has a clear identity (tea, mist, forest, lakes, birds), real seasons to design around, and local precedents with weak websites (Grand Sultan, Paragon, Novem, Balishira), so a sales demo has an obvious audience. The template is built so it can be **rebranded for a beach or a near-Dhaka property** by editing one data file.

The name is a common Bangla word, used in Bangla script in the wordmark, so it reads as local immediately (Chuti's Bangla logo showed this works). **Before reusing the name with a real client, check it against existing businesses and trademarks.** We did not find a resort with this name in a web search, but that is not a clearance.

### 2.2 Positioning line
"A quiet house in the tea hills of Sreemangal." It is restrained, factual and specific: no "luxury", no "escape", no "unforgettable".

### 2.3 Information architecture
| Page | Why it exists |
|---|---|
| Home | Narrative tasting menu (below) |
| Stay | 4 room types, comparison table, inclusions |
| Stay / [room] ×4 | Detail pages built on the answer-order in 1.10 |
| Days here (experiences) | Experiences with duration, season and price, plus the bath house (wellness folded in, since a 22-room resort doesn't need its own spa site) |
| Dining | The Long Veranda, the tea room, private dinners |
| Gatherings | Holud and wedding nights, family reunions, company retreats: capacities and enquiry |
| Offers | 4 offers including a Day at Kuasha |
| Gallery | Filterable, with a keyboard-accessible lightbox |
| Visit | Getting here (road, train, air), seasons, policies, FAQ, contact |
| Book | Simulated availability, then a stay request |
| About this demo | Photo credits, what is sample content, how it maps to a real resort |

Not built: blog, separate spa site, membership, shop, careers. These are overbuild for the brief.

### 2.4 Homepage narrative (rhythm: wide → statement → detail → choice → breath → doing → taste → time → reasons → logistics)
1. **Hero:** full-bleed misty shade-tree avenue. Wordmark, one-line positioning, a caption naming the scene. Desktop: booking bar docked at the bottom edge. Mobile: hero at 88svh with "Check dates" and the location line.
2. **Statement + facts:** a large serif sentence on the left, the fact list (rooms, acres, hours from Dhaka, minutes from the station) on the right.
3. **Detail pair:** a brick veranda (architecture) beside tea leaves (close), asymmetric, with a caption.
4. **Stay:** room-type tabs controlling one large image, with spec line, "from ৳" and links. On mobile it becomes a swipeable rail.
5. **Breath:** a full-bleed estate image with one line.
6. **Days here:** a horizontal rail of portrait cards, each with duration, season and price.
7. **Taste:** a dark band. The Long Veranda dish photo, a short list of dishes (bhorta platter, hilsa in mustard, shatkora beef), and the tea pour.
8. **Seasons:** four columns (Winter mist, First flush, Monsoon, Autumn), each with what's on and an honest note ("roads can be slow in July").
9. **Offers:** two offers with fact bars.
10. **Gatherings:** holud hands image and capacity facts, with enquiry.
11. **Getting here:** a drawn route diagram (Dhaka → Sreemangal by road, train and air) with times, local time in Sreemangal, and contact.
12. **Footer.**

### 2.5 Booking and inquiry model (your choice: simulated availability)
- **Entry points:** the header button on every page, the hero bar on Home, the room pages' "Check this room", offer CTAs, and the mobile bottom bar.
- **Flow (/book):** ① dates and guests (two-month calendar with nightly "from" prices; a few nights shown sold out; a 2-night minimum on Fri–Sat; children with ages) → ② choose a room (available / "2 left" / not available for these dates, with the price per night and the total) → ③ extras (station or airport pickup, driver's room, dinner by the lake, occasion setup) and guest details → ④ review and **send request** → confirmation with a reference number and the *real-world next step*. The reservations team confirms by phone or WhatsApp within the hour (09:00–22:00), and a 50% advance by bKash, Nagad, card or bank transfer secures the stay.
- Every booking screen carries a small "Demo: availability is simulated" label. This matches how BD resorts actually take bookings (observed at Novem and Chuti), and it can be wired to a real engine later (SynXis, Cloudbeds, eZee) without changing the front-end.
- **Parallel human channels:** WhatsApp (pre-filled with the stay details), Call, and a "Prefer to talk? We'll call you" option inside the flow. In the demo, these open an explanatory notice instead of dialling fake numbers.

### 2.6 Responsive behaviour
| | Desktop ≥1100 | Tablet 700–1099 | Phone <700 |
|---|---|---|---|
| Header | Wordmark centre-left, 5 links, phone, "Check availability" | Wordmark, Menu, Book | Wordmark, Menu |
| Booking entry | Bar docked to hero bottom + header button | Header button | Bottom action bar (Call · WhatsApp · Check dates) shown after the hero |
| Booking UI | Page with side summary | Page, stacked | Page, single column, sticky "Continue" |
| Rooms on Home | Tabs + large image | Tabs + image | Swipe rail |
| Experiences | Rail with arrow buttons | Rail | Rail (scroll-snap) |
| Hero | 100svh, text bottom-left | 92svh | 88svh, art-directed crop |

### 2.7 Visual identity summary (full detail in `DESIGN_SYSTEM.md`)
- **Palette:** warm paper cream, deep tea green, near-black ink, and a terracotta "clay" accent taken from brick and clay tea cups, used sparingly.
- **Type:** Newsreader (variable serif, optical sizes, real italics) for voice; Hanken Grotesk for UI and body; Noto Serif Bengali, loaded only for the wordmark's glyphs.
- **Motif:** "tea rows", a set of fine parallel contour lines drawn from aerial views of tea gardens. It is used as a divider and a background texture at 6–10% opacity, never as decoration on photos.
- **Shapes:** square corners (2px), hairline rules, no shadows except on overlays.

### 2.8 Motion rules
Few and slow. The hero settles from 1.06× to 1× over 2.4 s. Key images reveal by mask, once. Content fades up 16 px. The header transitions on scroll, and the menu and booking sheet slide. Content is **visible by default** and only animated when JS is present and `prefers-reduced-motion` is not set. There is no parallax, no scroll-jacking, no cursor effects and no auto-advancing sliders.

---

## Part 3 — Where this direction disagrees with the brief

1. **"Use browser heavily; 20–30 + 10–20 sites."** Done: 30 + 19 homepages, plus inner pages and flows. Past roughly the 15th international site, new patterns stopped appearing. The value came from depth on about 10 sites (inner pages, booking flows), not from the count.
2. **Simulated availability.** You chose it, and it is built. It must never be presented to a resort owner as a working engine: it is labelled on every booking screen, and the client summary explains the upgrade path. If a buyer asks "is this live?", the answer is no. The design is ready for their channel manager.
3. **Hero video.** Not used. 12 of 14 top international sites use one, but the failure rate in capture was high, the demo has no real footage, and BD mobile data costs make a 5–15 MB hero a conversion risk. The component accepts a video plus a poster for a real client.
4. **Testimonials, awards, review counts.** None, per your rules. Slots are documented so a real client's verified reviews can be added.
5. **"Experience page" as a separate wellness, facilities and activities set.** These are merged into one *Days here* page. A 22-room resort with four separate pages looks thin on each.
6. **Bangla.** Not in v1, because no BD competitor does it and copy quality matters more than coverage. It is the strongest phase-2 upsell.
7. **Photography.** Free-licence photos cannot honestly show *one* Bangladeshi property. The set mixes tea-garden landscapes found under Sreemangal and Sylhet searches (locations not verified) with architecture and interiors from elsewhere in Asia, chosen for one material palette (brick, timber, thatch, white linen) and colour-graded together. This is disclosed on the site and in `IMAGE_STRATEGY.md`. For a real pitch, the biggest single upgrade is a one-day professional shoot of the client's property.
