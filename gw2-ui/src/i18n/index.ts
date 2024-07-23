import * as React from 'react';

export type APILanguage = 'de' | 'en' | 'es' | 'fr' | 'zh';
export const API_LANGUAGES = ['de', 'en', 'es', 'fr', 'zh'];

export function isAPILanguage(l: string): l is APILanguage {
  return API_LANGUAGES.includes(l);
}

function getNavigatorDefaultLanguage(): APILanguage {
  if (typeof navigator === 'undefined') return 'en';
  const languages = navigator.languages || [navigator.language];
  for (let l of languages) {
    // l might still be undefined (edge-runtime) so we need to check for that
    l = l?.split('-')[0].toLowerCase(); // en-US -> en
    if (isAPILanguage(l)) return l;
  }

  return 'en';
}

const APILanguageContext = React.createContext<APILanguage>(
  getNavigatorDefaultLanguage(),
);

export const APILanguageProvider = APILanguageContext.Provider;

export function useAPILanguage(lang?: string) {
  if (lang && isAPILanguage(lang)) {
    return lang;
  } else {
    return React.useContext(APILanguageContext);
  }
}

export type Translation = Partial<Record<APILanguage, string>>;

// Use this to translate a string. You need to figure out the appropriate language yourself.
export function translate<T extends string>(
  map: Record<T, Translation>,
  key: T,
  lang: APILanguage,
): string {
  const t = map[key];
  if (!t) return key;
  return t[lang] || t['en'] || key;
}

// A shorthand to both read the configured language and translate a string, for simple one-off uses.
export function useTranslation<T extends string>(
  map: Record<T, Translation>,
  key: T,
  cutomLang?: string,
): string {
  const lang = useAPILanguage(cutomLang);

  return translate(map, key, lang);
}
