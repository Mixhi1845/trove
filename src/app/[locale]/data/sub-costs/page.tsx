import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { getLocale } from "next-intl/server";

import PageLayout from "@/components/page-layout";
import Services from "@/components/tool-components/services";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "Subscription" });

  return {
    title: t("title"),
    description: t("meta-description"),
    alternates: { canonical: `${siteConfig.url}/${locale}/money/sub-costs` },
  };
}

export default function SubscriptionPage() {
  return (
    <PageLayout title="Subscription Cost Calculator">
      <Services />
    </PageLayout>
  );
}
