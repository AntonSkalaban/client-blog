import { FC } from "react";

import styles from "./styles.module.scss";

export const MissionVision: FC = () => {
  return (
    <section className={styles["mission-vision"]}>
      <div className={styles["mission-vision__block"]}>
        <p className={`cap ${styles["mission-vision__cap"]}`}>Our mision</p>
        <h3 className={styles["mission-vision__title"]}>
          Creating valuable content for creatives all around the world
        </h3>
        <p className={`text-big ${styles["mission-vision__text"]}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris
          in aliquam sem. At risus viverra adipiscing at in tellus.
        </p>
      </div>

      <div className={styles["mission-vision__block"]}>
        <p className={`cap ${styles["mission-vision__cap"]}`}>Our mision</p>
        <h3 className={styles["mission-vision__title"]}>
          Creating valuable content for creatives all around the world
        </h3>
        <p className={`text-big ${styles["mission-vision__text"]}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris
          in aliquam sem. At risus viverra adipiscing at in tellus.
        </p>
      </div>
    </section>
  );
};
