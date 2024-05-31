import { FC } from "react";

import CategoryCards from "components/CategoryCards";

import "./style.scss";

const Category: FC = () => {
  return (
    <section className="category">
      <h2 className="category__title">Choose A Catagory</h2>
      <CategoryCards />
    </section>
  );
};

export default Category;
