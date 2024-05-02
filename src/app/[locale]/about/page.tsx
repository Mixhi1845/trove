import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { getLocale } from "next-intl/server";

import PageLayout from "@/components/page-layout";
import ToolDescription from "@/components/tool-components/tool-description";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "Resources" });

  return {
    title: t("title-about"),
    alternates: { canonical: `${siteConfig.url}/${locale}/about` },
  };
}

export default function AboutPage() {
  const t = useTranslations("Resources");

  return (
    <PageLayout>
      <ToolDescription isTool={false} title="About" className="prose">
        {t.rich("about", {
          p: (chunks) => <p>{chunks}</p>,
          strong: (chunks) => <strong>{chunks}</strong>,
          ol: (chunks) => <ol>{chunks}</ol>,
          li: (chunks) => <li>{chunks}</li>,
        })}
      </ToolDescription>
    </PageLayout>
  );
}
