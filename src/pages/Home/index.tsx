import { FC } from "react";

import { AboutUs, Category, FeaturePosts, StepByStep, Wrapper } from "components";

export const Home: FC = () => {
  return (
    <section>
      <StepByStep />
      <Wrapper>
        <FeaturePosts />
        <AboutUs />
        <Category />
      </Wrapper>
    </section>
  );
};
