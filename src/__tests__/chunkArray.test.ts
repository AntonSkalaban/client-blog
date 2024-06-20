import { chunkArray } from "utils/index";

const array = Array.from({ length: 20 }).map((_, i) => i + 1);
const chunkedArray5 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];
const chunkedArray7 = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20],
];

describe("chunkArray", () => {
  it("should return array ", () => {
    expect(chunkArray(array)).toEqual(chunkedArray5);
  });
  it("should return array ", () => {
    expect(chunkArray(array, 7)).toEqual(chunkedArray7);
  });
});
