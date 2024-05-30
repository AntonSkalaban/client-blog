import { FC } from "react";

import { Slider } from "./Slider";
import "./style.scss";

export const Testimonials: FC = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__static">
        <p className="cap">testimonials</p>
        <h2>What people say about our blog</h2>
        <p className="text-big testimonials__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
      </div>
      <Slider />
    </section>
  );
};
