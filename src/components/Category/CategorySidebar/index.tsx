// "use client";
import { FC } from "react";

import { CategoryCards } from "components";
import { pagesPathEnam } from "types/pages";

import { useRouter } from "../../../navigation";
import { AllTags } from "./AllTags";
import { Searchabr } from "./Searchbar";
import { CategorySidebarProps } from "./types";
import styles from "./styles.module.scss";

export const CategorySidebar: FC<CategorySidebarProps> = ({ tag, onTagChange }) => {
  const { replace } = useRouter();

  const hanldeCategoryClick = (category: string) => {
    replace(`/${pagesPathEnam.Category}/${category}`);
  };

  return (
    <aside className={styles["category-sidebar"]}>
      {" "}
      <Searchabr onClick={onTagChange} tagValue={tag} />
      <h2>Categories</h2>
      <CategoryCards onClick={hanldeCategoryClick} />
      <AllTags onClick={onTagChange} />
    </aside>
  );
};
