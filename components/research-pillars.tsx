import type { ResearchPillar } from "@/data/portfolio-data";

type ResearchPillarsProps = {
  pillars: ResearchPillar[];
};

export function ResearchPillars({ pillars }: ResearchPillarsProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {pillars.map((pillar, index) => (
        <article
          key={pillar.id}
          className={`pillar-card rounded-2xl p-6 md:p-7 ${index === 1 ? "pillar-card--cortex" : ""}`}
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="mono-label" style={{ color: index === 1 ? "var(--lavender)" : "var(--coral)" }}>
                {pillar.funding}
              </p>
              <h3 className="serif mt-2 text-xl font-semibold" style={{ color: "var(--ink)" }}>
                {pillar.lab}
              </h3>
              <p className="mt-1 text-sm" style={{ color: "var(--ink-2)" }}>
                {pillar.advisor}
              </p>
            </div>
            <span
              className="mono-label rounded-full border px-2.5 py-1"
              style={{ borderColor: "var(--border)", color: "var(--ink-3)" }}
            >
              {pillar.period}
            </span>
          </div>

          <p className="mt-4 text-base font-medium" style={{ color: index === 1 ? "var(--lavender)" : "var(--coral)" }}>
            {pillar.tagline}
          </p>
          <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--ink-2)" }}>
            {pillar.focus}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {pillar.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border px-3 py-3"
                style={{ borderColor: "var(--border)", background: "var(--paper-2)" }}
              >
                <p className="serif stat-glow text-lg font-semibold">{metric.value}</p>
                <p className="mono-label mt-1 text-[10px]" style={{ color: "var(--ink-3)" }}>
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <ul className="mt-6 space-y-2.5 border-t pt-5" style={{ borderColor: "var(--border)" }}>
            {pillar.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm" style={{ color: "var(--ink-2)" }}>
                <span
                  className="mt-2 h-1 w-3 flex-shrink-0 rounded-full"
                  style={{ background: index === 1 ? "var(--lavender)" : "var(--coral)" }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {pillar.stack.map((tech) => (
              <span key={tech} className="neutral-tag">
                {tech}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
