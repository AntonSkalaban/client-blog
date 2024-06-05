"use client";
import React, { ComponentType, FC } from "react";

import { useIntersectionObserver } from "hooks";

export const withLazyLoad = <P extends object>(
  WrappedComponent: ComponentType<P>,
  threshold = 0,
): FC<P> => {
  return (props: P) => {
    const [isInView, ref] = useIntersectionObserver(threshold);

    return (
      <div ref={ref}>{isInView ? <WrappedComponent {...props} /> : <div>Loading...</div>}</div>
    );
  };
};
