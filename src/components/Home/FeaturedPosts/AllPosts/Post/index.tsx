import { FC } from "react";

import AuthorAndDate from "../../AuthorAndDate";
import styles from "./styles.module.scss";
import { PostProps } from "./types";

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
