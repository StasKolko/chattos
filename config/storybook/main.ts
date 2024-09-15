import type { StorybookConfig } from '@storybook/react-webpack5';

import path from 'path';

import { buildResolves } from '../webpack/buildResolves';
import { getSvgLoader } from '../webpack/loaders/getSvgLoader';
import { getCssLoader } from '../webpack/loaders/getCssLoader';

const config: StorybookConfig = {
  stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    'storybook-react-i18next',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic'
        }
      }
    }
  }),
  webpackFinal: async (config) => {
    const src: string = path.resolve(__dirname, '..', '..', 'src');
    config.resolve = buildResolves(src);

    const currentRules = config.module?.rules?.filter((rule) => !(rule?.test && rule?.test?.test('.css')));

    const svgLoader = getSvgLoader();
    const cssLoader = getCssLoader(true);
    currentRules?.push(cssLoader, svgLoader);

    return {
      ...config,
      module: { rules: [...currentRules] }
    };
  },
};
export default config;
