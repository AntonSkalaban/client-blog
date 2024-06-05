import { FC } from "react";

import AuthorCard from "./AuthorCard";
import { authors } from "./constants";
import "./style.scss";

const CardsList: FC = () => {
  return (
    <div className="authors-cards-list">
      {authors.map((card) => (
        <AuthorCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardsList;