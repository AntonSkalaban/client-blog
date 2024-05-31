import { FC } from "react";
import Link from "next/link";

import "./style.scss";

const AboutUs: FC = () => {
  return (
    <section className="about-us">
      <div className="about-us__decor-line">
        <div className="about-us__decor-line_purple" />
      </div>

      <div className="about-us__block">
        <p className="cap about-us__cap">ABOUT US</p>
        <h2 className="about-us__title">
          We are a community of content writers who share their learnings
        </h2>
        <p className="text-big about-us__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <Link href={""}>Read More {">"}</Link>
      </div>
      <div className="about-us__block">
        <p className="cap">Our mision</p>
        <h3 className="about-us__title">
          Creating valuable content for creatives all around the world
        </h3>
        <p className="text-big about-us__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
