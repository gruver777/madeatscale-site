import { site } from "@/lib/site";

/** FurnitureStore / LocalBusiness JSON-LD — NAP mirrors the live site footer. */
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["FurnitureStore", "LocalBusiness"],
    "@id": `${site.siteUrl}/#organization`,
    name: site.legal,
    alternateName: site.name,
    description:
      "Furniture factory and shop in Centurion, Gauteng. Made@Scale designs and manufactures durable office, bedroom, hospitality, mining and student-living furniture.",
    url: site.siteUrl,
    telephone: "+27680055750",
    email: site.email,
    address: { "@type": "PostalAddress", ...site.address },
    geo: { "@type": "GeoCoordinates", ...site.geo },
    hasMap: site.mapHref,
    openingHours: site.openingHours,
    areaServed: ["Centurion", "Gauteng", "South Africa", "Africa"],
    sameAs: [site.social.facebook, site.social.instagram, site.social.linkedin],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
