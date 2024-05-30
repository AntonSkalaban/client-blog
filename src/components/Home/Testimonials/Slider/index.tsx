import { FC, useRef, useState } from "react";

import { useGetWidth } from "components/hooks";

import { slidesData } from "./constants";
import { Slide } from "./Slide";
import "./style.scss";

export const Slider: FC = () => {
  const ref = useRef<null | HTMLDivElement>(null);

  const width = useGetWidth(ref);

  const [slidesStyle, setSlideStyle] = useState(0);

  const isFirstSlide = slidesStyle === 0;
  const isLastSlide = slidesData.length * width - width === slidesStyle * -1;

  const hanldePrevClick = () => {
    setSlideStyle((prev) => prev + width);
  };

  const hanldeNextClick = () => {
    setSlideStyle((prev) => prev - width);
  };

  return (
    <div className="slider" ref={ref}>
      <div className="slider__slides-wrapper" style={{ transform: `translate(${slidesStyle}px)` }}>
        {slidesData.map(({ id, title }) => (
          <Slide key={id} title={title} />
        ))}
      </div>
      <div className="slider__control-container">
        <button className="slide__btn" onClick={hanldePrevClick} disabled={isFirstSlide}>
          {"<"}
        </button>
        <button className="slide__btn" onClick={hanldeNextClick} disabled={isLastSlide}>
          {">"}
        </button>
      </div>
    </div>
  );
};
