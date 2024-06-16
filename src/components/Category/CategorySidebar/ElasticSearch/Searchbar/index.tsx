import { ChangeEvent, FC } from "react";

import { SearcBarProps } from "./types";
import styles from "./styles.module.scss";

export const SearcBar: FC<SearcBarProps> = ({ value, onChange, onClick }) => {
  const hanldeKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLButtonElement>) => {
    if (e.key === "Enter") onClick(value);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleClick = () => {
    onClick(value);
  };

  return (
    <div className={styles.searchbar}>
      <input
        type="text"
        className={styles.searchbar__input}
        onChange={handleChange}
        value={value}
        onKeyDown={hanldeKeyDown}
      />
      <button className={styles.searchbar__btn} onClick={handleClick} onKeyDown={hanldeKeyDown}>
        Search{" "}
      </button>
    </div>
  );
};
