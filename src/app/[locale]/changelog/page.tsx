import PageLayout from "@/components/page-layout";
import { ChangelogAPI } from "@/lib/getApiData";
import MarkdownFormatter from "@/lib/markdown-formatter";
import ToolDescription from "@/components/tool-components/tool-description";

interface CommitMessage {
  sha: string;
  commit: {
    message: string;
  };
}

export default async function ChangelogPage() {
  const commits = await ChangelogAPI();

  return (
    <PageLayout title="Changelog">
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
