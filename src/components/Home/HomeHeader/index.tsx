import { FC } from "react";
import { useTranslations } from "next-intl";

import { Wrapper } from "components";

import "./style.scss";

export const HomeHeader: FC = () => {
  const t = useTranslations("home.stepByStep");

  return (
    <section className="home-header">
      <div className="home-header__overlay" />
      <div className="home-header__container">
        <Wrapper>
          <div className="home-header__content">
            <p className="cap">
              {t("cap.main")} <span className="home-header__cap_bold">{t("cap.span")}</span>
            </p>
            <h2 className="display home-header__title">{t("title")}</h2>
            <p className="text-normal home-header__info">
              {t("info.start")} <span className="home-header__info_yellow"> {t("info.name")}</span>{" "}
              | {t("info.date")}
            </p>
            <p className="text-normal home-header__text">{t("text")}</p>
            <button className="button-yellow home-header__btn">
              {t("button")} {">"}
            </button>
          </div>
        </Wrapper>
      </div>
    </section>
  );
};
