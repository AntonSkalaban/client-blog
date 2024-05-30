import { FC, useState } from "react";

import { AllPosts } from "./AllPosts";
import { posts } from "./constants";
import { FeaturePost } from "./FeaturePost";
import { Post } from "./types";
import "./style.scss";

export const FeaturePosts: FC = () => {
  const [openPost, setOpenPost] = useState(posts[0]);

  const hanldeOpenPost = (post: Post) => {
    setOpenPost(post);
  };

  return (
    <section className="feature-posts">
      <div className="feature-posts__post-container">
        {" "}
        <h3 className="page-title3 feature-posts__title">Featured Post</h3>
        <FeaturePost post={openPost} />
      </div>
      <div>
        {" "}
        <h3 className="page-title3 feature-posts__title">All Posts</h3>
        <AllPosts posts={posts.slice(0, 4)} onClick={hanldeOpenPost} activePostId={openPost.id} />
      </div>
    </section>
  );
};
