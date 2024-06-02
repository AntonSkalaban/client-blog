import { ReactElement } from "react";

import Facebook from "assets/images/svg/media/Facebook/Negative.svg";
import Instagram from "assets/images/svg/media/Instagram/Negative.svg";
import LinkedIn from "assets/images/svg/media/LinkedIn/Negative.svg";
import Twiiter from "assets/images/svg/media/Twitter/Negative.svg";

import { mediaKeys } from "./types";

export const mediaIcons: {
  [K in mediaKeys]: ReactElement;
} = {
  facebook: <Facebook width={16} height={16} />,
  twitter: <Twiiter width={16} height={16} />,
  instagram: <Instagram width={16} height={16} />,
  linkedIn: <LinkedIn width={16} height={16} />,
};
