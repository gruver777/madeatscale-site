import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-28 md:px-8">
      <p className="eyebrow text-bronze">404</p>
      <h1 className="mt-4 font-display text-5xl text-forest md:text-7xl">
        This room isn’t here.
      </h1>
      <p className="mt-6 max-w-md text-mute">
        The path doesn’t match the rebuild. Return to the showroom or home.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/" className="btn-solid">
          Home
        </Link>
        <Link href="/showroom" className="btn-ghost text-forest">
          Showroom
        </Link>
      </div>
    </section>
  );
}
