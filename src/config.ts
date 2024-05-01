import { Pathnames } from "next-intl/navigation";

export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : `http://localhost:${port}`;

export const defaultLocale = "en" as const;
export const locales = ["en", "de", "es"] as const;

export const pathnames = {
  "/": "/",
  "/changelog": {
    en: "/changelog",
    de: "/aenderungen",
    es: "/registro-de-cambios",
  },
  "/about": {
    en: "/about",
    de: "/ueber",
    es: "/acerca-de",
  },
  "/contact": {
    en: "/contact",
    de: "/kontakt",
    es: "/contacto",
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
