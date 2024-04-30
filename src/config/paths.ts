import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface PathConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const pathsConfig: PathConfig = {
  mainNav: [
    {
      title: "Productivity",
      href: "",
      items: [
        {
          title: "Grade Calculator",
          href: "/productivity/grades",
          label: "Calculator - soon",
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
      href: "",
      items: [
        {
          title: "Exchange Rates",
          href: "/money/money-exchange",
          label: "Calculator",
          desc: "Easily convert between different currencies.",
          items: [],
        },
        {
          title: "Streaming Costs",
          href: "/money/sub-costs",
          label: "Calculator",
          desc: "Track and manage streaming service prices.",
          items: [],
        },
      ],
    },
    {
      title: "Socials",
      href: "",
      items: [
        {
          title: "URL Shortener",
          href: "/socials/short-url",
          label: "soon",
          desc: "Creates short, shareable links from longer URLs.",
          items: [],
        },
        {
          title: "Quotes",
          href: "/socials/quotes",
          desc: "Provides you with inspirational and motivational quotes.",
          items: [],
        },
      ],
    },
    {
      title: "Data",
      href: "",
      items: [
        {
          title: "Scientific Symbols",
          href: "/data/symbols",
          desc: "Provides a comprehensive reference of scientific symbols and their meanings.",
          items: [],
        },
        {
          title: "Profile Data Faker",
          href: "/data/profile-faker",
          desc: "Generates realistic-looking profile data.",
          items: [],
        },
        {
          title: "Emoji Wiki",
          href: "/data/emojis",
          desc: "Offers a searchable database of emojis and their meanings.",
          items: [],
        },
      ],
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