"use client";
import { FC } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { withLazyLoad } from "hoc";

import "./style.scss";

export const AboutUs: FC = withLazyLoad(() => {
  const t = useTranslations("home.aboutUs");

  return (
    <section className="about-us">
      <div className="about-us__decor-line">
        <div className="about-us__decor-line_purple" />
      </div>

      <div className="about-us__block">
        <p className="cap about-us__cap">{t("aboutUs.cap")}</p>
        <h2 className="about-us__title">{t("aboutUs.title")}</h2>
        <p className="text-big about-us__text">{t("aboutUs.text")}</p>
        <Link href={""}>
          {t("aboutUs.link")} {">"}
        </Link>
      </div>

      <div className="about-us__block">
        <p className="cap">{t("ourMision.cap")}</p>
        <h3 className="about-us__title">{t("ourMision.title")}</h3>
        <p className="text-big about-us__text">{t("ourMision.text")}</p>
      </div>
    </section>
  );
});
