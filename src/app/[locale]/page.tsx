import { FC } from "react";

import {
  AboutUs,
  Category,
  FeaturePosts,
  ListOfAuthors,
  SpecialPost,
  StepByStep,
  Testimonials,
  Wrapper,
} from "components";

const Home: FC = () => {
  return (
    <>
      <StepByStep />
      <Wrapper>
        <FeaturePosts />
        <AboutUs />
        <Category />
        <SpecialPost />
        <ListOfAuthors />
        <Testimonials />
      </Wrapper>
    </>
  );
};

export default Home;
