# Image Strategy

## 1. What the demo uses, honestly

- 44 photographs from **Pexels** (Pexels License: free for commercial use, no attribution required; credits are given on `/about-this-demo/`).
- The landscape images (tea avenues, tea leaves, a plucker, estate roads, lakes) came from Pexels searches for Sreemangal and Sylhet tea gardens. Each photo's exact location is **not verified**; one misty-trees image came from a general tea-plantation search. The architecture, rooms, pool and dining veranda come mostly from **one photographer’s series of a single hillside resort** (Pexels IDs 6129960–6130079). The karst landscape suggests northern Vietnam, but the location is not verified. The food is Bengali or South Asian, from several photographers.
- They were picked for **one material palette**: brick, dark timber, thatch, white linen, terracotta, green.
- All photos go through one colour grade (`scripts/grade.py`): lifted blacks, softened highlights, greens shifted toward olive, blues desaturated, warm white balance. That grade is the main reason the set reads as one place.
- **None of these show a real Kuasha.** The site says so in a dismissible notice and on `/about-this-demo/`. Never show the demo to a client as their own photography.

Known compromises in the set: two bedrooms have a sea view through the door (veranda-room, Lake House window palms); the pool photo has karst mountains behind it that Sreemangal doesn't have. All of these are acceptable for a concept and must be replaced for a real client.

## 2. Ratios and crops

| Ratio | Where | Notes |
|---|---|---|
| Fill viewport (≈16:10 desktop, ≈9:19 phone) | Page heroes | `object-fit: cover` with a per-image focal point (`focus` in `images.json`). The home hero is art-directed so the avenue's vanishing point stays centred on phones. Keep the lower-left third calm for the headline. |
| 3:2 | Room tabs, offer cards, compare thumbnails | Default landscape. |
| 4:3 | Room list, gatherings, room detail on phone | |
| 4:5 | Experience cards, dining, tea leaves detail | Portrait cards read better on phones than 3:2. |
| 21:9 | Wide band on room detail | Use only images with strong horizontal composition. |
| Full-bleed band (min 460px tall) | Home "breath" image | A quiet image with sky or mist where a line of text can sit. |
| Masonry 1×1 / 1×2 / 2×2 | Gallery | Tall images span two rows. |

