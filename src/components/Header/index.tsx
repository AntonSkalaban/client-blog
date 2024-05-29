import { FC } from "react";

import { Wrapper } from "..";
import { Nav } from "./Nav";

import "./style.scss";

export const Header: FC = () => {
  return (
    <header className="header">
      <Wrapper>
        <div className="header__container">
          <h1 className="header__title">Modsen Client Blog</h1>
          <div className="header__menu-container">
            <Nav />
            <button className="header__button">Video about us</button>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};
