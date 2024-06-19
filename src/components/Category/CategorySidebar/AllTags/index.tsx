// "use client";
import { FC } from "react";
import { useSearchParams } from "next/navigation";

// import { useSearchParams } from "next/navigation";
// import { useChangeSearchParams } from "hooks";
import { tags } from "constants/index";

import styles from "./styles.module.scss";

interface AllTagsProps {
  onClick: (value: string) => void;
}
export const AllTags: FC<AllTagsProps> = ({ onClick }) => {
  const searchParams = useSearchParams();
  // const { changeSearchParams } = useChangeSearchParams(searchParams);

  // const handleClick = (value: string) => () => {
  //   changeSearchParams("tag", value);
  // };

  const handleClick = (value: string) => () => {
    onClick(value);
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
