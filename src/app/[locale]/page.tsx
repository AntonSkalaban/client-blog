import { FC } from "react";

import {
  AboutUs,
  ChooseCategory,
  FeaturedPosts,
  HomeHeader,
  JoinOurTeam,
  ListOfAuthors,
  LogosList,
  SpecialPost,
  Testimonials,
  Wrapper,
} from "components";
import { InfinityScroll } from "components/InfinityScroll";
import { authors } from "constants/index";

const Home: FC = () => {
  return (
    <>
      <HomeHeader />
      <Wrapper>
        <InfinityScroll>
          <FeaturedPosts />
          <AboutUs />
          <ChooseCategory />
          <SpecialPost />
          <Testimonials />
          <LogosList />
          <ListOfAuthors authors={authors.slice(0, 4)} />
          <JoinOurTeam />
        </InfinityScroll>
      </Wrapper>
    </>
  );
};

export default Home;
