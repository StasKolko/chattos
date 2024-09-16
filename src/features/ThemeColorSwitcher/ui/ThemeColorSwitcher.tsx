import { useTheme } from '@/shared/lib/theme/useTheme';
import { themeColors } from '@/shared/lib/theme/constants';
import { Button } from '@/shared/ui/Button';
import {
  ButtonSizes,
  ButtonVariantsBtnAndIcon
} from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';

export const ThemeColorSwitcher = ({ size, variant }:
  {
    size: ButtonSizes;
    variant: ButtonVariantsBtnAndIcon;
  }
) => {
  const { setThemeColor, themeColor } = useTheme();
  const { t } = useTranslation();

  const toggleColor = () => {
    setThemeColor(themeColors[
      (themeColors.indexOf(themeColor ?? '') + 1)
      % themeColors.length]);
  };

  return (
    <Button
      dataTestId='theme-color-switcher'
      variant={variant}
      size={size}
      option="icon"
      aria-label={t('Цвет темы сайта')}
      onClick={toggleColor}>
      <span style={{
        backgroundColor: 'var(--primary)',
        borderRadius: 'var(--radius)',
        width: '60%',
        height: '60%',
      }}></span>
    </Button>
  );
};