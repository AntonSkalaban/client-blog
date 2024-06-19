import { Category } from "../types";

export interface CategoryCardProps {
  category: Category;
  onClick: (categoryName: string) => void;
}
