"use client";
import { FC } from "react";
import { useSearchParams } from "next/navigation";

import { useChangeSearchParams } from "hooks";
import { tags } from "constants/index";

import styles from "./styles.module.scss";

export const AllTags: FC = () => {
  const searchParams = useSearchParams();
  const { changeSearchParams } = useChangeSearchParams(searchParams);

  const handleClick = (value: string) => () => {
    changeSearchParams("tag", value);
  };

  return (
    <>
      <h2 className={styles["tags__title"]}>All Tags</h2>
      <div className={styles["tags__tags-container"]}>
        {tags.map((tag) => (
          <button
            key={tag}
            className={`${styles.tag} ${searchParams.has("tag", tag) ? styles.tag_active : ""}`}
            onClick={handleClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </>
  );
};
