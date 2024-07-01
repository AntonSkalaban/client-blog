"use client";
import { FC } from "react";
import { useTranslations } from "next-intl";

import { Wrapper } from "components";
import { pagesPathEnam } from "types/pages";

import { useRouter } from "../../../navigation";
import "./style.scss";

export const SpecialPost: FC = () => {
  const router = useRouter();
  const t = useTranslations("home.specialPost");

  const handleClick = () => {
    router.push(`/${pagesPathEnam.AnoutUs}`);
  };

  return (
    <section className="special-post">
      <Wrapper>
        <div className="special-post__content">
          <p className="cap">{t("cap")}</p>
          <h1 className="special-post__title">{t("title")}</h1>
          <p className="text-big special-post__text">{t("text")}</p>
          <button className="button-yellow" onClick={handleClick}>
            {t("button")} {">"}
          </button>
        </div>
      </Wrapper>
    </section>
  );
};
