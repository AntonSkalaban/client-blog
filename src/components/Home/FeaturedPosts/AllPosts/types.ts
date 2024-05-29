import { Post } from "./../types";

export interface AllPostsProps {
  posts: Post[];
  openPost: (post: Post) => void;
}
