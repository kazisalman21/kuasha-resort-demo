/**
 * Kuasha — all brand content in one place.
 * To rebrand for a real resort, edit this file and src/data/images.json.
 * EVERYTHING here is sample content for a fictional property. See /about-this-demo/.
 */

export const site = {
  name: 'Kuasha',
  nameBn: 'কুয়াশা',
  meaning: 'Bangla for “mist”',
  tagline: 'A quiet house in the tea hills of Sreemangal',
  description:
    'Kuasha is a 22-room retreat in an old tea garden outside Sreemangal, Bangladesh: verandas, shade trees, a lake, and a kitchen that cooks the food of Sylhet.',
  address: ['Kuasha Estate, off Lawachara Road', 'Sreemangal 3210, Moulvibazar', 'Bangladesh'],
  phone: '+880 1000-000000',
  phoneHref: 'tel:+8801000000000',
  whatsapp: '8801000000000',
  email: 'stay@kuasha.example',
  eventsPhone: '+880 1000-000001',
  hours: 'Reservations answer 08:00–22:00, every day',
  geo: { lat: 24.3065, lng: 91.7296 },
  social: { facebook: '#', instagram: '#' },
  demo: true,
};

export const nav = [
  { href: '/stay/', label: 'Stay' },
  { href: '/days-here/', label: 'Days here' },
  { href: '/dining/', label: 'Dining' },
  { href: '/gatherings/', label: 'Gatherings' },
  { href: '/offers/', label: 'Offers' },
  { href: '/visit/', label: 'Visit' },
];

export const facts = [
  { n: '22', label: 'Rooms, cottages and one lake house' },
  { n: '48', label: 'Acres of tea, shade trees and forest edge' },
  { n: '4½', label: 'Hours by road from Dhaka, give or take the highway' },
  { n: '15', label: 'Minutes from Sreemangal railway station' },
];

export type Room = {
  slug: string;
  name: string;
  short: string;
  count: number;
  size: string;
  sleeps: string;
  bed: string;
  view: string;
  from: number;
  lede: string;
  body: string[];
  features: string[];
  images: string[];
  plan: 'veranda' | 'cottage' | 'bungalow' | 'lakehouse';
};

