import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trade",
  description:
    "Specifier and trade portal — magic-link access for architects and procurement. Finish library and CAD packs to follow.",
};

export default function TradePage() {
  return (
    <>
      <PageIntro
        kicker="Trade & specifiers"
        title="A quieter door for the profession."
        lede="Access for architects, interior designers, and procurement teams will use magic-link sign-in — email a link, no shared password. Finish libraries, CAD, and project folders land in a later phase. Nothing is gated live yet."
      />
      <section className="mx-auto max-w-[720px] px-5 pb-28 md:px-8">
        <div className="border border-forest/15 bg-paper px-8 py-12 md:px-12">
          <div className="mb-8 flex h-12 w-12 items-center justify-center border border-bronze/50 text-bronze">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              <rect x="4" y="8" width="10" height="8" stroke="currentColor" />
              <path d="M6 8V5.5a3 3 0 0 1 6 0V8" stroke="currentColor" />
            </svg>
          </div>
          <h2 className="font-display text-3xl text-forest">Request magic-link access</h2>
          <p className="mt-4 text-sm leading-7 text-mute">
            Specifiers will sign in with a one-time magic link sent to their
            work email. Authentication, samples, and downloadable spec packs are
            a later slice. Until then, write to sales with your practice and the
            project — we will open the door when the portal ships.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}?subject=Trade%20portal%20magic-link%20access`}
              className="btn-solid"
            >
              Email sales
            </a>
            <Link href="/order" className="btn-ghost text-forest">
              Start a brief
            </Link>
          </div>
          <p className="mt-8 text-[11px] uppercase tracking-[0.16em] text-mute">
            Auth method · magic link · Phase 3
          </p>
        </div>
      </section>
    </>
  );
}
