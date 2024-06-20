import { FC } from "react";

import { AuthorCard } from "./AuthorCard";
import { CardsListProps } from "./types";
import "./style.scss";

export const CardsList: FC<CardsListProps> = ({ cards }) => {
  return (
    <div className="authors-cards-list">
      {cards.map((card) => (
        <AuthorCard key={card.id} card={card} />
      ))}
    </div>
  );
};
