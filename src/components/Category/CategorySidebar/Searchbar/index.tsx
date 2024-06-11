"use client";

import { ChangeEvent, FC, useEffect, useState } from "react";

import { SearchbarProps } from "./types";
import styles from "./styles.module.scss";

export const Searchabr: FC<SearchbarProps> = ({ tagValue, onClick }) => {
  const [value, setValue] = useState(tagValue);

  useEffect(() => {
    setValue(tagValue);
  }, [tagValue]);

  const hanldeClick = () => {
    onClick(value);
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
    </div>
  );
};
