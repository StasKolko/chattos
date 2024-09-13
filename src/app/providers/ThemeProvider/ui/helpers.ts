const isServer = typeof window === 'undefined';

export const getTheme = (key: string, fallback: string, themes: string[]) => {
  if (isServer) return undefined;
  let theme;
  try {
    theme = localStorage.getItem(key);

    if (theme === null) {
      return fallback;
    }
  } catch {
    // Unsupported
  }
  return themes.includes(theme as string) ? theme : fallback;
};

export const disableAnimation = () => {
  const css = document.createElement('style');
  css.appendChild(
    document.createTextNode(
      // eslint-disable-next-line max-len
      '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
    )
  );
  document.head.appendChild(css);

  return () => {
    // Force restyle
    (() => window.getComputedStyle(document.body))();

    // Wait for next tick before removing
    setTimeout(() => {
      document.head.removeChild(css);
    }, 1);
  };
};