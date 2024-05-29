import { Post } from "../../types";

export interface PostProps {
  post: Post;
  onClick: (post: Post) => void;
}
