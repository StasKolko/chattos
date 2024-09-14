import { useContext } from 'react';

import {
  defaultContext,
  ThemeContext
} from './ThemeContext';

export const useTheme = () => useContext(ThemeContext) ?? defaultContext;