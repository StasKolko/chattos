import { ReactNode } from 'react';

type ThemeMode = 'dark' | 'light';

export type ThemeProviderProps = {
  themeColors?: string[] | undefined
  disableTransitionOnChange?: boolean | undefined
  storageModeKey?: string | undefined
  storageColorKey?: string | undefined
  defaultThemeMode?: ThemeMode;
  defaultThemeColor?: string | undefined
  nonce?: string | undefined
  children?: ReactNode
}