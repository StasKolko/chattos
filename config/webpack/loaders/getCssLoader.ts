import { RuleSetRule } from "webpack";

import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function getCssLoader(isDev: boolean): RuleSetRule {
  return {
    test: /\.css$/i,
    use: [
      isDev
        ? "style-loader"
        : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          esModule: true,
          modules: {
            auto: true,
            namedExport: true,
            localIdentName: isDev
              ? '[local]--[hash:base64:5]'
              : '[hash:base64:6]'
          }
        }
      }
    ],
  }
}