export const rooms: Room[] = [
  {
    slug: 'veranda-rooms',
    name: 'Veranda Rooms',
    short: 'In the long brick house, each opening onto a shared veranda above the tea.',
    count: 12,
    size: '34 m²',
    sleeps: '2 adults + 1 child',
    bed: 'King or twin',
    view: 'Tea and shade trees',
    from: 14500,
    lede: 'Twelve plain, well-made rooms along a veranda that runs the length of the house.',
    body: [
      'The long house was the estate’s old store. We kept the brick and the timber doors, and put the bathrooms where the sacks used to be. Each room opens straight onto the veranda: one cane chair is yours, the rest are shared with whoever is up early.',
      'Rooms on the east end catch the first light. If you sleep late, ask for the west end.',
    ],
    features: ['Ceiling fan and quiet split air-conditioning', 'Rain shower', 'Cotton bedding, mosquito nets on request', 'Tea tray with estate leaf', 'Wi-Fi throughout'],
    images: ['veranda-room', 'veranda-door', 'veranda-corridor'],
    plan: 'veranda',
  },
  {
    slug: 'hillside-cottages',
    name: 'Hillside Cottages',
    short: 'Six stone-and-timber cottages up the slope, each with its own deck.',
    count: 6,
    size: '52 m² + deck',
    sleeps: '2 adults + 1 child',
    bed: 'King',
    view: 'Forest canopy',
    from: 21000,
    lede: 'Six cottages up a stone stair, far enough apart that you only hear the birds.',
    body: [
      'The cottages sit on old terraces at the forest edge, reached by a stone stair (about forty steps; we carry the bags). Each has a deck with a daybed and a hammock, and an outdoor shower screened by planting.',
      'This is the quietest part of the estate. Breakfast can be brought up.',
    ],
    features: ['Private deck with daybed and hammock', 'Indoor and outdoor shower', 'Canopy bed with net', 'Writing desk facing the trees', 'Breakfast on the deck at no extra charge'],
    images: ['cottage-steps', 'cottage-window', 'net-bed', 'hammock'],
    plan: 'cottage',
  },
  {
    slug: 'planters-bungalows',
    name: 'Planter’s Bungalows',
    short: 'Three timber bungalows with high ceilings, a sitting room and a deep veranda.',
    count: 3,
    size: '78 m² + veranda',
    sleeps: 'Up to 3 guests',
    bed: 'Four-poster king',
    view: 'Garden and tea',
    from: 28500,
    lede: 'Three timber bungalows built to the old planters’ plan: high ceilings, deep verandas, shutters for the afternoon.',
    body: [
      'Timber walls, a high roof that keeps the rooms cool, a four-poster with a net, and a sitting room that becomes a third bed. The veranda is as large as many hotel rooms and faces west over the garden to the tea.',
      'These are the rooms people ask for again. Book early for the winter months.',
    ],
    features: ['Separate sitting room (sofa bed for a third guest)', 'Freestanding bath and rain shower', 'West-facing veranda with dining table', 'Tea service brought at the hour you choose', 'Butler-style host on call'],
    images: ['bungalow-room', 'bungalow-room-3', 'tea-pot', 'bungalow-terrace'],
    plan: 'bungalow',
  },
  {
    slug: 'lake-house',
    name: 'The Lake House',
    short: 'Two bedrooms, a garden running down to the water, and a cook if you want one.',
    count: 1,
    size: '140 m²',
    sleeps: '4 adults + 2 children',
    bed: 'King + twin',
    view: 'The lake',
    from: 46000,
    lede: 'One house by the water for families and old friends, with its own garden, kitchen and boat.',
    body: [
      'Two bedrooms with their own bathrooms, a long living room with tall windows, and a garden that runs down to the lake. There is a small kitchen, and a cook from the Long Veranda can come down to make dinner in the house.',
      'The estate boat is moored at the bottom of the garden. In lotus season it is the best seat on the property.',
    ],
    features: ['Two bedrooms, two bathrooms', 'Living and dining room with kitchenette', 'Private garden to the lake, estate boat', 'In-house cook on request', 'Space for a driver in the staff quarters nearby'],
    images: ['lake-house-deck', 'lake-reflection', 'pool-evening'],
    plan: 'lakehouse',
  },
];

export const inclusions = [
  'Breakfast for every guest, served until 10:30',
  'The dawn tea walk with an estate guide (March–December)',
  'Bicycles, the lake boat and the pool',
  'Afternoon tea in the Tea Room',
  'Rates include 10% service charge and 15% VAT',
];

export type Experience = {
  title: string;
  img: string;
  duration: string;
  season: string;
  price: string;
  text: string;
  group: 'Estate' | 'Beyond the gate' | 'Bath House' | 'Evenings';
};

export const experiences: Experience[] = [
  { title: 'The dawn tea walk', img: 'tea-picking', duration: '90 min', season: 'Mar – Dec', price: 'Included', group: 'Estate',
    text: 'Out at first light with an estate guide, through the sections being plucked that week, to the weighing shed. We keep to the paths and ask before photographing anyone at work.' },
  { title: 'Estate roads by bicycle', img: 'cycling', duration: '2 hours', season: 'Oct – Apr', price: 'Included', group: 'Estate',
    text: 'A loop on the estate’s red-earth roads between shade trees, with a stop for tea at the half-way garden. Easy riding; children’s bicycles available.' },
  { title: 'Lotus season on the lake', img: 'lotus', duration: '1 hour', season: 'Jul – Oct', price: 'Included', group: 'Estate',
    text: 'The lake fills with lotus after the rains. Take the boat out in the early morning, before the flowers close in the heat.' },
  { title: 'Lawachara at first light', img: 'estate-mist', duration: '3 hours', season: 'All year', price: '৳3,500 per person', group: 'Beyond the gate',
    text: 'A walk in the national park with a naturalist, listening for hoolock gibbons. Leech socks are provided in the wet months, and you will want them.' },
  { title: 'Baikka Beel by boat', img: 'lake-lilies', duration: 'Half day', season: 'Nov – Mar', price: '৳4,800 per person', group: 'Beyond the gate',
    text: 'The wetland sanctuary in winter, when the migratory birds arrive. Binoculars, a guide and a packed breakfast; back by lunch.' },
  { title: 'Foot ritual and warm stones', img: 'foot-ritual', duration: '60 or 90 min', season: 'All year', price: 'From ৳4,500', group: 'Bath House',
    text: 'In the bath house by the garden: a salt soak for tired feet, then a massage with warm river stones and mustard-seed oil.' },
  { title: 'Monsoon on the veranda', img: 'rain-window', duration: 'An afternoon', season: 'Jun – Sep', price: 'Included', group: 'Estate',
    text: 'When the rain comes in, the kitchen makes khichuri and beguni and the Tea Room stays open late. The best reason to come in July.' },
  { title: 'Dinner by the lake', img: 'candle-dinner', duration: 'Evening', season: 'Oct – May', price: '৳9,500 for two', group: 'Beyond the gate',
    text: 'A table at the water’s edge, lanterns, and a set menu from the Long Veranda. One table a night, so ask early.' },
];

