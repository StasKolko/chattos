import path from 'path';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';

type WebpackMode = 'development' | 'production';
type WebpackEnv = {
  mode: WebpackMode;
};
type WebpackNamePaths = 'entry' | 'output' | 'html';
type WebpackPaths = {
  [key in WebpackNamePaths]: string;
};

export default (env: WebpackEnv) => {
  const mode: WebpackMode = env.mode || 'development';
  const isDev = mode === 'development';
  const paths: WebpackPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }

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
    plugins: [new HtmlWebpackPlugin({
      template: paths.html
    })],
    module: {
      rules: [
        {
          test: /\.(js|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript'
              ]
            }
          }
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: isDev
      ? 'inline-source-map'
      : undefined,
  };

  return config;
};