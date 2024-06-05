import { FC } from "react";
import Image from "next/image";

import WeStarted from "assets/images/png/why-we-started.png";

import styles from "./styles.module.scss";

export const WhyWeStarted: FC = () => {
  return (
    <section className={styles["why-we-started"]}>
      <div className={styles["why-we-started__img-block"]}>
        <Image src={WeStarted} alt="we-started-image" />
      </div>
      <div className={styles["why-we-started__text-block"]}>
        <h2 className={styles["why-we-started__title"]}>Our team of creatives</h2>
        <h4 className={styles["why-we-started__subtitle"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </h4>
        <p className={`text-big ${styles["why-we-started__text"]}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </p>
      </div>

      <div className={styles["why-we-started__decor"]} />
    </section>
  );
};
