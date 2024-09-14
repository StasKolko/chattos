import { RuleSetRule } from 'webpack';

import { getBabelLoader } from './loaders/getBabelLoader';
import { getCssLoader } from './loaders/getCssLoader';
import { getFileLoader } from './loaders/getFileLoader';
import { getSvgLoader } from './loaders/getSvgLoader';

export function buildLoaders(isDev: boolean) {
  const babelLoader = getBabelLoader(isDev);
  const cssLoader = getCssLoader(isDev);
  const fileLoader = getFileLoader();
  const svgLoader = getSvgLoader();

  const loaders: RuleSetRule[] = [
    svgLoader,
    fileLoader,
    babelLoader,
    cssLoader
  ];

  return loaders;
}