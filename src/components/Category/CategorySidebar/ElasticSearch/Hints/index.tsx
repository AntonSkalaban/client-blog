"use client";
import { FC, useDeferredValue, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { useChangeSearchParams, useClickOutside } from "hooks";
import { tags } from "constants/index";

import styles from "./styles.module.scss";

interface HintsProps {
  value: string;
}
export const Hints: FC<HintsProps> = ({ value }) => {
  const searchParams = useSearchParams();
  const defferedValue = useDeferredValue(value);

  const { changeSearchParams } = useChangeSearchParams(searchParams);
  const ref = useClickOutside(() => setIsOpen(false));
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(!!value);
  }, [value]);

  const hints = useMemo(
    () => tags.filter((tag) => tag.includes(defferedValue.toLowerCase())),
    [defferedValue],
  );

  const handleClick = (tagName: string) => () => {
    changeSearchParams("tag", tagName);
    setIsOpen(false);
  };

  if (!isOpen || !hints.length) return null;

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
