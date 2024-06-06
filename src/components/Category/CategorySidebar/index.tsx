import { FC } from "react";

import { Searchabr } from "./Searchbar";
import styles from "./styles.module.scss";

export const CategorySidebar: FC = () => {
  return (
    <aside className={styles["category-sidebar"]}>
      <Searchabr />
    </aside>
  );
};
