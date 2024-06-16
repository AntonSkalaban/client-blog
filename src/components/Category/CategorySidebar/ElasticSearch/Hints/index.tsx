import { FC, useDeferredValue } from "react";

import { useClickOutside } from "hooks";
import { tags } from "constants/index";

import { HintsProps } from "./types";
import styles from "./styles.module.scss";

export const Hints: FC<HintsProps> = ({ value, closeHints, onClick }) => {
  const defferedValue = useDeferredValue(value);

  const ref = useClickOutside(() => closeHints());

  const hints = tags.filter((tag) => tag.includes(defferedValue.toLowerCase()));

  const handleClick = (tagName: string) => () => {
    onClick(tagName);
  };

  if (!hints.length) return null;

  return (
    <div className={styles.hints} ref={ref}>
      <ul className={styles.hints__list}>
        {hints.map((tag) => (
          <li className={styles.hints__item} key={tag} onClick={handleClick(tag)}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};
