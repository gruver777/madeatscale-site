/**
 * Cape Town / coastal lifestyle stills (Unsplash) for hero + strips.
 * Local files under /public/lifestyle — credit discreetly in footer / alt.
 */
export type LifestyleShot = {
  src: string;
  alt: string;
  caption?: string;
};

export const lifestyle = {
  /** Homepage hero right panel */
  hero: {
    src: "/lifestyle/camps-bay-aerial.jpg",
    alt: "Aerial view of Camps Bay beach and Atlantic seaboard, Cape Town",
    caption: "Camps Bay · Atlantic",
  },
  /** Full-bleed coastal band — prefer Lion’s Head / Blouberg swell */
  coastal: {
    src: "/lifestyle/lions-head-oceanfront.jpg",
    alt: "Lion’s Head over the Atlantic oceanfront, Cape Town",
    caption: "Made for African light",
  },
  coastalAlt: {
    src: "/lifestyle/blouberg-atlantic-swell.jpg",
    alt: "Atlantic swell toward Bloubergstrand, Cape Town",
    caption: "Atlantic · Blouberg",
  },
  ridge: {
    src: "/lifestyle/lions-head-ocean-ridge.jpg",
    alt: "Lion’s Head ridge above the Atlantic, Cape Town",
    caption: "Lion’s Head · Atlantic",
  },
  /** About page banner */
  about: {
    src: "/lifestyle/cape-town-city-bowl.jpg",
    alt: "Cape Town City Bowl under Table Mountain",
    caption: "Cape Town · City Bowl",
  },
  /** Contact subtle header */
  contact: {
    src: "/lifestyle/table-mountain-classic.jpg",
    alt: "Classic Table Mountain silhouette over the Cape peninsula",
    caption: "Table Mountain",
  },
  blouberg: {
    src: "/lifestyle/blouberg-table-mountain-sunset.jpg",
    alt: "Table Mountain across the Atlantic from Bloubergstrand at sunset",
    caption: "Blouberg · Table Mountain",
  },
  campsBayCoast: {
    src: "/lifestyle/camps-bay-coast.jpg",
    alt: "Camps Bay coastline and Twelve Apostles, Cape Town",
  },
  oceanSunset: {
    src: "/lifestyle/table-mountain-ocean-sunset.jpg",
    alt: "Table Mountain meeting the ocean at sunset, Cape Town",
  },
  chapmans: {
    src: "/lifestyle/chapmans-peak-coast.jpg",
    alt: "Chapman’s Peak Drive coastal cliffs, Cape Town",
  },
} as const satisfies Record<string, LifestyleShot>;

export const lifestyleCreditNote = "Photography — Unsplash (Cape Town)";
