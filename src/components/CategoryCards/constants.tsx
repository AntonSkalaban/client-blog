import Business from "assets/images/svg/business.svg";
import Economy from "assets/images/svg/economy.svg";
import Startup from "assets/images/svg/startup.svg";
import Technology from "assets/images/svg/technology.svg";

import { Category } from "./types";

export const categories: Category[] = [
  {
    image: <Business />,
    title: "Business",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    image: <Startup />,
    title: "Startup",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    image: <Economy />,
    title: "Economy",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    image: <Technology />,
    title: "Technology",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
];
