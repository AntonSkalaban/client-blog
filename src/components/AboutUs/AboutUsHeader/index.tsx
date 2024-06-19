import { FC } from "react";
import { useTranslations } from "next-intl";

import styles from "./styles.module.scss";

export const AboutUsHeader: FC = () => {
  const t = useTranslations("aboutUs.header");
  return (
    <section className={styles["about-us-header"]}>
      <div className={styles["about-us-header__title-block"]}>
        <p className={`cap ${styles["about-us-header__cap"]}`}>{t("cap")}</p>
        <h1 className={styles["about-us-header__title"]}>{t("title")}</h1>
      </div>
      <p className={`text-big ${styles["about-us-header__text"]}`}>{t("text")}</p>
    </section>
  );
};
