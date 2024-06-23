import { fireEvent, render } from "@testing-library/react";
import { FeaturedPosts } from "components";

jest.mock("assets/images/svg/media/Facebook/Negative.svg", () => "svg");
jest.mock("assets/images/svg/media/Instagram/Negative.svg", () => "svg");
jest.mock("assets/images/svg/media/LinkedIn/Negative.svg", () => "svg");
jest.mock("assets/images/svg/media/Twitter/Negative.svg", () => "svg");

jest.mock("next-intl", () => ({
  useTranslations: jest.fn().mockReturnValue((key: string) => `Mocked ${key}`),
}));

jest.mock("../../src/navigation", () => ({
  useRouter: () => ({}),
}));

jest.mock("react-map-gl/maplibre", () => ({
  useRouter: () => ({}),
}));

describe("FeaturePosts", () => {
  it("should change posts", async () => {
    const { getByTestId, findByTestId } = render(<FeaturedPosts />);

    fireEvent.click(getByTestId("post-2"));

    expect(findByTestId("feature-post-titile-2")).toBeDefined();
  });
});
