import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { Author } from "../types";
import { mediaIcons } from "./constants";
import { AuthorCardProps } from "./types";
import "./style.scss";

const AuthorCard: FC<AuthorCardProps> = ({ card }) => {
  const { image, name, profession, company, contacts } = card;
  return (
    <div className="author-card">
      <div className="author-card__img-container">
        <Image src={image} alt="author-avatar" />
      </div>
      <div>
        <h3>{name}</h3>
        <p className="text-normal author-card__text">
          {profession} @{company}
        </p>
      </div>

      <div className="author-card__media-container">
        {Object.entries(mediaIcons).map(([key, icon]) => (
          <Link key={key} href={contacts[key as keyof Author["contacts"]]}>
            <Image className="author-card__icon" src={icon} alt="media-icon" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AuthorCard;
