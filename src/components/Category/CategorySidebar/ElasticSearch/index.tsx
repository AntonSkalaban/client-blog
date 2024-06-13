"use client";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { useChangeSearchParams } from "hooks";

import { Hints } from "./Hints";
import styles from "./styles.module.scss";

export const ElasticSearch: FC = () => {
  const searchParams = useSearchParams();
  const { changeSearchParams } = useChangeSearchParams(searchParams);

  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(searchParams.get("tag") || "");
  }, [searchParams]);

  const hanldeClick = () => {
    changeSearchParams("tag", value);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.searchbar}>
      <input
        type="text"
        className={styles.searchbar__input}
        onChange={handleChange}
        value={value}
      />
      <button className={styles.searchbar__btn} onClick={hanldeClick}>
        Search{" "}
      </button>
      <Hints value={value} />
    </div>
  );
};
