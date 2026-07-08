import { ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";

import { Doodle } from "@/components/doodles";
import { portfolioData } from "@/data/portfolio-data";

export function StudioHero() {
  return (
    <section id="hero" className="hero-split">
      {/* LEFT — indigo panel */}
      <div className="hero-panel-indigo flex flex-col justify-center px-8 py-16 sm:px-14 md:py-0">
        <div
          className="deco-dashed-box hidden md:block"
          style={{ width: 120, height: 120, top: 48, right: 48 }}
        />
        <Doodle variant="star" color="var(--lime)" size={26} style={{ top: 90, right: 190 }} rotate={10} />
        <Doodle variant="dots" color="rgba(255,255,255,0.5)" size={60} style={{ bottom: 130, left: 40 }} rotate={0} />
        <Doodle variant="spark" color="var(--lime)" size={20} style={{ top: 220, right: 60 }} rotate={0} />
        <p
          className="display inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.08em]"
          style={{ color: "var(--lime)" }}
        >
          <span style={{ background: "var(--lime)", width: 22, height: 2, display: "inline-block" }} />
          About Me
        </p>

        <h1 className="relative hero-name display mt-5 text-5xl sm:text-6xl md:text-7xl">
          {portfolioData.basics.name}
          <Doodle variant="underline" color="var(--lime)" size={160} style={{ left: 2, bottom: -14 }} />
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <span className="display text-2xl font-semibold sm:text-3xl">Researcher ×</span>
          <span className="display text-2xl font-semibold sm:text-3xl">Software Engineer</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <span
            className="rounded-full px-3 py-1 text-xs font-semibold"
            style={{ background: "var(--lime)", color: "var(--lime-ink)" }}
          >
            AI / ML
          </span>
          <span
            className="rounded-full px-3 py-1 text-xs font-semibold"
            style={{ border: "1px solid rgba(255,255,255,0.4)", color: "#FFFFFF" }}
          >
            Full-Stack
          </span>
        </div>

        <p className="mt-6 max-w-md text-sm leading-relaxed sm:text-base" style={{ color: "rgba(255,255,255,0.78)" }}>
          {portfolioData.basics.tagline}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={portfolioData.resume.pdf} download className="btn-primary">
            <Download size={16} />
            Resume
          </a>
          <a href="#experience" className="btn-ghost">
            View Experience
            <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-5 text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
          {portfolioData.basics.socialLinks.map((link) =>
            link.href ? (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="hover:text-white">
                {link.label}
              </a>
            ) : null,
          )}
        </div>
      </div>

      {/* RIGHT — lime panel */}
      <div className="hero-panel-lime flex items-center justify-center px-8 py-16">
        <div
          className="deco-dot-grid absolute"
          style={{ top: 40, left: 40, color: "var(--lime-ink)" }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="deco-dot" />
          ))}
        </div>
        <div
          className="absolute rounded-lg"
          style={{
            border: "1.5px dashed rgba(27,36,0,0.3)",
            width: 90,
            height: 90,
            bottom: 56,
            left: 48,
          }}
        />

        <div className="hero-photo-frame">
          <Image
            src="/profile.jpg"
            alt={portfolioData.basics.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <Doodle variant="star" color="var(--indigo)" size={30} style={{ top: 30, right: 50 }} rotate={-12} />
        <Doodle variant="spark" color="var(--lime-ink)" size={22} style={{ bottom: 100, right: 60 }} rotate={0} />
        <Doodle variant="squiggle" color="var(--indigo)" size={60} style={{ top: 260, left: 30 }} rotate={-4} />
        <Doodle variant="circle" color="var(--lime-ink)" size={40} style={{ bottom: 220, right: 30 }} rotate={8} />

        <div
          className="absolute flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold"
          style={{ bottom: 48, right: 48, background: "var(--lime-ink)", color: "var(--lime)" }}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--lime)" }} />
          Gainesville, FL
        </div>
      </div>
    </section>
  );
}
