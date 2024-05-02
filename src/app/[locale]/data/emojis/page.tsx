import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { getLocale } from "next-intl/server";

import PageLayout from "@/components/page-layout";
import EmojiWiki from "@/components/tool-components/emojis";
import ToolDescription from "@/components/tool-components/tool-description";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "Emojis" });

  return {
    title: t("title"),
    description: t("meta-description"),
    alternates: { canonical: `${siteConfig.url}/${locale}/data/emojis` },
  };
}

export default function Page() {
  return (
    <PageLayout
      title="Emoji Wikipedia"
      description="A Comprehensive Resource for Emoji Information"
    >
      <ToolDescription title="About">
        <p>
          This page is a powerful tool that allows you to easily access and
          explore a vast collection of emojis. With a simple click, you can view
          detailed metadata, including the emoji&apos;s Unicode, name, and
          description, making it a valuable resource for anyone interested in
          understanding and utilizing emojis in their digital communications.
        </p>
        <ul>
          <li>Discover the meaning and significance of various emojis</li>
          <li>Copy and paste emojis with ease</li>
        </ul>
      </ToolDescription>
      <EmojiWiki />
    </PageLayout>
  );
}
