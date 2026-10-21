import type { Metadata } from "next";
import Link from "next/link";
import { LifestyleImage } from "@/components/LifestyleImage";
import { MapEmbed } from "@/components/MapEmbed";
import { NapBlock } from "@/components/NapBlock";
import { PageIntro } from "@/components/PageIntro";
import { lifestyle } from "@/lib/lifestyle";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Contact Us | Centurion Furniture Factory & Shop | Made@Scale" },
  description:
    "Visit the Made@Scale furniture factory and shop in Centurion: Unit 1809, Limeroc Business Park, Knoppieslaagte. Call +27 68 005 5750 to book a factory tour.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <div className="relative">
        <LifestyleImage
          shot={lifestyle.contact}
          className="aspect-[21/7] min-h-36 w-full md:min-h-44"
          overlay="heavy"
          sizes="100vw"
          showCaption
        />
      </div>
      <PageIntro
        kicker="Contact"
        title="Contact our Centurion furniture factory"
        lede="We’re always here to help. Call, write, or WhatsApp — or call us to make an appointment and we’ll take you on a tour of our factory at Limeroc Business Park, Centurion."
      />
      <section className="mx-auto grid max-w-[1400px] gap-12 px-5 pb-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5 space-y-8">
          <div>
            <p className="eyebrow text-bronze">Telephone</p>
            <a href={site.phoneHref} className="mt-2 block font-display text-3xl text-forest">
              {site.phoneDisplay}
            </a>
            <a
              href={site.landlineHref}
              className="mt-2 block text-sm text-mute hover:text-forest"
            >
              Landline {site.landlineDisplay}
            </a>
          </div>
          <div>
            <p className="eyebrow text-bronze">WhatsApp</p>
            <a href={site.whatsappHref} className="mt-2 block font-display text-3xl text-forest">
              {site.whatsappDisplay}
            </a>
          </div>
          <div>
            <p className="eyebrow text-bronze">Email</p>
            <a href={`mailto:${site.email}`} className="mt-2 block font-display text-3xl text-forest">
              {site.email}
            </a>
            <a
              href={`mailto:${site.infoEmail}`}
              className="mt-2 block text-sm text-mute hover:text-forest"
            >
              {site.infoEmail}
            </a>
          </div>
          <div>
            <p className="eyebrow text-bronze">Visit us — factory &amp; shop</p>
            <NapBlock className="mt-3" />
          </div>
        </div>
        <div className="md:col-span-7">
          <MapEmbed className="aspect-[4/3]" />
        </div>
      </section>

      {/* Where to Buy folded into Contact (Will, Sep 2026) */}
      <section className="border-t border-forest/10 bg-paper">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
          <div className="md:col-span-5">
            <p className="eyebrow text-bronze">Where to buy / visit</p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.03em] text-forest">
              Come to the showroom — or write to sales.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 space-y-5 text-base leading-8 text-mute">
            <p>
              Made@Scale sells direct from our Centurion furniture factory and shop. There is no
              public dealer network on this site — for samples, specifications,
              and project quotes, contact sales or book a visit.
            </p>
            <ul className="space-y-3 text-forest">
              <li>
                <span className="text-mute">Visit by appointment · </span>
                Unit 1809, Limeroc Business Park
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.whatsappHref} className="underline-offset-4 hover:underline">
                  WhatsApp {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="underline-offset-4 hover:underline">
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/order" className="btn-solid">
                Start a brief
              </Link>
              <Link href="/showroom" className="btn-ghost text-forest">
                Browse showroom
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
