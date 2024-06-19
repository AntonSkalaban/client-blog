import { FC } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Wrapper } from "components";
import MenImage from "assets/images/png/man-with-computer.png";

import "./style.scss";

const author = "John Doe";
const date = "22 03 2024";
export const BlogStepByStep: FC = () => {
  const t = useTranslations("blog.stepByStep");

  return (
    <section className="blog-step-by-step">
      <Wrapper>
        <div className="blog-step-by-step__container">
          <div className="blog-step-by-step__text-container">
            <p className="cap cap_03 blog-step-by-step__cap">{t("cap")}</p>
            <h2>{t("title")}</h2>
            <p className="text-normal blog-step-by-step__label">{t("info", { author, date })}</p>
            <p className="blog-step-by-step__text text-big ">{t("text")}</p>
            <button className="button-yellow">
              {t("button")} {">"}
            </button>
          </div>
          <div className="blog-step-by-step__img-container">
            <Image src={MenImage} alt="men-image" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
