import { FC } from "react";
import { useTranslations } from "next-intl";

import CategoryCards from "components/CategoryCards";

import "./style.scss";

export const Category: FC = () => {
  const t = useTranslations("home.category");

  return (
    <section className="category">
      <h2 className="category__title">{t("title")}</h2>
      <CategoryCards />
    </section>
  );
};
