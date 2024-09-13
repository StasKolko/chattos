const path = require('path');

module.exports = (env) => {
  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: path.resolve(__dirname, 'dist'),
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
  };
};