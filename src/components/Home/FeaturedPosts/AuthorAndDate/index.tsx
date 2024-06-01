import { FC } from "react";
import Link from "next/link";

import { AuthorAndDateProps } from "./types";

const AuthorAndDate: FC<AuthorAndDateProps> = ({ author, date }) => {
  return (
    <p className="text-normal">
      By <Link href={""}>{author}</Link> | {date}
    </p>
  );
};

export default AuthorAndDate;
