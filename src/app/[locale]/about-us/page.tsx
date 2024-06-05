import { FC } from "react";

import { AboutUsHeader, MissionVision, OurTeam, Overview, WhyWeStarted, Wrapper } from "components";

const AboutUs: FC = () => {
  return (
    <>
      <Wrapper>
        <AboutUsHeader />
        <Overview />
        <MissionVision />
        <OurTeam />
        <WhyWeStarted />
      </Wrapper>
    </>
  );
};

export default AboutUs;
