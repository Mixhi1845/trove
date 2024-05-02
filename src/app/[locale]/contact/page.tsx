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
    title: t("title-contact"),
    alternates: { canonical: `${siteConfig.url}/${locale}/contact` },
  };
}

export default function ContactPage() {
  const t = useTranslations("Resources");

  return (
    <PageLayout>
      <ToolDescription isTool={false} title="About" className="prose">
        {t.rich("contact", {
          p: (chunks) => <p>{chunks}</p>,
          a: (chunks) => (
            <a className="underline" href="mailto:support@trove.com">
              {chunks}
            </a>
          ),
        })}
      </ToolDescription>
    </PageLayout>
  );
}
