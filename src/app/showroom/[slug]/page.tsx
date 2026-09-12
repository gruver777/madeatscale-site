import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/PageIntro";
import { ProductImage } from "@/components/ProductImage";
import { ShowroomPLP } from "@/components/ShowroomPLP";
import { productsByRange, rangeBySlug, ranges } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ranges.map((range) => ({ slug: range.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const range = rangeBySlug(slug);
  if (!range) return { title: "Range" };
  return {
    title: range.name,
    description: range.blurb,
  };
}

export default async function RangePage({ params }: Props) {
  const { slug } = await params;
  const range = rangeBySlug(slug);
  if (!range) notFound();

  const rangeProducts = productsByRange(range.slug);

  return (
    <>
      <PageIntro kicker="Showroom" title={range.name} lede={range.blurb} />
      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-8">
        <ProductImage
          src={"heroImage" in range ? range.heroImage : undefined}
          alt={`${range.name} range`}
          tone={range.tone}
          className="mb-14 aspect-[21/8] min-h-56"
          sizes="100vw"
          priority
          label="Range"
        />
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow text-bronze">In this range</p>
            <ul className="mt-5 space-y-3">
              {range.groups.map((group) => (
                <li
                  key={group}
                  className="border-b border-forest/10 py-3 font-display text-2xl text-forest"
                >
                  {group}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="eyebrow text-bronze">Lines you may already specify</p>
            <p className="mt-5 text-base leading-8 text-mute">
              Family names from the live catalogue (Chroma, Tekton, Elemento…).
              Public ZAR shows when migrated; otherwise Request quote. Cart stays
              on. Brand worlds live under Collections — Quench, Grain, Kiln, Load,
              Spine.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {range.lines.map((line) => (
                <li
                  key={line}
                  className="border border-forest/15 px-3 py-1.5 text-[12px] uppercase tracking-[0.14em] text-forest"
                >
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/order" className="btn-solid">
                Specify this range
              </Link>
              <Link href="/showroom" className="btn-ghost text-forest">
                All ranges
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <p className="eyebrow text-bronze">In this range</p>
          <h2 className="mt-3 font-display text-3xl text-forest">Pieces</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-mute">
            Facets filter local stubs. No invented ZAR — Request quote until real
            prices migrate.
          </p>
          <div className="mt-10">
            {rangeProducts.length > 0 ? (
              <ShowroomPLP
                products={rangeProducts}
                hideCollectionFacet={false}
                emptyTitle="Nothing in this range matches the facets."
              />
            ) : (
              <div className="border border-forest/10 bg-paper px-8 py-16 text-center">
                <p className="font-display text-3xl text-forest">
                  No sample pieces in this range yet.
                </p>
                <p className="mt-3 text-sm text-mute">
                  Catalogue stubs will land as migration continues.
                </p>
                <Link href="/showroom" className="btn-ghost mt-8 inline-flex text-forest">
                  All showroom
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
