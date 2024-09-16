import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';

import i18n from '@/shared/config/i18n/i18nForStorybook';
import { MemoryRouter } from 'react-router-dom';

export const renderWithProviders = (children: ReactNode) => {
  return (
    render(
      <I18nextProvider i18n={i18n}>
        <MemoryRouter initialEntries={['/', '/about']}>
          {children}
        </MemoryRouter>
      </I18nextProvider>
    )
  );
};