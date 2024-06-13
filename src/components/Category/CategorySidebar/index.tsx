import { FC } from "react";

import { CategoryCards } from "components";
import { pagesPathEnam } from "types/pages";

import { useRouter } from "../../../navigation";
import { AllTags } from "./AllTags";
import { Searchbar } from "./Searchbar";
import styles from "./styles.module.scss";

export const CategorySidebar: FC = () => {
  const { replace } = useRouter();

  const hanldeCategoryClick = (category: string) => {
    replace(`/${pagesPathEnam.Category}/${category}`);
  };

  return (
    <aside className={styles["category-sidebar"]}>
      {" "}
      <Searchbar />
      <h2>Categories</h2>
      <CategoryCards onClick={hanldeCategoryClick} />
      <AllTags />
    </aside>
  );
};
