import { FC } from "react";

import { AuthorAndDate } from "../../AuthorAndDate";
import { PostProps } from "./types";
import "./style.scss";

export const Post: FC<PostProps> = ({ post, onClick }) => {
  const { author, date, title } = post;

  const hanldeClick = () => onClick(post);
  return (
    <article className="post" onClick={hanldeClick}>
      <div className="post__content">
        <AuthorAndDate author={author} date={date} />

        <h4 className="post__title">{title}</h4>
      </div>
    </article>
  );
};
