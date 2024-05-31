"use client";

import { FC, useState } from "react";

import AllPosts from "./AllPosts";
import { posts } from "./constants";
import FeaturePost from "./FeaturePost";
import { Post } from "./types";
import "./style.scss";

const FeaturePosts: FC = () => {
  const [openPost, setOpenPost] = useState(posts[0]);

  const hanldeOpenPost = (post: Post) => {
    setOpenPost(post);
  };

  return (
    <section className="feature-posts">
      <div className="feature-posts__post-container">
        {" "}
        <h2 className="feature-posts__title">Featured Post</h2>
        <FeaturePost post={openPost} />
      </div>
      <div>
        {" "}
        <h2 className="feature-posts__title">All Posts</h2>
        <AllPosts posts={posts.slice(0, 4)} onClick={hanldeOpenPost} activePostId={openPost.id} />
      </div>
    </section>
  );
};

export default FeaturePosts;
