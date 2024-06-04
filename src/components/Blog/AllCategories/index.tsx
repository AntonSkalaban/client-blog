import { FC } from "react";

import { CategoryCards } from "components";

import "./style.scss";

export const AllCategories: FC = () => {
  return (
    <section className="all-categories">
      {" "}
      <h2 className="all-categories__title">All Categories</h2>
      <CategoryCards />
    </section>
  );
};
