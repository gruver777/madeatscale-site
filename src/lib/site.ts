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
  },
  {
    slug: "bedroom",
    name: "Bedroom",
    blurb: "Beds, wardrobes, and study pieces that stay composed after years of hard occupation.",
    groups: ["Beds", "Shelves", "Bedside Tables", "Cupboards", "Desks"],
    lines: ["Excel", "Elemento", "Chroma"],
    tone: "timber",
  },
  {
    slug: "entertainment",
    name: "Entertainment",
    blurb: "Couches, side tables, and media pieces for lodges, lounges, and shared living rooms.",
    groups: ["Couches", "Side Tables", "Tables", "TV Stands"],
    lines: ["Elemento", "Lagoon"],
    tone: "bronze",
  },
  {
    slug: "hospitality-and-dining",
    name: "Hospitality & Dining",
    blurb: "Guest-room sets and dining rooms specified for hotels, lodges, and residences.",
    groups: ["Dining Room", "Seating", "Tables"],
    lines: ["Tango", "Elemento", "Endurance"],
    tone: "cream",
  },
  {
    slug: "mining-and-student-living",
    name: "Mining & Student Living",
    blurb: "Accommodation furniture built for occupancy, not showrooms — still considered in the room.",
    groups: ["Beds", "Bedside Tables", "Chairs", "Desks", "Storage", "Tables", "Wardrobes"],
    lines: ["Excel", "Chroma", "Brute", "Elemento"],
    tone: "industrial",
  },
  {
    slug: "office",
    name: "Office",
    blurb: "Desks, boardrooms, storage, and seating for workplaces that need to last a decade.",
    groups: ["Boardroom", "Canteen", "Chairs", "Couches", "Desks", "Dividers", "Storage"],
    lines: ["Chroma", "Endurance", "Lagoon"],
    tone: "slate",
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
  | "Guest packs";

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
  materialsList?: string[];
  dimensionsNote?: string;
};

export const products: Product[] = [
  {
    slug: "chroma-desk",
    name: "Chroma Desk",
    family: "Chroma",
    rangeSlug: "office",
    collectionKey: "quench",
    category: "Desks",
    material: "Steel",
    note: "Streamlined steel-framed workplace desk.",
    priceZar: null,
    materialsList: ["Powder-coated steel frame", "Melawood top"],
    dimensionsNote: "Specify width / depth with sales — catalogue variants pending migration.",
  },
  {
    slug: "chroma-tutor-desk",
    name: "Chroma Tutor Desk",
    family: "Chroma",
    rangeSlug: "mining-and-student-living",
    collectionKey: "quench",
    category: "Desks",
    material: "Steel",
    note: "Compact steel-framed teacher’s desk.",
    priceZar: null,
    materialsList: ["Powder-coated steel", "Melawood"],
  },
  {
    slug: "boardroom-walnut",
    name: "Boardroom Walnut",
    family: "Chroma",
    rangeSlug: "office",
    collectionKey: "quench",
    category: "Boardroom",
    material: "Timber",
    note: "Boardroom table in walnut timber — statement work surface.",
    priceZar: null,
    materialsList: ["Walnut timber top", "Steel underframe"],
  },
  {
    slug: "elemento-eco-bedside",
    name: "Elemento Eco Bedside",
    family: "Elemento",
    rangeSlug: "bedroom",
    collectionKey: "kiln",
    category: "Bedside",
    material: "Melawood",
    note: "Eco bedside for guest rooms and residences.",
    priceZar: null,
    materialsList: ["Melawood", "Quiet hardware"],
  },
  {
    slug: "elemento-round-dining-table",
    name: "Elemento Round Dining Table",
    family: "Elemento",
    rangeSlug: "hospitality-and-dining",
    collectionKey: "grain",
    category: "Tables",
    material: "Timber",
    note: "Timber top, considered proportion.",
    priceZar: null,
    materialsList: ["Solid / engineered timber top", "Steel base"],
  },
  {
    slug: "tekton-vanity",
    name: "Tekton Vanity",
    family: "Tekton",
    rangeSlug: "bathroom-and-kitchen",
    collectionKey: "kiln",
    category: "Vanity",
    material: "Mixed",
    note: "Cabinet and basin, hospitality-ready.",
    priceZar: null,
    materialsList: ["Steel / Melawood cabinet", "Basin by specification"],
  },
  {
    slug: "tekton-kitchenette",
    name: "Tekton Kitchenette",
    family: "Tekton",
    rangeSlug: "bathroom-and-kitchen",
    collectionKey: "kiln",
    category: "Kitchenette",
    material: "Mixed",
    note: "Hospitality kitchenette unit — compact, durable detailing.",
    priceZar: null,
    materialsList: ["Steel frame", "Melawood carcass", "Worktop by finish"],
  },
  {
    slug: "tango-guest-room-pack",
    name: "Tango Guest Room Pack",
    family: "Tango",
    rangeSlug: "hospitality-and-dining",
    collectionKey: "kiln",
    category: "Guest packs",
    material: "Mixed",
    note: "A complete guest-room furniture set.",
    priceZar: null,
    materialsList: ["Mixed steel and timber pack"],
  },
  {
    slug: "endurance-coffee-table",
    name: "Endurance Coffee Table",
    family: "Endurance",
    rangeSlug: "entertainment",
    collectionKey: "load",
    category: "Tables",
    material: "Steel",
    note: "Low coffee table built for lounge occupancy.",
    priceZar: null,
    materialsList: ["Powder-coated steel", "Timber / Melawood top options"],
  },
  {
    slug: "excel-metal-bunk",
    name: "Excel Metal Bunk",
    family: "Excel",
    rangeSlug: "bedroom",
    collectionKey: "load",
    category: "Beds",
    material: "Steel",
    note: "Flat-pack steel frame for dorm rooms.",
    priceZar: null,
    materialsList: ["Powder-coated steel", "Flat-pack hardware"],
  },
  {
    slug: "excel-bunk",
    name: "Excel Bunk",
    family: "Excel",
    rangeSlug: "mining-and-student-living",
    collectionKey: "load",
    category: "Beds",
    material: "Steel",
    note: "Campus and mancamp bunk — occupancy-first steel.",
    priceZar: null,
    materialsList: ["Powder-coated steel"],
  },
  {
    slug: "lagoon-chairs",
    name: "Lagoon Chairs",
    family: "Lagoon",
    rangeSlug: "hospitality-and-dining",
    collectionKey: "grain",
    category: "Seating",
    material: "Mixed",
    note: "Dining and lounge seating from the Lagoon line.",
    priceZar: null,
    materialsList: ["Steel frame", "Upholstery / timber options"],
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
