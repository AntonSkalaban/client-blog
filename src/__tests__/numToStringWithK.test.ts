import { numToStringWithK } from "components/AboutUs/Overview/helpers";

describe("numToStringWithK", () => {
  it("should return 300", () => {
    expect(numToStringWithK(300)).toEqual("300");
  });
  it("should return 3+K", () => {
    expect(numToStringWithK(3000)).toEqual("3+K");
  });
  it("should return 30+K", () => {
    expect(numToStringWithK(30000)).toEqual("30+K");
  });
  it("should return 3+KK", () => {
    expect(numToStringWithK(3000000)).toEqual("3+KK");
  });
});
