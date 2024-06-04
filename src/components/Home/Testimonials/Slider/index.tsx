"use client";

import { FC } from "react";

import { useSlider } from "hooks";

import { slidesData } from "./constants";
import Slide from "./Slide";
import "./style.scss";

const Slider: FC = () => {
  const { sliderRef, openSlideStyle, toNextSlide, toPrevSlide, isFirstSlide, isLastSlide } =
    useSlider(slidesData.length);

  const hanldePrevClick = () => {
    toPrevSlide();
  };

  const hanldeNextClick = () => {
    toNextSlide();
  };

  return (
    <div className="slider" ref={sliderRef}>
      <div
        className="slider__slides-wrapper"
        style={{ transform: `translate(${openSlideStyle}px)` }}
      >
        {slidesData.map(({ id, title }) => (
          <Slide key={id} title={title} />
        ))}
      </div>
      <div className="slider__control-container">
        <button className="slider__btn" onClick={hanldePrevClick} disabled={isFirstSlide}>
          {"<"}
        </button>
        <button className="slider__btn" onClick={hanldeNextClick} disabled={isLastSlide}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Slider;