export const dishes = [
  { en: 'Shatkora beef', bn: 'সাতকরা গরু', note: 'slow-cooked with the bitter wild citrus of Sylhet' },
  { en: 'Hilsa in mustard', bn: 'সর্ষে ইলিশ', note: 'when the season is right, never frozen' },
  { en: 'Haor fish of the day', bn: 'হাওরের মাছ', note: 'from the wetlands, cooked as the cook decides' },
  { en: 'Bhorta platter', bn: 'ভর্তা', note: 'six mashes, from smoked aubergine to dried shrimp' },
  { en: 'Akhni pilau', bn: 'আখনি', note: 'the Sylheti one-pot rice, for Fridays' },
  { en: 'Winter pitha', bn: 'পিঠা', note: 'with date-palm jaggery, December to February' },
];

export const seasons = [
  { name: 'Winter', months: 'Nov – Feb', text: 'Cold mornings, mist in the tea until nine, birds at Baikka Beel. Our busiest months; book weekends well ahead.', note: 'Bring a warm layer for the evenings.' },
  { name: 'First flush', months: 'Mar – Apr', text: 'The new leaf comes in and the estate wakes up. Warm days, the first plucking, and the year’s best tea.', note: 'Pre-monsoon storms can arrive in April.' },
  { name: 'Monsoon', months: 'Jun – Sep', text: 'Green everything, rain on the roofs, lotus on the lake. Quieter, softer, and cheaper.', note: 'Roads are slower; allow extra time.' },
  { name: 'Autumn', months: 'Oct', text: 'Clear skies after the rains and long golden afternoons. Puja holidays fill quickly.', note: 'The tea walk runs until December.' },
];

export type Offer = {
  slug: string;
  title: string;
  img: string;
  nights: string;
  valid: string;
  includes: string;
  price: string;
  text: string;
  terms: string;
};

export const offers: Offer[] = [
  { slug: 'winter-weekdays', title: 'Winter weekdays', img: 'estate-avenue', nights: '3 nights, pay for 2', valid: 'Sun–Thu arrivals, 1 Nov 2026 – 28 Feb 2027', includes: 'Breakfast, the dawn tea walk, one Tea Room afternoon',
    price: 'From ৳29,000 for three nights', text: 'Come in the week, when the estate is at its quietest and the mist sits longest. The third night is ours.',
    terms: 'Not valid 16 Dec – 2 Jan. Subject to availability. All room types.' },
  { slug: 'family-in-the-hills', title: 'Family in the hills', img: 'family-hills', nights: '2 nights or more', valid: 'Until 31 Mar 2027', includes: 'Children under 12 stay and eat free; bicycles, boat, kids’ tea walk',
    price: 'From ৳42,000 for two nights', text: 'For a Hillside Cottage with an extra bed, or the Lake House. The children’s tea walk ends with fresh tea and pitha in the shed.',
    terms: 'Up to 2 children under 12 sharing with two paying adults.' },
  { slug: 'a-day-at-kuasha', title: 'A day at Kuasha', img: 'pool', nights: 'Day visit, 10:00 – 18:00', valid: 'Fri & Sat, by booking', includes: 'Lunch on the Long Veranda, the pool, a guided tea walk, afternoon tea',
    price: '৳4,200 per adult · ৳2,100 child (5–11)', text: 'For guests from Sylhet, Moulvibazar and Habiganj: a long day in the garden without staying over. Limited to 30 day guests so the house stays quiet.',
    terms: 'Booking required by Thursday. Groups over 12, see Gatherings.' },
  { slug: 'first-flush', title: 'First flush', img: 'tea-pour', nights: '2 nights', valid: 'Arrivals 15 Mar – 30 Apr 2027', includes: 'A Planter’s Bungalow, a first-flush tasting, dinner by the lake',
    price: '৳62,000 for two guests, two nights', text: 'Two nights in a bungalow when the new leaf comes in, with a tasting of the season’s first teas beside the ones from last autumn.',
    terms: 'Planter’s Bungalows only. Three available.' },
];

