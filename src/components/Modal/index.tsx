import { FC } from "react";
import { createPortal } from "react-dom";

import { Overlay } from "components";

import { ModalProps } from "./types";
import "./style.scss";

export const Modal: FC<ModalProps> = ({ children, close }) => {
  return (
    <>
      {createPortal(
        <>
          <Overlay />
          <div className="modal">
            <button className="modal__close-btn" onClick={close}>
              X
            </button>
            <div className="modal__content">{children}</div>
          </div>
        </>,
        document.body,
      )}
    </>
  );
};
