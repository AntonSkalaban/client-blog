import { FC } from "react";

import Avatar from "assets/images/png/authors/auth1.png";

import { ProfileProps } from "./types";

import "./styled.scss";

export const Profile: FC<ProfileProps> = ({ name, city, country }) => {
  return (
    <div className="profile">
      <div className="profile__img-container">
        <img src={Avatar} alt="profile-avatar" />
      </div>
      <div>
        <h4>{name}</h4>
        <p className="text-big">
          {city}, {country}
        </p>
      </div>
    </div>
  );
};
