"use client";
import { FC } from "react";
import { useTranslations } from "next-intl";

import Slider from "./Slider";
import "./style.scss";

export const Testimonials: FC = () => {
  const t = useTranslations("home.testimonials");

  return (
    <section className="testimonials">
      <div className="testimonials__static">
        <p className="cap">{t("cap")}</p>
        <h2 className="testimonials__title">{t("title")}</h2>
        <p className="text-big testimonials__text">{t("text")}</p>
      </div>
      <Slider />
    </section>
  );
};
