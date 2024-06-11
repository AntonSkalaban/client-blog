"use client";
import { FC, useState } from "react";

import { CategoryHeader, CategoryPosts, CategorySidebar, Wrapper } from "components";
// import CategoryClientComponent from "components/Category/CategoryClientComponent";
import { blogBosts } from "constants/index";

import { filterPosts } from "./helpers";
import styles from "./styles.module.scss";

// export default function Page() {
//   return (
//     <ClientComponent>
//       <ServerComponent />
//     </ClientComponent>
//   )
// }

const Category: FC<{ params: { name: string } }> = ({ params }) => {
  const [tag, setTag] = useState("");

  const hanldeTagChange = (tag: string) => {
    setTag(tag);
  };

  const filteredPosts = filterPosts(blogBosts, params.name, tag);
  return (
    <>
      <CategoryHeader categoryName={params.name} />
      <Wrapper>
        <div className={styles["category-page"]}>
          <CategoryPosts posts={filteredPosts} />
          <CategorySidebar tag={tag} onTagChange={hanldeTagChange} />
        </div>
      </Wrapper>
    </>
  );
};

export default Category;
