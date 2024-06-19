import { FC } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";

import { authors, blogBosts } from "constants/index";
import { BlogPost } from "types";

import styles from "./styles.module.scss";

interface CardProps {
  post: BlogPost;
}

export const Card: FC<CardProps> = ({ post }) => {
  const localActive = useLocale() as "ru" | "en";

  return (
    <article className={styles.card}>
      <div className={styles["card__img-container"]}>
        <Image src={post.img} alt="post-img" />
      </div>
      <p className={styles.card__label}>
        {authors.find(({ id }) => id === post.authorId)?.name}|{post.date}
      </p>
      <h3 className={styles.card__title}>{post.title[localActive]}</h3>
      <p className={`text-big ${styles.card__text}`}>{post.text[localActive]}</p>
    </article>
  );
};

export const WhatToReadNext: FC = () => {
  return (
    <section className={styles["what-to-read-next"]}>
      <h2 className={styles["what-to-read-next__title"]}>What to read next</h2>
      <div className={styles["what-to-read-next__cards-container"]}>
        {blogBosts.slice(0, 3).map((post) => (
          <Card key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};
