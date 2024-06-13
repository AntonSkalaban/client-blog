"use client";
import { FC } from "react";
import { useSearchParams } from "next/navigation";

import { CategoryHeader, CategoryPosts, CategorySidebar, Wrapper } from "components";
import { blogBosts } from "constants/index";

import { filterPosts } from "./helpers";
import styles from "./styles.module.scss";

const Category: FC<{ params: { name: string } }> = ({ params }) => {
  const searchParams = useSearchParams();

  const tag = searchParams.get("tag") || "";

  const filteredPosts = filterPosts(blogBosts, params.name, tag);

  return (
    <>
      <CategoryHeader categoryName={params.name} />
      <Wrapper>
        <div className={styles["category-page"]}>
          <CategoryPosts posts={filteredPosts} />
          <CategorySidebar />
        </div>
      </Wrapper>
    </>
  );
};

export default Category;
