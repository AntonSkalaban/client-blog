import { FC } from "react";

import styles from "./styles.module.scss";

export const ContactHeader: FC = () => {
  return (
    <section className={styles["contacts-header"]}>
      {" "}
      <p className="cap cap_03">Contact us</p>
      <h1 className={styles["contacts-header__title"]}>Let’s Start a Conversation</h1>
      <p className={`text-big ${styles["contacts-header__title"]}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim.
      </p>
    </section>
  );
};
