import { RuleSetRule } from 'webpack';

export function getFileLoader(): RuleSetRule {
  return {
    test: /\.(png|jp(e*)g|gif|woff|woff2)$/,
    type: 'asset/resource',
  };
}