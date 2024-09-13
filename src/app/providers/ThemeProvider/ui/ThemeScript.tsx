import { memo } from 'react';
import { ThemeProviderProps } from './types';
import { script } from './script';

/* eslint-disable */
export const ThemeScript = memo(
  ({
    storageModeKey,
    storageColorKey,
    defaultThemeMode,
    defaultThemeColor,
    themeModes,
    themeColors,
    nonce
  }: Omit<ThemeProviderProps, 'children'> & { themeModes: string[] }) => {
    const scriptArgs = JSON.stringify([
      storageModeKey,
      storageColorKey,
      defaultThemeMode,
      defaultThemeColor,
      themeModes,
      themeColors,
    ]).slice(1, -1);

    return (
      <script
        suppressHydrationWarning
        nonce={typeof window === 'undefined' ? nonce : ''}
        dangerouslySetInnerHTML={{ __html: `(${script.toString()})(${scriptArgs})` }
        }
      />
    );
  });