Every `<img>` has a width, height and placeholder colour (the image's average tone), so the layout never jumps while it loads.

## 3. Delivery

- WebP at 480 / 800 / 1200 / 1600 / 2200 widths with `srcset` + `sizes`. The hero is preloaded with `fetchpriority="high"`; everything else is lazy.
- Measured homepage first load: about 1.0 MB (desktop) and 1.1 MB (390 px phone at 2×), with a layout shift score of 0.003.
- To add or replace an image: put the original in `research/photos/full/` (or any folder), add an entry to `scripts/images.json`, run `python3 scripts/grade.py <name>`.

## 4. Shot list for a real client (one-day shoot)

A professional photographer with a mid-range kit can cover this in one long day: dawn, midday, blue hour and night. **This shoot is the single biggest upgrade to the site.**

| # | Shot | Time | Ratio to compose for | Used in |
|---|---|---|---|---|
| 1 | Signature landscape: the property's most characteristic view, with depth, no people or one small figure | Dawn / mist | Wide, with calm space lower-left | Home hero |
| 2 | Same view, vertical | Dawn | 9:16 | Phone hero |
| 3 | Aerial (drone) showing the resort small in its landscape | Early morning | 16:9 | Breath band, Visit |
| 4 | Architecture: the main building's best elevation | Golden hour | 3:2 | Home pair, Stay hero |
| 5 | Each room type: wide from the door, bed with the window, one detail, the view from the room | Late morning (window light) | 3:2 + 4:5 | Room pages |
| 6 | Bathroom of each room type | Midday | 4:5 | Room pages |
| 7 | Restaurant: room set for service, and a guest at a table seen from behind | Lunch | 3:2 | Dining |
| 8 | Three signature dishes, overhead and 45° | Lunch | 4:5 + 1:1 | Dining, Home |
| 9 | Tea or coffee service, hands in frame | Afternoon | 3:2 | Home, Dining |
| 10 | Pool, empty and with one guest | Afternoon / blue hour | 3:2 | Offers, Gallery |
| 11 | Activities: 4–6 experiences with guide and guests (model releases) | Through the day | 4:5 | Days here |
| 12 | Staff portraits: GM, chef, a guide (named, with consent) | Any | 4:5 | About, Dining |
| 13 | Event lawn dressed, at night with lights | Night | 3:2 + 9:16 | Gatherings |
| 14 | Details: textiles, local craft, signage, keys, tea leaves | Any | 1:1 | Gallery |
| 15 | Seasonal set: monsoon, winter mist, first flush (over the year) | Seasonal | Mixed | Seasons, Offers |

Direction for the photographer:
- Show people from behind, in profile or through their hands. Avoid posed smiling-at-camera stock.
- Keep a natural, slightly warm grade; avoid HDR and oversaturated greens.
- Get model releases for every guest and staff member shown. Show tea-garden workers only with consent and dignity, not as scenery.
- Leave negative space in hero frames for text.

## 5. Image register

| Key | Size | Used in | Source | Alt text |
|---|---|---|---|---|
| `hero-avenue` | 2400×1600 | Home hero; Gallery | Pexels 18940677 | An avenue of tall shade trees through tea bushes, morning light coming through the mist |
| `estate-avenue` | 2400×1600 | Offer: Winter weekdays | Pexels 19102359 | A grass track between rows of tea under bare shade trees on a hazy morning |
| `estate-mist` | 2400×1600 | Home "breath" band; Days here card | Pexels 5530938 | Slender shade trees standing above a tea garden in thick mist |
| `tea-leaves` | 2400×1600 | Home detail pair; Gallery | Pexels 16246007 | Close view of young tea leaves, two leaves and a bud |
| `tea-picking` | 2400×3022 | Days here: tea walk; Home rail | Pexels 29898107 | A tea plucker at work, half hidden among waist-high tea bushes |
| `cycling` | 2400×1798 | Days here hero; card | Pexels 35458090 | A cyclist on a curving estate road between tea slopes and shade trees |
| `lake-lilies` | 2400×1600 | Baikka Beel card; Gallery | Pexels 35371190 | A still lake covered in water lilies, trees reflected in the water |
| `lake-reflection` | 2400×1600 | Lake House; Gallery | Pexels 35371186 | Trees reflected in a calm lake on a clear day |
| `lotus` | 2400×1591 | Lotus season card | Pexels 26966515 | A pink lotus among broad green lotus leaves |
| `veranda-corridor` | 2400×1600 | Home detail pair; Stay hero | Pexels 6129973 | A long brick veranda with timber railings and a woven lantern, forest beyond |
| `veranda-door` | 2400×1600 | Veranda Rooms gallery | Pexels 6129971 | Timber doors along a covered brick veranda overlooking trees |
| `veranda-lantern` | 2400×1600 | (spare) | Pexels 6129975 | Warm light from a cane lantern on a brick wall along an open veranda |
| `cottage-steps` | 2400×1600 | Hillside Cottages lead | Pexels 6130041 | Stone steps climbing through forest planting to a cottage on the hillside |
| `cottage-steps-2` | 2400×1600 | (spare) | Pexels 6130043 | A stone stair and dry-stone wall leading up to a timber cottage among trees |
| `bungalow-terrace` | 2400×1600 | Planter's Bungalow wide image | Pexels 6130042 | The brick and timber wall of a bungalow and its stone terrace above the trees |
| `garden-path` | 2400×1600 | Visit hero | Pexels 6129976 | A brick path winding through tall leafy planting |
| `pool` | 2400×1600 | Offer: A day at Kuasha; Gallery | Pexels 6130048 | A long pool with loungers and thatched umbrellas below a timber guest wing |
| `pool-evening` | 2400×1600 | Lake House gallery | Pexels 1838589 | A dark pool edged in timber decking, seen from a shaded room |
| `long-veranda` | 2400×1600 | Dining hero | Pexels 6130075 | Timber tables along a thatched dining veranda with brick walls, trees outside |
| `long-veranda-2` | 2400×1600 | Gatherings: retreats | Pexels 6130070 | The open dining veranda with a guest at a far table and forest beyond |
| `bungalow-room` | 2400×1601 | Planter's Bungalows lead | Pexels 14025907 | A timber-panelled bedroom with a white canopy net over a wide bed |
| `bungalow-room-2` | 2400×1601 | (spare) | Pexels 14025904 | Bed with mosquito net, timber shutters and doors open to a veranda |
| `bungalow-room-3` | 2400×1601 | Planter's Bungalows gallery | Pexels 14025910 | A high timber ceiling over a canopy bed and a cane armchair |
| `veranda-room` | 2400×1600 | Veranda Rooms lead | Pexels 271643 | A white bedroom with timber shutters, wall lamps and a ceiling fan |
| `cottage-window` | 2400×1600 | Hillside Cottages gallery | Pexels 31362246 | Morning light through a window over a bed, a tree trunk outside |
| `net-bed` | 2400×3595 | Hillside Cottages gallery | Pexels 32902660 | A white bed under a hanging net canopy |
| `lake-house-deck` | 2000×3000 | Lake House lead | Pexels 4940760 | Tall timber-framed windows opening onto a deck and green trees |
| `food-spread` | 2400×1800 | Home dining band | Pexels 38816975 | Rice on a banana leaf surrounded by small bowls of fish, bhorta and vegetables |
| `fish-curry` | 2400×1740 | Dining | Pexels 38324319 | Fish in a red mustard and chilli gravy with rice and coconut |
| `clay-rice` | 2400×3600 | Dining inset | Pexels 40000065 | Rice in a lidded clay pot with lime and a bowl of curry |
| `sweets` | 2400×1600 | Gallery | Pexels 39959155 | Three soft cheese sweets on a terracotta plate |
| `tea-pour` | 2400×1600 | Home tea; Tea Room; First flush offer | Pexels 9452278 | Milk tea poured from a kettle into small clay cups |
| `tea-pot` | 2333×3500 | Planter's Bungalow (tea service) | Pexels 4974547 | Steam rising from a porcelain cup beside a brass tea pot |
| `tea-tray` | 2400×1325 | (spare) | Pexels 1281150 | Cups of tea on a brass tray in a garden |
| `foot-ritual` | 2400×1600 | Bath House | Pexels 19695948 | Salt being poured over feet in a dark stone basin |
| `stones` | 2400×1600 | Bath House | Pexels 6187641 | A massage with warm stones laid along the back |
| `spa-tray` | 2400×3600 | (spare) | Pexels 39344587 | Rolled towels and oil bottles on a wooden tray |
| `holud-hands` | 2400×1600 | Gatherings hero; Home gatherings | Pexels 28721955 | Hennaed hands resting on yellow fabric among marigolds |
| `candle-dinner` | 2400×1600 | Dinner by the lake | Pexels 5116976 | A candle-lit table for two outdoors at night among leaves |
| `lantern-lawn` | 2400×3600 | Gatherings: weddings | Pexels 34079316 | A lawn lit by small lanterns at night leading to a dressed table |
| `rain-window` | 2400×1600 | Monsoon card | Pexels 16673332 | Rain on tall windows with dark green trees outside |
| `rain-hand` | 2400×1600 | (spare) | Pexels 12992553 | An open hand held out to catch the rain |
| `family-hills` | 2400×3600 | Family offer; reunions | Pexels 34188868 | A father carrying his son on his shoulders, looking over green hills |
| `hammock` | 2400×1600 | Hillside Cottages | Pexels 7329929 | Two hammocks strung across a shaded timber veranda |