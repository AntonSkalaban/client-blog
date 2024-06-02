import { FC } from "react";
import { createPortal } from "react-dom";

import { AlertProps } from "./types";
import "./style.scss";

export const Alert: FC<AlertProps> = ({ message }) => {
  return createPortal(
    <div className="alert">
      <p className="text-big">{message}</p>
    </div>,
    document.body,
  );
};
