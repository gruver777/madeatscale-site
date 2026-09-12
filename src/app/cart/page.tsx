import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cart",
  description: "Made@Scale cart — ecommerce kept; line items wire when ZAR catalogue migrates.",
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
        title="Your cart is empty."
        lede="Cart and checkout stay in the rebuild. Lines appear once live ZAR prices migrate — products without a price use Request quote on the PDP."
      />
      <section className="mx-auto max-w-[720px] px-5 pb-28 md:px-8">
        <div className="border border-forest/15 bg-paper px-8 py-12 text-sm leading-7 text-mute">
          <p>No invented SKU prices in the bag. Browse the showroom or start a brief.</p>
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
    </>
  );
}
