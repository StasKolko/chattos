import { createContext } from 'react';

import { UseThemeProps } from './types';

export const defaultContext: UseThemeProps = {
  setThemeMode: () => { },
  setThemeColor: () => { },
  themeModes: [],
  themeColors: [],
};

export const ThemeContext = createContext<UseThemeProps | undefined>(undefined);