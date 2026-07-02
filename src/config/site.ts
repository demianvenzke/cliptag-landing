/* ────────────────────────────────────────────────────────────────────────────
   Cliptag landing — central config.
   This is the ONE place to wire real values. Everything marked TODO is a
   placeholder ("#") until the app is signed/notarized and Paddle is live.
   ──────────────────────────────────────────────────────────────────────────── */

export const SITE = {
  /** Canonical origin (no trailing slash). Keep in sync with `site` in astro.config.mjs. */
  origin: 'https://cliptag.ai',
  name: 'Cliptag',
  company: 'Framepass LLC',
  contactEmail: 'hello@framepass.io',
  /** Pre-launch: emits <meta name="robots" content="noindex,nofollow">. Set false at launch. */
  preLaunch: false,
  /** While true, placeholder CTAs (href="#") open the "coming soon" + notify-me modal
      instead of navigating. Set false once the real download/auth/checkout URLs are filled in. */
  comingSoon: false,
  /** Web3Forms access key for the launch notify-me form (https://web3forms.com).
      Tied to demian@framepass.io — each opt-in is emailed there. Empty = form hidden.
      The key is public/client-side by design (it only routes to your inbox). */
  web3formsKey: 'e56ded05-d29b-4807-a592-9f6d4401354d',
  /** Twitter/X handle (without @) for twitter:site/creator. Empty string → tags omitted. */
  twitter: '',
  /** Google Analytics 4 measurement ID. Empty string → GA + consent banner omitted.
      Loaded only in production builds, behind Consent Mode v2 (default denied). */
  gaId: 'G-3PZMJEGXS7',
  /** Social share image (1200×630). Lives in /public. TODO: export the real PNG (see public/og-image.svg). */
  ogImage: '/og-image.png',
  /** Current shipped macOS app version + direct download. Shown on /account (logged-in
      customers), independent of the marketing `LINKS.download` which stays gated while
      comingSoon. Bump on each notarized release (keep in sync with the appcast). */
  appVersion: '0.6.2',
  appDownloadUrl: 'https://cliptag.ai/Cliptag-0.6.2.zip',
};

/* Real action targets ------------------------------------------------------- */
export const LINKS = {
  /** Signed + notarized macOS download (.dmg/.zip) or App Store URL. */
  download: 'https://cliptag.ai/Cliptag-0.6.2.dmg',
  /** Account / auth login URL. */
  signin: 'https://cliptag.ai/account',
  /** Free-plan CTA target. Usually the same as `download`. */
  freeCta: 'https://cliptag.ai/Cliptag-0.6.2.dmg',
};

/* Pricing ------------------------------------------------------------------- */
/* Single source for the headline numbers. Localized labels (cta, clipsNum,
   "billed monthly/yearly", feature rows) live per language in src/data/i18n.ts → plans[]. */
export type PlanId = 'free' | 'creator' | 'pro' | 'studio';

export interface PlanConfig {
  featured?: boolean;
  /** Paddle checkout links (or price IDs you resolve to a checkout). */
  checkoutMonthly: string;
  checkoutYearly: string;
}

export const PLANS: Record<PlanId, PlanConfig> = {
  free:    { checkoutMonthly: '#', checkoutYearly: '#' },
  creator: { checkoutMonthly: '#', checkoutYearly: '#' }, // TODO Paddle
  pro:     { featured: true, checkoutMonthly: '#', checkoutYearly: '#' }, // TODO Paddle
  studio:  { checkoutMonthly: '#', checkoutYearly: '#' }, // TODO Paddle
};

/* Festpreise je Währung — entsprechen den in Paddle hinterlegten FESTEN Preisen
   (USD-Basispreis $ + EUR-Override €; bewusst keine FX-Anzeige, damit Landing = Checkout).
   priceMonthly = große Zahl im Monats-Modus; priceYearly = monatl. Äquivalent im Jahres-Modus.
   Der Jahres-GESAMTbetrag ("$79/yr") steht pro Sprache in i18n → plans[].billedY.
   Anzeige-Währung folgt der Sprache (Option A): EN → USD, EU-Sprachen → EUR. */
