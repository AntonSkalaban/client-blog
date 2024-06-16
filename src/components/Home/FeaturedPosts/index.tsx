"use client";
import { FC, useState } from "react";
import { useTranslations } from "next-intl";

import { withLazyLoad } from "hoc";

import { AllPosts } from "./AllPosts";
import { posts } from "./constants";
import { FeaturePost } from "./FeaturePost";
import { Post } from "./types";
import "./style.scss";

export const FeaturedPosts: FC = withLazyLoad(() => {
  const t = useTranslations("home.featurePosts");
  const [openPost, setOpenPost] = useState(posts[0]);

  const hanldeOpenPost = (post: Post) => {
    setOpenPost(post);
  };

  return (
    <section className="feature-posts">
      <div className="feature-posts__post-container">
        <h2 className="feature-posts__title">{t("featurePost.title")}</h2>
        <FeaturePost post={openPost} />
      </div>
      <div className="feature-posts__all-posts-container">
        {" "}
        <h2 className="feature-posts__title">{t("allPosts.title")}</h2>
        <AllPosts posts={posts.slice(0, 4)} onClick={hanldeOpenPost} activePostId={openPost.id} />
      </div>
    </section>
  );
});
