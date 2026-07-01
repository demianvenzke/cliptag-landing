#!/usr/bin/env bash
# Build the site and push dist/ to the Hetzner server over SSH (rsync).
#
# Configure once (export in your shell or a .env you source), e.g.:
#   export CLIPTAG_SSH="deploy@123.123.123.123"      # user@host (or an ssh config alias)
#   export CLIPTAG_TARGET="/var/www/cliptag-landing" # web root on the server
#
# Then:  ./deploy/deploy.sh
set -euo pipefail

SSH="${CLIPTAG_SSH:?Set CLIPTAG_SSH=user@host (or an ~/.ssh/config alias)}"
TARGET="${CLIPTAG_TARGET:-/var/www/cliptag-landing}"

cd "$(dirname "$0")/.."

echo "▸ Building…"
npm ci
npm run build

# Safety net: the dashboard ships the PUBLIC Supabase anon key. A service_role key would
# bypass RLS and leak every license — never let one reach the static bundle. Abort if found.
if grep -rIlE 'service_role|"role":"service_role"' dist/ >/dev/null 2>&1; then
  echo "✗ ABORT: a 'service_role' secret appears in dist/ — that key must NEVER be shipped to the browser."
  grep -rIlE 'service_role' dist/ | sed 's/^/    /'
  exit 1
fi
# The anon key must actually be filled in (not the placeholder) before a real deploy.
if grep -rIlq 'REPLACE_WITH_SUPABASE_ANON_KEY' dist/ 2>/dev/null; then
  echo "⚠ WARN: SUPABASE anon key is still the placeholder — /account auth will not work until you set it in src/config/site.ts."
fi

echo "▸ Deploying dist/ → ${SSH}:${TARGET}"
# WICHTIG: Die Sparkle-Release-Dateien (appcast.xml, Cliptag-*.zip, *.delta) liegen im selben
# Web-Root, sind aber NICHT Teil des Astro-Builds. Ohne diese --exclude würde `--delete` sie beim
# Landing-Deploy löschen → Update-Feed kaputt ("Update Error" in der App). NICHT entfernen.
rsync -avz --delete --human-readable \
  --exclude '.DS_Store' \
  --exclude 'appcast.xml' \
  --exclude 'Cliptag-*.zip' \
  --exclude 'Cliptag*.delta' \
  dist/ "${SSH}:${TARGET}/"

echo "✓ Done. Files synced to ${SSH}:${TARGET}"
