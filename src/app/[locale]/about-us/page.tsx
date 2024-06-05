import { FC } from "react";

import {
  AboutUsHeader,
  JoinOurTeam,
  ListOfAuthors,
  MissionVision,
  OurTeam,
  Overview,
  WhyWeStarted,
  Wrapper,
} from "components";
import { authors } from "constants/index";

const AboutUs: FC = () => {
  return (
    <>
      <Wrapper>
        <AboutUsHeader />
        <Overview />
        <MissionVision />
        <OurTeam />
        <WhyWeStarted />
        <ListOfAuthors key={1} authors={authors} />
        <JoinOurTeam />
      </Wrapper>
    </>
  );
};

export default AboutUs;
