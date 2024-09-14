import { ReactNode, StrictMode } from 'react';

import { ThemeProvider } from '../../ThemeProvider';
import { ErrorBoundary } from '../../ErrorBoundary';

import { ComposeChildren } from '@/shared/lib/react';
import { themeColors } from '@/shared/lib/theme';

type AppProviderProps = {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ComposeChildren>
      <StrictMode />
      <ThemeProvider disableTransitionOnChange themeColors={themeColors} />
      <ErrorBoundary />
      {children}
    </ComposeChildren>
  );
};