/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/"
  ],
  globals: {
    __IS_DEV__: true
  },
  moduleDirectories: [
    "node_modules",
    "src"
  ],
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],
  rootDir: '../../',
  roots: [
    "<rootDir>src"
  ],
  testEnvironment: "jsdom",
  testMatch: [
    "<rootDir>/src/**/*.(spec|test).[jt]s?(x)"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/"
  ],
};

export default config;
