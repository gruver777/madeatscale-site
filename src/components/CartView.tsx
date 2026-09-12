"use client";

import Link from "next/link";
import {
  cartLinesWithProducts,
  useCart,
} from "@/components/CartProvider";
import { formatPriceZar, site } from "@/lib/site";

export function CartView() {
  const { lines, setQty, remove, hydrated } = useCart();
  const rows = cartLinesWithProducts(lines);

  if (!hydrated) {
    return (
      <section className="mx-auto max-w-[900px] px-5 pb-28 md:px-8">
        <p className="text-sm text-mute">Loading cart…</p>
      </section>
    );
  }

  if (rows.length === 0) {
    return (
      <section className="mx-auto max-w-[720px] px-5 pb-28 md:px-8">
        <div className="border border-forest/15 bg-paper px-8 py-12 text-sm leading-7 text-mute">
          <p className="font-display text-3xl text-forest">Your cart is empty.</p>
          <p className="mt-4">
            No invented SKU prices in the bag. Browse the showroom or start a brief.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/showroom" className="btn-solid">
              Showroom
            </Link>
            <Link href="/order" className="btn-ghost text-forest">
              Order at Scale
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-[900px] px-5 pb-28 md:px-8">
      <ul className="divide-y divide-forest/10 border border-forest/10 bg-paper">
        {rows.map(({ line, product }) => (
          <li
            key={product.slug}
            className="flex flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <Link
                href={`/products/${product.slug}`}
                className="font-display text-2xl text-forest hover:text-cognac"
              >
                {product.name}
              </Link>
              <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-bronze">
                {product.family}
              </p>
              {site.showPrices ? (
                <p className="mt-2 text-sm text-mute" data-price={product.priceZar ?? "null"}>
                  {formatPriceZar(product.priceZar)}
                </p>
              ) : null}
            </div>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-mute">
                Qty
                <input
                  type="number"
                  min={1}
                  max={99}
                  value={line.qty}
                  onChange={(e) => {
                    const n = Number(e.target.value);
                    if (Number.isFinite(n)) setQty(product.slug, n);
                  }}
                  className="h-10 w-16 border border-forest/15 bg-cream px-2 text-center text-sm text-forest outline-none focus:border-bronze"
                />
              </label>
              <button
                type="button"
                onClick={() => remove(product.slug)}
                className="text-[11px] uppercase tracking-[0.14em] text-mute hover:text-cognac"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-mute">
          Checkout is quote-led until live ZAR migrates — we never invent prices.
        </p>
        <Link href="/order" className="btn-solid">
          Checkout → Order
        </Link>
      </div>
    </section>
  );
}
