#!/usr/bin/env python3
"""
OAuth Bootstrap — holt einmalig einen Admin API Access Token für OX Automation App
und speichert ihn in .env. Danach nutzbar von create_pages.py.

Usage:
  python get_token.py
"""

import http.server
import socketserver
import urllib.parse
import urllib.request
import json
import secrets
import webbrowser
import threading
import sys
import os
from pathlib import Path

SHOP = "5681d7.myshopify.com"
CLIENT_ID = "8ac8474da90b01d70db3dbf5d7739529"
SCOPES = "write_online_store_pages,read_online_store_pages,write_files,read_files,read_products,write_products"
PORT = 8765
REDIRECT_URI = f"http://localhost:{PORT}/callback"
STATE = secrets.token_urlsafe(16)

ENV_PATH = Path(__file__).parent / ".env"


def _env_value(name):
    """Liest einen Wert aus .env — Secrets gehören nicht in den Code/ins Repo."""
    if ENV_PATH.exists():
        for line in ENV_PATH.read_text().splitlines():
            s = line.strip()
            if s.startswith(f"{name}=") and not s.startswith("#"):
                return s.partition("=")[2].strip()
    return os.environ.get(name, "")


# Client-Secret kommt aus .env (SHOPIFY_CLIENT_SECRET=shpss_...), niemals hardcoden
CLIENT_SECRET = _env_value("SHOPIFY_CLIENT_SECRET")

auth_code = None
returned_shop = None


class CallbackHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        global auth_code, returned_shop
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path != "/callback":
            self.send_response(404)
            self.end_headers()
            return

        params = urllib.parse.parse_qs(parsed.query)
        if params.get("state", [""])[0] != STATE:
            self._respond(400, "State mismatch — möglicher CSRF. Abbruch.")
            return
        if "code" not in params:
            err = params.get("error_description", ["Unbekannter Fehler"])[0]
            self._respond(400, f"Kein Code erhalten: {err}")
            return

        auth_code = params["code"][0]
        returned_shop = params.get("shop", [SHOP])[0]
        self._respond(
            200,
            "<h2>OK, Token wird geholt.</h2><p>Du kannst dieses Fenster schließen und ins Terminal wechseln.</p>",
        )
        threading.Thread(target=self.server.shutdown, daemon=True).start()

    def _respond(self, code, html):
        self.send_response(code)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.end_headers()
        self.wfile.write(html.encode())

    def log_message(self, *args):
        pass


def exchange_code_for_token(code, shop):
    url = f"https://{shop}/admin/oauth/access_token"
    data = urllib.parse.urlencode(
        {
            "client_id": CLIENT_ID,
            "client_secret": CLIENT_SECRET,
            "code": code,
        }
    ).encode()
    req = urllib.request.Request(url, data=data, method="POST")
    with urllib.request.urlopen(req) as resp:
        return json.loads(resp.read())


def save_to_env(token, shop):
    lines = []
    if ENV_PATH.exists():
        for line in ENV_PATH.read_text().splitlines():
            if not line.startswith(("SHOPIFY_TOKEN=", "SHOPIFY_SHOP=")):
                lines.append(line)
    lines.append(f"SHOPIFY_TOKEN={token}")
    lines.append(f"SHOPIFY_SHOP={shop}")
    ENV_PATH.write_text("\n".join(lines) + "\n")
    ENV_PATH.chmod(0o600)


def main():
    if not CLIENT_SECRET:
        print("FEHLER: SHOPIFY_CLIENT_SECRET fehlt. Trage es in .env ein:")
        print("  SHOPIFY_CLIENT_SECRET=shpss_...")
        sys.exit(1)

    install_url = (
        f"https://{SHOP}/admin/oauth/authorize?"
        + urllib.parse.urlencode(
            {
                "client_id": CLIENT_ID,
                "scope": SCOPES,
                "redirect_uri": REDIRECT_URI,
                "state": STATE,
            }
        )
    )

    print("OX Automation OAuth Bootstrap")
    print(f"Store: {SHOP}")
    print(f"Scopes: {SCOPES}")
    print(f"\nÖffne Browser für Autorisierung...")
    print(f"Falls der Browser nicht aufgeht, manuell öffnen:\n  {install_url}\n")

    webbrowser.open(install_url)

    try:
        with socketserver.TCPServer(("localhost", PORT), CallbackHandler) as server:
            print(f"Warte auf Redirect an http://localhost:{PORT}/callback ...")
            server.serve_forever()
    except KeyboardInterrupt:
        print("\nAbbruch durch User.")
        sys.exit(1)

    if not auth_code:
        print("FEHLER: Kein Auth-Code erhalten.")
        sys.exit(1)

    print(f"\nAuth-Code erhalten, tausche gegen Access Token...")
    try:
        result = exchange_code_for_token(auth_code, returned_shop)
    except urllib.error.HTTPError as e:
        print(f"FEHLER beim Token-Austausch: HTTP {e.code}")
        print(e.read().decode())
        sys.exit(1)

    token = result.get("access_token")
    if not token:
        print(f"FEHLER: Kein access_token in Response: {result}")
        sys.exit(1)

    save_to_env(token, returned_shop)
    print(f"\nOK — Token gespeichert in {ENV_PATH}")
    print(f"Scope: {result.get('scope')}")
    print(f"\nTesten mit:\n  source .env && export SHOPIFY_TOKEN && python create_pages.py")


if __name__ == "__main__":
    main()
