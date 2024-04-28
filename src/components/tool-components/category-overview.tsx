import CategoryCard from "@/components/tool-components/category-card";
import CategoryItem from "@/components/tool-components/category-item";
import { commandsConfig } from "@/config/commands";

export default function CategoryOverview() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {commandsConfig.mainNav.map((group) => (
        <CategoryCard key={group.title} title={group.title}>
          {group.items.map((navItem) => (
            <CategoryItem
              key={navItem.href}
              toolname={navItem.title}
              route={navItem.href}
              badge={navItem.label}
            />
          ))}
        </CategoryCard>
      ))}
    </section>
  );
}
