import Link from "next/link";
import { AddToCartButton } from "@/components/AddToCartButton";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import {
  collectionForProduct,
  formatPriceZar,
  rangeBySlug,
  site,
  type Product,
} from "@/lib/site";

type Props = {
  product: Product;
  large?: boolean;
};

export function ProductCard({ product, large = false }: Props) {
  const range = rangeBySlug(product.rangeSlug);
  const collection = collectionForProduct(product);
  const tone = range?.tone ?? collection?.tone ?? "slate";
  const priceLabel = site.showPrices ? formatPriceZar(product.priceZar) : null;

  return (
    <article className="group flex flex-col">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative overflow-hidden">
          <div className="tile-hover overflow-hidden">
            <PlaceholderMedia
              tone={tone}
              className={large ? "aspect-[4/5]" : "aspect-[4/3]"}
              label="Placeholder — product"
            />
          </div>
          {collection ? (
            <span className="absolute left-3 top-3 border border-cream/30 bg-forest/80 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-cream backdrop-blur-sm">
              {collection.label}
            </span>
          ) : null}
        </div>
        <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-bronze">
          {product.family}
          <span className="mx-2 text-forest/20">·</span>
          {product.category}
        </p>
        <h3
          className={`mt-1 font-display text-forest ${large ? "text-3xl" : "text-2xl"}`}
        >
          {product.name}
        </h3>
        <p className="mt-2 text-sm leading-6 text-mute">{product.note}</p>
      </Link>
      {site.showPrices ? (
        <p
          className="mt-3 text-sm tracking-wide text-forest"
          data-price={product.priceZar ?? "null"}
        >
          {priceLabel}
        </p>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-2">
        <Link href={`/products/${product.slug}`} className="btn-ghost text-forest">
          View
        </Link>
        {site.cartEnabled ? <AddToCartButton product={product} /> : null}
      </div>
    </article>
  );
}
