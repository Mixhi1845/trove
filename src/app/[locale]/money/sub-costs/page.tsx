import PageLayout from "@/components/page-layout";
import Services from "@/components/tool-components/services";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: "Subscription" });

  return {
    title: t("title"),
    description: t("meta-description"),
  };
}

export default function SubscriptionPage() {
  return (
    <PageLayout title="Subscription Cost Calculator">
      <Services />
    </PageLayout>
  );
}
