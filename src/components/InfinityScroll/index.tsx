"use client";
import { FC, Fragment, useEffect, useRef, useState } from "react";

import { InfinityScrollProps } from "./types";

export const InfinityScroll: FC<InfinityScrollProps> = ({ children }) => {
  const observerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([] as JSX.Element[]);

  const [count, setCount] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const newVisibleItems = children.slice(0, visibleItems.length + 1);
          setVisibleItems(newVisibleItems);
          setCount((prevCount) => ++prevCount);
        }
      },
      { threshold: 0.5 },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [count, children, visibleItems.length]);

  return (
    <div>
      {visibleItems.map((item, index) => (
        <Fragment key={index}>{item}</Fragment>
      ))}
      <div ref={observerRef} />
    </div>
  );
};
