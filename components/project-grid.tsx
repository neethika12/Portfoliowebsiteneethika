import Image from "next/image";

import type { ProjectItem } from "@/data/portfolio-data";

type ProjectGridProps = {
  projects: ProjectItem[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {projects.map((project) => (
        <article key={project.title} className="project-tile">
          <div className="relative h-2/5 w-full">
            <Image src={project.imagePath} alt={`${project.title} preview`} fill className="object-cover" />
          </div>
          <div className="flex flex-1 flex-col p-5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="section-title text-base leading-snug">{project.title}</h3>
              <span className="tag flex-shrink-0">{project.period}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-2)" }}>
              {project.description}
            </p>
            <p className="mt-2 text-sm font-medium" style={{ color: "var(--indigo)" }}>
              {project.impact}
            </p>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
              {project.highlights.map((highlight) => (
                <span key={highlight} className="tag-lime rounded-full px-2.5 py-0.5 text-[11px] font-semibold">
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
