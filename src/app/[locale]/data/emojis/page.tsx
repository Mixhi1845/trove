import PageLayout from "@/components/page-layout";
import EmojiWiki from "@/components/tool-components/emojis";
import ToolDescription from "@/components/tool-components/tool-description";

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
