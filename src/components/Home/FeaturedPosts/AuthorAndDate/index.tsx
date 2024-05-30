import { FC } from "react";
import { NavLink } from "react-router-dom";

import { AuthorAndDateProps } from "./types";

export const AuthorAndDate: FC<AuthorAndDateProps> = ({ author, date }) => {
  return (
    <p className="text-normal">
      By <NavLink to={""}>{author}</NavLink> | {date}
    </p>
  );
};
