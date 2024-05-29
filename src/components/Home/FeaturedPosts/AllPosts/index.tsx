import { FC } from "react";

import { Post } from "./Post";
import { AllPostsProps } from "./types";
import "./style.scss";

export const AllPosts: FC<AllPostsProps> = ({ posts, openPost }) => {
  return (
    <section className="all-posts">
      {posts.map((post) => (
        <Post key={`${post.date}-${post.author}`} post={post} onClick={openPost} />
      ))}
    </section>
  );
};
