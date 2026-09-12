import type { Metadata } from "next";
import Link from "next/link";
import { LifestyleImage } from "@/components/LifestyleImage";
import { PageIntro } from "@/components/PageIntro";
import { lifestyle } from "@/lib/lifestyle";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Sales, WhatsApp, and the Centurion workshop — Unit 1809, Limeroc Business Park. Visit the showroom by appointment.",
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
        title="The workshop is in Centurion."
        lede="Call, write, or WhatsApp. Visits by appointment at Limeroc Business Park."
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
            <p className="eyebrow text-bronze">Workshop</p>
            <address className="mt-3 not-italic leading-7 text-mute">
              {site.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
        </div>
        <div className="md:col-span-7">
          <LifestyleImage
            shot={lifestyle.oceanSunset}
            className="aspect-[4/3]"
            overlay="soft"
            sizes="(max-width: 768px) 100vw, 55vw"
            showCaption
          />
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
              Made@Scale sells direct from the Centurion workshop. There is no
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
