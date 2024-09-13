export type WebpackMode = 'development' | 'production';

export type WebpackEnv = {
  mode: WebpackMode;
  port: number;
};

export type WebpackNamePaths = 'entry' | 'output' | 'html' | 'src';

export type WebpackPaths = {
  [key in WebpackNamePaths]: string;
};

export type WebpackOptions = {
  mode: WebpackMode;
  paths: WebpackPaths;
  isDev: boolean;
  port: number;
};