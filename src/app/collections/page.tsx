import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { ProductImage } from "@/components/ProductImage";
import { collectionHeroImage, collections } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/collections" },
  title: "Collections",
  description:
    "Quench, Grain, Kiln, Load, and Spine — Made@Scale collection worlds above the showroom SKUs.",
};

export default function CollectionsPage() {
  return (
    <>
      <PageIntro
        kicker="Collections"
        title="Five worlds above the SKU."
        lede="Quench, Grain, Kiln, Load, and Spine — the brand collection layer. Product families (Chroma, Tekton, Elemento, and the rest) still live on the pieces."
      />
      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-8">
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {collections.map((c) => (
            <li key={c.key}>
              <Link href={`/collections/${c.slug}`} className="group block">
                <div className="tile-hover overflow-hidden">
                  <ProductImage
                    src={collectionHeroImage(c.key)}
                    alt={c.label}
                    tone={c.tone}
                    className="aspect-[4/3]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    label={c.label}
                  />
                </div>
                <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-bronze">
                  {c.tagline}
                </p>
                <h2 className="mt-1 font-display text-3xl text-forest">{c.label}</h2>
                <p className="mt-2 text-sm leading-7 text-mute">{c.spine}</p>
                <span className="mt-4 inline-block text-[12px] uppercase tracking-[0.16em] text-forest underline-offset-4 group-hover:underline">
                  Enter
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
