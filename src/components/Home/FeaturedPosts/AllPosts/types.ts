import { Post } from "./../types";

export interface AllPostsProps {
  posts: Post[];
  onClick: (post: Post) => void;
  activePostId: number;
}
