"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { DialogProps } from "@radix-ui/react-dialog";
import { LuCircle, LuLaptop, LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "next-themes";
import copy from "copy-to-clipboard";
import { pathsConfig } from "@/config/paths";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

interface CommandMenuProps extends DialogProps {
  buttonsm: string;
  buttonlg: string;
  placeholdertext: string;
  empty: string;
  light: string;
  dark: string;
  system: string;
}

interface SymbolData {
  [category: string]: {
    code: string;
    text: string;
    isEmoji: boolean;
    name: string;
    keywords: string[];
  }[];
}

interface SymbolsDataCategory {
  [category: string]: number | null;
}

export function CommandMenu({
  buttonsm,
  buttonlg,
  placeholdertext,
  empty,
  light,
  dark,
  system,
  ...dialogProps
}: CommandMenuProps) {
  const [symbols, setSymbols] = React.useState<SymbolData>({});

  React.useEffect(() => {
    fetch("/lib/symbols.json")
      .then((response) => response.json())
      .then((data: SymbolData) => {
        setSymbols(data);

        const scientificSymbols: SymbolsDataCategory = {};
        Object.keys(data).forEach((category) => {
          scientificSymbols[category] = null;
        });
      })
      .catch((error) => {
        console.error("Error fetching symbols:", error);
      });
  }, []);

  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const { setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
        )}
        onClick={() => setOpen(true)}
        {...dialogProps}
      >
        <span className="hidden lg:inline-flex">{buttonlg}</span>
        <span className="inline-flex lg:hidden">{buttonsm}</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder={placeholdertext} />
        <CommandList>
          <CommandEmpty>{empty}</CommandEmpty>
          {pathsConfig.mainNav.map((group) => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items.map((navItem) => (
                <CommandItem
                  key={navItem.href}
                  value={navItem.title}
                  onSelect={() => {
                    runCommand(() => router.push(navItem.href as string));
                  }}
                >
                  <div className="mr-2 flex h-4 w-4 items-center justify-center">
                    <LuCircle className="h-3 w-3" />
                  </div>
                  {navItem.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
          {pathsConfig.sidebarNav.map((group) => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items.map((navItem) => (
                <CommandItem
                  key={navItem.href}
                  value={navItem.title}
                  onSelect={() => {
                    runCommand(() => router.push(navItem.href as string));
                  }}
                >
                  <div className="mr-2 flex h-4 w-4 items-center justify-center">
                    <LuCircle className="h-3 w-3" />
                  </div>
                  {navItem.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <LuSun className="mr-2 h-4 w-4" />
              {light}
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <LuMoon className="mr-2 h-4 w-4" />
              {dark}
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <LuLaptop className="mr-2 h-4 w-4" />
              {system}
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          {Object.keys(symbols).map((category) => (
            <CommandGroup key={category} heading={category}>
              {symbols[category].map((symbol, index: number) => (
                <CommandItem
                  key={index}
                  value={symbol.name}
                  onSelect={() => {
                    runCommand(() => copy(symbol.text));
                  }}
                >
                  <div className="mr-2 flex h-4 w-4 items-center justify-center">
                    {symbol.text}
                  </div>
                  {symbol.name}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
