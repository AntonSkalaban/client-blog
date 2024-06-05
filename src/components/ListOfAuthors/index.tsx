"use client";
import { FC } from "react";
import { useTranslations } from "next-intl";

import { withLazyLoad } from "hoc";
import { Author } from "types";

import CardsList from "./CardsList";
import "./style.scss";

interface ListOfAuthorsProps {
  authors: Author[];
}
export const ListOfAuthors: FC<ListOfAuthorsProps> = withLazyLoad(({ authors }) => {
  const t = useTranslations("home.listOfAuthors");

  return (
    <section className="list-of-authors">
      <h2 className="list-of-authors__title">{t("title")}</h2>
      <CardsList cards={authors} />
    </section>
  );
});
