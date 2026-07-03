"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type PortfolioNavProps = {
  name: string;
  items: NavItem[];
};

export function PortfolioNav({ name, items }: PortfolioNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 mx-auto mb-10 w-[min(1120px,94vw)]">
      <div
        className="flex items-center justify-between gap-4 rounded-2xl px-5 py-3.5 backdrop-blur-xl"
        style={{
          background: "rgba(238,242,248,0.92)",
          border: "1px solid var(--border)",
          boxShadow: "0 4px 24px rgba(10,15,24,0.06)",
        }}
      >
        <a href="#introduction" className="serif text-sm font-semibold md:text-base" style={{ color: "var(--ink)" }}>
          <span className="hidden sm:inline">{name}</span>
          <span className="sm:hidden">N. Prathigadapa</span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm transition-colors"
              style={{ color: "var(--ink-3)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--synapse)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--ink-3)")}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 lg:hidden"
          style={{ border: "1px solid var(--border)", color: "var(--ink-2)" }}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="mt-2 flex max-h-[70vh] flex-col gap-1 overflow-y-auto rounded-xl p-3 lg:hidden"
            style={{
              background: "rgba(238,242,248,0.98)",
              border: "1px solid var(--border)",
              boxShadow: "0 8px 28px rgba(10,15,24,0.1)",
            }}
          >
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm"
                style={{ color: "var(--ink-2)" }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
