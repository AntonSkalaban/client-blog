import { FC } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";

import styles from "./styles.module.scss";
import { PostProps } from "./types";

export const Post: FC<PostProps> = ({ post }) => {
  const localActive = useLocale() as "ru" | "en";
  const { category, title, text, img } = post;

  return (
    <article className={styles.post}>
      <div className={styles["post__img-container"]}>
        <Image src={img} alt="post-image" />
      </div>
      <div className={styles["post__text-container"]}>
        <p className={`cap ${styles.post__cap}`}>{category[localActive]}</p>
        <h2 className={styles.post__title}>{title[localActive]}</h2>
        <p className={`text-big ${styles.post__text}`}>{text[localActive]}</p>
      </div>
    </article>
  );
};