export const gatherings = [
  { title: 'Holud nights and small weddings', text: 'The lawn by the lake takes 150 seated under lanterns; the Long Veranda takes 80 for dinner. Book the whole estate (22 rooms, about 50 guests) and the place is yours.', facts: ['150 seated on the lawn', '80 on the Long Veranda', 'Whole-estate buyout'] },
  { title: 'Family reunions', text: 'Two or three generations, one long table. We plan the days around the oldest and youngest guests, and the cooks will make Nani’s recipe if you bring it.', facts: ['From 8 rooms', 'Lake House as the centre', 'Children’s programme'] },
  { title: 'Company retreats', text: 'The old tea store is now a meeting room with daylight, a projector and good coffee. Mornings in session, afternoons on the estate.', facts: ['30 classroom · 40 theatre', 'Fibre Wi-Fi, backup power', 'Day and residential rates'] },
];

export const policies = [
  { k: 'Check-in / out', v: 'Check-in from 14:00, check-out by 12:00. Early arrivals can breakfast and wait on the veranda.' },
  { k: 'Confirming a stay', v: 'Send a request online, by WhatsApp or by phone. We confirm availability within the hour (08:00–22:00), and a 50% advance by bKash, Nagad, card or bank transfer secures the booking.' },
  { k: 'Cancellation', v: 'Free up to 7 days before arrival; the advance is refunded within 10 working days. Within 7 days, the advance can be moved to new dates once within six months.' },
  { k: 'Children', v: 'Under 5 stay free. Ages 5–11 sharing with parents: ৳3,000 per night including breakfast and an extra bed.' },
  { k: 'Identification', v: 'Please bring a national ID card or passport for every adult guest.' },
  { k: 'Drivers', v: 'Drivers’ rooms with meals are available at ৳2,500 per night. Tell us when you book.' },
  { k: 'Minimum stay', v: 'Two nights over Friday and Saturday; three nights over Eid, Puja and the 16 Dec – 2 Jan holidays.' },
];

export const faqs = [
  { q: 'How far is Kuasha from Dhaka, and how do I get here?', a: 'About 190 km. By road it usually takes 4 to 5 hours via the Dhaka–Sylhet highway; we send a map and a driver’s note when you book. Several intercity trains a day run from Dhaka to Sreemangal (about 5 hours) and we meet every train. By air, fly Dhaka to Sylhet (about 45 minutes) and we drive you from Osmani Airport (about 2½ hours).' },
  { q: 'How do I confirm a booking?', a: 'Choose your dates and room and send a request, or message us on WhatsApp. A reservations host calls or writes back within the hour to confirm. A 50% advance by bKash, Nagad, card or bank transfer secures the stay; the balance is paid on arrival.' },
  { q: 'Is there a minimum stay?', a: 'Two nights if your stay includes a Friday or Saturday night, and three nights over Eid, Puja and the end-of-year holidays. Weekday single nights are fine.' },
  { q: 'Is Kuasha good for families?', a: 'Yes. The Lake House sleeps six, Hillside Cottages take an extra bed, and there is a children’s tea walk, bicycles and a shallow end to the pool. Under-5s stay free.' },
  { q: 'Is there somewhere for our driver to stay?', a: 'Yes: clean rooms with meals in the staff quarters at ৳2,500 per night. Please mention it in your request.' },
  { q: 'When is the best time to come?', a: 'November to February for mist and birds, March and April for the first flush, July to September for rain and lotus. October is clear and busy with holidays.' },
  { q: 'Can we hold a holud, wedding or company retreat here?', a: 'Yes, for up to 150 seated guests on the lawn, or the whole estate for about 50 overnight guests. See Gatherings or call our events team.' },
  { q: 'Is there Wi-Fi and mobile signal?', a: 'Fibre Wi-Fi in all rooms and the Long Veranda, with backup power. Mobile 4G is good at the house and patchy in the lower tea sections, which some guests consider a feature.' },
];

