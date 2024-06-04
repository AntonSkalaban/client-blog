import { useRef, useState } from "react";

import { useGetWidth } from "./useGetWidth";

export const useSlider = (totalSlides: number) => {
  const sliderRef = useRef<null | HTMLDivElement>(null);
  const [page, setPage] = useState(0);

  const width = useGetWidth(sliderRef);

  const openSlideStyle = page * width;

  const isFirstSlide = page === 0;
  const isLastSlide = -page === totalSlides - 1;

  const toNextSlide = () => {
    setPage((prev) => prev - 1);
  };

  const toPrevSlide = () => {
    setPage((prev) => prev + 1);
  };

  return { sliderRef, openSlideStyle, toNextSlide, toPrevSlide, isFirstSlide, isLastSlide };
};
