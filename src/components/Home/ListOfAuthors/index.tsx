"use client";
import { FC } from "react";
import { useTranslations } from "next-intl";

import { withLazyLoad } from "hoc";

import CardsList from "./CardsList";
import "./style.scss";

export const ListOfAuthors: FC = withLazyLoad(() => {
  const t = useTranslations("home.listOfAuthors");

  return (
    <section className="list-of-authors">
      <h2 className="list-of-authors__title">{t("title")}</h2>
      <CardsList />
    </section>
  );
});