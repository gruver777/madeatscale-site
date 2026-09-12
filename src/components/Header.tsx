"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/components/CartProvider";
import { primaryNav, site } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { count, hydrated } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-[1400px] items-center justify-between gap-6 px-5 md:px-8">
        <Link
          href="/"
          className="font-display text-[1.65rem] leading-none tracking-[-0.03em] text-forest"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {primaryNav
            .filter((item) => item.href !== "/")
            .map((item) => (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={`text-[13px] tracking-[0.08em] uppercase transition-opacity duration-300 ${
                    isActive(pathname, item.href)
                      ? "text-forest"
                      : "text-mute hover:text-forest hover:opacity-100 opacity-90"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="invisible absolute left-1/2 top-full z-40 w-72 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="border border-forest/10 bg-cream p-4 shadow-[0_16px_40px_rgba(29,46,40,0.08)]">
                      <ul className="space-y-2.5">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block text-[13px] text-ink/80 transition-colors hover:text-forest"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
        </nav>

        <div className="flex items-center gap-3">
          {site.cartEnabled ? (
            <Link
              href="/cart"
              className="hidden text-[13px] tracking-[0.08em] uppercase text-mute transition-colors hover:text-forest sm:inline"
            >
              Cart{hydrated && count > 0 ? ` (${count})` : ""}
            </Link>
          ) : null}
          <Link href="/order" className="btn-solid hidden sm:inline-flex">
            Order
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-forest lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-px w-full bg-forest transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-full bg-forest transition ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 h-px w-full bg-forest transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-forest/10 bg-cream lg:hidden">
          <nav className="mx-auto flex max-w-[1400px] flex-col gap-1 px-5 py-6" aria-label="Mobile">
            {primaryNav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 font-display text-2xl text-forest"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="mb-3 ml-1 flex flex-col gap-1.5 border-l border-forest/15 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="py-1 text-sm text-mute"
                        onClick={() => setOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            {site.cartEnabled ? (
              <Link
                href="/cart"
                className="block py-2 font-display text-2xl text-forest"
                onClick={() => setOpen(false)}
              >
                Cart{hydrated && count > 0 ? ` (${count})` : ""}
              </Link>
            ) : null}
            <Link
              href="/order"
              className="btn-solid mt-4 self-start"
              onClick={() => setOpen(false)}
            >
              Order at Scale
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
