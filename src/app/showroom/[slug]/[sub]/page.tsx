import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/PageIntro";
import { ShowroomPLP } from "@/components/ShowroomPLP";
import {
  productBySlug,
  rangeBySlug,
  subcategories,
  subcategoryBySlugs,
  type Product,
} from "@/lib/site";

type Props = { params: Promise<{ slug: string; sub: string }> };

export function generateStaticParams() {
  return subcategories.map((s) => ({ slug: s.rangeSlug, sub: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, sub } = await params;
  const s = subcategoryBySlugs(slug, sub);
  if (!s) return { title: "Showroom" };
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: `/showroom/${s.rangeSlug}/${s.slug}` },
  };
}

export default async function SubcategoryPage({ params }: Props) {
  const { slug, sub } = await params;
  const s = subcategoryBySlugs(slug, sub);
  const range = rangeBySlug(slug);
  if (!s || !range) notFound();

  const pieces = s.productSlugs
    .map((p) => productBySlug(p))
    .filter((p): p is Product => Boolean(p));

  return (
    <>
      <nav className="mx-auto max-w-[1400px] px-5 pt-10 text-[12px] uppercase tracking-[0.14em] text-mute md:px-8">
        <Link href="/showroom" className="hover:text-forest">
          Showroom
        </Link>
        <span className="mx-2 text-bronze">/</span>
        <Link href={`/showroom/${range.slug}`} className="hover:text-forest">
          {range.name}
        </Link>
        <span className="mx-2 text-bronze">/</span>
        <span className="text-forest">{s.name}</span>
      </nav>
      <PageIntro kicker={range.name} title={s.name} lede={s.lede} />
      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-8">
        <div className="mt-6">
          <ShowroomPLP
            products={pieces}
            hideCollectionFacet={false}
            emptyTitle={`No ${s.name.toLowerCase()} match the facets.`}
          />
        </div>
        <div className="mt-16 grid gap-8 border-t border-forest/10 pt-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow text-bronze">Made in Centurion</p>
            <p className="mt-3 text-base leading-8 text-mute">
              Every piece is made at our Centurion furniture factory. Call us to
              make an appointment and we&rsquo;ll take you on a tour of our
              factory, or{" "}
              <Link href="/order" className="text-forest underline underline-offset-4">
                start a brief
              </Link>{" "}
              for a project quote.
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="eyebrow text-bronze">Related</p>
            <ul className="mt-3 space-y-2">
              {s.related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} className="font-display text-2xl text-forest hover:underline">
                    {r.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className="font-display text-2xl text-forest hover:underline">
                  Visit our Centurion furniture factory
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
