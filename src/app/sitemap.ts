import { MetadataRoute } from "next";
import { locales } from "@/config";
import { siteConfig } from "@/config/site";
import { pathsConfig } from "@/config/paths";

// Adapt this as necessary
const pathnames = ["", "/about", "/changelog", "/contact"];
const host = `${siteConfig.url}`;

export default function sitemap(): MetadataRoute.Sitemap {
  let routes = pathnames.flatMap((pathname) =>
    locales.map((locale) => ({
      url: `${host}/${locale}${pathname === "/" ? "" : pathname}`,
      lastModified: new Date().toISOString().split("T")[0],
    }))
  );

  let tools = pathsConfig.mainNav.flatMap((navItem) =>
    navItem.items.flatMap((pathname) =>
      locales.map((locale) => ({
        url: `${host}/${locale}${pathname.href === "/" ? "" : pathname.href}`,
        lastModified: new Date().toISOString().split("T")[0],
      }))
    )
  );

  return [...routes, ...tools];
}
