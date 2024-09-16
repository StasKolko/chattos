import {
  actions,
  container,
  header,
  links,
  navigation
} from './Header.module.css';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

import { ThemeModeSwitcher } from '@/features/ThemeModeSwitcher';
import { ThemeColorSwitcher } from '@/features/ThemeColorSwitcher';
import { AppNav } from '@/features/AppNav';
import { LangSwitcher } from '@/features/LangSwitcher';

export const Header = () => {
  const size = 'md';
  const variant = 'outline';

  return (
    <header data-testid='header' className={header}>
      <div data-testid='header__container' className={container}>
        <nav data-testid='header__navigation' className={navigation}>
          <HamburgerMenuIcon data-testid='hamburger-menu-icon' />

          <AppNav className={links} />
        </nav>

        <div data-testid='header__actions' className={actions}>
          <ThemeColorSwitcher
            variant={variant}
            size={size} />
          <ThemeModeSwitcher
            variant={variant}
            size={size} />
          <LangSwitcher
            variant={variant}
            size={size}
          />
        </div>
      </div>
    </header>
  );
};