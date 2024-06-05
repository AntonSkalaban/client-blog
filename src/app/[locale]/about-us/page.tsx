import { FC } from "react";

import { AboutUsHeader, Overview, Wrapper } from "components";

const AboutUs: FC = () => {
  return (
    <>
      <Wrapper>
        <AboutUsHeader />
        <Overview />
      </Wrapper>
    </>
  );
};

export default AboutUs;
