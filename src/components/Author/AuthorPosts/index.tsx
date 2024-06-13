import { FC } from "react";

import { Post } from "components/Post";

import { AuthorPostsProps } from "./types";
import styles from "./styles.module.scss";

export const AuthorPosts: FC<AuthorPostsProps> = ({ posts }) => {
  return (
    <section className={styles["author-posts"]}>
      <div className={styles["author-posts__wrapper"]}>
        <h2>My posts</h2>
        <div className={styles["posts-container"]}>
          {posts.length ? (
            posts.map((post) => <Post key={post.id} post={post} />)
          ) : (
            <h4 className={styles["posts-container__title"]}>No posts yet...</h4>
          )}
        </div>
      </div>
    </section>
  );
};
