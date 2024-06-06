import { FC } from "react";

import { CategoryHeader, CategorySidebar, Wrapper } from "components";

const Category: FC = () => {
  return (
    <>
      <CategoryHeader />
      <Wrapper>
        <CategorySidebar />
      </Wrapper>
    </>
  );
};

export default Category;
