import Facebook from "assets/images/svg/media/Facebook/Negative.svg";
import Instagram from "assets/images/svg/media/Instagram/Negative.svg";
import LinkedIn from "assets/images/svg/media/LinkedIn/Negative.svg";
import Twiiter from "assets/images/svg/media/Twitter/Negative.svg";

import { Author } from "../types";

export const mediaIcons: { [key in keyof Author["contacts"]]: string } = {
  facebook: Facebook,
  twitter: Twiiter,
  instagram: Instagram,
  linkedIn: LinkedIn,
};
