import Business from "assets/images/svg/business.svg";
import Economy from "assets/images/svg/economy.svg";
import Startup from "assets/images/svg/startup.svg";
import Technology from "assets/images/svg/technology.svg";

import { Category } from "../components/UI/CategoryCards/types";

export const categories: Category[] = [
  {
    image: <Business />,
    title: {
      en: "Business",
      ru: "Бизнес",
    },
    text: {
      en: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      ru: "Лорем ипсум долор сит амет, консектетур адиписцинг элит.",
    },
  },
  {
    image: <Startup />,
    title: {
      en: "Startup",
      ru: "Стартап",
    },
    text: {
      en: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      ru: "Лорем ипсум долор сит амет, консектетур адиписцинг элит.",
    },
  },
  {
    image: <Economy />,
    title: {
      en: "Economy",
      ru: "Экономика",
    },
    text: {
      en: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      ru: "Лорем ипсум долор сит амет, консектетур адиписцинг элит.",
    },
  },
  {
    image: <Technology />,
    title: {
      en: "Technology",
      ru: "Технологии",
    },
    text: {
      en: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      ru: "Лорем ипсум долор сит амет, консектетур адиписцинг элит.",
    },
  },
];
