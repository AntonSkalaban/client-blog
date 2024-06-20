import { ReactElement } from "react";

import Facebook from "assets/images/svg/media/Facebook/Negative.svg";
import Instagram from "assets/images/svg/media/Instagram/Negative.svg";
import LinkedIn from "assets/images/svg/media/LinkedIn/Negative.svg";
import Twiiter from "assets/images/svg/media/Twitter/Negative.svg";

import { mediaKeys } from "./types";

export const mediaIcons: {
  [K in mediaKeys]: ReactElement;
} = {
  facebook: <Facebook />,
  twitter: <Twiiter />,
  instagram: <Instagram />,
  linkedIn: <LinkedIn />,
};
