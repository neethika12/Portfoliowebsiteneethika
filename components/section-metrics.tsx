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
          className="rounded-xl px-4 py-3"
          style={{ border: "1px solid var(--border)", background: "var(--paper)" }}
        >
          <p className="serif text-xl font-semibold" style={{ color: "var(--ink)" }}>{item.value}</p>
          <p className="mt-0.5 text-[10px] uppercase tracking-[0.14em]" style={{ color: "var(--ink-3)" }}>{item.label}</p>
        </article>
      ))}
    </div>
  );
}
