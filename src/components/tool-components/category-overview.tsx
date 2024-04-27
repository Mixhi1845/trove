import CategoryCard from "@/components/tool-components/category-card";
import CategoryItem from "@/components/tool-components/category-item";

export default function CategoryOverview() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <CategoryCard title="Productivity">
        <CategoryItem
          toolname="A-Level Grade"
          badge="Calculator"
          route="/productivity/streaming"
        />
        <CategoryItem
          toolname="Pomodoro Timer"
          route="/productivity/pomodoro"
        />
      </CategoryCard>
      <CategoryCard title="Money">
        <CategoryItem toolname="Exchange Rates" badge="Calculator" route="" />
        <CategoryItem
          toolname="Streaming Costs"
          badge="Calculator"
          route="/money/subcosts"
        />
      </CategoryCard>
      <CategoryCard title="Socials">
        <CategoryItem toolname="URL Shortener" route="" />
        <CategoryItem toolname="Quotes" route="" />
      </CategoryCard>
      <CategoryCard title="Data">
        <CategoryItem toolname="Scientific Symbols" route="/data/symbols" />
        <CategoryItem toolname="Data Faker" route="/data/faker" />
        <CategoryItem toolname="Emoji Wiki" route="/data/emojis" />
      </CategoryCard>
    </section>
  );
}
