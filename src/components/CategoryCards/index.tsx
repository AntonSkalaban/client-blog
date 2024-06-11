"use client:";
import { FC } from "react";
import { useLocale } from "next-intl";

import { categories } from "constants/index";

import { CategoryCard } from "./CategoryCard";
import { CategoryCardsProps } from "./types";
import "./style.scss";

export const CategoryCards: FC<CategoryCardsProps> = ({ onClick }) => {
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
            onClick={onClick}
          />
        );
      })}
    </div>
  );
};
