"use client";
import { FC } from "react";
import { useTranslations } from "next-intl";

import { CategoryCards } from "components";
import { pagesPathEnam } from "types/index";

import { useRouter } from "../../../navigation";
import "./style.scss";

export const ChooseCategory: FC = () => {
  const router = useRouter();
  const t = useTranslations("home.category");

  const handleClick = (categoryName: string) => {
    router.push(`/${pagesPathEnam.Category}/${categoryName}`);
  };

  return (
    <section className="choose-category">
      <h2 className="choose-category__title">{t("title")}</h2>
      <CategoryCards onClick={handleClick} />
    </section>
  );
};
