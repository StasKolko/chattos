import { RuleSetRule } from "webpack";

export function buildLoaders(isDev: boolean) {
  const babelLoader = {
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          '@babel/preset-env',
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

  const loaders: RuleSetRule[] = [
    babelLoader
  ]

  return loaders;
}