import path from 'path';

import { Configuration } from 'webpack';
import {
  WebpackEnv,
  WebpackMode,
  WebpackPaths
} from './config/webpack/types/config';

import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';

export default (env: WebpackEnv) => {
  const mode: WebpackMode = env.mode || 'development';
  const isDev = mode === 'development';
  const paths: WebpackPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  }

  const config: Configuration = buildWebpackConfig({
    isDev,
    paths,
    mode
  });

  return config;
};