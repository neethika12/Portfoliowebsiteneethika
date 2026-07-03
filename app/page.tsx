import { ArrowUpRight, Award, Brain, Download, Mail, MapPin, Phone, Shield } from "lucide-react";
import Image from "next/image";

import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { HeroCanvasShell } from "@/components/hero-canvas-shell";
import { PortfolioNav } from "@/components/portfolio-nav";
import { ResearchPillars } from "@/components/research-pillars";
import { SectionHeading } from "@/components/section-heading";
import { SectionMetrics } from "@/components/section-metrics";
import { SkillCloud } from "@/components/skill-cloud";
import { navItems, portfolioData } from "@/data/portfolio-data";

export default function Home() {
  const mlSkills =
    portfolioData.skills.groups.find((group) => group.title === "AI / ML / Deep Learning")?.skills ?? [];
  const cloudSkills =
    portfolioData.skills.groups.find((group) => group.title === "Full-Stack & Cloud")?.skills ?? [];

  return (
    <main className="relative overflow-x-clip" style={{ background: "var(--mist)", color: "var(--ink)" }}>
      <PortfolioNav name={portfolioData.basics.name} items={navItems} />

      <div className="mx-auto flex w-[min(1120px,94vw)] flex-col gap-20 pb-24 md:gap-28">

        {/* HERO */}
        <AnimatedSection id="introduction" className="pt-2">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
            <div className="flex flex-col justify-center">
              <p className="eyebrow mb-3">Neethika Prathigadapa</p>
              <h1
                className="serif text-balance text-4xl font-semibold leading-[1.1] md:text-[3.25rem]"
                style={{ color: "var(--ink)" }}
              >
                {portfolioData.introduction.title}
              </h1>
              <div className="section-divider mt-4 mb-5" />
              <p className="max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: "var(--ink-2)" }}>
                {portfolioData.basics.tagline}
              </p>

              <div className="mt-5">
                <span className="availability-pill">{portfolioData.basics.availability}</span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="accent-tag">MS CS · UF · GPA 3.94</span>
                <span className="cortex-tag">Brain-Aligned Video ML</span>
                <span className="signal-tag">Safety-Critical AI</span>
                <span className="neutral-tag">FastAPI · React · AWS</span>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-5 text-sm" style={{ color: "var(--ink-3)" }}>
                <span className="inline-flex items-center gap-2">
                  <MapPin size={15} style={{ color: "var(--synapse)" }} />
                  {portfolioData.basics.location}
                </span>
                <a
                  href={`mailto:${portfolioData.basics.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:opacity-80"
                  style={{ color: "var(--synapse)" }}
                >
                  <Mail size={15} />
                  {portfolioData.basics.email}
                </a>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {portfolioData.basics.socialLinks.map((link) =>
                  link.href ? (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="social-link">
                      {link.label}
                      <ArrowUpRight size={13} />
                    </a>
                  ) : null,
                )}
                <a href="#resume" className="primary-button text-sm">
                  <Download size={14} />
                  Resume
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {portfolioData.introduction.metrics.map((metric) => (
                  <article key={metric.label} className="paper-card rounded-xl p-4">
                    <p className="serif stat-glow text-2xl font-bold">{metric.value}</p>
                    <p className="mono-label mt-1" style={{ color: "var(--ink-3)" }}>
                      {metric.label}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="hero-shell flex flex-col">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
                <Brain size={16} className="text-teal-400" />
                <span className="mono-label text-teal-300/80">Live research graph</span>
              </div>
              <div className="min-h-[300px] flex-1">
                <HeroCanvasShell />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* RESEARCH LABS */}
        <AnimatedSection id="research-labs">
          <SectionHeading
            eyebrow="Active Research"
            title="Two Labs, One Thread: Intelligence You Can Trust"
            description="NIH/NSF neuroengineering and NSF MASC safety-critical autonomy — rigorous science with production-grade engineering discipline."
          />
          <ResearchPillars pillars={portfolioData.researchPillars} />
        </AnimatedSection>

        {/* ABOUT */}
        <AnimatedSection id="about">
          <SectionHeading
            eyebrow="About"
            title="At the Intersection of Brains, Safety, and Shipping"
            description={portfolioData.introduction.subtitle}
          />
          <SectionMetrics items={portfolioData.about.stats} />
          <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
            <article className="paper-card rounded-2xl p-6 md:p-8">
              <div className="space-y-4 leading-relaxed" style={{ color: "var(--ink-2)" }}>
                {portfolioData.about.summary.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <ul className="mt-6 space-y-3 border-t pt-5" style={{ borderColor: "var(--border)" }}>
                {portfolioData.about.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm" style={{ color: "var(--ink-2)" }}>
                    <span className="mt-2 h-1 w-4 flex-shrink-0 rounded-full" style={{ background: "var(--synapse)" }} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="paper-card flex flex-col gap-4 rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <Award size={20} style={{ color: "var(--signal)" }} />
                <h3 className="serif text-lg font-semibold">Honors & Impact</h3>
              </div>
              <ul className="space-y-3">
                {portfolioData.honors.map((honor) => (
                  <li key={honor} className="flex gap-3 text-sm leading-relaxed" style={{ color: "var(--ink-2)" }}>
                    <span className="mt-2 h-1 w-3 flex-shrink-0 rounded-full" style={{ background: "var(--signal)" }} />
                    <span>{honor}</span>
                  </li>
                ))}
              </ul>
              <Image
                src={portfolioData.about.visualPath}
                alt="Research and engineering workflow"
                width={720}
                height={480}
                className="mt-auto h-40 w-full rounded-xl object-cover md:h-48"
                style={{ border: "1px solid var(--border)" }}
              />
            </article>
          </div>
        </AnimatedSection>

        {/* SKILLS */}
        <AnimatedSection id="skills">
          <SectionHeading
            eyebrow="Skills"
            title="Technical Toolkit"
            description="From VideoMAE and RSA on HiPerGator to Terraform on AWS — research depth with shipping velocity."
          />
          <SectionMetrics items={portfolioData.skills.stats} />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {portfolioData.skills.groups.map((group) => (
              <SkillCloud key={group.title} title={group.title} skills={group.skills} />
            ))}
          </div>
        </AnimatedSection>

        {/* EXPERIENCE */}
        <AnimatedSection id="experience">
          <SectionHeading
            eyebrow="Experience"
            title="Research, Internships & Leadership"
            description="Measurable outcomes across two UF labs, career analytics, industry internships, and platform engineering."
          />
          <SectionMetrics items={portfolioData.experienceStats} />
          <div className="space-y-5">
            {portfolioData.experience.map((item) => (
              <article key={`${item.company}-${item.role}`} className="paper-card rounded-2xl p-6">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="serif text-lg font-semibold">{item.role}</h3>
                    <p className="mt-0.5 text-sm font-medium" style={{ color: "var(--synapse)" }}>
                      {item.company}
                    </p>
                    <p className="text-xs" style={{ color: "var(--ink-3)" }}>
                      {item.location}
                    </p>
                  </div>
                  <p
                    className="mono-label flex-shrink-0 rounded border px-2.5 py-1.5"
                    style={{ borderColor: "var(--border)", color: "var(--ink-3)" }}
                  >
                    {item.duration}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--ink-2)" }}>
                  {item.summary}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3 text-sm" style={{ color: "var(--ink-2)" }}>
                      <span className="mt-[7px] h-1 w-3 flex-shrink-0 rounded-full" style={{ background: "var(--synapse)" }} />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2 border-t pt-4" style={{ borderColor: "var(--border)" }}>
                  {item.technologies.map((technology) => (
                    <span key={technology} className="neutral-tag">
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </AnimatedSection>

        {/* EDUCATION */}
        <AnimatedSection id="education">
          <SectionHeading
            eyebrow="Education"
            title="Academic Foundation"
            description="Graduate research at UF and gold-medal undergraduate excellence at MGIT Hyderabad."
          />
          <SectionMetrics items={portfolioData.educationStats} />
          <div className="grid gap-4 md:grid-cols-2">
            {portfolioData.education.map((item) => (
              <article key={`${item.institution}-${item.degree}`} className="paper-card rounded-2xl p-6">
                <h3 className="serif text-lg font-semibold">{item.degree}</h3>
                <p className="mt-1 text-sm font-medium" style={{ color: "var(--synapse)" }}>
                  {item.institution}
                </p>
                <p className="mono-label mt-2" style={{ color: "var(--ink-3)" }}>
                  {item.location} · {item.duration}
                </p>
                <p className="serif mt-3 text-xl font-semibold stat-glow">{item.gpa}</p>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--ink-2)" }}>
                  {item.focus}
                </p>
                <ul className="mt-4 space-y-2 border-t pt-4" style={{ borderColor: "var(--border)" }}>
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm" style={{ color: "var(--ink-2)" }}>
                      <span className="mt-[7px] h-1 w-3 flex-shrink-0 rounded-full" style={{ background: "var(--cortex)" }} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </AnimatedSection>

        {/* PROJECTS */}
        <AnimatedSection id="projects">
          <SectionHeading
            eyebrow="Projects"
            title="Built, Deployed, and Measured"
            description="Production platforms with RAG, real-time integrations, explainable medical AI, and agentic workflows."
          />
          <SectionMetrics items={portfolioData.projectStats} />
          <div className="grid gap-5 md:grid-cols-2">
            {portfolioData.projects.map((project) => (
              <article key={project.title} className="paper-card rounded-2xl p-6">
                <Image
                  src={project.imagePath}
                  alt={`${project.title} preview`}
                  width={960}
                  height={600}
                  className="mb-5 h-40 w-full rounded-xl object-cover"
                  style={{ border: "1px solid var(--border)" }}
                />
                <div className="flex items-start justify-between gap-3">
                  <h3 className="serif text-base font-semibold leading-snug">{project.title}</h3>
                  <span className="mono-label flex-shrink-0">{project.period}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--ink-2)" }}>
                  {project.description}
                </p>
                <p className="mt-3 text-sm font-medium" style={{ color: "var(--synapse)" }}>
                  {project.impact}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.highlights.map((highlight) => (
                    <span key={highlight} className="accent-tag">
                      {highlight}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="neutral-tag">
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </AnimatedSection>

        {/* PUBLICATIONS */}
        <AnimatedSection id="publications">
          <SectionHeading
            eyebrow="Publications"
            title="Research & Technical Writing"
            description="Peer-reviewed work in explainable AI for medical imaging and cardiac diagnosis."
          />
          <SectionMetrics items={portfolioData.researchStats} />
          <div className="grid gap-5 md:grid-cols-2">
            {portfolioData.researchPapers.map((paper) => (
              <article key={paper.title} className="paper-card rounded-2xl p-6">
                <p className="eyebrow">
                  {paper.venue} · {paper.year}
                </p>
                <h3 className="serif mt-3 text-base font-semibold leading-snug">{paper.title}</h3>
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

        {/* EXTRACURRICULAR */}
        <AnimatedSection id="community">
          <SectionHeading
            eyebrow="Beyond the Lab"
            title="Community & Craft"
            description="Mentorship, content, and open work at the boundary of research and industry."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {portfolioData.extracurricular.map((item) => (
              <li key={item} className="paper-card flex gap-3 rounded-xl p-4 text-sm" style={{ color: "var(--ink-2)" }}>
                <Shield size={16} className="mt-0.5 flex-shrink-0" style={{ color: "var(--cortex)" }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </AnimatedSection>

        {/* RESUME */}
        <AnimatedSection id="resume">
          <SectionHeading
            eyebrow="Resume"
            title="Download Full Profile"
            description="PDF and text formats for applications, recruiters, and LinkedIn."
          />
          <SectionMetrics items={portfolioData.resumeStats} />
          <article className="paper-card rounded-2xl p-6">
            <p className="text-sm leading-relaxed" style={{ color: "var(--ink-2)" }}>
              {portfolioData.basics.availability} — reach out for research collaborations, co-op roles, or
              full-time opportunities in ML and software engineering.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={portfolioData.resume.pdf} download className="primary-button">
                <Download size={15} />
                Download PDF
              </a>
              <a href={portfolioData.resume.text} download className="secondary-button">
                <Download size={15} />
                Text Resume
              </a>
            </div>
          </article>
        </AnimatedSection>

        {/* CONTACT */}
        <AnimatedSection id="contact" className="pb-8">
          <SectionHeading
            eyebrow="Contact"
            title="Let's Build Something Rigorous"
            description="Research collaborations, Fall 2026 co-op, or production AI — I'd love to hear from you."
          />
          <div className="grid gap-5 md:grid-cols-[0.85fr_1.15fr]">
            <article className="paper-card rounded-2xl p-6">
              <h3 className="serif text-lg font-semibold">Get in touch</h3>
              <div className="mt-5 space-y-2.5 text-sm" style={{ color: "var(--ink-2)" }}>
                <p className="flex items-center gap-2">
                  <Mail size={13} style={{ color: "var(--synapse)" }} />
                  {portfolioData.basics.email}
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={13} style={{ color: "var(--synapse)" }} />
                  {portfolioData.basics.phone}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={13} style={{ color: "var(--synapse)" }} />
                  {portfolioData.basics.location}
                </p>
              </div>
              <div className="mt-6 border-t pt-5" style={{ borderColor: "var(--border)" }}>
                <h4 className="mono-label mb-3" style={{ color: "var(--ink-3)" }}>
                  Certifications
                </h4>
                <ul className="space-y-2">
                  {portfolioData.certifications.map((certification) => (
                    <li key={certification} className="flex gap-3 text-sm" style={{ color: "var(--ink-2)" }}>
                      <span className="mt-[7px] h-1 w-3 flex-shrink-0 rounded-full" style={{ background: "var(--synapse)" }} />
                      <span>{certification}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 grid gap-3">
                <SkillCloud title="ML & Research" skills={mlSkills.slice(0, 12)} />
                <SkillCloud title="Production Stack" skills={cloudSkills.slice(0, 10)} />
              </div>
            </article>
            <ContactForm />
          </div>
        </AnimatedSection>
      </div>

      <footer
        className="border-t py-8 text-center text-xs"
        style={{ borderColor: "var(--border)", color: "var(--ink-3)" }}
      >
        <p className="mono-label">
          © {new Date().getFullYear()} {portfolioData.basics.name} · Gainesville, FL
        </p>
      </footer>
    </main>
  );
}
