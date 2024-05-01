import PageLayout from "@/components/page-layout";
import { useTranslations } from "next-intl";
import ToolDescription from "@/components/tool-components/tool-description";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: "Resources" });

  return {
    title: t("title-about"),
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
