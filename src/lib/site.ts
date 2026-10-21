/**
 * Site config for the Made@Scale rebuild.
 *
 * Commerce (Will, Sep 2026):
 * - Public ZAR prices: ON (showPrices)
 * - Cart / ecommerce: ON (cartEnabled)
 * Until real Woo prices migrate, product.priceZar stays null → UI shows "Request quote".
 * Do NOT invent live SKU prices.
 *
 * Typography: Ofelia OK to self-host (licensed). Font file may not be on disk yet —
 * layout keeps Cormorant Garamond as fallback. TODO: drop Ofelia files into
 * /public/fonts and wire next/font/local when assets arrive.
 *
 * Search: Phase 2 = facets-only (nav + PLP facets). No typeahead / Klevu work now.
 */

export const site = {
  name: "Made@Scale",
  legal: "Made at Scale",
  tagline: "Steel and timber, specified at African scale.",
  phoneDisplay: "+27 68 005 5750",
  phoneHref: "tel:+27680055750",
  landlineDisplay: "+27 10 822 2324",
  landlineHref: "tel:+27108222324",
  whatsappDisplay: "+27 60 166 9133",
  whatsappHref: "https://wa.me/27601669133",
  email: "sales@madeatscale.com",
  infoEmail: "info@madeatscale.com",
  addressLines: [
    "Unit 1809, Limeroc Business Park",
    "R114 Knoppieslaagte",
    "Knoppieslaagte 385-Jr, Centurion, 0157",
  ],
  /**
   * NAP + geo, copied from the live madeatscale.com footer and Rank Math
   * LocalBusiness schema (read 21 Oct 2026). Do not edit without checking
   * the Google Business Profile — NAP must match it exactly.
   */
  address: {
    streetAddress: "Unit 1809, Limeroc Business Park, R114 Knoppieslaagte, Knoppieslaagte 385-Jr",
    addressLocality: "Centurion",
    addressRegion: "Gauteng",
    postalCode: "0157",
    addressCountry: "ZA",
  },
  addressOneLine:
    "Unit 1809, Limeroc Business Park, R114 Knoppieslaagte, Knoppieslaagte 385-Jr, Centurion, 0157, South Africa",
  geo: { latitude: -25.906416638993534, longitude: 28.033827555395874 },
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=-25.906416638993534,28.033827555395874",
  mapEmbedSrc:
    "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s-25.906416638993534,28.033827555395874!6i15",
  openingHours: "Mo-Fr 08:00-16:00",
  openingHoursDisplay: "Monday to Friday, 08:00–16:00",
  /**
   * Canonical origin. Defaults to the production domain so canonicals, sitemap and
   * JSON-LD already point at madeatscale.com for cutover. Override per env with
   * NEXT_PUBLIC_SITE_URL.
   */
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://madeatscale.com").replace(/\/$/, ""),
  /**
   * Search indexing guard. The Vercel preview must NOT compete with the live
   * WordPress site, so robots.txt disallows all and pages carry noindex unless
   * SITE_INDEXABLE=true is set (only at cutover on madeatscale.com).
   */
  indexable: process.env.SITE_INDEXABLE === "true",
  social: {
    facebook: "https://www.facebook.com/madeatscale",
    instagram: "https://www.instagram.com/madeatscale_/",
    linkedin: "https://www.linkedin.com/company/madeatscale",
  },
  /** Public ZAR pricing UI is enabled; null prices render as Request quote. */
  showPrices: true,
  /** Cart / ecommerce stays in the rebuild. */
  cartEnabled: true,
  /**
   * Trade portal auth: magic link for specifiers (Phase 3).
   * Stub page copy should mention magic-link access — not shared password.
   */
  tradeAuth: "magic-link" as const,
  /**
   * Search Phase 2: facets only (finish / segment / material). No typeahead yet.
   */
  searchPhase2: "facets-only" as const,
} as const;

export type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export const ranges = [
  {
    slug: "bathroom-and-kitchen",
    name: "Bathroom & Kitchen",
    blurb: "Vanities, kitchenettes, and fixtures in steel and timber — hospitality-grade, quiet detailing.",
    groups: ["Fixtures", "Kitchenette", "Vanity Units"],
    lines: ["Tekton", "Elemento", "Excel"],
    tone: "steel",
    heroImage: "/products/bathroom-kitchen/bathroom-vanity-tekton-cabinet.jpg",
  },
  {
    slug: "bedroom",
    name: "Bedroom",
    blurb: "Beds, wardrobes, and study pieces that stay composed after years of hard occupation.",
    groups: ["Beds", "Shelves", "Bedside Tables", "Cupboards", "Desks"],
    lines: ["Excel", "Elemento", "Chroma"],
    tone: "timber",
    heroImage: "/products/bedroom/dresser-table-excel-vanity.png",
  },
  {
    slug: "entertainment",
    name: "Entertainment",
    blurb: "Couches, side tables, and media pieces for lodges, lounges, and shared living rooms.",
    groups: ["Couches", "Side Tables", "Tables", "TV Stands"],
    lines: ["Elemento", "Lagoon"],
    tone: "bronze",
    heroImage: "/products/entertainment/couches-small-living-room-lounge-sofa.jpeg",
  },
  {
    slug: "hospitality-and-dining",
    name: "Hospitality & Dining",
    blurb: "Guest-room sets and dining rooms specified for hotels, lodges, and residences.",
    groups: ["Dining Room", "Seating", "Tables"],
    lines: ["Tango", "Elemento", "Endurance"],
    tone: "cream",
    heroImage: "/products/mining-student/wooden-dining-table-elemento-round.jpg",
  },
  {
    slug: "mining-and-student-living",
    name: "Mining & Student Living",
    blurb: "Accommodation furniture built for occupancy, not showrooms — still considered in the room.",
    groups: ["Beds", "Bedside Tables", "Chairs", "Desks", "Storage", "Tables", "Wardrobes"],
    lines: ["Excel", "Chroma", "Brute", "Elemento"],
    tone: "industrial",
    heroImage: "/products/mining-student/bunk-bed-excel-metal-flat-pack.png",
  },
  {
    slug: "office",
    name: "Office",
    blurb: "Desks, boardrooms, storage, and seating for workplaces that need to last a decade.",
    groups: ["Boardroom", "Canteen", "Chairs", "Couches", "Desks", "Dividers", "Storage", "Accessories"],
    lines: ["Chroma", "Endurance", "Lagoon"],
    tone: "slate",
    heroImage: "/products/mining-student/chroma-desk-for-office.png",
  },
] as const;

export type Range = (typeof ranges)[number];

/**
 * Collections brand layer — luxury names locked by Will (Sep 2026).
 * Quench · Grain · Kiln · Load · Spine
 * Product family names on SKUs (Chroma, Tekton, Elemento, …) stay as catalogue lines.
 */
export const collections = [
  {
    key: "quench",
    slug: "quench",
    label: "Quench",
    tagline: "Work / steel",
    spine: "Workplace steel — Chroma desks, office seating, boardroom",
    audience: "Corporate / education",
    tone: "slate",
  },
  {
    key: "grain",
    slug: "grain",
    label: "Grain",
    tagline: "Dining / timber",
    spine: "Dining timber — Elemento tables, Lagoon seating",
    audience: "Hospitality dining · residences",
    tone: "timber",
  },
  {
    key: "kiln",
    slug: "kiln",
    label: "Kiln",
    tagline: "Hospitality",
    spine: "Hospitality — Tekton vanity/kitchenette, Tango guest packs",
    audience: "Hotels / lodges",
    tone: "cream",
  },
  {
    key: "load",
    slug: "load",
    label: "Load",
    tagline: "Campus / accommodation",
    spine: "Campus & accommodation — Endurance tables, Excel bunks, student desks",
    audience: "Residences / mancamps / campus",
    tone: "industrial",
  },
  {
    key: "spine",
    slug: "spine",
    label: "Spine",
    tagline: "Statement",
    spine: "Statement / craft — Brute and heroes for specifier theatre",
    audience: "Specifier theatre",
    tone: "bronze",
  },
] as const;

export type Collection = (typeof collections)[number];
export type CollectionKey = Collection["key"];

