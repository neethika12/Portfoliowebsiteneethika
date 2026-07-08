"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { Doodle } from "@/components/doodles";

type NavItem = {
  label: string;
  href: string;
};

type StudioNavProps = {
  items: NavItem[];
};

export function StudioNav({ items }: StudioNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.href.replace("#", "")))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <header className="studio-nav">
      <div className="mx-auto flex w-[min(1200px,94vw)] items-center justify-between py-4">
        <a
          href="#hero"
          className="relative display text-2xl font-extrabold tracking-tight"
          style={{
            backgroundImage: "linear-gradient(100deg, var(--indigo) 0%, var(--indigo-dark) 45%, var(--lime-dark) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          N.P.
          <Doodle variant="star" color="var(--lime-dark)" size={18} style={{ top: -14, right: -18 }} rotate={8} />
          <Doodle
            variant="underline"
            color="var(--indigo)"
            size={42}
            style={{ left: -2, bottom: -9 }}
          />
        </a>

        <nav className="hidden items-center gap-4 lg:flex">
          {items.map((item, index) => {
            const isActive = activeHref === item.href;
            const tint = index % 2 === 0 ? "studio-nav-link--lime" : "studio-nav-link--indigo";
            return (
              <a
                key={item.href}
                href={item.href}
                className={`studio-nav-link ${isActive ? "studio-nav-link--active" : tint}`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="studio-nav-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 lg:hidden"
          style={{ border: "1px solid var(--border-strong)", color: "var(--ink)" }}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t lg:hidden"
            style={{ borderColor: "var(--border)", background: "var(--paper)" }}
          >
            <div className="mx-auto flex w-[min(1200px,94vw)] flex-col gap-2.5 py-3">
              {items.map((item, index) => {
                const isActive = activeHref === item.href;
                const tint = index % 2 === 0 ? "studio-nav-link--lime" : "studio-nav-link--indigo";
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`relative display rounded-full px-4 py-2.5 text-sm font-bold ${isActive ? "studio-nav-link--active" : tint}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {isActive ? <span className="studio-nav-pill" style={{ transform: "none" }} /> : null}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                );
              })}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
