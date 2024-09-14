import { RuleSetRule } from "webpack";

export function getSvgLoader(): RuleSetRule {
  return {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack']
  };
}