export const travel = [
  { mode: 'By road', from: 'Dhaka', time: '4 – 5 h', note: 'Dhaka–Sylhet highway; turn at Sreemangal. Weekend traffic out of Dhaka adds time.' },
  { mode: 'By train', from: 'Dhaka', time: '≈ 5 h', note: 'Intercity trains to Sreemangal station; we meet every train (৳800 per car).' },
  { mode: 'By air + road', from: 'Dhaka → Sylhet', time: '45 min + 2½ h', note: 'Pickup from Osmani International Airport, ৳6,500 per car.' },
];

export const galleryItems: { img: string; cat: string; caption: string }[] = [
  { img: 'hero-avenue', cat: 'Estate', caption: 'The shade-tree avenue, early January' },
  { img: 'veranda-corridor', cat: 'House', caption: 'The long house veranda' },
  { img: 'tea-leaves', cat: 'Estate', caption: 'Two leaves and a bud' },
  { img: 'bungalow-room', cat: 'Rooms', caption: 'Planter’s Bungalow' },
  { img: 'food-spread', cat: 'Table', caption: 'Lunch on the Long Veranda' },
  { img: 'cottage-steps', cat: 'House', caption: 'The stair to the Hillside Cottages' },
  { img: 'lake-lilies', cat: 'Estate', caption: 'Water lilies after the rains' },
  { img: 'tea-pour', cat: 'Table', caption: 'Milk tea in clay cups' },
  { img: 'pool', cat: 'House', caption: 'The pool below the guest wing' },
  { img: 'net-bed', cat: 'Rooms', caption: 'Hillside Cottage' },
  { img: 'estate-mist', cat: 'Estate', caption: 'Shade trees in the mist' },
  { img: 'fish-curry', cat: 'Table', caption: 'Fish in mustard and chilli' },
  { img: 'long-veranda', cat: 'House', caption: 'The Long Veranda before lunch' },
  { img: 'lotus', cat: 'Estate', caption: 'Lotus season' },
  { img: 'bungalow-room-3', cat: 'Rooms', caption: 'High ceilings, Planter’s Bungalow' },
  { img: 'candle-dinner', cat: 'Moments', caption: 'Dinner by the lake' },
  { img: 'cycling', cat: 'Estate', caption: 'The estate road' },
  { img: 'hammock', cat: 'Rooms', caption: 'A cottage deck' },
  { img: 'clay-rice', cat: 'Table', caption: 'Rice in a clay pot' },
  { img: 'foot-ritual', cat: 'Moments', caption: 'The Bath House' },
  { img: 'rain-window', cat: 'Moments', caption: 'July' },
  { img: 'veranda-room', cat: 'Rooms', caption: 'Veranda Room' },
  { img: 'holud-hands', cat: 'Moments', caption: 'A holud on the lawn' },
  { img: 'sweets', cat: 'Table', caption: 'Something sweet' },
  { img: 'lake-reflection', cat: 'Estate', caption: 'The lake after the rains' },
  { img: 'lantern-lawn', cat: 'Moments', caption: 'The lawn, dressed for an evening' },
];

/** Simulated nightly rates, used only by the demo booking flow. */
export const rateRules = {
  weekendUplift: 0.15, // Fri & Sat nights
  peakUplift: 0.25,    // 16 Dec – 2 Jan
  minNightsWeekend: 2,
};

export const taka = (n: number) => '৳' + n.toLocaleString('en-IN');
