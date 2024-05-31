import { FC } from "react";
import Image from "next/image";

import { CategoryCardProps } from "./types";
import "./style.scss";

const CategoryCard: FC<CategoryCardProps> = ({ image, title, text }) => {
  return (
    <div className="category-card">
      <div className="category-card__icon-container">
        <Image src={image} className="category-card__icon" alt="card-image" />
      </div>
      <h3 className="category-card__title">{title}</h3>
      <p className="title-big category-card__text">{text}</p>
    </div>
  );
};

export default CategoryCard;
