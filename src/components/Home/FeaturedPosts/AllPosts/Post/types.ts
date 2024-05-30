import { Post } from "../../types";

export interface PostProps {
  post: Post;
  activePostId: number;
  onClick: (post: Post) => void;
}
