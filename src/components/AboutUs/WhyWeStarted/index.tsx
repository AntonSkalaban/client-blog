import { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import WeStarted from "assets/images/png/why-we-started.png";

import styles from "./styles.module.scss";

export const WhyWeStarted: FC = () => {
  const t = useTranslations("aboutUs.missionVision");

  return (
    <section className={styles["why-we-started"]}>
      <div className={styles["why-we-started__img-block"]}>
        <Image src={WeStarted} alt="we-started-image" />
      </div>
      <div className={styles["why-we-started__text-block"]}>
        <h2 className={styles["why-we-started__title"]}>{t("title")}</h2>
        <h4 className={styles["why-we-started__subtitle"]}>{t("subtitle")}</h4>
        <p className={`text-big ${styles["why-we-started__text"]}`}>{t("text")}</p>
      </div>

      <div className={styles["why-we-started__decor"]} />
    </section>
  );
};
