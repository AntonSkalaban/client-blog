import { FC } from "react";

import AuthorAndDate from "../../AuthorAndDate";
import { PostProps } from "./types";
import styles from "./styles.module.scss";

const Post: FC<PostProps> = ({ post, activePostId, onClick }) => {
  const { id, author, date, title } = post;
  const isActive = activePostId === id;

  const hanldeClick = () => onClick(post);

  return (
    <article
      className={`${styles.post} ${isActive ? styles.post_active : ""}`}
      onClick={hanldeClick}
    >
      <div className={styles.post__content}>
        <AuthorAndDate author={author} date={date} />

        <h4>{title}</h4>
      </div>
    </article>
  );
};

export default Post;