export const projects = [
  { slug: "wits-campus-parktown", name: "WITS Campus Parktown", place: "Johannesburg", note: "Growthpoint · Paragon · BCMA" },
  { slug: "wits-campus-braamfontein", name: "WITS Campus Braamfontein", place: "Johannesburg", note: "Thrive student living" },
  { slug: "drc-mining-mancamps", name: "DRC Mining Mancamps", place: "DRC", note: "Boogertman + Partners" },
  { slug: "doppio-zero-hazelwood", name: "Doppio Zero Hazelwood", place: "Pretoria", note: "Hospitality interior" },
  { slug: "mount-amanzi-lodge", name: "Mount Amanzi Lodge", place: "Hartbeespoort", note: "RCI Silver Crown" },
  { slug: "manzi-monate-resort", name: "Manzi Monaté Resort", place: "Hartbeespoort", note: "Resort living rooms" },
  { slug: "uj-soweto", name: "UJ Soweto", place: "Soweto", note: "Southpoint Powerpark" },
  { slug: "bergvallei-retirement", name: "Bergvallei Retirement", place: "Gauteng", note: "Residential care" },
  { slug: "uspe-mining-indaba", name: "USP&E Mining Indaba", place: "Cape Town", note: "Exhibition environment" },
  { slug: "255-architects", name: "255 Architects", place: "South Africa", note: "Studio specification" },
  { slug: "lion-pride-emblem", name: "Lion Pride Emblem Artwork", place: "South Africa", note: "Commissioned piece" },
] as const;

export const materials = ["Steel", "Timber", "Melawood", "Flat-pack durability"] as const;

export type ProductMaterial = "Steel" | "Timber" | "Melawood" | "Mixed";
export type ProductCategory =
  | "Desks"
  | "Beds"
  | "Bedside"
  | "Kitchenette"
  | "Vanity"
  | "Tables"
  | "Seating"
  | "Boardroom"
  | "Guest packs"
  | "Storage"
  | "Shelves"
  | "Fixtures";

/**
 * Sample catalogue stubs for PDP / card UI.
 * Names drawn from the live Made@Scale catalogue — no invented ZAR.
 * priceZar: null = Request quote until Woo migration.
 */
export type Product = {
  slug: string;
  name: string;
  family: string;
  rangeSlug: Range["slug"];
  collectionKey: CollectionKey;
  category: ProductCategory;
  material: ProductMaterial;
  note: string;
  /** Public ZAR when known; null → "Request quote". */
  priceZar: number | null;
  /** Local path under /public, e.g. /products/mining-student/slug.jpg */
  image?: string;
  /** Optional extra local paths for PDP gallery */
  gallery?: string[];
  materialsList?: string[];
  dimensionsNote?: string;
};

