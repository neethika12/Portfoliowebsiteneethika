import { type StatItem } from "@/data/portfolio-data";

type SectionMetricsProps = {
  items: StatItem[];
};

export function SectionMetrics({ items }: SectionMetricsProps) {
  return (
    <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={`${item.label}-${item.value}`} className="glass-card rounded-xl px-4 py-3">
          <p className="text-base font-semibold text-white">{item.value}</p>
          <p className="text-[11px] uppercase tracking-[0.14em] text-slate-400">{item.label}</p>
        </article>
      ))}
    </div>
  );
}
