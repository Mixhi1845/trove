import {Pathnames} from 'next-intl/navigation';

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;

export const defaultLocale = 'en' as const;
export const locales = ['en', 'de', 'es'] as const;

export const pathnames = {
  '/': '/',
  '/discover': {
    en: '/discover',
    de: '/entdecken',
    es: '/descubrir'
  },
  '/data/countries': {
      en: '/data/countries',
      de: '/daten/länder',
      es: '/datos/paises'
    },
  '/data/states': {
      en: '/data/states',
      de: '/daten/bundesländer',
      es: '/datos/estados'
    },
  '/data/cities': {
      en: '/data/cities',
      de: '/daten/städte',
      es: '/datos/ciudades'
    },
  '/changelog': {
      en: '/changelog',
      de: '/changelog',
      es: '/changelog'
  }
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;