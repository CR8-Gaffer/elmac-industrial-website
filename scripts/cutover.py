#!/usr/bin/env python3
"""DNS cutover for elmacindustrial.com.au — flips every hardcoded origin in ONE
run so nothing is missed. Run from the repo root, review the diff, commit, push.

    python3 scripts/cutover.py
    git diff                       # review
    git add -A && git commit -m "DNS cutover: www.elmacindustrial.com.au"
    git push origin main

Then (manual, outside this repo):
  1. Registrar DNS: CNAME  www -> cr8-gaffer.github.io
                    ALIAS/A apex -> GitHub Pages IPs (185.199.108-111.153)
  2. GitHub repo Settings -> Pages -> Custom domain: www.elmacindustrial.com.au
     (the CNAME file this script writes keeps it pinned) -> Enforce HTTPS once
     the certificate issues.
  3. Verify all 20 routes return 200 on the new domain.
  4. Google Search Console: add property, submit sitemap.xml.
"""
import sys
from pathlib import Path

OLD = "https://cr8-gaffer.github.io/elmac-industrial-website"
NEW = "https://www.elmacindustrial.com.au"
ROOT = Path(__file__).resolve().parent.parent


def sub(path, old, new, required=True):
    p = ROOT / path
    s = p.read_text()
    if old not in s:
        if required:
            sys.exit(f"ABORT — expected text not found in {path}:\n  {old[:100]}")
        return 0
    n = s.count(old)
    p.write_text(s.replace(old, new))
    print(f"  {path}: {n} replacement(s)")
    return n


print("1/5 vite base -> /")
sub("vite.config.js", 'base: "/elmac-industrial-website/",', 'base: "/",')

print("2/5 inject-heads origin")
sub("scripts/inject-heads.mjs", 'const SITE = "https://cr8-gaffer.github.io";', f'const SITE = "{NEW}";')
sub("scripts/inject-heads.mjs", 'const BASE = "/elmac-industrial-website";', 'const BASE = "";')

print("3/5 static origins (index.html, sitemap, robots)")
for f in ["index.html", "public/sitemap.xml", "public/robots.txt"]:
    sub(f, OLD, NEW)

print("3b/5 cross-links to the Cleaning site -> www.elmac.au")
for f in ["src/App.jsx", "src/views/Home.jsx", "src/views/About.jsx"]:
    sub(f, "https://cr8-gaffer.github.io/elmac-website/", "https://www.elmac.au/", required=False)

print("4/5 CNAME file")
(ROOT / "public" / "CNAME").write_text("www.elmacindustrial.com.au\n")
print("  public/CNAME written")

print("5/5 residual check")
leftovers = []
for f in ROOT.rglob("*"):
    if f.is_file() and f.suffix in {".js", ".jsx", ".html", ".xml", ".txt", ".mjs", ".json"} \
            and "node_modules" not in f.parts and "dist" not in f.parts \
            and f.name != "cutover.py":
        if OLD in f.read_text(errors="ignore"):
            leftovers.append(str(f.relative_to(ROOT)))
print(f"  residual '{OLD}' references: {leftovers or 'none'}")
print("\nDone. Review with git diff, then commit + push. Manual steps are in this file's docstring.")
print("Note: cross-links to the Cleaning site were flipped to www.elmac.au —")
print("run this together with the elmac.au cutover so neither side links to a dead URL.")
