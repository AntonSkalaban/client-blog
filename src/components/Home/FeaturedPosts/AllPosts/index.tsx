import { FC } from "react";

import Post from "./Post";
import { AllPostsProps } from "./types";
import "./style.scss";

const AllPosts: FC<AllPostsProps> = ({ posts, activePostId, onClick }) => {
  return (
    <section className="all-posts">
      {posts.map((post) => (
        <Post key={post.id} post={post} onClick={onClick} activePostId={activePostId} />
      ))}
    </section>
  );
};

export default AllPosts;
