# Hospitality Website Research

Research for the Kuasha concept website: a demo/sales site for Bangladeshi resorts.
Captured **4 October 2026** from a cloud workspace.

## Method (what was actually done)

- **Live visual capture.** Each site was opened in a real Chromium browser (Playwright) at **1440×900 desktop** and **390×844 mobile (iPhone UA, 2× DPR)**. Cookie banners were dismissed where possible. The page was scrolled through to trigger lazy-loading, then a full-page screenshot was taken. The screenshots were reviewed visually as contact sheets.
- **Bot-protected sites** (Six Senses, Four Seasons, The Peninsula Chittagong) were captured through a remote stealth browser (TinyFish). Sites that stayed blocked on both routes are marked **Not verified**.
- **Inner pages:** room lists, room details, dining, offers, weddings and contact pages were captured for 11 of the strongest international sites.
- **Booking flows:** the primary Book/Reserve CTA was clicked on 8 international and 5 Bangladeshi sites (desktop + mobile), and the resulting screen was captured.
- **Page source** of 12 Bangladeshi sites was scanned for WhatsApp/Messenger links, payment gateways, structured data and analytics tags.
- In total: **30 international + 19 Bangladeshi homepages** (desktop + mobile), **36 international inner pages**, **26 booking-flow screens**.

### Honesty notes

- **Observed** = seen in our own capture. **Inferred** = professional judgement drawn from what was observed. **Recommendations** appear only in `DESIGN_DIRECTION.md`.
- Headless captures sometimes fail to paint hero videos, lazy images or scroll-triggered content. Where that happened it is written down, and the visual is **not judged**. A blank area in our capture can be a capture artefact rather than a site bug. Where the same failure appeared on both viewports *and* the site used a pattern known to be fragile (a video with no poster, a blocking preloader, reveal-on-scroll content hidden by default), it is noted as a *risk*, not a proven defect.
- Mobile was emulated, not tested on physical devices.
- Screenshots of every homepage fold (desktop + mobile side by side) are in `docs/research-screens/`. Full-page captures were kept in the working directory, not the repo, because of their size.

## Index of sites

### International (30)

| # | Property | Location | Type | URL | Captured |
|---|---|---|---|---|---|
| 1 | Amanpuri (Aman) | Phuket, Thailand | Luxury beach resort | aman.com/resorts/amanpuri | D+M |
| 2 | Six Senses Laamu | Maldives | Island / wellness | sixsenses.com/en/resorts/laamu | D+M (remote) |
| 3 | Soneva Fushi | Maldives | Island / family / eco | soneva.com/resorts/soneva-fushi | D+M + 5 inner + booking |
| 4 | Rosewood (brand home) | Global | Brand | rosewoodhotels.com | D+M (property URL redirected) |
| 5 | Four Seasons Koh Samui | Thailand | Five-star brand resort | fourseasons.com/kohsamui | D only (mobile blocked) |
| 6 | The Datai Langkawi | Malaysia | Rainforest resort | thedatai.com | D+M + 2 inner |
| 7 | Capella Ubud | Bali | Jungle tented camp | capellahotels.com/en/capella-ubud | D+M + 3 inner + booking |
| 8 | NIHI Sumba | Indonesia | Remote island | nihi.com | D+M |
| 9 | Ett Hem | Stockholm, Sweden | Boutique townhouse | etthem.se | D+M |
| 10 | Singita | Southern & East Africa | Safari lodges | singita.com | D+M (partial) |
| 11 | Inkaterra | Peru | Eco-lodges | inkaterra.com | D+M |
| 12 | Pacuare Lodge | Costa Rica | Rainforest eco-lodge | pacuarelodge.com | D+M (did not render) |
| 13 | The Brando | French Polynesia | Private island | thebrando.com | D+M + 4 inner + booking |
| 14 | Fogo Island Inn | Newfoundland, Canada | Remote design inn | fogoislandinn.ca | D+M + 4 inner + booking |
| 15 | Explora | Chile/Peru/Bolivia | Expedition lodges | explora.com | D+M |
| 16 | Kamalaya | Koh Samui, Thailand | Wellness | kamalaya.com | D+M |
| 17 | Uga Escapes | Sri Lanka | Resort group | ugaescapes.com | D+M |
| 18 | Resplendent Ceylon | Sri Lanka | Tea-country + coast group | resplendentceylon.com | D+M + 4 inner + booking |
| 19 | The Oberoi Udaivilas | Udaipur, India | Palace resort | oberoihotels.com | D+M (images unpainted) |
| 20 | Ananda in the Himalayas | India | Wellness | anandaspa.com | D+M |
| 21 | Post Ranch Inn | Big Sur, USA | Cliff-top boutique | postranchinn.com | D+M + 3 inner + booking |
| 22 | Blackberry Farm | Tennessee, USA | Farm estate | blackberryfarm.com | D+M + 2 inner + booking |
| 23 | HOSHINOYA | Japan | Brand / ryokan resorts | hoshinoya.com/en | D+M |
| 24 | Gleneagles | Scotland | Estate hotel | gleneagles.com | D+M + 5 inner + booking |
| 25 | Ikos Resorts | Greece/Spain | All-inclusive family | ikosresorts.com | D+M |
| 26 | Cap Juluca, A Belmond Hotel | Anguilla | Beach resort | belmond.com/…/belmond-cap-juluca | D+M + 4 inner (incl. booking engine) |
| 27 | Our Habitas | Middle East / Mexico | Design resorts | ourhabitas.com | D+M |
| 28 | The Fife Arms | Braemar, Scotland | Art hotel | thefifearms.com | D+M |
| 29 | Song Saa Collective | Cambodia | Island / regenerative | songsaa.com | D+M |
| 30 | Shinta Mani Wild | Cambodia | Tented jungle camp | shintamani.com/wild | M only (desktop bot wall) |

Attempted but **Not verified** (blocked on every route): Cheval Blanc Randheli and Taj Exotica Goa (replaced by Song Saa and Shinta Mani Wild). JOALI returned an empty page and was dropped.

### Bangladesh (19 captured)

| # | Property | Location | Category | URL |
|---|---|---|---|---|
| 1 | Grand Sultan Tea Resort & Golf | Sreemangal | Five-star resort | grandsultanresort.com |
| 2 | The Palace Luxury Resort | Bahubal, Habiganj | Five-star resort | thepalacelife.com |
| 3 | Balishira Resort | Sreemangal | Resort | balishiraresort.com |
| 4 | Novem Eco Resort | Sreemangal | Eco resort | novemecoresort.com |
| 5 | Paragon Hotel & Resort | Sreemangal | Resort | paragonresortbd.com |
| 6 | Sreemangal Inn | Sreemangal | Town hotel | sreemangalinn.com |
| 7 | Sayeman Beach Resort | Cox's Bazar | Heritage beach hotel | sayemanresort.com |
| 8 | Hotel Sayeman (group splitter) | Cox's Bazar | Group | sayeman.com |
| 9 | Mermaid Beach Resort | Pechar Dwip, Cox's Bazar | Boutique eco | mermaidbeachresort.net |
| 10 | Mermaid Eco Resort | Cox's Bazar | Eco | mermaidecoresort.com |
| 11 | Sampan Beach Resort | Marine Drive, Cox's Bazar | Mid-range resort | sampanresort.com |
| 12 | Kazi Resort | Kapasia, Gazipur | Day-out / corporate | kaziresort.com |
| 13 | Turag Waterfront Resort | Gazipur | Riverside resort | turagwaterfrontresort.com |
| 14 | Sarah Resort | Gazipur (Bhawal Rajbari estate) | Large nature resort | sarahresort.com |
| 15 | Chuti Resort | Gazipur | Eco resort | chutiresort.com |
| 16 | Namir Green Resort | Gazipur | Day-long / packages | namirgreenresort.com |
| 17 | Bhawal Resort & Spa | Gazipur | Resort & spa | bhawalresort.com |
| 18 | The Peninsula Chittagong | Chattogram | City business hotel | peninsulactg.com |
| 19 | Hotel Agrabad | Chattogram | City hotel | agrabadhotels.com |

**Not verified** (unreachable from both routes): Sea Pearl Beach Resort & Spa (Cloudflare challenge), Nazimgarh Resorts, Ocean Paradise, Long Beach Hotel, Lemon Garden Resort.

Note on coverage: many Bangladeshi properties' main channel is a Facebook page, which we did not audit (login walls). That is itself a finding: for many local resorts, Facebook *is* the website.

---

# Part A — International sites (homepages)