export const products: Product[] = [
  {
    slug: 'single-bed-elemento-frame',
    name: 'Bed – Elemento Single Bed Frame',
    family: 'Elemento',
    rangeSlug: 'mining-and-student-living',
    collectionKey: 'load',
    category: 'Beds',
    material: 'Mixed',
    note: 'Elemento Single Bed Frame',
    priceZar: null,
    image: '/products/mining-student/single-bed-elemento-frame.jpg',
    gallery: ['/products/mining-student/single-bed-elemento-frame.jpg'],
  },
  {
    slug: 'steel-bed-excel-frame',
    name: 'Bed – Excel Flat Pack Steel Bed Frame',
    family: 'Excel',
    rangeSlug: 'mining-and-student-living',
    collectionKey: 'load',
    category: 'Beds',
    material: 'Steel',
    note: 'Excel Flat Pack Steel Bed Frame',
    priceZar: null,
    image: '/products/mining-student/steel-bed-excel-frame.jpg',
    gallery: ['/products/mining-student/steel-bed-excel-frame.jpg'],
  },
  {
    slug: 'bedside-cabinet-table-tekton',
    name: 'Bedside Table',
    family: 'Tekton',
    rangeSlug: 'mining-and-student-living',
    collectionKey: 'load',
    category: 'Bedside',
    material: 'Mixed',
    note: 'Tekton Bedside Cabinet',
    priceZar: null,
    image: '/products/mining-student/bedside-cabinet-table-tekton.jpg',
    gallery: ['/products/mining-student/bedside-cabinet-table-tekton.jpg'],
  },
  {
    slug: 'bedside-cabinet-table-elemento',
    name: 'Bedside Table',
    family: 'Elemento',
    rangeSlug: 'mining-and-student-living',
    collectionKey: 'load',
    category: 'Bedside',
    material: 'Mixed',
    note: 'Elemento Double Bedside Table',
    priceZar: null,
    image: '/products/mining-student/bedside-cabinet-table-elemento.jpg',
    gallery: ['/products/mining-student/bedside-cabinet-table-elemento.jpg'],
  },
  {
    slug: 'bedside-table-elemento-eco',
    name: 'Bedside Table',
    family: 'Elemento',
    rangeSlug: 'mining-and-student-living',
    collectionKey: 'load',
    category: 'Bedside',
    material: 'Mixed',
    note: 'Elemento Eco Nightstand with Shelf',
    priceZar: null,
    image: '/products/mining-student/bedside-table-elemento-eco.jpg',
    gallery: ['/products/mining-student/bedside-table-elemento-eco.jpg'],
  },
  {
    slug: 'bunk-bed-excel-metal-flat-pack',
    name: 'Bunk Bed',
    family: 'Excel',
    rangeSlug: 'mining-and-student-living',
    collectionKey: 'load',
    category: 'Beds',
    material: 'Steel',
    note: 'Excel Steel Flat Pack Bunk Frame',
    priceZar: null,
    image: '/products/mining-student/bunk-bed-excel-metal-flat-pack.png',
    gallery: ['/products/mining-student/bunk-bed-excel-metal-flat-pack.png'],
  },
  {
    slug: 'bunk-beds-and-loft-beds-dorm-frame',
    name: 'Bunk Beds and Loft Beds',
    family: 'Made@Scale',
    rangeSlug: 'mining-and-student-living',
    collectionKey: 'load',
    category: 'Beds',
    material: 'Steel',
    note: 'Flat Pack Metal Frame for Dorm Rooms',
    priceZar: null,
    image: '/products/mining-student/bunk-beds-and-loft-beds-dorm-frame.jpg',
    gallery: ['/products/mining-student/bunk-beds-and-loft-beds-dorm-frame.jpg'],
  },
  {
    slug: 'cabinet-tekton-economy-bic',
    name: 'Cabinet',
    family: 'Tekton',
    rangeSlug: 'mining-and-student-living',
    collectionKey: 'load',
    category: 'Storage',
    material: 'Steel',
    note: 'Tekton Economy BIC Steel Storage',
    priceZar: null,
    image: '/products/mining-student/cabinet-tekton-economy-bic.jpg',
    gallery: ['/products/mining-student/cabinet-tekton-economy-bic.jpg'],
  },
  {
    slug: 'chroma-budget-loop-desk-for-sale',
    name: 'Chroma Budget Loop Desk',
    family: 'Chroma',
    rangeSlug: 'mining-and-student-living',
    collectionKey: 'load',
    category: 'Desks',
    material: 'Mixed',
    note: 'Affordable Modern Office Desk',
    priceZar: null,
    image: '/products/mining-student/chroma-budget-loop-desk-for-sale.png',
    gallery: ['/products/mining-student/chroma-budget-loop-desk-for-sale.png'],
  },
  {
    slug: 'chroma-steel-locker-cabinet',
    name: 'Chroma Locker',
    family: 'Chroma',
    rangeSlug: 'mining-and-student-living',
    collectionKey: 'load',
    category: 'Storage',
    material: 'Steel',
    note: 'Steel Locker Cabinet for Secure Storage',
    priceZar: null,
    image: '/products/mining-student/chroma-steel-locker-cabinet.png',
    gallery: ['/products/mining-student/chroma-steel-locker-cabinet.png'],
  },
  {
    slug: 'chroma-short-locker-cabinet',
    name: 'Chroma Short Locker',
    family: 'Chroma',
    rangeSlug: 'mining-and-student-living',
    collectionKey: 'load',
    category: 'Storage',
    material: 'Steel',
    note: 'Compact Steel Locker for Secure Office Storage',
    priceZar: null,
    image: '/products/mining-student/chroma-short-locker-cabinet.png',
    gallery: ['/products/mining-student/chroma-short-locker-cabinet.png'],
  },
  {
    slug: 'chroma-tutor-desk',
    name: 'Chroma Tutor Desk',
    family: 'Chroma',
    rangeSlug: 'mining-and-student-living',
    collectionKey: 'load',
    category: 'Desks',
    material: 'Steel',
    note: 'Compact Steel-Framed Teacher’s Desk',
    priceZar: null,
    image: '/products/mining-student/chroma-tutor-desk.png',
    gallery: ['/products/mining-student/chroma-tutor-desk.png'],
  },
  {
    slug: 'cupboard-endurance-bic-melawood',
    name: 'Cupboard',
    family: 'Endurance',
    rangeSlug: 'mining-and-student-living',
    collectionKey: 'load',
    category: 'Storage',
    material: 'Melawood',
    note: 'Endurance BIC with Melawood Finish',
    priceZar: null,
    image: '/products/mining-student/cupboard-endurance-bic-melawood.jpg',
    gallery: ['/products/mining-student/cupboard-endurance-bic-melawood.jpg'],
  },
  {
    slug: 'cupboard-endurance-2-door-bic',
    name: 'Cupboard',
    family: 'Endurance',
    rangeSlug: 'mining-and-student-living',
    collectionKey: 'load',
    category: 'Storage',
    material: 'Mixed',
    note: 'Endurance BIC 2-Door Storage Unit',
    priceZar: null,
    image: '/products/mining-student/cupboard-endurance-2-door-bic.jpg',
    gallery: ['/products/mining-student/cupboard-endurance-2-door-bic.jpg'],
  },
  {
    slug: 'cupboard-tekton-dressing-cabinet',
    name: 'Cupboard Tekton Dressing Cabinet',
    family: 'Tekton',
    rangeSlug: 'mining-and-student-living',
    collectionKey: 'load',
    category: 'Storage',
    material: 'Mixed',
    note: 'From the live Made@Scale catalogue.',
    priceZar: null,
    image: '/products/mining-student/cupboard-tekton-dressing-cabinet.jpg',
    gallery: ['/products/mining-student/cupboard-tekton-dressing-cabinet.jpg'],
  },
  {
    slug: 'study-desk-elemento-compact',
    name: 'Desk',
    family: 'Elemento',
    rangeSlug: 'mining-and-student-living',
    collectionKey: 'load',
    category: 'Desks',
    material: 'Mixed',
    note: 'Elemento Compact Study Desk',
    priceZar: null,
    image: '/products/mining-student/study-desk-elemento-compact.jpg',
    gallery: ['/products/mining-student/study-desk-elemento-compact.jpg'],
  },
  {
    slug: 'double-bed-elemento-steel-frame',
    name: 'Double Bed',
    family: 'Elemento',
    rangeSlug: 'mining-and-student-living',
    collectionKey: 'load',
    category: 'Beds',
    material: 'Steel',
    note: 'Elemento Minimalist Double Bed Frame',
    priceZar: null,
    image: '/products/mining-student/double-bed-elemento-steel-frame.jpg',
    gallery: ['/products/mining-student/double-bed-elemento-steel-frame.jpg'],
  },
  {
    slug: 'enduro-steel-bed',
    name: 'Enduro Bed',
    family: 'Enduro',
    rangeSlug: 'mining-and-student-living',
    collectionKey: 'load',
    category: 'Beds',
    material: 'Steel',
    note: 'Modern Steel Frame Bed',
    priceZar: null,
    image: '/products/mining-student/enduro-steel-bed.jpg',
    gallery: ['/products/mining-student/enduro-steel-bed.jpg'],
  },
  {
    slug: 'excel-bedside-table',
    name: 'Excel Bedside Table',
    family: 'Excel',
    rangeSlug: 'mining-and-student-living',
    collectionKey: 'load',
    category: 'Bedside',
    material: 'Steel',
    note: 'Compact Steel Nightstand',
    priceZar: null,
    image: '/products/mining-student/excel-bedside-table.png',
    gallery: ['/products/mining-student/excel-bedside-table.png'],
  },
  {
    slug: 'excel-study-desk',
    name: 'Excel Study Table',
    family: 'Excel',
    rangeSlug: 'mining-and-student-living',
    collectionKey: 'load',
    category: 'Desks',
    material: 'Mixed',
    note: 'Spacious Student Work Desk',
    priceZar: null,
    image: '/products/mining-student/excel-study-desk.png',
    gallery: ['/products/mining-student/excel-study-desk.png'],
  },
  {
    slug: 'study-desk-wall-mounted-tekton',
    name: 'Study Desk',
    family: 'Tekton',
    rangeSlug: 'mining-and-student-living',
    collectionKey: 'load',
    category: 'Desks',
    material: 'Mixed',
    note: 'Tekton Wall Mounted Workstation',
    priceZar: null,
    image: '/products/mining-student/study-desk-wall-mounted-tekton.jpg',
    gallery: ['/products/mining-student/study-desk-wall-mounted-tekton.jpg'],
  },
  {
    slug: 'skool-cupboard-for-sale',
    name: 'S’kool Cupboard',
    family: 'S\'kool',
    rangeSlug: 'mining-and-student-living',
    collectionKey: 'load',
    category: 'Storage',
    material: 'Timber',
    note: 'Brookhill Fusion Wooden Storage Cabinet',
    priceZar: null,
    image: '/products/mining-student/skool-cupboard-for-sale.png',
    gallery: ['/products/mining-student/skool-cupboard-for-sale.png'],
  },
  {
    slug: 'tekton-cabinet-of-south-africa',
    name: 'Tekton Lux BIC',
    family: 'Tekton',
    rangeSlug: 'mining-and-student-living',
    collectionKey: 'load',
    category: 'Storage',
    material: 'Mixed',
    note: 'Built-In Wall Cabinet with Brookhill Fusion Finish',
    priceZar: null,
    image: '/products/mining-student/tekton-cabinet-of-south-africa.png',
    gallery: ['/products/mining-student/tekton-cabinet-of-south-africa.png'],
  },
  {
    slug: 'tekton-side-storage-cabinet',
    name: 'Tekton Side Storage Cabinet',
    family: 'Tekton',
    rangeSlug: 'mining-and-student-living',
    collectionKey: 'load',
    category: 'Storage',
    material: 'Steel',
    note: 'Compact Steel Sideboard',
    priceZar: null,
    image: '/products/mining-student/tekton-side-storage-cabinet.webp',
    gallery: ['/products/mining-student/tekton-side-storage-cabinet.webp'],
  },
  {
    slug: 'wall-shelf-tekton-mounted-bookshelf',
    name: 'Bookshelf',
    family: 'Tekton',
    rangeSlug: 'bedroom',
    collectionKey: 'kiln',
    category: 'Storage',
    material: 'Steel',
    note: 'Tekton Wall Mounted Steel Shelf',
    priceZar: null,
    image: '/products/mining-student/wall-shelf-tekton-mounted-bookshelf.jpg',
    gallery: ['/products/mining-student/wall-shelf-tekton-mounted-bookshelf.jpg'],
  },
  {
    slug: 'storage-unit-centurion-side-cabinet',
    name: 'Elemento Side Storage',
    family: 'Elemento',
    rangeSlug: 'bedroom',
    collectionKey: 'kiln',
    category: 'Storage',
    material: 'Mixed',
    note: 'Storage Unit Centurion for Compact Homes',
    priceZar: null,
    image: '/products/mining-student/storage-unit-centurion-side-cabinet.jpg',
    gallery: ['/products/mining-student/storage-unit-centurion-side-cabinet.jpg'],
  },
  {
    slug: 'elemento-storage-cabinet',
    name: 'Elemento Super Storage',
    family: 'Elemento',
    rangeSlug: 'bedroom',
    collectionKey: 'kiln',
    category: 'Storage',
    material: 'Mixed',
    note: 'Large Office Cabinet for Versatile Use',
    priceZar: null,
    image: '/products/mining-student/elemento-storage-cabinet.png',
    gallery: ['/products/mining-student/elemento-storage-cabinet.png'],
  },
  {
    slug: 'dresser-table-excel-vanity',
    name: 'Excel Dresser Table',
    family: 'Excel',
    rangeSlug: 'bedroom',
    collectionKey: 'kiln',
    category: 'Vanity',
    material: 'Mixed',
    note: 'Multi-Purpose Vanity Cabinet',
    priceZar: null,
    image: '/products/bedroom/dresser-table-excel-vanity.png',
    gallery: ['/products/bedroom/dresser-table-excel-vanity.png'],
  },
  {
    slug: 'modern-floating-shelf',
    name: 'Modern Floating Shelf',
    family: 'Made@Scale',
    rangeSlug: 'bedroom',
    collectionKey: 'kiln',
    category: 'Shelves',
    material: 'Mixed',
    note: 'Stylish and functional, this modern floating shelf features a sleek melawood surface and powder-coated steel back panel, perfect for showcasing your favourite décor.',
    priceZar: null,
    image: '/products/mining-student/modern-floating-shelf.jpeg',
    gallery: ['/products/mining-student/modern-floating-shelf.jpeg'],
  },
  {
    slug: 'office-desk-elemento-modern',
    name: 'Office Desk',
    family: 'Elemento',
    rangeSlug: 'bedroom',
    collectionKey: 'kiln',
    category: 'Desks',
    material: 'Steel',
    note: 'Elemento Modern Steel Office Desk',
    priceZar: null,
    image: '/products/mining-student/office-desk-elemento-modern.webp',
    gallery: ['/products/mining-student/office-desk-elemento-modern.webp'],
  },
  {
    slug: 'bar-stool-elemento-seating',
    name: 'Bar Stool',
    family: 'Elemento',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Seating',
    material: 'Mixed',
    note: 'Elemento Minimalist Bar Seating',
    priceZar: null,
    image: '/products/mining-student/bar-stool-elemento-seating.jpg',
    gallery: ['/products/mining-student/bar-stool-elemento-seating.jpg'],
  },
  {
    slug: 'boardroom-table-american-walnut',
    name: 'Boardroom Table',
    family: 'Made@Scale',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Boardroom',
    material: 'Timber',
    note: 'American Walnut Executive Conference Table',
    priceZar: null,
    image: '/products/office/boardroom-table-american-walnut.png',
    gallery: ['/products/office/boardroom-table-american-walnut.png'],
  },
  {
    slug: 'cafe-chair-care-upholstered',
    name: 'Café Chair',
    family: 'Care',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Seating',
    material: 'Mixed',
    note: 'Care Upholstered Small Chair',
    priceZar: null,
    image: '/products/mining-student/cafe-chair-care-upholstered.jpg',
    gallery: ['/products/mining-student/cafe-chair-care-upholstered.jpg'],
  },
  {
    slug: 'office-chair-flex-task-seat',
    name: 'Chair',
    family: 'Flex',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Seating',
    material: 'Mixed',
    note: 'Flex Chair for Multi-Use Settings',
    priceZar: null,
    image: '/products/mining-student/office-chair-flex-task-seat.jpg',
    gallery: ['/products/mining-student/office-chair-flex-task-seat.jpg'],
  },
  {
    slug: 'chroma-4-way-cluster-desk-workstation',
    name: 'Chroma 4-Way Cluster Workstation',
    family: 'Chroma',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Desks',
    material: 'Mixed',
    note: 'Compact Team Desk Hub',
    priceZar: null,
    image: '/products/office/chroma-4-way-cluster-desk-workstation.png',
    gallery: ['/products/office/chroma-4-way-cluster-desk-workstation.png'],
  },
  {
    slug: 'chroma-6-way-cluster-desk-for-office',
    name: 'Chroma 6-Way Cluster Workstation',
    family: 'Chroma',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Desks',
    material: 'Mixed',
    note: 'Scalable Collaborative Work Desk',
    priceZar: null,
    image: '/products/office/chroma-6-way-cluster-desk-for-office.png',
    gallery: ['/products/office/chroma-6-way-cluster-desk-for-office.png'],
  },
  {
    slug: 'chroma-desk-for-office',
    name: 'Chroma Desk',
    family: 'Chroma',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Desks',
    material: 'Mixed',
    note: 'Streamlined Office Desk for Modern Workspaces',
    priceZar: null,
    image: '/products/mining-student/chroma-desk-for-office.png',
    gallery: ['/products/mining-student/chroma-desk-for-office.png'],
  },
  {
    slug: 'chroma-filing-cabinet',
    name: 'Chroma Filing Cabinet',
    family: 'Chroma',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Storage',
    material: 'Mixed',
    note: 'Secure Office Storage Unit',
    priceZar: null,
    image: '/products/mining-student/chroma-filing-cabinet.jpg',
    gallery: ['/products/mining-student/chroma-filing-cabinet.jpg'],
  },
  {
    slug: 'chroma-lina-modern-desk',
    name: 'Chroma Lina',
    family: 'Chroma',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Desks',
    material: 'Mixed',
    note: 'Refined Modern Office Desk',
    priceZar: null,
    image: '/products/mining-student/chroma-lina-modern-desk.png',
    gallery: ['/products/mining-student/chroma-lina-modern-desk.png'],
  },
  {
    slug: 'chroma-loop-leg-standing-desk',
    name: 'Chroma Loop Leg Standing Desk',
    family: 'Chroma',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Desks',
    material: 'Mixed',
    note: 'Elevated Brookhill Fusion Office Desk',
    priceZar: null,
    image: '/products/mining-student/chroma-loop-leg-standing-desk.png',
    gallery: ['/products/mining-student/chroma-loop-leg-standing-desk.png'],
  },
  {
    slug: 'chroma-office-credenza',
    name: 'Chroma Office Credenza',
    family: 'Chroma',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Bedside',
    material: 'Mixed',
    note: '3-Drawer Mobile Storage Pedestal',
    priceZar: null,
    image: '/products/mining-student/chroma-office-credenza.png',
    gallery: ['/products/mining-student/chroma-office-credenza.png'],
  },
  {
    slug: 'chroma-office-credenza-pedestal',
    name: 'Chroma Office Pedestal',
    family: 'Chroma',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Bedside',
    material: 'Mixed',
    note: 'Compact Office Credenza for Storage',
    priceZar: null,
    image: '/products/mining-student/chroma-office-credenza-pedestal.jpg',
    gallery: ['/products/mining-student/chroma-office-credenza-pedestal.jpg'],
  },
  {
    slug: 'chroma-side-credenza-storage',
    name: 'Chroma Side Storage',
    family: 'Chroma',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Storage',
    material: 'Mixed',
    note: 'Multi-Purpose Credenza Cabinet',
    priceZar: null,
    image: '/products/mining-student/chroma-side-credenza-storage.png',
    gallery: ['/products/mining-student/chroma-side-credenza-storage.png'],
  },
  {
    slug: 'coffee-table-elemento-round-steel',
    name: 'Coffee Table',
    family: 'Elemento',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Tables',
    material: 'Steel',
    note: 'Elemento Round Steel Coffee Table',
    priceZar: null,
    image: '/products/mining-student/coffee-table-elemento-round-steel.jpg',
    gallery: ['/products/mining-student/coffee-table-elemento-round-steel.jpg'],
  },
  {
    slug: 'dining-room-table-square-quartz-top',
    name: 'Dining Room Table Square',
    family: 'Made@Scale',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Seating',
    material: 'Timber',
    note: 'Quartz Top with American Ash Frame',
    priceZar: null,
    image: '/products/mining-student/dining-room-table-square-quartz-top.jpeg',
    gallery: ['/products/mining-student/dining-room-table-square-quartz-top.jpeg'],
  },
  {
    slug: 'ergo-laptop-stand',
    name: 'Ergo Laptop Stand',
    family: 'Made@Scale',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Desks',
    material: 'Steel',
    note: 'Ergonomic Steel Laptop Stand for Desk or Home',
    priceZar: null,
    image: '/products/office/ergo-laptop-stand.jpg',
    gallery: ['/products/office/ergo-laptop-stand.jpg'],
  },
  {
    slug: 'occasional-chairs-lagoon-seating',
    name: 'Lagoon Occasional 1 & 2 Seater',
    family: 'Lagoon',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Seating',
    material: 'Mixed',
    note: 'Stylish Reception Seating',
    priceZar: null,
    image: '/products/office/occasional-chairs-lagoon-seating.jpg',
    gallery: ['/products/office/occasional-chairs-lagoon-seating.jpg'],
  },
  {
    slug: 'multipurpose-laptop-stand',
    name: 'Multipurpose Laptop Stand',
    family: 'Made@Scale',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Desks',
    material: 'Steel',
    note: 'Ergonomic Steel Stand for Desk and Home',
    priceZar: null,
    image: '/products/office/multipurpose-laptop-stand.jpg',
    gallery: ['/products/office/multipurpose-laptop-stand.jpg'],
  },
  {
    slug: 'occasional-chairs-reception-lounge',
    name: 'Occasional Chairs',
    family: 'Made@Scale',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Seating',
    material: 'Timber',
    note: 'Elegant Wooden Lounge Set for Entryways',
    priceZar: null,
    image: '/products/mining-student/occasional-chairs-reception-lounge.jpg',
    gallery: ['/products/mining-student/occasional-chairs-reception-lounge.jpg'],
  },
  {
    slug: 'office-chair-lunana-swivel',
    name: 'Office Chair',
    family: 'Lunana',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Seating',
    material: 'Mixed',
    note: 'Lunana Swivel Office Chair',
    priceZar: null,
    image: '/products/mining-student/office-chair-lunana-swivel.jpg',
    gallery: ['/products/mining-student/office-chair-lunana-swivel.jpg'],
  },
  {
    slug: 'ondo-round-coffee-table',
    name: 'Ondo Coffee Table',
    family: 'Ondo',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Tables',
    material: 'Mixed',
    note: 'Modern Round Steel and Wood Table',
    priceZar: null,
    image: '/products/mining-student/ondo-round-coffee-table.png',
    gallery: ['/products/mining-student/ondo-round-coffee-table.png'],
  },
  {
    slug: 'picnic-table-elemento-outdoor',
    name: 'Picnic Table',
    family: 'Elemento',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Seating',
    material: 'Mixed',
    note: 'Elemento Outdoor Dining Bench Set',
    priceZar: null,
    image: '/products/mining-student/picnic-table-elemento-outdoor.jpg',
    gallery: ['/products/mining-student/picnic-table-elemento-outdoor.jpg'],
  },
  {
    slug: 'planter-box-elemento-steel',
    name: 'Planter Box',
    family: 'Elemento',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Tables',
    material: 'Steel',
    note: 'Elemento Steel Planter',
    priceZar: null,
    image: '/products/office/planter-box-elemento-steel.jpg',
    gallery: ['/products/office/planter-box-elemento-steel.jpg'],
  },
  {
    slug: 'tekton-coffee-counter',
    name: 'Tekton Coffee Counter',
    family: 'Tekton',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Storage',
    material: 'Mixed',
    note: 'From the live Made@Scale catalogue.',
    priceZar: null,
    image: '/products/office/tekton-coffee-counter.webp',
    gallery: ['/products/office/tekton-coffee-counter.webp'],
  },
  {
    slug: 'tekton-medium-pegboard',
    name: 'Tekton Pegboard',
    family: 'Tekton',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Storage',
    material: 'Mixed',
    note: 'Medium Wall Organizer with Hooks & Trays',
    priceZar: null,
    image: '/products/office/tekton-medium-pegboard.jpg',
    gallery: ['/products/office/tekton-medium-pegboard.jpg'],
  },
  {
    slug: 'tekton-pegboard-board-small',
    name: 'Tekton Pegboard Board',
    family: 'Tekton',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Shelves',
    material: 'Mixed',
    note: 'Small Modular Wall Organizer',
    priceZar: null,
    image: '/products/office/tekton-pegboard-board-small.jpg',
    gallery: ['/products/office/tekton-pegboard-board-small.jpg'],
  },
  {
    slug: 'tekton-large-pegboard-peg-board',
    name: 'Tekton Pegboard Peg Board',
    family: 'Tekton',
    rangeSlug: 'office',
    collectionKey: 'quench',
    category: 'Shelves',
    material: 'Steel',
    note: 'Large Steel Wall Organizer',
    priceZar: null,
    image: '/products/office/tekton-large-pegboard-peg-board.jpg',
    gallery: ['/products/office/tekton-large-pegboard-peg-board.jpg'],
  },
  {
    slug: '4-seater-breakfast-table-stable',
    name: '4 Seater Breakfast Table',
    family: 'Stable',
    rangeSlug: 'hospitality-and-dining',
    collectionKey: 'grain',
    category: 'Tables',
    material: 'Mixed',
    note: 'Stable Compact Dining Table',
    priceZar: null,
    image: '/products/mining-student/4-seater-breakfast-table-stable.webp',
    gallery: ['/products/mining-student/4-seater-breakfast-table-stable.webp'],
  },
  {
    slug: 'boardroom-table-endurance-loop-leg',
    name: 'Boardroom Table',
    family: 'Endurance',
    rangeSlug: 'hospitality-and-dining',
    collectionKey: 'grain',
    category: 'Boardroom',
    material: 'Mixed',
    note: 'Endurance Loop Leg Conference Table',
    priceZar: null,
    image: '/products/mining-student/boardroom-table-endurance-loop-leg.png',
    gallery: ['/products/mining-student/boardroom-table-endurance-loop-leg.png'],
  },
  {
    slug: 'cafe-chair-bare-metal',
    name: 'Café Chair',
    family: 'Bare',
    rangeSlug: 'hospitality-and-dining',
    collectionKey: 'grain',
    category: 'Seating',
    material: 'Steel',
    note: 'Bare Upholstered Metal Chair',
    priceZar: null,
    image: '/products/hospitality/cafe-chair-bare-metal.jpg',
    gallery: ['/products/hospitality/cafe-chair-bare-metal.jpg'],
  },
  {
    slug: 'chroma-lina-standing-table',
    name: 'Chroma Lina Standing Table',
    family: 'Chroma',
    rangeSlug: 'hospitality-and-dining',
    collectionKey: 'grain',
    category: 'Tables',
    material: 'Mixed',
    note: 'Modern Round High Table for Active Spaces',
    priceZar: null,
    image: '/products/mining-student/chroma-lina-standing-table.png',
    gallery: ['/products/mining-student/chroma-lina-standing-table.png'],
  },
  {
    slug: 'communal-dining-table-nordic-acacia',
    name: 'Communal Dining Table',
    family: 'Made@Scale',
    rangeSlug: 'hospitality-and-dining',
    collectionKey: 'grain',
    category: 'Tables',
    material: 'Mixed',
    note: 'Nordic Acacia Laminate with Round Black Steel Base',
    priceZar: null,
    image: '/products/hospitality/communal-dining-table-nordic-acacia.png',
    gallery: ['/products/hospitality/communal-dining-table-nordic-acacia.png'],
  },
  {
    slug: 'dining-chair-lunana-metal',
    name: 'Dining Chair',
    family: 'Lunana',
    rangeSlug: 'hospitality-and-dining',
    collectionKey: 'grain',
    category: 'Seating',
    material: 'Steel',
    note: 'Lunana Upholstered Lounge Chair',
    priceZar: null,
    image: '/products/mining-student/dining-chair-lunana-metal.jpg',
    gallery: ['/products/mining-student/dining-chair-lunana-metal.jpg'],
  },
  {
    slug: 'dining-chair-luna-steel',
    name: 'Dining Chair',
    family: 'Luna',
    rangeSlug: 'hospitality-and-dining',
    collectionKey: 'grain',
    category: 'Seating',
    material: 'Steel',
    note: 'Luna Upholstered Steel Chair',
    priceZar: null,
    image: '/products/hospitality/dining-chair-luna-steel.jpg',
    gallery: ['/products/hospitality/dining-chair-luna-steel.jpg'],
  },
  {
    slug: 'dining-hall-table-basalt-grey',
    name: 'Dining Hall Table',
    family: 'Made@Scale',
    rangeSlug: 'hospitality-and-dining',
    collectionKey: 'grain',
    category: 'Tables',
    material: 'Steel',
    note: 'Basalt Grey Compact Laminate with Round Steel Base',
    priceZar: null,
    image: '/products/mining-student/dining-hall-table-basalt-grey.png',
    gallery: ['/products/mining-student/dining-hall-table-basalt-grey.png'],
  },
  {
    slug: 'enduro-coffee-table',
    name: 'Enduro Coffee Table',
    family: 'Enduro',
    rangeSlug: 'hospitality-and-dining',
    collectionKey: 'grain',
    category: 'Tables',
    material: 'Melawood',
    note: 'Modern Steel & Melawood Design',
    priceZar: null,
    image: '/products/mining-student/enduro-coffee-table.jpg',
    gallery: ['/products/mining-student/enduro-coffee-table.jpg'],
  },
  {
    slug: 'kitchen-table-excel-dining',
    name: 'Excel Kitchen Table',
    family: 'Excel',
    rangeSlug: 'hospitality-and-dining',
    collectionKey: 'grain',
    category: 'Tables',
    material: 'Mixed',
    note: 'Space-Efficient Dining for Shared Living',
    priceZar: null,
    image: '/products/mining-student/kitchen-table-excel-dining.webp',
    gallery: ['/products/mining-student/kitchen-table-excel-dining.webp'],
  },
  {
    slug: 'guest-room-furniture-tango-hospitality-set',
    name: 'Hospitality Set',
    family: 'Tango',
    rangeSlug: 'hospitality-and-dining',
    collectionKey: 'kiln',
    category: 'Guest packs',
    material: 'Mixed',
    note: 'The Tango Guest Room Furniture Pack',
    priceZar: null,
    image: '/products/mining-student/guest-room-furniture-tango-hospitality-set.jpg',
    gallery: ['/products/mining-student/guest-room-furniture-tango-hospitality-set.jpg'],
  },
  {
    slug: 'long-table-lamellae-rectangular',
    name: 'Long Table',
    family: 'Lamellae',
    rangeSlug: 'hospitality-and-dining',
    collectionKey: 'grain',
    category: 'Boardroom',
    material: 'Timber',
    note: 'Lamellae Wood-Finished Dining Table',
    priceZar: null,
    image: '/products/mining-student/long-table-lamellae-rectangular.jpg',
    gallery: ['/products/mining-student/long-table-lamellae-rectangular.jpg'],
  },
  {
    slug: 'long-table-spine-modular',
    name: 'Long Table',
    family: 'Spine',
    rangeSlug: 'hospitality-and-dining',
    collectionKey: 'spine',
    category: 'Boardroom',
    material: 'Mixed',
    note: 'Spine Modular Table with Laminate Top',
    priceZar: null,
    image: '/products/mining-student/long-table-spine-modular.webp',
    gallery: ['/products/mining-student/long-table-spine-modular.webp'],
  },
  {
    slug: 'lounge-chair-jill-wooden-frame',
    name: 'Lounge Chair',
    family: 'Jill',
    rangeSlug: 'hospitality-and-dining',
    collectionKey: 'grain',
    category: 'Seating',
    material: 'Timber',
    note: 'Jill Occasional Chair with Wooden Frame',
    priceZar: null,
    image: '/products/hospitality/lounge-chair-jill-wooden-frame.jpg',
    gallery: ['/products/hospitality/lounge-chair-jill-wooden-frame.jpg'],
  },
  {
    slug: 'sculpted-occasional-chairs',
    name: 'Occasional Chairs',
    family: 'Made@Scale',
    rangeSlug: 'hospitality-and-dining',
    collectionKey: 'grain',
    category: 'Seating',
    material: 'Mixed',
    note: 'Sculpted Accent Seating for Living Room',
    priceZar: null,
    image: '/products/hospitality/sculpted-occasional-chairs.jpg',
    gallery: ['/products/hospitality/sculpted-occasional-chairs.jpg'],
  },
  {
    slug: 'wooden-dining-table-elemento-round',
    name: 'Wooden Dining Table',
    family: 'Elemento',
    rangeSlug: 'hospitality-and-dining',
    collectionKey: 'grain',
    category: 'Tables',
    material: 'Timber',
    note: 'Elemento Round Dining Table with Mela Top',
    priceZar: null,
    image: '/products/mining-student/wooden-dining-table-elemento-round.jpg',
    gallery: ['/products/mining-student/wooden-dining-table-elemento-round.jpg'],
  },
  {
    slug: 'wooden-dining-table-lagoon-4-seater',
    name: 'Wooden Dining Table',
    family: 'Lagoon',
    rangeSlug: 'hospitality-and-dining',
    collectionKey: 'grain',
    category: 'Seating',
    material: 'Timber',
    note: 'Lagoon 4 Seater with Upholstered Chairs',
    priceZar: null,
    image: '/products/mining-student/wooden-dining-table-lagoon-4-seater.jpeg',
    gallery: ['/products/mining-student/wooden-dining-table-lagoon-4-seater.jpeg'],
  },
  {
    slug: 'bathroom-vanity-tekton-cabinet',
    name: 'Bathroom Vanity',
    family: 'Tekton',
    rangeSlug: 'bathroom-and-kitchen',
    collectionKey: 'kiln',
    category: 'Vanity',
    material: 'Mixed',
    note: 'Tekton Vanity Cabinet with Basin',
    priceZar: null,
    image: '/products/bathroom-kitchen/bathroom-vanity-tekton-cabinet.jpg',
    gallery: ['/products/bathroom-kitchen/bathroom-vanity-tekton-cabinet.jpg'],
  },
  {
    slug: 'grab-rail-elemento-safety-support',
    name: 'Grab Rail',
    family: 'Elemento',
    rangeSlug: 'bathroom-and-kitchen',
    collectionKey: 'kiln',
    category: 'Fixtures',
    material: 'Mixed',
    note: 'Elemento Bathroom Support Rail',
    priceZar: null,
    image: '/products/bathroom-kitchen/grab-rail-elemento-safety-support.jpg',
    gallery: ['/products/bathroom-kitchen/grab-rail-elemento-safety-support.jpg'],
  },
  {
    slug: 'kitchen-towel-holder-wall-mounted-tekton',
    name: 'Kitchen Towel Holder',
    family: 'Tekton',
    rangeSlug: 'bathroom-and-kitchen',
    collectionKey: 'kiln',
    category: 'Fixtures',
    material: 'Steel',
    note: 'Tekton Wall-Mounted Steel Rail',
    priceZar: null,
    image: '/products/bathroom-kitchen/kitchen-towel-holder-wall-mounted-tekton.jpg',
    gallery: ['/products/bathroom-kitchen/kitchen-towel-holder-wall-mounted-tekton.jpg'],
  },
  {
    slug: 'kitchen-sink-tekton-steel-kitchenette',
    name: 'Kitchenette',
    family: 'Tekton',
    rangeSlug: 'bathroom-and-kitchen',
    collectionKey: 'kiln',
    category: 'Kitchenette',
    material: 'Steel',
    note: 'Tekton Steel Kitchenette with Sink',
    priceZar: null,
    image: '/products/bathroom-kitchen/kitchen-sink-tekton-steel-kitchenette.jpg',
    gallery: ['/products/bathroom-kitchen/kitchen-sink-tekton-steel-kitchenette.jpg'],
  },
  {
    slug: 'robe-hook-elemento-wall-mounted',
    name: 'Robe Hook',
    family: 'Elemento',
    rangeSlug: 'bathroom-and-kitchen',
    collectionKey: 'kiln',
    category: 'Fixtures',
    material: 'Steel',
    note: 'Elemento Wall-Mounted Steel Hook',
    priceZar: null,
    image: '/products/bathroom-kitchen/robe-hook-elemento-wall-mounted.jpg',
    gallery: ['/products/bathroom-kitchen/robe-hook-elemento-wall-mounted.jpg'],
  },
  {
    slug: 'shower-shelf-elemento-bathroom',
    name: 'Shower Shelf',
    family: 'Elemento',
    rangeSlug: 'bathroom-and-kitchen',
    collectionKey: 'kiln',
    category: 'Shelves',
    material: 'Steel',
    note: 'Elemento Steel Bathroom Shelf',
    priceZar: null,
    image: '/products/bathroom-kitchen/shower-shelf-elemento-bathroom.jpg',
    gallery: ['/products/bathroom-kitchen/shower-shelf-elemento-bathroom.jpg'],
  },
  {
    slug: 'shower-tray-elemento-flat-base',
    name: 'Shower Tray',
    family: 'Elemento',
    rangeSlug: 'bathroom-and-kitchen',
    collectionKey: 'kiln',
    category: 'Fixtures',
    material: 'Mixed',
    note: 'Elemento Flat Base Tray',
    priceZar: null,
    image: '/products/bathroom-kitchen/shower-tray-elemento-flat-base.jpg',
    gallery: ['/products/bathroom-kitchen/shower-tray-elemento-flat-base.jpg'],
  },
  {
    slug: 'tekton-cabinet-kitchen-design-steel-sink',
    name: 'Tekton Steel Kitchen Counter with Sink',
    family: 'Tekton',
    rangeSlug: 'bathroom-and-kitchen',
    collectionKey: 'kiln',
    category: 'Kitchenette',
    material: 'Steel',
    note: 'A robust all-steel cabinet kitchen design with integrated sink and three-door storage – perfect for shared kitchens and small modular environments.',
    priceZar: null,
    image: '/products/bathroom-kitchen/tekton-cabinet-kitchen-design-steel-sink.png',
    gallery: ['/products/bathroom-kitchen/tekton-cabinet-kitchen-design-steel-sink.png'],
  },
  {
    slug: 'toilet-roll-holder-elemento-lux',
    name: 'Toilet Roll Holder',
    family: 'Elemento',
    rangeSlug: 'bathroom-and-kitchen',
    collectionKey: 'kiln',
    category: 'Fixtures',
    material: 'Mixed',
    note: 'Elemento Lux Wall Mount',
    priceZar: null,
    image: '/products/bathroom-kitchen/toilet-roll-holder-elemento-lux.jpg',
    gallery: ['/products/bathroom-kitchen/toilet-roll-holder-elemento-lux.jpg'],
  },
  {
    slug: 'towel-rail-elemento-bathroom',
    name: 'Towel Rail',
    family: 'Elemento',
    rangeSlug: 'bathroom-and-kitchen',
    collectionKey: 'kiln',
    category: 'Fixtures',
    material: 'Mixed',
    note: 'Elemento Wall-Mounted Bathroom Rail',
    priceZar: null,
    image: '/products/bathroom-kitchen/towel-rail-elemento-bathroom.jpg',
    gallery: ['/products/bathroom-kitchen/towel-rail-elemento-bathroom.jpg'],
  },
  {
    slug: 'bench-melody-upholstered-seating',
    name: 'Bench',
    family: 'Melody',
    rangeSlug: 'entertainment',
    collectionKey: 'grain',
    category: 'Seating',
    material: 'Mixed',
    note: 'Melody Upholstered 2-Seater Bench',
    priceZar: null,
    image: '/products/entertainment/bench-melody-upholstered-seating.jpg',
    gallery: ['/products/entertainment/bench-melody-upholstered-seating.jpg'],
  },
  {
    slug: 'boardroom-table-brute-conference',
    name: 'Boardroom Table',
    family: 'Brute',
    rangeSlug: 'entertainment',
    collectionKey: 'spine',
    category: 'Boardroom',
    material: 'Steel',
    note: 'Brute Steel Frame Conference Table',
    priceZar: null,
    image: '/products/mining-student/boardroom-table-brute-conference.jpg',
    gallery: ['/products/mining-student/boardroom-table-brute-conference.jpg'],
  },
  {
    slug: 'chroma-lina-small-table',
    name: 'Chroma Lina Table',
    family: 'Chroma',
    rangeSlug: 'entertainment',
    collectionKey: 'grain',
    category: 'Tables',
    material: 'Mixed',
    note: 'Compact Dining or Accent Table',
    priceZar: null,
    image: '/products/mining-student/chroma-lina-small-table.png',
    gallery: ['/products/mining-student/chroma-lina-small-table.png'],
  },
  {
    slug: 'coffee-table-brute-steel-rectangular',
    name: 'Coffee Table',
    family: 'Brute',
    rangeSlug: 'entertainment',
    collectionKey: 'spine',
    category: 'Tables',
    material: 'Steel',
    note: 'Brute Rectangular Steel Frame Table',
    priceZar: null,
    image: '/products/mining-student/coffee-table-brute-steel-rectangular.jpg',
    gallery: ['/products/mining-student/coffee-table-brute-steel-rectangular.jpg'],
  },
  {
    slug: 'couches-small-living-room-lounge-sofa',
    name: 'Couches',
    family: 'Made@Scale',
    rangeSlug: 'entertainment',
    collectionKey: 'grain',
    category: 'Seating',
    material: 'Mixed',
    note: '2 Seater Lounge Sofa for Small Living Room',
    priceZar: null,
    image: '/products/entertainment/couches-small-living-room-lounge-sofa.jpeg',
    gallery: ['/products/entertainment/couches-small-living-room-lounge-sofa.jpeg'],
  },
  {
    slug: 'elemento-wood-shelf-firewood-holder',
    name: 'Elemento Firewood Shelf',
    family: 'Elemento',
    rangeSlug: 'entertainment',
    collectionKey: 'grain',
    category: 'Shelves',
    material: 'Timber',
    note: 'Modern Powder-Coated Wood Shelf',
    priceZar: null,
    image: '/products/entertainment/elemento-wood-shelf-firewood-holder.webp',
    gallery: ['/products/entertainment/elemento-wood-shelf-firewood-holder.webp'],
  },
  {
    slug: 'java-wooden-coffee-table',
    name: 'Java Coffee Table',
    family: 'Java',
    rangeSlug: 'entertainment',
    collectionKey: 'grain',
    category: 'Seating',
    material: 'Timber',
    note: 'Timeless Wooden Lounge Accent',
    priceZar: null,
    image: '/products/entertainment/java-wooden-coffee-table.jpg',
    gallery: ['/products/entertainment/java-wooden-coffee-table.jpg'],
  },
  {
    slug: 'meeting-table-brute-breakaway-office',
    name: 'Meeting Table',
    family: 'Brute',
    rangeSlug: 'entertainment',
    collectionKey: 'spine',
    category: 'Boardroom',
    material: 'Mixed',
    note: 'Brute Breakaway Conference Table',
    priceZar: null,
    image: '/products/mining-student/meeting-table-brute-breakaway-office.jpg',
    gallery: ['/products/mining-student/meeting-table-brute-breakaway-office.jpg'],
  },
  {
    slug: 'nesting-table-elemento-side-set',
    name: 'Nesting Table',
    family: 'Elemento',
    rangeSlug: 'entertainment',
    collectionKey: 'grain',
    category: 'Tables',
    material: 'Mixed',
    note: 'Elemento Round Stackable Tables',
    priceZar: null,
    image: '/products/mining-student/nesting-table-elemento-side-set.webp',
    gallery: ['/products/mining-student/nesting-table-elemento-side-set.webp'],
  },
  {
    slug: 'tv-cabinet-elemento-stand-storage',
    name: 'TV Cabinet',
    family: 'Elemento',
    rangeSlug: 'entertainment',
    collectionKey: 'grain',
    category: 'Storage',
    material: 'Mixed',
    note: 'Elemento Entertainment Stand with Storage',
    priceZar: null,
    image: '/products/entertainment/tv-cabinet-elemento-stand-storage.jpg',
    gallery: ['/products/entertainment/tv-cabinet-elemento-stand-storage.jpg'],
  },
];

