import { FC } from "react";

import { DialogProps } from "./types";
import "./style.scss";

export const Dialog: FC<DialogProps> = ({ children }) => {
  return (
    <div className="dialog">
      <span className="dialog__triangle" />
      <span className="dialog__triangle dialog__triangle_border" />
      {children}
    </div>
  );
};
