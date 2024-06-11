import { FC } from "react";

import { Post } from "components/Post";
import { BlogPost } from "types/blogPost";

import styles from "./styles.module.scss";
interface CategoryPosts {
  posts: BlogPost[];
}

export const CategoryPosts: FC<CategoryPosts> = ({ posts }) => {
  return (
    <div className={styles["posts-container"]}>
      {posts.length ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <h4 className={styles["posts-container__title"]}>Not found</h4>
      )}
    </div>
  );
};
