export type WebpackMode = 'development' | 'production';

export type WebpackEnv = {
  mode: WebpackMode;
};

export type WebpackNamePaths = 'entry' | 'output' | 'html';

export type WebpackPaths = {
  [key in WebpackNamePaths]: string;
};

export type WebpackOptions = {
  mode: WebpackMode;
  paths: WebpackPaths;
  isDev: boolean;
};