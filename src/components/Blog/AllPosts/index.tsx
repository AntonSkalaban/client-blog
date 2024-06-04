"use client";
import { FC, useMemo } from "react";

import { useSlider } from "hooks";
import { blogBosts } from "constants/index";
import { chunkArray } from "utils";
import { BlogPost } from "types";

import { Post } from "./Post";
import styles from "./styles.module.scss";

export const AllPosts: FC = () => {
  const chunkedArray = useMemo(() => chunkArray<BlogPost>(blogBosts), []);

  const { sliderRef, openSlideStyle, isFirstSlide, isLastSlide, toNextSlide, toPrevSlide } =
    useSlider(chunkedArray.length);

  const hanldePrevClick = () => {
    toPrevSlide();
  };

  const hanldeNextClick = () => {
    toNextSlide();
  };

  return (
    <section className={styles["all-posts"]}>
      <h1 className={styles["all-posts__title"]}>All posts</h1>

      <div className={styles.slider} ref={sliderRef}>
        <div
          className={styles["slider__sliders-wrapper"]}
          style={{ transform: `translate(${openSlideStyle}px)` }}
        >
          {chunkedArray.map((arr, index) => (
            <div className={styles.slider__slide} key={index}>
              {arr.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.controls}>
        <button className={styles.controls__btn} onClick={hanldePrevClick} disabled={isFirstSlide}>
          {"<"} Prev
        </button>
        <button className={styles.controls__btn} onClick={hanldeNextClick} disabled={isLastSlide}>
          Next {">"}
        </button>
      </div>
    </section>
  );
};
