import { FC } from "react";
import { useLocale } from "next-intl";

import { pagesEnNameEnam, pagesPathEnam, pagesRuNameEnam } from "types/pages";

import { Link } from "../../../navigation";
import { CategoryHeaderProps } from "./types";
import styles from "./styles.module.scss";

export const CategoryHeader: FC<CategoryHeaderProps> = ({ categoryName }) => {
  const localActive = useLocale() as "ru" | "en";

  return (
    <section className={styles["category-header"]}>
      <div className={styles["category-header__container"]}>
        <p className={`display ${styles["category-header__title"]}`}>{categoryName}</p>
        <p className={`text-big ${styles["category-header__text"]}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore.
        </p>
        <p className={`cap ${styles["category-header__cap"]}`}>
          <Link className={styles["category-header__cap"]} href={pagesPathEnam.Blog}>
            {(localActive === "en" ? pagesEnNameEnam : pagesRuNameEnam).Blog}
          </Link>{" "}
          {">"} {categoryName}
        </p>
      </div>
    </section>
  );
};
