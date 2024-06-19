import { FC } from "react";
import { useLocale } from "next-intl";

import { pagesPathEnam } from "types/pages";

import { usePathname } from "../../../../navigation";
import { CategoryCardProps } from "./types";
import styles from "./styles.module.scss";

export const CategoryCard: FC<CategoryCardProps> = ({ category, onClick }) => {
  const path = usePathname();
  const { title, text, image } = category;
  const localActive = useLocale() as "ru" | "en";

  const handleClick = () => {
    onClick(title.en.toLowerCase());
  };

  return (
    <article
      className={`${styles["category-card"]} ${path.includes(`/${pagesPathEnam.Category}/${title.en.toLowerCase()}`) ? styles["category-card_active"] : ""} `}
      onClick={handleClick}
    >
      <div className={styles["category-card__icon-container"]}>{image}</div>
      <h3 className={styles["category-card__title"]}>{title[localActive]}</h3>
      <p className={`title-big ${styles["category-card__text"]}`}>{text[localActive]}</p>
    </article>
  );
};
