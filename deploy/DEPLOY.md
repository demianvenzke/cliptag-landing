# Deploying cliptag.ai

The site is fully static (`npm run build` → `dist/`). Recommended: your **Hetzner** server
behind **Caddy** (German hosting, EU data residency, automatic HTTPS). Cloudflare Pages /
Vercel are documented at the bottom as alternatives.

## Option A0 — Coexist on an existing nginx server (what cliptag.ai uses)

The site runs as an **additive nginx vhost** on the shared Hetzner box (Nürnberg, alongside Bishop —
untouched; public IP currently `78.47.136.76`). Files in `/var/www/cliptag-landing`.

Deploys SSH in **via the hostname `cliptag.ai`**, not the raw IP — so the IP lives in exactly one
place (DNS) and deploys follow it automatically if it ever changes:

```bash
# one-time: add the vhost (validates with nginx -t before reload)
scp deploy/nginx-cliptag.conf deploy/setup-nginx.sh root@cliptag.ai:/tmp/
ssh root@cliptag.ai 'bash /tmp/setup-nginx.sh'
# DNS A/AAAA cliptag.ai + www → server, then issue HTTPS:
ssh root@cliptag.ai 'certbot --nginx -d cliptag.ai -d www.cliptag.ai --agree-tos -m hello@framepass.io --redirect -n'
# every deploy (hostname -> follows DNS):
CLIPTAG_SSH=root@cliptag.ai CLIPTAG_TARGET=/var/www/cliptag-landing ./deploy/deploy.sh
```

### Resilience against IP changes
Hetzner Cloud keeps a server's primary IPv4 for the server's lifetime — it does **not** rotate on a
schedule; it changes mainly when the server is **recreated/rebuilt-from-scratch** (a normal rebuild keeps it).
To be safe regardless:
- **Best:** assign a Hetzner **Floating IP** to the box and point DNS at *that*. A Floating IP survives
  server recreation (you just reassign it), so DNS + deploys never need touching.
- Otherwise, if the IP ever changes, update **only** the DNS A/AAAA records for `cliptag.ai` + `www`
  (at Vercel). Deploys + cert renewal use the hostname, so they follow automatically.
- The IP is referenced as docs only in this file; the deploy script itself takes `CLIPTAG_SSH` as a var.

## Option A — Dedicated Hetzner server + Caddy

**0. Create the server.** In the Hetzner Cloud console: new server, **Ubuntu 24.04**, smallest
type (CX22/CPX11 is plenty), add your SSH key. Note its public IP.

**1. Provision it (one command from your Mac):**
   ```bash
   scp deploy/Caddyfile deploy/provision.sh root@<server-ip>:/tmp/
   ssh root@<server-ip> 'bash /tmp/provision.sh'
   ```
   This installs Caddy, creates `/var/www/cliptag-landing`, and installs the Caddyfile.

**2. DNS** (domain is at Vercel): point the records at the Hetzner IP, and remove the apex from
   Vercel's serving. At your DNS provider:
   ```
   A     cliptag.ai      → <hetzner-ipv4>
   AAAA  cliptag.ai      → <hetzner-ipv6>   (if available)
   A     www.cliptag.ai  → <hetzner-ipv4>
   ```
   Caddy fetches Let's Encrypt certs automatically once DNS resolves. (Don't proxy through a
   CDN that also terminates TLS, or use that CDN's certs instead.)

**Every deploy (from your Mac)**
```bash
export CLIPTAG_SSH="deploy@<hetzner-ip>"     # or an ~/.ssh/config alias
export CLIPTAG_TARGET="/var/www/cliptag-landing"
./deploy/deploy.sh
```

## Before the public launch
- Set `SITE.preLaunch = false` in `src/config/site.ts` (removes `noindex,nofollow`).
- Fill the real URLs in `src/config/site.ts` (download, signin, Paddle checkout links).
- Re-run `./deploy/deploy.sh`.

## Option B — Cloudflare Pages
Connect the Git repo (or `npx wrangler pages deploy dist`). Build command `npm run build`,
output dir `dist`. Add the GA/ipapi hosts to a `_headers` CSP if you enforce one.

## Option C — Vercel
`vercel` (or Git-connect). Astro is auto-detected; output is static. Keeps the domain where it
already is — no DNS change needed.
