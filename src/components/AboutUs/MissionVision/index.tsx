import { FC } from "react";
import { useTranslations } from "next-intl";

import styles from "./styles.module.scss";

export const MissionVision: FC = () => {
  const t = useTranslations("aboutUs.missionVision");

  return (
    <section className={styles["mission-vision"]}>
      <div className={styles["mission-vision__block"]}>
        <p className={`cap ${styles["mission-vision__cap"]}`}>{t("block1.mission")}</p>
        <h3 className={styles["mission-vision__title"]}>{t("block1.title")}</h3>
        <p className={`text-big ${styles["mission-vision__text"]}`}>{t("block1.text")}</p>
      </div>

      <div className={styles["mission-vision__block"]}>
        <p className={`cap ${styles["mission-vision__cap"]}`}>{t("block2.mission")}</p>
        <h3 className={styles["mission-vision__title"]}>{t("block2.title")} </h3>
        <p className={`text-big ${styles["mission-vision__text"]}`}>{t("block2.text")}</p>
      </div>
    </section>
  );
};
