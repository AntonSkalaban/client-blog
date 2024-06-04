"use client";

import { FC } from "react";

import { Link, usePathname } from "../../navigation";
import { pages } from "./constants";
import "./style.scss";

export const Nav: FC = () => {
  const pathname = usePathname().split("/")[1];

  return (
    <nav className="nav">
      {pages.map(({ name, path }) => {
        return (
          <div className="nav__item" key={path}>
            <Link
              className={"nav__link " + (pathname === path ? "nav__link_active" : "")}
              href={"/" + path}
            >
              {name}
            </Link>
          </div>
        );
      })}
    </nav>
  );
};
