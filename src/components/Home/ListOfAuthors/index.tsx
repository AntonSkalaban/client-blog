import { FC } from "react";

import CardsList from "./CardsList";
import "./style.scss";

const ListOfAuthors: FC = () => {
  return (
    <section className="list-of-authors">
      <h2 className="list-of-authors__title">List of Authors</h2>
      <CardsList />
    </section>
  );
};

export default ListOfAuthors;
