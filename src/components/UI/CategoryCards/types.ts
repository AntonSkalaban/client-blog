import { ReactElement } from "react";

import { Language } from "types";

export interface Category {
  image: ReactElement;
  title: Language;
  text: Language;
}

export interface CategoryCardsProps {
  onClick: (categoryName: string) => void;
}
