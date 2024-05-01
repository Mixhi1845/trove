import { MetadataRoute } from "next";
import { locales } from "@/config";
import { siteConfig } from "@/config/site";
import { pathsConfig } from "@/config/paths";

// Adapt this as necessary
const pathnames = ["", "/about", "/changelog", "/contact"];
const host = `${siteConfig.url}`;

export default function sitemap(): MetadataRoute.Sitemap {
  function getUrl(pathname: string, locale: string) {
    return `${host}/${locale}${pathname === "/" ? "" : pathname}`;
  }

  const pages = pathnames.flatMap((pathname) =>
    locales.map((locale) => ({
      url: getUrl(pathname, locale),
      lastModified: new Date().toISOString().split("T")[0],
      alternates: {
        languages: Object.fromEntries(
          locales.map((altLocale) => [altLocale, getUrl(pathname, altLocale)])
        ),
      },
    }))
  );

  const tools = locales.flatMap((locale) =>
    pathsConfig.mainNav.flatMap((navItem) =>
      navItem.items.map((item) => ({
        url: `${siteConfig.url}/${locale}${item.href}`,
        lastModified: new Date().toISOString().split("T")[0],
        alternates: {
          languages: Object.fromEntries(
            locales.map((altLocale) => [
              altLocale,
              `${siteConfig.url}/${altLocale}${item.href}`,
            ])
          ),
        },
      }))
    )
  );

  return [...pages, ...tools];
}
