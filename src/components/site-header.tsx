import Link from "next/link";
import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { CommandMenu } from "@/components/command-menu";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/theme-toggle";
import { LangToggle } from "@/components/lang-toggle";
import { buttonVariants } from "@/components/ui/button";

export function SiteHeader() {
  const t = useTranslations("SiteHeader");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav
          productivity={t("productivity")}
          money={t("money")}
          social={t("social")}
          data={t("data")}
          changelog={t("changelog")}
          about={t("about")}
          contact={t("contact")}
        />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu
              buttonsm={t("buttonsm")}
              buttonlg={t("buttonlg")}
              placeholdertext={t("placeholdertext")}
              empty={t("empty")}
              light={t("light")}
              dark={t("dark")}
              system={t("system")}
            />
          </div>
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "size-9 px-0"
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>

            <LangToggle />
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
