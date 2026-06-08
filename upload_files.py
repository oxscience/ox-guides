#!/usr/bin/env python3
"""
OX Guides — Shopify Files Auto-Upload
Lädt JS-Dateien in Shopify Files hoch (oder ersetzt vorhandene mit gleichem Namen).

Voraussetzung: OX Automation App mit Scopes write_files + read_files.
Wenn das fehlt: Dev Dashboard → OX Automation → Versionen → Bereiche ergänzen
→ Veröffentlichen → python3 get_token.py neu.

Usage:
  python3 upload_files.py shopify/ox-guide-FOO.js
  python3 upload_files.py shopify/ox-guide-FOO.js shopify/ox-guides-overview.js
"""

import os
import sys
import json
import time
import mimetypes
import uuid
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
TOKEN = os.environ.get("SHOPIFY_TOKEN")
API_VERSION = "2024-10"
GRAPHQL_URL = f"https://{SHOP}/admin/api/{API_VERSION}/graphql.json"


def graphql(query, variables=None):
    if not TOKEN:
        print("FEHLER: SHOPIFY_TOKEN nicht gesetzt. python3 get_token.py ausfuehren.")
        sys.exit(1)
    body = json.dumps({"query": query, "variables": variables or {}}).encode()
    req = urllib.request.Request(
        GRAPHQL_URL,
        data=body,
        method="POST",
        headers={
            "X-Shopify-Access-Token": TOKEN,
            "Content-Type": "application/json",
        },
    )
    try:
        with urllib.request.urlopen(req) as resp:
            result = json.loads(resp.read())
    except urllib.error.HTTPError as e:
        print(f"    HTTP {e.code}: {e.read().decode()[:400]}")
        return None
    if result.get("errors"):
        for err in result["errors"]:
            print(f"    GraphQL-Error: {err.get('message','?')}")
            req_access = err.get("extensions", {}).get("requiredAccess")
            if req_access:
                print(f"      -> Benoetigter Scope: {req_access}")
        return None
    return result


def find_existing(filename):
    q = """
    query($q: String!) {
      files(first: 50, query: $q) {
        edges { node { id alt ... on GenericFile { url } } }
      }
    }
    """
    # Shopify Files-Search matcht den originalen Filename (mit Extension)
    data = graphql(q, {"q": f"filename:{filename}"})
    if not data or "data" not in data:
        return []
    return [e["node"]["id"] for e in data["data"]["files"]["edges"]]


def delete_files(ids):
    if not ids:
        return []
    q = """
    mutation($ids: [ID!]!) {
      fileDelete(fileIds: $ids) {
        deletedFileIds
        userErrors { field message }
      }
    }
    """
    data = graphql(q, {"ids": ids})
    if not data or "data" not in data:
        return []
    payload = data["data"]["fileDelete"]
    if payload["userErrors"]:
        print(f"    Delete-Warnung: {payload['userErrors']}")
    return payload["deletedFileIds"] or []


def staged_upload_target(filename, mime, size):
    q = """
    mutation($input: [StagedUploadInput!]!) {
      stagedUploadsCreate(input: $input) {
        stagedTargets {
          url
          resourceUrl
          parameters { name value }
        }
        userErrors { field message }
      }
    }
    """
    variables = {
        "input": [{
            "resource": "FILE",
            "filename": filename,
            "mimeType": mime,
            "httpMethod": "POST",
            "fileSize": str(size),
        }]
    }
    data = graphql(q, variables)
    if not data or "data" not in data:
        return None
    payload = data["data"]["stagedUploadsCreate"]
    if payload["userErrors"]:
        print(f"    StagedUpload-Errors: {payload['userErrors']}")
        return None
    targets = payload["stagedTargets"]
    return targets[0] if targets else None


def upload_to_staged(target, filepath, mime):
    boundary = uuid.uuid4().hex
    parts = []
    for p in target["parameters"]:
        parts.append(
            f'--{boundary}\r\n'
            f'Content-Disposition: form-data; name="{p["name"]}"\r\n\r\n'
            f'{p["value"]}\r\n'.encode()
        )
    parts.append(
        f'--{boundary}\r\n'
        f'Content-Disposition: form-data; name="file"; filename="{filepath.name}"\r\n'
        f'Content-Type: {mime}\r\n\r\n'.encode()
    )
    parts.append(filepath.read_bytes())
    parts.append(f'\r\n--{boundary}--\r\n'.encode())
    body = b"".join(parts)

    req = urllib.request.Request(
        target["url"],
        data=body,
        method="POST",
        headers={"Content-Type": f"multipart/form-data; boundary={boundary}"},
    )
    try:
        with urllib.request.urlopen(req) as resp:
            return resp.status in (200, 201, 204)
    except urllib.error.HTTPError as e:
        print(f"    Upload HTTP {e.code}: {e.read().decode()[:300]}")
        return False


def file_create(resource_url, filename):
    q = """
    mutation($files: [FileCreateInput!]!) {
      fileCreate(files: $files) {
        files { id fileStatus ... on GenericFile { url } }
        userErrors { field message }
      }
    }
    """
    variables = {
        "files": [{
            "originalSource": resource_url,
            "contentType": "FILE",
            "filename": filename,
        }]
    }
    data = graphql(q, variables)
    if not data or "data" not in data:
        return None
    payload = data["data"]["fileCreate"]
    if payload["userErrors"]:
        print(f"    Create-Errors: {payload['userErrors']}")
        return None
    return payload["files"][0] if payload["files"] else None


def upload_one(filepath: Path):
    if not filepath.exists():
        print(f"  FAIL    {filepath}: Datei nicht gefunden")
        return False

    filename = filepath.name
    mime = mimetypes.guess_type(filename)[0] or "application/octet-stream"
    if filename.endswith(".js"):
        mime = "application/javascript"
    size = filepath.stat().st_size

    print(f"  {filename}  ({size:,} bytes, {mime})")

    existing = find_existing(filename)
    if existing:
        print(f"    -> {len(existing)} vorhandene Datei(en) loeschen ...")
        delete_files(existing)
        # Shopify braucht kurz bis File-Search den Lösch-State spiegelt
        time.sleep(1)

    target = staged_upload_target(filename, mime, size)
    if not target:
        print(f"    FAIL: stagedUploadsCreate")
        return False

    if not upload_to_staged(target, filepath, mime):
        print(f"    FAIL: Upload zu Staged-URL")
        return False

    f = file_create(target["resourceUrl"], filename)
    if not f:
        print(f"    FAIL: fileCreate")
        return False

    cdn = f.get("url") or "(noch im Processing)"
    print(f"    OK   {cdn}")
    return True


def main():
    if len(sys.argv) < 2:
        print("Usage: python3 upload_files.py <file1.js> [file2.js ...]")
        sys.exit(1)

    print(f"OX Guides Files Uploader -- Store: {SHOP}\n")

    ok = 0
    fail = 0
    for arg in sys.argv[1:]:
        if upload_one(Path(arg)):
            ok += 1
        else:
            fail += 1

    print(f"\nFertig: {ok} hochgeladen, {fail} fehlgeschlagen.")
    sys.exit(0 if fail == 0 else 1)


if __name__ == "__main__":
    main()
