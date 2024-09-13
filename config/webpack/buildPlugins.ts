import {
  HotModuleReplacementPlugin,
  ProgressPlugin,
  WebpackPluginInstance
} from "webpack";
import { WebpackOptions } from "./types/config";

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

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
  ]

  if (isDev) {
    plugins.push(
      new ProgressPlugin(),
      new HotModuleReplacementPlugin()
    )
  }

  return plugins;
}