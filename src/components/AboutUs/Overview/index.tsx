import { FC } from "react";
import { useLocale } from "next-intl";

import { overviewData } from "./constants";
import { numToStringWithK } from "./helpers";
import styles from "./styles.module.scss";

export const Overview: FC = () => {
  const localActive = useLocale() as "ru" | "en";

  return (
    <section className={styles.overview}>
      <div className={styles.overview__info}>
        {overviewData.map(({ name, value }) => (
          <div key={name[localActive]}>
            <p className="display">{numToStringWithK(value)}</p>
            <p className="text-big">{name[localActive]}</p>
          </div>
        ))}
      </div>
      <div className={styles.overview__line}>
        <div className={styles.overview__line_purple} />
      </div>
    </section>
  );
};
