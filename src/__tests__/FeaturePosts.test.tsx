import { render } from "@testing-library/react";
import { FeaturedPosts } from "components";

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

jest.mock("react-map-gl/maplibre", () => ({
  Map: () => ({}),
}));

describe("FeaturePosts", () => {
  it("should change posts", () => {
    const { getByTestId, findByTestId } = render(<FeaturedPosts />);

    const featurePost = getByTestId("feature-post");
    getByTestId("post-2").click();
    const featurePost2 = findByTestId("feature-post-titile-2");

    expect(featurePost).toBeDefined();
    expect(featurePost2).toBeDefined();
  });
});
