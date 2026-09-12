import Link from "next/link";
import { ranges, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-forest/10 bg-forest text-cream">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-4">
          <p className="font-display text-3xl tracking-[-0.03em]">{site.name}</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-cream/70">
            Contract furniture in steel, timber, and Melawood. Specified for
            designers, commercial interiors, mining camps, boarding schools, and
            residences — made in Centurion, delivered at scale.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-bronze">Showroom</p>
          <ul className="mt-4 space-y-2.5">
            {ranges.map((range) => (
              <li key={range.slug}>
                <Link
                  href={`/showroom/${range.slug}`}
                  className="text-sm text-cream/80 transition-colors hover:text-bronze"
                >
                  {range.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow text-bronze">Studio</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/about" className="text-cream/80 hover:text-bronze">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-cream/80 hover:text-bronze">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/collections" className="text-cream/80 hover:text-bronze">
                Collections
              </Link>
            </li>
            <li>
              <Link href="/trade" className="text-cream/80 hover:text-bronze">
                Trade
              </Link>
            </li>
            <li>
              <Link href="/order" className="text-cream/80 hover:text-bronze">
                Order at Scale
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-cream/80 hover:text-bronze">
                Contact
              </Link>
            </li>
            {site.cartEnabled ? (
              <li>
                <Link href="/cart" className="text-cream/80 hover:text-bronze">
                  Cart
                </Link>
              </li>
            ) : null}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-bronze">Get in touch</p>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/80">
            <li>
              <a href={site.phoneHref} className="hover:text-bronze">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={site.whatsappHref} className="hover:text-bronze">
                WhatsApp {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-bronze">
                {site.email}
              </a>
            </li>
            <li className="pt-2 leading-6 text-cream/65">
              {site.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-5 py-5 text-[11px] uppercase tracking-[0.16em] text-cream/45 md:flex-row md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} {site.legal}. All rights reserved.</p>
          <p>Rebuild scaffold — photography marked as placeholder.</p>
        </div>
      </div>
    </footer>
  );
}
