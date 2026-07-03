import re, sys, pathlib

page = pathlib.Path("app/page.tsx")
css  = pathlib.Path("app/globals.css")

if not page.exists():
    sys.exit("Run this from inside the portfolio folder.")

# ── patch page.tsx ────────────────────────────────────────────
txt = page.read_text()

# Remove the whole onMouseEnter block inside the social-link <a>
txt = re.sub(
    r'\s*onMouseEnter=\{[^}]+\([^}]*\}\s*\}',
    '',
    txt,
    flags=re.DOTALL
)
txt = re.sub(
    r'\s*onMouseLeave=\{[^}]+\([^}]*\}\s*\}',
    '',
    txt,
    flags=re.DOTALL
)
# Replace the verbose className+style with the CSS class
txt = txt.replace(
    'className="inline-flex items-center gap-1 rounded border px-3 py-1.5 text-sm font-medium transition-all"\n                      style={{ borderColor: "var(--border)", color: "var(--ink-2)" }}',
    'className="social-link"'
)
page.write_text(txt)
print("✓ page.tsx patched")

# ── patch globals.css ─────────────────────────────────────────
c = css.read_text()
if ".social-link" not in c:
    c += """
.social-link {
  border: 1px solid var(--border);
  color: var(--ink-2);
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  transition: border-color 150ms ease, color 150ms ease;
}
.social-link:hover {
  border-color: var(--accent);
  color: var(--accent);
}
"""
    css.write_text(c)
    print("✓ globals.css patched")
else:
    print("✓ globals.css already has .social-link")

print("All done!")
