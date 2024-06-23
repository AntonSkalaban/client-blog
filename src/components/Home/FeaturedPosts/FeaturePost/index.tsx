"use client";
import { FC } from "react";
import { useLocale, useTranslations } from "next-intl";

import { pagesPathEnam } from "types/index";

import { useRouter } from "../../../../navigation";
import AuthorAndDate from "../AuthorAndDate";
import { FeaturePostProps } from "./types";
import "./style.scss";

export const FeaturePost: FC<FeaturePostProps> = ({ post }) => {
  const router = useRouter();
  const t = useTranslations("home.featurePosts");
  const localActive = useLocale() as "ru" | "en";

  const { id, image, author, date, title, text } = post;

  const handleClick = () => {
    router.push(`/${pagesPathEnam.Blog}/${id}`);
  };

  return (
    <div className="feature-post" data-testid="feature-post">
      <div className="feature-post__img-container">
        <img src={image} alt="card image" />
      </div>

      <AuthorAndDate author={author} date={date} />
      <h3 className="feature-post__title" data-testid={`feature-post-titile-${id}`}>
        {title[localActive]}
      </h3>
      <p className="text-big feature-post__text">{text[localActive]}</p>
      <button className="button-yellow" onClick={handleClick} data-testid="feature-post-btn">
        {t("featurePost.button")}
        {">"}
      </button>
    </div>
  );
};
