import { FC } from "react";

import { Wrapper } from "components";

import "./style.scss";

export const StepByStep: FC = () => {
  return (
    <section className="step-by-step">
      <Wrapper>
        <div className="step-by-step__overlay" />
        <div className="step-by-step__container">
          <div className="step-by-step__content">
            <p className="cap step-by-step__subtitle">
              Posted on <span className="step-by-step__subtitle_bold">startup</span>
            </p>
            <h2 className="display step-by-step__title">
              Step-by-step guide to choosing great font pairs
            </h2>
            <p className="text-normal step-by-step__info">
              By <span className="step-by-step__info_yellow">James West</span> | May 23, 2022{" "}
            </p>
            <p className="text-normal step-by-step__text">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <button className="button-yellow">Read More {">"}</button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
