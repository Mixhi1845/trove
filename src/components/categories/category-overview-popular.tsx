import CategoryCard from "@/components/categories/category-card";
import CategoryItem from "@/components/categories/category-item";

export default function CategoryOverviewPopular() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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
          toolname="Streaming Cost Calc"
          badge="Calculator"
          route=""
        />
      </CategoryCard>
      <CategoryCard title="Socials">
        <CategoryItem toolname="URL Shortener" route="" />
        <CategoryItem toolname="Quotes" route="" />
      </CategoryCard>
      <CategoryCard title="Data">
        <CategoryItem
          toolname="Scientific"
          badge="Symbols"
          route="/data/symbols"
        />
        <CategoryItem toolname="Data Faker" route="/data/faker" />
        <CategoryItem toolname="Emoji Wiki" route="/data/faker" />
      </CategoryCard>
    </section>
  );
}
