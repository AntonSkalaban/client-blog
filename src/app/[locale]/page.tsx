import { FC } from "react";

import {
  AboutUs,
  ChooseCategory,
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
        <ChooseCategory />
        <SpecialPost />
        <ListOfAuthors />
        <Testimonials />
        <JoinOurTeam />
      </Wrapper>
    </>
  );
};

export default Home;
