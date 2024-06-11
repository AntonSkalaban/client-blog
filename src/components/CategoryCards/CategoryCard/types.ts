import { ReactElement } from "react";

export interface CategoryCardProps {
  image: ReactElement;
  title: string;
  text: string;
  onClick: (categoryName: string) => void;
}
