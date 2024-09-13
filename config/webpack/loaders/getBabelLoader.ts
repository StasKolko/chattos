import { RuleSetRule } from "webpack";

export function getBabelLoader(): RuleSetRule {
  return {
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          ['@babel/preset-env',
            {
              targets: { node: 'current' }
            }
          ],
          '@babel/preset-typescript',
          [
            "@babel/preset-react",
            {
              "runtime": "automatic"
            }
          ]
        ]
      }
    }
  }
}