import { useState } from "react";

import { Overlay } from "components";

// import  from "./styles.module.scss";
import "./styles.scss";

interface BurgerMenuProsp {
  children: React.ReactNode;
}

export const BurgerMenu: React.FC<BurgerMenuProsp> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  return (
    <>
      <div className={"burger-menu"}>
        <div
          className={`${"burger-menu__icon"} ${isOpen ? "burger-menu__icon_active" : ""}`}
          onClick={toggle}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
      {isOpen && <Overlay />}
      <div className={`${"burger-menu__content"} ${isOpen ? "burger-menu__content_active" : ""}`}>
        {children}
      </div>
    </>
  );
};
