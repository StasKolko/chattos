import { useTheme } from '@/shared/lib/theme/useTheme';
import { Button } from '@/shared/ui/Button';
import {
  ButtonSizes,
  ButtonVariantsBtnAndIcon
} from '@/shared/ui/Button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTranslation } from 'react-i18next';

export const ThemeModeSwitcher = ({ size, variant }:
  {
    size: ButtonSizes;
    variant: ButtonVariantsBtnAndIcon;
  }) => {
  const { setThemeMode, themeMode } = useTheme();
  const { t } = useTranslation();

  const toggleMode = () => {
    setThemeMode(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <Button
      dataTestId='theme-mode-switcher'
      variant={variant}
      size={size}
      option="icon"
      aria-label={t('Светлый или темный режим')}
      onClick={toggleMode}>
      {themeMode === 'dark'
        ? <MoonIcon />
        : <SunIcon />
      }
    </Button>
  );
};