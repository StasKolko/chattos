import {
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react';

import {
  disableAnimation,
  getTheme
} from './helpers';

import { ThemeProviderProps } from './types';

import { ThemeScript } from './ThemeScript';

import { ThemeContext } from '@/shared/lib/theme';

const defaultModes = ['light', 'dark'];
const defaultColors = ['blue', 'yellow'];

export const Theme = ({
  disableTransitionOnChange = false,
  storageModeKey = 'themeMode',
  storageColorKey = 'themeColor',
  themeColors = defaultColors,
  defaultThemeMode = 'dark',
  defaultThemeColor = 'blue',
  children,
  nonce
}: ThemeProviderProps) => {
  const [themeMode, setThemeModeState] = useState(
    () => getTheme(storageModeKey, defaultThemeMode, defaultModes));
  const [themeColor, setThemeColorState] = useState(
    () => getTheme(storageColorKey, defaultThemeColor, themeColors));

  const applyThemeMode = useCallback((mode: string) => {
    if (!mode || !defaultModes.includes(mode)) return;

    const enable = disableTransitionOnChange ? disableAnimation() : null;
    const d = document.documentElement;

    d.classList.remove(...defaultModes);
    d.classList.add(mode);
    d.style.colorScheme = mode;

    enable?.();
  }, []);

  const applyThemeColor = useCallback((color: string) => {
    if (!color || !themeColors.includes(color)) return;

    const enable = disableTransitionOnChange ? disableAnimation() : null;
    const d = document.documentElement;

    d.classList.remove(...themeColors);
    d.classList.add(color);

    enable?.();
  }, []);

  const setThemeMode = useCallback(
    (value: string | ((theme: string) => string)) => {
      const newMode = typeof value === 'function' ? value(themeMode as string) : value;
      setThemeModeState(newMode);

      // Save to storage
      try {
        localStorage.setItem(storageModeKey, newMode);
      } catch {
        // Unsupported
      }
    },
    [themeMode]
  );

  const setThemeColor = useCallback(
    (value: string | ((theme: string) => string)) => {
      const newColor = typeof value === 'function' ? value(themeColor as string) : value;
      setThemeColorState(newColor);

      // Save to storage
      try {
        localStorage.setItem(storageColorKey, newColor);
      } catch {
        // Unsupported
      }
    },
    [themeColor]
  );

  useEffect(() => {
    const handleStorageMode = (e: StorageEvent) => {
      if (e.key !== storageModeKey) {
        return;
      }

      // If default theme set, use it if localstorage === null (happens on local storage manual deletion)
      const mode = e.newValue || defaultThemeMode;
      setThemeMode(mode);
    };

    window.addEventListener('storage', handleStorageMode);
    return () => window.removeEventListener('storage', handleStorageMode);
  }, [setThemeMode]);

  useEffect(() => {
    const handleStorageColor = (e: StorageEvent) => {
      if (e.key !== storageColorKey) {
        return;
      }

      // If default theme set, use it if localstorage === null (happens on local storage manual deletion)
      const color = e.newValue || defaultThemeColor;
      setThemeColor(color);
    };

    window.addEventListener('storage', handleStorageColor);
    return () => window.removeEventListener('storage', handleStorageColor);
  }, [setThemeColor]);

  useEffect(() => {
    applyThemeMode(themeMode as string);
  }, [themeMode]);

  useEffect(() => {
    applyThemeColor(themeColor as string);
  }, [themeColor]);

  const providerValue = useMemo(
    () => ({
      themeMode,
      themeColor,
      setThemeMode,
      setThemeColor,
      themeModes: defaultModes,
      themeColors,
    }),
    [
      themeMode,
      themeColor,
      setThemeMode,
      setThemeColor,
      themeColors
    ]);

  return (
    // eslint-disable-next-line
    // @ts-ignore
    <ThemeContext.Provider value={providerValue}>
      <ThemeScript
        {...{
          storageModeKey,
          storageColorKey,
          defaultThemeMode,
          defaultThemeColor,
          themeModes: defaultModes,
          themeColors,
          nonce
        }}
      />

      {children}
    </ThemeContext.Provider>
  );
};