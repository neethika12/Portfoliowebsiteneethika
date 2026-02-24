type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-balance text-2xl font-semibold text-white md:text-3xl">{title}</h2>
      {description ? <p className="max-w-2xl text-slate-300">{description}</p> : null}
    </div>
  );
}
