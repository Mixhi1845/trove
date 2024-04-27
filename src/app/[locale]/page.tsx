import { useTranslations } from "next-intl";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Announcement } from "@/components/announcement";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-hero";
import { buttonVariants } from "@/components/ui/button";
import CategoryOverview from "@/components/tool-components/category-overview";

export default function IndexPage() {
  const t = useTranslations("Index");

  return (
    <div className="container relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>{t("title")}</PageHeaderHeading>
        <PageHeaderDescription>{t("desc")}</PageHeaderDescription>
        <PageActions>
          <Link href="/about" className={cn(buttonVariants())}>
            {t("about")}
          </Link>
          <Link
            href="/changelog"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            {t("changelog")}
          </Link>
        </PageActions>
      </PageHeader>
      <CategoryOverview />
    </div>
  );
}
