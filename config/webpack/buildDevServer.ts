import type {
  Configuration as DevServerConfiguration
} from 'webpack-dev-server';

export function buildDevServer(port: number) {
  const config: DevServerConfiguration = {
    port,
    open: true,
    hot: true,
    historyApiFallback: true,
  };

  return config;
}