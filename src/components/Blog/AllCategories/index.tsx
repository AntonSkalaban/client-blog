"use client";
import { FC } from "react";

import { CategoryCards } from "components";
import { pagesPathEnam } from "types/pages";

import { useRouter } from "../../../navigation";
import "./style.scss";

export const AllCategories: FC = () => {
  const router = useRouter();

  const handleClick = (categoryName: string) => {
    router.push(`/${pagesPathEnam.Category}/${categoryName}`);
  };

  return (
    <section className="all-categories">
      {" "}
      <h2 className="all-categories__title">All Categories</h2>
      <CategoryCards onClick={handleClick} />
    </section>
  );
};
