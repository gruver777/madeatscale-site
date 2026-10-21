import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { ProductImage } from "@/components/ProductImage";
import { ShowroomPLP } from "@/components/ShowroomPLP";
import { products, ranges, site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/showroom" },
  title: { absolute: "Furniture Showroom | Office, Bedroom, Mining & Student, Hospitality | Made@Scale" },
  description:
    "Discover our showroom with furniture collections for homes, offices, hospitality, student housing and mining camps. Durable, stylish and designed for everyday use.",
};

export default function ShowroomPage() {
  return (
    <>
      <PageIntro
        kicker="Showroom"
        title="Browse by the room, not the SKU."
        lede={
          site.showPrices
            ? "Large cards, collection badges, and Phase 2 facets (category · material · collection). Public ZAR when migrated; otherwise Request quote."
            : "The six live ranges, kept as-is."
        }
      />

      <section className="mx-auto max-w-[1400px] px-5 pb-12 md:px-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ranges.map((range) => (
            <Link
              key={range.slug}
              href={`/showroom/${range.slug}`}
              className="group flex items-center gap-4 border border-forest/10 bg-paper p-3 transition hover:border-bronze"
            >
              <div className="w-20 shrink-0 overflow-hidden">
                <ProductImage
                  src={"heroImage" in range ? range.heroImage : undefined}
                  alt={range.name}
                  tone={range.tone}
                  className="aspect-square"
                  sizes="80px"
                  label=""
                />
              </div>
              <div>
                <h2 className="font-display text-xl text-forest">{range.name}</h2>
                <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-bronze">
                  Enter range
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-28 md:px-8">
        <div className="mb-10">
          <p className="eyebrow text-bronze">All pieces · live catalogue photos</p>
          <h2 className="mt-3 font-display text-4xl text-forest">Catalogue</h2>
        </div>
        <ShowroomPLP products={products} />
      </section>
    </>
  );
}
