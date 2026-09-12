import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { ranges, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Showroom",
  description:
    "Six Made@Scale ranges: Bathroom & Kitchen, Bedroom, Entertainment, Hospitality & Dining, Mining & Student Living, Office.",
};

export default function ShowroomPage() {
  return (
    <>
      <PageIntro
        kicker="Showroom"
        title="Browse by the room, not the SKU."
        lede={
          site.showPrices
            ? "The six live ranges, kept as-is. Public ZAR shows when a price has migrated; otherwise Request quote. Phase 2 search is facets-only — no typeahead yet."
            : "The six live ranges, kept as-is. Each tile is a door into a category — finishes, dimensions, and spec packs will follow."
        }
      />
      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          {ranges.map((range) => (
            <Link key={range.slug} href={`/showroom/${range.slug}`} className="group">
              <div className="tile-hover overflow-hidden">
                <PlaceholderMedia
                  tone={range.tone}
                  className="aspect-[16/10]"
                  label="Placeholder texture"
                />
              </div>
              <div className="flex items-end justify-between gap-4 pt-4">
                <div>
                  <h2 className="font-display text-3xl text-forest">{range.name}</h2>
                  <p className="mt-2 max-w-md text-sm leading-6 text-mute">{range.blurb}</p>
                </div>
                <span className="mb-1 text-[11px] uppercase tracking-[0.16em] text-bronze">
                  Enter
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
