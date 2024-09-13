const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  }

  return {
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
  };
};