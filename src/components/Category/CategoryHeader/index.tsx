import { FC } from "react";

import { pagesNameEnam, pagesPathEnam } from "types/pages";

import { Link } from "../../../navigation";
import styles from "./styles.module.scss";

export const CategoryHeader: FC = () => {
  return (
    <section className={styles["category-header"]}>
      <div className={styles["category-header__container"]}>
        <p className={`display ${styles["category-header__title"]}`}>Business</p>
        <p className={`text-big ${styles["category-header__text"]}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore.
        </p>
        <p className={`cap ${styles["category-header__cap"]}`}>
          <Link className={styles["category-header__cap"]} href={pagesPathEnam.Blog}>
            {pagesNameEnam.Blog}
          </Link>{" "}
          {">"} Business
        </p>
      </div>
    </section>
  );
};