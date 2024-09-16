import { Header } from './Header';
import { renderWithProviders } from '@/shared/lib/test';

describe('Header', () => {
  it('should render the header component with all elements', () => {
    const { getByTestId } = renderWithProviders(<Header />);

    expect(getByTestId('header')).toBeInTheDocument();
    expect(getByTestId('header__container')).toBeInTheDocument();
    expect(getByTestId('header__navigation')).toBeInTheDocument();
    expect(getByTestId('hamburger-menu-icon')).toBeInTheDocument();
    expect(getByTestId('app-nav')).toBeInTheDocument();
    expect(getByTestId('header__actions')).toBeInTheDocument();
    expect(getByTestId('theme-color-switcher')).toBeInTheDocument();
    expect(getByTestId('theme-mode-switcher')).toBeInTheDocument();
    expect(getByTestId('lang-switcher')).toBeInTheDocument();
  });

  it('should render correctly without children', () => {
    const { container } = renderWithProviders(<Header />);

    expect(container.firstChild).toMatchSnapshot();
  });
});