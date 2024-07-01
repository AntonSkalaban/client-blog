import { FC } from "react";

import { logos } from "./constants";
import styles from "./styles.module.scss";

export const LogosList: FC = () => {
  return <section className={styles["logos-list"]}>{logos.map((el) => el)}</section>;
};
