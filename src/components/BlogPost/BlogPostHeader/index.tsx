import { FC } from "react";
import { useLocale } from "next-intl";

import { categories } from "constants/index";

import { AuthorInfo } from "./AuthorInfo";
import { BlogPostHeaderProps } from "./types";
import styles from "./styles.module.scss";

export const BlogPostHeader: FC<BlogPostHeaderProps> = ({ title, category }) => {
  const localActive = useLocale() as "ru" | "en";
  const categoryImage = categories.find((cat) => cat.title[localActive] === category)?.image;

  return (
    <section className={styles["blog-post-header"]}>
      <AuthorInfo />
      <h1 className={styles["blog-post-header__title"]}>{title}</h1>
      <div className={styles["blog-post-header__category"]}>
        {categoryImage}
        <h4>{category}</h4>
      </div>
    </section>
  );
};
