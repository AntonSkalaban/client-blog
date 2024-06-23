import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});



/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  // moduleNameMapper: {
  //   // Workaround to put our SVG stub first
  //   "\\.svg": "<rootDir>/../../tools/jest/svg-stub.js",
  //   // ...nextJestConfig.moduleNameMapper,
  // },
  // transform: {
  //   // "^.+\\.tsx?$": "ts-jest",
  //   "^.+\\.svg$": "<rootDir>/svgTransform.cjs",
  // },
};

export default createJestConfig(config);
