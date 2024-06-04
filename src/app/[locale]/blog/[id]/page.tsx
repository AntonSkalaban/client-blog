import { notFound } from "next/navigation";
import { useLocale } from "next-intl";

import { BlogPostHeader, JoinOurTeam, PostDescription, PostImage, Wrapper } from "components";
import { blogBosts } from "constants/index";

export default function BlogPost({ params }: { params: { id: string } }) {
  const localActive = useLocale() as "ru" | "en";

  const post = blogBosts.find((post) => post.id === +params.id);

  if (!post) return notFound();

  return (
    <>
      <BlogPostHeader title={post.title[localActive]} category={post.category[localActive]} />
      <PostImage img={post.img} />
      <Wrapper>
        <PostDescription description={post.description[localActive]} />
        <JoinOurTeam />
      </Wrapper>
    </>
  );
}
