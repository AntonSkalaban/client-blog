import { FC } from "react";

import { AuthorAndDate } from "../../AuthorAndDate";
import { PostProps } from "./types";
import "./style.scss";

export const Post: FC<PostProps> = ({ post, activePostId, onClick }) => {
  const { id, author, date, title } = post;
  const isActive = activePostId === id;

  const hanldeClick = () => onClick(post);

  return (
    <article className={`post ${isActive ? "post_active" : ""}`} onClick={hanldeClick}>
      <div className="post__content">
        <AuthorAndDate author={author} date={date} />

        <h4>{title}</h4>
      </div>
    </article>
  );
};
