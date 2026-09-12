import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Order at Scale",
  description:
    "Start a Made@Scale brief — consultation-led contract furniture, with public ZAR and cart where prices are live.",
};

export default function OrderPage() {
  return (
    <>
      <PageIntro
        kicker="Order at Scale"
        title="Tell us the room."
        lede="A short brief is enough to start. Contract schedules are still quoted to finish and site; public ZAR appears on PDPs once prices migrate, with cart for those pieces."
      />
      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-8">
        <div className="grid gap-16 md:grid-cols-12">
          <form className="md:col-span-7 space-y-6" action="#" method="post">
            <label className="block">
              <span className="eyebrow text-mute">Name</span>
              <input
                name="name"
                className="mt-2 w-full border-b border-forest/20 bg-transparent py-3 text-forest outline-none focus:border-bronze"
                autoComplete="name"
              />
            </label>
            <label className="block">
              <span className="eyebrow text-mute">Email</span>
              <input
                name="email"
                type="email"
                className="mt-2 w-full border-b border-forest/20 bg-transparent py-3 text-forest outline-none focus:border-bronze"
                autoComplete="email"
              />
            </label>
            <label className="block">
              <span className="eyebrow text-mute">Project</span>
              <input
                name="project"
                className="mt-2 w-full border-b border-forest/20 bg-transparent py-3 text-forest outline-none focus:border-bronze"
                placeholder="Campus, lodge, mine, residence…"
              />
            </label>
            <label className="block">
              <span className="eyebrow text-mute">Notes</span>
              <textarea
                name="notes"
                rows={5}
                className="mt-2 w-full border-b border-forest/20 bg-transparent py-3 text-forest outline-none focus:border-bronze"
              />
            </label>
            <p className="text-xs leading-6 text-mute">
              Form is a scaffold — wire to the sales inbox in a later pass. Prefer
              WhatsApp or email in the meantime.
            </p>
            <button type="button" className="btn-solid">
              Request a conversation
            </button>
          </form>
          <aside className="md:col-span-4 md:col-start-9 text-sm leading-7 text-mute">
            <p className="eyebrow text-bronze">Direct</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a href={site.phoneHref} className="text-forest hover:text-cognac">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={site.whatsappHref} className="text-forest hover:text-cognac">
                  WhatsApp {site.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="text-forest hover:text-cognac">
                  {site.email}
                </a>
              </li>
            </ul>
            <p className="mt-8">
              Typical path: consultation, customisation, then delivery and
              support — the same three steps the live site already promises,
              without the Divi chrome.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
