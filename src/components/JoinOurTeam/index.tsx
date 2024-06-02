import { FC } from "react";
import { useTranslations } from "next-intl";

import "./style.scss";

export const JoinOurTeam: FC = () => {
  const t = useTranslations("home.joinOurTeam");

  return (
    <section className="join-our-team">
      <h2 className="join-our-team__title">{t("title")}</h2>
      <p className="text-big join-our-team__text">{t("text")}</p>
      <button className="button-yellow">{t("button")}</button>
    </section>
  );
};
