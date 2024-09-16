/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';
import path from 'path';

const config: Config = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],
  moduleDirectories: ['node_modules', '<rootDir>src'],
  modulePaths: [
    '<rootDir>src',
  ],
  testMatch: [
    '<rootDir>src/**/*.(spec|test).[jt]s?(x)'
  ],
  rootDir: '../../',
  setupFilesAfterEnv: ['<rootDir>config/jest/jest-setup.ts'],
  moduleNameMapper: {
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    '\\.css$': 'identity-obj-proxy',
    '@/(.*)': '<rootDir>src/$1'
  },
  globals: {
    __IS_DEV__: true
  },
};

export default config;
