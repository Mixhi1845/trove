import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface PathConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const pathsConfig: PathConfig = {
  mainNav: [
    {
      title: "Scientific Symbols",
      href: "/data/symbols",
      items: [],
    },
    {
      title: "Profile Data Faker",
      href: "/data/profile-faker",
      items: [],
    },
    {
      title: "Streaming Costs",
      href: "/data/sub-costs",
      label: "Calculator",
      items: [],
    },
    {
      title: "Charts",
      href: "https://www.vitrina.michaelwagner.cc/",
      items: [],
    },
  ],
  sidebarNav: [
    {
      title: "Resources",
      href: "",
      items: [
        {
          title: "About us",
          href: "/about",
          desc: "Provides information about the Trove project.",
          items: [],
        },
        {
          title: "Changelog",
          href: "/changelog",
          desc: "Latest updates and improvements to Trove.",
          items: [],
        },
        {
          title: "Contact",
          href: "/contact",
          desc: "Reach out to us with questions, feedback, or support requests.",
          items: [],
        },
      ],
    },
    {
      title: "Source Code",
      href: "",
      items: [
        {
          title: "GitHub",
          href: "https://github.com/Mixhi1845/trove",
          desc: "The source code for the Trove project is available on GitHub.",
          items: [],
        },
      ],
    },
  ],
};
