import { text } from './LangSwitcher.module.css';

import {
  Button,
  ButtonSizes,
  ButtonVariantsBtnAndIcon
} from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';

export const LangSwitcher = ({ size, variant }:
  {
    size: ButtonSizes;
    variant: ButtonVariantsBtnAndIcon;
  }
) => {
  const { i18n, t } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={text}
      variant={variant}
      size={size}
      option="icon"
      aria-label={t('Язык сайта')}
      onClick={toggleLang}
    >
      {t('язык')}
    </Button>
  );
};