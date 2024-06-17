"use client";
import { FC, Fragment, useEffect, useRef, useState } from "react";

import { InfinityScrollProps } from "./types";

export const InfinityScroll: FC<InfinityScrollProps> = ({ children }) => {
  const observerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([] as JSX.Element[]);

  const [count, setCount] = useState(1);

  useEffect(() => {
    const currentRef = observerRef.current;
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

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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
