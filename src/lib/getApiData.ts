import { siteConfig } from "@/config/site";

export async function ChangelogAPI() {
    const res = await fetch(`${siteConfig.links.api}/commits`, {
      headers: {
        "User-Agent": `${siteConfig.name}`,
        "Accept-Language": `${siteConfig.url}`
      },
      next: { revalidate: 86400 }
    });
    return res.json();
}