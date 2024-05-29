import { FC } from "react";
import { NavLink } from "react-router-dom";

import "./style.scss";

const pages = [
  { name: "Main", path: "" },
  { name: "Blog", path: "1" },
  { name: "About Us", path: "2" },
  { name: "Contac Us", path: "3" },
];

export const Nav: FC = () => {
  const setActive = ({ isActive }: { isActive: boolean }) => {
    return "nav__link " + (isActive ? "nav__link_active" : "");
  };

  return (
    <nav className="nav">
      {pages.map(({ name, path }) => {
        return (
          <div className="nav__item" key={path}>
            <NavLink className={setActive} to={"/" + path}>
              {name}
            </NavLink>
          </div>
        );
      })}
    </nav>
  );
};
