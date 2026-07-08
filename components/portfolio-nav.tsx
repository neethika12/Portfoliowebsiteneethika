"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

type PortfolioNavProps = {
  items: NavItem[];
};

export function PortfolioNav({ items }: PortfolioNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 mx-auto mb-10 w-[min(1120px,94vw)]">
      <div
        className="flex items-center justify-end gap-4 rounded-2xl px-5 py-3.5 backdrop-blur-xl"
        style={{
          background: "rgba(21,5,5,0.78)",
          border: "1px solid var(--border)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
        }}
      >
        <a href="#introduction" className="mr-auto flex items-center">
          <span className="status-dot" />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="mono-label transition-colors"
              style={{ color: "var(--ink-3)", letterSpacing: "0.08em" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--crimson-light)")}
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
            className="mt-2 flex max-h-[70vh] flex-col gap-1 overflow-y-auto rounded-xl p-3 backdrop-blur-xl lg:hidden"
            style={{
              background: "rgba(21,5,5,0.96)",
              border: "1px solid var(--border)",
              boxShadow: "0 8px 28px rgba(0,0,0,0.5)",
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
