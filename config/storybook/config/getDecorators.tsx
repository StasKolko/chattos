import { Decorator } from '@storybook/react';
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';

import { ThemeProvider } from '@/app/providers/ThemeProvider';
import i18n from '@/shared/config/i18n/i18nForStorybook';
import { themeColors, useTheme } from '@/shared/lib/theme';
import { ComposeChildren } from '@/shared/lib/react';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { MemoryRouter } from 'react-router-dom';

export function getDecorators(): Decorator[] {
  return [
    (Story, context) => {
      const { themeMode, themeColor } = context.globals;

      const { setThemeMode, setThemeColor } = useTheme();

      useEffect(() => {
        setThemeMode(themeMode);
        setThemeColor(themeColor);
      }, [themeMode, themeColor, setThemeMode, setThemeColor]);

      return (
        <Story />
      );
    },
    (Story) => {
      return (
        <ComposeChildren>
          <Suspense fallback={<div> loading translations...</div>} />
          <I18nextProvider i18n={i18n} />
          <ThemeProvider disableTransitionOnChange themeColors={themeColors} />
          <ErrorBoundary />
          <MemoryRouter initialEntries={['/']} />
          <Story />
        </ComposeChildren>
      );
    }
  ];
} 