import { Award, BookOpen, Briefcase, FlaskConical, GraduationCap, PenLine } from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { Doodle } from "@/components/doodles";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ProjectGrid } from "@/components/project-grid";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionHeading } from "@/components/section-heading";
import { StudioHero } from "@/components/studio-hero";
import { StudioNav } from "@/components/studio-nav";
import { navItems, portfolioData } from "@/data/portfolio-data";

export default function Home() {
  const industryExperience = portfolioData.experience.filter(
    (item) => !item.company.includes("Cognitive Neuroengineering Lab") && !item.company.includes("TEA Lab"),
  );

  return (
    <main className="relative overflow-x-clip" style={{ background: "transparent", color: "var(--ink)" }}>
      <ScrollProgress />
      <StudioNav items={navItems} />

      <StudioHero />

      {/* EDUCATION & ACHIEVEMENTS */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="blob blob-indigo" style={{ width: 320, height: 320, top: -120, right: -100 }} />
        <Doodle variant="star" color="var(--lime-dark)" size={34} style={{ top: 56, left: "6%" }} rotate={-6} />
        <Doodle variant="squiggle" color="var(--indigo)" size={90} style={{ bottom: 40, right: "8%" }} rotate={4} />
        <Doodle variant="dots" color="var(--indigo)" size={60} style={{ top: 30, right: "22%" }} rotate={0} />
        <Doodle variant="circle" color="var(--lime-dark)" size={50} style={{ bottom: 120, left: "16%" }} rotate={-4} />
        <Doodle variant="spark" color="var(--indigo)" size={20} style={{ top: 180, left: "40%" }} rotate={10} />
        <div className="relative mx-auto w-[min(1120px,94vw)]">
          <AnimatedSection id="education">
            <div className="relative inline-block">
              <Doodle variant="underline" color="var(--lime-dark)" size={110} style={{ top: -18, left: 4 }} rotate={0} />
            </div>
            <SectionHeading
              eyebrow="Education & Achievements"
              title="Academic Foundation"
              description="Graduate research at UF and gold-medal undergraduate excellence at MGIT Hyderabad."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {portfolioData.education.map((item) => (
                <article key={`${item.institution}-${item.degree}`} className="card rounded-2xl p-6">
                  <span className="icon-badge icon-badge-lime">
                    <GraduationCap size={18} />
                  </span>
                  <h3 className="section-title mt-4 text-lg">{item.degree}</h3>
                  <p className="mt-1 text-sm">
                    <span className="highlight-lime">{item.institution}</span>
                  </p>
                  <p className="mt-2 text-xs" style={{ color: "var(--ink-3)" }}>
                    {item.location} · {item.duration}
                  </p>
                  <p className="display mt-3 text-xl font-semibold" style={{ color: "var(--ink)" }}>
                    {item.gpa}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--ink-2)" }}>
                    {item.focus}
                  </p>
                  <ul className="mt-4 space-y-2 border-t pt-4" style={{ borderColor: "var(--border)" }}>
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm" style={{ color: "var(--ink-2)" }}>
                        <span className="mt-[7px] h-1 w-3 flex-shrink-0 rounded-full" style={{ background: "var(--lime-dark)" }} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
              <article className="card rounded-2xl p-6 md:col-span-2">
                <span className="icon-badge icon-badge-lime">
                  <Award size={18} />
                </span>
                <h3 className="section-title mt-4 text-lg">Honors & Certifications</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <ul className="space-y-2">
                    {portfolioData.honors.map((honor) => (
                      <li key={honor} className="flex gap-3 text-sm" style={{ color: "var(--ink-2)" }}>
                        <span className="mt-[7px] h-1 w-3 flex-shrink-0 rounded-full" style={{ background: "var(--lime-dark)" }} />
                        <span>{honor}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-2">
                    {portfolioData.certifications.map((certification) => (
                      <li key={certification} className="flex gap-3 text-sm" style={{ color: "var(--ink-2)" }}>
                        <span className="mt-[7px] h-1 w-3 flex-shrink-0 rounded-full" style={{ background: "var(--indigo)" }} />
                        <span>{certification}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* RESEARCH ASSISTANTSHIPS — kept as two separate sections */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="blob blob-lime" style={{ width: 280, height: 280, bottom: -100, left: -80 }} />
        <Doodle variant="swirl" color="var(--indigo)" size={70} style={{ top: 64, right: "10%" }} rotate={-8} />
        <Doodle variant="dots" color="var(--lime-dark)" size={70} style={{ bottom: 100, left: "5%" }} rotate={0} />
        <Doodle variant="star" color="var(--lime-dark)" size={26} style={{ top: 40, left: "30%" }} rotate={12} />
        <Doodle variant="arrow" color="var(--indigo)" size={70} style={{ bottom: 40, right: "20%" }} rotate={-16} />
        <Doodle variant="spark" color="var(--indigo)" size={22} style={{ top: 200, right: "4%" }} rotate={0} />
        <div id="research" className="relative mx-auto flex w-[min(1120px,94vw)] flex-col gap-10">
          <AnimatedSection>
            <span className="icon-badge icon-badge-lime mb-4">
              <FlaskConical size={18} />
            </span>
            <SectionHeading
              eyebrow="Research"
              title="Research Assistantships"
              description="Two graduate research roles at UF — brain-aligned deep learning in the Cognitive Neuroengineering Lab, and runtime safety monitoring for autonomous systems in the TEA Lab."
            />
          </AnimatedSection>
          {portfolioData.researchPillars.map((pillar, index) => (
            <AnimatedSection key={pillar.id} id={`research-${pillar.id}`}>
              <div className="card rounded-2xl p-6 md:p-8">
                <SectionHeading
                  eyebrow={`Research Assistant ${index + 1}`}
                  title={pillar.lab}
                  description={pillar.focus}
                  size="sm"
                />
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="icon-badge icon-badge-lime">
                      <FlaskConical size={18} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold">
                        <span className="highlight-lime">{pillar.advisor} · {pillar.funding}</span>
                      </p>
                      <p className="mt-1 text-sm font-medium">
                        <span className="highlight-lime">{pillar.tagline}</span>
                      </p>
                    </div>
                  </div>
                  <span className="tag-lime rounded-full px-3 py-1 text-xs font-semibold">
                    {pillar.period}
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {pillar.metrics.map((metric) => (
                    <div key={metric.label} className="rounded-xl p-3" style={{ background: "var(--paper-soft)", border: "1px solid var(--border)" }}>
                      <p className="display text-lg font-semibold" style={{ color: "var(--lime-ink)" }}>
                        {metric.value}
                      </p>
                      <p className="mt-1 text-[11px]" style={{ color: "var(--ink-3)" }}>
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
                        style={{ background: "var(--lime-dark)" }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {pillar.stack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* INDUSTRY EXPERIENCE — timeline */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="blob blob-indigo" style={{ width: 260, height: 260, top: -80, right: -60 }} />
        <Doodle variant="arrow" color="var(--lime-dark)" size={80} style={{ top: 90, left: "4%" }} rotate={10} />
        <Doodle variant="star" color="var(--indigo)" size={28} style={{ bottom: 60, right: "12%" }} rotate={14} />
        <Doodle variant="squiggle" color="var(--lime-dark)" size={70} style={{ top: 40, right: "30%" }} rotate={-6} />
        <Doodle variant="circle" color="var(--indigo)" size={46} style={{ bottom: 140, left: "22%" }} rotate={8} />
        <Doodle variant="dots" color="var(--lime-dark)" size={56} style={{ top: 220, left: "45%" }} rotate={0} />
        <div className="relative mx-auto w-[min(1120px,94vw)]">
          <AnimatedSection id="experience">
            <SectionHeading
              eyebrow="Industry Experience"
              title="Internships & Leadership"
              description="Career analytics, ML internships, and full-stack engineering roles."
            />
            <ExperienceTimeline items={industryExperience} />
          </AnimatedSection>
        </div>
      </section>

      {/* PROJECTS — square grid */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="blob blob-indigo" style={{ width: 300, height: 300, top: -100, left: -90 }} />
        <Doodle variant="squiggle" color="var(--lime-dark)" size={80} style={{ top: 120, right: "6%" }} rotate={-4} />
        <Doodle variant="circle" color="var(--indigo)" size={60} style={{ bottom: 70, left: "8%" }} rotate={6} />
        <Doodle variant="star" color="var(--lime-dark)" size={30} style={{ top: 50, left: "36%" }} rotate={-10} />
        <Doodle variant="arrow" color="var(--indigo)" size={64} style={{ bottom: 160, right: "26%" }} rotate={20} />
        <Doodle variant="spark" color="var(--lime-dark)" size={20} style={{ top: 240, right: "4%" }} rotate={0} />
        <div className="relative mx-auto w-[min(1120px,94vw)]">
          <AnimatedSection id="projects">
            <span className="icon-badge icon-badge-indigo mb-4">
              <Briefcase size={18} />
            </span>
            <SectionHeading
              eyebrow="Projects"
              title="Built, Deployed, and Measured"
              description="Production platforms with RAG, real-time integrations, explainable medical AI, and agentic workflows."
            />
            <ProjectGrid projects={portfolioData.projects} />
          </AnimatedSection>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="blob blob-indigo" style={{ width: 260, height: 260, top: -90, right: -70 }} />
        <Doodle variant="spark" color="var(--lime-dark)" size={30} style={{ top: 100, left: "10%" }} rotate={0} />
        <Doodle variant="underline" color="var(--indigo)" size={100} style={{ bottom: 90, right: "10%" }} rotate={-3} />
        <Doodle variant="swirl" color="var(--lime-dark)" size={54} style={{ top: 40, right: "34%" }} rotate={14} />
        <Doodle variant="star" color="var(--indigo)" size={24} style={{ bottom: 160, left: "24%" }} rotate={-8} />
        <Doodle variant="dots" color="var(--indigo)" size={60} style={{ top: 220, left: "48%" }} rotate={0} />
        <div className="relative mx-auto w-[min(1120px,94vw)]">
          <AnimatedSection id="publications">
            <span className="icon-badge icon-badge-lime mb-4">
              <BookOpen size={18} />
            </span>
            <SectionHeading
              eyebrow="Publications"
              title="Research & Technical Writing"
              description="Peer-reviewed work in explainable AI for medical imaging and cardiac diagnosis."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {portfolioData.researchPapers.map((paper) => (
                <article key={paper.title} className="card rounded-2xl p-6">
                  <p className="eyebrow">
                    {paper.venue} · {paper.year}
                  </p>
                  <h3 className="section-title mt-3 text-base leading-snug">{paper.title}</h3>
                  {paper.authors?.length ? (
                    <p className="mt-3 text-sm" style={{ color: "var(--ink-3)" }}>
                      {paper.authors.join(" · ")}
                    </p>
                  ) : null}
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--ink-2)" }}>
                    {paper.abstract}
                  </p>
                  {paper.citation ? (
                    <p className="mt-3 border-t pt-3 text-xs italic" style={{ borderColor: "var(--border)", color: "var(--ink-3)" }}>
                      {paper.citation}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* EXTRACURRICULAR / WRITING — blog-card style */}
      <section className="relative overflow-hidden py-20 md:py-24">
        <div className="blob blob-lime" style={{ width: 260, height: 260, bottom: -90, right: -70 }} />
        <Doodle variant="swirl" color="var(--lime-dark)" size={64} style={{ top: 70, right: "8%" }} rotate={12} />
        <Doodle variant="star" color="var(--indigo)" size={26} style={{ bottom: 120, left: "6%" }} rotate={-10} />
        <Doodle variant="squiggle" color="var(--indigo)" size={70} style={{ top: 30, left: "34%" }} rotate={-6} />
        <Doodle variant="circle" color="var(--lime-dark)" size={44} style={{ bottom: 60, right: "24%" }} rotate={10} />
        <Doodle variant="spark" color="var(--indigo)" size={20} style={{ top: 200, right: "40%" }} rotate={0} />
        <div className="relative mx-auto w-[min(1120px,94vw)]">
          <AnimatedSection id="writing">
            <span className="icon-badge icon-badge-indigo mb-4">
              <PenLine size={18} />
            </span>
            <SectionHeading
              eyebrow="Beyond the Lab"
              title="Writing & Community"
              description="Mentorship, content, and open work at the boundary of research and industry."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {portfolioData.extracurricular.map((item) => (
                <article key={item} className="blog-card">
                  <span className="tag-lime rounded-full px-2.5 py-0.5 text-[11px] font-semibold">
                    Note
                  </span>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--ink-2)" }}>
                    {item}
                  </p>
                </article>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <footer className="border-t py-8 text-center text-xs" style={{ borderColor: "var(--border)", color: "var(--ink-3)" }}>
        <p>
          © {new Date().getFullYear()} {portfolioData.basics.name} · Gainesville, FL
        </p>
      </footer>
    </main>
  );
}
