import { FC } from "react";

import {
  AboutUs,
  Category,
  FeaturePosts,
  ListOfAuthors,
  SpecialPost,
  StepByStep,
  Wrapper,
} from "components";

export const Home: FC = () => {
  return (
    <section>
      <StepByStep />
      <Wrapper>
        <FeaturePosts />
        <AboutUs />
        <Category />
        <SpecialPost />
        <ListOfAuthors />
      </Wrapper>
    </section>
  );
};
