import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductGallery } from "@/components/ProductGallery";
import {
  collectionForProduct,
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
  const collection = collectionForProduct(product);
  const priceLabel = site.showPrices ? formatPriceZar(product.priceZar) : null;
  const materials =
    product.materialsList ??
    [product.material === "Mixed" ? "Steel · timber · Melawood" : product.material];

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
        {collection ? (
          <>
            <span className="mx-2 text-bronze">/</span>
            <Link href={`/collections/${collection.slug}`} className="hover:text-forest">
              {collection.label}
            </Link>
          </>
        ) : null}
      </nav>

      <div className="mt-8 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <ProductGallery tone={range?.tone ?? "slate"} name={product.name} />
        </div>
        <div className="md:col-span-5">
          <div className="flex flex-wrap items-center gap-2">
            <p className="eyebrow text-bronze">{product.family}</p>
            {collection ? (
              <Link
                href={`/collections/${collection.slug}`}
                className="border border-bronze/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-bronze hover:border-bronze hover:text-forest"
              >
                {collection.label}
              </Link>
            ) : null}
          </div>
          <h1 className="mt-3 font-display text-5xl tracking-[-0.03em] text-forest">
            {product.name}
          </h1>
          <p className="mt-6 text-base leading-8 text-mute">{product.note}</p>

          {site.showPrices ? (
            <p
              className="mt-8 font-display text-3xl text-forest"
              data-price={product.priceZar ?? "null"}
            >
              {priceLabel}
            </p>
          ) : null}
          <p className="mt-2 text-xs leading-6 text-mute">
            {product.priceZar == null
              ? "ZAR migrates from the live catalogue — until then, request a quote. No invented prices."
              : "Public ZAR · cart enabled"}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {site.cartEnabled ? <AddToCartButton product={product} /> : null}
            <Link href="/order" className="btn-ghost text-forest">
              {product.priceZar == null ? "Request quote" : "Specify this"}
            </Link>
          </div>

          <div className="mt-12 border-t border-forest/10 pt-8">
            <p className="eyebrow text-bronze">Materials</p>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-mute">
              {materials.map((m) => (
                <li key={m} className="border-b border-forest/5 pb-2">
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <p className="eyebrow text-bronze">Dimensions</p>
            <div className="mt-4 overflow-hidden border border-forest/10">
              <table className="w-full text-left text-sm text-mute">
                <thead className="bg-paper text-[11px] uppercase tracking-[0.14em] text-forest">
                  <tr>
                    <th className="px-4 py-3 font-medium">Measure</th>
                    <th className="px-4 py-3 font-medium">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-forest/10">
                    <td className="px-4 py-3">Overall</td>
                    <td className="px-4 py-3">
                      {product.dimensionsNote ??
                        "Placeholder — migrate with catalogue variants"}
                    </td>
                  </tr>
                  <tr className="border-t border-forest/10">
                    <td className="px-4 py-3">Finish</td>
                    <td className="px-4 py-3">Specify with sales</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/order" className="btn-solid">
              Specify / request pack
            </Link>
            {collection ? (
              <Link
                href={`/collections/${collection.slug}`}
                className="btn-ghost text-forest"
              >
                {collection.label} collection
              </Link>
            ) : null}
            <Link href="/trade" className="text-[12px] uppercase tracking-[0.14em] text-mute underline-offset-4 hover:text-forest hover:underline">
              Trade · magic-link packs
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
