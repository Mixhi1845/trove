"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { pathsConfig } from "@/config/paths";
import { LuBox } from "react-icons/lu";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

interface MainNavProps {
  productivity: string;
  money: string;
  social: string;
  data: string;
  changelog: string;
  about: string;
  contact: string;
}

function ToolMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {pathsConfig.mainNav.map((group) => (
          <NavigationMenuItem key={group.title}>
            <Link href={group.href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {group.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  label?: string;
  children: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, label, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">
              {title}
              {label && (
                <Badge className="ml-2 text-xs" variant="outline">
                  {label}
                </Badge>
              )}
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";

export function MainNav({
  changelog,
  about,
  contact,
  productivity,
  money,
  social,
  data,
}: MainNavProps) {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden items-center md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <LuBox className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <ToolMenu />
      <Separator className="ml-2 mr-4 h-4" orientation="vertical" />
      <nav className="xl:flex items-center gap-4 text-sm lg:gap-6 hidden">
        <Link
          href="/changelog"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/en/changelog") ||
              pathname?.startsWith("/de/changelog") ||
              pathname?.startsWith("/es/changelog")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          {changelog}
        </Link>
        <Link
          href="/about"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/en/about") ||
              pathname?.startsWith("/de/about") ||
              pathname?.startsWith("/es/about")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          {about}
        </Link>
        <Link
          href="/contact"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/en/contact") ||
              pathname?.startsWith("/de/contact") ||
              pathname?.startsWith("/es/contact")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          {contact}
        </Link>
      </nav>
      <DropdownMenu>
        <DropdownMenuTrigger className="text-sm hidden md:flex xl:hidden transition-colors hover:text-foreground/80 text-foreground/60">
          {about}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/changelog">{changelog}</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/about">{about}</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/contact">{contact}</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
