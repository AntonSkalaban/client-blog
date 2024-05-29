import { FC } from "react";

import { AuthorAndDate } from "../AuthorAndDate";
import { FeaturePostProps } from "./types";
import "./style.scss";

export const FeaturePost: FC<FeaturePostProps> = ({ post }) => {
  const { image, author, date, title, text } = post;

  return (
    <div className="feature-post">
      <div className="feature-post__img-container">
        <img src={image} alt="card image" />
      </div>

      <AuthorAndDate author={author} date={date} />
      <h4 className="feature-post__title page-title4">{title}</h4>
      <p className="feature-post__text">{text}</p>
      <button className="button-yellow">Read More {">"}</button>
    </div>
  );
};
