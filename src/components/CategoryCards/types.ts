import { ReactElement } from "react";

export interface Language {
  ru: string;
  en: string;
}
export interface Category {
  image: ReactElement;
  title: Language;
  text: Language;
}
