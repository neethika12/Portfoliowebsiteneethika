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
              <p className="mono-label text-teal-300/90">{pillar.funding}</p>
              <h3 className="serif mt-2 text-xl font-semibold text-white">{pillar.lab}</h3>
              <p className="mt-1 text-sm text-slate-300">{pillar.advisor}</p>
            </div>
            <span className="mono-label rounded border border-white/10 px-2 py-1 text-slate-400">
              {pillar.period}
            </span>
          </div>

          <p className="mt-4 text-base font-medium text-teal-200/95">{pillar.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300/90">{pillar.focus}</p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {pillar.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-white/10 bg-black/20 px-3 py-3"
              >
                <p className="serif text-lg font-semibold text-white">{metric.value}</p>
                <p className="mono-label mt-1 text-[10px] text-slate-400">{metric.label}</p>
              </div>
            ))}
          </div>

          <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
            {pillar.highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-slate-200/90">
                <span
                  className="mt-2 h-1 w-3 flex-shrink-0 rounded-full"
                  style={{ background: index === 1 ? "var(--cortex-light)" : "var(--synapse-glow)" }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {pillar.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