export function productBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function productsByRange(rangeSlug: string) {
  return products.filter((p) => p.rangeSlug === rangeSlug);
}

export function productsByCollection(collectionKey: CollectionKey) {
  return products.filter((p) => p.collectionKey === collectionKey);
}

export function collectionForProduct(product: Product) {
  return collections.find((c) => c.key === product.collectionKey);
}

/** Unique facet values from local catalogue stubs. */
export function facetOptions(from: Product[] = products) {
  const categories = Array.from(new Set(from.map((p) => p.category))).sort();
  const mats = Array.from(new Set(from.map((p) => p.material))).sort();
  const cols = Array.from(new Set(from.map((p) => p.collectionKey)));
  return { categories, materials: mats, collectionKeys: cols };
}

/** Format public ZAR when present; otherwise Request quote. */
export function formatPriceZar(priceZar: number | null): string {
  if (priceZar == null || Number.isNaN(priceZar)) return "Request quote";
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
    maximumFractionDigits: 0,
  }).format(priceZar);
}

export const primaryNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  {
    href: "/showroom",
    label: "Showroom",
    children: ranges.map((r) => ({ href: `/showroom/${r.slug}`, label: r.name })),
  },
  {
    href: "/collections",
    label: "Collections",
    children: collections.map((c) => ({
      href: `/collections/${c.slug}`,
      label: c.label,
    })),
  },
  { href: "/contact", label: "Contact" },
  { href: "/trade", label: "Trade" },
];

