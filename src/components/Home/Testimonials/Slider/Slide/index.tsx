import { FC } from "react";

import { Profile } from "../Profile";
import { SliderProps } from "./types";

export const Slide: FC<SliderProps> = ({ title }) => {
  return (
    <div className="slide">
      <h4 className="slide__title">{title}</h4>

      <Profile name={"User name"} city={"Belarus"} country={"Minsk"} />
    </div>
  );
};
