import { FC } from "react";

import { Author } from "types";

import AuthorCard from "./AuthorCard";
import "./style.scss";

interface CardsListProps {
  cards: Author[];
}
const CardsList: FC<CardsListProps> = ({ cards }) => {
  return (
    <div className="authors-cards-list">
      {cards.map((card) => (
        <AuthorCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardsList;
