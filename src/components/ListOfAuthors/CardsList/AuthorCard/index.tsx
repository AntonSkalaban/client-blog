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
        <Image src={image} alt="author-avatar" />
      </div>
      <div>
        <h3>{name}</h3>
        <p className="text-normal author-card__text">
          {profession} @{company}
        </p>
      </div>

      <MediaList links={contacts} />
    </article>
  );
};

export default AuthorCard;
