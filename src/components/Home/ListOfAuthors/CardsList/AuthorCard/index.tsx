import { FC } from "react";
import { NavLink } from "react-router-dom";

import { Author } from "../types";
import { mediaIcons } from "./constants";
import { AuthorCardProps } from "./types";
import "./style.scss";

export const AuthorCard: FC<AuthorCardProps> = ({ card }) => {
  const { image, name, profession, company, contacts } = card;
  return (
    <div className="author-card">
      <div className="author-card__img-container">
        <img src={image} />
      </div>
      <div>
        <h3>{name}</h3>
        <p className="text-normal author-card__text">
          {profession} @{company}
        </p>
      </div>

      <div className="author-card__media-container">
        {Object.entries(mediaIcons).map(([key, icon]) => (
          <NavLink key={key} to={contacts[key as keyof Author["contacts"]]}>
            <img src={icon} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};
