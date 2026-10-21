import type { NextConfig } from "next";
import { legacyRedirects } from "./src/lib/legacy-redirects";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Latest Designs killed — keep a 301 for bookmarks / old nav
      {
        source: "/latest-designs",
        destination: "/showroom",
        permanent: true,
      },
      {
        source: "/latest-designs/:path*",
        destination: "/showroom",
        permanent: true,
      },
      // Legacy TBD collection slugs → locked names
      { source: "/collections/tbd-workplace", destination: "/collections/quench", permanent: true },
      { source: "/collections/tbd-dining", destination: "/collections/grain", permanent: true },
      { source: "/collections/tbd-hospitality", destination: "/collections/kiln", permanent: true },
      { source: "/collections/tbd-campus", destination: "/collections/load", permanent: true },
      { source: "/collections/tbd-statement", destination: "/collections/spine", permanent: true },
      // Live WP Centurion landing page slug → rebuild route (Ahrefs A4)
      {
        source: "/furniture-shop-centurion-online",
        destination: "/furniture-shop-centurion",
        permanent: true,
      },
      // Live WP showroom sub-category slugs → rebuild routes
      {
        source: "/showroom/bedroom-furniture/bedside-tables",
        destination: "/showroom/bedroom/bedside-tables",
        permanent: true,
      },
      // Where to Buy folded into Contact
      {
        source: "/where-to-buy",
        destination: "/contact",
        permanent: true,
      },
      // Every live madeatscale.com WordPress URL → rebuild route (SEO cutover map)
      ...legacyRedirects,
    ];
  },
};

export default nextConfig;
