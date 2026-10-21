import type { Metadata } from "next";
import { CartView } from "@/components/CartView";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/cart" },
  robots: { index: false, follow: true },
  title: "Cart",
  description:
    "Made@Scale cart — update quantities, then checkout to Order at Scale. No invented ZAR.",
};

export default function CartPage() {
  if (!site.cartEnabled) {
    return (
      <PageIntro
        kicker="Cart"
        title="Cart is off."
        lede="Ecommerce is disabled in site config."
      />
    );
  }

  return (
    <>
      <PageIntro
        kicker="Cart"
        title="Your bag."
        lede="Lines persist in this browser. Pieces without migrated ZAR show Request quote — checkout opens Order at Scale."
      />
      <CartView />
    </>
  );
}
