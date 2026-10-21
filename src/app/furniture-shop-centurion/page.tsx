import type { Metadata } from "next";
import Link from "next/link";
import { MapEmbed } from "@/components/MapEmbed";
import { NapBlock } from "@/components/NapBlock";
import { PageIntro } from "@/components/PageIntro";
import { ranges, subcategories, subcategoryHref } from "@/lib/site";

/**
 * Restores the Centurion landing page that ranked on the live site at
 * /furniture-shop-centurion-online/ (published 10 Aug 2025; 301'd to the home
 * page by Rank Math some time after 13 May 2026). Copy reuses that page's
 * wording; no wholesale-price claims are added beyond what it said.
 */
export const metadata: Metadata = {
  title: { absolute: "Furniture Shop Centurion | Made@Scale Furniture Factory" },
  description:
    "Shop quality furniture from Centurion with M@S. We fulfil orders directly from our Centurion furniture shop and factory at Limeroc Business Park.",
  alternates: { canonical: "/furniture-shop-centurion" },
};

export default function FurnitureShopCenturionPage() {
  return (
    <>
      <PageIntro
        kicker="Furniture shop Centurion"
        title="Furniture shop & factory in Centurion"
        lede="Shop quality furniture from Centurion with M@S. We fulfil orders directly from our Centurion furniture shop — made in our own factory at Limeroc Business Park."
      />
      <section className="mx-auto grid max-w-[1400px] gap-12 px-5 pb-24 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5 space-y-8">
          <div>
            <p className="eyebrow text-bronze">Browse the showroom</p>
            <ul className="mt-4 space-y-2">
              {ranges.map((r) => (
                <li key={r.slug}>
                  <Link href={`/showroom/${r.slug}`} className="font-display text-2xl text-forest hover:underline">
                    {r.name} furniture
                  </Link>
                </li>
              ))}
              {subcategories.map((s) => (
                <li key={s.slug}>
                  <Link href={subcategoryHref(s)} className="font-display text-2xl text-forest hover:underline">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-bronze">Visit the factory</p>
            <p className="mt-3 text-base leading-8 text-mute">
              Call us to make an appointment and we&rsquo;ll take you on a tour
              of our factory.
            </p>
            <NapBlock className="mt-4" />
          </div>
        </div>
        <div className="md:col-span-7">
          <MapEmbed className="aspect-[4/3]" />
        </div>
      </section>
    </>
  );
}
