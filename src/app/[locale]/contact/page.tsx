import PageLayout from "@/components/page-layout";
import { useTranslations } from "next-intl";
import ToolDescription from "@/components/tool-components/tool-description";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: "Resources" });

  return {
    title: t("title-contact"),
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
