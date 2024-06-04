import { notFound } from "next/navigation";

import { JoinOurTeam } from "components/JoinOurTeam";
import { Wrapper } from "components/UI";
import { blogBosts } from "constants/blogPosts";

export default function BlogPost({ params }: { params: { id: string } }) {
    // const locale = 
  const post = blogBosts.find(({ id }) => +id === +id);

  if (!post) return notFound();
//   dangerouslySetInnerHTML={{ __html: post.description }}
  return (
    <>
      <Wrapper>
        <section ></section>
        <JoinOurTeam />
      </Wrapper>
    </>
  );
}
