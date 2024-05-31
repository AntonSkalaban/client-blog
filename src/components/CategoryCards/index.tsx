import { FC } from "react";

import CategoryCard from "./CategoryCard";
import { categories } from "./constants";
import "./style.scss";

const CategoryCards: FC = () => {
  return (
    <div className="category-cards">
      {categories.map(({ image, title, text }) => {
        return <CategoryCard key={title} image={image} title={title} text={text} />;
      })}
    </div>
  );
};

export default CategoryCards;
