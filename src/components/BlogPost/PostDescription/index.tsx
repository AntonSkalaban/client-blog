import { FC } from "react";

import { PostDescriptionProps } from "./types";
import styles from "./styles.module.scss";

export const PostDescription: FC<PostDescriptionProps> = ({ description }) => {
  return (
    <section
      className={styles["post-desription"]}
      dangerouslySetInnerHTML={{ __html: description }}
    />
  );
};
