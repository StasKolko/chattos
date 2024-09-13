import {
  HotModuleReplacementPlugin,
  ProgressPlugin,
  WebpackPluginInstance
} from "webpack";
import { WebpackOptions } from "./types/config";

import HtmlWebpackPlugin from 'html-webpack-plugin';

export function buildPlugins(options: WebpackOptions) {
  const { isDev, paths } = options;

  const plugins: WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
      template: paths.html
    })
  ]

  if (isDev) {
    plugins.push(
      new ProgressPlugin(),
      new HotModuleReplacementPlugin()
    )
  }

  return plugins;
}