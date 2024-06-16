import { FC } from "react";

import {
  AboutUs,
  ChooseCategory,
  FeaturedPosts,
  HomeHeader,
  JoinOurTeam,
  ListOfAuthors,
  SpecialPost,
  Wrapper,
} from "components";
import { authors } from "constants/index";

const Home: FC = () => {
  return (
    <>
      <HomeHeader />
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
