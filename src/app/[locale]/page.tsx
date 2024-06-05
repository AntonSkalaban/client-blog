import { FC } from "react";

import { JoinOurTeam, lazyComponents, StepByStep, Wrapper } from "components";

const Home: FC = () => {
  return (
    <>
      <StepByStep />
      <Wrapper>
        {lazyComponents.map((Component) => (
          <Component key={Component.name} />
        ))}
        <JoinOurTeam />
      </Wrapper>
    </>
  );
};

export default Home;
