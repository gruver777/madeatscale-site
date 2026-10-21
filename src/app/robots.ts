import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Preview builds block all crawling so the rebuild never competes with the live
 * WordPress site. Set SITE_INDEXABLE=true on the production domain at cutover.
 */
export default function robots(): MetadataRoute.Robots {
  if (!site.indexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/cart", "/trade"] },
    sitemap: `${site.siteUrl}/sitemap.xml`,
    host: site.siteUrl,
  };
}
