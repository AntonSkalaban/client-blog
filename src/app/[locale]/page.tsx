import { FC } from "react";

import {
  AboutUs,
  ChooseCategory,
  FeaturedPosts,
  HomeHeader,
  ListOfAuthors,
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
          <ListOfAuthors authors={authors.slice(0, 4)} />
        </InfinityScroll>
      </Wrapper>
    </>
  );
};

export default Home;