export function rangeBySlug(slug: string) {
  return ranges.find((r) => r.slug === slug);
}

export function collectionBySlug(slug: string) {
  return collections.find((c) => c.slug === slug);
}

/** Best local product photo for a collection tile / hero. */
export function collectionHeroImage(collectionKey: CollectionKey): string | undefined {
  const prefs: Partial<Record<CollectionKey, string[]>> = {
    load: [
      "bunk-bed-excel-metal-flat-pack",
      "steel-bed-excel-frame",
      "chroma-tutor-desk",
      "excel-study-desk",
    ],
    quench: [
      "chroma-desk-for-office",
      "chroma-6-way-cluster-desk-for-office",
      "boardroom-table-american-walnut",
    ],
    grain: [
      "wooden-dining-table-elemento-round",
      "wooden-dining-table-lagoon-4-seater",
      "couches-small-living-room-lounge-sofa",
    ],
    kiln: [
      "bathroom-vanity-tekton-cabinet",
      "guest-room-furniture-tango-hospitality-set",
      "tekton-cabinet-kitchen-design-steel-sink",
    ],
    spine: [
      "boardroom-table-brute-conference",
      "meeting-table-brute-breakaway-office",
      "coffee-table-brute-steel-rectangular",
      "long-table-spine-modular",
    ],
  };
  for (const slug of prefs[collectionKey] ?? []) {
    const p = productBySlug(slug);
    if (p?.image) return p.image;
  }
  return productsByCollection(collectionKey).find((p) => p.image)?.image;
}

