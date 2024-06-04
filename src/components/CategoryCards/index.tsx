import { FC } from "react";
import { useLocale } from "next-intl";

import { CategoryCard } from "./CategoryCard";
import { categories } from "./constants";
import "./style.scss";

export const CategoryCards: FC = () => {
  const localActive = useLocale() as "ru" | "en";

  return (
    <div className="category-cards">
      {categories.map(({ image, title, text }) => {
        return (
          <CategoryCard
            key={title[localActive]}
            image={image}
            title={title[localActive]}
            text={text[localActive]}
          />
        );
      })}
    </div>
  );
};
