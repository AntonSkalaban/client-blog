import { StaticImageData } from "next/image";

import { Language } from "types";

export interface BlogPost {
  id: number;
  category: Language;
  title: Language;
  text: Language;
  description: Language;
  img: StaticImageData;
}