/**
 * Showroom sub-categories with their own landing pages (Ahrefs A4, Oct 2026):
 * "office couches" (90/mo) and "bedside cabinet" (80/mo). Product slugs are
 * the live catalogue pieces listed on the matching madeatscale.com showroom page.
 */
export const subcategories = [
  {
    rangeSlug: "office",
    slug: "office-couches",
    group: "Couches",
    name: "Office Couches",
    title: "Office Couches & Reception Sofas",
    description:
      "Office couches from our Centurion furniture factory — 2-seater lounge sofas, upholstered benches and reception seating for waiting areas, breakout spaces and executive lounges.",
    lede:
      "2-seater lounge sofas, upholstered benches and reception seating. Built for comfort and professional style in office waiting areas, breakout spaces and executive lounges — made and fulfilled from our Centurion furniture factory.",
    productSlugs: [
      "couches-small-living-room-lounge-sofa",
      "bench-melody-upholstered-seating",
      "occasional-chairs-lagoon-seating",
      "occasional-chairs-reception-lounge",
    ],
    related: [
      { href: "/showroom/office", label: "Office furniture" },
      { href: "/showroom/entertainment", label: "Couches for entertainment spaces" },
    ],
  },
  {
    rangeSlug: "bedroom",
    slug: "bedside-tables",
    group: "Bedside Tables",
    name: "Bedside Tables & Bedside Cabinets",
    title: "Bedside Tables & Bedside Cabinets",
    description:
      "Bedside tables and bedside cabinets in steel and wood, with smart storage. Made in Centurion for student housing, mining accommodation, hospitality and homes.",
    lede:
      "Compact steel and wood bedside tables and bedside cabinets with smart storage. Built to last for student housing, mining accommodation, hospitality and residential bedrooms — made in our Centurion furniture factory.",
    productSlugs: [
      "bedside-cabinet-table-tekton",
      "bedside-cabinet-table-elemento",
      "bedside-table-elemento-eco",
      "excel-bedside-table",
    ],
    related: [
      { href: "/showroom/bedroom", label: "Bedroom furniture" },
      { href: "/showroom/mining-and-student-living", label: "Mining & student living" },
    ],
  },
  {
    rangeSlug: "mining-and-student-living",
    slug: "steel-bunk-beds",
    group: "Beds",
    name: "Steel Bunk Beds & Loft Beds",
    title: "Steel Bunk Beds & Loft Beds for Mining & Student Housing",
    description:
      "Steel bunk beds, loft beds and single and double bed frames for mining camps and student housing. Flat-pack, easy to assemble, made in Centurion.",
    lede:
      "Our steel bunk beds, loft beds and single and double bed frames are engineered for strength, easy assembly and long service life. Built for mining camps, student housing and dorm rooms, they make the most of every room without compromising comfort.",
    productSlugs: [
      "bunk-beds-and-loft-beds-dorm-frame",
      "bunk-bed-excel-metal-flat-pack",
      "steel-bed-excel-frame",
      "single-bed-elemento-frame",
      "double-bed-elemento-steel-frame",
      "enduro-steel-bed",
    ],
    related: [
      { href: "/showroom/mining-and-student-living", label: "Mining & student living furniture" },
      { href: "/showroom/bedroom/bedside-tables", label: "Bedside tables & bedside cabinets" },
      { href: "/showroom/mining-and-student-living/steel-lockers", label: "Steel lockers & storage" },
    ],
  },
  {
    rangeSlug: "mining-and-student-living",
    slug: "steel-lockers",
    group: "Storage",
    name: "Steel Lockers & Storage",
    title: "Steel Lockers & Steel Cupboards | Secure Storage",
    description:
      "Steel lockers, steel cupboards and multi-purpose cabinets for secure, organised storage in mining camps, student housing, offices and schools. Made in Centurion.",
    lede:
      "Our storage range covers steel lockers, steel cupboards and multi-purpose cabinets for secure, organised living. Built to withstand heavy use, they keep personal and communal spaces tidy in mining accommodation, student residences and offices.",
    productSlugs: [
      "chroma-steel-locker-cabinet",
      "chroma-short-locker-cabinet",
      "cabinet-tekton-economy-bic",
      "cupboard-endurance-bic-melawood",
      "chroma-filing-cabinet",
    ],
    related: [
      { href: "/showroom/mining-and-student-living/steel-bunk-beds", label: "Steel bunk beds" },
      { href: "/showroom/office", label: "Office furniture" },
    ],
  },
  {
    rangeSlug: "bathroom-and-kitchen",
    slug: "kitchenettes",
    group: "Kitchenette",
    name: "Kitchenettes & Kitchenette Counters",
    title: "Kitchenettes & Kitchenette Units | Steel Counters with Sinks",
    description:
      "Steel kitchenettes and kitchenette units with integrated sinks or storage, for student housing, hospitality and office break areas. Fulfilled from Centurion.",
    lede:
      "Durable steel kitchenettes, kitchen counters and coffee counters for student housing, hospitality and office break areas. Each unit combines a practical layout with an integrated sink or storage, so meal prep and beverage service stay efficient.",
    productSlugs: [
      "kitchen-sink-tekton-steel-kitchenette",
      "tekton-cabinet-kitchen-design-steel-sink",
      "tekton-coffee-counter",
      "guest-room-furniture-tango-hospitality-set",
    ],
    related: [
      { href: "/showroom/bathroom-and-kitchen", label: "Bathroom & kitchen furniture" },
      { href: "/showroom/hospitality-and-dining", label: "Hospitality & dining" },
    ],
  },
  {
    rangeSlug: "bedroom",
    slug: "study-desks",
    group: "Desks",
    name: "Study Desks",
    title: "Study Desks for Small Bedrooms & Student Housing",
    description:
      "Compact study desks, wall-mounted workstations and modern desks built for comfort and productivity in small bedrooms and student housing. Made in Centurion.",
    lede:
      "Compact study desks, wall-mounted workstations and modern desks, built for comfort and productivity in small bedrooms, student residences and mining accommodation.",
    productSlugs: [
      "excel-study-desk",
      "study-desk-wall-mounted-tekton",
      "study-desk-elemento-compact",
      "chroma-budget-loop-desk-for-sale",
      "chroma-tutor-desk",
    ],
    related: [
      { href: "/showroom/bedroom", label: "Bedroom furniture" },
      { href: "/showroom/office", label: "Office desks" },
    ],
  },
  {
    rangeSlug: "office",
    slug: "office-accessories",
    group: "Accessories",
    name: "Laptop Stands & Pegboards",
    title: "Laptop Stands & Steel Pegboards | Office Accessories",
    description:
      "Powder-coated steel laptop stands and Tekton pegboard wall organisers with hooks, trays and boxes for offices, studios and workshops. Made in Centurion.",
    lede:
      "Ergonomic steel laptop stands for desk, sofa or bed, and Tekton pegboard wall organisers in small, medium and large sizes with modular hooks, trays and boxes for offices, studios and workshops.",
    productSlugs: [
      "ergo-laptop-stand",
      "multipurpose-laptop-stand",
      "tekton-pegboard-board-small",
      "tekton-medium-pegboard",
      "tekton-large-pegboard-peg-board",
    ],
    related: [
      { href: "/showroom/office", label: "Office furniture" },
      { href: "/showroom/office/office-couches", label: "Office couches" },
    ],
  },
] as const;

