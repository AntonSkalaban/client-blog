"use client";
import { FC, useState } from "react";
import { useSearchParams } from "next/navigation";

import { CategoryCards } from "components";
import { useChangeSearchParams } from "hooks/index";
import { pagesPathEnam } from "types/pages";

import { useRouter } from "../../../navigation";
import { AllTags } from "./AllTags";
import { ElasticSearch } from "./ElasticSearch";
import styles from "./styles.module.scss";

export const CategorySidebar: FC = () => {
  const { replace } = useRouter();

  const searchParams = useSearchParams();
  const { changeSearchParams } = useChangeSearchParams(searchParams);
  const [isHintsOpen, setIsHintsOpen] = useState(false);
  const [value, setValue] = useState(searchParams.get("tag") || "");

  const hanldeCategoryClick = (category: string) => {
    replace(`/${pagesPathEnam.Category}/${category}`);
  };

  const closeHints = () => {
    setIsHintsOpen(false);
  };

  const handleChange = (value: string) => {
    setValue(value);
    if (!isHintsOpen) setIsHintsOpen(true);
  };

  const handleClick = (value: string) => {
    setValue(value);
    changeSearchParams("tag", value);
    closeHints();
  };

  return (
    <aside className={styles["category-sidebar"]}>
      <ElasticSearch
        value={value}
        isHintsOpen={isHintsOpen}
        onClick={handleClick}
        onChange={handleChange}
        closeHints={closeHints}
      />
      <h2 className={styles["category-sidebar__title"]}>Categories</h2>
      <CategoryCards onClick={hanldeCategoryClick} />
      <AllTags onClick={handleClick} />
    </aside>
  );
};
