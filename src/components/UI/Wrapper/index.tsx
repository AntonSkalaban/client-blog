import { FC } from "react";

import { WrapperProps } from "./types";
import "./style.scss";

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;
