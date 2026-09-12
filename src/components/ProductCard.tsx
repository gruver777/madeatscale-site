import Link from "next/link";
import { PlaceholderMedia } from "@/components/PlaceholderMedia";
import { formatPriceZar, site, type Product, type Range } from "@/lib/site";

type Props = {
  product: Product;
  tone?: Range["tone"] | "steel" | "timber" | "bronze" | "cream" | "industrial" | "slate";
};

/**
 * Card structure for PLP stubs.
 * Price field always present when site.showPrices; null → "Request quote".
 * Cart CTA present when site.cartEnabled (stub — no cart state yet).
 */
export function ProductCard({ product, tone = "slate" }: Props) {
  const priceLabel = site.showPrices ? formatPriceZar(product.priceZar) : null;

  return (
    <article className="group flex flex-col">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="tile-hover overflow-hidden">
          <PlaceholderMedia
            tone={tone}
            className="aspect-[4/3]"
            label="Placeholder — product"
          />
        </div>
        <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-bronze">
          {product.family}
        </p>
        <h3 className="mt-1 font-display text-2xl text-forest">{product.name}</h3>
        <p className="mt-2 text-sm leading-6 text-mute">{product.note}</p>
      </Link>
      {site.showPrices ? (
        <p className="mt-3 text-sm tracking-wide text-forest" data-price={product.priceZar ?? "null"}>
          {priceLabel}
        </p>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-2">
        <Link href={`/products/${product.slug}`} className="btn-ghost text-forest">
          View
        </Link>
        {site.cartEnabled ? (
          <button
            type="button"
            className="btn-solid"
            disabled={product.priceZar == null}
            title={
              product.priceZar == null
                ? "Priced products can be added once ZAR migrates; request a quote for now"
                : "Add to cart"
            }
          >
            {product.priceZar == null ? "Request quote" : "Add to cart"}
          </button>
        ) : null}
      </div>
    </article>
  );
}
