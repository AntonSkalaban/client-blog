import { FC } from "react";

import Slider from "./Slider";
import "./style.scss";

const Testimonials: FC = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__static">
        <p className="cap">testimonials</p>
        <h2 className="testimonials__title">What people say about our blog</h2>
        <p className="text-big testimonials__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
      </div>
      <Slider />
    </section>
  );
};

export default Testimonials;
