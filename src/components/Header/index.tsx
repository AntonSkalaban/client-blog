"use client";
import { FC, useState } from "react";

import { Modal, Nav, Wrapper } from "components";
import { BurgerMenu } from "components/BurgerMenu";

import { LangSwitcher } from "./LangSwitcher";
import { Video } from "./Video";
import "./style.scss";

export const Header: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hanldeCloseModal = () => setIsModalOpen(false);
  const hanldeOpenModal = () => setIsModalOpen(true);

  return (
    <header className="header">
      {isModalOpen && (
        <Modal close={hanldeCloseModal}>
          <Video />
        </Modal>
      )}

      <Wrapper>
        <div className="header__container">
          <h1 className="logo">Modsen Client Blog</h1>

          <BurgerMenu>
            <LangSwitcher />
            <Nav />
            <button className="header__button" onClick={hanldeOpenModal}>
              Video about us
            </button>
          </BurgerMenu>

          <div className="header__menu-container">
            <Nav />
            <button className="header__button" onClick={hanldeOpenModal} data-testid="header-btn">
              Video about us
            </button>
            <LangSwitcher />
          </div>
        </div>
      </Wrapper>
    </header>
  );
};
