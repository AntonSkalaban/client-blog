import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jest-environment-jsdom",
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  transform: { "\\.svg$": "svg-jest" },
};

export default createJestConfig(config);
