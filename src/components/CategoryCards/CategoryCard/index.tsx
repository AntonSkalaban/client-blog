import { FC } from "react";

import { CategoryCardProps } from "./types";
import styles from "./styles.module.scss";

export const CategoryCard: FC<CategoryCardProps> = ({ image, title, text, onClick }) => {
  const handleClick = () => {
    onClick(title.toLowerCase());
  };

  return (
    <div className={styles["category-card"]} onClick={handleClick}>
      <div className={styles["category-card__icon-container"]}>{image}</div>
      <h3 className={styles["category-card__title"]}>{title}</h3>
      <p className={`title-big ${styles["category-card__text"]}`}>{text}</p>
    </div>
  );
};
