import { FC } from "react";

import { AboutUsHeader, MissionVision, OurTeam, Overview, Wrapper } from "components";

const AboutUs: FC = () => {
  return (
    <>
      <Wrapper>
        <AboutUsHeader />
        <Overview />
        <MissionVision />
        <OurTeam />
      </Wrapper>
    </>
  );
};

export default AboutUs;
