import {
  DefinePlugin,
  HotModuleReplacementPlugin,
  ProgressPlugin,
  WebpackPluginInstance
} from 'webpack';
import { WebpackOptions } from './types/config';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export function buildPlugins(options: WebpackOptions) {
  const { isDev, paths } = options;

  const plugins: WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[contenthash:8].css',
      chunkFilename: 'css/[contenthash:8].css',
    }),
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev)
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    })
  ];

  if (isDev) {
    plugins.push(
      new ProgressPlugin(),
      new HotModuleReplacementPlugin(),
      new ReactRefreshWebpackPlugin()
    );
  }

  return plugins;
}