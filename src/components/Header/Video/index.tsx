import { FC } from "react";

import "./styled.scss";

export const Video: FC = () => {
  return (
    <iframe
      className="video"
      title="YouTube video player"
      src={`https://www.youtube.com/embed/zRp4NS_eeGc?autoplay=1&mute=0&loop=1&rel=0`}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};
