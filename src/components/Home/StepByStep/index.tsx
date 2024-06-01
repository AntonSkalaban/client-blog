import { FC } from "react";
import { useTranslations } from "next-intl";

import { Wrapper } from "components";

import "./style.scss";

export const StepByStep: FC = () => {
  const t = useTranslations("home.stepByStep");

  return (
    <section className="step-by-step">
      <Wrapper>
        <div className="step-by-step__overlay" />
        <div className="step-by-step__container">
          <div className="step-by-step__content">
            <p className="cap">
              {t("cap.main")} <span className="step-by-step__cap_bold">{t("cap.span")}</span>
            </p>
            <h2 className="display step-by-step__title">{t("title")}</h2>
            <p className="text-normal step-by-step__info">
              {t("info.start")} <span className="step-by-step__info_yellow"> {t("info.name")}</span>{" "}
              | {t("info.date")}
            </p>
            <p className="text-normal step-by-step__text">{t("text")}</p>
            <button className="button-yellow">
              {t("button")} {">"}
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
