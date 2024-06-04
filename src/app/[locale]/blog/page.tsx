import { FC } from "react";

import { AllCategories, AllPosts, BlogStepByStep, JoinOurTeam, Wrapper } from "components";

const Blog: FC = () => {
  return (
    <>
      <BlogStepByStep />
      <Wrapper>
        <AllPosts />
        <AllCategories />
        <JoinOurTeam />
      </Wrapper>
    </>
  );
};

export default Blog;
