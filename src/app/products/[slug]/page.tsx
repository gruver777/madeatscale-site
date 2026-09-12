import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import {
  formatPriceZar,
  productBySlug,
  products,
  rangeBySlug,
  site,
} from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.note,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();

  const range = rangeBySlug(product.rangeSlug);
  const priceLabel = site.showPrices ? formatPriceZar(product.priceZar) : null;

  return (
    <article className="mx-auto max-w-[1400px] px-5 pb-28 pt-16 md:px-8 md:pt-24">
      <nav className="text-[12px] uppercase tracking-[0.14em] text-mute">
        <Link href="/showroom" className="hover:text-forest">
          Showroom
        </Link>
        {range ? (
          <>
            <span className="mx-2 text-bronze">/</span>
            <Link href={`/showroom/${range.slug}`} className="hover:text-forest">
              {range.name}
            </Link>
          </>
        ) : null}
      </nav>

      <div className="mt-8 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <PlaceholderMedia
            tone={range?.tone ?? "slate"}
            className="aspect-[4/3]"
            label="Placeholder — PDP gallery"
          />
        </div>
        <div className="md:col-span-5">
          <p className="eyebrow text-bronze">{product.family}</p>
          <h1 className="mt-3 font-display text-5xl tracking-[-0.03em] text-forest">
            {product.name}
          </h1>
          <p className="mt-6 text-base leading-8 text-mute">{product.note}</p>

          {site.showPrices ? (
            <p className="mt-8 font-display text-3xl text-forest" data-price={product.priceZar ?? "null"}>
              {priceLabel}
            </p>
          ) : null}
          <p className="mt-2 text-xs leading-6 text-mute">
            {product.priceZar == null
              ? "ZAR migrates from the live catalogue — until then, request a quote. No invented prices."
              : "Public ZAR · cart enabled"}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {site.cartEnabled ? (
              <button
                type="button"
                className="btn-solid"
                disabled={product.priceZar == null}
                title={
                  product.priceZar == null
                    ? "Add to cart unlocks when a live ZAR price is imported"
                    : "Add to cart"
                }
              >
                {product.priceZar == null ? "Request quote" : "Add to cart"}
              </button>
            ) : null}
            <Link href="/order" className="btn-ghost text-forest">
              Specify this
            </Link>
          </div>

          <ul className="mt-12 space-y-3 border-t border-forest/10 pt-8 text-sm text-mute">
            <li>Dimensions & finishes — migrate with catalogue</li>
            <li>
              <Link href="/trade" className="text-forest underline-offset-4 hover:underline">
                Trade · magic-link access
              </Link>{" "}
              for CAD / packs (Phase 3)
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
}
