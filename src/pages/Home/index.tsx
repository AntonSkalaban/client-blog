import { FC } from "react";

import { AboutUs, FeaturePosts, StepByStep, Wrapper } from "components";

export const Home: FC = () => {
  return (
    <section>
      <StepByStep />
      <Wrapper>
        <FeaturePosts />
        <AboutUs />
      </Wrapper>
    </section>
  );
};
