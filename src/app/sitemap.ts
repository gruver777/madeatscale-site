import type { MetadataRoute } from "next";
import { collections, products, ranges, site, subcategories } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (path: string) => `${site.siteUrl}${path}`;
  const staticPaths = [
    "/",
    "/about",
    "/projects",
    "/showroom",
    "/collections",
    "/contact",
    "/order",
    "/furniture-shop-centurion",
  ];
  return [
    ...staticPaths.map((p) => ({ url: u(p), changeFrequency: "weekly" as const, priority: p === "/" ? 1 : 0.7 })),
    ...ranges.map((r) => ({ url: u(`/showroom/${r.slug}`), changeFrequency: "weekly" as const, priority: 0.8 })),
    ...subcategories.map((s) => ({
      url: u(`/showroom/${s.rangeSlug}/${s.slug}`),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...collections.map((c) => ({ url: u(`/collections/${c.slug}`), changeFrequency: "monthly" as const, priority: 0.5 })),
    ...products.map((p) => ({
      url: u(`/products/${p.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      images: p.image ? [u(p.image)] : undefined,
    })),
  ];
}
