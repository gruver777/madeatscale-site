import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/PageIntro";
import { ProductImage } from "@/components/ProductImage";
import { ProductCard } from "@/components/ProductCard";
import {
  collectionBySlug,
  collectionHeroImage,
  collections,
  productsByCollection,
} from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = collectionBySlug(slug);
  if (!collection) return { title: "Collection" };
  return {
    title: collection.label,
    alternates: { canonical: `/collections/${collection.slug}` },
    description: `${collection.label} — ${collection.tagline}. ${collection.spine}`,
  };
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const collection = collectionBySlug(slug);
  if (!collection) notFound();

  const pieces = productsByCollection(collection.key);

  return (
    <>
      <PageIntro
        kicker={`Collection · ${collection.tagline}`}
        title={collection.label}
        lede={`${collection.spine}. For ${collection.audience}. Essay, photography, and linked SKUs follow — families on the pieces stay as catalogue names.`}
      />
      <section className="mx-auto max-w-[1400px] px-5 pb-28 md:px-8">
        <ProductImage
          src={collectionHeroImage(collection.key)}
          alt={collection.label}
          tone={collection.tone}
          className="mb-12 aspect-[21/9] min-h-48"
          sizes="100vw"
          priority
          label={collection.label}
        />
        <div className="max-w-2xl space-y-5 text-base leading-8 text-mute">
          <p>
            <strong className="font-medium text-forest">{collection.label}</strong>{" "}
            is the brand world for {collection.tagline.toLowerCase()}. Specifiers
            still meet Chroma, Tekton, Elemento, Excel, and the other families on
            individual products — this layer frames the room, not the SKU code.
          </p>
          <p>
            Content stubs only for now: process essay, finish story, and
            “Specified in” projects will author here without inventing inventory.
          </p>
        </div>

        {pieces.length > 0 ? (
          <div className="mt-16">
            <p className="eyebrow text-bronze">In {collection.label}</p>
            <h2 className="mt-3 font-display text-3xl text-forest">Linked pieces</h2>
            <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {pieces.map((product) => (
                <ProductCard key={product.slug} product={product} large />
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/collections" className="btn-ghost text-forest">
            All collections
          </Link>
          <Link href="/showroom" className="btn-solid">
            Showroom
          </Link>
          <Link href="/order" className="btn-ghost text-forest">
            Specify
          </Link>
        </div>
      </section>
    </>
  );
}
