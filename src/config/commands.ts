import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface CommandsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const commandsConfig: CommandsConfig = {
  mainNav: [
    {
      title: "Grade Calculator",
      href: "/explore",
    },

  ],
  sidebarNav: [
    {
      title: "Resources",
      items: [
        {
          title: "About us",
          href: "/about",
          items: [],
        },
        {
          title: "Changelog",
          href: "/changelog",
          items: [],
        },        
        {
          title: "Contact",
          href: "/contact",
          items: [],
        },
      ],
    },
    {
      title: "Sources",
      items: [
        {
          title: "GitHub",
          href: "https://github.com/Mixhi1845/trove",
          items: [],
        },
        {
          title: "shadcn/ui",
          href: "https://github.com/shadcn/ui",
          items: [],
        }
      ],
    },
  ],
};
