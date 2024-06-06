import { FC } from "react";

import styles from "./styles.module.scss";

export const Searchabr: FC = () => {
  return (
    <div className={styles.searchbar}>
      <input type="text" className={styles.searchbar__input} />
      <button className={styles.searchbar__btn}>Search </button>
    </div>
  );
};
