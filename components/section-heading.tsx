type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  size?: "lg" | "sm";
};

export function SectionHeading({ eyebrow, title, description, size = "lg" }: SectionHeadingProps) {
  if (size === "sm") {
    return (
      <div className="mb-4 space-y-1.5 border-l-2 pl-4" style={{ borderColor: "var(--border-strong)" }}>
        <p className="eyebrow" style={{ fontSize: "0.68rem" }}>
          {eyebrow}
        </p>
        <h3 className="section-title text-balance text-lg leading-tight md:text-xl">{title}</h3>
        {description ? (
          <p className="max-w-2xl text-sm leading-relaxed" style={{ color: "var(--ink-2)" }}>
            {description}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div className="mb-8 space-y-3">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title text-balance text-2xl leading-tight md:text-3xl">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-relaxed" style={{ color: "var(--ink-2)" }}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
