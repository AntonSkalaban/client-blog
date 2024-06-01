import { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import CloseUp from "assets/images/png/close-up.png";

import "./style.scss";

export const SpecialPost: FC = () => {
  const t = useTranslations("home.specialPost");

  return (
    <section className="special-post">
      <div className="special-post__img-container">
        <Image src={CloseUp} alt="special-post-img" />
      </div>
      <div className="special-post__content">
        <p className="cap">{t("cap")}</p>
        <h1 className="special-post__title">{t("title")}</h1>
        <p className="text-big special-post__text">{t("text")}</p>
        <button className="button-yellow">
          {t("button")} {">"}
        </button>
      </div>
    </section>
  );
};
