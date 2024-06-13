import { FC } from "react";

import { AuthorHeader, AuthorPosts } from "components";
import { authors, blogBosts } from "constants/index";

const Author: FC<{ params: { id: string } }> = ({ params }) => {
  const author = authors.find((author) => author.id === +params.id);

  if (!author) return <h1>Author not found:(</h1>;

  const userPosts = blogBosts.filter(({ authorId }) => authorId === +params.id);

  return (
    <>
      <AuthorHeader author={author} />
      <AuthorPosts posts={userPosts} />
    </>
  );
};

export default Author;