export type Currency = 'usd' | 'eur';
export const LOCALE_CURRENCY: Record<string, Currency> = {
  en: 'usd', de: 'eur', fr: 'eur', es: 'eur', pt: 'eur', it: 'eur',
};
export const PLAN_PRICES: Record<Currency, Record<PlanId, { priceMonthly: string; priceYearly: string }>> = {
  usd: {
    free:    { priceMonthly: '$0',  priceYearly: '$0' },
    creator: { priceMonthly: '$9',  priceYearly: '$6.58' },
    pro:     { priceMonthly: '$19', priceYearly: '$13.25' },
    studio:  { priceMonthly: '$39', priceYearly: '$33.25' },
  },
  eur: {
    free:    { priceMonthly: '€0',  priceYearly: '€0' },
    creator: { priceMonthly: '€9',  priceYearly: '€6,58' },
    pro:     { priceMonthly: '€19', priceYearly: '€13,25' },
    studio:  { priceMonthly: '€39', priceYearly: '€33,25' },
  },
};

/* Paddle.js Overlay-Checkout. Der client-side Token ist PUBLIC by design (eingeschränkte
   Rechte, safe im Frontend). 'live_…' = Produktion, 'test_…' = Sandbox.
   Der Checkout bleibt DORMANT, solange SITE.comingSoon === true (siehe src/scripts/client.ts):
   dann fangen die Platzhalter-CTAs (#) weiter das „Coming soon"-Modal. */
export const PADDLE = {
  token: 'live_6d9fd38650189ab79700f09ea3e',
  environment: 'production' as 'production' | 'sandbox',
  /** Paddle Price IDs je Plan & Abrechnung (Catalog → Products). */
  prices: {
    creator: { monthly: 'pri_01kwbm8q2he0r6wrjx6w3kpaxa', yearly: 'pri_01kwbm950cxrz1z1d5tewdfmak' },
    pro:     { monthly: 'pri_01kwbm5n436snyqcs7c3nay209', yearly: 'pri_01kwbm6czw5yhydp3vqwe7qt02' },
    studio:  { monthly: 'pri_01kwbm0as8ca18wp1z5th5b8ft', yearly: 'pri_01kwbm1jpdynw4v7nereefyyj1' },
  } as Record<string, { monthly: string; yearly: string }>,
};

/* Web-Dashboard (Account-Seite /account). Supabase Auth (Magic-Link, passwortlos) +
   RLS-geschützte Lizenz-Anzeige. Der anonKey ist PUBLIC by design — die EINZIGE Schranke
   ist Row-Level-Security (siehe supabase/dashboard-rls.sql), daher MUSS die RLS-SQL laufen,
   bevor /account live geht. proxyBase = Fly-Proxy für die Billing-Portal-Session. */
export const SUPABASE = {
  url: 'https://qqhomwfkxcjgzzrreiia.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxaG9td2ZreGNqZ3p6cnJlaWlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1MDc3NzgsImV4cCI6MjA5NzA4Mzc3OH0.yVgLam8qdSoAYBUF5MWazoVwxEGjPGH0VFSyqz5YzOA', // anon public (RLS schützt die Daten)
  proxyBase: 'https://cliptag-proxy.fly.dev',
};

/* Produkt-Analytics (PostHog, US-Cloud). Der Project-Key ist PUBLIC by design.
   WICHTIG — strenger als GA: PostHog wird NICHT per Consent-Mode „default denied"
   geladen, sondern das Script wird ERST NACH erteiltem Cookie-Consent injiziert
   (siehe Base.astro __ctLoadPostHog + ConsentBanner). Session-Replay: alle Inputs
   maskiert (maskAllInputs) und auf /account KOMPLETT deaktiviert (E-Mail/Lizenz).
   Leerer key → PostHog + Consent-Banner-Analytics entfallen. */
export const POSTHOG = {
  key: 'phc_tKfCQVBcyA8K8FCDYk28LnY7NS9h7MDYrkrLk8sVuZGo',
  host: 'https://us.i.posthog.com',
};

export const PLAN_ORDER: PlanId[] = ['free', 'creator', 'pro', 'studio'];

/** Default billing cycle shown on load. */
export const DEFAULT_BILLING: 'monthly' | 'yearly' = 'yearly';
