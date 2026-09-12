"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import { site, type Product } from "@/lib/site";

type Props = {
  product: Product;
  className?: string;
};

/**
 * Cart stays on. Products without priceZar still add as quote lines
 * (checkout routes to /order). Primary label stays "Add to cart" when
 * cartEnabled; price display elsewhere shows Request quote.
 */
export function AddToCartButton({ product, className = "btn-solid" }: Props) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  if (!site.cartEnabled) {
    return (
      <Link href="/order" className={className}>
        Request quote
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        add(product.slug, 1);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1600);
      }}
    >
      {added ? "Added" : "Add to cart"}
    </button>
  );
}
