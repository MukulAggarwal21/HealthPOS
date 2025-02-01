import {Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'es', 'fr'] as const;
export type Locale = typeof locales[number];

export const pathnames = {
  '/': '/',
  '/dashboard': {
    en: '/dashboard',
    es: '/panel',
    fr: '/tableau-de-bord'
  }
} satisfies Pathnames<Locale>;

export const localePrefix = 'always';
