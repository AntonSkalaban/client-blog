import { FC } from "react";

import { AboutUsHeader, MissionVision, Overview, Wrapper } from "components";

const AboutUs: FC = () => {
  return (
    <>
      <Wrapper>
        <AboutUsHeader />
        <Overview />
        <MissionVision />
      </Wrapper>
    </>
  );
};

export default AboutUs;
