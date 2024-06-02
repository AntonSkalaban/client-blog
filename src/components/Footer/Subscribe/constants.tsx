import { ReactNode } from "react";

import Facebook from "assets/images/svg/media/Facebook/Negative.svg";
import Instagram from "assets/images/svg/media/Instagram/Negative.svg";
import LinkedIn from "assets/images/svg/media/LinkedIn/Negative.svg";
import Twiiter from "assets/images/svg/media/Twitter/Negative.svg";

export interface MediaIcons {
  [key: string]: ReactNode;
}

export const mediaIcons: MediaIcons = {
  facebook: <Facebook />,
  twitter: <Twiiter />,
  instagram: <Instagram />,
  linkedIn: <LinkedIn />,
};
