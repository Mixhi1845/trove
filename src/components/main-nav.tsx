"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { LuBox } from "react-icons/lu";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

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

interface ToolMenuProps {
  item1: string;
  item2: string;
  item3: string;
  item4: string;
}

const productivity_items: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Grade Calculator",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Pomodoro Timer",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
];

const money_items: { title: string; href: string; description: string }[] = [
  {
    title: "Exchange Rates",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Streaming Cost Calculator",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
];

const socials_items: { title: string; href: string; description: string }[] = [
  {
    title: "URL Shortener",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Quotes",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
];

const data_items: { title: string; href: string; description: string }[] = [
  {
    title: "Emoji Wiki",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Scientific Symbols",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Data Faker",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
];

function ToolMenu({ item1, item2, item3, item4 }: ToolMenuProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-normal px-2 lg:px-3 text-muted-foreground">
            {item1}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {productivity_items.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-normal px-2 lg:px-3 text-muted-foreground">
            {item2}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {money_items.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-normal px-2 lg:px-3 text-muted-foreground">
            {item3}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {socials_items.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-normal px-2 lg:px-3 text-muted-foreground">
            {item4}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {data_items.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
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
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
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
      <ToolMenu
        item1={productivity}
        item2={money}
        item3={social}
        item4={data}
      />
      <Separator className="ml-2 mr-1 h-4" orientation="vertical" />
      <nav className="xl:flex items-center gap-4 text-sm lg:gap-6 hidden">
        <Link
          href="/changelog"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/en/changelog") ||
              pathname?.startsWith("/de/aenderungen") ||
              pathname?.startsWith("/es/registro-de-cambios")
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
              pathname?.startsWith("/de/ueber") ||
              pathname?.startsWith("/es/acerca-de")
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
              pathname?.startsWith("/de/kontakt") ||
              pathname?.startsWith("/es/contacto")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          {contact}
        </Link>
      </nav>
      <DropdownMenu>
        <DropdownMenuTrigger className="text-sm hidden md:flex xl:hidden transition-colors hover:text-foreground/80 text-foreground/60">
          About
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link href="/changelog">Changelog</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/about">About us</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/contact">Contact</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
