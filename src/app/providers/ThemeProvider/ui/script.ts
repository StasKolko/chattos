export type ThemeScriptProps = {
  storageModeKey: string;
  storageColorKey: string;
  defaultThemeMode: 'dark' | 'light';
  defaultThemeColor: string;
  themeModes: string[];
  themeColors: string[];
}

export const script = (
  { storageModeKey,
    storageColorKey,
    defaultThemeMode,
    defaultThemeColor,
    themeModes,
    themeColors }: ThemeScriptProps
): void => {
  const el = document.documentElement;
  const classes = [...themeColors, ...themeModes];

  function updateDOM(mode: string, color: string) {
    el.classList.remove(...classes);
    el.classList.add(mode, color);

    el.style.colorScheme = mode;
  }

  try {
    let themeMode = localStorage.getItem(storageModeKey);
    let themeColor = localStorage.getItem(storageColorKey);

    if (!themeMode || !themeModes.includes(themeMode)) {
      themeMode = defaultThemeMode;
    }

    if (!themeColor || !themeColors.includes(themeColor)) {
      themeColor = defaultThemeColor;
    }

    updateDOM(themeMode, themeColor);
  } catch {
    //
  }
};