export type Subcategory = (typeof subcategories)[number];

export function subcategoryBySlugs(rangeSlug: string, slug: string) {
  return subcategories.find((s) => s.rangeSlug === rangeSlug && s.slug === slug);
}

export function subcategoryForGroup(rangeSlug: string, group: string) {
  return subcategories.find((s) => s.rangeSlug === rangeSlug && s.group === group);
}

export function subcategoryForProduct(productSlug: string) {
  return subcategories.find((s) => (s.productSlugs as readonly string[]).includes(productSlug));
}

export function subcategoryHref(s: Subcategory) {
  return `/showroom/${s.rangeSlug}/${s.slug}`;
}

/** SEO title for a product: family line + live descriptor, both from the live catalogue. */
export function productSeoTitle(p: Product): string {
  const note = p.note.length <= 70 ? p.note : "";
  const base = note && !p.name.includes(note) ? `${p.name} – ${note}` : p.name;
  return base;
}

/** Meta description for a product, built only from catalogue facts. */
export function productSeoDescription(p: Product): string {
  const range = rangeBySlug(p.rangeSlug);
  const lead = p.note.length > 70 ? p.note : `${p.name}: ${p.note}.`;
  const tail = ` ${p.family !== "Made@Scale" ? p.family + " line, " : ""}${range ? range.name.toLowerCase() + " range" : "Made@Scale"}. Made in our Centurion furniture factory.`;
  return (lead + tail).slice(0, 300);
}

