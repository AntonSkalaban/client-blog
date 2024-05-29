import { FC } from "react";

import { FeaturePosts, StepByStep, Wrapper } from "components";

export const Home: FC = () => {
  return (
    <section>
      <StepByStep />
      <Wrapper>
        <FeaturePosts />
      </Wrapper>
    </section>
  );
};
