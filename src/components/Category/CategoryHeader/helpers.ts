import { categories } from "constants/categories";

export const findTitle = (categoryName: string, localActive: "ru" | "en") => {
  return categories.find((cat) => cat.title.en.toLowerCase() === categoryName)?.title[localActive];
};
