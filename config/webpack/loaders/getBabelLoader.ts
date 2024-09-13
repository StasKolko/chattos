import { RuleSetRule } from "webpack";

export function getBabelLoader(isDev: boolean): RuleSetRule {
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
        ],
        plugins: [
          isDev
            ? undefined
            : "babel-plugin-jsx-remove-data-test-id"
        ].filter(Boolean)
      }
    }
  }
}