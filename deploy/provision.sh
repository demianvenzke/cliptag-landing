#!/usr/bin/env bash
# Run ONCE on a fresh Ubuntu Hetzner Cloud server (as root).
# Installs Caddy, creates the web root, installs the Caddyfile that sits next to this script.
#
#   scp deploy/Caddyfile deploy/provision.sh root@<server-ip>:/tmp/
#   ssh root@<server-ip> 'bash /tmp/provision.sh'
set -euo pipefail

echo "▸ Installing Caddy…"
apt-get update -y
apt-get install -y debian-keyring debian-archive-keyring apt-transport-https curl gnupg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' > /etc/apt/sources.list.d/caddy-stable.list
apt-get update -y
apt-get install -y caddy

echo "▸ Web root…"
mkdir -p /var/www/cliptag-landing
if [ ! -f /var/www/cliptag-landing/index.html ]; then
  echo '<!doctype html><meta charset=utf-8><title>Cliptag</title><body style="background:#08080b;color:#f4f2f8;font-family:-apple-system,sans-serif;display:grid;place-items:center;height:100vh;margin:0"><h1>Cliptag — deploying…</h1></body>' > /var/www/cliptag-landing/index.html
fi

if [ -f "$(dirname "$0")/Caddyfile" ]; then
  echo "▸ Installing Caddyfile…"
  cp "$(dirname "$0")/Caddyfile" /etc/caddy/Caddyfile
  systemctl reload caddy 2>/dev/null || systemctl restart caddy
fi

echo "✓ Done."
echo "  1) Point DNS A/AAAA for cliptag.ai + www at this server's IP."
echo "  2) From your Mac:  CLIPTAG_SSH=root@<server-ip> ./deploy/deploy.sh"
echo "  Caddy fetches HTTPS certs automatically once DNS resolves."
