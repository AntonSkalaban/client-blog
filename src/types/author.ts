import { StaticImageData } from "next/image";

import { Language } from "./language";

export interface Author {
  id: number;
  name: string;
  image: StaticImageData;
  title: Language;
  text: Language;
  profession: string;

  company: string;
  contacts: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedIn: string;
  };
}
