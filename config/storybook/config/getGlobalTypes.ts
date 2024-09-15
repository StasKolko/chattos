import { Args } from '@storybook/react';
import { themeColors } from '@/shared/lib/theme';

export function getGlobalTypes(): Args {
  return {
    themeMode: {
      description: 'Global theme mode for components',
      toolbar: {
        title: 'Theme mode',
        icon: 'circle',
        items: [
          { value: 'light', icon: 'circlehollow', title: 'light' },
          { value: 'dark', icon: 'circle', title: 'dark' },
        ],
        dynamicTitle: true,
      },
    },
    themeColor: {
      description: 'Global theme color for components',
      toolbar: {
        title: 'Theme color',
        icon: 'beaker',
        items: themeColors,
        dynamicTitle: true,
      },
    }
  };
}