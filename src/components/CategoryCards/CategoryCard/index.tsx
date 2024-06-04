import { FC } from "react";

import { CategoryCardProps } from "./types";
import "./style.scss";

export const CategoryCard: FC<CategoryCardProps> = ({ image, title, text }) => {
  return (
    <div className="category-card">
      <div className="category-card__icon-container">{image}</div>
      <h3 className="category-card__title">{title}</h3>
      <p className="title-big category-card__text">{text}</p>
    </div>
  );
};
