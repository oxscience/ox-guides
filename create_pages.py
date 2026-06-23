#!/usr/bin/env python3
"""
OX Guides — Shopify Page Creator
Legt pro Guide eine Shopify-Seite an: Titel + Template + sichtbar.

Setup:
  export SHOPIFY_TOKEN=shpat_xxx
  python create_pages.py

Token holen:
  Shopify Admin → Einstellungen → Apps und Vertriebskanäle
  → Apps entwickeln → App erstellen → API-Zugangsdaten
  → Admin-API-Zugangsbereiche: write_pages, read_pages aktivieren
  → App installieren → Token kopieren
"""

import os
import sys
import json
import urllib.request
import urllib.error
from pathlib import Path


def load_env():
    env_path = Path(__file__).parent / ".env"
    if not env_path.exists():
        return
    for line in env_path.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, _, val = line.partition("=")
        os.environ.setdefault(key.strip(), val.strip())


load_env()

SHOP = os.environ.get("SHOPIFY_SHOP", "5681d7.myshopify.com")
API_VERSION = "2024-10"
GRAPHQL_URL = f"https://{SHOP}/admin/api/{API_VERSION}/graphql.json"

# Guides: (Seitentitel, template_suffix ohne 'page.' Prefix)
# template_suffix "ox-guide-detective-kit" → templates/page.ox-guide-detective-kit.liquid
GUIDES = [
    ("Digital Detective Kit", "ox-guide-detective-kit"),
    ("Claude Code Guide", "ox-guide-claude-code"),
    ("5 Claude Features", "ox-guide-5-claude-features"),
    ("NotebookLM Guide", "ox-guide-notebooklm"),
    ("Selbstverteidigung Guide", "ox-guide-selbstverteidigung"),
    ("Claude Cowork 2.0", "ox-guide-claude-cowork-20"),
    ("KI-Texte menschlich", "ox-guide-ki-texte-menschlich"),
    ("Erste Automatisierung", "ox-guide-erste-automatisierung"),
    ("Spracheingabe Guide", "ox-guide-spracheingabe"),
    ("ChatGPT zu Claude", "ox-guide-chatgpt-zu-claude"),
    ("Email VA", "ox-guide-email-va"),
    ("Wissenssystem Obsidian", "ox-guide-wissenssystem-obsidian"),
    ("Claude Memory Guide", "ox-guide-claude-memory"),
    ("Claude + NotebookLM", "ox-guide-claude-notebooklm"),
    ("Claude + Obsidian", "ox-guide-claude-obsidian"),
    ("10 Briefing Prompts", "ox-guide-10-briefing-prompts"),
    ("4 Disziplinen Prompting", "ox-guide-4-disziplinen-prompting"),
    ("6 Stufen KI", "ox-guide-6-stufen-ki"),
    ("5 Mini Apps", "ox-guide-5-mini-apps"),
    ("Claude Cowork Code", "ox-guide-claude-cowork-code"),
    ("Claude Code Token-Audit", "ox-guide-claude-code-limits"),
    ("7 Skills AI Agents", "ox-guide-7-skills-ai-agents"),
    ("SearXNG vs Google", "ox-guide-searxng-vs-google"),
    ("Die 10 Paper, die KI möglich gemacht haben", "ox-guide-ki-paper"),
    ("KI durchschauen", "ox-guide-ki-durchschauen"),
    ("Kostenlose OX Tools", "ox-tools-overview"),
]


def graphql(query, variables=None):
    token = os.environ.get("SHOPIFY_TOKEN")
    if not token:
        print("FEHLER: SHOPIFY_TOKEN nicht gesetzt.")
        print("  Einmalig Token holen:  python3 get_token.py")
        sys.exit(1)

    body = json.dumps({"query": query, "variables": variables or {}}).encode()
    req = urllib.request.Request(
        GRAPHQL_URL,
        data=body,
        headers={
            "X-Shopify-Access-Token": token,
            "Content-Type": "application/json",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(req) as resp:
            return json.loads(resp.read())
    except urllib.error.HTTPError as e:
        print(f"  HTTP {e.code}: {e.read().decode()[:300]}")
        return None


def get_existing_pages():
    q = """
    query($cursor: String) {
      pages(first: 250, after: $cursor) {
        edges { node { id title templateSuffix handle } cursor }
        pageInfo { hasNextPage }
      }
    }
    """
    result = {}
    cursor = None
    while True:
        data = graphql(q, {"cursor": cursor})
        if not data or "data" not in data:
            return result
        edges = data["data"]["pages"]["edges"]
        for e in edges:
            n = e["node"]
            if n.get("templateSuffix"):
                result[n["templateSuffix"]] = n
        if not data["data"]["pages"]["pageInfo"]["hasNextPage"]:
            break
        cursor = edges[-1]["cursor"]
    return result


def create_page(title, template_suffix):
    mutation = """
    mutation CreatePage($page: PageCreateInput!) {
      pageCreate(page: $page) {
        page { id handle title templateSuffix isPublished }
        userErrors { field message }
      }
    }
    """
    variables = {
        "page": {
            "title": title,
            "templateSuffix": template_suffix,
            "isPublished": True,
            "body": "",
        }
    }
    data = graphql(mutation, variables)
    if not data or "data" not in data:
        return None, None
    payload = data["data"]["pageCreate"]
    if payload["userErrors"]:
        print(f"    Fehler: {payload['userErrors']}")
        return None, None
    page = payload["page"]
    return page["id"], page["handle"]


def main():
    dry_run = "--dry-run" in sys.argv or "-n" in sys.argv
    mode = "DRY RUN (keine Seiten werden erstellt)" if dry_run else "LIVE"
    print(f"OX Guides Page Creator — Store: {SHOP} [{mode}]")
    print(f"Lade bestehende Seiten...")
    existing = get_existing_pages()
    print(f"  {len(existing)} Seiten gefunden mit templateSuffix\n")

    created = 0
    skipped = 0
    planned = 0

    for title, suffix in GUIDES:
        if suffix in existing:
            page = existing[suffix]
            print(f"  SKIP    '{title}' — existiert bereits ({page['handle']})")
            skipped += 1
        elif dry_run:
            print(f"  WÜRDE   '{title}' anlegen → template page.{suffix}")
            planned += 1
        else:
            page_id, handle = create_page(title, suffix)
            if page_id:
                print(f"  OK      '{title}' → /pages/{handle}")
                created += 1
            else:
                print(f"  FAIL    '{title}'")

    if dry_run:
        print(f"\nDry Run: {planned} würden erstellt, {skipped} existieren schon.")
        print(f"Ohne --dry-run echt ausführen.")
    else:
        print(f"\nFertig: {created} erstellt, {skipped} übersprungen.")
        if created > 0:
            print(f"Seiten live unter: https://outoftheb-ox.de/pages/[handle]")


if __name__ == "__main__":
    main()
