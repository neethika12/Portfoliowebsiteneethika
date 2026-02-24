import { ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { HeroCanvasShell } from "@/components/hero-canvas-shell";
import { PortfolioNav } from "@/components/portfolio-nav";
import { SectionHeading } from "@/components/section-heading";
import { SectionMetrics } from "@/components/section-metrics";
import { SkillCloud } from "@/components/skill-cloud";
import { navItems, portfolioData } from "@/data/portfolio-data";

export default function Home() {
  const frontendSkills = portfolioData.skills.groups.find((group) => group.title === "Frontend")?.skills ?? [];
  const backendSkills = portfolioData.skills.groups.find((group) => group.title === "Backend")?.skills ?? [];

  return (
    <main className="relative overflow-x-clip bg-slate-950 text-slate-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),rgba(2,6,23,0.95)_36%)]" />
      <div className="absolute -right-40 top-40 -z-10 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-[140px]" />
      <div className="absolute -left-32 top-[50%] -z-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      <PortfolioNav name={portfolioData.basics.name} items={navItems} />

      <div className="mx-auto flex w-[min(1120px,94vw)] flex-col gap-16 pb-20 md:gap-24">
        <AnimatedSection id="introduction" className="pt-6">
          <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div>
              <p className="mb-3 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
                {portfolioData.basics.role}
              </p>
              <h1 className="text-balance text-3xl font-semibold leading-tight text-white md:text-5xl">
                {portfolioData.introduction.title}
              </h1>
              <p className="mt-4 max-w-2xl text-slate-300 md:text-lg">{portfolioData.basics.tagline}</p>
              <p className="mt-4 text-sm text-slate-400">{portfolioData.introduction.subtitle}</p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="inline-flex items-center gap-2 text-sm text-slate-300">
                  <MapPin size={16} className="text-cyan-300" />
                  {portfolioData.basics.location}
                </div>
                <a
                  href={`mailto:${portfolioData.basics.email}`}
                  className="inline-flex items-center gap-2 text-sm text-cyan-200 hover:text-cyan-100"
                >
                  <Mail size={16} />
                  {portfolioData.basics.email}
                </a>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {portfolioData.basics.socialLinks.map((link) => (
                  link.href ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-white/15 px-3 py-1.5 text-sm text-slate-100 transition-colors hover:border-cyan-300/40 hover:text-cyan-200"
                    >
                      {link.label}
                      <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <span
                      key={link.label}
                      className="inline-flex items-center gap-1 rounded-full border border-dashed border-white/20 px-3 py-1.5 text-sm text-slate-300"
                    >
                      {link.label} (add URL)
                    </span>
                  )
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {portfolioData.introduction.metrics.map((metric) => (
                  <article key={metric.label} className="glass-card rounded-xl p-3">
                    <p className="text-xl font-semibold text-white">{metric.value}</p>
                    <p className="text-xs uppercase tracking-wide text-slate-400">{metric.label}</p>
                  </article>
                ))}
              </div>
            </div>
            <HeroCanvasShell />
          </div>
        </AnimatedSection>

        <AnimatedSection id="about">
          <SectionHeading
            eyebrow="About"
            title="Professional Summary"
            description="Focused on building reliable software systems with measurable outcomes in ML performance, backend stability, and automation efficiency."
          />
          <SectionMetrics items={portfolioData.about.stats} />
          <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
            <article className="glass-card rounded-2xl p-5 md:p-6">
              <div className="space-y-4 text-slate-300">
                {portfolioData.about.summary.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <ul className="mt-5 space-y-3">
                {portfolioData.about.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm text-slate-200">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="glass-card rounded-2xl p-5 md:p-6">
              <Image
                src={portfolioData.about.visualPath}
                alt="Visual summary of software development workflow"
                width={720}
                height={720}
                className="h-full w-full rounded-xl border border-white/10 object-cover"
                priority
              />
            </article>
          </div>
        </AnimatedSection>

        <AnimatedSection id="skills">
          <SectionHeading
            eyebrow="Skills"
            title="Developer Skills"
            description="Technical capability across frontend, backend, cloud workflows, and applied engineering tools."
          />
          <SectionMetrics items={portfolioData.skills.stats} />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {portfolioData.skills.groups.map((group) => (
              <SkillCloud key={group.title} title={group.title} skills={group.skills} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="experience">
          <SectionHeading
            eyebrow="Experience"
            title="Hands-on Engineering Experience"
            description="Roles and outcomes that demonstrate impact, ownership, and execution."
          />
          <SectionMetrics items={portfolioData.experienceStats} />
          <div className="space-y-4">
            {portfolioData.experience.map((item) => (
              <article key={`${item.company}-${item.role}`} className="glass-card rounded-2xl p-5 md:p-6">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                    <p className="text-sm text-cyan-200">
                      {item.company} - {item.location}
                    </p>
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.duration}</p>
                </div>

                <p className="mt-4 text-slate-300">{item.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="education">
          <SectionHeading
            eyebrow="Education"
            title="Academic Foundation"
            description="Coursework, leadership, and milestones that strengthened my engineering depth."
          />
          <SectionMetrics items={portfolioData.educationStats} />
          <div className="grid gap-4 md:grid-cols-2">
            {portfolioData.education.map((item) => (
              <article key={`${item.institution}-${item.degree}`} className="glass-card rounded-2xl p-5 md:p-6">
                <h3 className="text-lg font-semibold text-white">{item.degree}</h3>
                <p className="mt-1 text-sm text-cyan-200">{item.institution}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{item.duration}</p>
                <p className="mt-4 text-sm text-slate-300">{item.focus}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="projects">
          <SectionHeading
            eyebrow="Selected Projects"
            title="Products and Platforms I Built"
            description="Project portfolio with measurable outcomes, systems depth, and implementation details."
          />
          <SectionMetrics items={portfolioData.projectStats} />
          <div className="grid gap-4 md:grid-cols-2">
            {portfolioData.projects.map((project) => (
              <article key={project.title} className="glass-card rounded-2xl p-5 md:p-6">
                <Image
                  src={project.imagePath}
                  alt={`${project.title} preview`}
                  width={960}
                  height={600}
                  className="mb-4 h-44 w-full rounded-xl border border-white/10 object-cover"
                />
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold text-white">{project.title}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{project.period}</span>
                </div>
                <p className="mt-3 text-sm text-slate-300">{project.description}</p>
                <p className="mt-3 text-sm text-cyan-100">{project.impact}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                {project.liveUrl || project.repoUrl ? (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-cyan-200 hover:text-cyan-100"
                      >
                        Live Demo
                        <ArrowUpRight size={14} />
                      </a>
                    ) : null}
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-slate-300 hover:text-slate-100"
                      >
                        Source Code
                        <ArrowUpRight size={14} />
                      </a>
                    ) : null}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="research">
          <SectionHeading
            eyebrow="Research Papers"
            title="Research and Technical Writing"
            description="Current publications and technical reports from coursework/research work."
          />
          <SectionMetrics items={portfolioData.researchStats} />
          <div className="grid gap-4 md:grid-cols-2">
            {portfolioData.researchPapers.map((paper) => (
              <article key={paper.title} className="glass-card rounded-2xl p-5 md:p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                  {paper.venue} - {paper.year}
                </p>
                <h3 className="mt-2 text-base font-semibold text-white">{paper.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{paper.abstract}</p>
                {paper.url ? (
                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm text-cyan-200 hover:text-cyan-100"
                  >
                    Read publication
                    <ArrowUpRight size={14} />
                  </a>
                ) : (
                  <p className="mt-4 text-sm text-slate-400">
                    Share publication links to display direct access here.
                  </p>
                )}
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="resume">
          <SectionHeading
            eyebrow="Resume"
            title="Download Resume"
            description="Keep your resume link ready for applications, recruiters, and LinkedIn profile sharing."
          />
          <SectionMetrics items={portfolioData.resumeStats} />
          <article className="glass-card rounded-2xl p-5 md:p-6">
            <p className="text-slate-300">
              Download resume in different formats and keep this portfolio link as your unified technical profile.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={portfolioData.resume.pdf} download className="primary-button">
                <Download size={16} />
                Download PDF
              </a>
              <a href={portfolioData.resume.text} download className="secondary-button">
                <Download size={16} />
                Download Text Resume
              </a>
            </div>
          </article>
        </AnimatedSection>

        <AnimatedSection id="contact" className="pb-8">
          <SectionHeading
            eyebrow="Contact"
            title="Let's Work Together"
            description="Share your opportunity, collaboration idea, or project details."
          />
          <div className="grid gap-4 md:grid-cols-[0.85fr_1.15fr]">
            <article className="glass-card rounded-2xl p-5 md:p-6">
              <h3 className="text-lg font-semibold text-white">Contact Details</h3>
              <p className="mt-3 text-sm text-slate-300">
                The form sends your message to the configured backend email destination.
              </p>
              <div className="mt-4 space-y-2 text-sm">
                <p className="text-slate-200">Email: {portfolioData.basics.email}</p>
                <p className="inline-flex items-center gap-2 text-slate-300">
                  <Phone size={14} className="text-cyan-300" />
                  {portfolioData.basics.phone}
                </p>
                <p className="text-slate-300">Location: {portfolioData.basics.location}</p>
              </div>
              <div className="mt-5">
                <h4 className="text-sm font-semibold text-slate-100">Certifications</h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {portfolioData.certifications.map((certification) => (
                    <li key={certification} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{certification}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 grid gap-3">
                <SkillCloud title="Frontend Skills" skills={frontendSkills} />
                <SkillCloud title="Backend Skills" skills={backendSkills} />
              </div>
            </article>
            <ContactForm />
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
