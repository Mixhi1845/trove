"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FaLanguage } from "react-icons/fa6";

export function LangToggle() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <FaLanguage className="h-[1.2rem] w-[1.2rem] transition-all" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <Link href="/en">
            <DropdownMenuItem>🇺🇸 English</DropdownMenuItem>
          </Link>
          <Link href="/es">
            <DropdownMenuItem>🇪🇸 Spanish</DropdownMenuItem>
          </Link>
          <Link href="/de">
            <DropdownMenuItem>🇩🇪 German</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
