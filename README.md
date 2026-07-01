# Cliptag Landing (Astro)

The cliptag.ai marketing site, ported from the design handover to **Astro** with real
per-language SSG routes (top SEO, no flash), config-driven URLs, and lightweight vanilla
"islands" for interactivity. The 6-language copy is the handover's, verbatim.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # → dist/  (static)
npm run preview   # serve dist/
```

## What's where

| Path | Purpose |
|---|---|
| `src/config/site.ts` | **The one file to wire** — download/auth/Paddle URLs, prices, pre-launch flag, contact, social. Everything `'#'` is a TODO. |
| `src/data/i18n.ts` | All copy, 6 languages (EN/DE/FR/ES/PT/IT). EN is canonical/fallback. Edit copy here only. |
| `src/lib/i18n.ts` | Locale list, dictionary merge, `localePath()`. |
| `src/layouts/Base.astro` | `<head>`: title/description, canonical, hreflang + x-default, Open Graph, Twitter, favicon, theme-color, robots (noindex while pre-launch), FAQ JSON-LD, global CSS (incl. `prefers-reduced-motion`). |
| `src/components/*.astro` | One component per section (Nav, Hero, Mockup, Features, HowItWorks, AiSection, Pricing, Faq, CtaBand, Footer) + `Landing.astro` (composes them) + `LegalShell.astro`. |
| `src/scripts/client.ts` | All interactivity in one ~1.7 kB bundle: nav backdrop, reveal-on-scroll, language dropdown, billing toggle, FAQ accordion, preview toast, hero demo loop, soft geo suggestion. |
| `src/pages/` | `index.astro` (EN `/`), `[lang]/index.astro` (`/de`,`/fr`,`/es`,`/pt`,`/it`), `privacy.astro`, `terms.astro`. |
| `public/` | Logo, favicon, `og-image.png` (+ source `og-image.svg`). |

## Before launch — fill `src/config/site.ts`

- `LINKS.download` — signed + notarized macOS `.dmg`/`.zip` (or App Store URL).
- `LINKS.signin` — account/login URL.
- `LINKS.freeCta` — Free-plan target (usually = download).
- `PLANS.*.checkoutMonthly` / `checkoutYearly` — Paddle checkout links per plan & cycle.
- `PLANS.*.priceMonthly` / `priceYearly` — headline numbers (localized "billed …" lines live in `i18n.ts → plans[]`; keep both in sync if prices change).
- `SITE.preLaunch = false` — removes the `noindex,nofollow` tag so search engines index the site.
- `SITE.twitter` — handle for Twitter card tags (optional).
- Keep `site` in `astro.config.mjs` in sync with `SITE.origin`.

## i18n

- Edit copy in `src/data/i18n.ts` only — keys are identical across languages.
- Add a language: add the block in `I18N` + `EXTRA` (`nav_features`/`meta_title`/`meta_desc`),
  then add it to `LOCALES`/`LANG_LABELS`/`LANG_ORDER` in `src/lib/i18n.ts` and to
  `astro.config.mjs` (`i18n.locales` + the sitemap `i18n.locales` map).
- Legal pages (`/privacy`, `/terms`) are English-only by design.

## SEO — already wired

`<title>` + meta description (per language), canonical, hreflang alternates + x-default,
Open Graph + Twitter cards, `og-image.png`, favicon/apple-touch-icon, theme-color,
`@astrojs/sitemap` (multilingual), and FAQ JSON-LD generated from `i18n.ts` (no drift).
`robots noindex` stays on until `SITE.preLaunch = false`.

## Analytics & consent

Google Analytics 4 (`SITE.gaId`) loads **only in production builds** and behind **Consent
Mode v2**: consent defaults to `denied` (no cookies), and a 6-language cookie banner
(`ConsentBanner.astro`) flips `analytics_storage` to `granted` only on opt-in (stored in
`localStorage.ct_consent`). Declining keeps it cookieless. Privacy Policy §4 documents this.
Set `SITE.gaId = ''` to remove GA + the banner entirely.

## Notes / later

- **Geo suggestion** uses `ipapi.co` (free, rate-limited) in `client.ts` — swap for your own
  or server-side geo before high traffic, and add the endpoint to your CSP `connect-src`.
- **og-image**: edit `public/og-image.svg`, then regenerate the PNG:
  `node -e "require('sharp')('public/og-image.svg').resize(1200,630).png().toFile('public/og-image.png')"`
- **Rollover**: Terms §3 was rewritten to match the marketing claim (clips do roll over,
  Creator 2×/1,000, Pro 3×/6,000).

## Deploy

Fully static — `npm run build` outputs `dist/`. Recommended host: **Hetzner + Caddy**
(German/EU data residency, auto-HTTPS). See [deploy/DEPLOY.md](deploy/DEPLOY.md) for the
server setup, `deploy/Caddyfile`, and `./deploy/deploy.sh` (build + rsync). Cloudflare Pages
and Vercel are documented there as one-connect alternatives. No server runtime needed.
