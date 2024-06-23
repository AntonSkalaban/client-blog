import { Language } from "types/language";

export interface Post {
  id: number;
  image: string;
  author: string;
  date: string;
  title: Language;
  text: Language;
}
