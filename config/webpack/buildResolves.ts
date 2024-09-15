import { ResolveOptions } from 'webpack';

export function buildResolves(path: string) {
  const resolves: ResolveOptions = {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    mainFiles: ['index'],
    alias: {
      '@': path,
    }
  };

  return resolves;
}