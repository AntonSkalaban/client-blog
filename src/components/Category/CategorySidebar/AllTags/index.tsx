import { FC } from "react";

import { tags } from "constants/index";

import { AllTagsProps } from "./types";
import styles from "./styles.module.scss";

export const AllTags: FC<AllTagsProps> = ({ onClick }) => {
  const handleClick = (value: string) => () => {
    onClick(value);
  };

  return (
    <>
      <h2 className={styles["tags__title"]}>All Tags</h2>
      <div className={styles["tags__tags-container"]}>
        {tags.map((tag) => (
          <button key={tag} className={styles.tag} onClick={handleClick(tag)}>
            {tag}
          </button>
        ))}
      </div>
    </>
  );
};
