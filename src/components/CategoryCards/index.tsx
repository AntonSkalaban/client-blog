import { FC } from "react";

import { categories } from "constants/index";

import { CategoryCard } from "./CategoryCard";
import { CategoryCardsProps } from "./types";
import "./style.scss";

export const CategoryCards: FC<CategoryCardsProps> = ({ onClick }) => {
  return (
    <div className="category-cards">
      {categories.map((category) => {
        return <CategoryCard key={category.title.en} category={category} onClick={onClick} />;
      })}
    </div>
  );
};
