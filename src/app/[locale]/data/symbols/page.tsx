import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { getLocale } from "next-intl/server";

import PageLayout from "@/components/page-layout";
import ScientificSymbols from "@/components/tool-components/symbols";
import ToolDescription from "@/components/tool-components/tool-description";

export async function generateMetadata() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "Symbols" });

  return {
    title: t("title"),
    description: t("meta-description"),
    alternates: { canonical: `${siteConfig.url}/${locale}/data/symbols` },
  };
}

export default function Page() {
  return (
    <PageLayout
      title="Scientific Unicode Symbol Cheatsheet"
      description="Your Gateway to a World of Specialized Symbols"
    >
      <ToolDescription title="About">
        <p>
          The Scientific Unicode Symbol Cheatsheet is an invaluable resource for
          anyone working in scientific, engineering, or technical fields. This
          comprehensive tool provides users with easy access to a vast
          collection of specialized Unicode symbols, empowering them to
          seamlessly incorporate these symbols into their documents,
          presentations, and digital communications.
        </p>
        <ul>
          <li>
            Explore a wide range of scientific, mathematical, and technical
            symbols
          </li>
          <li>Copy and paste symbols with a single click</li>
          <li>
            Discover the Unicode, name, and detailed description of each symbol
          </li>
        </ul>
        <p>
          Whether you&apos;re a researcher, engineer, or student, the Scientific
          Unicode Symbol Cheatsheet is an essential tool that can streamline
          your workflow, enhance the clarity of your communications, and ensure
          that your technical documents and presentations are visually
          captivating and professionally presented.
        </p>
      </ToolDescription>
      <ScientificSymbols />
    </PageLayout>
  );
}
