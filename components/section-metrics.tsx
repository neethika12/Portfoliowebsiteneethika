import { type StatItem } from "@/data/portfolio-data";

type SectionMetricsProps = {
  items: StatItem[];
};

export function SectionMetrics({ items }: SectionMetricsProps) {
  return (
    <div className="mb-7 flex flex-wrap gap-3">
      {items.map((item) => (
        <article
          key={`${item.label}-${item.value}`}
          className="relative overflow-hidden rounded-xl px-4 py-3"
          style={{ border: "1px solid var(--border)", background: "var(--paper)" }}
        >
          <span
            className="absolute inset-x-0 top-0 h-[2px]"
            style={{ background: "linear-gradient(90deg, var(--synapse), var(--cortex))" }}
          />
          <p className="serif stat-glow text-xl font-semibold">{item.value}</p>
          <p className="mono-label mt-0.5" style={{ color: "var(--ink-3)" }}>{item.label}</p>
        </article>
      ))}
    </div>
  );
}
