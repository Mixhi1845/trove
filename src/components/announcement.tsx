import Link from "next/link";
import { RxArrowRight } from "react-icons/rx";
import { Icons } from "@/components/icons";
import { useTranslations } from "next-intl";
import { siteConfig } from "@/config/site";

import { Separator } from "@/components/ui/separator";

export function Announcement() {
  const t = useTranslations("Index");

  return (
    <Link
      target="_blank"
      rel="noreferrer"
      href={siteConfig.links.github}
      className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
    >
      <Icons.gitHub className="mr-2 h-4 w-4" />
      <Separator className="mx-1 h-4" orientation="vertical" />
      <span>Contribute</span>
      <RxArrowRight className="ml-1 h-4 w-4" />
    </Link>
  );
}
