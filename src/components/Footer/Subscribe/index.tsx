import { FC } from "react";
import { useTranslations } from "next-intl";

import "./style.scss";

export const Subscribe: FC = () => {
  const t = useTranslations("footer.subscribe");

  return (
    <section className="subscribe">
      <h2 className="subscribe__title">{t("title")}</h2>
      <form className="subscribe__form">
        <input className="subscribe__email" type="email" placeholder={t("emael")} />
        <button className="button-yellow">{t("button")}</button>
      </form>
    </section>
  );
};
