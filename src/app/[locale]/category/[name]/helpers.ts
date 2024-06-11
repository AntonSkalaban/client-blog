import { BlogPost } from "types/index";

export const filterPosts = (posts: BlogPost[], selectCategory: string, selectTag: string) => {
  return posts.filter(({ category, tag }) => {
    if (!selectTag) {
      return category.en === selectCategory || category.ru === selectCategory;
    }
    return (category.en === selectCategory || category.ru === selectCategory) && tag === selectTag;
  });
};
