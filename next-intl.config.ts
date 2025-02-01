// import {Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'es', 'fr'] as const;
// export type Locale = typeof locales[number];

// export const pathnames = {
//   '/': '/',
//   '/dashboard': {
//     en: '/dashboard',
//     es: '/panel',
//     fr: '/tableau-de-bord'
//   }
// } satisfies Pathnames<Locale>;

// export const localePrefix = 'always';


// import { locales } from './locales'; // Assuming locales are defined in a separate file

export type Locale = typeof locales[number];

export const pathnames: Record<string, Record<Locale, string> | string> = {
  '/': '/',
  '/dashboard': {
    en: '/dashboard',
    es: '/panel',
    fr: '/tableau-de-bord'
  }
};

export const localePrefix = 'always';
