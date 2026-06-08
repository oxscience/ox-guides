#!/usr/bin/env python3
"""
Rename Shopify Page Handles auf die SEO-freundlichen URLs aus ox-guides-overview.js.

Usage:
  python3 rename_pages.py --dry-run   # Preview
  python3 rename_pages.py             # Real run
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
GRAPHQL_URL = f"https://{SHOP}/admin/api/2024-10/graphql.json"

# templateSuffix → gewünschter Handle (aus ox-guides-overview.js)
RENAMES = {
    "ox-guide-10-briefing-prompts": "10-ki-briefing-prompts",
    "ox-guide-4-disziplinen-prompting": "4-disziplinen-ki-prompting",
    "ox-guide-5-mini-apps": "5-mini-apps-claude-code",
    "ox-guide-email-va": "claude-code-email-va",
    "ox-guide-claude-memory": "claude-code-memory",
    "ox-guide-claude-notebooklm": "claude-code-notebooklm-forschung",
    "ox-guide-claude-obsidian": "claude-code-obsidian-wissenssystem",
    "ox-guide-claude-cowork-code": "claude-cowork-oder-claude-code",
    "ox-guide-claude-cowork-20": "claude-cowork-setup",
    "ox-guide-erste-automatisierung": "erste-ki-automatisierung",
    "ox-guide-ki-texte-menschlich": "ki-texte-menschlich-machen",
    "ox-guide-spracheingabe": "spracheingabe-statt-tippen",
    "ox-guide-chatgpt-zu-claude": "von-chatgpt-zu-claude",
}


def graphql(query, variables=None):
    token = os.environ.get("SHOPIFY_TOKEN")
    if not token:
        print("FEHLER: SHOPIFY_TOKEN nicht gesetzt. Erst get_token.py laufen lassen.")
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


def get_pages_by_template():
    q = """
    query($cursor: String) {
      pages(first: 250, after: $cursor) {
        edges { node { id title handle templateSuffix } cursor }
        pageInfo { hasNextPage }
      }
    }
    """
    out = {}
    cursor = None
    while True:
        data = graphql(q, {"cursor": cursor})
        if not data or "data" not in data:
            return out
        edges = data["data"]["pages"]["edges"]
        for e in edges:
            n = e["node"]
            if n.get("templateSuffix"):
                out[n["templateSuffix"]] = n
        if not data["data"]["pages"]["pageInfo"]["hasNextPage"]:
            break
        cursor = edges[-1]["cursor"]
    return out


def rename_handle(page_id, new_handle):
    mutation = """
    mutation($id: ID!, $page: PageUpdateInput!) {
      pageUpdate(id: $id, page: $page) {
        page { id handle }
        userErrors { field message }
      }
    }
    """
    data = graphql(mutation, {"id": page_id, "page": {"handle": new_handle}})
    if not data or "data" not in data:
        return None
    payload = data["data"]["pageUpdate"]
    if payload["userErrors"]:
        print(f"    Fehler: {payload['userErrors']}")
        return None
    return payload["page"]["handle"]


def main():
    dry_run = "--dry-run" in sys.argv or "-n" in sys.argv
    mode = "DRY RUN" if dry_run else "LIVE"
    print(f"Rename Pages — Store: {SHOP} [{mode}]\n")

    pages = get_pages_by_template()

    changed = 0
    ok = 0
    missing = 0

    for suffix, desired in RENAMES.items():
        page = pages.get(suffix)
        if not page:
            print(f"  MISS    {suffix} — Seite nicht gefunden")
            missing += 1
            continue
        if page["handle"] == desired:
            print(f"  OK      {page['handle']:45s} (bereits korrekt)")
            ok += 1
            continue
        if dry_run:
            print(f"  WÜRDE   {page['handle']:45s} → {desired}")
            changed += 1
        else:
            new = rename_handle(page["id"], desired)
            if new == desired:
                print(f"  OK      {page['handle']:45s} → {new}")
                changed += 1
            else:
                print(f"  FAIL    {page['handle']} — erwartet {desired}, bekommen {new}")

    print(f"\n{mode}: {changed} {'würden umbenannt' if dry_run else 'umbenannt'}, {ok} schon korrekt, {missing} nicht gefunden.")


if __name__ == "__main__":
    main()
