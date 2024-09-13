import { ResolveOptions } from "webpack";
import { WebpackPaths } from "./types/config";

export function buildResolves(paths: WebpackPaths) {
  const resolves: ResolveOptions = {
    extensions: ['.tsx', '.ts', '.js'],
  }

  return resolves;
}