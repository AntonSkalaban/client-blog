"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { pages } from "./constants";
import "./style.scss";

export const Nav: FC = () => {
  const pathname = usePathname();
  const pagename = pathname.split("/").filter((i) => i !== "")[1] || "";

  return (
    <nav className="nav">
      {pages.map(({ name, path }) => {
        return (
          <div className="nav__item" key={path}>
            <Link
              className={"nav__link " + (pagename === path ? "nav__link_active" : "")}
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
