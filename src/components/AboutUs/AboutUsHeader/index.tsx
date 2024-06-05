import { FC } from "react";

import styles from "./styles.module.scss";

export const AboutUsHeader: FC = () => {
  return (
    <section className={styles["about-us-header"]}>
      <div className={styles["about-us-header__title-block"]}>
        <p className={`cap ${styles["about-us-header__cap"]}`}>ABOUT US</p>
        <h1 className={styles["about-us-header__title"]}>
          We are a team of content writers who share their learnings
        </h1>
      </div>
      <p className={`text-big ${styles["about-us-header__text"]}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </section>
  );
};
