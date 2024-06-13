"use client";
import { FC } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";

import { MediaList } from "components";

import { AuthorHeaderProps } from "./types";
import styles from "./styles.module.scss";

export const AuthorHeader: FC<AuthorHeaderProps> = ({ author }) => {
  const localActive = useLocale() as "ru" | "en";

  const { image, title, text, contacts } = author;

  return (
    <section className={styles["author-header"]}>
      <div className={styles["author-header__wrapper"]}>
        <div className={styles["author-header__container"]}>
          <div className={styles["author-header__img-container"]}>
            <Image src={image} alt="author-image" />
          </div>
          <div className={styles["author-header__info-container"]}>
            <h1>{title[localActive]}</h1>
            <p className="text-big">{text[localActive]}</p>
            <MediaList links={contacts} />
          </div>
        </div>
        <div className={styles["author-header__decor-line"]}>
          <div className={styles["author-header__decor-line_purple"]} />
        </div>
      </div>
    </section>
  );
};
