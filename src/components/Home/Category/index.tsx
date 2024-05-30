import { FC } from "react";

import { CategoryCards } from "components";

import "./style.scss";

export const Category: FC = () => {
  return (
    <section className="category">
      <h2 className="category__title">Choose A Catagory</h2>
      <CategoryCards />
    </section>
  );
};
