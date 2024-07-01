"use client";
import { FC } from "react";
import { useTranslations } from "next-intl";

import { pagesPathEnam } from "types/pages";

import { useRouter } from "../../navigation";
import "./style.scss";

export const JoinOurTeam: FC = () => {
  const router = useRouter();
  const t = useTranslations("home.joinOurTeam");

  const handleClick = () => {
    router.push(`/${pagesPathEnam.ContacUs}`);
  };

  return (
    <section className="join-our-team">
      <h2 className="join-our-team__title">{t("title")}</h2>
      <p className="text-big join-our-team__text">{t("text")}</p>
      <button className="button-yellow" onClick={handleClick}>
        {t("button")}
      </button>
    </section>
  );
};
