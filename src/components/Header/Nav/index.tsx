import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "./style.scss";

const pages = [
  { name: "Main", path: "" },
  { name: "Blog", path: "1" },
  { name: "About Us", path: "2" },
  { name: "Contac Us", path: "3" },
];

export const Nav: FC = () => {
  const pathname = usePathname();

  return (
    <nav className="nav">
      {pages.map(({ name, path }) => {
        return (
          <div className="nav__item" key={path}>
            <Link
              className={"nav__link " + (pathname === path ? "nav__link_active" : "")}
              href={path}
            >
              {name}
            </Link>
          </div>
        );
      })}
    </nav>
  );
};
