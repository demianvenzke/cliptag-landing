// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Per-language routes: English at "/", others at "/de", "/fr", … (prefixDefaultLocale:false).
// NOTE: keep `site` in sync with SITE.origin in src/config/site.ts.
export default defineConfig({
  site: 'https://cliptag.ai',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr', 'es', 'pt', 'it'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // /account is a noindex, login-gated dashboard — keep it out of the sitemap.
      filter: (page) => !page.includes('/account'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', de: 'de', fr: 'fr', es: 'es', pt: 'pt', it: 'it' },
      },
    }),
  ],
});
