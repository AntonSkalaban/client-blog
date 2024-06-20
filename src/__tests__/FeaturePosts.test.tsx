import { fireEvent, render } from "@testing-library/react";
import { FeaturedPosts } from "components";

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

jest.mock("react-map-gl/maplibre", () => ({
  Map: () => ({}),
}));

describe("FeaturePosts", () => {
  it("should change posts", async () => {
    const { getByTestId, findByTestId } = render(<FeaturedPosts />);

    fireEvent.click(getByTestId("post-2"));

    expect(findByTestId("feature-post-titile-2")).toBeDefined();
  });
});
