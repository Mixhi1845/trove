import { siteConfig } from "@/config/site";

export async function ChangelogAPI() {
  const res = await fetch(`${siteConfig.links.api}/commits`, {
    headers: {
      "User-Agent": `${siteConfig.url}`,
      "Accept-Language": "en-US",
    },
    next: { revalidate: 86400 },
  });
  return res.json();
}

export async function ExchangeAPI() {
  const res = await fetch(`https://api.frankfurter.app/latest`, {
    headers: {
      "User-Agent": `${siteConfig.url}`,
      "Accept-Language": "en-US",
    },
    next: { revalidate: 86400 },
  });
  return res.json();
}
{
  /* docs: https://www.frankfurter.app/docs/ */
}

export async function QotdAPI() {
  const res = await fetch(`https://favqs.com/api/qotd`, {
    headers: {
      "User-Agent": `${siteConfig.url}`,
      "Accept-Language": "en-US",
    },
    next: { revalidate: 43200 },
  });
  return res.json();
}
{
  /* docs: https://favqs.com/api */
}

export async function QuotesAPI() {
  const res = await fetch(
    `https://quote-garden.onrender.com/api/v3/quotes/random`,
    {
      headers: {
        "User-Agent": `${siteConfig.url}`,
        "Accept-Language": "en-US",
      },
      cache: "no-store",
    }
  );
  return res.json();
}
{
  /* docs: https://github.com/pprathameshmore/QuoteGarden */
}

export async function StoicAPI() {
  const res = await fetch(`https://stoic.tekloon.net/stoic-quote`, {
    headers: {
      "User-Agent": `${siteConfig.url}`,
      "Accept-Language": "en-US",
    },
    cache: "no-store",
  });
  return res.json();
}
{
  /* docs: https://github.com/tlcheah2/stoic-quote-lambda-public-api */
}

export async function DesignAPI(qtRand: number) {
  const res = await fetch(
    `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand&_=${qtRand}`,
    {
      headers: {
        "User-Agent": `${siteConfig.url}`,
        "Accept-Language": "en-US",
      },
      cache: "no-store",
    }
  );
  return res.json();
}
{
  /* docs: https://quotesondesign.com/api */
}
