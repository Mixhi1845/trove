import { siteConfig } from "@/config/site";
import { commandsConfig } from "@/config/commands";

export default async function sitemap() {
  let tools = commandsConfig.mainNav.flatMap((navItem) =>
    navItem.items.map((item) => ({
      url: `${siteConfig.url}${item.href}`,
      lastModified: new Date().toISOString().split('T')[0],
    }))
  );

  let routes = [ '', '/about', '/blog', '/changelog' ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));
  
    return [...routes, ...tools];
  }