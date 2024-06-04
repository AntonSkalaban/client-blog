import { FC } from "react";
import Image from "next/image";

import AuthorImage from "assets/images/png/authors/auth1.png";

import styles from "./styles.module.scss";

export const AuthorInfo: FC = () => {
  return (
    <div className={styles["author-info"]}>
      <div className={styles["author-info__img-container"]}>
        <Image src={AuthorImage} alt="author-img" />
      </div>
      <div>
        <h3 className={styles["author-info__title"]}>Andrew Jonson</h3>
        <p className={`text-big ${styles["author-info__text"]}`}></p> Posted on 27th January 2022
      </div>
    </div>
  );
};
