import { StaticImageData } from "next/image";

import { tags } from "constants/index";
import { Language } from "types";

export interface BlogPost {
  id: number;
  category: Language;
  title: Language;
  text: Language;
  description: Language;
  img: StaticImageData;
  authorId: number;
  date: string;
  tag: (typeof tags)[number];
}
