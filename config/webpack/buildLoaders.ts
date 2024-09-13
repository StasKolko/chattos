import { RuleSetRule } from "webpack";

import { getBabelLoader } from "./loaders/getBabelLoader";
import { getCssLoader } from "./loaders/getCssLoader";

export function buildLoaders(isDev: boolean) {
  const babelLoader = getBabelLoader(isDev);
  const cssLoader = getCssLoader(isDev);

  const loaders: RuleSetRule[] = [
    babelLoader,
    cssLoader
  ]

  return loaders;
}