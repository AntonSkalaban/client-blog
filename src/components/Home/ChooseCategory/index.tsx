"use client";
import { FC } from "react";
import { useTranslations } from "next-intl";

import { withLazyLoad } from "hoc";
import { CategoryCards } from "components";

import "./style.scss";

export const ChooseCategory: FC = withLazyLoad(() => {
  const t = useTranslations("home.category");

  return (
    <section className="choose-category">
      <h2 className="choose-category__title">{t("title")}</h2>
      <CategoryCards />
    </section>
  );
});
