import { FC } from "react";

import { MediaList, Nav, Wrapper } from "components";

import { links } from "./constants";
import { Subscribe } from "./Subscribe";
import "./style.scss";

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <Wrapper>
        <div className="footer__container">
          <div className="footer__row">
            {" "}
            <h1 className="logo">Modsen Client Blog</h1> <Nav />
          </div>
          <Subscribe />
          <div className="footer__row">
            {" "}
            <p className="text-big footer__text">
              Finstreet 118 2561 Fintown
              <br />
              Hello@finsweet.com 020 7993 2905
            </p>
            <MediaList links={links} />
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};
