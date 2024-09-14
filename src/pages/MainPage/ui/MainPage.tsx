import { ErrorButton } from '@/features/ErrorButton';
import { useTranslation } from 'react-i18next';

export default function MainPage() {
  const { t } = useTranslation();

  return (
    <div>
      {t('Главная')}
      <ErrorButton />
    </div>
  );
}