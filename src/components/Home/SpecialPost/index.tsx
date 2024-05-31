import { FC } from "react";
import Image from "next/image";

import CloseUp from "assets/images/png/close-up.png";

import "./style.scss";

const SpecialPost: FC = () => {
  return (
    <section className="special-post">
      <div className="special-post__img-container">
        <Image src={CloseUp} alt="special-post-img" />
      </div>
      <div className="special-post__content">
        <p className="cap">Why we started</p>
        <h1 className="special-post__title">
          It started out as a simple idea and evolved into our passion
        </h1>
        <p className="text-big special-post__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip.
        </p>
        <button className="button-yellow">Discover our story {">"}</button>
      </div>
    </section>
  );
};

export default SpecialPost;
