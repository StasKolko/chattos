import { renderWithProviders } from '@/shared/lib/test';
import { AppNav, appNavPaths } from './AppNav';
import { screen } from '@testing-library/react';

describe('AppNav', () => {
  it('should render navigation links based on predefined paths', () => {
    renderWithProviders(
      <AppNav />
    );

    const nav = screen.getByTestId('app-nav');
    expect(nav).toBeInTheDocument();
    expect(nav.querySelectorAll('li').length).toBe(appNavPaths.length);
    appNavPaths.forEach(({ title }) => {
      expect(nav).toHaveTextContent(title);
    });
  });
});