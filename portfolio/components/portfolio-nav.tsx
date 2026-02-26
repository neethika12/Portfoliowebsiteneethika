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
    <header className="sticky top-4 z-50 mx-auto mb-8 w-[min(1120px,94vw)]">
      <div className="glass-card flex items-center justify-between gap-4 rounded-2xl px-4 py-3 backdrop-blur-xl md:px-6">
        <a href="#introduction" className="text-sm font-semibold tracking-wide text-white md:text-base">
          {name}
        </a>

        <nav className="hidden items-center gap-5 md:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition-colors hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/15 p-2 text-slate-200 md:hidden"
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-card mt-2 flex flex-col gap-1 rounded-xl p-3 md:hidden"
          >
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-white/5"
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
