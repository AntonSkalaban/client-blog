import { FC } from "react";
import Image from "next/image";

import { PostImageProps } from "./types";
import styles from "./styles.module.scss";

export const PostImage: FC<PostImageProps> = ({ img }) => {
  return (
    <section className={styles["post-img-section"]}>
      <Image src={img} alt="post-img" />
    </section>
  );
};
