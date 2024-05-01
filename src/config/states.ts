import { Icons } from "@/components/icons";

export interface StateItem {
  states: {
    title: string;
    value: string;
    disabled?: boolean;
    external?: boolean;
    icon: keyof typeof Icons.states;
    label?: string;
    desc?: string;
  }[];
}

export const statesConfig: StateItem = {
  states: [
    {
      title: "Baden-Württemberg",
      value: "baden-wuerttemberg",
      icon: "badenWuerttemberg",
    },
    {
      title: "Bayern",
      value: "bayern",
      icon: "bayern",
    },
    {
      title: "Berlin",
      value: "berlin",
      icon: "berlin",
    },
    {
      title: "Brandenburg",
      value: "brandenburg",
      icon: "brandenburg",
    },
    {
      title: "Bremen",
      value: "bremen",
      icon: "bremen",
    },
    {
      title: "Hamburg",
      value: "hamburg",
      icon: "hamburg",
    },
    {
      title: "Hessen",
      value: "hessen",
      icon: "hessen",
    },
    {
      title: "Mecklenburg-Vorpommern",
      value: "mecklenburg-vorpommern",
      icon: "mecklenburgVorpommern",
    },
    {
      title: "Niedersachsen",
      value: "niedersachsen",
      icon: "niedersachsen",
    },
    {
      title: "Nordrhein-Westfalen",
      value: "nordrhein-westfalen",
      icon: "nordrheinWestfalen",
    },
    {
      title: "Rheinland-Pfalz",
      value: "rheinland-pfalz",
      icon: "rheinlandPfalz",
    },
    {
      title: "Saarland",
      value: "saarland",
      icon: "saarland",
    },
    {
      title: "Sachsen",
      value: "sachsen",
      icon: "sachsen",
    },
    {
      title: "Sachsen-Anhalt",
      value: "sachsen-anhalt",
      icon: "sachsenAnhalt",
    },
    {
      title: "Schleswig-Holstein",
      value: "schleswig-holstein",
      icon: "schleswigHolstein",
    },
    {
      title: "Thüringen",
      value: "thueringen",
      icon: "thueringen",
    },
  ],
};
