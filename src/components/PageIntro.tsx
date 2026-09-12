type Props = {
  kicker?: string;
  title: string;
  lede?: string;
};

export function PageIntro({ kicker, title, lede }: Props) {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pb-6 pt-16 md:px-8 md:pt-24">
      {kicker ? <p className="eyebrow text-bronze">{kicker}</p> : null}
      <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.95] tracking-[-0.03em] text-forest md:text-7xl">
        {title}
      </h1>
      {lede ? (
        <p className="mt-8 max-w-2xl text-lg leading-8 text-mute">{lede}</p>
      ) : null}
    </section>
  );
}
