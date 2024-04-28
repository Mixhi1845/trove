import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface CommandsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const commandsConfig: CommandsConfig = {
  mainNav: [
    {
      title: "Productivity",
      href:"",
      items: [
        {
          title: "Grade Calculator",
          href: "/productivity/grades",
          label: "Calculator",
          desc: "Allows students to calculate and track their overall Graduation grade.",
          items: [],
        },
        {
          title: "Pomodoro Timer",
          href: "/productivity/pomodoro",
          desc: "Helps to improve productivity by breaking work into focused 25-minute intervals separated by short breaks.",
          items: [],
        },

      ],
    },
    {
      title: "Money",
      href:"",
      items: [
        {
          title: "Exchange Rates",
          href: "/money/money-exchange",
          label: "Calculator",
          items: [],
        },
        {
          title: "Streaming Costs",
          href: "/money/sub-costs",
          label: "Calculator",
          items: [],
        },
      ],
    },
    {
      title: "Socials",
      href:"",
      items: [
        {
          title: "URL Shortener",
          href: "/socials/short-url",
          items: [],
        },
        {
          title: "Quotes",
          href: "/socials/quotes",
          items: [],
        },
      ],
    },
    {
      title: "Data",
      href:"",
      items: [
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
          title: "Emoji Wiki",
          href: "/data/emojis",
          items: [],
        },
      ],
    },

  ],
  sidebarNav: [
    {
      title: "Resources",
      href:"",
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
      title: "Source Code",
      href:"",
      items: [
        {
          title: "GitHub",
          href: "https://github.com/Mixhi1845/trove",
          items: [],
        }
      ],
    },
  ],
};
