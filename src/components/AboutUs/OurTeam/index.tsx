import { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import Hands from "assets/images/png/hands.png";

import styles from "./styles.module.scss";

export const OurTeam: FC = () => {
  const t = useTranslations("aboutUs.ourTeam");

  return (
    <section className={styles["our-team"]}>
      <div className={styles["our-team__text-block"]}>
        <h2 className={styles["our-team__title"]}>{t("title")}</h2>
        <h4 className={styles["our-team__subtitle"]}>{t("subtitle")}</h4>
        <p className={`text-big ${styles["our-team__text"]}`}>{t("text")}</p>
      </div>
      <div className={styles["our-team__img-block"]}>
        <Image src={Hands} alt="hands-image" />
        <div className={styles["our-team__decor"]} />
      </div>
    </section>
  );
};