## Amanpuri (Aman) — Phuket, Thailand — https://www.aman.com/resorts/amanpuri
- Observed (desktop+mobile, headless Chromium): Hero is a video embed; in our capture it showed a "Player error" grey box (desktop & mobile). No poster fallback visible. Group homepage aman.com showed the same failure.
- Observed: Warm off-white (#F2EEE8-ish) background throughout, Lyon Display/Text serif headings + Whitney sans small caps labels. Two-tier header: global bar (Menu, search, language, dark "Reserve" button) + property sub-nav (Gallery, Accommodation, Festive, Experiences, Dining, Wellness, Celebrations, Residences, Exclusive Offers, Getting Here, Contact Us).
- Observed: Intro = small uppercase location label "PHUKET, THAILAND" → serif name → 2-line paragraph, centred, narrow measure. Then a full-bleed architecture photo (Thai pavilion roof in jungle).
- Observed: Accommodation shown as 2 columns (Pavilions / Villas) with eyebrow label, title, 2-line text, "View all accommodation" + "Book now" text links. Wellness / Celebrations / Dining as a 3-col text row. "Getting here" with Mapbox map, address, airport + "30-minute drive", "Get directions". Then "Nearby resorts".
- Observed mobile: Reserve becomes a full-width dark bar directly under intro paragraph. Hamburger + centred wordmark + search.
- Observed: Lots of empty space where lazy images/carousels had not loaded in some bands (our capture), i.e. the page leans heavily on JS-loaded imagery.
- Inferred — weakness: Video hero with no visible fallback → first impression can be a broken grey box. Lesson: never ship a video hero without a poster image.
- Inferred — worth learning: restraint; text links rather than buttons; small-caps eyebrow labels; "Getting here" given real estate with drive time.
- Inferred — do not copy: Aman's extreme sparseness relies on brand recognition; an unknown BD resort can't afford to say so little.

## Six Senses Laamu — Maldives — https://www.sixsenses.com/en/resorts/laamu
- Access: blocked from our container (Access Denied); captured via remote stealth browser (TinyFish). Desktop + mobile.
- Observed: Hero video (rendered black in capture), centred serif title "Six Senses Laamu" + "Laamu Atoll, Maldives" + "Play full video" circle button. White booking bar pinned to bottom of hero: Check-in → Check-out | 2 Adults, 0 Children | Special codes | purple SEARCH pill.
- Observed: Header: hamburger, language EN, centred logo, outlined LOGIN pill + white BOOK NOW pill.
- Observed: Newsletter modal popped over the hero within seconds.
- Observed: Intro section: serif H2 "An atoll utopia where sumptuous meets sustainable" + paragraph left; contact block right (address, email, phone). Utility row: local time, how to get there, "12 experiences".
- Observed: Hand-drawn line illustrations (staff caricatures, map of the atoll) mixed with photography — distinctive brand device. Sustainability (Maldives Underwater Initiative) given an early homepage slot.
- Observed: Full-bleed carousel with caption overlay ("A barbecue grilled by your personal chef…"), "Our Journal" stories, Accommodation section with overhead villa photo, Destination with illustrated map + accordions (When to visit / How to get there / What to do).
- Mobile: same hero; "BOOK NOW →" text link top-right; no hero booking bar visible in fold.
- Inferred — weakness: newsletter modal over hero within 5s; purple pill buttons feel corporate; hero empty if video fails.
- Inferred — worth learning: local time + "how to get there" utility row; illustrated destination map as a brand asset; booking bar docked to hero bottom on desktop only.

## Soneva Fushi — Baa Atoll, Maldives — https://soneva.com/resorts/soneva-fushi/
- Observed (desktop+mobile): Two-tier header on warm cream: "Menu" hamburger left, wordmark "SONEVA FUSHI / MALDIVES" centred, small dark brick-red "Book" square button right; secondary text nav (Villas, Experiences, Wellbeing, Soneva Stars, The Den, Dining, Offers).
- Observed: Hero = full-width photograph/video still of two children walking down a jungle sand path seen from behind — candid, human, film-grain colour. Booking widget inset at bottom of hero: translucent dark bar "Dates 4 Oct–11 Oct 2026 | Guests 1 adult • 0 children | [search]". Dates pre-filled with a 7-night default.
- Observed mobile: Same hero crop; booking bar shrinks to Dates + search icon only; "Book" button stays in header.
- Observed: Intro "The Soulful Playground" small label → large centred serif-ish paragraph (~4 lines) as a statement. Then full-bleed close-up of a chef's hands with a wooden bowl of greens (food provenance).
- Observed: "Our Villas": three villa types as text columns with feature micro-labels ("Beach access • Jungle setting") and one-line poetic descriptors.
- Observed: Experience switcher — a vertical list of large text tabs (Discovery / Family / Wellbeing / Dining / Seasonal Moments) with images changing beside it (observatory dome at night). Editorial asymmetric layout.
- Observed: "Your Hosts" — named staff portraits (Nuha, The Den Manager). Festive section. Awards row (50 Best Hotels logo). Bottom repeat of booking bar over image ("Just What Matters.").
- Fonts: Scto Grotesk (sans) + Moulin (display). Note: font files load as "Trial" — observed in computed font-family names.
- Inferred — worth learning: candid lifestyle hero over posed architecture; staff named as hosts (trust + warmth); experience tab-list; pre-filled realistic dates; booking repeated at page end.
- Inferred — weakness: very low-contrast grey body text on cream; small type sizes on desktop (~13px observed visually).

## Rosewood (brand site) — https://www.rosewoodhotels.com/en/mayakoba → redirected to global homepage
- Note: the Mayakoba property URL redirected to the Rosewood global home in our capture; property page NOT verified.
- Observed: Hero region blank in capture (video/JS slideshow did not render) with a lone "DISCOVER" black button — another fragile-hero example. Accessibility widget icon bottom-right. Mobile shows sticky full-width dark-green "RESERVE" bar at bottom of viewport.
- Observed: Header = centred wordmark row, then a ruled row with region selector "GLOBAL", serif nav, dark-green "RESERVE" square button. Typography: Austin (serif, italic accents "A world of *culture* awaits", "The *Autumn* Reset") + Engravers Gothic for wide-tracked caps labels.
- Observed: Experiences as a horizontal card rail with small black DISCOVER buttons under each. "Your Next Vacation" property carousel. A shop section ("The Rosewood Edit" candle/clothes). Footer with mailing list CTA.
- Inferred — worth learning: italic serif word accent inside headings is elegant when used once per heading; mobile sticky bottom Reserve bar.
- Inferred — do not copy: too many small black buttons repeating "DISCOVER" — reads repetitive; retail shop irrelevant for a single BD resort.

## Four Seasons Resort Koh Samui — Thailand — https://www.fourseasons.com/kohsamui/
- Access: blocked locally; desktop captured via remote browser. Mobile: "Access Denied" even remotely → mobile NOT verified.
- Observed (desktop): Dark transparent header over video still (group dining on a terrace — people, wine, sea view). Property name in wide-tracked caps sans "FOUR SEASONS RESORT KOH SAMUI"; nav in small tracked caps (Resort Overview, Accommodations, Villa & Residence Rentals, Experiences, Offers, More...). White "CHECK RATES" button. Utility row: All hotels, Sign in, English, USD, Cart.
- Observed: Bottom-left hero title — italic serif "Four Seasons Resort" over wide caps "KOH SAMUI", then full street address in tracked caps.
- Observed: After scroll, a full booking strip appears under header: Check-in–Check-out (pre-filled 10/04/2026–10/05/2026), Guests (1 Room – 2 Adults), Promo Code, CHECK RATES, "Hide" link.
- Observed: Large cookie banner covering ~25% of the fold.
- Observed: Accommodations as a centred carousel with focused card (Serenity Pool Villa, text, CHECK RATES + DETAILS) and 1/10 counter. Featured Offers as 4 small square image tiles with offer names ("Advance Purchase – Up to 20% Off", "Bed and Breakfast"). "Discover Koh Samui" experience cards with duration ("7 hours", "90 min, 120 min"), availability ("All year round"), and price "From USD 2,068" / "From USD 209/person". Destination storytelling ("Train like a fighter", "Local gems", "Unpacking list") as alternating image/text.
- Inferred — worth learning: experience cards with duration + starting price = very useful decision data; offers as named, concrete deals; booking strip that appears after hero.
- Inferred — weakness: overall looks corporate/system-designed — grey boxes, many small caps, heavy chrome. Effective but not intimate.

## The Datai Langkawi — Malaysia — https://www.thedatai.com/
- Observed (desktop+mobile): Grey-tinted page (cookie overlay dims everything). Minimal header: hamburger, "D" monogram, "BOOK NOW" text. Hero = inset (not full-bleed) image slider with double-chevron arrows; aerial of rainforest-covered mountains with resort barely visible — sells nature scale, not buildings.
- Observed mobile: hero becomes a small inset landscape image (~1/4 viewport) — weak first impression on phone.
- Observed: Section titles in caps serif between hairline rules ("THE DATAI LANGKAWI", "SUBSCRIBE", "CONNECT WITH US"). 2-up and 3-up image cards (Accommodation, Sustainability – The Datai Pledge, Spa, Dining, Golf, Special Offers, Nature at The Datai) each with caps label + paragraph + "EXPLORE …" text link. A guest/author quote in centred caps (Max Wallis). Instagram grid. Footer with Leading Hotels logo.
- Font: Arnhem serif used for everything.
- Inferred — weakness: dated; caps-serif body + identical card grid = 2015 feel; everything same visual weight; mobile hero too small.
- Inferred — worth learning: nature-scale aerial establishing shot (resort as speck in rainforest) — very relevant for a forest/tea-garden BD property.

## Capella Ubud — Bali, Indonesia — https://capellahotels.com/en/capella-ubud
- Observed desktop: fold rendered blank white (hero video/JS not painted in capture) + cookie banner; NOT verified as a hero. Rest of page captured.
- Observed mobile hero: full-height dark-blue-tinted jungle photo with tent canopy, centred star logo + "CAPELLA / UBUD, BALI", chevron + "WATCH VIDEO". Below: sticky mini-bar "MENU · ✶ · BOOK".
- Observed: Header with two rows: English, Destinations, logo, Experiences, grey "BOOK YOUR STAY" button; sub-nav (Keliki our home, Culture, Accommodation, Dining, Wellness, Weddings & Private Events, Offers, Gifts).
- Observed: Title "CAPELLA UBUD, BALI" in light caps serif (Goudy) left-aligned; two-column intro: large serif lede left ("A balance of tranquillity and adventure. Let the everyday fade away...") + small sans paragraph right with "RESORT PROGRAMMING" link. Asymmetric image pair (large aerial of tents in jungle + small backlit fern).
- Observed: Accommodation = text tabs (Keliki Tent / Valley Tent / Forest Tent / Terrace Tent / Two Bedroom Lodge) driving one large image + description + "VIEW THIS TENT". "BOOK YOUR STAY" grey block with illustrated key-fob graphic — "Let us create your perfect stay. Contact the … reservations team". Offers as 3 portrait images with names (A Season of Giving / Jungle Family Escape / Culinary Journey). Awards (Travel+Leisure, Michelin Guide 2026 keys, Tatler) and Sustainability certifications as logo grid. Contact block with full address, phone, email, "VIEW FACTSHEET".
- Inferred — worth learning: room-type tabs controlling one big image (compact, scales to 5 types); contact block with real phone+email on homepage; "factsheet" download for agents/corporate.
- Inferred — weakness: awards section is a logo dump; grey "Book your stay" box feels unfinished.

## NIHI Sumba — Indonesia — https://nihi.com/
- Observed (desktop+mobile): Full-bleed aerial hero (coastline, surf, thatched villas in forest) with large white serif headline "Edge of Wildness" + caps tagline "REMOTE BY NATURE. REFINED BY DESIGN." + "The Destinations / EXPLORE BELOW" scroll cue. Outlined "RESERVE" button top-right, "RESORT" selector top-left.
- Observed: Floating green WhatsApp button bottom-right on BOTH desktop and mobile — a top-tier luxury resort using WhatsApp as a primary contact channel.
- Observed mobile: bottom utility bar inside hero: Contact Us / Getting Here / Share icons; Michelin badge peeking.
- Below-fold content did NOT render in our captures (scroll-animated content stayed invisible) → NOT verified. Lesson for us: content that depends on scroll-triggered JS to become visible is fragile; reveal animations must default to visible.
- Inferred — worth learning: WhatsApp float is acceptable even at the top luxury tier when styled quietly; headline-over-aerial works when the photo has a calm sky area for text.

## Ett Hem — Stockholm, Sweden (boutique townhouse hotel) — https://www.etthem.se/
- Observed (desktop+mobile): The entire homepage is a single screen: warm grey background, hand-drawn ink illustration (woman lying under a green lamp), custom display wordmark "ETT HEM" in ochre, one line: "For people looking for something more personal than the luxury hotel", scroll arrow, then SLH + Tatler badges, "Get in touch" email + phone, footer (Find us, Instagram, Gift card). Two outlined buttons top-left: "BOOK A ROOM" / "BOOK A TABLE".
- Observed: No photography at all on the homepage.
- Inferred — worth learning: a single, honest positioning sentence can carry a brand; separate "book a room" vs "book a table" CTAs when restaurant is a draw.
- Inferred — do not copy: illustration-only works for a famous 12-room townhouse with press coverage; an unknown BD resort needs photographs to earn trust.

## Singita — South Africa / Tanzania / Zimbabwe / Rwanda (safari lodges) — https://singita.com/
- Observed desktop fold: full-bleed video still — camp chairs and kettle on fire in foreground, elephant herd in background (depth layering), large white serif "Place of Miracles", small "with nature as our guide". Header: script logo, "Our Collection", coral "Plan your trip" button, Search, Menu.
- Desktop full-page capture returned the site's own error page ("Something went wrong") after scrolling; mobile capture rendered with CSS partly missing (unstyled list). Below-fold layout NOT verified visually.
- Observed (content, from mobile DOM): "Explore our unique collection" with country filter chips (All / South Africa / Zimbabwe / Tanzania / Rwanda / Botswana); "Our in-house Journey Designers offer expert end-to-end travel planning" with Contact Us; a check-availability form (Regions, Lodges, Dates pre-filled, Guests 2); conservation purpose quote.
- Inferred — worth learning: "Plan your trip" (consultative) instead of "Book now" fits high-ticket, complex stays — a human designs the itinerary. Very relevant to BD where guests expect to talk to someone.
- Inferred — worth learning: foreground-object + background-landscape hero composition creates depth and "you are here" feeling.

## Inkaterra — Peru (eco-lodges group) — https://www.inkaterra.com/
- Observed desktop: Header strip with logo, dropdown nav (Our Properties, Nature, Media, E-Gift Card, Special Offers) and bright magenta "BOOK NOW" block. Hero = native HTML5 video player WITH visible controls bar (0:00, volume) — aerial of Amazon river in mist; "50 since 1975" seal overlay.
- Observed: "Welcome to Inkaterra Hotels" text left + 3 property thumbnails right; "Itineraries" full-bleed photo band (guide with binoculars in cloud forest); "Explorer Guides" + "Asociación (NGO)" tiles; map of Peru with property list by region; "Stories" journal cards with read time; newsletter form; Virtuoso + UN ecosystem logos.
- Inferred — weakness: visible video controls on hero, magenta CTA, justified body text, boxed cards with borders — dated/template feel.
- Inferred — worth learning: naturalist guides as named, photographed people; stories with dates/read time show a living property.

## Pacuare Lodge — Costa Rica (rainforest eco-lodge) — https://www.pacuarelodge.com/
- Observed (desktop+mobile): Page stuck on loading spinner; hero/body images never painted in either capture; only nav (Suites, Experiences, Nairi Awari, Restaurant, Lodge, Contact), "View Suites" button, headings "Live the Experience of a Lifetime at Pacuare Lodge", "Discover Costa Rica the Böëna Way", and footer with toll-free USA/UK numbers + Costa Rica number rendered.
- Visual quality NOT verified. Observed failure itself is the lesson: a preloader that blocks the whole page = blank site when anything fails. Also generic copy ("Experience of a Lifetime").
- Inferred — worth learning (content): toll-free numbers per source market in footer.

## The Brando — Tetiaroa, French Polynesia — https://thebrando.com/
- Observed desktop: cream header (serif wordmark "THE BRANDO" left; tracked caps nav: The Atoll, Experiences, Resort, Stewardship, Events, Gallery, News & Offers, Contact; hamburger; outlined teal "RESERVE" pill). Hero = aerial video still: a turquoise reef channel cutting through a palm forest, two kayaks tiny in frame (scale + human presence).
- Observed: Directly below hero, an inline booking strip on cream: italic "Book your stay" | ARRIVAL/DEPARTURE (pre-filled 03-10-2026 / 04-10-2026, underlined) | GUESTS "No. of guests" | outlined CHECK AVAILABILITY. Followed by an olive-green full-width promo band "Book Early & Save — Enjoy more for less with our early booking offer [SEE MORE]".
- Observed MOBILE: Our capture caught the booking UI as a bottom sheet/drawer: grab handle, "Book your stay" serif title, close (x), month calendar (October 2026, today highlighted teal), GUESTS steppers (Adults 2 / Kids 0 / Infants 0 with − / + circles), full-width teal "CHECK AVAILABILITY" button. Clear, thumb-friendly — best mobile booking UI seen so far.
- Observed: Long editorial sections — centred serif H2s ("An extraordinary world forged by the elements, preserved by coral reefs"), short rule, two-column body, teal caps text link. Polynesian tattoo-pattern ornaments as faint background motifs. (Many images below fold were not yet painted in capture.)
- Inferred — worth learning: mobile booking as a bottom sheet with steppers; ornamental motif derived from local craft (BD equivalent: nakshi kantha stitch, shital pati weave, terracotta) used faintly; promo band directly below booking strip.
- Inferred — weakness: very long text-heavy scroll; teal + olive + cream palette slightly busy.

## Fogo Island Inn — Newfoundland, Canada — https://fogoislandinn.ca/
- Observed (desktop+mobile): full-bleed hero video still: the inn on stilts at golden hour on a rocky coast, waves in foreground. Relais & Châteaux + Michelin Guide 2026 badges bottom-left; small caption box bottom-right "Berry Season on Fogo Island — Wild Skies and Coastal Walks" (what the video shows now). Header: lowercase sans wordmark "fogo island inn", dropdown nav (Our Inn, Destination, Your Stay, Food & Drink, News), Shop, navy "Reserve" button.
- Observed: After hero: 2-column — large sans headline "Entangled with nature, rooted in community" + paragraph about 100% surpluses reinvested in community + outlined "Select Your Dates". Then a split section: architecture photo + sunset with "Wild within reach" + "Find Your Way Here". "All-Inclusive Hospitality — 29 one-of-a-kind rooms … See rates & inclusions". Room photos 2-up. Food: horizontal strip of 5 square food/forage photos (hands picking radishes, cocktail, plated fish). Things to do as a 3x2 grid of tall portrait cards (Kayaking, Hiking, Wildlife Excursion, Rooftop Hot Tubs, Island Orientation, Bushcraft) with "Learn More". "Travel with purpose". News grid.
- Mobile: hero shrinks to ~45% height; headline + "Select Your Dates" immediately follow; Reserve stays in header.
- Inferred — worth learning: a one-line caption that names what's in the hero (season/time) feels honest and alive; "29 rooms" — real numbers stated plainly; activity grid with portrait photos is clear.
- Inferred — weakness: font choice (Metrisch geometric sans for headlines) feels less premium than the photography; many outlined small buttons.

## Explora — Chile/Peru/Bolivia (expedition lodges) — https://www.explora.com/
- Observed desktop: hero region rendered as flat dark grey (video not painted) with left-aligned bold sans H1 "Uncover the World's Most Inspiring Destinations" + white CHECK AVAILABILITY button. Black header, stacked "EX PLO RA" logo.
- Observed: Awards row (World Travel Awards, PURE, Condé Nast). "Our Destinations" accordion (Patagonia / Sacred Valley / Desert & Altiplano / Easter Island) with illustrated map of South America + lodge tiles. Explorations section ("30 curated half- and full-day explorations … small groups of no more than eight") — concrete numbers. "What's Included in Your Stay" icon row (Accommodations, All Meals & Beverages, All Explorations, Spa, National Park Fees, Round-trip Airport Transfers) with info tooltips. "Our Travelers Voice" — 2 review cards with name, date, stars and "Read Review" links (sourced, dated reviews). Newsletter with traveler/agency toggle.
- Inferred — worth learning: "What's included" icon strip — removes uncertainty about the all-inclusive price; reviews shown with first name + date + link to source (verifiable).
- Inferred — weakness: corporate sans + black buttons; feels like an operator, not a sanctuary. Hero broken in capture.

## Kamalaya — Koh Samui, Thailand (wellness) — https://kamalaya.com/
- Observed desktop: Centred-logo header with nav split around it, maroon "BOOK NOW". Hero image (jungle, roofs, sea) washed out by a translucent white box behind "WELCOME TO KAMALAYA / THE REALM OF THE LOTUS" — low contrast. Wistia video embedded as a GDPR "Unblock content" placeholder with bright blue default buttons; second placeholder overlapping the hero. Row of 7 award logos.
- Observed: Wellness Programs, "Find your accommodation" with filter list (Garden View / Sea View / Private Pool), Exclusive Offers carousel with concrete terms ("Repeat Guests Offer — Stay eight pay seven … Book: Now–11 Dec 2026; Stay: 1 Mar–19 Dec 2026"), video testimonials in black band, "Wellness Guardians", "Digital Detox" policy, "Kamalaya Collective" content library.
- Inferred — worth learning: offers with exact booking and stay windows (trustworthy); accommodation filtering by view.
- Inferred — weakness: consent placeholders with default blue buttons visibly break the design; washed-out hero overlay; thin gold outlined buttons with poor contrast. Clear "what not to do".

## Uga Escapes — Sri Lanka (resort group) — https://www.ugaescapes.com/
- Observed: desktop hero region blank white under a black-gradient header (slider/video not painted); header: Menu, script "Uga" logo, "UGA RESORTS" selector, outlined BOOK NOW. Caps serif (Cormorant) headings "SRI LANKA LUXURY RESORTS CRAFTED FOR TIMELESS GETAWAYS"; centred paragraphs. "WHY BOOK DIRECT" band with 3 icon benefits (Best rate guaranteed / Room upgrade on availability / Early check-in/late check-out on availability). Resort carousel cards with Offers / Gallery / Explore links. Split image/text sections for Dining and Spa ("HEAVENLY HAVENS OF BLISS" — heading overlaps paragraph = visible layout bug). Large blank grey bands where images failed.
- Inferred — worth learning: "Why book direct" benefits strip — relevant for a BD resort competing with Booking.com/ShareTrip/GoZayaan.
- Inferred — weakness: overlapping heading/body text bug observed; caps-serif headings everywhere; generic copy ("Heavenly havens of bliss").

## Resplendent Ceylon — Sri Lanka (Ceylon Tea Trails etc.) — https://www.resplendentceylon.com/
- Observed (desktop+mobile): Cream header: "≡ OUR RESORTS", centred serif wordmark "RESPLENDENT / CEYLON", search, dark-green "RESERVE NOW". Hero video: close-up of a tea plucker's hand among tea leaves (desktop fold caught a grey frame mid-fade; mobile shows the hand clearly). Large white serif headline mixing roman + italic: "One Magical Island / *Five Extraordinary Resorts*"; ornamental line-and-knot scroll cue.
- Observed: "UNCOVER SRI LANKA — Curating Meaningful Journeys *With Resplendent Ceylon*" with an illustrated map of Sri Lanka with property pins left, text right, signed by the managing director (handwritten signature image + name/title). Michelin Key badges. "Resplendent *Collection*" — staggered asymmetric grid of property photos with caption bars (region label in small caps + name in serif), e.g. "CENTRAL HIGHLANDS — Ceylon Tea Trails". Dark forest-green full-width band "Uniquely Crafted Journeys *Through Sri Lanka*" with aerial of tea estate road. "Kindness to Both People and Nature" with portraits of local children (charity foundation). Press quote (Harper's Bazaar) in large italic serif. Dark-green footer with newsletter, resort lists, affiliations box.
- Mobile: hero full-height portrait crop on the hand; text scales well; property cards become full-width stacked with caption bars; footer centred.
- Inferred — worth learning (high relevance — tea country like Sreemangal): human-hands-in-landscape hero; roman+italic serif headline pairing; staggered photo grid; dark green as the "depth" colour against cream; founder/MD signature for personal trust; illustrated country map.
- Inferred — caution: the community-children photography can read as poverty tourism if not handled with consent and dignity — avoid for a demo.

## The Oberoi Udaivilas — Udaipur, India — https://www.oberoihotels.com/hotels-in-udaipur-udaivilas-resort/
- Observed: desktop capture partially unstyled (CSS/JS failed to apply fully in headless) and almost all images remained as placeholder lotus loaders on both desktop and mobile → visual design largely NOT verified.
- Observed (mobile, styled): hero video area black with an orange full-width "BOOK" bar beneath it; "Welcome to Udaipur" with a photo of a guest in a palace courtyard with a uniformed staff member holding a parasol.
- Observed content structure (DOM, both viewports): "Local Time" and "Current Weather: 22°C" in the intro; Location / Contact Us / Fact Book links; embedded map + "Get Directions"; Travel Notes: "Maharana Pratap Airport — Distance 27 kilometres — Driving time 45 minutes"; Accommodation/Dining/Wellness/Experiences/Offers/Events/Attractions/Gallery/Awards/Other destinations — each a carousel with a dropdown sub-filter (Suites ▾, Restaurants ▾) and VIEW ALL. Event venue capacity stated ("Chandra Mahal… functions of up to 50"). Members-only offer.
- Inferred — worth learning (South Asia relevance): airport distance + drive time + live weather in the intro is practical; event venues with capacities; a palace-service photo shows *service*, not just architecture.
- Inferred — weakness: heavy image loader dependency (blank placeholders); orange BOOK bar visually off-brand.

## Ananda in the Himalayas — Uttarakhand, India (wellness) — https://www.anandaspa.com/
- Observed desktop (first pass blocked by Cloudflare "Just a moment…"; retry succeeded): hero photo of the illuminated Viceregal palace at dusk; "CELEBRATING 25 YEARS" seal; "THE HEALING PLATE" circular badge overlay; left-bottom text "A WELLNESS RETREAT IN THE HIMALAYAN FOOTHILLS / WELCOME TO ANANDA / 'Ranked the No.1 Destination Spa in the World 2025' Readers' Choice Awards Condé Nast Traveller". Top-right dark box "BOOK YOUR STAY → Choose Your Programme ▾ → CHECK AVAILABILITY" (programme-first booking, not room-first).
- Observed: intro on light grey with mandala line ornament; "DOWNLOAD BROCHURE". Most mid-page content did not paint (blank) in capture → NOT verified. Footer: "PERSONALISED ASSISTANCE — REQUEST" button; reservations phone + email; Getting There; Reviews; Downloads.
- Inferred — worth learning: programme-first booking for stays sold as packages (relevant: BD resorts sell "day-long packages", "couple packages"); "personalised assistance request" as a soft conversion.
- Inferred — weakness: hero overloaded with 2 badges + ranking quote + booking box; cookie panel huge.

## Post Ranch Inn — Big Sur, California — https://www.postranchinn.com/
- Observed (desktop+mobile): full-width dark-teal announcement bar ("Highway 1 is now fully open… Book Your Stay →") — practical access news used as conversion. Transparent header: logo, small utility row (Offers & Packages, Shop, Gallery), main nav (Stay, Dine, Experience, The Ranch, Sustainability), hamburger. Hero video (aerial surf on rocks); desktop full-page capture shows "Player error" again (Vimeo/JW-style player).
- Observed: intro on dark teal: centred serif sentence. "Latest News" carousel (Michelin Three-Keys, new spa). "Stay" with room names (The Post House, Cliff House) + one-line descriptions + "VIEW ROOM →". Split sections with warm blush background: "Dine Amongst the Clouds" (restaurant cantilevered at blue hour), "Luxury On The Homestead" (deer on ridge above fog). Experiences on dark aubergine band with arrows. Guest testimonial long quote ("Guest – Elizabeth"). Mobile: floating outlined "RESERVE YOUR ROOM" pill bottom-right.
- Inferred — worth learning: practical access banner; colour-blocked bands (teal / blush / aubergine) to pace the scroll; long genuine-sounding guest quote with first name only.
- Inferred — weakness: hero dependent on video player that failed in capture.

## Blackberry Farm — Tennessee, USA — https://www.blackberryfarm.com/
- Observed (desktop+mobile): full-bleed photo hero: row of white rocking chairs on a lawn at golden hour, misty Smoky Mountains behind. Centred: small tracked caps "CELEBRATE ALL SEASONS" → high-contrast serif "GOLDEN HOURS" / huge "AWAIT" → outlined "EXPLORE EACH SEASON". Header: spaced caps wordmark, caps nav (About, Stay, Experiences, Wine *and* Food, Living, Shop), search, white solid "BOOK NOW".
- Observed: second image overlaps the hero bottom edge (offset/overlap layout) with small caps label + paragraph left. Collage section of mixed-size photos (wine glasses, cheese, black-and-white archive strip) with captions. Stay section with room photo (patterned wallpaper, antique bed). "Be in the know" dark band. Featured events cards with dates. Magazine. Michelin Two-Key. Footer: separate phone numbers for Reservations / Front Desk / Concierge, "Schedule a call" button.
- Mobile: hero shortened to ~55% with overlap image preserved; body text larger (~17px) — readable.
- Inferred — worth learning: overlapping image into hero = editorial depth without gimmick; seasonal framing; separate phone numbers by purpose; "schedule a call".
- Inferred — weakness: overall slightly busy collage; many outlined buttons.

## HOSHINOYA (Hoshino Resorts) — Japan — https://hoshinoya.com/en/
- Observed desktop: black page. Header: hamburger, search, "Hoshino Resorts" wordmark centred, "1 Night 1 Guest USD155~" price teaser + cyan "Check Availability / Best Rate Guarantee" button. Centred serif caps "DEEPLY IMAGINED. DEEPLY IMMERSIVE." with "Total 10 Properties". Inset landscape photo (pool at sunset), short paragraph, small "Brand Movie" thumbnail. Alternating small image + text pairs ("Finely selected location", "Intricate design details", "Thematic hospitality" with plated food). Properties list with price from "USD199~". Massive destination/brand directory on dark grey.
- Mobile: similar; not separately notable.
- Inferred — worth learning: showing "from" price in header is honest and helps qualify visitors; black backgrounds can flatter dusk/night photography.
- Inferred — weakness: very small images in a sea of black; too sparse; cyan button clashes.

## Gleneagles — Scotland (estate hotel) — https://gleneagles.com/
- Observed (desktop+mobile): pale sage-grey palette with deep bottle-green accents. Header: EN, "Gleneagles Townhouse" (sister property link), serif green wordmark centred, icons (search, gift, bag, account), solid green "BOOK" block flush right; second row text nav (Stay, Eat & Drink, Families, Golf, Pursuits, Spa & Wellness, Meetings & Occasions, Explore, *Offers* in italic). Hero = aerial video still of the hotel over golf course; "WELCOME TO / The Glorious Playground". Booking bar INSIDE hero bottom: Check in / Check out / Total guests "2 Adults, 1 Room" / Promo code / green BOOK YOUR STAY — transparent outlined fields.
- Mobile: booking widget stays in hero as 3 stacked fields + full-width green button — booking is the first interactive thing a phone user sees.
- Observed: small ornamental bird line-icon divider; "Welcome to Gleneagles" centred intro stating numbers ("850 acres", "205 individually designed rooms and 26 suites"). Asymmetric scattered layout: card with double-line ornamental frame ("Stay with us / Stay") next to staggered room photos. Offer card "UP TO 20% OFF — Short & Sweet" overlaid on landscape with concrete terms (two nights mid-week, until January 2027). "Gather the Clan" family card. Eat & Drink with champagne-tower/plate photos. Dark-green overlay panel on bar photo. Experiences: "Country Pursuits" (child with hawk).
- Inferred — worth learning (strong reference): sage + bottle-green palette ≈ natural, calm, premium; framed text cards with thin double line = heritage touch without kitsch; concrete numbers in intro; offers with real conditions; booking widget in hero on mobile.
- Inferred — weakness: scattered asymmetric layout leaves some awkward empty areas on desktop.

## Ikos Resorts — Greece & Spain (all-inclusive) — https://www.ikosresorts.com/
- Observed (desktop; mobile first timed out, second pass OK): hero area blank white/grey gradient (video not painted). Thin geometric sans (NewHero UltraLight) in grey caps "WELCOME TO / IKOS RESORTS", "BEYOND ALL-INCLUSIVE.", "THE DELUXE COLLECTION", "A WORLD OF UNFORGETTABLE EXPERIENCES". Very low-contrast light grey text on cream; faint "THE CREATION" title nearly invisible. Image tiles with white text labels (Family / Dining at Ikos / Kids). Pool villa slider.
- Inferred — weakness: contrast failures (observed visually: headings at maybe #ccc on #f5f2ee); generic copy; ultralight fonts don't survive on screens. Clear "don't".
- Inferred — worth learning: little — confirms that thin type + low contrast reads as unfinished, not luxurious.

## Cap Juluca, A Belmond Hotel — Anguilla — https://www.belmond.com/hotels/north-america/caribbean/anguilla/belmond-cap-juluca/
- Observed (desktop+mobile): teal announcement bar ("Cap Juluca is closed for the season until October 9, 2026… [Contact Us]") — honest operational status. Header: BELMOND wordmark, hamburger, property sub-nav (Accommodation, Restaurants & Bars, Events & Experiences, Wellness, Celebrations, Offers, Gallery), EN, "Find Booking", "My Account".
- Observed: centred sun-eye icon → large serif "Cap Juluca" → "Anguilla, Caribbean"; inset video (palm leaf macro, film grain) with progress line.
- Observed: "Where island bliss finds its meaning" + FACT LIST: "68 rooms, 45 suites — 4 restaurants — Guerlain spa — Awarded 2 Michelin Keys — Event venues for up to 250 people — 20 minutes from Clayton J. Lloyd Airport". Accommodation on a mint-teal block with arched-window suite photo; "Signature Suites & Villas — Size: 306–481m² — Sleeps: up to 14 guests". 
- Observed: Editorial magazine layout: off-grid images of different sizes with small captions under them (like a printed magazine), 35mm-film-looking lifestyle photography (woman walking on beach, woman reading in pool, couple carrying surfboard), history essay ("Some 3500 years ago, Arawak explorers…", "In 1984, Linda and Charles Hickox…"). Pink (blush) "What's New" band. Celebrations / Weddings / Groups & Incentive Travel. Mobile footer as accordions (Accommodation, Dining, Features, Occasions, Location).
- Inferred — worth learning (strongest editorial reference): fact list with plain numbers; room facts (size, sleeps); captions under photos; real place history; colour-blocked sections in 2 soft accents; film-like candid photography.
- Inferred — weakness: mobile leaves big empty areas where images lazy-loaded late; teal+pink palette is brand-specific (Belmond's retro-Caribbean) — don't copy colours.

## Our Habitas — Middle East / Mexico (multi-property) — https://www.ourhabitas.com/
- Observed (desktop+mobile): full-bleed hero photo — long infinity pool with white loungers and umbrellas in front of AlUla sandstone canyons; tiny "OUR HABITAS" wordmark, hamburger, "BOOK" text. "Luxury for the Soul" centred serif + centred paragraph. "Our Homes" horizontal property rail (images not painted in capture) with outlined pill buttons "DISCOVER RAS ABROUQ". Stories (journal) on blush; Sustainability / Giving back; dark grey footer.
- Inferred — worth learning: one strong hero image of pool-in-landscape; little else.
- Inferred — weakness: images largely not painted (lazy); page relies on centred text blocks; outlined pill buttons.

## The Fife Arms — Braemar, Scotland (art hotel) — https://www.thefifearms.com/
- Observed: muted grey hero with huge serif lines split by long rules "The Heart — of the — Highlands"; cookie modal over it. Header: crest left, "FIFE ARMS" wordmark, long caps nav (About us, Stay, Eat & Drink, Experiences, Art, Families, Wellness, Festivals & Events, Private Events, The Shop, Offers), BOOK. A giant serif "Welcome". Most images did not paint; page height 32,420px (very long) mostly blank in capture → layout largely NOT verified. One strip showed a wall of framed antique portraits + antlers (Victorian lodge interior).
- Inferred — worth learning: oversized serif word as section opener can be powerful; lines/rules integrated with type.
- Inferred — weakness: extremely long, scroll-animation-dependent page.

## Song Saa Collective — Koh Rong, Cambodia — https://songsaa.com/
- Observed (desktop+mobile): hero video (grey in capture) with left-aligned light serif statement "Building a future where business can heal, not harm."; four equal panels under hero (Song Saa Private Island / Reserve / Foundation / Saraan Sanctuaries). Warm putty/beige background throughout.
- Observed: "Twenty years in under nine minutes." films with run times (4:21, 4:14) and year. Asymmetric scattered collage of documentary photos (staff diving, boats, villagers, driftwood, ceramics making) with short headed text blocks (Regeneration, Design). Properties: aerial of overwater villas around island with caption card overlapping image edge.
- Photography observed: real staff, local hands, craft — documentary style, consistent warm grade.
- Inferred — worth learning (Southeast-Asia relevance): documentary photography of real local people and craft gives authenticity a stock shoot can't; caption cards overlapping images.
- Inferred — weakness: reads as foundation/corporate more than a place to stay; booking demoted to a tiny "Book" button.

## Shinta Mani Wild — Cardamom Mountains, Cambodia (tented camp) — https://www.shintamani.com/wild/
- Access: desktop returned a "Robot Challenge Screen" (bot protection) → desktop NOT verified. Mobile captured.
- Observed mobile: dark-green square logo badge; condensed tall serif display type (very tall, narrow, all caps): "NATURE UNTAMED", "A CRAFTED STAY", "TENTS", "WILD WELL-NESS" — on alternating cream and sage-green bands. A handwritten-note card (tilted) quoting the architect ("As a lover of all things WILD this camp is exactly what I would design for myself") with Bill Bensley caricature badge. Experiences as short headed blurbs with small photos (Sundowner Cocktails, Arrival by Zipline, Jungle Cruises, High-End Foraged Cuisine). "15 tents" stated. Interior photography of tents (copper tub on deck, patterned upholstery, hand-painted mural). Outlined square "ALL TENTS"/"WELLNESS" buttons.
- Inferred — worth learning: condensed display serif gives strong identity in narrow mobile column; alternating sage/cream bands; specific experience names; personality without gimmick.
- Inferred — weakness: busy mix of fonts (condensed display + handwriting + sans).


---

# Part B — International inner pages and booking flows


## Room listing / detail pages
- Soneva Fushi — Beach Villas listing (desktop+mobile): hero image with booking bar persists on inner page; centred lede paragraph; FILTERS (Bedrooms ▾, Villa Features ▾, Reset filter); villa cards with spec line "Sleeps 3 Adults (2 Adults 2 Child) • 1 Bedroom • 264 m²", name, 2-line description; "Load more"; "Other Villa Types". Many card images not painted in capture (lazy).
- Gleneagles — Suites: split hero (photo left / bottle-green panel right "Luxury suites"); breadcrumb; each suite = photo carousel (Prev/Next circle buttons, 1/3 progress line) + "AT A GLANCE" bullet list (size "113m²/1,216ft²", four-poster bed, views, sitting room, bar) + "Explore Suite" + outlined "CHECK AVAILABILITY". "Special requests?" framed box ("Looking for a room near the lift? Space for the family and the dog? … ENQUIRE NOW"). Dark-green "More than just a room" amenity cards (5* room, world-class breakfast).
- Cap Juluca / Belmond — Select accommodation (booking engine page): long list of room cards with: size ft²/m², bed config, Sleeps N, max occupancy rules incl. rollaway/child age, view, terrace/pool, Location, "View & Book". Grouped by category with category tabs. Very factual.
- Fogo Island Inn — Rooms & Suites: hero "Rooms & Suites"; "Each of our 29 rooms and suites overlooks…"; large image tiles with name + FLOOR ("4th Floor") + "View This Room" — rooms named after places (Newfoundland Room, Labrador Room, Flat Earth Suite). Room detail: Room Size "56 m² | 600 ft²", Occupancy, "Book this room". "More than a room" cards (All-inclusive, Furniture & textiles by local makers, Regenerative practices).
- Post Ranch Inn — Pacific Suite detail: hero with name; feature line in caps "OCEAN VIEWS | OUTDOOR SOAKING TUB | SEPARATE LIVING AREA | UPPER OR LOWER ROOM"; descriptive paragraph on dark teal; full-width gallery with ~20 dots; name + description + accordions (Room Features +, Complimentary Resort Amenities +) + "VIEW FLOOR PLAN →"; Packages carousel; "Other Stays".
- Capella Ubud — Keliki Tent detail: title + lede + small description + "View 360-degree virtual tours"; breadcrumb; large image slider (1 of n); "Book your stay — contact reservations team"; AMENITIES two-column: Occupancy 2 Adults / Bed King / View Keliki Valley / Check-in 3:00 PM / Check-out 12:00 PM / Floorplan link / 360 tour link; then itemised inclusions (173 sqm, heated pool, 24-hour Culturist, in-tent refreshments, baby cot on request). "Other suggestions". "In-tent dining" cross-sell.
- Pattern: the best detail pages answer: size, max occupancy & bed, view, private features, check-in/out time, what's included, and offer floorplan/360 — then a single booking CTA and 2 related rooms.

## Dining pages
- The Brando — Dining: in-page tab bar (Bob's Bar, Nami Teppanyaki, Beachcomber Café, Te Manu Bar, Les Mutinés, Private Dining, In-Villa); intro "World-class dining rooted in Polynesian life" + 2 photos (server with flower in hair carrying dishes; coconut + ceviche); each outlet = caps label, serif headline phrase ("Beachside food and drink in Marlon Brando's original bar"), 2 paragraphs, italic meal times ("Lunch, Dinner, Cocktails"). CTA "Contact the guest experience team to plan your stay".
- Gleneagles — Eat & Drink lists 12 outlets incl. picnics and afternoon tea (captured; layout similar to suites).
- Pattern: each outlet gets a one-line character, meal periods, and a reason (who it's for). No menus needed on the overview.

## Offers
- Gleneagles — "Short & Sweet": hero (family with dog, candid); fact bar: HOW MANY NIGHTS "2 nights or more" | AVAILABILITY "From Now – January 2027" | WHAT'S INCLUDED "Breakfast at The Strathearn, Use of Swim & Gym"; body; "To book, please call our Playground Planners on 01764 662231 or click Book Now"; Disclaimer (VAT, non-refundable deposit, 5% service charge); categories; share buttons; "See more like this".
- Soneva — Offers: "Book direct for our best price guarantee…"; offer cards with "Available until December 20, 2026", name, one line, brick "Learn more".
- Pattern: an offer = nights rule + validity window + inclusions + terms + phone alternative.

## Weddings / events
- Gleneagles — Weddings: B&W documentary wedding photography with photographer credits under each image; "Why Gleneagles as your wedding venue" bullet list (incl. "an hour from Edinburgh or Glasgow"); sections Ceremony / Wedding Dining / Reception / Party time / Staying the night; "A team of professionals on speed dial"; ENQUIRE NOW (dark green).
- Pattern: weddings sell the planning team + capacities + logistics, with real wedding photos credited.

## Booking flows (clicked the primary Book/Reserve CTA; desktop 1440 + mobile 390)
- Soneva Fushi: full-screen booking overlay (in-site): "Select your dates" two-month calendar with NIGHTLY PRICE UNDER EACH DATE ($3144 / $3863 / $7824), right column: property ▾, Arrival/Departure, 2 Adults ▾, 0 Children (under 12) ▾, Corporate/Promo code; footer phone + reservations email. Mobile: single-month calendar with prices, currency selector. Cookie banner overlapped in both.
- Gleneagles: clicking BOOK YOUR STAY with empty dates → fields outlined red (inline validation) on desktop and mobile; nothing else opens. Booking remains in the hero form.
- Capella Ubud: in-site overlay "Select Destination & Dates": destination ▾, arrival/departure (pre-filled today/tomorrow), two-month calendar, Rooms/Adults/Kids, promo code, "Modify my reservation", dark CHECK AVAILABILITY. Mobile: same, single month, stacked.
- Blackberry Farm: dropdown panel under header: property tabs (Blackberry Farm / Either property), "2 guests, 1 room" ▾, Dates, "My Dates Are Flexible" checkbox; mobile panel shows the rule text "Three night minimum stay in effect unless otherwise stated. No check-in or check-outs on Saturday." + "CLICK to select dates".
- Post Ranch Inn: opens new tab to SynXis (be.synxis.com) third-party engine: Guests / Check-in / Check-out / Special codes or rates / "Select a Room" with View/Sort/Filters, cart, "I prefer sign in". Rooms loading spinners at capture time. Visual style clearly different from main site (handoff seam visible).
- The Brando: desktop → new tab to book-directonline.com (rendered blank at capture); mobile → bottom-sheet calendar + guest steppers (see homepage notes).
- Resplendent Ceylon / Fogo: CTA click did not open a booking UI in our automation (Resplendent: no visible change; Fogo: Reserve link resolved to a room page). Their engines NOT verified.
- Synthesis: 3 tiers observed — (1) in-site overlay with calendar (Soneva, Capella, Brando-mobile, Blackberry), (2) hero form with validation (Gleneagles), (3) hand-off to third-party engine (Post Ranch/SynXis, Brando desktop). Rules (min stay, no Saturday check-in), price-per-night in calendar and flexible-dates toggle are the details that make flow (1) feel premium and honest.


---

# Part C — Bangladesh


## Grand Sultan Tea Resort & Golf — Sreemangal, Moulvibazar — https://grandsultanresort.com/
- Observed (desktop+mobile): full-bleed aerial hero (blue sky, salmon-pink building, palms, lake, tea hills beyond). Large white sans "Experience / The Elegance" + orange/amber "BOOK NOW" button (mobile; desktop text partly clipped off right edge in fold capture — slide transition). Header: logo, phone +880 9678 785959, WhatsApp +880 1730 793555, "Menu" hamburger. Mobile: top strip "Chat with us" (WhatsApp) + phone; a gold animated "SPECIAL OFFER" tab (megaphone icon) pinned left on desktop / bottom-left on mobile.
- Observed: dark bottle-green page background throughout; Welcome text "The best five star resort in the Sylhet region… around four hours drive from Dhaka… Classified in 08 categories with 134 hotel rooms and suites". Rounded-corner overlapping photo pairs. Facilities & Services icon grid in orange outline icons (Cuisine, Gym, Spa, Children Play Zone, Swimming Pool, Movie Theatre "44 seated HD"). Rooms carousel with icon spec row (guests / beds / sq ft: King Deluxe 2·1·382; Executive Suite 569; Royal Suite Superior 4·3·1160; Presidential Suite "Raj Prashad" 6·2·1750). Special offers card "Autumn Escape — Validity till 19th October 2026 — complimentary breakfast". Meetings & Events, Dining. Guest Reviews: a Google review card (5 stars, name, date "19 June 2024") beside a photo collage. Award & Honors logos (Luxury Travel Guide, World Luxury Hotel Awards, Tripadvisor Travellers' Choice). Footer: separate phone numbers for Resort office, Corporate office, Reservation, Corporate/Group events; email.
- Observed on mobile: room descriptions repeat identical boilerplate ("A most modern concept… 32" LCD TV with comprehensive cable TV channels…") across room types; no room photos for most cards (lazy/not painted).
- Inferred — strength: the most complete BD site seen — phone/WhatsApp everywhere, offers with validity, room specs, real Google review, distance from Dhaka stated.
- Inferred — weakness: amber button + green + orange icons = template feel; "Experience the Elegance" generic; TV-channel copy undermines luxury; repeated boilerplate; rounded-blob image shapes.

## The Palace Luxury Resort — Bahubal, Habiganj — https://www.thepalacelife.com/
- Observed (desktop+mobile): hero = dusk photo of a white two-storey villa with lit windows, paved driveway, tree canopy framing top — genuinely good photograph. Header: logo "THE PALACE LUXURY RESORT BAHUBAL" (gold), main nav (Rooms, Recreation, Dining, Events, Fitness, Facilities) rendered in near-invisible grey over the photo; utility (Offer | Gallery | Contact us & Directions). Red/white "SPECIAL OFFERS" vertical tab pinned right.
- Observed: homepage is nearly only: hero → periwinkle blue empty band → "THE PALACE LIFE" (video thumbnail of resort in morning fog + "Come lose yourself in the largest resort in Bangladesh…" + E-BROCHURE) → 4 tiles (Resort Map, Gallery, Contact Us & Directions, Virtual Tour) → black footer.
- Observed mobile: hero image + hamburger only; no booking/phone visible in first screen.
- Inferred — strength: excellent dusk photography; "Resort map" and "Virtual tour" are useful for a large property; e-brochure.
- Inferred — weakness: no visible booking/phone in fold; illegible nav contrast; homepage tells almost nothing (rooms, prices, location absent); empty coloured band looks broken.

## Balishira Resort — Sreemangal — https://www.balishiraresort.com/
- Observed (desktop+mobile): header with MENU, small logo, gold "BOOKING REQUEST ▾" button. Hero = YouTube embed showing "Video unavailable — This content isn't available" (broken in both viewports). Under it a dark-green strip of 4 icon features: Complimentary Buffet Breakfast / Kids Play Zone / Cozy Restaurant / Couple Villa with Private Pool. Then large blank areas (lazy/animated content not rendered). "Offers We Currently Have" heading over an empty grey block. Gold sawtooth "grass" ornament band. Footer with nav + "Design by TrendSail".
- Inferred — lesson: broken YouTube hero = worst possible first impression; feature strip ("couple villa with private pool", "complimentary buffet breakfast") shows what BD guests look for.

## Novem Eco Resort — Sreemangal — https://novemecoresort.com/
- Observed (desktop): top utility bar: "Hotline: +880-1709-882000/1", WhatsApp, Offers, "Make Payment", social icons. Nav + green "BOOKING REQUEST" button. Hero photo of red-roof cottages on a forested hill with stairs, tiny "Luxury Amidst Nature" label. Room cards with BDT price: "Family Executive — 450 SFT • 4 Person • 2 Bed — 1 TV • AC — BDT 12,600/- — Book Now".
- Observed: giant phone number heading "Bookings & Inquiries +880-1709-882000/1" (larger than any other text on page). "Amenities & Services" bento grid of tiles in assorted bright colours (blue Parking, purple Bicycle Rental) with big white icons. Booking Request form on bright green: Name, Check In, Check Out, Adults, Kids, Email, Phone, Room Type ▾, Number of Room ▾ → "Booking Request". Gallery. "Need Help? Open 24/7, Call/WhatsApp, Email" + WhatsApp + Get Direction buttons.
- Observed: placeholder template copy left in place: "Combine seamlessly fitting layouts, customize everything you want, switch components on the go using our page builder." under "Book Your Escape to Nature".
- Inferred — strength: very clear about price (BDT), phone, WhatsApp, "Make Payment" (implies online payment of advance), structured booking request form.
- Inferred — weakness: unedited theme placeholder text; rainbow tiles; looks like a template; big phone number as display type.

## Paragon Hotel & Resort — Sreemangal — https://paragonresortbd.com/
- Observed (desktop+mobile): white header, small logo, nav (Home, Our Rooms, Our Facilities, T&C, Contact), dark olive "BOOK NOW". Hero = upward-angle architecture photo of a modern glass/timber building at dusk. WhatsApp floating "Need Help? Chat with us". "— OUR STORY" in heavy grotesk caps with long story; stats row "76 HOTEL ROOMS · 6 ACTIVITIES · 1 RESTAURANTS". Olive band "— THE TEA CAPITAL" about Sreemangal (Lawachara National Park, Madhabpur Lake). Grand Amenities icon list. Rooms with "from ৳18,000 / ৳20,000" and "350 ft² 2 guests". Socials; footer.
- Observed content error: "Paragon Hotel & Resort is a beautiful, luxurious resort in the foothills of the Blue Ridge Mountains" — copy pasted from a US template. Trust-damaging.
- Inferred — strength: prices in Taka shown as "from"; destination context section (tea capital, nearby attractions); modern editorial typographic layout (big grotesk with dash).
- Inferred — weakness: wrong-place copy; many empty grey placeholders; "1 RESTAURANTS" grammar.

## Sreemangal Inn — Sreemangal town — https://sreemangalinn.com/
- Observed (desktop): on load a modal "Book The Best Hotel In Sreemangal" opens over the hero: Check-in date / Check-out date (native mm/dd/yyyy inputs), "I Want To Book: Room ▾", "Select Room: Family Suites ▾", Adults, Child, "Next", red "Close". Behind: dark corridor photo hero, maroon nav + "Book Now". Content: "Welcome to Best Hotel in Sreemangal" (twice), tan/charcoal checkerboard of tiles (Rooms / Community Center / Restaurant / Conference each with "Book Now"), "Hotel Location: Near Post Office, Dhaka-Moulvibazar Highway", "Reception timing 24/7 Front Desk, 24/7 Booking Available". Copy errors observed: "Restourent", "RESTOURENT", awkward sentences ("Srimangal Inn Hotel never pretends falsehood, they serve the truth").
- Inferred — lesson: auto-opening booking modal on arrival is aggressive; spelling errors destroy premium perception.

## Sayeman Beach Resort — Kolatoli, Cox's Bazar — https://sayemanresort.com/
- Observed (desktop): top utility strip (social icons, "Kolatoli, Cox's Bazar", email). Dark hero with 5 gold stars, thin light sans "An ode to luxury of unforgettable memories", outlined "BOOK NOW" + phone "+8801401777888" beside it. "Since 1964 — Welcome to Sayeman Beach Resort" with heritage story (first private hotel in Cox's Bazar), collage of couple-on-beach photo + blue water block in a gold frame. Video band (couple silhouetted in infinity pool at dusk). Rooms carousel (Panorama Ocean Suite, Super Deluxe King/Twin), facility checkerboard (café latte art, rooftop "Yuffe" infinity pool café, spa, gym), meeting halls (Tide Meeting, Carnival Hall, The Verandah, Marco Polo), News & Awards (tourism fair "First Place Winner" photos). Gold ornamental swash dividers.
- Observed SEO-driven copy mixing positioning: "Best Top-rated & Low-budget Family Hotel in Cox's Bazar" alongside "An ode to luxury" — contradictory positioning on the same page (and page <title>).
- Inferred — strength: heritage since 1964 is a real differentiator, phone beside Book Now in hero, infinity-pool video.
- Inferred — weakness: SEO keyword stuffing in visible copy; luxury vs low-budget confusion.

## Hotel Sayeman (group/heritage) — https://sayeman.com/
- Observed: a splitter page: two cards (Sayeman Beach Resort / Sayeman Heritage) with "Book Now" and "Special Discou[nt]" (text clipped), "SAYEMAN since 1964" + short history ("movie stars, heads of state…"). Minimal; text clipped in both cards.

## Mermaid Beach Resort — Pechar Dwip, Cox's Bazar — https://mermaidbeachresort.net/
- Observed desktop: page rendered essentially unstyled (CSS not applied in our capture; images missing). Content visible: phone +88 018 4141 6467; nav (Accommodation, Packages, Dining, Reserve, Contacts); room types with "Starting @ BDT 26,000 per night — Guests: 2 — Prices are inclusive of 10% service charge & 15% VAT"; each type lists individually NAMED bungalows ("6 Bungalows, each uniquely crafted: Experience is Experiencing the Experience, Hot Water Ice-Cream, Too Much Nothing, Cat And The Mat, Fly Rabbit Fly, Meet Me There"). Visual design NOT verified.
- Note: Mermaid is widely regarded as BD's pioneering boutique eco-resort; its brand voice (whimsical named cottages) is distinctive. The visual quality of the live site could not be judged.

## Mermaid Eco Resort — Cox's Bazar — https://mermaidecoresort.com/
- Observed desktop: styled (serif, dark navy top bar with phone). Hero grey (image not painted) with "Natural Luxury / Discover your personal sanctuary in Cox's Bazaar. Let Nature Restore your Soul!" + outlined PACKAGES. Accommodation list: Type / At a Glance bullets (wooden veranda, private BBQ area, hammock, working table, AC) / "Starting @ BDT 8,000–40,000 per night, Guests 2–4" / "Prices are inclusive of 10% service charge & 15% VAT" / story / "3 Water Villas, each uniquely crafted: Road Lover Squid, Sleepy Green Bird, Ms. Mermaid" / RESERVE. Dining: Breakfast Club, Eat the Time, Organic Food. Images mostly not painted (lazy / slow host). Mobile capture timed out.
- Inferred — worth learning (local norm): prices quoted in BDT with "inclusive of 10% service charge & 15% VAT" — Bangladeshi guests expect to know whether "++" applies. Named individual cottages = personality.

## Sampan Beach Resort — Marine Drive, Cox's Bazar — https://www.sampanresort.com/
- Observed (desktop+mobile): dark charcoal theme with orange buttons. Header logo in white rounded badge; nav (Home, Rooms & Suites ▾, Café-Restaurant, Packages, About Us ▾), orange "Book Now", green phone icon "Call for Booking! +8801974726726". Hero carousel aerial of green-roof buildings by road with "PRIVATE / BEACH / Exciting Offers →". Embedded Google Map next to intro ("…just beside Marine Drive road near Himchari, 5 min from Kolatoli bus stand"). Room cards over photos with occupancy ("1 Bed – 2 Persons with 1 Kid · Best for single couples"; Family Suite "3 Rooms – 4 Beds · Best for 8–12 persons"; "Executive Sharing 3 Beds · 6–10 persons"). Amenities incl. "Airport Pick & Drop", "Free Car Parking", "Affordable Driver's Accommodation", "Self-Driving Car Facilities" (with stock photos of a plane, a router, a "24/7 SERVICE" clip-art). Café: "Fresh & Authentic Seafood, Traditional (Bangla) Local Food — Crab Masala Fry, Local Traditional Food (Vorta, Shutki)". Activities: private beach view, candle-light dinner, parasailing, BBQ party. "Are You Ready? Book Your Room Today / Call for Reservation".
- Very relevant local insights (observed): driver's accommodation (BD families travel with hired drivers), group occupancy (8–12 persons), local food named in Bangla terms (bhorta, shutki), map embed beside intro, airport pickup.
- Inferred — weakness: stock clip-art images, broken image placeholders with alt text visible ("Airport Pick & Drop" icon), orange+black palette feels cheap.

## Kazi Resort — Kapasia, Gazipur — https://kaziresort.com/
- Observed (desktop+mobile): hero and most sections stuck as a spinner (slider not loaded). Visible: "ABOUT THE KAZI RESORT — Corporate Picnic & Day Out Resort near Dhaka | Kazi Resort - Corporate Retreat with Swimming Pool, Wave Pool & Treetop Adventure" (SEO title as visible H2). "just 55 minutes from Dhaka Airport", "corporate picnics, luxury retreats, wellness days, conferences, family getaways"; "ice bath wellness sessions". Footer (maroon): 4 resort phones + corporate office address in Banani, "Privilege Program".
- Inferred — worth learning: the market near Dhaka is heavily day-out/corporate picnic; distance from airport in minutes is a selling point. Weakness: spinner-blocked page; keyword-stuffed headings.

## Turag Waterfront Resort — Gazipur — https://www.turagwaterfrontresort.com/
- Observed (desktop+mobile): grey hero (slider image not painted), gold label + caps sans "CREATE UNFORGETTABLE MEMORIES BY RIVERVIEW RESORT", gold "ABOUT US". Intro states real facts: "located 18 KM from Gazipur Bypass… across 36 bighas of land… near Bhawal National Park… founded by Md. Humayun Kabir and Shahin Alambir". Night photos of jetty with blue/green coloured lights. Accommodations filter tabs (All, Deluxe, Cottage, Suite, Villa, Platinum); cards with "BDT 18000.00+++ / Night" (note "+++"), River View Platinum House, Lake View Cottage, Exclusive Family Villa, River View Wooden Cottage. Activities: Restaurant ("locally raised fish and chicken… pesticide-free organic vegetables grown on our land"), Event.
- Inferred — worth learning: land size in bighas, distance from bypass, founders named — concrete local trust signals; "+++" price notation used locally (base + service + VAT).
- Inferred — weakness: "Create unforgettable memories" generic; most images unpainted; dark-gradient placeholder cards.

## Sarah Resort — Gazipur (Bhawal Rajabari estate) — https://sarahresort.com/
- Observed (desktop+mobile): hero (image barely visible behind heavy grey-green gradient overlay in desktop fold; mobile shows aerial of tower + pool in jungle) with serif (Cormorant) "Timeless Pleasure in Nature's Luxury" + "Bangladesh's most iconic luxury resort, where heritage, nature, recreation and modern comfort come together…" + mustard "Book Your Stay" + outlined "Explore Experiences". Header: hamburger, small logo, dark-green "Book Now". Floating green "Talk with us" phone pill (desktop) / round phone FAB (mobile).
- Observed: "A Sanctuary Beyond the City" (title overlapping paragraph text — visible collision on both viewports). "Why Choose Sarah Resort" 6 icon cards (105 Unique Rooms & Villas, Nature-Inspired Luxury, 4 Dining Venues, Adventure & Recreation, Corporate Event Destination, Wedding & Celebration Venue). Facts: "Just 1.5 hours from Dhaka", "Heritage Rajabari estate spanning 200 acres". Accommodation tab-list (Raja View Tower, Presidential Villa, Water Lodge, Tree House, Water Front Villa) controlling image card: "Waterfront Villa — Signature King · 572 sft — Up to 3 guests · 6 rooms — Book Now / View details". Experiences: Zip Line, ATV Ride, Kayaking, Kids Zone (child on slide), Boating, Water Cycling; "18+ curated activities", "Flexible daily time slots", "Certified guides". Rotating circular "EXPLORE ALL EXPERIENCES" badge.
- Inferred — strength: closest BD site to the international pattern (tab-list rooms, facts, serif headings, dark green + cream palette). Mobile hero with stacked full-width CTAs.
- Inferred — weakness: overlay too heavy (photo barely readable on desktop); text overlap bug; rotating text badge gimmick; "Timeless Pleasure in Nature's Luxury" generic.

## Chuti Resort — Gazipur — https://chutiresort.com/
- Observed (desktop+mobile): hero photo of forest with red-roof cottages, play-button left, gold label "Chuti Resort Gazipur", white sans "Embrace the heavenly joy of togetherness", gold "READ MORE". Header with Bangla-script logo "ছুটি" (red), nav, gold "BOOK NOW". Welcome: "eighteen kilometres from Dhaka Airport… one hour and thirty minutes… 54 bigha… near heritage site Bhawal Rajbari and Bhawal National Park". Accommodations filter (All Room / Cottage / Suites / Villa) with "BDT 7,500++ / Night" cards (Oitijjo Cottage, Family Cottage, Bhawal Cottage, Wooden Cottage, Deluxe Twin, Premium Twin, Platinum King, Executive Suite, Royal Suite, Duplex Villa) — many card images unpainted (gradient placeholders). "glimpse of wildlife, firefly processions at night… no light is lit outside… full moon and rain in the rainy season" — a genuinely distinctive, evocative local line. Restaurant (Jalshiri), Conference & Events (Sukundi Hall, Chaga Bithi), Recreation. Footer: address with "(7.5 km distance from Gazipur Chowrastha)", 5 phone numbers, group properties (Chuti Purbachal).
- Inferred — worth learning: Bangla-script wordmark gives identity; local experiential hooks (fireflies, full moon, rain) are more powerful than "luxury"; "++" pricing. 
- Inferred — weakness: template structure identical to Turag (same theme, observed: identical card style/filter tabs); generic headline.

## Namir Green Resort — Gazipur — https://namirgreenresort.com/
- Observed (desktop): pink header strip with logo, nav (Home, Gallery, Services, About, Blog, Contact, Package & Price), phone box. Hero slider = interior photo of a plain room with ceiling fan + "Welcome to / Best Resort in Gazipur - Namir Green Resort" + "Book Now" pill; green "BOOK NOW" side tab; WhatsApp float. Packages with BD-specific names: "Couple Day Long", "Group Day Tour", "Couple Night Stay", "Picnic Package" with photo tiles labelled "Couple Boating" / "Group Day Tour". Rooms "See Rooms How Its Look Like" with price badges "4000BDT / 5000BDT", "Night Stay With Food", "Cottage With Food". Bengali wedding photography ("Destination Wedding"). Google reviews widget "4.0 ★ based on 263 reviews" showing 1-star reviews in rotation. FAQ accordion ("How far is Namir Green Resort from Dhaka and how do I get there?", "What packages are available?", "Is there a separate area for kids?", "Are there special rates for group or corporate bookings?").
- Inferred — worth learning: BD demand vocabulary = day-long, couple, group, picnic, with food included; FAQ matches real questions (distance, packages, kids, group rates). Showing live Google rating can backfire (1-star reviews displayed).
- Inferred — weakness: SEO keyword repetition ("Best Resort in Gazipur" ×10 on page), plain room photos, inconsistent styles.

## Bhawal Resort & Spa — Gazipur — https://bhawalresort.com/
- Observed (desktop): dated layout (~2016): header with address, phone list, local time, language selector; "RESERVE YOUR STAY" box overlapping hero (Check-in / Check-out / Rooms / BOOK NOW / "Learn about our best rate guarantee"); hero photo of large thatched-roof pavilion reflected in a pool. "Added Attractions!!!" icons. Special offer as a green spa flyer image with text baked in. Cottages grid. Very useful "Resort Information" block: check-in 2:00 PM / check-out 12:00 PM, late check-out rules, ID requirement ("valid National ID Card/Passport/Driving License"), child policy (children 1–5 complimentary breakfast, 5–10 charged 50%, extra bed chargeable). "Travel Directions" from Airport ("1hrs 20 min drive"), via Gazipur Chowrasta, etc. "What's Nearby" (Bhawal National Park, Fantasy Kingdom, Zinda Park, Jomidar Bari, Bangabandhu Safari Park). Meetings & events.
- Inferred — worth learning: policies (ID, child age pricing, check-in) are real local needs; nearby attractions list. Weakness: dated visuals, flyer-images, exclamation marks.

## The Peninsula Chittagong — Chattogram (city hotel) — https://www.peninsulactg.com/
- Access: blocked locally; captured via remote browser. Observed (desktop+mobile): white header with hamburger + green pill "Early Bird Offer". Hero grey (image not painted) with serif "Experience the Ultimate in Comfort and Warmth" + green "Book Now →" inside curved-bottom shape. Navy serif headings ("Indulge in a Luxurious and Comfortable Stay with Us"), dashed orange decorative frames, "Stay with us" script. "Exclusive Offers Starts From $70". Rooms "Starting – $70/Night, 265 Sq. ft." Services (Restaurant & Bar, Swimming Pool, Gym). Promise icons (Welcome Drinks, Central AC, Complimentary Breakfast, 24-hour Room Service). "Special Offers — Unveiling Secrets of Deep Space" (irrelevant copy). "What Our Guests Are Saying" shows only text logos booking.com / expedia.com / tripadvisor.com. Green→orange gradient "Need assistance? +880 1755554555" banner.
- Inferred — weakness: placeholder/irrelevant copy, USD prices for a local-market hotel, gradients, empty images.

## Hotel Agrabad — Chattogram — https://www.agrabadhotels.com/
- Observed (desktop+mobile): boxed layout, black hero (slider not painted), bright cyan booking bar (Arrival Date, Departure Date, Adults, Child, Book Now). Phone in header. Page height only ~1,950px; little else rendered. Visual quality largely NOT verified; dated boxed template.

## Not reachable (NOT verified)
- Sea Pearl Beach Resort & Spa (Inani) — Cloudflare challenge ("Just a moment…") from both our container and remote browser.
- Nazimgarh Resorts (Sylhet), Ocean Paradise (Cox's Bazar), Long Beach Hotel (Cox's Bazar) — network tunnel failures from both routes.
- Lemon Garden Resort (Sreemangal) — timed out from both routes.

## BD booking CTA click-through (desktop+mobile)
- Grand Sultan: "BOOK NOW" in hero — no booking UI appeared in our automation within 6s (may open an external engine/modal we didn't catch) → NOT verified.
- Sarah Resort: "Book Your Stay" — no visible change captured → NOT verified.
- Chuti Resort: → /book-now page: "Book Room" form — Check-in, Check-out (native date inputs), Adults, Children, Preferred Room ▾, Full Name, Email, Phone. A request form, not live availability.
- Paragon: BOOK NOW → /our-rooms/ listing page ("DISCOVER OUR ROOMS AND SUITES" over pool-at-night photo); WhatsApp "Need help? Chat with us" persists.
- The Palace: nav → rooms.php: hero aerial of hotel tower in morning mist (strong photo).
- Novem: on-page "Booking Request" form (Name, dates, adults, kids, email, phone, room type, number of rooms) + separate "Make Payment" link.
- Sreemangal Inn: modal booking form auto-opens on load (dates, room type, adults, child → Next).
- Pattern (observed across 19 BD sites): booking is almost always a REQUEST (form → staff call back) plus phone/WhatsApp; live availability with instant confirmation was not observed on any BD site we could load.

## BD payments & tech signals (from page HTML, fetched Oct 4 2026)
- Novem Eco Resort — Booking & Payment Policy page (observed text): reservation "confirmed only after the required deposit or full payment"; "Standard Deposit: minimum 50% of the total booking cost"; "Reservations made within [e.g., 7 days] of arrival… may require 100% prepayment" (template placeholder left in published policy); accepted: bKash, Nagad, bank transfer/deposit, Bangladeshi + international cards via gateway. "Make Payment" page: Bangla QR ("One QR Code, Every Payment Possible") with 5-step instructions (open bKash/bank app → Scan to Pay → enter amount → confirm with PIN).
- Namir Green Resort: SSLCommerz payment banner image on page; /booking/ page exists.
- WhatsApp links (wa.me or WhatsApp text) found on: Grand Sultan, Sarah, Novem, Paragon, Namir, Sayeman, Kazi. Messenger (m.me) on Grand Sultan, Namir, Palace. tel: links on most.
- Structured data (application/ld+json) present on Grand Sultan, Sarah, Novem, Paragon, Namir, Sampan, Sayeman. GTM/gtag on Grand Sultan, Turag, Namir, Sampan, Sayeman, Kazi.
- Grand Sultan homepage HTML = 1.39 MB (heavy page builder output).
- Inferred: BD resorts operate an "inquiry → staff confirms availability → 50% advance via bKash/Nagad/bank → voucher" model. A website that formalises that flow (dates + guests + package → request → advance-payment instructions) matches how these businesses already work.

---

# Part D — Relevance to Bangladesh (Inferred, one line per international site)

| Site | Relevance to a Bangladeshi resort |
|---|---|
| Amanpuri | Restraint and "getting here" block are transferable; the sparseness relies on brand fame a BD resort doesn't have. |
| Six Senses Laamu | Local-time and how-to-get-there utility row; the illustrated map is a strong idea for Sreemangal or Sundarbans. |
| Soneva Fushi | Booking overlay with nightly prices and named hosts is the best model for a premium BD booking UX. |
| Rosewood | The mobile sticky "Reserve" bar is the pattern for BD's mobile-first traffic. |
| Four Seasons Koh Samui | Experience cards with duration and "from" price are directly transferable. |
| The Datai | The aerial "resort small in rainforest" shot suits forest or tea properties; the layout is dated, so don't copy it. |
| Capella Ubud | Room-type tabs controlling one image, plus a contact block on the homepage. Sarah Resort (BD) already uses a similar pattern. |
| NIHI Sumba | Proves WhatsApp can sit on a top-tier site, which matters for BD. |
| Ett Hem | One honest positioning sentence; illustration-only would not work for an unknown BD brand. |
| Singita | "Plan your trip" as a consultative CTA matches BD guests' wish to talk to someone first. |
| Inkaterra | Named naturalist guides could map to tea-garden or birding guides in Sreemangal. |
| Pacuare Lodge | Shows the risk of a blocking preloader on slow mobile networks, which are common in BD. |
| The Brando | The mobile bottom-sheet booking with steppers is the model for BD mobile users. A craft motif (here, tattoo) could map to nakshi kantha or shital pati. |
| Fogo Island Inn | Plainly stated real numbers ("29 rooms") and a seasonal caption. Community framing could map to tea-estate communities, handled with care. |
| Explora | The "What's included" strip suits BD packages, which often bundle meals. |
| Kamalaya | Offers with exact booking and stay windows; consent placeholders show what not to ship. |
| Uga Escapes | The "Why book direct" strip is relevant against OTAs (Booking.com, ShareTrip, GoZayaan). |
| Resplendent Ceylon | The closest analogue: tea country, hands-in-leaves hero, roman+italic serif, dark green on cream. Don't copy it; learn from its restraint. |
| Oberoi Udaivilas | Practical intro (airport km and minutes, local time, weather) and venue capacities suit a South Asian audience. |
| Ananda | Programme-first booking is relevant where BD resorts sell packages rather than rooms. |
| Post Ranch Inn | An operational announcement bar (e.g. "Dhaka–Sylhet highway works: allow extra time") is useful in BD. |
| Blackberry Farm | Seasonal framing suits BD: winter mist, first flush, monsoon. Also separate phone numbers by purpose. |
| HOSHINOYA | Showing a "from" price in the header qualifies visitors, which BD sites mostly do. |
| Gleneagles | Sage and bottle green with framed cards, concrete offer terms, and a mobile booking form in the hero. |
| Ikos | Low-contrast ultralight type: a warning for BD sites that copy "luxury minimal". |
| Cap Juluca | A fact list of numbers and captions under photos is the editorial model to follow. |
| Our Habitas | Little beyond a single strong hero. |
| The Fife Arms | Oversized serif openers. The very long scroll is unsuitable for BD mobile data budgets. |
| Song Saa | Documentary photography of real local people and craft is the authenticity benchmark for a real client shoot. |
| Shinta Mani Wild | Condensed display type gives personality on mobile; specific experience names. |
