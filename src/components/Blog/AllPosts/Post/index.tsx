import { FC } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";

import { pagesPathEnam } from "types/pages";

import { useRouter } from "../../../../navigation";
import { PostProps } from "./types";
import styles from "./styles.module.scss";

export const Post: FC<PostProps> = ({ post }) => {
  const router = useRouter();

  const localActive = useLocale() as "ru" | "en";
  const { id, category, title, text, img } = post;

  const handleClick = () => {
    router.push(`/${pagesPathEnam.Blog}/${id}`);
  };

  return (
    <article className={styles.post} onClick={handleClick}>
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
