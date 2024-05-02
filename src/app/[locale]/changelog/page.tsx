import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { getLocale } from "next-intl/server";

import ToolDescription from "@/components/tool-components/tool-description";
import PageLayout from "@/components/page-layout";
import { ChangelogAPI } from "@/lib/getApiData";
import MarkdownFormatter from "@/lib/markdown-formatter";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "Resources" });

  return {
    title: t("title-changelog"),
    alternates: { canonical: `${siteConfig.url}/${locale}/changelog` },
  };
}

interface CommitMessage {
  sha: string;
  commit: {
    message: string;
  };
}

export default async function ChangelogPage() {
  const commits = await ChangelogAPI();

  return (
    <PageLayout>
      <ToolDescription title="Commit Messages" isTool={false}>
        {commits.length > 0 ? (
          <div className="space-y-8">
            {commits.map((commit: CommitMessage) => (
              <MarkdownFormatter
                key={commit.sha}
                message={commit.commit.message}
              />
            ))}
          </div>
        ) : (
          <p>Loading commit messages...</p>
        )}
      </ToolDescription>
    </PageLayout>
  );
}
