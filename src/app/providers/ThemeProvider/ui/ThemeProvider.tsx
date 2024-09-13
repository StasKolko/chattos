import {
  ReactNode,
  useContext
} from 'react';

import { ThemeProviderProps } from './types';

import { ThemeContext } from '@/shared/lib/theme';
import { Theme } from './Theme';

export const ThemeProvider = (props: ThemeProviderProps): ReactNode => {
  const context = useContext(ThemeContext);

  if (context) return props.children;
  return <Theme {...props} />;
};