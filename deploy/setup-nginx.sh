#!/usr/bin/env bash
# Add the cliptag.ai vhost to an EXISTING nginx (coexists with other sites).
# Safe + additive: validates with `nginx -t` before reloading; never touches other vhosts.
# Run on the server (as root):
#   scp deploy/nginx-cliptag.conf deploy/setup-nginx.sh root@<ip>:/tmp/
#   ssh root@<ip> 'bash /tmp/setup-nginx.sh'
set -euo pipefail

ROOT=/var/www/cliptag-landing
CONF_SRC="$(dirname "$0")/nginx-cliptag.conf"

echo "▸ Web root: $ROOT"
mkdir -p "$ROOT"
if [ ! -f "$ROOT/index.html" ]; then
  cat > "$ROOT/index.html" <<'H'
<!doctype html><meta charset=utf-8><title>Cliptag</title><body style="background:#08080b;color:#f4f2f8;font-family:-apple-system,sans-serif;display:grid;place-items:center;height:100vh;margin:0"><h1>Cliptag — deploying…</h1></body>
H
fi

echo "▸ Installing vhost (HTTP)…"
cp "$CONF_SRC" /etc/nginx/sites-available/cliptag.ai
ln -sf /etc/nginx/sites-available/cliptag.ai /etc/nginx/sites-enabled/cliptag.ai

echo "▸ nginx -t (aborts before reload if invalid)…"
nginx -t
systemctl reload nginx

echo "✓ cliptag.ai vhost active (HTTP). Other sites untouched."
echo "  Next:"
echo "   1) Point DNS A/AAAA for cliptag.ai + www at this server."
echo "   2) certbot --nginx -d cliptag.ai -d www.cliptag.ai --agree-tos -m hello@framepass.io --redirect -n"
echo "   3) From your Mac: CLIPTAG_SSH=root@<ip> CLIPTAG_TARGET=$ROOT ./deploy/deploy.sh"
