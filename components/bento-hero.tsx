import { ArrowUpRight } from "lucide-react";

export function BentoHero() {
  return (
    <div
      className="bento-grid grid"
      style={{
        gridTemplateColumns: "1fr 1fr 1.35fr",
        gridTemplateAreas: `"stat1 stat2 intro" "stat3 stat4 intro" "featured featured trusted"`,
      }}
    >
      <div className="bento-cell" style={{ gridArea: "stat1" }}>
        <p className="bento-stat-number">XX+</p>
        <p className="bento-label">Placeholder Stat One</p>
      </div>

      <div className="bento-cell" style={{ gridArea: "stat2" }}>
        <p className="text-2xl font-semibold" style={{ color: "var(--bento-ink)" }}>
          Role
          <br />
          Badge
        </p>
      </div>

      <div className="bento-cell" style={{ gridArea: "intro" }}>
        <h1 className="text-3xl font-semibold leading-tight sm:text-4xl" style={{ color: "var(--bento-ink)" }}>
          Your headline goes here
        </h1>
        <p className="mt-4 text-sm leading-relaxed sm:text-base" style={{ color: "var(--bento-ink-2)" }}>
          Placeholder description — a couple of sentences about who you are and what you do will go
          here once you approve the layout.
        </p>
        <a href="#contact" className="bento-link mt-5">
          Get in touch
          <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="bento-cell" style={{ gridArea: "stat3" }}>
        <p className="bento-stat-number">XX+</p>
        <p className="bento-label">Placeholder Stat Two</p>
      </div>

      <div className="bento-cell" style={{ gridArea: "stat4" }}>
        <p className="bento-stat-number">
          X<span className="text-lg font-medium">yrs</span>
        </p>
        <p className="bento-label">Placeholder Stat Three</p>
      </div>

      <div className="bento-cell" style={{ gridArea: "featured" }}>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold" style={{ color: "var(--bento-ink)" }}>
            Featured Work
          </h3>
          <a href="#projects" className="bento-link">
            View all
            <ArrowUpRight size={14} />
          </a>
        </div>
        <div
          className="mt-5 flex h-28 items-center justify-center rounded-xl text-sm"
          style={{
            border: "1px dashed var(--bento-border)",
            color: "var(--bento-ink-3)",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          Project preview placeholder
        </div>
      </div>

      <div className="bento-cell" style={{ gridArea: "trusted" }}>
        <h3 className="text-xl font-semibold" style={{ color: "var(--bento-ink)" }}>
          Trusted By
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="bento-logo-chip">Logo</div>
          <div className="bento-logo-chip">Logo</div>
          <div className="bento-logo-chip">Logo</div>
          <div className="bento-logo-chip">Logo</div>
        </div>
        <div className="bento-photo-bubble">NP</div>
      </div>
    </div>
  );
}
