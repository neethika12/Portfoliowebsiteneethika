type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 space-y-3">
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className="serif text-balance text-2xl font-semibold leading-tight md:text-3xl"
        style={{ color: "var(--ink)" }}
      >
        {title}
      </h2>
      <div className="section-divider" />
      {description ? (
        <p className="max-w-2xl text-sm leading-relaxed" style={{ color: "var(--ink-3)" }}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
