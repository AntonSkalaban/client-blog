import { FC } from "react";

import AboutUs from "components/Home/AboutUs";
import Category from "components/Home/Category";
import FeaturePosts from "components/Home/FeaturedPosts";
import ListOfAuthors from "components/Home/ListOfAuthors";
import SpecialPost from "components/Home/SpecialPost";
import StepByStep from "components/Home/StepByStep";
import Testimonials from "components/Home/Testimonials";
import Wrapper from "components/UI/Wrapper";

const Home: FC = () => {
  return (
    <section>
      <StepByStep />
      <Wrapper>
        <FeaturePosts />
        <AboutUs />
        <Category />
        <SpecialPost />
        <ListOfAuthors />
        <Testimonials />
      </Wrapper>
    </section>
  );
};

export default Home;
