import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { getLocale } from "next-intl/server";

import PageLayout from "@/components/page-layout";
import PomodoroTimer from "@/components/tool-components/pomodoro";
import ToolDescription from "@/components/tool-components/tool-description";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "Pomodoro" });

  return {
    title: t("title"),
    description: t("meta-description"),
    alternates: {
      canonical: `${siteConfig.url}/${locale}/productivity/pomodoro`,
    },
  };
}

export default function Page() {
  const t = useTranslations("Pomodoro");

  return (
    <PageLayout title={t("title")}>
      <ToolDescription title={t("question")}>
        {t.rich("description", {
          p: (chunks) => <p>{chunks}</p>,
          strong: (chunks) => <strong>{chunks}</strong>,
          ol: (chunks) => <ol>{chunks}</ol>,
          li: (chunks) => <li>{chunks}</li>,
        })}
      </ToolDescription>
      <PomodoroTimer
        mode1={t("mode1")}
        mode2={t("mode2")}
        preseth={t("preseth")}
        controlh={t("controlh")}
        stop={t("stop")}
        start={t("start")}
        control1={t("control1")}
        control2={t("control2")}
        control3={t("control3")}
        cycleh={t("cycleh")}
      />
    </PageLayout>
  );
}
