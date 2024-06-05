import { FC } from "react";
import Image from "next/image";

import { MediaList } from "components";

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

      <MediaList links={contacts} />
    </div>
  );
};

export default AuthorCard;
