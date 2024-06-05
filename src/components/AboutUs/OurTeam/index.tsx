import { FC } from "react";
import Image from "next/image";

import Hands from "assets/images/png/hands.png";

import styles from "./styles.module.scss";

export const OurTeam: FC = () => {
  return (
    <section className={styles["our-team"]}>
      <div className={styles["our-team__text-block"]}>
        <h2 className={styles["our-team__title"]}>Our team of creatives</h2>
        <h4 className={styles["our-team__subtitle"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </h4>
        <p className={`text-big ${styles["our-team__text"]}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat.
        </p>
      </div>
      <div className={styles["our-team__img-block"]}>
        <Image src={Hands} alt="hands-image" />
        <div className={styles["our-team__decor"]} />
      </div>
    </section>
  );
};
