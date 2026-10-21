import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductGallery } from "@/components/ProductGallery";
import { BreadcrumbJsonLd, JsonLd } from "@/components/JsonLd";
import {
  collectionForProduct,
  formatPriceZar,
  productBySlug,
  productSeoDescription,
  productSeoTitle,
  products,
  rangeBySlug,
  site,
  subcategoryForProduct,
  subcategoryHref,
} from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) return { title: "Product" };
  const title = productSeoTitle(product);
  return {
    title: { absolute: `${title} | Made@Scale` },
    description: productSeoDescription(product),
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: product.image ? { images: [product.image] } : undefined,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();

  const range = rangeBySlug(product.rangeSlug);
  const collection = collectionForProduct(product);
  const sub = subcategoryForProduct(product.slug);
  const priceLabel = site.showPrices ? formatPriceZar(product.priceZar) : null;
  const materials =
    product.materialsList ??
    [product.material === "Mixed" ? "Steel · timber · Melawood" : product.material];

  const productLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productSeoTitle(product),
    description: productSeoDescription(product),
    url: `${site.siteUrl}/products/${product.slug}`,
    brand: { "@type": "Brand", name: site.name },
    manufacturer: { "@id": `${site.siteUrl}/#organization` },
    category: product.category,
    material: product.material === "Mixed" ? undefined : product.material,
    image: (product.gallery?.length ? product.gallery : product.image ? [product.image] : []).map(
      (src) => `${site.siteUrl}${src}`,
    ),
  };
  // Only real, public ZAR prices produce an Offer. Never emit price 0.
  if (product.priceZar != null && product.priceZar > 0) {
    productLd.offers = {
      "@type": "Offer",
      price: product.priceZar,
      priceCurrency: "ZAR",
      url: `${site.siteUrl}/products/${product.slug}`,
      seller: { "@id": `${site.siteUrl}/#organization` },
    };
  }
  const crumbs = [
    { name: "Showroom", path: "/showroom" },
    ...(range ? [{ name: range.name, path: `/showroom/${range.slug}` }] : []),
    ...(sub ? [{ name: sub.name, path: subcategoryHref(sub) }] : []),
    { name: product.name, path: `/products/${product.slug}` },
  ];

  return (
    <article className="mx-auto max-w-[1400px] px-5 pb-28 pt-16 md:px-8 md:pt-24">
      <JsonLd data={productLd} />
      <BreadcrumbJsonLd items={crumbs} />
      <nav aria-label="Breadcrumb" className="text-[12px] uppercase tracking-[0.14em] text-mute">
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
        {sub ? (
          <>
            <span className="mx-2 text-bronze">/</span>
            <Link href={subcategoryHref(sub)} className="hover:text-forest">
              {sub.name}
            </Link>
          </>
        ) : null}
      </nav>
      {sub ? (
        <p className="mt-3 text-sm text-mute">
          Part of our{" "}
          <Link href={subcategoryHref(sub)} className="text-forest underline underline-offset-4">
            {sub.name.toLowerCase()}
          </Link>{" "}
          range, made in Centurion.
        </p>
      ) : null}

      <div className="mt-8 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <ProductGallery
            tone={range?.tone ?? "slate"}
            name={product.name}
            images={
              product.gallery?.length
                ? product.gallery
                : product.image
                  ? [product.image]
                  : []
            }
          />
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
            {productSeoTitle(product)}
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
