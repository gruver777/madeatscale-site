import { site } from "@/lib/site";

/** Renders one JSON-LD block. Escapes "<" so content can't break out of the script tag. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export type Crumb = { name: string; path: string };

/** BreadcrumbList JSON-LD; Home is prepended automatically. */
export function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: all.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.name,
          item: `${site.siteUrl}${c.path}`,
        })),
      }}
    />
  );
}
