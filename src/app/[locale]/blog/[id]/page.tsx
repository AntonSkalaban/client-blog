import { notFound } from "next/navigation";
import { useLocale } from "next-intl";

import {
  BlogPostHeader,
  JoinOurTeam,
  PostDescription,
  PostImage,
  WhatToReadNext,
  Wrapper,
} from "components";
import { blogBosts } from "constants/index";

function BlogPost({ params }: { params: { id: string } }) {
  const localActive = useLocale() as "ru" | "en";

  const post = blogBosts.find((post) => post.id === +params.id);

  if (!post) return notFound();

  return (
    <>
      <BlogPostHeader title={post.title[localActive]} category={post.category[localActive]} />
      <Wrapper>
        <PostImage img={post.img} />
      </Wrapper>
      <PostDescription description={post.description[localActive]} />

      <Wrapper>
        <WhatToReadNext />
      </Wrapper>
      <JoinOurTeam />
    </>
  );
}
export default BlogPost;
