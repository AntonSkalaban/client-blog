import { FC } from "react";

import styles from "./styled.module.scss";

const info = {
  index: "020 7993 2905",
  email: "hello@finsweet.com",
};

export const ContactInfo: FC = () => {
  return (
    <section className={styles["contact-info"]}>
      <div className={styles["contact-info__block"]}>
        <p className={`text-normal ${styles["contact-info__title"]}`}>Working hours</p>
        <h5 className={styles["contact-info__info"]}>
          Working hours <br /> 9:00 AM to 8:00 PM
        </h5>
        <p className={`text-big ${styles["contact-info__text"]}`}>
          Our Support Team is available 24/7
        </p>
      </div>

      <div className={styles["contact-info__block"]}>
        <p className={`text-normal ${styles["contact-info__title"]}`}>Contact Us</p>
        <h5 className={styles["contact-info__info"]}>{info.index}</h5>
        <p className={`text-big ${styles["contact-info__text"]}`}>{info.email}</p>
      </div>
    </section>
  );
};
