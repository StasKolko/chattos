import { Args } from '@storybook/react';

export function getInitialGlobals(): Args {
  return {
    themeMode: 'dark',
    themeColor: 'blue',
    locale: 'ru',
    locales: {
      en: { title: 'English', right: 'EN' },
      ru: { title: 'Русский', right: 'RU' },
    },
  };
}