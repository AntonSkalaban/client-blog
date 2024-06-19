import { FC } from "react";
import Image from "next/image";

import { MediaList } from "components";
import { pagesPathEnam } from "types/pages";

import { useRouter } from "../../../../navigation";
import { AuthorCardProps } from "./types";
import "./style.scss";

const AuthorCard: FC<AuthorCardProps> = ({ card }) => {
  const router = useRouter();

  const { id, image, name, profession, company, contacts } = card;

  const handleClick = () => {
    router.push(`/${pagesPathEnam.Author}/${id}`);
  };

  return (
    <article className="author-card" onClick={handleClick}>
      <div className="author-card__img-container">
        <Image className="author-card__img" src={image} alt="author-avatar" />
      </div>
      <div className="author-card__content-container">
        <h3 className="author-card__title">{name}</h3>
        <p className="text-normal author-card__text">
          {profession} @{company}
        </p>

        <MediaList links={contacts} />
      </div>
    </article>
  );
};

export default AuthorCard;
