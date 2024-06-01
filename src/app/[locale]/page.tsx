import { FC } from "react";

import {
  AboutUs,
  Category,
  FeaturePosts,
  JoinOurTeam,
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
        <JoinOurTeam />
      </Wrapper>
    </>
  );
};

export default Home;
