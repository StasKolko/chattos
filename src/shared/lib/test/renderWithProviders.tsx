import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';

import i18n from '@/shared/config/i18n/i18nForStorybook';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

export const renderWithProviders = ({
  children,
  initialState,
  initialEntries = ['/', '/about'],
}: {
  children: ReactNode;
  initialState?: StateSchema;
  initialEntries?: string[];
}) => {
  return (
    render(
      <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={i18n}>
          <MemoryRouter initialEntries={initialEntries}>
            {children}
          </MemoryRouter>
        </I18nextProvider>
      </StoreProvider>
    )
  );
};