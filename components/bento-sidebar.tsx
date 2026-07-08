import { AtSign, FolderKanban, Home, Mail, PlayCircle } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", icon: Home, active: true },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Publications", href: "#publications", icon: PlayCircle },
  { label: "About", href: "#about", icon: AtSign },
  { label: "Contact", href: "#contact", icon: Mail },
];

export function BentoSidebar() {
  return (
    <aside className="bento-sidebar flex h-full w-full flex-col gap-10 px-6 py-8 lg:w-[280px] lg:flex-shrink-0">
      <div className="flex items-center gap-3">
        <div className="bento-avatar">NP</div>
        <div>
          <p className="text-sm font-bold tracking-wide" style={{ color: "var(--bento-ink)" }}>
            NEETHIKA
          </p>
          <p className="flex items-center gap-1.5 text-xs" style={{ color: "var(--bento-ink-2)" }}>
            <span style={{ color: "var(--violet-light)" }}>●</span>
            Portfolio Draft
          </p>
        </div>
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`bento-nav-link ${item.active ? "is-active" : ""}`}
          >
            <item.icon size={17} />
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
