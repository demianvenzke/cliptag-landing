import { I18N } from '../data/i18n';

export const LOCALES = ['en', 'de', 'fr', 'es', 'pt', 'it'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

/** Native language names for the switcher. */
export const LANG_LABELS: Record<Locale, string> = {
  de: 'Deutsch', en: 'English', fr: 'Français', es: 'Español', pt: 'Português', it: 'Italiano',
};
/** Dropdown order (matches the original handover). */
export const LANG_ORDER: Locale[] = ['de', 'en', 'fr', 'es', 'pt', 'it'];

export function isLocale(x: string | undefined): x is Locale {
  return !!x && (LOCALES as readonly string[]).includes(x);
}

/** Merged dictionary: English fallback + locale overrides. */
export function getDict(lang: Locale) {
  return { ...I18N.en, ...(I18N[lang] || {}) } as Record<string, any>;
}
export type Dict = ReturnType<typeof getDict>;

/**
 * Localized path. English (default) has no prefix.
 *   localePath('en')            → '/'
 *   localePath('de')            → '/de'
 *   localePath('de', 'privacy') → '/de/privacy'
 */
export function localePath(lang: Locale, path = ''): string {
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, '');
  if (lang === DEFAULT_LOCALE) return clean ? `/${clean}` : '/';
  return clean ? `/${lang}/${clean}` : `/${lang}`;
}
