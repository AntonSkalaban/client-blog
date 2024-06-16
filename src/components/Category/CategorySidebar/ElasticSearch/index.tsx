import { FC } from "react";

import { Hints } from "./Hints";
import { SearcBar } from "./Searchbar";
import { ElasticSearchProps } from "./types";

export const ElasticSearch: FC<ElasticSearchProps> = ({
  value,
  isHintsOpen,
  onChange,
  onClick,
  closeHints,
}) => {
  return (
    <>
      <SearcBar value={value} onChange={onChange} onClick={onClick} />
      {isHintsOpen && <Hints value={value} onClick={onClick} closeHints={closeHints} />}
    </>
  );
};