/** SEO titles for range pages (keyword-led, mirroring the live Rank Math titles). */
export const rangeSeo: Record<string, { title: string; description: string }> = {
  office: {
    title: "Office Furniture | Desks, Chairs, Boardroom & Storage",
    description:
      "Office furniture from our Centurion furniture factory: office desks, cluster workstations, office chairs, boardroom tables, office couches and steel storage.",
  },
  bedroom: {
    title: "Bedroom Furniture | Beds, Wardrobes, Study Desks & Bedside Tables",
    description:
      "Bedroom furniture built to last: steel beds, wardrobes and cupboards, study desks and bedside tables for student housing, hospitality and homes. Made in Centurion.",
  },
  "mining-and-student-living": {
    title: "Mining & Student Accommodation Furniture | Bunk Beds, Lockers & Desks",
    description:
      "Mining and student living furniture: steel bunk beds, compact desks, steel lockers, wardrobes and seating built for high-use accommodation. Made in Centurion.",
  },
  "bathroom-and-kitchen": {
    title: "Bathroom & Kitchen Furniture | Kitchenettes, Vanities & Fixtures",
    description:
      "Steel kitchenettes with sinks, bathroom vanity units and bathroom fixtures for student housing, hospitality and offices. Made in our Centurion furniture factory.",
  },
  entertainment: {
    title: "Entertainment Furniture | Couches, Coffee Tables & TV Stands",
    description:
      "Couches, coffee and side tables, TV stands and tables for lounges, lodges and shared living rooms. Made in our Centurion furniture factory.",
  },
  "hospitality-and-dining": {
    title: "Hospitality & Dining Furniture | Dining Tables, Chairs & Guest-Room Sets",
    description:
      "Dining tables, dining chairs, bar stools and guest-room furniture packs for hotels, lodges, canteens and residences. Made in our Centurion furniture factory.",
  },
};
