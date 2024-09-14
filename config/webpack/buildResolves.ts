import { ResolveOptions } from 'webpack';
import { WebpackPaths } from './types/config';

export function buildResolves(paths: WebpackPaths) {
  const resolves: ResolveOptions = {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    mainFiles: ['index'],
    alias: {
      '@': paths.src
    }
  };

  return resolves;
}