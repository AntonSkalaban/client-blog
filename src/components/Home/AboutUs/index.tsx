import { FC } from "react";
import { NavLink } from "react-router-dom";

import "./style.scss";

export const AboutUs: FC = () => {
  return (
    <section className="about-us">
      <div className="about-us__decor-line">
        <div className="about-us__decor-line_purple" />
      </div>
      <div className="about-us__container">
        <div className="about-us__block">
          <h5 className="page-title5 about-us__title5">ABOUT US</h5>
          <h3 className="page-title3 about-us__title3">
            We are a community of content writers who share their learnings
          </h3>
          <p className="about-us__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="about-us__block">
          <h5 className="page-title5 about-us__title5">Our mision</h5>
          <h3 className="page-title3 about-us__title3">
            Creating valuable content for creatives all around the world
          </h3>
          <p className="about-us__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <NavLink to="">Read More {">"}</NavLink>
    </section>
  );
};
