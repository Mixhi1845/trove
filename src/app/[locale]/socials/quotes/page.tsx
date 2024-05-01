import PageLayout from "@/components/page-layout";
import ToolDescription from "@/components/tool-components/tool-description";
import Quotes from "@/components/tool-components/quotes/ui";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale, namespace: "QuoteFinder" });

  return {
    title: t("title"),
    description: t("meta-description"),
  };
}

export default function QuotesPage() {
  return (
    <PageLayout title="Quote Finder" description="Discover inspiring quotes">
      <ToolDescription title="About">
        <h2 className="text-xl font-medium">Why are quotes fascinating?</h2>
        <p>
          Quotes are fascinating because they offer a glimpse into the thoughts
          and perspectives of influential individuals from various walks of
          life. Whether it&apos;s a powerful statement from a renowned
          philosopher, a thought-provoking insight from a renowned designer, or
          a thought-provoking observation on the human condition, quotes can
          provide valuable insights and inspiration.
        </p>
        <h2 className="text-xl font-medium">
          Why should I care about quotes??
        </h2>
        <p>
          Exploring design quotes can help you better understand the principles
          and mindsets that shape the world around us. These quotes from
          designers, architects, and creative thinkers can offer a unique
          perspective on aesthetics, functionality, and the role of design in
          society.
        </p>
        <h2 className="text-xl font-medium">Why is stoicism so popular?</h2>
        <p>
          Stoicism quotes, on the other hand, can provide a framework for
          navigating life&apos;s challenges with resilience and equanimity.
          These timeless teachings from ancient Stoic philosophers can help you
          cultivate a more balanced and thoughtful approach to living.
        </p>
        <p>
          Finally, exploring quotes on politics, society, and the human
          experience can broaden your understanding of the world and the diverse
          perspectives that shape it. These quotes can challenge your
          assumptions, spark introspection, and provide a deeper appreciation
          for the complexity of the human condition.
        </p>
        <p>
          Brighten up your day by switching through this collection of
          thought-provoking quotes.
        </p>
      </ToolDescription>
      <Quotes />
    </PageLayout>
  );
}
