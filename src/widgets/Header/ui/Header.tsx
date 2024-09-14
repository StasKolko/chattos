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
    <header className={header}>
      <div className={container}>
        <nav className={navigation}>
          <HamburgerMenuIcon />

          <AppNav className={links} />
        </nav>

        <div className={actions}>
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