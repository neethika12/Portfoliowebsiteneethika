import type { ExperienceItem } from "@/data/portfolio-data";

type ExperienceTimelineProps = {
  items: ExperienceItem[];
};

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="timeline">
      {items.map((item) => {
        return (
          <div key={`${item.company}-${item.role}`} className="timeline-item">
            <span className="timeline-dot timeline-dot--lime" />
            <div className="card rounded-2xl p-6">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="section-title text-lg">{item.role}</h3>
                  <p className="mt-0.5 text-sm font-semibold">
                    <span className="highlight-lime">{item.company}</span>
                  </p>
                  <p className="text-xs" style={{ color: "var(--ink-3)" }}>
                    {item.location}
                  </p>
                </div>
                <p className="tag-lime rounded-full px-3 py-1 text-xs font-semibold">
                  {item.duration}
                </p>
              </div>
              <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--ink-2)" }}>
                {item.summary}
              </p>
              <ul className="mt-4 space-y-2">
                {item.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3 text-sm" style={{ color: "var(--ink-2)" }}>
                    <span
                      className="mt-[7px] h-1 w-3 flex-shrink-0 rounded-full"
                      style={{ background: "var(--lime-dark)" }}
                    />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2 border-t pt-4" style={{ borderColor: "var(--border)" }}>
                {item.technologies.map((technology) => (
                  <span key={technology} className="tag">
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
