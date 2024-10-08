import { Configuration } from 'webpack';
import { WebpackOptions } from './types/config';

import { buildPlugins } from './buildPlugins';
import { buildResolves } from './buildResolves';
import { buildLoaders } from './buildLoaders';
import { buildDevServer } from './buildDevServer';

import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

export function buildWebpackConfig(options: WebpackOptions) {
  const { isDev, mode, paths, port } = options;

  const config: Configuration = {
    mode,
    entry: paths.entry,
    output: {
      filename: isDev
        ? '[name]_[contenthash:8].js'
        : '[contenthash:8].js',
      path: paths.output,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(isDev),
    },
    resolve: buildResolves(paths.src),
    optimization: {
      minimize: true,
      minimizer: [
        '...',
        new CssMinimizerPlugin()
      ]
    },
    devtool: isDev
      ? 'inline-source-map'
      : undefined,
    devServer: isDev
      ? buildDevServer(port)
      : undefined,
  };

  return config;
}