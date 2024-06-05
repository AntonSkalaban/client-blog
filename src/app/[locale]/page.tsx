import { FC } from "react";

import {
  AboutUs,
  ChooseCategory,
  FeaturedPosts,
  JoinOurTeam,
  ListOfAuthors,
  SpecialPost,
  StepByStep,
  Wrapper,
} from "components";
import { authors } from "constants/index";

const Home: FC = () => {
  return (
    <>
      <StepByStep />
      <Wrapper>
        <FeaturedPosts />
        <AboutUs />
        <ChooseCategory />
        <SpecialPost />
        <ListOfAuthors authors={authors.slice(0, 4)} />
        <JoinOurTeam />
      </Wrapper>
    </>
  );
};

export default Home;
