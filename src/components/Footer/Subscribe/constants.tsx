import Facebook from "assets/images/svg/media/Facebook/Negative.svg";
import Instagram from "assets/images/svg/media/Instagram/Negative.svg";
import LinkedIn from "assets/images/svg/media/LinkedIn/Negative.svg";
import Twiiter from "assets/images/svg/media/Twitter/Negative.svg";

import { MediaIcons } from "./types";

export const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
export const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
export const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export const mediaIcons: MediaIcons = {
  facebook: <Facebook />,
  twitter: <Twiiter />,
  instagram: <Instagram />,
  linkedIn: <LinkedIn />,
};

export const errors = {
  email: {
    valid: {
      en: "Email is not valid",
      ru: "Неверный адресс электронной почты",
    },
    required: {
      en: "Required",
      ru: "Поле обязательно",
    },
  },
};
